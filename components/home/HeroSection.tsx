"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, FileText } from 'lucide-react';
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

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
        
        {/* Left Video Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block lg:col-span-2"
        >
          <div className="glassmorphism rounded-2xl p-4 h-96">
            <div className="bg-black/20 rounded-xl h-full flex items-center justify-center">
              <div className="text-center text-white/70">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Vidéo 1</p>
                <p className="text-xs opacity-75">Plan vertical</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Central Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 text-center"
        >
        <motion.div
          className="glassmorphism rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
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
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Message du Consul Général <strong>Jean-Rémy MANGANGA NZAMBA</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 text-white/90 italic text-lg leading-relaxed"
          >
            "Notre mission est de servir avec excellence la diaspora gabonaise en France, 
            en offrant des services consulaires modernes, efficaces et accessibles à tous. 
            Ensemble, renforçons les liens qui nous unissent à notre belle nation."
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services-publics/inscription">
              <Button 
                size="lg" 
                className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                DEMANDER MA CARTE CONSULAIRE
              </Button>
            </Link>
            <Link href="/services-publics">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-consulate-blue px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                DÉCOUVRIR NOS SERVICES
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        </motion.div>

        {/* Right Video Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block lg:col-span-2"
        >
          <div className="glassmorphism rounded-2xl p-4 h-96">
            <div className="bg-black/20 rounded-xl h-full flex items-center justify-center">
              <div className="text-center text-white/70">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Vidéo 2</p>
                <p className="text-xs opacity-75">Plan vertical</p>
              </div>
            </div>
          </div>
        </motion.div>

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
        className="absolute top-20 left-10 w-16 h-16 bg-consulate-yellow/20 rounded-full blur-sm hidden lg:block"
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
        className="absolute bottom-20 right-10 w-20 h-20 bg-consulate-green/20 rounded-full blur-sm hidden lg:block"
      />
    </section>
  );
}