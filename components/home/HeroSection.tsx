"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, GraduationCap, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {!showVideo ? (
          <div className="absolute inset-0 bg-gradient-to-br from-consulate-blue via-consulate-blue-light to-consulate-green">
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(true)}
                className="bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Play className="h-16 w-16 text-white ml-2" />
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Présentation du Consulat Général du Gabon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Services Consulaires
                <span className="block text-consulate-yellow text-3xl md:text-4xl">
                  Modernes & Efficaces
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl leading-relaxed mb-8 text-white/90"
              >
                Découvrez nos services consulaires digitalisés et nos ressources pédagogiques 
                pour simplifier vos démarches administratives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/services-consulaires">
                  <Button 
                    size="lg" 
                    className="bg-consulate-blue hover:bg-consulate-blue-light text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Nos Services
                  </Button>
                </Link>
                <Link href="/demarches-administratives">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-consulate-blue px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Démarches
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Capsule Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glassmorphism rounded-2xl p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="space-y-4"
              >
                <div className="w-20 h-20 bg-consulate-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-consulate-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Capsule</h3>
                <p className="text-white/90 mb-6">
                  Ressources pédagogiques et guides pratiques pour vos démarches
                </p>
                <Link href="/capsule">
                  <Button 
                    size="lg" 
                    className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Découvrir Capsule
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}