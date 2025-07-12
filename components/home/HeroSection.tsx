"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, FileText, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Text Content - Left Side */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glassmorphism rounded-3xl p-6 md:p-8 lg:p-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
              >
                Bienvenue au
                <span className="block text-consulate-yellow">
                  Consulat Général du Gabon
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed"
              >
                Message du Consul Général <strong>Jean-Rémy MANGANGA NZAMBA</strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 text-white/90 italic text-base md:text-lg leading-relaxed"
              >
                "Notre mission est de servir avec excellence la diaspora gabonaise en France, 
                en offrant des services consulaires modernes, efficaces et accessibles à tous. 
                Ensemble, renforçons les liens qui nous unissent à notre belle nation."
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-start"
              >
                <Link href="/services-publics/inscription">
                  <Button 
                    size="lg" 
                    className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <CreditCard className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    DEMANDER MA CARTE CONSULAIRE
                  </Button>
                </Link>
                <Link href="/services-publics">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-consulate-blue px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FileText className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    DÉCOUVRIR NOS SERVICES
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Content - Right Side */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-sm lg:max-w-xs xl:max-w-sm"
              style={{ marginLeft: '20px' }}
            >
              <div className="relative w-full aspect-[9/16] max-h-[400px] bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg">
                {/* Video Placeholder - Replace with actual video */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Services Consulaires</p>
                    <p className="text-sm opacity-90">Message du Consul Général</p>
                  </div>
                </div>
                
                {/* Actual Video - Uncomment and replace src when you have the video */}
                {/* 
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  controls
                  poster="/path-to-poster-image.jpg"
                >
                  <source src="/path-to-consul-video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-consulate-yellow/20 rounded-full blur-sm hidden xl:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-consulate-green/20 rounded-full blur-sm hidden xl:block"
      />
    </section>
  );
}