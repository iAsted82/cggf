/**
 * Tooltip adaptatif qui s'affiche selon le profil utilisateur
 */

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdaptiveComponent } from '@/contexts/AdaptiveUIContext';

interface AdaptiveTooltipProps {
  content: string;
  feature: string;
  children: React.ReactNode;
  delay?: number;
  priority?: 'low' | 'medium' | 'high';
}

export function AdaptiveTooltip({ 
  content, 
  feature, 
  children, 
  delay = 1000,
  priority = 'medium' 
}: AdaptiveTooltipProps) {
  const { shouldShowGuidance, track, userProfile, confidence } = useAdaptiveComponent();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Logique d'affichage adaptatif
  const shouldShow = () => {
    if (!shouldShowGuidance || hasShown) return false;
    if (userProfile === 'expert' || userProfile === 'efficient') return false;
    if (confidence < 0.2 && priority === 'low') return false;
    return true;
  };

  useEffect(() => {
    if (shouldShow()) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        track('tooltip_shown', { feature, priority });
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [shouldShowGuidance, feature, delay, priority, track]);

  const handleInteraction = () => {
    if (isVisible) {
      setIsVisible(false);
      setHasShown(true);
      track('tooltip_dismissed', { feature, method: 'interaction' });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setHasShown(true);
    track('tooltip_dismissed', { feature, method: 'manual' });
  };

  return (
    <div className="relative" onMouseEnter={handleInteraction} onClick={handleInteraction}>
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-consulate-blue text-white px-3 py-2 rounded-lg shadow-lg text-sm max-w-xs relative">
              {content}
              
              {/* Flèche */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-consulate-blue"></div>
              
              {/* Bouton de fermeture */}
              <button
                onClick={handleDismiss}
                className="absolute -top-1 -right-1 w-5 h-5 bg-white text-consulate-blue rounded-full text-xs flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}