/**
 * Contexte pour le système d'interface adaptative
 * Partage l'état adaptatif dans toute l'application
 */

"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useAdaptiveUI, AdaptiveState, UserProfile } from '@/hooks/useAdaptiveUI';

interface AdaptiveUIContextType {
  adaptiveState: AdaptiveState;
  trackBehavior: (action: string, data: any) => void;
  getUIRecommendations: () => {
    showTooltips: boolean;
    enableAnimations: boolean;
    simplifyMenus: boolean;
    showAdvancedFeatures: boolean;
    enableKeyboardShortcuts: boolean;
    suggestActions: boolean;
    showProgress: boolean;
    enableBulkActions: boolean;
  };
  isReady: boolean;
}

const AdaptiveUIContext = createContext<AdaptiveUIContextType | undefined>(undefined);

export function AdaptiveUIProvider({ children }: { children: ReactNode }) {
  const adaptiveUI = useAdaptiveUI();

  return (
    <AdaptiveUIContext.Provider value={adaptiveUI}>
      {children}
    </AdaptiveUIContext.Provider>
  );
}

export function useAdaptiveUIContext() {
  const context = useContext(AdaptiveUIContext);
  if (context === undefined) {
    throw new Error('useAdaptiveUIContext doit être utilisé dans AdaptiveUIProvider');
  }
  return context;
}

// Hook utilitaire pour les composants
export function useAdaptiveComponent() {
  const { adaptiveState, trackBehavior, getUIRecommendations, isReady } = useAdaptiveUIContext();
  const recommendations = getUIRecommendations();
  
  return {
    userProfile: adaptiveState.userProfile,
    confidence: adaptiveState.confidenceScore,
    track: trackBehavior,
    recommendations,
    isReady,
    // Helpers pour les composants
    shouldShowGuidance: recommendations.showTooltips,
    shouldSimplify: recommendations.simplifyMenus,
    shouldEnableShortcuts: recommendations.enableKeyboardShortcuts,
    shouldAnimate: recommendations.enableAnimations
  };
}