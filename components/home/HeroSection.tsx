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
      <div className="relative z-10 w-full">
        {/* Mobile Layout (max-width: 767px) */}
        <div className="block lg:hidden w-[95%] mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-2xl p-6 mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-4 leading-tight"
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
              className="text-base text-white/90 mb-4 leading-relaxed"
            >
              Message du Consul Général <strong>Jean-Rémy MANGANGA NZAMBA</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 text-white/90 italic text-sm leading-relaxed"
            >
              "Notre mission est de servir avec excellence la diaspora gabonaise en France, 
              en offrant des services consulaires modernes, efficaces et accessibles à tous."
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-3"
            >
              <Link href="/services-publics/inscription" className="w-full">
                <Button 
                  size="lg" 
                  className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-xl text-base transition-all duration-300 transform active:scale-95 shadow-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  DEMANDER MA CARTE
                </Button>
              </Link>
              <Link href="/services-publics" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-white text-white hover:bg-white hover:text-consulate-blue px-6 py-4 rounded-xl text-base transition-all duration-300 transform active:scale-95 shadow-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  NOS SERVICES
                </Button>
              </Link>
            </motion.div>
          </motion.div>

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
                  <p className="text-xs opacity-90">Message du Consul</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden lg:hidden md:block w-[90%] mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center min-h-[80vh]">
            <div className="col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glassmorphism rounded-3xl p-8"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
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
                  className="text-lg text-white/90 mb-6 leading-relaxed"
                >
                  Message du Consul Général <strong>Jean-Rémy MANGANGA NZAMBA</strong>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 text-white/90 italic text-base leading-relaxed"
                >
                  "Notre mission est de servir avec excellence la diaspora gabonaise en France, 
                  en offrant des services consulaires modernes, efficaces et accessibles à tous. 
                  Ensemble, renforçons les liens qui nous unissent à notre belle nation."
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/services-publics/inscription">
                    <Button 
                      size="lg" 
                      className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      DEMANDER MA CARTE
                    </Button>
                  </Link>
                  <Link href="/services-publics">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-consulate-blue px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      NOS SERVICES
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm"
              >
                <div className="relative w-full aspect-[9/16] max-h-96 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                        <Play className="h-7 w-7 text-white" />
                      </div>
                      <p className="text-lg font-semibold">Services Consulaires</p>
                      <p className="text-sm opacity-90">Message du Consul</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (min-width: 1024px) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glassmorphism rounded-3xl p-8 lg:p-10"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
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
                  className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed"
                >
                  Message du Consul Général <strong>Jean-Rémy MANGANGA NZAMBA</strong>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 text-white/90 italic text-lg leading-relaxed"
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
            </div>

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
                      <p className="text-sm opacity-90">Message du Consul Général</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Desktop Only */}
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