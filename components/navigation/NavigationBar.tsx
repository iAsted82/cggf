"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuItems = [
  { 
    label: 'Accueil', 
    href: '/', 
    dropdown: false 
  },
  { 
    label: 'Services consulaires', 
    href: '/services-consulaires', 
    dropdown: true,
    items: [
      { label: 'Inscription Consulaire', href: '/services-consulaires/inscription' },
      { label: 'État Civil', href: '/services-consulaires/etat-civil' },
      { label: 'Certificats', href: '/services-consulaires/certificats' },
      { label: 'Passeports', href: '/services-consulaires/passeports' },
      { label: 'Visas', href: '/services-consulaires/visas' },
    ]
  },
  { 
    label: 'Démarches administratives', 
    href: '/demarches-administratives', 
    dropdown: true,
    items: [
      { label: 'Mariages', href: '/demarches-administratives/mariages' },
      { label: 'Légalisations', href: '/demarches-administratives/legalisations' },
      { label: 'Procurations', href: '/demarches-administratives/procurations' },
      { label: 'Notariat', href: '/demarches-administratives/notariat' },
    ]
  },
  { 
    label: 'Capsule', 
    href: '/capsule', 
    dropdown: true,
    items: [
      { label: 'Vidéos explicatives', href: '/capsule/videos' },
      { label: 'Infographies', href: '/capsule/infographies' },
      { label: 'Documents téléchargeables', href: '/capsule/documents' },
      { label: 'FAQ interactive', href: '/capsule/faq' },
      { label: 'Quiz de sensibilisation', href: '/capsule/quiz' },
    ]
  },
  { 
    label: 'Actualités', 
    href: '/actualites', 
    dropdown: false 
  },
  { 
    label: 'Contact', 
    href: '/contact', 
    dropdown: false 
  },
];

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? 'shadow-lg backdrop-blur-sm bg-white/95' : ''
      }`}
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
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors duration-300 py-2 px-3 rounded-md font-medium ${
                    item.label === 'Capsule' 
                      ? 'text-consulate-yellow bg-consulate-yellow/10 hover:bg-consulate-yellow hover:text-black' 
                      : 'text-gray-700 hover:text-consulate-blue hover:bg-gray-50'
                  }`}
                >
                  {item.label === 'Capsule' && (
                    <GraduationCap className="h-4 w-4" />
                  )}
                  <span>{item.label}</span>
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

          {/* Capsule Button - Prominent */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/capsule">
              <Button className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Capsule
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
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      item.label === 'Capsule' 
                        ? 'text-consulate-yellow bg-consulate-yellow/10 hover:bg-consulate-yellow hover:text-black font-semibold' 
                        : 'text-gray-700 hover:text-consulate-blue hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label === 'Capsule' && (
                      <GraduationCap className="inline h-4 w-4 mr-2" />
                    )}
                    {item.label}
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}