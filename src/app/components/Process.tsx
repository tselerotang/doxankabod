"use client";

import Image from "next/image";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Personal styling session to understand your preferences",
      image: "https://images.unsplash.com/photo-1558304970-abd589baebe5?q=80"
    },
    {
      number: "02",
      title: "Measurement",
      desc: "Precise measurements for the perfect fit",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80"
    },
    {
      number: "03",
      title: "Creation",
      desc: "Skilled craftsmanship brings your vision to life",
      image: "https://images.unsplash.com/photo-1611911813383-67769b37a149?q=80"
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-40">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-12 sm:gap-20">
          <div className="sm:sticky sm:top-40 sm:self-start">
            <span className="text-xs sm:text-sm text-white/40">02 / Process</span>
            <h3 className="font-italiana text-5xl sm:text-7xl mt-4 sm:mt-8 mb-6 sm:mb-12">
              The Art of<br />Creation
            </h3>
            <p className="text-white/40 max-w-sm">
              Each garment is meticulously crafted through a refined process, 
              ensuring perfection in every detail.
            </p>
          </div>
          <div className="space-y-20 sm:space-y-40">
            {steps.map((step) => (
              <div key={step.number} className="group">
                <div className="relative aspect-video mb-8 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-12 items-start">
                  <span className="font-italiana text-6xl text-white/20">{step.number}</span>
                  <div>
                    <h4 className="font-italiana text-2xl mb-4">{step.title}</h4>
                    <p className="text-white/40">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 