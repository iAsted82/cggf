"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Video, FileImage, Download, HelpCircle, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';

const capsuleResources = [
  {
    icon: Video,
    title: "Vidéos explicatives",
    description: "Tutoriels vidéo pour vous guider dans vos démarches administratives",
    count: "12 vidéos",
    link: "/capsule/videos",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FileImage,
    title: "Infographies pédagogiques",
    description: "Schémas et graphiques pour comprendre les procédures",
    count: "8 infographies",
    link: "/capsule/infographies",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Download,
    title: "Documents téléchargeables",
    description: "Formulaires, guides et modèles à télécharger",
    count: "25 documents",
    link: "/capsule/documents",
    color: "from-green-500 to-green-600"
  },
  {
    icon: HelpCircle,
    title: "FAQ interactive",
    description: "Réponses aux questions les plus fréquentes",
    count: "50+ questions",
    link: "/capsule/faq",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Brain,
    title: "Quiz de sensibilisation",
    description: "Testez vos connaissances sur les procédures consulaires",
    count: "5 quiz",
    link: "/capsule/quiz",
    color: "from-purple-500 to-purple-600"
  }
];

export default function CapsulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Capsule' }
          ]} 
          className="mb-8"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-consulate-yellow to-yellow-500 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-consulate-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-consulate-blue">
              Capsule
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre centre de ressources pédagogiques pour maîtriser toutes vos démarches consulaires. 
            Apprenez à votre rythme avec nos contenus interactifs et pratiques.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capsuleResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link href={resource.link}>
                <Card className="h-full card-hover bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto mb-4 w-16 h-16 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center`}>
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-consulate-blue">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="bg-consulate-blue/10 rounded-lg p-3">
                      <span className="text-consulate-blue font-semibold">
                        {resource.count}
                      </span>
                    </div>
                    
                    <Button 
                      className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold transition-colors duration-300"
                    >
                      Découvrir
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-consulate-blue mb-4">
              Contenu recommandé
            </h2>
            <p className="text-gray-600">
              Commencez par ces ressources essentielles pour bien débuter vos démarches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10 rounded-lg">
              <Video className="h-12 w-12 text-consulate-blue mx-auto mb-4" />
              <h3 className="font-semibold text-consulate-blue mb-2">
                Guide de première inscription
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Vidéo de 10 minutes pour comprendre les étapes d'inscription
              </p>
              <Button size="sm" variant="outline" className="border-consulate-blue text-consulate-blue">
                Regarder
              </Button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10 rounded-lg">
              <FileImage className="h-12 w-12 text-consulate-blue mx-auto mb-4" />
              <h3 className="font-semibold text-consulate-blue mb-2">
                Schéma des démarches
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Infographie interactive des procédures administratives
              </p>
              <Button size="sm" variant="outline" className="border-consulate-blue text-consulate-blue">
                Voir
              </Button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10 rounded-lg">
              <HelpCircle className="h-12 w-12 text-consulate-blue mx-auto mb-4" />
              <h3 className="font-semibold text-consulate-blue mb-2">
                Questions fréquentes
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Les 10 questions les plus posées et leurs réponses
              </p>
              <Button size="sm" variant="outline" className="border-consulate-blue text-consulate-blue">
                Consulter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}