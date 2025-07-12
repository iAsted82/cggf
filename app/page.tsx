"use client";

import React from 'react';
import { HorizontalLayoutSection } from '@/components/home/HorizontalLayoutSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { DigitalCardSection } from '@/components/home/DigitalCardSection';
import { EventsSection } from '@/components/home/EventsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { VideoGallery } from '@/components/home/VideoGallery';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HorizontalLayoutSection />
      <ServicesSection />
      <DigitalCardSection />
      <VideoGallery />
      <EventsSection />
      <NewsSection />
    </div>
  );
}