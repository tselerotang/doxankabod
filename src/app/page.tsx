"use client";

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-italiana text-3xl text-white mb-2">DOXA N KABOD</h1>
          <p className="text-xs tracking-[0.3em] text-white/50">GLORY & HONOR</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Collection />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

