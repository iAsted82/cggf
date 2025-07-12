/**
 * Premium Input Component - Design System 2025
 * Champ de saisie avec animations et états visuels avancés
 */

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

interface PremiumInputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function PremiumInput({
  label,
  type = 'text',
  placeholder,
  value = '',
  onChange,
  error,
  success = false,
  required = false,
  disabled = false,
  icon,
  className
}: PremiumInputProps) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const hasValue = value.length > 0;

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={cn("relative", className)}>
      {/* Label */}
      <motion.label
        className={cn(
          "absolute left-3 transition-all duration-300 pointer-events-none",
          "text-gray-500 font-medium",
          focused || hasValue 
            ? "top-2 text-xs text-consulate-blue" 
            : "top-1/2 -translate-y-1/2 text-base"
        )}
        animate={{
          y: focused || hasValue ? -10 : 0,
          scale: focused || hasValue ? 0.85 : 1,
          color: focused ? "#003F7F" : error ? "#EF4444" : "#6B7280"
        }}
        transition={{ duration: 0.2 }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        {/* Input Field */}
        <motion.input
          type={inputType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          placeholder={focused ? placeholder : ''}
          className={cn(
            "w-full pt-6 pb-2 px-3 rounded-xl border-2 transition-all duration-300",
            "bg-white/50 backdrop-blur-sm",
            "focus:outline-none focus:ring-0",
            icon && "pl-10",
            (type === 'password' || success || error) && "pr-10",
            
            // States
            focused && !error && "border-consulate-blue bg-white shadow-lg",
            error && "border-red-500 bg-red-50",
            success && "border-green-500 bg-green-50",
            disabled && "opacity-50 cursor-not-allowed",
            !focused && !error && !success && "border-gray-300 hover:border-gray-400"
          )}
        />

        {/* Right Icons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          {/* Password Toggle */}
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}

          {/* Success Icon */}
          {success && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
            </motion.div>
          )}

          {/* Error Icon */}
          {error && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <AlertCircle className="h-5 w-5 text-red-500" />
            </motion.div>
          )}
        </div>

        {/* Focus Ring */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-consulate-yellow pointer-events-none"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: focused ? [0, 0.5, 0] : 0,
            scale: focused ? [1, 1.05, 1] : 1
          }}
          transition={{ duration: 2, repeat: focused ? Infinity : 0 }}
        />
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-sm text-red-600 flex items-center space-x-2"
          >
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}