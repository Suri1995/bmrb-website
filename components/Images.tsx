"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

import homeclients1 from "@/public/home-clients1.webp";
import homeclients2 from "@/public/home-clients-2.webp";
import homeclients3 from "@/public/home-clients3.webp";
import homeclients4 from "@/public/home-clients-4.webp";
import homeclients5 from "@/public/home-clients5.webp";

export default function HeroCarousel() {
  const slides = [
    {
      image: homeclients1,
      subtitle: "GOVERNMENT PROJECT, TRANSPORT, FARE ANALYSIS",
      title: "Hyderabad Metro Rail Study",
    },
    {
      image: homeclients2,
      subtitle: "AUTOMOTIVE, CUSTOMER & DEALER SATISFACTION",
      title: "Hyundai Motors Analysis",
    },
    {
      image: homeclients3,
      subtitle: "PUBLIC SECTOR, SAFETY, PERFORMANCE ASSESSMENT",
      title: "Telangana Police Dept. Projects",
    },
    {
      image: homeclients4,
      subtitle: "POLITICAL RESEARCH & CONSTITUENCY ANALYSIS",
      title: "Election & Opinion Poll Surveys",
    },
    {
      image: homeclients5,
      subtitle: "START-UP SECTOR, BRAND RESEARCH & E-COMMERCE",
      title: "Startup Market Research (Swiggy, etc..)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;

    let interval: NodeJS.Timeout;

    if (checkMobile()) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-10 overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-7xl flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="hidden md:flex absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-30
          w-10 h-10 md:w-14 md:h-14
          items-center justify-center
          text-xl md:text-3xl rounded-full
          bg-accent text-white hover:bg-gray-600
          transition-all duration-200 shadow-lg
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ❮
        </button>

        {/* Main Image */}
        <div className="relative w-full max-w-5xl h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl">
          {/* Background Image */}
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="text-white px-4 md:px-14 pb-6 md:pb-14 z-10 text-center">
              <p className="uppercase tracking-[2px] md:tracking-[5px] text-[8px] sm:text-sm md:text-base mb-2 md:mb-4">
                {slides[currentSlide].subtitle}
              </p>

              <h1 className="text-lg sm:text-2xl md:text-3xl font-light leading-tight max-w-3xl">
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="hidden md:flex absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-30
          w-10 h-10 md:w-14 md:h-14
          items-center justify-center
          text-xl md:text-3xl rounded-full
          bg-accent text-white hover:bg-gray-600
          transition-all duration-300 shadow-lg
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
