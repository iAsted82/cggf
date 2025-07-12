/**
 * Modern Services Grid - Interface Administrative Premium
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CreditCard, 
  Heart, 
  Shield, 
  Users, 
  Calendar,
  ArrowRight,
  Clock,
  Euro
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: CreditCard,
    title: "Inscription Consulaire",
    description: "Carte consulaire digitale avec QR code sécurisé",
    price: "Gratuit",
    duration: "24h",
    features: ["Carte virtuelle", "Validation instantanée", "Suivi en temps réel"],
    href: "/services-publics/inscription",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: FileText,
    title: "Actes d'État Civil",
    description: "Délivrance et transcription d'actes officiels",
    price: "15€",
    duration: "3-5j",
    features: ["Actes certifiés", "Livraison sécurisée", "Suivi de demande"],
    href: "/services-publics/etat-civil",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Célébration Mariages",
    description: "Officialisation selon la législation gabonaise",
    price: "50€",
    duration: "Sur RDV",
    features: ["Cérémonie officielle", "Documents légaux", "Accompagnement"],
    href: "/services-publics/mariages",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: Shield,
    title: "Protection Consulaire",
    description: "Assistance et protection des ressortissants",
    price: "Gratuit",
    duration: "Immédiat",
    features: ["Assistance 24/7", "Support juridique", "Rapatriement"],
    href: "/protection-consulaire",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Users,
    title: "Services Sociaux",
    description: "Accompagnement social et administratif",
    price: "Gratuit",
    duration: "Variable",
    features: ["Aide sociale", "Orientation", "Médiation"],
    href: "/services-sociaux",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Calendar,
    title: "Rendez-vous",
    description: "Planification et gestion des créneaux",
    price: "Gratuit",
    duration: "Instantané",
    features: ["Réservation en ligne", "Rappels SMS", "Reprogrammation"],
    href: "/rendez-vous",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export function ModernServicesGrid() {
  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center content-spacing mb-16"
        >
          <motion.h2 
            className="text-section text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services Consulaires
            <span className="block font-light text-accent">Nouvelle Génération</span>
          </motion.h2>
          
          <motion.p
            className="text-body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Une approche moderne et digitalisée pour simplifier vos démarches 
            consulaires avec efficacité et transparence.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.href}>
                <Card className="modern-card h-full hover:accent-glow transition-all duration-500 group-hover:scale-105">
                  <CardHeader className="space-y-4">
                    {/* Icon with Gradient */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Price & Duration */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Euro className="h-4 w-4 text-emerald-500" />
                          <span className="font-medium text-primary">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-amber-500" />
                          <span className="text-sm text-muted-foreground">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      className="w-full modern-button group-hover:shadow-lg transition-all duration-300"
                      variant="outline"
                    >
                      <span>Accéder au service</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Vous ne trouvez pas le service recherché ?
          </p>
          <Link href="/contact">
            <Button className="modern-button text-white px-8 py-3">
              Contacter notre équipe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}