"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HorizontalLayoutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="w-full">
        {/* Mobile Layout (max-width: 767px) */}
        <div className="block md:hidden w-[95%] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-consulate-blue leading-tight">
                Services Consulaires
                <span className="block text-consulate-yellow">Modernes</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Découvrez nos services consulaires digitalisés pour une expérience 
                simplifiée et efficace au service de la diaspora gabonaise.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <p className="text-base text-consulate-blue font-medium mb-3">
                  "Notre engagement : servir avec excellence"
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Le Consulat Général du Gabon en France s'engage à fournir des services 
                  consulaires de qualité, accessibles et adaptés aux besoins de notre 
                  communauté.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/services-publics/inscription" className="w-full">
                <Button 
                  size="lg" 
                  className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-xl text-base transition-all duration-300 transform active:scale-95 shadow-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                </Button>
              </Link>
              <Link href="/services-publics" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white px-6 py-4 rounded-xl text-base transition-all duration-300 transform active:scale-95 shadow-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Nos services
                </Button>
              </Link>
            </div>

            {/* Mobile Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-xs mx-auto"
            >
              <div className="relative w-full aspect-[9/16] max-h-80 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold">Services Consulaires</p>
                    <p className="text-xs opacity-90">Découvrez nos services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet Layout - ALIGNEMENT HORIZONTAL OPTIMISÉ (768px - 1023px) */}
        <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-center min-h-[70vh]">
            {/* Texte à gauche - 8 colonnes */}
            <div className="col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-consulate-blue leading-tight">
                    Services Consulaires
                    <span className="block text-consulate-yellow">Modernes</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Découvrez nos services consulaires digitalisés pour une expérience 
                    simplifiée et efficace au service de la diaspora gabonaise.
                  </p>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                    <p className="text-lg text-consulate-blue font-medium mb-3">
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services-publics/inscription">
                    <Button 
                      size="lg" 
                      className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Demander ma carte
                    </Button>
                  </Link>
                  <Link href="/services-publics">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Nos services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Vidéo à droite - 4 colonnes avec marge */}
            <div className="col-span-4 flex justify-end">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm"
                style={{ marginLeft: '20px' }}
              >
                <div className="relative w-full aspect-[9/16] max-h-[400px] bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                        <Play className="h-7 w-7 text-white" />
                      </div>
                      <p className="text-lg font-semibold">Services Consulaires</p>
                      <p className="text-sm opacity-90">Découvrez nos services</p>
                    </div>
                  </div>
                  {/* Video element - remplacez le src par votre vraie vidéo */}
                  {/* 
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    muted
                    poster="/path-to-poster-image.jpg"
                  >
                    <source src="/path-to-video.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos HTML5.
                  </video>
                  */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (min-width: 1024px) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Texte à gauche */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-5xl xl:text-6xl font-bold text-consulate-blue leading-tight">
                    Services Consulaires
                    <span className="block text-consulate-yellow">Modernes</span>
                  </h2>
                  
                  <p className="text-2xl text-gray-600 leading-relaxed">
                    Découvrez nos services consulaires digitalisés pour une expérience 
                    simplifiée et efficace au service de la diaspora gabonaise.
                  </p>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-lg">
                    <p className="text-xl text-consulate-blue font-medium mb-4">
                      "Notre engagement : servir avec excellence"
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Le Consulat Général du Gabon en France s'engage à fournir des services 
                      consulaires de qualité, accessibles et adaptés aux besoins de notre 
                      communauté. Grâce à la digitalisation, nous simplifions vos démarches 
                      tout en maintenant la sécurité et la conformité réglementaire.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
            </div>

            {/* Vidéo à droite */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm lg:max-w-xs xl:max-w-sm"
                style={{ marginLeft: '20px' }}
              >
                <div className="relative w-full aspect-[9/16] max-h-[400px] bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-lg font-semibold">Services Consulaires</p>
                      <p className="text-sm opacity-90">Découvrez nos services</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}