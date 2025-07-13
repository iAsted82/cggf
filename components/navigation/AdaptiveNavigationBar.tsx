/**
 * Navigation adaptative qui évolue selon le profil utilisateur
 */

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdaptiveComponent } from '@/contexts/AdaptiveUIContext';
import { AdaptiveTooltip } from '@/components/adaptive/AdaptiveTooltip';
import Link from 'next/link';

// Configuration adaptive des menus
const adaptiveMenuConfig = {
  novice: {
    items: [
      { label: 'Services', href: '/services-publics', essential: true },
      { label: 'Contact', href: '/contact', essential: true }
    ],
    showDropdowns: false,
    showAdvanced: false
  },
  intermediate: {
    items: [
      { label: 'Le Consulat', href: '/consulat', dropdown: true },
      { label: 'Services Publics', href: '/services-publics', dropdown: true },
      { label: 'Contact', href: '/contact', essential: true }
    ],
    showDropdowns: true,
    showAdvanced: false
  },
  expert: {
    items: [
      { label: 'Le Consulat Général', href: '/consulat', dropdown: true },
      { label: 'Services Publics', href: '/services-publics', dropdown: true },
      { label: 'Accompagnement', href: '/accompagnement', dropdown: true },
      { label: 'Diaspora', href: '/diaspora', dropdown: true },
      { label: 'Le Gabon', href: '/gabon', dropdown: true }
    ],
    showDropdowns: true,
    showAdvanced: true
  },
  efficient: {
    items: [
      { label: 'Consulat', href: '/consulat', dropdown: true, compact: true },
      { label: 'Services', href: '/services-publics', dropdown: true, compact: true },
      { label: 'Accompagnement', href: '/accompagnement', dropdown: true, compact: true },
      { label: 'Diaspora', href: '/diaspora', dropdown: true, compact: true },
      { label: 'Gabon', href: '/gabon', dropdown: true, compact: true }
    ],
    showDropdowns: true,
    showAdvanced: true,
    showShortcuts: true
  }
};

const dropdownItems = {
  '/consulat': [
    { label: 'Présentation', href: '/consulat/presentation' },
    { label: 'L\'équipe consulaire', href: '/consulat/equipe' },
    { label: 'Histoire', href: '/consulat/histoire' },
    { label: 'Missions', href: '/consulat/missions' }
  ],
  '/services-publics': [
    { label: 'Inscription Consulaire', href: '/services-publics/inscription' },
    { label: 'État Civil', href: '/services-publics/etat-civil' },
    { label: 'Certificats', href: '/services-publics/certificats' },
    { label: 'Mariages', href: '/services-publics/mariages' }
  ],
  '/accompagnement': [
    { label: 'Aide Sociale', href: '/accompagnement/aide-sociale' },
    { label: 'Juridique', href: '/accompagnement/juridique' },
    { label: 'Administratif', href: '/accompagnement/administratif' }
  ],
  '/diaspora': [
    { label: 'Venir en France', href: '/diaspora/venir-en-france' },
    { label: 'Retourner au Gabon', href: '/diaspora/retour-au-gabon' },
    { label: 'Communauté', href: '/diaspora/communaute' }
  ],
  '/gabon': [
    { label: 'Découvrir le Gabon', href: '/gabon/decouvrir' },
    { label: 'Culture', href: '/gabon/culture' },
    { label: 'Économie', href: '/gabon/economie' },
    { label: 'Tourisme', href: '/gabon/tourisme' }
  ]
};

