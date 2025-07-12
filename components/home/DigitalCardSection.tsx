/**
 * Section Carte Digitale Ultra Premium - Design Quantique 2025
 * Interface holographique avec effets révolutionnaires
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Check, Smartphone, Globe, Clock, Shield, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const advantages = [
  {
    icon: Smartphone,
    title: "Interface Holographique",
    description: "Accès via réalité augmentée et contrôle gestuel",
    color: "from-neon-blue to-cyan-500"
  },
  {
    icon: Globe,
    title: "Réseau Quantique 24/7",
    description: "Connectivité instantanée partout dans l'univers",
    color: "from-neon-purple to-violet-500"
  },
  {
    icon: Clock,
    title: "Traitement Instantané",
    description: "IA quantique pour validation en nanoseconde",
    color: "from-neon-green to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cryptage Quantique",
    description: "Sécurité inviolable avec blockchain neural",
    color: "from-neon-pink to-rose-500"
  }
];

export function DigitalCardSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-dark via-quantum-950 to-cyber-medium relative overflow-hidden">
      {/* Quantum Environment */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,93,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Floating Data Points */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-neon-purple rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 w-full">
        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm border border-neon-blue/20 rounded-full px-6 py-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="h-5 w-5 text-neon-blue" />
                  <span className="text-neon-blue font-medium font-['Space_Grotesk']">Quantum Identity</span>
                </motion.div>

                <h2 className="text-4xl font-bold mb-4 font-['Space_Grotesk']">
                  <span className="holographic">Votre Identité</span>
                  <span className="block text-neon-blue text-quantum">Quantique</span>
                </h2>
                <p className="text-xl text-quantum-300 leading-relaxed font-['Space_Grotesk']">
                  Révolutionnez votre expérience consulaire avec notre carte d'identité
                  <span className="text-neon-blue"> holographique</span> ultra-sécurisée.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-ultra-modern p-6 rounded-xl quantum-hover group"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${advantage.color} rounded-xl opacity-50 blur-md`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        />
                        <advantage.icon className="h-6 w-6 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-quantum mb-2 font-['Space_Grotesk'] group-hover:text-neon-blue transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-sm text-quantum-300 font-['Space_Grotesk'] group-hover:text-quantum-200 transition-colors">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/services-publics/inscription">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-quantum font-['Space_Grotesk']"
                  >
                    <span className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Générer mon identité quantique
                      <Sparkles className="ml-2 h-4 w-4" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative max-w-sm">
                {/* Holographic Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  whileHover={{ 
                    rotateY: 15,
                    rotateX: 10,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                  className="card-futuristic p-8 transform-gpu perspective-1000 relative overflow-hidden"
                >
                  {/* Quantum Data Streams */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="text-white space-y-6 relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold font-['Space_Grotesk'] holographic">QUANTUM CARD</h3>
                        <p className="text-sm opacity-90 text-neon-blue font-['JetBrains_Mono']">République Gabonaise</p>
                      </div>
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center relative overflow-hidden"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(0,212,255,0.3)",
                            "0 0 30px rgba(139,93,255,0.5)",
                            "0 0 20px rgba(0,212,255,0.3)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <span className="text-white font-bold text-lg font-['Space_Grotesk']">QA</span>
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs opacity-75 text-neon-blue font-['JetBrains_Mono']">QUANTUM ID</p>
                        <motion.p 
                          className="font-semibold font-['JetBrains_Mono'] text-quantum"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(0,212,255,0.5)",
                              "0 0 20px rgba(139,93,255,0.7)",
                              "0 0 10px rgba(0,212,255,0.5)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          MANGANGA Jean-Pierre
                        </motion.p>
                      </div>
                      <div>
                        <p className="text-xs opacity-75 text-neon-blue font-['JetBrains_Mono']">NEURAL HASH</p>
                        <motion.p 
                          className="font-mono font-['JetBrains_Mono'] text-sm text-neon-green"
                          animate={{
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        >
                          QX7K-9F2M-8N5P-4J1L
                        </motion.p>
                      </div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-75 text-neon-blue font-['JetBrains_Mono']">QUANTUM EXPIRY</p>
                        <p className="font-semibold font-['JetBrains_Mono'] text-quantum">∞ / 2099</p>
                      </div>
                      <motion.div 
                        className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <CreditCard className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Quantum Particles */}
                  <div className="quantum-particles" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}