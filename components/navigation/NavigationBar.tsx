"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuItems = [
  { 
    label: 'Accueil', 
    href: '/', 
    dropdown: false 
  },
  { 
    label: 'Le Consulat Général', 
    href: '/consulat', 
    dropdown: true,
    items: [
      { label: 'Présentation', href: '/consulat/presentation' },
      { label: 'L\'équipe consulaire', href: '/consulat/equipe' },
      { label: 'Histoire', href: '/consulat/histoire' },
      { label: 'Missions', href: '/consulat/missions' },
    ]
  },
  { 
    label: 'Services Publics', 
    href: '/services-publics', 
    dropdown: true,
    items: [
      { label: 'Inscription Consulaire', href: '/services-publics/inscription' },
      { label: 'État Civil', href: '/services-publics/etat-civil' },
      { label: 'Certificats', href: '/services-publics/certificats' },
      { label: 'Mariages', href: '/services-publics/mariages' },
    ]
  },
  { 
    label: 'Accompagnement', 
    href: '/accompagnement', 
    dropdown: true,
    items: [
      { label: 'Aide Sociale', href: '/accompagnement/aide-sociale' },
      { label: 'Juridique', href: '/accompagnement/juridique' },
      { label: 'Administratif', href: '/accompagnement/administratif' },
    ]
  },
  { 
    label: 'Diaspora', 
    href: '/diaspora', 
    dropdown: true,
    items: [
      { label: 'Venir en France', href: '/diaspora/venir-en-france' },
      { label: 'Retourner au Gabon', href: '/diaspora/retour-au-gabon' },
      { label: 'Communauté', href: '/diaspora/communaute' },
    ]
  },
  { 
    label: 'Le Gabon', 
    href: '/gabon', 
    dropdown: true,
    items: [
      { label: 'Découvrir le Gabon', href: '/gabon/decouvrir' },
      { label: 'Culture', href: '/gabon/culture' },
      { label: 'Économie', href: '/gabon/economie' },
      { label: 'Tourisme', href: '/gabon/tourisme' },
    ]
  },
];

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CG</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-consulate-blue">Consulat Général</h1>
              <p className="text-sm text-gray-600">République Gabonaise</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-consulate-blue transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-50"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-consulate-blue transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Nous Contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-consulate-blue transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 py-4"
            >
              {menuItems.map((item) => (
                <div key={item.label} className="py-2">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-consulate-blue hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="px-4 py-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold">
                    Nous Contacter
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}