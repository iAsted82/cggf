/**
 * Hook pour le système d'interface adaptative
 * Détecte et s'adapte au comportement utilisateur
 */

import { useState, useEffect, useCallback } from 'react';

export type UserProfile = 'novice' | 'intermediate' | 'expert' | 'efficient';

export interface BehaviorData {
  clickSpeed: number;
  hoverTime: number;
  scrollPattern: 'slow' | 'medium' | 'fast';
  featureUsage: string[];
  timeOnPage: number;
  navigationDepth: number;
  errorCount: number;
}

export interface AdaptiveState {
  userProfile: UserProfile;
  confidenceScore: number;
  adaptationLevel: number;
  behaviorData: BehaviorData;
  showGuidance: boolean;
  enableShortcuts: boolean;
  simplifyUI: boolean;
}

export function useAdaptiveUI() {
  const [adaptiveState, setAdaptiveState] = useState<AdaptiveState>({
    userProfile: 'novice',
    confidenceScore: 0,
    adaptationLevel: 0,
    behaviorData: {
      clickSpeed: 0,
      hoverTime: 0,
      scrollPattern: 'slow',
      featureUsage: [],
      timeOnPage: 0,
      navigationDepth: 0,
      errorCount: 0
    },
    showGuidance: true,
    enableShortcuts: false,
    simplifyUI: true
  });

  // Détection du comportement utilisateur
  const trackBehavior = useCallback((action: string, data: any) => {
    setAdaptiveState(prev => {
      const newBehaviorData = { ...prev.behaviorData };
      
      switch (action) {
        case 'click':
          newBehaviorData.clickSpeed = data.speed || 0;
          newBehaviorData.featureUsage = [...prev.behaviorData.featureUsage, data.feature].slice(-10);
          break;
        
        case 'hover':
          newBehaviorData.hoverTime = data.duration || 0;
          break;
        
        case 'scroll':
          newBehaviorData.scrollPattern = data.pattern || 'medium';
          break;
        
        case 'navigation':
          newBehaviorData.navigationDepth = Math.max(newBehaviorData.navigationDepth, data.depth || 0);
          break;
        
        case 'error':
          newBehaviorData.errorCount = prev.behaviorData.errorCount + 1;
          break;
        
        case 'time':
          newBehaviorData.timeOnPage = data.time || 0;
          break;
      }

      // Calcul du profil utilisateur basé sur le comportement
      const newProfile = calculateUserProfile(newBehaviorData);
      const newConfidence = calculateConfidence(newBehaviorData);
      
      return {
        ...prev,
        behaviorData: newBehaviorData,
        userProfile: newProfile,
        confidenceScore: newConfidence,
        adaptationLevel: Math.min(prev.adaptationLevel + 0.1, 3),
        showGuidance: newProfile === 'novice' || newProfile === 'intermediate',
        enableShortcuts: newProfile === 'expert' || newProfile === 'efficient',
        simplifyUI: newProfile === 'novice'
      };
    });
  }, []);

  // Calcul intelligent du profil utilisateur
  const calculateUserProfile = (behavior: BehaviorData): UserProfile => {
    let score = 0;
    
    // Vitesse de clic (expert = plus rapide)
    if (behavior.clickSpeed > 150) score += 2;
    else if (behavior.clickSpeed > 100) score += 1;
    
    // Temps de survol (expert = moins de temps)
    if (behavior.hoverTime < 500) score += 2;
    else if (behavior.hoverTime < 1000) score += 1;
    
    // Pattern de scroll
    if (behavior.scrollPattern === 'fast') score += 2;
    else if (behavior.scrollPattern === 'medium') score += 1;
    
    // Utilisation des fonctionnalités
    if (behavior.featureUsage.length > 7) score += 2;
    else if (behavior.featureUsage.length > 4) score += 1;
    
    // Profondeur de navigation
    if (behavior.navigationDepth > 4) score += 2;
    else if (behavior.navigationDepth > 2) score += 1;
    
    // Peu d'erreurs = expert
    if (behavior.errorCount === 0 && behavior.timeOnPage > 30000) score += 1;
    
    // Classification
    if (score >= 8) return 'efficient';
    if (score >= 6) return 'expert';
    if (score >= 3) return 'intermediate';
    return 'novice';
  };

  // Calcul de la confiance dans le profil
  const calculateConfidence = (behavior: BehaviorData): number => {
    const factors = [
      behavior.timeOnPage > 10000 ? 0.2 : 0,
      behavior.featureUsage.length > 3 ? 0.2 : 0,
      behavior.navigationDepth > 1 ? 0.2 : 0,
      behavior.clickSpeed > 0 ? 0.2 : 0,
      behavior.hoverTime > 0 ? 0.2 : 0
    ];
    
    return factors.reduce((sum, factor) => sum + factor, 0);
  };

  // Obtenir les recommandations d'interface
  const getUIRecommendations = () => {
    const { userProfile, confidenceScore } = adaptiveState;
    
    return {
      showTooltips: userProfile === 'novice' && confidenceScore > 0.3,
      enableAnimations: userProfile !== 'efficient',
      simplifyMenus: userProfile === 'novice' || userProfile === 'intermediate',
      showAdvancedFeatures: userProfile === 'expert' || userProfile === 'efficient',
      enableKeyboardShortcuts: userProfile === 'expert' || userProfile === 'efficient',
      suggestActions: userProfile === 'intermediate' && confidenceScore > 0.6,
      showProgress: userProfile === 'novice',
      enableBulkActions: userProfile === 'expert' || userProfile === 'efficient'
    };
  };

  // Initialisation avec données stockées
  useEffect(() => {
    const savedProfile = localStorage.getItem('adaptive-ui-profile');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setAdaptiveState(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn('Erreur lors du chargement du profil adaptatif');
      }
    }
  }, []);

  // Sauvegarde des données
  useEffect(() => {
    if (adaptiveState.confidenceScore > 0.3) {
      localStorage.setItem('adaptive-ui-profile', JSON.stringify(adaptiveState));
    }
  }, [adaptiveState]);

  return {
    adaptiveState,
    trackBehavior,
    getUIRecommendations,
    isReady: adaptiveState.confidenceScore > 0.3
  };
}