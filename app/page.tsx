"use client";

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { DigitalCardSection } from '@/components/home/DigitalCardSection';
import { EventsSection } from '@/components/home/EventsSection';
import { NewsSection } from '@/components/home/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <DigitalCardSection />
      <EventsSection />
      <NewsSection />
    </div>
  );
}