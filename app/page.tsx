"use client";

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { NewsGrid } from '@/components/home/NewsGrid';
import { ServicesCarousel } from '@/components/home/ServicesCarousel';
import { FeaturedSection } from '@/components/home/FeaturedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsGrid />
      <ServicesCarousel />
      <FeaturedSection />
    </div>
  );
}