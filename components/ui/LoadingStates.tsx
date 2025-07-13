/**
 * Loading States - Implémentation Elena (Ex-Meta)
 * States de chargement optimisés pour UX consulaire
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Clock, FileText, CreditCard, Shield } from 'lucide-react';

// Loading Spinner Adaptatif
export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  message 
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'consular' | 'minimal';
  message?: string;
}) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  };

  if (variant === 'minimal') {
    return (
      <Loader2 className={`${sizeClasses[size]} animate-spin text-consulate-blue`} />
    );
  }

  if (variant === 'consular') {
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-consulate-blue/20 rounded-full"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-consulate-blue border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-consulate-blue font-bold text-xs">GA</span>
          </div>
        </div>
        {message && (
          <p className="text-sm text-consulate-blue font-medium">{message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-consulate-blue`} />
      {message && (
        <span className="text-sm text-gray-600">{message}</span>
      )}
    </div>
  );
}

// Loading Skeleton pour contenu
export function LoadingSkeleton({ 
  type = 'default',
  count = 1 
}: {
  type?: 'default' | 'card' | 'form' | 'navigation' | 'article';
  count?: number;
}) {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <SkeletonByType key={i} type={type} />
  ));

  return <div className="space-y-4">{skeletons}</div>;
}

function SkeletonByType({ type }: { type: string }) {
  const baseClasses = "animate-pulse bg-gray-200 rounded";

  switch (type) {
    case 'card':
      return (
        <div className="border border-gray-200 rounded-xl p-6 space-y-4">
          <div className={`${baseClasses} h-12 w-12 rounded-full`} />
          <div className={`${baseClasses} h-6 w-3/4`} />
          <div className={`${baseClasses} h-4 w-full`} />
          <div className={`${baseClasses} h-4 w-2/3`} />
          <div className={`${baseClasses} h-10 w-full rounded-lg`} />
        </div>
      );

    case 'form':
      return (
        <div className="space-y-6">
          <div className={`${baseClasses} h-6 w-1/3`} />
          <div className={`${baseClasses} h-12 w-full rounded-lg`} />
          <div className={`${baseClasses} h-6 w-1/4`} />
          <div className={`${baseClasses} h-12 w-full rounded-lg`} />
          <div className={`${baseClasses} h-12 w-32 rounded-lg`} />
        </div>
      );

    case 'navigation':
      return (
        <div className="flex space-x-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={`${baseClasses} h-6 w-20`} />
          ))}
        </div>
      );

    case 'article':
      return (
        <div className="space-y-4">
          <div className={`${baseClasses} h-8 w-full`} />
          <div className={`${baseClasses} h-4 w-full`} />
          <div className={`${baseClasses} h-4 w-5/6`} />
          <div className={`${baseClasses} h-4 w-4/5`} />
          <div className={`${baseClasses} h-48 w-full rounded-lg`} />
        </div>
      );

    default:
      return <div className={`${baseClasses} h-4 w-full`} />;
  }
}

// Loading Page complète
export function LoadingPage({ message = "Chargement..." }: { message?: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <LoadingSpinner variant="consular" message={message} />
      </motion.div>
    </div>
  );
}

// Button Loading State
export function LoadingButton({ 
  isLoading, 
  children, 
  loadingText = "Traitement...",
  className = "",
  ...props 
}: {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <button
      className={`${className} ${isLoading ? 'cursor-not-allowed opacity-80' : ''}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

// Service-specific Loading States
export function ServiceLoadingState({ 
  service,
  message 
}: { 
  service: 'inscription' | 'documents' | 'appointment' | 'protection';
  message?: string;
}) {
  const serviceConfig = {
    inscription: {
      icon: CreditCard,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      defaultMessage: "Traitement de votre inscription..."
    },
    documents: {
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      defaultMessage: "Préparation de vos documents..."
    },
    appointment: {
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      defaultMessage: "Réservation de votre créneau..."
    },
    protection: {
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      defaultMessage: "Traitement de votre demande d'assistance..."
    }
  };

  const config = serviceConfig[service];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${config.bgColor} rounded-xl p-8 text-center`}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
        <Icon className={`h-8 w-8 ${config.color}`} />
      </motion.div>
      
      <div className="space-y-2">
        <LoadingSpinner size="sm" variant="minimal" />
        <p className={`text-lg font-semibold ${config.color}`}>
          {message || config.defaultMessage}
        </p>
        <p className="text-sm text-gray-600">
          Merci de patienter quelques instants
        </p>
      </div>
    </motion.div>
  );
}

// Progressive Loading avec étapes
export function ProgressiveLoading({ 
  steps,
  currentStep,
  className = "" 
}: {
  steps: string[];
  currentStep: number;
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center mb-6">
        <LoadingSpinner variant="consular" />
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              index === currentStep 
                ? 'bg-consulate-blue text-white' 
                : index < currentStep 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-500'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
              index === currentStep 
                ? 'bg-white text-consulate-blue' 
                : index < currentStep 
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-500'
            }`}>
              {index < currentStep ? '✓' : index + 1}
            </div>
            <span className="font-medium">{step}</span>
            {index === currentStep && (
              <Loader2 className="h-4 w-4 animate-spin ml-auto" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}