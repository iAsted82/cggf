"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreditCard, FileText, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HorizontalLayoutSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative section-spacing pearl-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="w-full">
        {/* Mobile Layout (max-width: 767px) */}
        <div className="block md:hidden w-[95%] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center content-spacing"
          >
            <div className="space-y-8">
              <h2 className="text-section text-primary leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Services Consulaires
                </motion.span>
                <motion.span 
                  className="block text-accent font-light"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Modernes
                </motion.span>
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-body-large"
              >
                Découvrez nos services consulaires digitalisés pour une expérience 
                simplifiée et efficace au service de la diaspora gabonaise.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(44, 62, 80, 0.15)"
                }}
                className="modern-card p-6 hover:shadow-2xl transition-all duration-500"
              >
                <p className="text-base text-primary font-medium mb-3">
                  "Notre engagement : servir avec excellence"
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Le Consulat Général du Gabon en France s'engage à fournir des services 
                  consulaires de qualité, accessibles et adaptés aux besoins de notre 
                  communauté.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/services-publics/inscription" className="w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-consulate-yellow to-yellow-500 hover:from-yellow-500 hover:to-consulate-yellow text-black font-semibold px-6 py-4 rounded-xl text-base transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services-publics" className="w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white px-6 py-4 rounded-xl text-base transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  >
                    {/* Slide effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-consulate-blue"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: -1 }}
                    />
                  <FileText className="mr-2 h-5 w-5" />
                  Nos services
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-xs mx-auto"
            >
              <motion.div 
                className="relative w-full aspect-[9/16] max-h-80 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(0, 63, 127, 0.3)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "rgba(255, 215, 0, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="h-6 w-6 text-white" />
                    </motion.div>
                    <p className="text-sm font-semibold">Services Consulaires</p>
                    <p className="text-xs opacity-90">Découvrez nos services</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet Layout - ALIGNEMENT HORIZONTAL OPTIMISÉ (768px - 1023px) */}
        <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center min-h-[70vh]">
            {/* Vidéo à gauche - 4 colonnes */}
            <div className="col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm"
              >
                <div className="relative w-full aspect-[9/16] h-full bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                        <Play className="h-7 w-7 text-white" />
                      </div>
                      <p className="text-lg font-semibold">Services Consulaires</p>
                      <p className="text-sm opacity-90">Découvrez nos services</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Texte à droite - 6 colonnes */}
            <div className="col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 h-full flex flex-col justify-center"
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
          </div>
        </div>

        {/* Desktop Layout (min-width: 1024px) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Vidéo à gauche */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm lg:max-w-xs xl:max-w-sm"
              >
                <div className="relative w-full aspect-[9/16] h-full bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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

            {/* Texte à droite */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 h-full flex flex-col justify-center"
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
          </div>
        </div>
      </div>
    </section>
  );
}