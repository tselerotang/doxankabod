"use client";

import Image from "next/image";

export default function Collection() {
  const items = [
    {
      title: "Business Suits",
      desc: "Contemporary sophistication",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80"
    },
    {
      title: "Evening Suits",
      desc: "Timeless elegance",
      image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80"
    },
    {
      title: "Ceremonial Suits",
      desc: "Special moments",
      image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80"
    }
  ];

  return (
    <section id="collection" className="py-20 sm:py-40">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-40">
          <div className="space-y-4 sm:space-y-8">
            <span className="text-xs sm:text-sm text-white/40">01 / Collection</span>
            <h3 className="font-italiana text-5xl sm:text-7xl">Tailored<br />Excellence</h3>
          </div>
          <div className="space-y-16 sm:space-y-24">
            {items.map((item, index) => (
              <div key={item.title} className="group">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white/40">0{index + 1}</span>
                  <h4 className="font-italiana text-2xl">{item.title}</h4>
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-sm text-white/40">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 