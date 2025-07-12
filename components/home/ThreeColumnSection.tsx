"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, CreditCard, FileText } from 'lucide-react';
import Link from 'next/link';

export function ThreeColumnSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Colonne de gauche - Vidéo Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] bg-gradient-to-br from-consulate-blue to-consulate-green rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for video - replace with actual video */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Services Consulaires</p>
                  <p className="text-sm opacity-90">Découvrez nos services</p>
                </div>
              </div>
              {/* Video element - uncomment and replace src when you have actual video */}
              {/* 
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/path-to-poster-image.jpg"
              >
                <source src="/path-to-video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
              </video>
              */}
            </div>
          </motion.div>

          {/* Colonne centrale - Texte Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 text-center space-y-8 px-4 lg:px-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-consulate-blue leading-tight">
                Services Consulaires
                <span className="block text-consulate-yellow">Modernes</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Découvrez nos services consulaires digitalisés pour une expérience 
                simplifiée et efficace au service de la diaspora gabonaise.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <p className="text-lg text-consulate-blue font-medium mb-4">
                  "Notre engagement : servir avec excellence"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le Consulat Général du Gabon en France s'engage à fournir des services 
                  consulaires de qualité, accessibles et adaptés aux besoins de notre 
                  communauté. Grâce à la digitalisation, nous simplifions vos démarches 
                  tout en maintenant la sécurité et la conformité réglementaire.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services-publics/inscription">
                <Button 
                  size="lg" 
                  className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                </Button>
              </Link>
              <Link href="/services-publics">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Nos services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Colonne de droite - Vidéo Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] bg-gradient-to-br from-consulate-green to-consulate-yellow rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for video - replace with actual video */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Diaspora Gabonaise</p>
                  <p className="text-sm opacity-90">Restez connectés</p>
                </div>
              </div>
              {/* Video element - uncomment and replace src when you have actual video */}
              {/* 
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/path-to-poster-image.jpg"
              >
                <source src="/path-to-video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
              </source>
              </video>
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}