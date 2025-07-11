"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-consulate-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-consulate-yellow">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-consulate-yellow" />
                <span>+33 1 89 71 92 98</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span>Urgence: +33 1 89 71 92 99</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-consulate-yellow" />
                <span>contact@consulatdugabon.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-consulate-yellow mt-1" />
                <span>26 Bis Avenue Raphaël<br />75016 Paris, France</span>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-consulate-yellow">Horaires d'ouverture</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-consulate-yellow" />
                <div>
                  <p>Lundi – Jeudi</p>
                  <p className="text-sm text-gray-300">9H00 – 16h30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-consulate-yellow" />
                <div>
                  <p>Vendredi</p>
                  <p className="text-sm text-gray-300">9H00 – 16h00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-consulate-yellow">Liens utiles</h3>
            <div className="space-y-2">
              <Link href="/consulat/equipe" className="block hover:text-consulate-yellow transition-colors">
                L'équipe consulaire
              </Link>
              <Link href="/actualites" className="block hover:text-consulate-yellow transition-colors">
                Dernières actualités
              </Link>
              <Link href="/mentions-legales" className="block hover:text-consulate-yellow transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-cookies" className="block hover:text-consulate-yellow transition-colors">
                Politique de cookies (UE)
              </Link>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-consulate-yellow">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-consulate-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-consulate-yellow transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-consulate-yellow transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="pt-4">
              <div className="w-16 h-16 bg-gradient-to-br from-consulate-green to-consulate-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300"
        >
          <p>&copy; Copyright 2025, conçu et développé par <span className="text-consulate-yellow font-semibold">OKA Tech</span></p>
          <p className="mt-2">Consulat Général du Gabon en France - Tous droits réservés</p>
        </motion.div>
      </div>
    </footer>
  );
}