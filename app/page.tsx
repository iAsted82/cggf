"use client";

import React from 'react';
import { ConsularErrorBoundary } from '@/components/error/ConsularErrorBoundary';
import { ModernHeroSection } from '@/components/home/ModernHeroSection';
import { ModernServicesGrid } from '@/components/home/ModernServicesGrid';
import { HorizontalLayoutSection } from '@/components/home/HorizontalLayoutSection';
import { DigitalCardSection } from '@/components/home/DigitalCardSection';
import { EventsSection } from '@/components/home/EventsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { VideoGallery } from '@/components/home/VideoGallery';

export default function Home() {
  return (
    <ConsularErrorBoundary level="critical">
    <div className="min-h-screen">
        <ConsularErrorBoundary level="section">
          <ModernHeroSection />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <ModernServicesGrid />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <HorizontalLayoutSection />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <DigitalCardSection />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <VideoGallery />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <EventsSection />
        </ConsularErrorBoundary>
        
        <ConsularErrorBoundary level="section">
          <NewsSection />
        </ConsularErrorBoundary>
    </div>
    </ConsularErrorBoundary>
  );
}