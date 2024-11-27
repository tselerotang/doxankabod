"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80",
      title: "Modern Artistry",
      subtitle: "BESPOKE EXCELLENCE"
    },
    {
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80",
      title: "Timeless Craft",
      subtitle: "TAILORED PERFECTION"
    },
    {
      image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80",
      title: "Refined Details",
      subtitle: "MASTER CRAFTSMANSHIP"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 
                     ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-70 scale-105 animate-slow-zoom"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>
        </div>
      ))}

      <div className="relative h-full flex items-center">
        <div className="max-w-[1800px] mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="overflow-hidden mb-4">
              <span className="block font-inter text-xs tracking-[0.3em] text-white/70 animate-slide-up">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            <div className="overflow-hidden mb-12">
              <h2 className="font-italiana text-[12vw] leading-[0.9] text-white animate-slide-up delay-100">
                {slides[currentSlide].title}
              </h2>
            </div>
            <div className="overflow-hidden flex items-start gap-12">
              <p className="text-white/70 max-w-sm text-lg animate-slide-up delay-200">
                Experience bespoke tailoring redefined for the contemporary gentleman.
              </p>
              <div className="h-[1px] flex-1 bg-white/20 mt-3 animate-slide-right delay-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-8 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-[2px] transition-all duration-300 
                       ${currentSlide === index ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
} 