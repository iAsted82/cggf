/**
 * Composant invisible qui track le comportement utilisateur
 */

"use client";

import { useEffect, useRef } from 'react';
import { useAdaptiveComponent } from '@/contexts/AdaptiveUIContext';

export function AdaptiveBehaviorTracker() {
  const { track, userProfile } = useAdaptiveComponent();
  const startTime = useRef(Date.now());
  const clickTimes = useRef<number[]>([]);
  const scrollData = useRef({ count: 0, speed: 0 });

  useEffect(() => {
    let timeOnPageInterval: NodeJS.Timeout;

    // Tracking du temps sur la page
    timeOnPageInterval = setInterval(() => {
      const timeOnPage = Date.now() - startTime.current;
      track('time', { time: timeOnPage });
    }, 5000);

    // Tracking des clics
    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      clickTimes.current.push(now);
      
      // Garder seulement les 5 derniers clics
      if (clickTimes.current.length > 5) {
        clickTimes.current.shift();
      }
      
      // Calculer la vitesse de clic
      if (clickTimes.current.length > 1) {
        const intervals = clickTimes.current.slice(1).map((time, i) => 
          time - clickTimes.current[i]
        );
        const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
        
        track('click', { 
          speed: avgInterval,
          feature: (e.target as HTMLElement)?.dataset?.feature || 'unknown',
          position: { x: e.clientX, y: e.clientY }
        });
      }
    };

    // Tracking du scroll
    let lastScrollTime = Date.now();
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const now = Date.now();
      const currentY = window.scrollY;
      const timeDiff = now - lastScrollTime;
      const scrollDiff = Math.abs(currentY - lastScrollY);
      
      if (timeDiff > 0) {
        const scrollSpeed = scrollDiff / timeDiff;
        scrollData.current.count++;
        scrollData.current.speed = scrollSpeed;
        
        let pattern: 'slow' | 'medium' | 'fast' = 'medium';
        if (scrollSpeed < 0.5) pattern = 'slow';
        else if (scrollSpeed > 2) pattern = 'fast';
        
        track('scroll', { 
          pattern,
          speed: scrollSpeed,
          direction: currentY > lastScrollY ? 'down' : 'up'
        });
      }
      
      lastScrollTime = now;
      lastScrollY = currentY;
    };

    // Tracking des hovers
    const handleMouseEnter = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (element.dataset.feature) {
        const hoverStart = Date.now();
        
        const handleMouseLeave = () => {
          const hoverDuration = Date.now() - hoverStart;
          track('hover', { 
            duration: hoverDuration,
            feature: element.dataset.feature
          });
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
        
        element.addEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Tracking de la navigation
    const handleNavigation = () => {
      const currentPath = window.location.pathname;
      const depth = currentPath.split('/').length - 1;
      
      track('navigation', { 
        depth,
        path: currentPath,
        referrer: document.referrer
      });
    };

    // Tracking des erreurs
    const handleError = (e: ErrorEvent) => {
      track('error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
      });
    };

    // Écouter les événements
    document.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('error', handleError);

    // Navigation initiale
    handleNavigation();

    return () => {
      clearInterval(timeOnPageInterval);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('error', handleError);
    };
  }, [track]);

  // Feedback visuel discret du profil détecté
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {userProfile !== 'novice' && (
        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-600 shadow-lg border">
          UI adaptatif: {userProfile}
        </div>
      )}
    </div>
  );
}