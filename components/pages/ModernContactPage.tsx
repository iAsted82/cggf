/**
 * Modern Contact Page - Interface Administrative Premium
 */

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Shield,
  Users,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ModernContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', priority: 'normal' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      primary: "+33 1 89 71 92 98",
      secondary: "Urgences: +33 1 89 71 92 99",
      description: "Disponible en semaine de 9h à 16h30",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contact@consulatdugabon.fr",
      secondary: "urgence@consulatdugabon.fr",
      description: "Réponse sous 24h ouvrées",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      primary: "26 Bis Avenue Raphaël",
      secondary: "75016 Paris, France",
      description: "Métro Passy (Ligne 6)",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="steel-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glassmorphism text-white text-sm font-medium mb-6"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contact & Assistance</span>
            </motion.div>
            
            <h1 className="text-hero text-white mb-6">
              Nous Sommes
              <span className="block font-light">À Votre Écoute</span>
            </h1>
            
            <p className="text-body-large text-white/80 max-w-3xl mx-auto">
              Notre équipe consulaire vous accompagne dans toutes vos démarches. 
              Contactez-nous par le canal qui vous convient le mieux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card text-center hover:accent-glow transition-all duration-500">
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="font-medium text-primary">{method.primary}</div>
                    <div className="text-sm text-muted-foreground">{method.secondary}</div>
                    <div className="text-xs text-muted-foreground border-t border-border pt-3">
                      {method.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                      <Send className="h-6 w-6 text-accent" />
                      <span>Envoyer un message</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Décrivez votre demande et nous vous répondrons rapidement
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          Message envoyé avec succès !
                        </h3>
                        <p className="text-muted-foreground">
                          Nous vous répondrons dans les plus brefs délais.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Nom complet *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                              placeholder="Votre nom et prénom"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                              placeholder="votre.email@exemple.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Sujet *
                            </label>
                            <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                            >
                              <option value="">Sélectionnez un sujet</option>
                              <option value="inscription">Inscription consulaire</option>
                              <option value="etat-civil">État civil</option>
                              <option value="passeport">Passeport</option>
                              <option value="protection">Protection consulaire</option>
                              <option value="rendez-vous">Prise de rendez-vous</option>
                              <option value="autre">Autre demande</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Priorité
                            </label>
                            <select
                              name="priority"
                              value={formData.priority}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                            >
                              <option value="normal">Normale</option>
                              <option value="urgent">Urgente</option>
                              <option value="emergency">Urgence absolue</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 resize-none"
                            placeholder="Décrivez votre demande en détail..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full modern-button text-white font-semibold py-4"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Envoyer le message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Horaires d'ouverture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-sm font-medium">Lundi - Jeudi</span>
                      <span className="text-sm text-muted-foreground">9H00 - 16H30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-sm font-medium">Vendredi</span>
                      <span className="text-sm text-muted-foreground">9H00 - 16H00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium">Week-end</span>
                      <span className="text-sm text-red-500">Fermé</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Prendre rendez-vous
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="mr-2 h-4 w-4" />
                      Urgence consulaire
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Services diaspora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}