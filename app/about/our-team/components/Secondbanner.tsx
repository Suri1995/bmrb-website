'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[500px] md:min-h-screen flex items-center">



      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-bg-3.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Transparent Wavy Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
        >
          {Array.from({ length: 28 }).map((_, i) => (
            <path
              key={i}
              d={`
                M -200 ${i * 38}
                C 150 ${i * 38 + 40},
                  350 ${i * 38 - 20},
                  600 ${i * 38 + 50}
                S 1050 ${i * 38 + 90},
                  1600 ${i * 38 + 20}
              `}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.4"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

          {/* Hero Content */}
          <div className="max-w-5xl flex flex-col mt-10 md:mt-20">

            <p className="text-[14px] md:text-lg text-white mb-8 leading-relaxed tracking-wide">
              Customers see, hear and feel the power of energy.
            </p>

            <h1 className="text-4xl md:text-7xl font-bold font-sans-serif text-white mb-10 leading-tight tracking-tight">
              OUR TEAM
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10 md:mt-15">

              <Link
                href="/clients?tab=projects"
                className="px-6 py-3 text-sm md:text-lg  bg-cyan-300 text-sidebar-primary rounded-full font-medium transition-all shadow-xl flex items-center justify-center gap-2 w-fit"
              >
                EXPLORE OUR SERVICES
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}