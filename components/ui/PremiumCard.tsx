/**
 * Premium Card Component - Design System 2025
 * Carte avec effets visuels avancés et micro-interactions
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glassmorphic' | 'floating' | 'magnetic';
  hoverEffect?: 'lift' | 'tilt' | 'glow' | 'scale';
  clickable?: boolean;
  onClick?: () => void;
}

export function PremiumCard({
  children,
  className,
  variant = 'default',
  hoverEffect = 'lift',
  clickable = false,
  onClick,
}: PremiumCardProps) {
  const variants = {
    default: "bg-white border border-gray-200 shadow-lg",
    glassmorphic: "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl",
    floating: "bg-white shadow-xl border-0",
    magnetic: "bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg"
  };

  const hoverEffects = {
    lift: {
      y: -12,
      boxShadow: "0 25px 50px rgba(0, 63, 127, 0.15)"
    },
    tilt: {
      rotateY: 5,
      rotateX: 5,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 63, 127, 0.2)"
    },
    glow: {
      scale: 1.03,
      boxShadow: "0 0 40px rgba(255, 215, 0, 0.3)"
    },
    scale: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0, 63, 127, 0.2)"
    }
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-500 transform-gpu",
        "cursor-pointer" && clickable,
        variants[variant],
        className
      )}
      
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      
      whileHover={hoverEffects[hoverEffect]}
      whileTap={clickable ? { scale: 0.98 } : {}}
      
      onClick={onClick}
    >
      {/* Gradient Border Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-consulate-blue via-consulate-yellow to-consulate-green opacity-0 rounded-2xl"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        animate={{
          x: ['-200%', '200%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />
    </motion.div>
  );
}