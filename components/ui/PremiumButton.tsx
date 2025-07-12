/**
 * Premium Button Component - Design System 2025
 * Bouton avec micro-interactions avancées et états visuels premium
 */

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  glowEffect?: boolean;
  magneticEffect?: boolean;
}

const variants = {
  primary: "bg-gradient-to-r from-consulate-blue to-consulate-blue-light text-white shadow-lg hover:shadow-2xl",
  secondary: "bg-gradient-to-r from-consulate-yellow to-yellow-500 text-black shadow-lg hover:shadow-2xl",
  accent: "bg-gradient-to-r from-consulate-green to-green-600 text-white shadow-lg hover:shadow-2xl",
  ghost: "border-2 border-consulate-blue text-consulate-blue hover:bg-consulate-blue hover:text-white"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl"
};

export function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  className,
  glowEffect = false,
  magneticEffect = false,
  ...props
}: PremiumButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-xl font-semibold transition-all duration-500",
        "transform-gpu will-change-transform",
        "focus:outline-none focus:ring-4 focus:ring-consulate-yellow/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        
        // Variants & sizes
        variants[variant],
        sizes[size],
        
        // Width
        fullWidth && "w-full",
        
        // Glow effect
        glowEffect && "shadow-[0_0_30px_rgba(255,215,0,0.3)]",
        
        className
      )}
      
      // Magnetic effect
      whileHover={magneticEffect ? { 
        scale: 1.05,
        y: -2,
        boxShadow: "0 20px 40px rgba(0, 63, 127, 0.3)"
      } : {
        scale: 1.02,
        boxShadow: "0 15px 30px rgba(0, 63, 127, 0.2)"
      }}
      
      whileTap={{ 
        scale: 0.98,
        y: 0
      }}
      
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      
      {...props}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Button Content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {icon}
              </motion.span>
            )}
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.span>
            
            {icon && iconPosition === 'right' && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {icon}
              </motion.span>
            )}
          </>
        )}
      </div>
      
      {/* Pulse Ring for Focus */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-consulate-yellow opacity-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
}