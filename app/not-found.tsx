/**
 * Page 404 - Page non trouvée
 * Gestion des erreurs de navigation
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo et Code d'erreur */}
          <div className="space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-3xl">GA</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-consulate-blue">
              404
            </h1>
          </div>

          {/* Message d'erreur */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              La page que vous recherchez n'existe pas ou a été déplacée. 
              Nos services consulaires restent disponibles pour vous accompagner.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-6 py-3 rounded-xl font-semibold"
              >
                <Home className="mr-2 h-5 w-5" />
                Retour à l'accueil
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.history.back()}
              className="border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white px-6 py-3 rounded-xl font-semibold"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Page précédente
            </Button>
          </div>

          {/* Liens utiles */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-consulate-blue mb-4">
              Liens utiles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link 
                href="/services-publics"
                className="text-consulate-blue hover:text-consulate-blue-light transition-colors"
              >
                Services consulaires
              </Link>
              <Link 
                href="/contact"
                className="text-consulate-blue hover:text-consulate-blue-light transition-colors"
              >
                Nous contacter
              </Link>
              <Link 
                href="/actualites"
                className="text-consulate-blue hover:text-consulate-blue-light transition-colors"
              >
                Actualités
              </Link>
              <Link 
                href="/services-publics/inscription"
                className="text-consulate-blue hover:text-consulate-blue-light transition-colors"
              >
                Inscription consulaire
              </Link>
            </div>
          </div>

          {/* Contact d'urgence */}
          <div className="text-sm text-gray-500">
            <p>En cas d'urgence consulaire :</p>
            <p className="font-semibold text-red-600">+33 1 89 71 92 99</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}