export function AdaptiveNavigationBar() {
  const { userProfile, track, shouldShowGuidance, shouldSimplify, shouldEnableShortcuts, shouldAnimate } = useAdaptiveComponent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Configuration adaptative basée sur le profil
  const config = adaptiveMenuConfig[userProfile] || adaptiveMenuConfig.novice;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Gestion des raccourcis clavier pour utilisateurs avancés
  useEffect(() => {
    if (!shouldEnableShortcuts) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 's':
            e.preventDefault();
            window.location.href = '/services-publics';
            track('keyboard_shortcut', { key: 'services' });
            break;
          case 'c':
            e.preventDefault();
            window.location.href = '/contact';
            track('keyboard_shortcut', { key: 'contact' });
            break;
          case '/':
            e.preventDefault();
            // Ouvrir command palette (à implémenter)
            track('keyboard_shortcut', { key: 'search' });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shouldEnableShortcuts, track]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    track('menu_toggle', { action: isMenuOpen ? 'close' : 'open', userProfile });
  };

  const handleDropdownEnter = (href: string) => {
    if (!isMobile && config.showDropdowns) {
      setActiveDropdown(href);
      track('dropdown_hover', { menu: href });
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href);
    track('dropdown_click', { menu: href, mobile: true });
  };

  const handleNavClick = (item: any) => {
    track('navigation_click', { 
      label: item.label, 
      href: item.href,
      userProfile,
      essential: item.essential 
    });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldAnimate ? 0.5 : 0.1 }}
      className="nav-glass sticky top-0 z-50 transition-all duration-300"
    >
      <div className="w-full">
        {/* Mobile Layout */}
        <div className="block md:hidden w-[95%] mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 steel-gradient rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">CG</span>
              </div>
              <div>
                <h1 className="text-base font-semibold text-primary">
                  {config.items.length <= 2 ? 'Consulat' : 'Consulat Général'}
                </h1>
                <p className="text-xs text-muted-foreground">République Gabonaise</p>
              </div>
            </Link>

            <div className="flex items-center space-x-2">
              {/* Indicateur de profil pour utilisateurs avancés */}
              {userProfile !== 'novice' && !shouldSimplify && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-consulate-yellow rounded-full"
                />
              )}
              
              <AdaptiveTooltip 
                content="Menu principal - Appuyez pour voir tous les services disponibles"
                feature="main_menu"
                priority="high"
              >
                <button
                  onClick={toggleMenu}
                  className="p-2 text-primary hover:text-accent transition-colors duration-300 rounded-lg hover:bg-secondary/50"
                  aria-label="Toggle Menu"
                  data-feature="main_menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </AdaptiveTooltip>
            </div>
          </div>

          {/* Menu Mobile Adaptatif */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: shouldAnimate ? 0.3 : 0.1 }}
                className="modern-card border-t border-border mt-3 pt-4 pb-2 rounded-b-xl"
              >
                {config.items.map((item, index) => (
                  <div key={item.label} className="mb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-foreground hover:text-accent hover:bg-secondary/50 transition-colors duration-200 rounded-lg flex-1"
                        onClick={() => {
                          handleNavClick(item);
                          if (!item.dropdown) setIsMenuOpen(false);
                        }}
                        data-feature={`nav_${item.label.toLowerCase()}`}
                      >
                        <span className={item.essential ? 'font-semibold' : 'font-medium'}>
                          {item.label}
                        </span>
                        {item.essential && shouldShowGuidance && (
                          <span className="ml-2 text-xs bg-consulate-yellow text-black px-2 py-0.5 rounded-full">
                            Important
                          </span>
                        )}
                      </Link>
                      {item.dropdown && config.showDropdowns && (
                        <button
                          onClick={() => handleMobileDropdownToggle(item.href)}
                          className="ml-4 mt-2 border-l-2 border-border pl-4"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.href ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Sous-menu mobile */}
                    {item.dropdown && activeDropdown === item.href && dropdownItems[item.href as keyof typeof dropdownItems] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 border-l-2 border-border pl-4"
                      >
                        {dropdownItems[item.href as keyof typeof dropdownItems].map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:text-white hover:bg-consulate-blue transition-colors duration-200 rounded font-medium focus:outline-none focus:ring-2 focus:ring-consulate-blue focus:text-white focus:bg-consulate-blue"
                            onClick={() => {
                              setIsMenuOpen(false);
                              track('submenu_click', { parent: item.label, child: subItem.label });
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Contact CTA */}
                <div className="px-4 py-2 mt-4 border-t border-border">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
                      {shouldSimplify ? 'Contact' : 'Nous Contacter'}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Layout Adaptatif */}
        <div className="hidden lg:block max-w-full mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-consulate-blue to-consulate-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-consulate-blue whitespace-nowrap">
                  {config.items.length <= 3 ? 'Consulat' : 'Consulat Général'}
                </h1>
                <p className="text-xs text-gray-600 whitespace-nowrap">République Gabonaise</p>
              </div>
            </Link>

            {/* Menu Desktop Adaptatif */}
            <div className="flex items-center space-x-2">
              {config.items.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.href)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <AdaptiveTooltip
                    content={`Accéder à ${item.label}`}
                    feature={`nav_${item.label.toLowerCase()}`}
                    priority={item.essential ? 'high' : 'medium'}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-gray-700 hover:text-consulate-blue transition-colors duration-300 py-1 px-2 rounded-md hover:bg-gray-50 whitespace-nowrap ${
                        item.compact ? 'text-sm' : ''
                      }`}
                      onClick={() => handleNavClick(item)}
                      data-feature={`nav_${item.label.toLowerCase()}`}
                    >
                      <span className={`font-medium ${item.essential ? 'font-semibold' : ''}`}>
                        {item.label}
                      </span>
                      {item.dropdown && config.showDropdowns && (
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.href ? 'rotate-180' : ''
                        }`} />
                      )}
                      {shouldEnableShortcuts && item.essential && (
                        <span className="ml-1 text-xs text-gray-400">
                          ⌘{item.label[0].toLowerCase()}
                        </span>
                      )}
                    </Link>
                  </AdaptiveTooltip>

                  {/* Dropdown Desktop */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.href && dropdownItems[item.href as keyof typeof dropdownItems] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: shouldAnimate ? 0.2 : 0.1 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-xl border border-gray-300 py-2 z-50"
                      >
                        {dropdownItems[item.href as keyof typeof dropdownItems].map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-consulate-blue hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-consulate-blue focus:bg-consulate-blue focus:text-white"
                            onClick={() => track('submenu_click', { parent: item.label, child: subItem.label })}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Indicateurs adaptatifs */}
              {shouldEnableShortcuts && (
                <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                  <Zap className="h-4 w-4 text-consulate-yellow" />
                  <span className="text-xs text-gray-500">Mode expert</span>
                </div>
              )}
            </div>

            <Link href="/contact">
              <Button className="bg-consulate-yellow hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                {shouldSimplify ? 'Contact' : 'Nous Contacter'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}