/**
 * Section Services Ultra Premium - Design Révolutionnaire 2025
 * Interface quantique avec micro-interactions avancées
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  FileText, 
  Users, 
  Baby, 
  Shield, 
  Plane,
  Sparkles,
  Zap,
  Bot,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Heart,
    title: "Unions Quantiques",
    description: "Célébration et officialisation des mariages avec certification blockchain",
    href: "/services-publics/mariages",
    color: "from-pink-500 to-red-500",
    glow: "shadow-pink-500/25"
  },
  {
    icon: FileText,
    title: "Documents IA",
    description: "Génération automatique d'actes avec validation par intelligence artificielle",
    href: "/services-publics/etat-civil",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-cyan-500/25"
  },
  {
    icon: Users,
    title: "Réseau Social Consulaire",
    description: "Plateforme communautaire sécurisée pour la diaspora gabonaise",
    href: "/services-publics/etat-civil",
    color: "from-purple-500 to-violet-500",
    glow: "shadow-violet-500/25"
  },
  {
    icon: Baby,
    title: "Naissances Connectées",
    description: "Enregistrement biométrique et certificats numériques infalsifiables",
    href: "/services-publics/etat-civil",
    color: "from-green-500 to-emerald-500",
    glow: "shadow-emerald-500/25"
  },
  {
    icon: Shield,
    title: "Protection Quantique",
    description: "Assistance 24/7 avec géolocalisation et intervention d'urgence",
    href: "/protection-consulaire",
    color: "from-orange-500 to-amber-500",
    glow: "shadow-amber-500/25"
  },
  {
    icon: Plane,
    title: "Téléportation Administrative",
    description: "Rapatriement express avec suivi en temps réel et assistance virtuelle",
    href: "/rapatriement",
    color: "from-indigo-500 to-blue-500",
    glow: "shadow-blue-500/25"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-quantum-950 via-cyber-medium to-quantum-900 relative overflow-hidden">
      {/* Quantum Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full">
        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm border border-neon-blue/20 rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Bot className="h-5 w-5 text-neon-blue" />
              <span className="text-neon-blue font-medium font-['Space_Grotesk']">Powered by Quantum AI</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4 font-['Space_Grotesk']">
              <span className="holographic">Écosystème de Services</span>
              <span className="block text-neon-blue text-quantum">Ultra-Modernes</span>
            </h2>
            <p className="text-xl text-quantum-300 max-w-3xl mx-auto font-['Space_Grotesk']">
              Découvrez nos services consulaires révolutionnaires alimentés par l'IA quantique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="h-full perspective-1000"
              >
                <Link href={service.href}>
                  <div className="card-futuristic h-full group relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      initial={false}
                    />

                    {/* Top Glow Line */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />

                    <CardHeader className="text-center pb-4 relative">
                      <motion.div 
                        className={`mx-auto mb-4 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: `0 10px 30px ${service.glow}`
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-50 blur-md`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <service.icon className="h-8 w-8 text-white relative z-10" />
                      </motion.div>

                      <CardTitle className="text-xl font-semibold text-quantum font-['Space_Grotesk'] group-hover:text-neon-blue transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="text-center relative">
                      <p className="text-quantum-300 leading-relaxed font-['Space_Grotesk'] group-hover:text-quantum-200 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Hover Effect Indicator */}
                      <motion.div
                        className="flex items-center justify-center mt-4 text-sm text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        <span className="font-['Space_Grotesk']">Explorer ce service</span>
                      </motion.div>
                    </CardContent>

                    {/* Quantum Particle Effect */}
                    <div className="quantum-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services-publics">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-quantum relative overflow-hidden font-['Space_Grotesk']"
              >
                <span className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Accéder à l'écosystème complet
                  <Zap className="ml-2 h-4 w-4" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}