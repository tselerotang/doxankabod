"use client";

import Image from "next/image";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Bespoke Suits",
      description: "Experience the pinnacle of tailoring with our fully customized suits. Each garment is meticulously crafted to your exact measurements and preferences.",
      features: [
        "Personal consultation and style guidance",
        "Premium fabric selection from world-renowned mills",
        "Multiple fittings for perfect precision",
        "Hand-finished details and artisanal craftsmanship"
      ],
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80",
      price: "Starting from £2,500"
    },
    {
      title: "Made-to-Measure",
      description: "Our made-to-measure service offers a perfect balance of personalization and craftsmanship, tailored to your unique measurements.",
      features: [
        "Customized pattern adaptation",
        "Curated fabric selection",
        "Expert fitting session",
        "Precise alterations"
      ],
      image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80",
      price: "Starting from £1,500"
    },
    {
      title: "Wedding Attire",
      description: "Make your special day even more memorable with our bespoke wedding attire service, crafted with extraordinary attention to detail.",
      features: [
        "Dedicated bridal party consultation",
        "Luxury fabric options",
        "Complete accessory coordination",
        "Timeline planning and multiple fittings"
      ],
      image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80",
      price: "Starting from £3,000"
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80"
            alt="Services Hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="block font-inter text-xs tracking-[0.3em] text-white/70 mb-4">
              OUR SERVICES
            </span>
            <h1 className="font-italiana text-6xl sm:text-7xl mb-8">
              Artisanal<br />Craftsmanship
            </h1>
            <p className="text-white/70 max-w-xl text-lg">
              Discover our range of bespoke tailoring services, where traditional 
              craftsmanship meets contemporary elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="space-y-40">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`grid lg:grid-cols-2 gap-20 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <span className="text-white/40 text-sm">0{index + 1} / Service</span>
                    <h2 className="font-italiana text-4xl sm:text-5xl">{service.title}</h2>
                    <p className="text-white/70 text-lg">{service.description}</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-italiana text-2xl">Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-4">
                          <span className="w-px h-4 bg-white/20" />
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <span className="block text-sm text-white/40 mb-2">Starting Price</span>
                    <span className="font-italiana text-2xl">{service.price}</span>
                  </div>

                  <button className="px-8 py-4 border border-white/20 hover:border-white 
                                   text-white/80 hover:text-white transition-all duration-300">
                    Book Consultation
                  </button>
                </div>

                <div className="relative aspect-[4/3] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
          <h2 className="font-italiana text-4xl mb-20 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Initial meeting to discuss your preferences and requirements"
              },
              {
                step: "02",
                title: "Design",
                desc: "Fabric selection and style customization"
              },
              {
                step: "03",
                title: "Crafting",
                desc: "Meticulous construction of your garment"
              },
              {
                step: "04",
                title: "Refinement",
                desc: "Final fittings and adjustments"
              }
            ].map((step) => (
              <div key={step.step} className="text-center space-y-4">
                <span className="block font-italiana text-6xl text-white/20">{step.step}</span>
                <h3 className="font-italiana text-2xl">{step.title}</h3>
                <p className="text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 