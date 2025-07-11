"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  FileText, 
  Users, 
  Baby, 
  Shield, 
  Plane 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    icon: Heart,
    title: "Célébration des mariages",
    description: "Organisation et officialisation des unions selon la législation gabonaise",
    href: "/services-publics/mariages",
    color: "text-red-500"
  },
  {
    icon: FileText,
    title: "Actes de décès",
    description: "Délivrance et transcription des actes de décès",
    href: "/services-publics/etat-civil",
    color: "text-gray-600"
  },
  {
    icon: Users,
    title: "Actes de mariage",
    description: "Transcription et délivrance des actes de mariage",
    href: "/services-publics/etat-civil",
    color: "text-pink-500"
  },
  {
    icon: Baby,
    title: "Actes de naissance",
    description: "Transcription et délivrance des actes de naissance",
    href: "/services-publics/etat-civil",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Protection Consulaire",
    description: "Assistance et protection des ressortissants gabonais",
    href: "/protection-consulaire",
    color: "text-green-500"
  },
  {
    icon: Plane,
    title: "Rapatriement",
    description: "Assistance pour le retour au Gabon",
    href: "/rapatriement",
    color: "text-orange-500"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-consulate-blue mb-4">
            Nos Services Consulaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos services dédiés à la communauté gabonaise en France
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link href={service.href}>
                <Card className="h-full card-hover border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center">
                      <service.icon className={`h-8 w-8 text-white`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-consulate-blue">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services-publics">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Voir tous nos services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}