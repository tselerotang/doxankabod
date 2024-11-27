import type { Metadata } from "next";
import { Italiana, Inter } from 'next/font/google';
import "./globals.css";

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "DOXA N KABOD | Luxury Tailoring House",
  description: "Where craftsmanship meets divine glory. Experience bespoke tailoring at its finest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${italiana.variable} ${inter.variable} 
        font-sans bg-[#0A0A0A] text-white
        selection:bg-white selection:text-black`}
      >
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-[60] mix-blend-soft-light" />
        
        <div className="fixed inset-0 bg-gradient-radial from-zinc-800/20 via-black to-black pointer-events-none" />
        
        <div className="fixed inset-0 pointer-events-none z-[55]">
          <div className="h-full max-w-[1800px] mx-auto px-4 sm:px-8">
            <div className="h-full grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative h-full">
                  <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.05]" />
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white/[0.08] rounded-full -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white/[0.08] rounded-full -translate-x-1/2" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-4 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-px bg-white/[0.05]" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {children}
        </div>

        <div id="gradient-follower" className="fixed pointer-events-none z-50 opacity-0 transition-opacity duration-500
          w-[500px] h-[500px] bg-gradient-radial from-white/5 to-transparent rounded-full
          -translate-x-1/2 -translate-y-1/2" />

        <div className="fixed top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-l border-t border-white/[0.08]" />
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/[0.1] rotate-45" />
        </div>
        <div className="fixed top-0 right-0 w-32 h-32">
          <div className="absolute top-0 right-0 w-full h-full border-r border-t border-white/[0.08]" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-white/[0.1] -rotate-45" />
        </div>
        <div className="fixed bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-0 left-0 w-full h-full border-l border-b border-white/[0.08]" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-white/[0.1] -rotate-45" />
        </div>
        <div className="fixed bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full border-r border-b border-white/[0.08]" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/[0.1] rotate-45" />
        </div>

        <div className="fixed inset-0 bg-black z-[100] pointer-events-none opacity-0 transition-opacity duration-1000">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
              <h1 className="font-italiana text-3xl mb-2">DOXA N KABOD</h1>
              <p className="text-xs tracking-[0.3em] text-white/50">GLORY & HONOR</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
