"use client";

import { useState, useEffect } from 'react';
import Menu from './Menu';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Overlay - Appears on Scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 h-24 transition-all duration-500 z-40
                   ${scrolled ? 'bg-[#0A0A0A] shadow-lg' : ''}`}
      />

      {/* Navigation Content */}
      <nav className={`fixed w-full z-50 transition-all duration-300
                    ${scrolled ? 'py-4' : 'py-6 sm:py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <h1 className="font-italiana text-xl sm:text-2xl relative z-50 text-white">
            DOXA N KABOD
            <span className="block text-[10px] tracking-[0.3em] text-white/50 mt-1">
              GLORY & HONOR
            </span>
          </h1>
          <Menu />
        </div>
      </nav>
    </>
  );
} 