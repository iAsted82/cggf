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
import { Button } from '@/components/ui/button';
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
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      {/* Mobile Layout (max-width: 767px) */}
      <div className="block md:hidden w-[95%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-consulate-blue mb-3">
            Nos Services Consulaires
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Découvrez l'ensemble de nos services dédiés à la communauté gabonaise
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Link href={service.href}>
                <Card className="w-full bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-consulate-blue mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
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
          className="text-center mt-8"
        >
          <Link href="/services-publics">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-consulate-blue hover:bg-consulate-blue-light text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg"
            >
              Voir tous nos services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-consulate-blue mb-4">
            Nos Services Consulaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos services dédiés à la communauté gabonaise en France
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Link href={service.href}>
                <Card className="h-full card-hover border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 w-14 h-14 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-consulate-blue">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed text-sm">
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
          className="text-center mt-10"
        >
          <Link href="/services-publics">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-consulate-blue hover:bg-consulate-blue-light text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Voir tous nos services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Desktop Layout (min-width: 1024px) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
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
              whileHover={{ 
                y: -12,
                rotateY: 5,
                scale: 1.02
              }}
              className="h-full"
            >
              <Link href={service.href}>
                <Card className="h-full card-hover border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden group">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-full flex items-center justify-center relative"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(0, 63, 127, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-consulate-yellow/30 to-consulate-green/30 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-consulate-blue to-consulate-blue-light hover:from-consulate-blue-light hover:to-consulate-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-consulate-yellow/20 to-consulate-green/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                Voir tous nos services
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}