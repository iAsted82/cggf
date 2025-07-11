"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, CreditCard, Users, Shield, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: CreditCard,
    title: "Inscription Consulaire",
    description: "Enregistrez-vous au consulat pour bénéficier de tous nos services",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/services-consulaires/inscription"
  },
  {
    icon: FileText,
    title: "État Civil",
    description: "Demandes d'actes de naissance, mariage, décès et transcriptions",
    image: "https://images.pexels.com/photos/6816072/pexels-photo-6816072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/services-consulaires/etat-civil"
  },
  {
    icon: Users,
    title: "Mariages",
    description: "Célébration et enregistrement des mariages selon la législation gabonaise",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/demarches-administratives/mariages"
  },
  {
    icon: Shield,
    title: "Protection Consulaire",
    description: "Assistance et protection des ressortissants gabonais en France",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/services-consulaires/protection"
  },
  {
    icon: Calendar,
    title: "Rendez-vous",
    description: "Planifiez vos visites au consulat avec notre système de réservation",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/contact"
  },
  {
    icon: Phone,
    title: "Urgences",
    description: "Assistance consulaire d'urgence 24h/24 pour nos ressortissants",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    href: "/services-consulaires/urgences"
  }
];

export function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-consulate-blue mb-4">
            Services Consulaires Clés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos principaux services pour faciliter vos démarches administratives
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 md:h-[500px]"
              >
                <img 
                  src={services[currentSlide].image} 
                  alt={services[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-consulate-yellow rounded-full flex items-center justify-center">
                        <services[currentSlide].icon className="h-6 w-6 text-consulate-blue" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {services[currentSlide].title}
                      </h3>
                    </div>
                    
                    <p className="text-xl text-white/90 mb-6 leading-relaxed">
                      {services[currentSlide].description}
                    </p>
                    
                    <Link href={services[currentSlide].href}>
                      <Button 
                        size="lg" 
                        className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-consulate-blue w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}