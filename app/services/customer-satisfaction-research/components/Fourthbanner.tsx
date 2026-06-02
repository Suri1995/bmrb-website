'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Fourthbanner() {
  return (
    <section className="relative overflow-hidden h-[500px] md:min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-pg-1.webp')",
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">

          {/* Hero Content */}
          <div className="max-w-5xl flex flex-col mt-30">

            <p className="text-sm md:text-lg text-white mb-8 leading-relaxed tracking-wide">
                Measuring and managing customer loyalty through real-time feedback and tracking.
            </p>

            <h1 className="text-4xl md:text-7xl font-bold font-sans-serif text-white mb-10 leading-tight tracking-tight">
                CUSTOMER SATISFACTION RESEARCH
            </h1>

            {/* Buttons */}
          </div>
          </div>
      </div>
    </section>
  );
}