/**
 * Error Boundary Consulaire - Protection contre les crashes
 * Implémentation Viktor (Ex-NASA) - Fault Tolerance Pattern
 */

"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  level?: 'critical' | 'section' | 'component';
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorCount: number;
  errorId: string;
}

export class ConsularErrorBoundary extends Component<Props, State> {
  private retryTimeouts: NodeJS.Timeout[] = [];

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorCount: 0,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Increment error count
    this.setState(prevState => ({
      errorCount: prevState.errorCount + 1
    }));

    // Log error with context
    const errorData = {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      level: this.props.level || 'component',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Consular Error Boundary');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Data:', errorData);
      console.groupEnd();
    }

    // TODO: Send to monitoring service (Sentry, DataDog, etc.)
    // errorReporter.log(errorData);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined
    });
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorCount: 0,
      errorId: ''
    });
  };

  componentWillUnmount() {
    // Clear any pending timeouts
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Escalation strategy based on error count
      if (this.state.errorCount >= 3) {
        return (
          <CriticalErrorFallback 
            errorId={this.state.errorId}
            onReset={this.handleReset}
          />
        );
      }

      // Standard error fallback based on level
      const level = this.props.level || 'component';
      
      switch (level) {
        case 'critical':
          return (
            <CriticalErrorFallback 
              errorId={this.state.errorId}
              onReset={this.handleReset}
            />
          );
        
        case 'section':
          return (
            <SectionErrorFallback 
              errorId={this.state.errorId}
              onRetry={this.handleRetry}
              errorCount={this.state.errorCount}
            />
          );
        
        default:
          return (
            <ComponentErrorFallback 
              errorId={this.state.errorId}
              onRetry={this.handleRetry}
            />
          );
      }
    }

    return this.props.children;
  }
}

// Critical Error Fallback - Full page replacement
function CriticalErrorFallback({ errorId, onReset }: { errorId: string; onReset: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Service Temporairement Indisponible
        </h1>
        
        <p className="text-gray-600 mb-6">
          Nos services consulaires rencontrent une difficulté technique. 
          Veuillez nous excuser pour cette interruption.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={onReset}
            className="w-full bg-consulate-blue hover:bg-consulate-blue-light text-white"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Réessayer
          </Button>
          
          <Link href="/" className="block">
            <Button variant="outline" className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500 mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="font-medium">Assistance d'urgence :</p>
            <p className="flex items-center justify-center mt-1">
              <Phone className="h-4 w-4 mr-1" />
              +33 1 89 71 92 99
            </p>
            <p className="text-xs mt-2">ID: {errorId}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Section Error Fallback - Replace section only
function SectionErrorFallback({ 
  errorId, 
  onRetry, 
  errorCount 
}: { 
  errorId: string; 
  onRetry: () => void; 
  errorCount: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 m-4"
    >
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Section temporairement indisponible
          </h3>
          <p className="text-yellow-700 mb-4">
            Cette section rencontre une difficulté technique. Vous pouvez réessayer 
            ou continuer votre navigation sur d'autres services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={onRetry}
              size="sm"
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Réessayer {errorCount > 1 && `(${errorCount}/3)`}
            </Button>
            
            <Link href="/services-publics">
              <Button variant="outline" size="sm">
                Voir autres services
              </Button>
            </Link>
          </div>
          
          <div className="text-xs text-yellow-600 mt-3">
            ID: {errorId}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Component Error Fallback - Minimal disruption
function ComponentErrorFallback({ 
  errorId, 
  onRetry 
}: { 
  errorId: string; 
  onRetry: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
    >
      <AlertTriangle className="h-5 w-5 text-gray-500 mx-auto mb-2" />
      <p className="text-sm text-gray-600 mb-3">
        Erreur de chargement
      </p>
      <Button 
        onClick={onRetry}
        size="sm"
        variant="outline"
        className="text-xs"
      >
        <RefreshCw className="mr-1 h-3 w-3" />
        Réessayer
      </Button>
      <div className="text-xs text-gray-400 mt-2">
        {errorId}
      </div>
    </motion.div>
  );
}

// Hook pour utilisation simple
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const throwError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  if (error) {
    throw error;
  }

  return throwError;
}