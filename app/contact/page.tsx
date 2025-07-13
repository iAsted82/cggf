/**
 * Page Contact - Informations de contact et formulaire
 * Accessible via /contact
 */

"use client";

import React, { useState } from 'react';
import { ConsularErrorBoundary } from '@/components/error/ConsularErrorBoundary';
import { LoadingButton } from '@/components/ui/LoadingStates';
import { validateWithSchema, contactFormSchema, type ContactFormData } from '@/schemas/validation';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    priority: 'normal' as const,
    consentDataProcessing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation avec Zod
    const validation = validateWithSchema(contactFormSchema, formData);
    
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.errors.forEach(error => {
        if (error.path.length > 0) {
          errors[error.path[0] as string] = error.message;
        }
      });
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors({});
    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        priority: 'normal',
        consentDataProcessing: false
      });
      
      // Reset après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  return (
    <ConsularErrorBoundary level="critical">
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
              Nous Contacter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe consulaire est à votre disposition pour vous accompagner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <ConsularErrorBoundary level="section">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-consulate-blue" />
                    <span>Adresse</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    26 Bis Avenue Raphaël<br />
                    75016 Paris, France
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-consulate-blue" />
                    <span>Téléphone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-700">
                    Standard: +33 1 89 71 92 98
                  </p>
                  <p className="text-red-600 font-medium">
                    Urgence: +33 1 89 71 92 99
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-consulate-blue" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    contact@consulatdugabon.fr
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-consulate-blue" />
                    <span>Horaires d'ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-700">
                    Lundi - Jeudi: 9H00 - 16H30
                  </p>
                  <p className="text-gray-700">
                    Vendredi: 9H00 - 16H00
                  </p>
                  <p className="text-sm text-gray-500">
                    Fermé les week-ends et jours fériés
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-consulate-blue" />
                    <span>Envoyer un message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-700 mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-gray-600">
                        Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName || ''}
                            onChange={handleChange}
                            required
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                              validationErrors.firstName ? 'border-red-300' : 'border-gray-300'
                            }`}
                            placeholder="Votre prénom"
                          />
                          {validationErrors.firstName && (
                            <p className="text-red-600 text-sm mt-1">{validationErrors.firstName}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName || ''}
                            onChange={handleChange}
                            required
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                              validationErrors.lastName ? 'border-red-300' : 'border-gray-300'
                            }`}
                            placeholder="Votre nom"
                          />
                          {validationErrors.lastName && (
                            <p className="text-red-600 text-sm mt-1">{validationErrors.lastName}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email || ''}
                          onChange={handleChange}
                          required
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                            validationErrors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="votre.email@exemple.com"
                        />
                        {validationErrors.email && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                        )}
                      </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleChange}
                          required
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                            validationErrors.phone ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="01 23 45 67 89"
                        />
                        {validationErrors.phone && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                        )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject || ''}
                          onChange={handleChange}
                          required
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                            validationErrors.subject ? 'border-red-300' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="inscription">Inscription consulaire</option>
                          <option value="etat-civil">État civil</option>
                          <option value="passeport">Passeport</option>
                          <option value="protection">Protection consulaire</option>
                          <option value="autre">Autre demande</option>
                        </select>
                        {validationErrors.subject && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.subject}</p>
                        )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Priorité
                          </label>
                          <select
                            name="priority"
                            value={formData.priority || 'normal'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue"
                          >
                            <option value="normal">Normale</option>
                            <option value="urgent">Urgente</option>
                            <option value="emergency">Urgence absolue</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message || ''}
                          onChange={handleChange}
                          required
                          rows={6}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulate-blue ${
                            validationErrors.message ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Décrivez votre demande en détail..."
                        />
                        {validationErrors.message && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>
                        )}
                      </div>

                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="consentDataProcessing"
                          checked={formData.consentDataProcessing || false}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                        <label className="text-sm text-gray-700">
                          J'accepte que mes données soient traitées dans le cadre de ma demande *
                        </label>
                      </div>
                      {validationErrors.consentDataProcessing && (
                        <p className="text-red-600 text-sm">{validationErrors.consentDataProcessing}</p>
                      )}

                      <LoadingButton
                        type="submit"
                        isLoading={isSubmitting}
                        loadingText="Envoi en cours..."
                        className="w-full bg-consulate-blue hover:bg-consulate-blue-light text-white font-semibold py-3"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </LoadingButton>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      </ConsularErrorBoundary>
    </div>
    </ConsularErrorBoundary>
  );
}