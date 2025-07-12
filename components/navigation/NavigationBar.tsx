"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuItems = [
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (label: string) => {
    if (!isMobile) {
      setActiveDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="nav-glass sticky top-0 z-50 transition-all duration-300"
    >
      <div className="w-full">
        {/* Mobile Layout (max-width: 767px) */}
        <div className="block md:hidden w-[95%] mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 steel-gradient rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">CG</span>
              </div>
              <div>
                <h1 className="text-base font-semibold text-primary">Consulat Général</h1>
                <p className="text-xs text-muted-foreground">République Gabonaise</p>
              </div>
            </Link>

            <button
              onClick={toggleMenu}
              className="p-2 text-primary hover:text-accent transition-colors duration-300 rounded-lg hover:bg-secondary/50"
              aria-label="Menu"
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
                className="modern-card border-t border-border mt-3 pt-4 pb-2 rounded-b-xl"
              >
                {menuItems.map((item) => (
                  <div key={item.label} className="mb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-foreground hover:text-accent hover:bg-secondary/50 transition-colors duration-200 rounded-lg flex-1"
                        onClick={() => !item.dropdown && setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="ml-4 mt-2 border-l-2 border-border pl-4"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 border-l-2 border-gray-100 pl-4"
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-consulate-blue hover:bg-gray-50 transition-colors duration-200 rounded"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="px-4 py-2 mt-4 border-t border-gray-100">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
                      Nous Contacter
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:block lg:hidden w-[90%] mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-consulate-blue">Consulat Général</h1>
                <p className="text-sm text-gray-600">République Gabonaise</p>
              </div>
            </Link>

            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-consulate-blue transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Tablet Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-t border-gray-200 mt-4 pt-4 rounded-b-lg shadow-lg"
              >
                <div className="grid grid-cols-2 gap-4">
                  {menuItems.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:text-consulate-blue hover:bg-gray-50 transition-colors duration-200 rounded-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && item.items && (
                        <div className="ml-4 space-y-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-secondary/50 transition-colors duration-200 rounded"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 mt-4 border-t border-border">
                  <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                    <Link href="/contact">
                      <Button className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-8 py-2 rounded-lg">
                        Nous Contacter
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Layout (min-width: 1024px) */}
        <div className="hidden lg:block max-w-full mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-consulate-blue whitespace-nowrap">Consulat Général</h1>
                <p className="text-xs text-gray-600 whitespace-nowrap">République Gabonaise</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-consulate-blue transition-colors duration-300 py-1 px-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
                  >
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
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

            <Link href="/contact">
              <Button className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}