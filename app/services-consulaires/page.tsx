"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Users, Shield, Import as Passport, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';

const services = [
  {
    icon: CreditCard,
    title: "Inscription Consulaire",
    description: "Première inscription ou mise à jour de votre dossier consulaire",
    features: ["Première inscription", "Renouvellement", "Mise à jour des données", "Carte consulaire"],
    href: "/services-consulaires/inscription"
  },
  {
    icon: FileText,
    title: "État Civil",
    description: "Délivrance d'actes d'état civil et transcriptions",
    features: ["Actes de naissance", "Actes de mariage", "Actes de décès", "Transcriptions"],
    href: "/services-consulaires/etat-civil"
  },
  {
    icon: Passport,
    title: "Passeports",
    description: "Demande et renouvellement de passeports gabonais",
    features: ["Nouveau passeport", "Renouvellement", "Passeport perdu", "Passeport endommagé"],
    href: "/services-consulaires/passeports"
  },
  {
    icon: MapPin,
    title: "Visas",
    description: "Services de visa pour le Gabon",
    features: ["Visa touristique", "Visa d'affaires", "Visa de transit", "Visa long séjour"],
    href: "/services-consulaires/visas"
  },
  {
    icon: Users,
    title: "Certificats",
    description: "Délivrance de certificats consulaires",
    features: ["Certificat de vie", "Certificat de célibat", "Certificat de nationalité", "Certificat de coutume"],
    href: "/services-consulaires/certificats"
  },
  {
    icon: Shield,
    title: "Protection Consulaire",
    description: "Assistance et protection des ressortissants gabonais",
    features: ["Assistance d'urgence", "Rapatriement", "Aide juridique", "Soutien consulaire"],
    href: "/services-consulaires/protection"
  }
];

export default function ServicesConsulairesPage() {
  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Services consulaires' }
          ]} 
          className="mb-8"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-consulate-blue mb-4">
            Services Consulaires
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tous nos services pour accompagner les ressortissants gabonais dans leurs démarches administratives
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full card-hover bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-consulate-blue">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-consulate-yellow rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={service.href}>
                    <Button 
                      className="w-full mt-6 bg-consulate-blue hover:bg-consulate-blue-light text-white font-semibold transition-colors duration-300"
                    >
                      Découvrir le service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-consulate-blue to-consulate-green rounded-2xl p-8 mt-16 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            Besoin d'aide pour vos démarches ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos équipes sont à votre disposition pour vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-consulate-blue hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl"
              >
                Prendre rendez-vous
              </Button>
            </Link>
            <Link href="/capsule">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-consulate-blue font-semibold px-8 py-3 rounded-xl"
              >
                Consulter la Capsule
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}