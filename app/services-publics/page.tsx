/**
 * Page Services Publics - Liste des services consulaires disponibles
 * Accessible via /services-publics
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  FileText, 
  Heart, 
  Users, 
  Baby, 
  Shield,
  ArrowRight,
  Clock,
  Euro
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'inscription',
    icon: CreditCard,
    title: "Inscription Consulaire",
    description: "Enregistrement et délivrance de la carte consulaire digitale",
    price: "Gratuit",
    duration: "2-3 jours",
    href: "/services-publics/inscription",
    color: "text-blue-500"
  },
  {
    id: 'etat-civil',
    icon: FileText,
    title: "État Civil",
    description: "Transcription et délivrance d'actes de naissance, mariage, décès",
    price: "15€",
    duration: "5-7 jours",
    href: "/services-publics/etat-civil",
    color: "text-green-500"
  },
  {
    id: 'mariages',
    icon: Heart,
    title: "Célébration des Mariages",
    description: "Organisation et officialisation des unions selon la législation gabonaise",
    price: "50€",
    duration: "Sur RDV",
    href: "/services-publics/mariages",
    color: "text-red-500"
  },
  {
    id: 'certificats',
    icon: Shield,
    title: "Certificats",
    description: "Délivrance de certificats de nationalité, de résidence, de célibat",
    price: "20€",
    duration: "3-5 jours",
    href: "/services-publics/certificats",
    color: "text-purple-500"
  },
  {
    id: 'protection',
    icon: Users,
    title: "Protection Consulaire",
    description: "Assistance et protection des ressortissants gabonais en difficulté",
    price: "Gratuit",
    duration: "Immédiat",
    href: "/protection-consulaire",
    color: "text-orange-500"
  },
  {
    id: 'passeport',
    icon: Baby,
    title: "Passeport",
    description: "Renouvellement et première demande de passeport gabonais",
    price: "75€",
    duration: "15-30 jours",
    href: "/services-publics/passeport",
    color: "text-indigo-500"
  }
];

export default function ServicesPublicsPage() {
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
              Services Publics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez tous nos services consulaires dédiés à la communauté gabonaise en France
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link href={service.href}>
                  <Card className="h-full card-hover border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-consulate-blue">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-center">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Euro className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">Tarif</span>
                          </div>
                          <span className="font-semibold text-consulate-blue">{service.price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-medium">Délai</span>
                          </div>
                          <span className="text-sm text-gray-600">{service.duration}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full mt-4 bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold"
                      >
                        Demander ce service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-consulate-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin d'aide ou d'informations ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe consulaire est là pour vous accompagner dans toutes vos démarches
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl text-lg"
              >
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}