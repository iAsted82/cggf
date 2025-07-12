"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-12 md:pt-16 pb-6 md:pb-8 relative overflow-hidden">
      {/* Background enhancement for contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
      {/* Mobile Layout (max-width: 767px) */}
      <div className="block md:hidden w-[95%] mx-auto px-4">
        <div className="space-y-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                <Phone className="h-4 w-4 text-yellow-300" />
                <span className="text-white drop-shadow-md">+33 1 89 71 92 98</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                <Phone className="h-4 w-4 text-red-300" />
                <span className="text-red-200 drop-shadow-md">Urgence: +33 1 89 71 92 99</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                <Mail className="h-4 w-4 text-yellow-300" />
                <span className="text-white drop-shadow-md">contact@consulatdugabon.fr</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center text-sm font-medium">
                <MapPin className="h-4 w-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white drop-shadow-md">26 Bis Avenue Raphaël, 75016 Paris</span>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center space-y-4"
          >
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-yellow-300" />
                <div className="text-white drop-shadow-md">
                  <span>Lun-Jeu: 9H00-16h30</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-yellow-300" />
                <div className="text-white drop-shadow-md">
                  <span>Ven: 9H00-16h00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Liens utiles</h3>
            <div className="space-y-2">
              <Link href="/consulat/equipe" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                L'équipe consulaire
              </Link>
              <Link href="/actualites" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                Actualités
              </Link>
              <Link href="/mentions-legales" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                Mentions légales
              </Link>
            </div>
          </motion.div>

          {/* Social Media & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center space-y-4"
          >
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Suivez-nous</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-consulate-green to-consulate-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GA</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/30 mt-8 pt-6 text-center text-sm text-gray-100 font-medium"
        >
          <p className="drop-shadow-md">&copy; Copyright 2025, conçu par <span className="text-yellow-300 font-bold">OKA Tech</span></p>
          <p className="mt-1 drop-shadow-md">Consulat Général du Gabon en France</p>
        </motion.div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Contact & Hours */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm font-medium">
                  <Phone className="h-4 w-4 text-yellow-300" />
                  <span className="text-white drop-shadow-md">+33 1 89 71 92 98</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium">
                  <Phone className="h-4 w-4 text-red-300" />
                  <span className="text-red-200 drop-shadow-md">Urgence: +33 1 89 71 92 99</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium">
                  <Mail className="h-4 w-4 text-yellow-300" />
                  <span className="text-white drop-shadow-md">contact@consulatdugabon.fr</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-yellow-300 mt-1" />
                  <span className="text-white drop-shadow-md">26 Bis Avenue Raphaël<br />75016 Paris, France</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Horaires</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm font-medium">
                  <Clock className="h-4 w-4 text-yellow-300" />
                  <div className="text-white drop-shadow-md">
                    <p className="font-semibold">Lundi – Jeudi</p>
                    <p className="text-gray-200">9H00 – 16h30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium">
                  <Clock className="h-4 w-4 text-yellow-300" />
                  <div className="text-white drop-shadow-md">
                    <p className="font-semibold">Vendredi</p>
                    <p className="text-gray-200">9H00 – 16h00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links & Social */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Liens utiles</h3>
              <div className="space-y-2">
                <Link href="/consulat/equipe" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  L'équipe consulaire
                </Link>
                <Link href="/actualites" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  Dernières actualités
                </Link>
                <Link href="/mentions-legales" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  Mentions légales
                </Link>
                <Link href="/politique-cookies" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  Politique de cookies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Suivez-nous</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-consulate-green to-consulate-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/30 mt-10 pt-6 text-center text-sm text-gray-100 font-medium"
        >
          <p className="drop-shadow-md">&copy; Copyright 2025, conçu et développé par <span className="text-yellow-300 font-bold">OKA Tech</span></p>
          <p className="mt-2 drop-shadow-md">Consulat Général du Gabon en France - Tous droits réservés</p>
        </motion.div>
      </div>

      {/* Desktop Layout (min-width: 1024px) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm font-medium">
                <Phone className="h-5 w-5 text-yellow-300" />
                <span className="text-white drop-shadow-md">+33 1 89 71 92 98</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-medium">
                <Phone className="h-5 w-5 text-red-300" />
                <span className="text-red-200 drop-shadow-md">Urgence: +33 1 89 71 92 99</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-medium">
                <Mail className="h-5 w-5 text-yellow-300" />
                <span className="text-white drop-shadow-md">contact@consulatdugabon.fr</span>
              </div>
              <div className="flex items-start space-x-3 text-sm font-medium">
                <MapPin className="h-5 w-5 text-yellow-300 mt-1" />
                <span className="text-white drop-shadow-md">26 Bis Avenue Raphaël<br />75016 Paris, France</span>
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
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Horaires d'ouverture</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm font-medium">
                <Clock className="h-5 w-5 text-yellow-300" />
                <div className="text-white drop-shadow-md">
                  <p className="font-semibold">Lundi – Jeudi</p>
                  <p className="text-gray-200">9H00 – 16h30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm font-medium">
                <Clock className="h-5 w-5 text-yellow-300" />
                <div className="text-white drop-shadow-md">
                  <p className="font-semibold">Vendredi</p>
                  <p className="text-gray-200">9H00 – 16h00</p>
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
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Liens utiles</h3>
            <div className="space-y-2">
              <Link href="/consulat/equipe" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                L'équipe consulaire
              </Link>
              <Link href="/actualites" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                Dernières actualités
              </Link>
              <Link href="/mentions-legales" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                Mentions légales
              </Link>
              <Link href="/politique-cookies" className="block text-sm font-medium text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
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
            <h3 className="text-lg font-bold text-yellow-300 drop-shadow-lg">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors drop-shadow-md">
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
          className="border-t border-white/30 mt-12 pt-8 text-center text-sm text-gray-100 font-medium"
        >
          <p className="drop-shadow-md">&copy; Copyright 2025, conçu et développé par <span className="text-yellow-300 font-bold">OKA Tech</span></p>
          <p className="mt-2 drop-shadow-md">Consulat Général du Gabon en France - Tous droits réservés</p>
        </motion.div>
      </div>
      </div>
    </footer>
  );
}