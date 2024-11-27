"use client";

import Image from "next/image";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80"
            alt="About Hero"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="block font-inter text-xs tracking-[0.3em] text-white/70 mb-4">
              OUR STORY
            </span>
            <h1 className="font-italiana text-6xl sm:text-7xl mb-8">
              Legacy of<br />Excellence
            </h1>
            <p className="text-white/70 max-w-xl text-lg">
              Since our establishment, DOXA N KABOD has been dedicated to the pursuit 
              of perfection in tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="font-italiana text-4xl">Our Heritage</h2>
              <div className="space-y-6 text-white/70">
                <p>Founded on principles of excellence and divine glory...</p>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1558304970-abd589baebe5?q=80"
                alt="Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 