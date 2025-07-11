"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const news = [
  {
    title: "Nouvelles procédures pour l'obtention du passeport gabonais",
    excerpt: "Le Consulat Général annonce la mise en place de nouvelles procédures simplifiées pour l'obtention et le renouvellement du passeport gabonais...",
    date: "12 janvier 2025",
    author: "Service Consulaire",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Procédures"
  },
  {
    title: "Mise à jour des tarifs consulaires pour 2025",
    excerpt: "Conformément aux nouvelles dispositions, les tarifs des services consulaires ont été actualisés pour l'année 2025...",
    date: "8 janvier 2025",
    author: "Direction Consulaire",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Tarifs"
  },
  {
    title: "Programme d'aide au retour volontaire au Gabon",
    excerpt: "Le Consulat Général, en partenariat avec les autorités gabonaises, lance un nouveau programme d'accompagnement pour les ressortissants souhaitant retourner au pays...",
    date: "5 janvier 2025",
    author: "Service Diaspora",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Diaspora"
  }
];

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-consulate-blue mb-4">
            Dernières Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et mises à jour du Consulat Général
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full card-hover overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-consulate-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold text-consulate-blue line-clamp-2 hover:text-consulate-blue-light transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-consulate-blue hover:bg-consulate-blue/10 justify-between"
                  >
                    Lire la suite
                    <ArrowRight className="h-4 w-4" />
                  </Button>
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
          <Link href="/actualites">
            <Button 
              size="lg" 
              className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
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