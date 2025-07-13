/**
 * Fallback Components - Implémentation Viktor (Ex-NASA)
 * Graceful degradation pour services consulaires
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  WifiOff, 
  AlertTriangle, 
  Clock, 
  Phone,
  Mail,
  RefreshCw,
  ArrowRight,
  Calendar,
  FileText,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Fallback pour Service Indisponible
export function ServiceUnavailable({ 
  serviceName = "Service",
  reason = "maintenance",
  estimatedTime,
  alternatives = []
}: {
  serviceName?: string;
  reason?: 'maintenance' | 'overload' | 'error' | 'offline';
  estimatedTime?: string;
  alternatives?: Array<{ name: string; href: string; description: string }>;
}) {
  const reasonConfig = {
    maintenance: {
      icon: Clock,
      title: "Maintenance en cours",
      message: "Nous améliorons ce service pour mieux vous servir.",
      color: "blue"
    },
    overload: {
      icon: AlertTriangle,
      title: "Service temporairement surchargé",
      message: "Forte affluence actuellement. Réessayez dans quelques minutes.",
      color: "yellow"
    },
    error: {
      icon: AlertTriangle,
      title: "Difficulté technique",
      message: "Une erreur temporaire empêche l'accès à ce service.",
      color: "red"
    },
    offline: {
      icon: WifiOff,
      title: "Connexion requise",
      message: "Ce service nécessite une connexion internet.",
      color: "gray"
    }
  };

  const config = reasonConfig[reason];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <Card className="text-center">
        <CardHeader className="pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            config.color === 'blue' ? 'bg-blue-100' :
            config.color === 'yellow' ? 'bg-yellow-100' :
            config.color === 'red' ? 'bg-red-100' : 'bg-gray-100'
          }`}>
            <Icon className={`h-8 w-8 ${
              config.color === 'blue' ? 'text-blue-600' :
              config.color === 'yellow' ? 'text-yellow-600' :
              config.color === 'red' ? 'text-red-600' : 'text-gray-600'
            }`} />
          </div>
          
          <CardTitle className="text-xl font-bold">
            {config.title}
          </CardTitle>
          
          <p className="text-gray-600">
            {config.message}
          </p>
          
          {estimatedTime && (
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
              <Clock className="h-4 w-4 mr-1" />
              Retour estimé : {estimatedTime}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Alternatives disponibles */}
          {alternatives.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Services alternatifs disponibles
              </h4>
              <div className="space-y-2">
                {alternatives.map((alt, index) => (
                  <Link key={index} href={alt.href}>
                    <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <h5 className="font-medium text-consulate-blue">{alt.name}</h5>
                            <p className="text-sm text-gray-600">{alt.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Contact d'urgence */}
          <div className="bg-consulate-blue/5 rounded-lg p-4">
            <h4 className="font-semibold text-consulate-blue mb-2">
              Besoin d'aide immédiate ?
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-consulate-blue" />
                <span>Standard : +33 1 89 71 92 98</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-red-600 font-medium">Urgence : +33 1 89 71 92 99</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-consulate-blue" />
                <span>contact@consulatdugabon.fr</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={() => window.location.reload()}
            className="w-full mt-4"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Réessayer
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Fallback pour Connexion Perdue
export function OfflineNotice({ onRetry }: { onRetry?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-md"
    >
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <WifiOff className="h-5 w-5 text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">
                Connexion perdue
              </p>
              <p className="text-xs text-red-600">
                Vérifiez votre connexion internet
              </p>
            </div>
            {onRetry && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={onRetry}
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                <RefreshCw className="h-3 w-3" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Fallback pour Données Manquantes
export function EmptyState({ 
  icon: Icon = FileText,
  title = "Aucune donnée",
  description = "Aucun élément à afficher pour le moment.",
  action
}: {
  icon?: React.ComponentType<any>;
  title?: string;
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 px-6"
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-gray-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-sm mx-auto">
        {description}
      </p>
      
      {action && (
        action.href ? (
          <Link href={action.href}>
            <Button>
              {action.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button onClick={action.onClick}>
            {action.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )
      )}
    </motion.div>
  );
}

// Fallback pour Formulaire en Mode Dégradé
export function FormFallback({ 
  formType,
  onDownloadPDF 
}: { 
  formType: 'inscription' | 'documents' | 'appointment';
  onDownloadPDF?: () => void;
}) {
  const formConfig = {
    inscription: {
      icon: CreditCard,
      title: "Inscription Consulaire",
      description: "Formulaire d'inscription en mode simplifié",
      pdfName: "formulaire-inscription.pdf"
    },
    documents: {
      icon: FileText,
      title: "Demande de Documents",
      description: "Formulaire de demande d'actes",
      pdfName: "formulaire-documents.pdf"
    },
    appointment: {
      icon: Calendar,
      title: "Prise de Rendez-vous",
      description: "Demande de rendez-vous consulaire",
      pdfName: "formulaire-rdv.pdf"
    }
  };

  const config = formConfig[formType];
  const Icon = config.icon;

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-consulate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon className="h-6 w-6 text-consulate-blue" />
        </div>
        <CardTitle>{config.title}</CardTitle>
        <p className="text-sm text-gray-600">{config.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800">
                Mode dégradé activé
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Le formulaire en ligne n'est pas disponible. Utilisez le formulaire PDF.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={onDownloadPDF}
            className="w-full bg-consulate-blue hover:bg-consulate-blue-light"
          >
            <FileText className="mr-2 h-4 w-4" />
            Télécharger le formulaire PDF
          </Button>
          
          <div className="text-xs text-gray-500 text-center">
            Après remplissage, vous pouvez nous l'envoyer par email ou l'apporter au consulat.
          </div>
          
          <div className="border-t pt-3">
            <div className="text-center space-y-1">
              <p className="text-sm font-medium text-gray-700">Contact pour assistance</p>
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3" />
                  <span>+33 1 89 71 92 98</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-3 w-3" />
                  <span>contact@consulatdugabon.fr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Hook pour détecter la connexion
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = React.useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}