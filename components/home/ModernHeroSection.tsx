/**
 * Modern Hero Section - Design Premium Administratif
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ModernHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center modern-hero">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glassmorphism text-white text-sm font-medium"
              >
                <Shield className="h-4 w-4" />
                <span>Services Consulaires Digitalisés</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Excellence
                <span className="block font-semibold text-white">
                  Consulaire
                </span>
                <span className="block text-yellow-400 font-bold">
                  Modernisée
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-[1.7] text-white max-w-2xl font-medium"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                Une expérience consulaire repensée pour la diaspora gabonaise en France. 
                Services digitaux, procédures simplifiées, accompagnement personnalisé.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/services-publics/inscription">
                  <Button className="btn-accent min-h-[56px] px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 group">
                    Commencer maintenant
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services-publics">
                  <Button 
                    className="btn-secondary min-h-[56px] px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 border-2 border-white text-white backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    Découvrir nos services
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/30"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>15K+</div>
                  <div className="text-sm text-white font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Ressortissants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>24/7</div>
                  <div className="text-sm text-white font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>98%</div>
                  <div className="text-sm text-white font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Video/Visual Element */}
          <div className="lg:col-span-4 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-md"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </motion.div>
                    <p className="text-lg font-medium">Services Consulaires</p>
                    <p className="text-sm opacity-80">Découvrez l'excellence</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Communauté Active</div>
                    <div className="text-xs text-muted-foreground">15,247 membres</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}