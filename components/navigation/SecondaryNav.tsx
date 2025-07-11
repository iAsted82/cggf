"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const secondaryItems = [
  { label: 'ACTUALITÉS', href: '/actualites' },
  { label: 'VENIR EN FRANCE', href: '/diaspora/venir-en-france' },
  { label: 'RETOURNER AU GABON', href: '/diaspora/retour-au-gabon' },
  { label: 'PROTECTION CONSULAIRE', href: '/protection-consulaire' },
  { label: 'ÉTAT CIVIL', href: '/services-publics/etat-civil' },
];

export function SecondaryNav() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-consulate-blue text-white py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-2 lg:space-x-8">
          {secondaryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-consulate-yellow transition-colors duration-300 py-2 px-3 rounded-md hover:bg-white/10"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}