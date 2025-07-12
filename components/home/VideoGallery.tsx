"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videoData = [
  {
    id: 1,
    title: "Services Consulaires",
    description: "Découvrez nos services digitalisés",
    thumbnail: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "2:30"
  },
  {
    id: 2,
    title: "Message du Consul",
    description: "Mot de bienvenue officiel",
    thumbnail: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "3:15"
  },
  {
    id: 3,
    title: "Diaspora Gabonaise",
    description: "Notre communauté en France",
    thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "4:20"
  },
  {
    id: 4,
    title: "Carte Consulaire",
    description: "Nouvelle carte digitale",
    thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "1:45"
  },
  {
    id: 5,
    title: "Événements",
    description: "Célébrations consulaires",
    thumbnail: "https://images.pexels.com/photos/6816072/pexels-photo-6816072.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "5:10"
  },
  {
    id: 6,
    title: "Protection Consulaire",
    description: "Assistance aux ressortissants",
    thumbnail: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    duration: "3:30"
  }
];

export function VideoGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Touch handling for momentum scrolling
  const [touchStart, setTouchStart] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 1);
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = window.innerWidth < 768 ? 280 : 320;
    const currentScroll = scrollRef.current.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setTouchStart(e.touches[0].clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current || !isDragging) return;
    
    e.preventDefault(); // Prevent vertical scrolling
    const touch = e.touches[0];
    const walk = (touchStart - touch.clientX) * 2; // Scroll sensitivity
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => updateScrollState();
    scrollElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial state
    updateScrollState();

    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-consulate-blue/5 to-consulate-green/5">
      <div className="w-full">
        {/* Header */}
        <div className="w-[95%] md:w-[90%] mx-auto px-4 md:px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-consulate-blue mb-2">
              Galerie Vidéo
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Découvrez nos services en images
            </p>
          </motion.div>
        </div>

        {/* Video Gallery Container */}
        <div className="relative">
          {/* Left scroll indicator - Hidden on mobile */}
          <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-white/90 shadow-lg text-consulate-blue hover:bg-white cursor-pointer' 
                  : 'bg-gray-300/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Right scroll indicator - Hidden on mobile */}
          <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-white/90 shadow-lg text-consulate-blue hover:bg-white cursor-pointer' 
                  : 'bg-gray-300/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Scrollable Video Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {videoData.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-64 md:w-72"
              >
                <div className="group relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-consulate-yellow group-hover:text-black"
                    >
                      <Play className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-black ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-1">
                          {video.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                      <div className="bg-black/50 px-2 py-1 rounded text-xs font-mono ml-2">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-consulate-yellow transition-colors duration-300 rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="w-[95%] md:w-[90%] mx-auto px-4 md:px-6 mt-6">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-consulate-blue to-consulate-green rounded-full"
                style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <span>Début</span>
              <span className="text-consulate-blue font-medium">
                {Math.round(scrollProgress * 100)}%
              </span>
              <span>Fin</span>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden text-center mt-4 text-xs text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-0.5 bg-gray-300 rounded" />
              <span>Glissez pour voir plus</span>
              <div className="w-8 h-0.5 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}