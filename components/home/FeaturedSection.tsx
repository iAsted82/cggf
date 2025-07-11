"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, AlertCircle, FileText, Phone, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredItems = [
  {
    icon: AlertCircle,
    title: "Nouveau système de rendez-vous",
    description: "Réservez vos créneaux en ligne 24h/24. Plus besoin de vous déplacer pour prendre rendez-vous.",
    link: "/contact",
    badge: "Nouveau",
    badgeColor: "bg-green-500"
  },
  {
    icon: FileText,
    title: "Tarifs consulaires 2025",
    description: "Consultez les nouveaux tarifs applicables pour tous nos services consulaires.",
    link: "/services-consulaires/tarifs",
    badge: "Mis à jour",
    badgeColor: "bg-blue-500"
  },
  {
    icon: Phone,
    title: "Permanence téléphonique",
    description: "Service d'information par téléphone du lundi au vendredi de 9h à 16h.",
    link: "/contact",
    badge: "Service",
    badgeColor: "bg-orange-500"
  },
  {
    icon: Users,
    title: "Communauté gabonaise",
    description: "Rejoignez notre réseau et participez aux événements de la diaspora gabonaise.",
    link: "/diaspora/communaute",
    badge: "Communauté",
    badgeColor: "bg-purple-500"
  }
];

export function FeaturedSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-consulate-yellow" />
            <h2 className="text-3xl font-bold text-consulate-blue">
              À la Une
            </h2>
            <Star className="h-8 w-8 text-consulate-yellow" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dernières informations administratives et nouveautés importantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full card-hover bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 z-10">
                  <div className={`${item.badgeColor} text-white px-3 py-1 text-xs font-semibold rounded-bl-lg`}>
                    {item.badge}
                  </div>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-consulate-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Link href={item.link}>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white transition-colors duration-300"
                    >
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="h-8 w-8 text-consulate-blue" />
              <h3 className="text-2xl font-bold text-consulate-blue">
                Horaires d'ouverture
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h4 className="font-semibold text-consulate-blue mb-2">Accueil du public</h4>
                <p>Lundi - Jeudi : 9h00 - 16h30</p>
                <p>Vendredi : 9h00 - 16h00</p>
              </div>
              <div>
                <h4 className="font-semibold text-consulate-blue mb-2">Permanence téléphonique</h4>
                <p>Lundi - Vendredi : 9h00 - 16h00</p>
                <p className="text-red-600 font-medium">Urgences : 24h/24</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}