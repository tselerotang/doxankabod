"use client";

import Image from "next/image";
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioItems = [
    {
      category: "Business",
      items: [
        {
          title: "Classic Business Suit",
          description: "Timeless elegance for the modern executive",
          image: "https://images.unsplash.com/photo-1594938298613-c9558e3198cc?q=80"
        },
        {
          title: "Modern Executive",
          description: "Contemporary sophistication",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80"
        },
        {
          title: "Professional Attire",
          description: "Refined business wear",
          image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80"
        }
      ]
    },
    {
      category: "Ceremonial",
      items: [
        {
          title: "Wedding Collection",
          description: "Bespoke wedding attire",
          image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80"
        },
        {
          title: "Evening Wear",
          description: "Sophisticated formal wear",
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80"
        },
        {
          title: "Special Events",
          description: "Memorable occasions",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80"
        }
      ]
    },
    {
      category: "Casual",
      items: [
        {
          title: "Smart Casual",
          description: "Refined relaxed wear",
          image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80"
        },
        {
          title: "Weekend Style",
          description: "Elegant comfort",
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80"
        }
      ]
    }
  ];

  const allCategories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems.flatMap(category => category.items)
    : portfolioItems.find(category => category.category === activeCategory)?.items || [];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80"
            alt="Gallery Hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="block font-inter text-xs tracking-[0.3em] text-white/70 mb-4">
              OUR PORTFOLIO
            </span>
            <h1 className="font-italiana text-6xl sm:text-7xl mb-8">
              Masterpieces of<br />Craftsmanship
            </h1>
            <p className="text-white/70 max-w-xl text-lg">
              Explore our collection of meticulously crafted suits, each piece a testament 
              to our dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border transition-all duration-300
                          ${activeCategory === category 
                            ? 'border-white text-white' 
                            : 'border-white/20 text-white/60 hover:border-white hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.title} 
                className="group cursor-pointer"
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-italiana text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                      <div className="h-[1px] w-12 bg-white/50 mt-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 