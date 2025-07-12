/**
 * Page Actualités - Liste des dernières nouvelles du consulat
 * Accessible via /actualites
 */

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = ['Toutes', 'Procédures', 'Tarifs', 'Événements', 'Diaspora', 'Urgences'];

const allNews = [
  {
    id: 1,
    title: "Nouvelles procédures pour l'obtention du passeport gabonais",
    excerpt: "Le Consulat Général annonce la mise en place de nouvelles procédures simplifiées pour l'obtention et le renouvellement du passeport gabonais en France.",
    content: "Dans le cadre de la modernisation des services consulaires, le Consulat Général du Gabon en France met en place de nouvelles procédures simplifiées pour l'obtention et le renouvellement du passeport gabonais...",
    date: "12 janvier 2025",
    author: "Service Consulaire",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Procédures",
    featured: true
  },
  {
    id: 2,
    title: "Mise à jour des tarifs consulaires pour 2025",
    excerpt: "Conformément aux nouvelles dispositions, les tarifs des services consulaires ont été actualisés pour l'année 2025.",
    content: "Les nouveaux tarifs entrent en vigueur le 1er février 2025. Inscription consulaire : gratuite, Actes d'état civil : 15€, Passeport : 75€...",
    date: "8 janvier 2025",
    author: "Direction Consulaire",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Tarifs",
    featured: false
  },
  {
    id: 3,
    title: "Programme d'aide au retour volontaire au Gabon",
    excerpt: "Le Consulat Général, en partenariat avec les autorités gabonaises, lance un nouveau programme d'accompagnement pour les ressortissants souhaitant retourner au pays.",
    content: "Ce programme offre un accompagnement personnalisé incluant des conseils, une aide administrative et un soutien logistique pour faciliter le retour au Gabon...",
    date: "5 janvier 2025",
    author: "Service Diaspora",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Diaspora",
    featured: false
  },
  {
    id: 4,
    title: "Célébration de la Fête Nationale 2025",
    excerpt: "Le Consulat organise une grande célébration pour la Fête Nationale du Gabon le 17 août 2025.",
    content: "Rejoignez-nous pour célébrer l'indépendance du Gabon avec un programme riche en activités culturelles, gastronomiques et artistiques...",
    date: "3 janvier 2025",
    author: "Équipe Consulaire",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Événements",
    featured: false
  },
  {
    id: 5,
    title: "Nouveau système de prise de rendez-vous en ligne",
    excerpt: "Simplifiez vos démarches avec notre nouveau système de réservation de créneaux disponible 24h/24.",
    content: "Le nouveau système permet de réserver un créneau pour tous les services consulaires, de suivre l'état de votre demande et de recevoir des rappels automatiques...",
    date: "28 décembre 2024",
    author: "Service Digital",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Procédures",
    featured: false
  },
  {
    id: 6,
    title: "Assistance consulaire d'urgence - Numéro spécial",
    excerpt: "Un nouveau numéro d'urgence est désormais disponible pour l'assistance consulaire en dehors des heures d'ouverture.",
    content: "Le numéro +33 1 89 71 92 99 est disponible 24h/24 pour toute urgence nécessitant une intervention consulaire immédiate...",
    date: "20 décembre 2024",
    author: "Protection Consulaire",
    image: "https://images.pexels.com/photos/6816072/pexels-photo-6816072.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    category: "Urgences",
    featured: false
  }
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const filteredNews = selectedCategory === 'Toutes' 
    ? allNews 
    : allNews.filter(article => article.category === selectedCategory);

  const featuredArticle = allNews.find(article => article.featured);
  const regularArticles = allNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-consulate-blue/10 to-consulate-green/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-consulate-blue mb-6">
              Actualités
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles et mises à jour du Consulat Général
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-consulate-blue text-white'
                    : 'text-consulate-blue border-consulate-blue hover:bg-consulate-blue hover:text-white'
                }`}
              >
                <Tag className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'Toutes' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden bg-white border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-consulate-yellow text-black px-3 py-1 rounded-full text-xs font-semibold">
                        À LA UNE
                      </span>
                      <span className="bg-consulate-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {featuredArticle.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-consulate-blue mb-4">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-consulate-blue hover:bg-consulate-blue-light text-white"
                      onClick={() => setSelectedArticle(featuredArticle.id)}
                    >
                      Lire l'article complet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full card-hover overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
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
                      onClick={() => setSelectedArticle(article.id)}
                    >
                      Lire la suite
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal (simulé pour la démo) */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-consulate-blue">
                  {allNews.find(a => a.id === selectedArticle)?.title}
                </h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {allNews.find(a => a.id === selectedArticle)?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}