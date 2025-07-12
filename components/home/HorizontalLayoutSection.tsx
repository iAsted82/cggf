/**
 * Section Horizontale Révolutionnaire - Design Ultra Premium 2025
 * Architecture futuriste avec glassmorphism quantique
 */

"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreditCard, FileText, Play, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HorizontalLayoutSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-quantum-950 via-cyber-dark to-quantum-900 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,93,255,0.1)_0%,transparent_50%)]" />
        <div className="quantum-particles" />
      </div>

      {/* Revolutionary Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Mobile Layout (max-width: 767px) */}
        <div className="block md:hidden w-[95%] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl font-bold leading-tight font-['Space_Grotesk']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-quantum holographic">Services Consulaires</span>
                <motion.span 
                  className="block text-neon-blue text-quantum"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Révolutionnaires
                </motion.span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-quantum-300 leading-relaxed font-['Space_Grotesk']"
              >
                Découvrez l'avenir des services consulaires avec notre plateforme
                <span className="text-neon-blue"> ultra-moderne</span> et sécurisée.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-ultra-modern rounded-xl p-6 quantum-hover"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center mr-3">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-neon-blue font-medium font-['Space_Grotesk']">
                    Excellence Digitale
                  </p>
                </div>
                <p className="text-quantum-300 leading-relaxed text-sm font-['Space_Grotesk']">
                  Technologie quantique appliquée aux services publics pour une 
                  expérience utilisateur <span className="text-neon-green">révolutionnaire</span>.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/services-publics/inscription" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-quantum w-full font-['Space_Grotesk']"
                >
                  <span className="flex items-center justify-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Obtenir ma carte quantique
                  </span>
                </motion.button>
              </Link>
              <Link href="/services-publics" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-ultra-modern border border-neon-blue/30 text-neon-blue px-6 py-4 rounded-xl font-semibold transition-all duration-300 font-['Space_Grotesk']"
                >
                  <span className="flex items-center justify-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Explorer les services
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Futuristic Video Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-xs mx-auto"
            >
              <div className="card-futuristic aspect-[9/16] max-h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-quantum-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-3 mx-auto"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </motion.div>
                    <p className="text-sm font-semibold font-['Space_Grotesk'] text-quantum">Innovation</p>
                    <p className="text-xs opacity-90 text-neon-blue">Services Quantiques</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout (min-width: 1024px) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Futuristic Video */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm lg:max-w-xs xl:max-w-sm"
              >
                <div className="card-futuristic aspect-[9/16] h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-quantum-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-4 mx-auto"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)"
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </motion.div>
                      <p className="text-lg font-semibold font-['Space_Grotesk'] text-quantum">Innovation Consulaire</p>
                      <p className="text-sm text-neon-blue">Technologie Quantique</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Revolutionary Content */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 h-full flex flex-col justify-center"
                style={{ marginLeft: '20px' }}
              >
                <div className="space-y-6">
                  <motion.h2 
                    className="text-5xl xl:text-6xl font-bold leading-tight font-['Space_Grotesk']"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="holographic">Services Consulaires</span>
                    <motion.span 
                      className="block text-neon-blue text-quantum"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Révolutionnaires
                    </motion.span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-2xl text-quantum-300 leading-relaxed font-['Space_Grotesk']"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Découvrez l'avenir des services consulaires avec notre plateforme
                    <span className="text-neon-blue"> ultra-moderne</span> alimentée par l'IA.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="glass-ultra-modern rounded-xl p-8 quantum-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center mr-4">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-xl text-neon-blue font-medium font-['Space_Grotesk']">
                        Excellence Quantique
                      </p>
                    </div>
                    <p className="text-lg text-quantum-300 leading-relaxed font-['Space_Grotesk']">
                      Nos services consulaires intègrent les dernières innovations technologiques 
                      pour une expérience utilisateur <span className="text-neon-green">sans précédent</span>. 
                      Sécurité quantique, IA prédictive et interface holographique.
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Link href="/services-publics/inscription">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-quantum font-['Space_Grotesk']"
                    >
                      <span className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Obtenir ma carte quantique
                      </span>
                    </motion.button>
                  </Link>
                  <Link href="/services-publics">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-ultra-modern border border-neon-blue/30 text-neon-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 font-['Space_Grotesk']"
                    >
                      <span className="flex items-center">
                        <Shield className="mr-2 h-5 w-5" />
                        Explorer l'écosystème
                      </span>
                    </motion.button>
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