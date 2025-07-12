"use client";

import React from 'react';
import { ModernHeroSection } from '@/components/home/ModernHeroSection';
import { ModernServicesGrid } from '@/components/home/ModernServicesGrid';
import { HorizontalLayoutSection } from '@/components/home/HorizontalLayoutSection';
import { DigitalCardSection } from '@/components/home/DigitalCardSection';
import { EventsSection } from '@/components/home/EventsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { VideoGallery } from '@/components/home/VideoGallery';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ModernHeroSection />
      <ModernServicesGrid />
      <HorizontalLayoutSection />
      <DigitalCardSection />
      <VideoGallery />
      <EventsSection />
      <NewsSection />
    </div>
  );
}