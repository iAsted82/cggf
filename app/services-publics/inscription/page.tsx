/**
 * Page Inscription Consulaire - Demande de carte consulaire
 * Accessible via /services-publics/inscription
 */

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, CheckCircle, AlertCircle, FileText, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const requiredDocuments = [
  "Passeport gabonais valide",
  "Justificatif de domicile en France",
  "2 photos d'identité récentes",
  "Copie de la carte de séjour (si applicable)",
  "Formulaire de demande complété"
];

const steps = [
  {
    step: 1,
    title: "Préparer les documents",
    description: "Rassemblez tous les documents requis",
    icon: FileText
  },
  {
    step: 2,
    title: "Prendre rendez-vous",
    description: "Réservez un créneau en ligne",
    icon: Calendar
  },
  {
    step: 3,
    title: "Déposer la demande",
    description: "Présentez-vous au consulat avec vos documents",
    icon: CreditCard
  },
  {
    step: 4,
    title: "Récupérer la carte",
    description: "Collectez votre carte consulaire",
    icon: CheckCircle
  }
];

export default function InscriptionPage() {
  const [formDownloaded, setFormDownloaded] = useState(false);

  const handleDownloadForm = () => {
    // Simuler le téléchargement du formulaire
    setFormDownloaded(true);
    setTimeout(() => setFormDownloaded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-consulate-blue mb-6">
              Inscription Consulaire
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez votre carte consulaire digitale en quelques étapes simples
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-consulate-blue text-center mb-12">
            Processus d'inscription
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-consulate-blue rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-consulate-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-black">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-consulate-blue mb-6">
                Documents requis
              </h2>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Important</h4>
                    <p className="text-blue-700 text-sm">
                      Tous les documents doivent être originaux accompagnés d'une photocopie.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Télécharger le formulaire</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Téléchargez et complétez le formulaire de demande avant votre visite.
                  </p>
                  
                  <Button 
                    onClick={handleDownloadForm}
                    className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold"
                    disabled={formDownloaded}
                  >
                    {formDownloaded ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Formulaire téléchargé
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger le formulaire
                      </>
                    )}
                  </Button>
                  
                  <div className="text-sm text-gray-500">
                    Format PDF - 2.3 MB
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Prendre rendez-vous</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Réservez votre créneau pour déposer votre demande.
                  </p>
                  <Link href="/rendez-vous">
                    <Button className="w-full bg-consulate-blue hover:bg-consulate-blue-light text-white">
                      <Calendar className="mr-2 h-4 w-4" />
                      Réserver un créneau
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}