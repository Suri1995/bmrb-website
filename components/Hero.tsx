'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center " 
    style={{
          backgroundImage: "url('/home-pg-1.webp')",
        }}
    >

      {/* Background Image */}
      <div
        className="absolute max-w-7xl inset-0 bg-cover bg-center" 
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
          <div className="max-w-5xl flex flex-col">

            <p className="text-sm md:text-lg text-white mb-8 leading-relaxed tracking-wide mt-30 md:mt-50">
              A full-service market research organization providing insights across India.
            </p>

            <h1 className="text-4xl md:text-7xl font-bold font-sans-serif text-white mb-10 leading-tight tracking-tight">
              Qualitative Data & In-depth Market Research<span className='text-cyan-300'>.</span>
            </h1>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-5 mb-20">

              <Link
                href="/about/about-company"
                className="px-8 py-4 w-full md:w-fit hover:bg-blue-800 hover:text-white bg-cyan-300 text-sidebar-primary rounded-3xl font-medium transition-all shadow-xl flex items-center justify-center gap-2 w-fit"
              >
                Explore Our Company
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 w-full md:w-fit hover:bg-red-600 hover:text-white bg-cyan-300 text-sidebar-primary rounded-3xl font-medium transition-all shadow-xl flex items-center justify-center gap-2 w-fit"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mb-10">

            {[
              { number: '15+', label: 'Years of Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Research Experts' },
              { number: '100%', label: 'Confidentiality' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-white mb-3">
                  {stat.number}
                </div>

                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}