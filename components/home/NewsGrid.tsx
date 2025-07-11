"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const importantNews = [
  {
    title: "Nouveau système de prise de rendez-vous en ligne",
    excerpt: "Réservez vos créneaux directement sur notre plateforme digitale. Plus simple, plus rapide.",
    date: "15 janvier 2025",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    urgent: true,
    category: "Services"
  },
  {
    title: "Mise à jour des tarifs consulaires 2025",
    excerpt: "Consultez les nouveaux tarifs applicables à partir du 1er février 2025.",
    date: "12 janvier 2025",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    urgent: false,
    category: "Tarifs"
  },
  {
    title: "Fermeture exceptionnelle - Fête Nationale",
    excerpt: "Le consulat sera fermé le 17 août 2025 pour la célébration de la Fête Nationale du Gabon.",
    date: "10 janvier 2025",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    urgent: true,
    category: "Informations"
  },
  {
    title: "Nouveau guide des démarches administratives",
    excerpt: "Téléchargez notre guide complet pour faciliter vos démarches consulaires.",
    date: "8 janvier 2025",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    urgent: false,
    category: "Guides"
  }
];

export function NewsGrid() {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-consulate-blue mb-4">
            Actualités Consulaires Importantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouveautés et informations importantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {importantNews.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full card-hover overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="bg-consulate-blue text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {news.category}
                    </div>
                    {news.urgent && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Urgent
                      </div>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-consulate-blue line-clamp-2 text-sm hover:text-consulate-blue-light transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{news.date}</span>
                    </div>
                    <ArrowRight className="h-3 w-3 text-consulate-blue" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/actualites">
            <Button 
              size="lg" 
              className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              Toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}