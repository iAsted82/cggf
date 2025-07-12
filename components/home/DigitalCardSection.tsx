"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Check, Smartphone, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const advantages = [
  {
    icon: Smartphone,
    title: "Accès mobile",
    description: "Consultez votre carte depuis votre téléphone"
  },
  {
    icon: Globe,
    title: "Disponible 24/7",
    description: "Accès à vos informations à tout moment"
  },
  {
    icon: Clock,
    title: "Traitement rapide",
    description: "Demande traitée en quelques jours"
  },
  {
    icon: Check,
    title: "Sécurisé",
    description: "Données protégées et cryptées"
  }
];

export function DigitalCardSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      {/* Mobile Layout (max-width: 767px) */}
      <div className="block md:hidden w-[95%] mx-auto px-4">
        <div className="space-y-8">
          {/* Card Visualization - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative max-w-xs w-full">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-consulate-blue via-consulate-blue-light to-consulate-green p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-white space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-semibold">CARTE CONSULAIRE</h3>
                      <p className="text-xs opacity-90">République Gabonaise</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-consulate-yellow font-bold text-sm">GA</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-xs opacity-75">NOM ET PRÉNOM</p>
                      <p className="font-semibold text-sm">MANGANGA Jean-Pierre</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-75">NUMÉRO DE CARTE</p>
                      <p className="font-mono text-sm">1234 5678 9012 3456</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-75">VALIDITÉ</p>
                      <p className="font-semibold text-sm">12/2029</p>
                    </div>
                    <div className="w-6 h-6 bg-consulate-yellow rounded-full flex items-center justify-center">
                      <CreditCard className="h-3 w-3 text-consulate-blue" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-consulate-blue to-consulate-green rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-consulate-blue mb-3">
                Votre Carte Consulaire
                <span className="block text-yellow-600 font-bold">Digitale</span>
              </h2>
              <p className="text-base text-gray-700 leading-[1.7] font-medium">
                Révolutionnez votre expérience consulaire avec notre nouvelle carte digitale.
              </p>
            </div>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-consulate-blue/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-4 w-4 text-consulate-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-sm">
                      {advantage.title}
                    </h3>
                    <p className="text-xs text-gray-700 font-medium">
                      {advantage.description}
                    </p>
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
                <Button className="w-full btn-accent min-h-[52px] px-6 py-4 text-base font-bold rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-consulate-blue mb-4">
                Votre Carte Consulaire
                <span className="block text-consulate-yellow">Digitale</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Révolutionnez votre expérience consulaire avec notre nouvelle carte digitale. 
                Plus pratique, plus sûre, plus moderne.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-consulate-blue/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-5 w-5 text-consulate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-consulate-blue mb-1 text-sm">
                      {advantage.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {advantage.description}
                    </p>
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
                <Button 
                  size="lg" 
                  className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative max-w-sm">
              <motion.div
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-consulate-blue via-consulate-blue-light to-consulate-green p-6 rounded-2xl shadow-2xl transform-gpu"
              >
                <div className="text-white space-y-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-semibold">CARTE CONSULAIRE</h3>
                      <p className="text-sm opacity-90">République Gabonaise</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-consulate-yellow font-bold text-base">GA</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs opacity-75">NOM ET PRÉNOM</p>
                      <p className="font-semibold">MANGANGA Jean-Pierre</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-75">NUMÉRO DE CARTE</p>
                      <p className="font-mono">1234 5678 9012 3456</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-75">VALIDITÉ</p>
                      <p className="font-semibold">12/2029</p>
                    </div>
                    <div className="w-7 h-7 bg-consulate-yellow rounded-full flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-consulate-blue" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-consulate-blue to-consulate-green rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout (min-width: 1024px) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-consulate-blue mb-4">
                Votre Carte Consulaire
                <span className="block text-consulate-yellow">Digitale</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Révolutionnez votre expérience consulaire avec notre nouvelle carte digitale. 
                Plus pratique, plus sûre, plus moderne.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-consulate-blue/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-5 w-5 text-consulate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-consulate-blue mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {advantage.description}
                    </p>
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
                <Button 
                  size="lg" 
                  className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Demander ma carte
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 10,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-consulate-blue via-consulate-blue-light to-consulate-green p-8 rounded-2xl shadow-2xl transform-gpu perspective-1000"
              >
                <div className="text-white space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">CARTE CONSULAIRE</h3>
                      <p className="text-sm opacity-90">République Gabonaise</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-consulate-yellow font-bold text-lg">GA</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs opacity-75">NOM ET PRÉNOM</p>
                      <p className="font-semibold">MANGANGA Jean-Pierre</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-75">NUMÉRO DE CARTE</p>
                      <p className="font-mono">1234 5678 9012 3456</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-75">VALIDITÉ</p>
                      <p className="font-semibold">12/2029</p>
                    </div>
                    <div className="w-8 h-8 bg-consulate-yellow rounded-full flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-consulate-blue" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-consulate-blue to-consulate-green rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}