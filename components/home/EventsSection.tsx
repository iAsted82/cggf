"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const events = [
  {
    date: { day: "15", month: "FÉV" },
    title: "Cérémonie de Naturalisation",
    description: "Cérémonie officielle pour les nouveaux citoyens gabonais naturalisés en France",
    location: "Consulat Général, Paris",
    attendees: 45,
    image: "https://images.pexels.com/photos/6816072/pexels-photo-6816072.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
  },
  {
    date: { day: "28", month: "FÉV" },
    title: "Fête Nationale du Gabon",
    description: "Célébration de l'indépendance du Gabon avec la communauté gabonaise",
    location: "Centre Culturel, 16e arr.",
    attendees: 200,
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
  },
  {
    date: { day: "10", month: "MAR" },
    title: "Journée Portes Ouvertes",
    description: "Rencontrez nos équipes et découvrez nos services",
    location: "Consulat Général, Paris",
    attendees: 80,
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
  }
];

export function EventsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-consulate-blue mb-4">
            Événements à Venir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participez aux événements organisés par le Consulat Général
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full card-hover overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-consulate-yellow text-black px-3 py-2 rounded-lg font-bold text-center min-w-[60px]">
                    <div className="text-2xl font-bold">{event.date.day}</div>
                    <div className="text-xs">{event.date.month}</div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold text-consulate-blue line-clamp-2">
                    {event.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} participants attendus</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    S'inscrire
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
          <Link href="/evenements">
            <Button 
              size="lg" 
              className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Voir tous les événements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}