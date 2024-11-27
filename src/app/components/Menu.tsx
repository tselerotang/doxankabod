"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { 
      name: 'HOME', 
      path: '/',
      description: 'Welcome to Doxa N Kabod'
    },
    { 
      name: 'ABOUT', 
      path: '/about',
      description: 'Our Story & Heritage'
    },
    { 
      name: 'SERVICES', 
      path: '/services',
      description: 'Bespoke Tailoring Services'
    },
    { 
      name: 'GALLERY', 
      path: '/gallery',
      description: 'Our Finest Creations'
    },
    { 
      name: 'CONTACT', 
      path: '/contact',
      description: 'Visit Our Atelier'
    }
  ];

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative z-[70] flex flex-col items-end gap-1.5 sm:gap-2 group"
      >
        <span className={`w-6 sm:w-8 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <span className={`w-4 sm:w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'group-hover:w-6 sm:group-hover:w-8'}`} />
        <span className={`w-6 sm:w-8 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
      </button>

      {/* Menu Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white z-[65]
                   transform transition-transform duration-500 ease-out
                   ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ isolation: 'isolate' }}
      >
        <div className="h-full flex flex-col bg-white">
          {/* Menu Header */}
          <div className="p-8 border-b border-neutral-200">
            <h2 className="font-italiana text-2xl text-neutral-900">DOXA N KABOD</h2>
            <p className="text-xs tracking-[0.3em] text-neutral-900 mt-1">GLORY & HONOR</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-8 py-4 transition-all duration-300
                          ${pathname === item.path 
                            ? 'bg-neutral-100 border-l-2 border-neutral-900' 
                            : 'border-l-2 border-transparent hover:bg-neutral-50'
                          }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-neutral-900 font-medium">0{index + 1}</span>
                  <div>
                    <span className="block font-italiana text-xl text-neutral-900">
                      {item.name}
                    </span>
                    <span className="block text-sm text-neutral-600 mt-1">
                      {item.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="p-8 border-t border-neutral-200">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-900 font-medium">Contact</p>
                <p className="text-neutral-600 mt-1">+44 20 7123 4567</p>
              </div>
              <div>
                <p className="text-sm text-neutral-900 font-medium">Email</p>
                <p className="text-neutral-600 mt-1">info@doxankabod.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 z-[60]
                   ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
} 