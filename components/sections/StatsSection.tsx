/**
 * Statistics Section - Showcase Consulat Performance
 * Section avec statistiques animées et métriques impressionnantes
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Clock, Star } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: Users,
    number: 12500,
    suffix: '+',
    label: 'Ressortissants Inscrits',
    description: 'Communauté gabonaise active en France',
    color: 'text-blue-500'
  },
  {
    icon: FileText,
    number: 8900,
    suffix: '+',
    label: 'Documents Traités',
    description: 'Services consulaires fournis cette année',
    color: 'text-green-500'
  },
  {
    icon: Clock,
    number: 2.5,
    decimals: 1,
    label: 'Jours Moyens',
    description: 'Délai de traitement des demandes',
    color: 'text-yellow-500'
  },
  {
    icon: Star,
    number: 4.8,
    decimals: 1,
    suffix: '/5',
    label: 'Satisfaction Client',
    description: 'Note moyenne de nos services',
    color: 'text-purple-500'
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23003F7F%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-consulate-blue mb-6">
            Notre Impact en
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-consulate-yellow to-consulate-green">
              Chiffres
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les résultats de notre engagement envers la communauté gabonaise en France
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <PremiumCard 
                variant="glassmorphic" 
                hoverEffect="lift"
                className="h-full p-8 text-center group"
              >
                {/* Icon */}
                <motion.div
                  className={cn(
                    "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center",
                    "bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10",
                    "group-hover:scale-110 transition-transform duration-300"
                  )}
                >
                  <stat.icon className={cn("h-8 w-8", stat.color)} />
                </motion.div>

                {/* Number */}
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-consulate-blue">
                    <AnimatedCounter
                      end={stat.number}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix || ''}
                      duration={2.5}
                    />
                  </h3>
                </div>

                {/* Label */}
                <h4 className="text-lg font-semibold text-consulate-blue mb-2">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-consulate-yellow to-consulate-green rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-consulate-blue font-medium">
            <Star className="h-5 w-5 text-consulate-yellow" />
            <span>Des résultats qui témoignent de notre excellence</span>
            <Star className="h-5 w-5 text-consulate-yellow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}