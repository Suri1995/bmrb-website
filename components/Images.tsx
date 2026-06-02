"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

import homeclients1 from "@/public/home-clients1.webp";
import homeclients2 from "@/public/home-clients-2.webp";
import homeclients3 from "@/public/home-clients3.webp";
import homeclients4 from "@/public/home-clients-4.webp";
import homeclients5 from "@/public/home-clients5.webp";

const slides = [
  {
    image: homeclients1,
    subtitle: "GOVERNMENT PROJECT · TRANSPORT · FARE ANALYSIS",
    title: "Hyderabad Metro Rail Study",
    tag: "01",
  },
  {
    image: homeclients2,
    subtitle: "AUTOMOTIVE · CUSTOMER & DEALER SATISFACTION",
    title: "Hyundai Motors Analysis",
    tag: "02",
  },
  {
    image: homeclients3,
    subtitle: "PUBLIC SECTOR · SAFETY · PERFORMANCE ASSESSMENT",
    title: "Telangana Police Dept. Projects",
    tag: "03",
  },
  {
    image: homeclients4,
    subtitle: "POLITICAL RESEARCH · CONSTITUENCY ANALYSIS",
    title: "Election & Opinion Poll Surveys",
    tag: "04",
  },
  {
    image: homeclients5,
    subtitle: "START-UP SECTOR · BRAND RESEARCH · E-COMMERCE",
    title: "Startup Market Research (Swiggy, etc.)",
    tag: "05",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = slides.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating || index === current) return;
      setDirection(dir);
      setIsAnimating(true);
      setProgress(0);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total, "next");
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, "prev");
  }, [current, total, goTo]);

  // Autoplay
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const startTime = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100));
    }, 50);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setDirection("next");
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }, AUTOPLAY_DELAY);
  }, [total]);

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current, isPaused, startTimer]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Touch/swipe
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .carousel-root {
          font-family: 'DM Sans', sans-serif;
        }

        .slide-enter-next {
          animation: slideInRight 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .slide-enter-prev {
          animation: slideInLeft 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }

        .text-reveal {
          animation: textReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
        }
        @keyframes textReveal {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .progress-bar {
          transition: width 0.05s linear;
        }

        .nav-btn {
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .nav-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: scale(0);
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
        .nav-btn:hover::after {
          transform: scale(1);
        }
        .nav-btn:focus-visible {
          outline: 2px solid white;
          outline-offset: 3px;
        }

        .dot-btn:focus-visible {
          outline: 2px solid white;
          outline-offset: 2px;
          border-radius: 2px;
        }

        .thumb-btn {
          transition: all 0.3s ease;
        }
        .thumb-btn:hover .thumb-overlay {
          opacity: 0;
        }
        .thumb-btn:focus-visible {
          outline: 2px solid rgba(255,255,255,0.8);
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>

      <section
        className="carousel-root w-full bg-[#0d0d0d] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6"
        aria-label="Featured projects carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Header label */}
        <div className="w-full max-w-5xl mb-5 sm:mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/10" />
          <p
            className="text-white/40 text-[9px] sm:text-[10px] tracking-[4px] sm:tracking-[6px] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Featured Work
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/10" />
        </div>

        {/* Main Carousel */}
        <div
          className="relative w-full max-w-5xl px-8 sm:px-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
        >
          {/* Image + flanking nav buttons wrapper */}
          <div className="relative">
          {/* Slide container */}
          <div
            className="relative w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            aria-live="polite"
            aria-atomic="true"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${total}: ${slide.title}`}
                aria-hidden={i !== current}
                className={`absolute inset-0 ${
                  i === current
                    ? `block ${isAnimating ? (direction === "next" ? "slide-enter-next" : "slide-enter-prev") : ""}`
                    : "hidden"
                }`}
              >
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                />

                {/* Layered gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Text Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10 ${
                    i === current ? "text-reveal" : ""
                  }`}
                >
                  <p
                    className="text-white/50 mb-1.5 sm:mb-2.5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(7px, 1.5vw, 11px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  <h2
                    className="text-white font-light leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px, 4.5vw, 44px)",
                    }}
                  >
                    {slide.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
              <div
                className="progress-bar h-full bg-white/60"
                style={{ width: isPaused ? `${progress}%` : `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Slide autoplay progress"
              />
            </div>

          </div>

          {/* Desktop Prev / Next — flanking the image, centred to image height */}
          <div className="absolute bottom-0 right-0">
          <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="nav-btn hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-11 md:h-11
              items-center justify-center rounded-full
              bg-white/10 backdrop-blur-sm border border-white/20
              text-white hover:bg-white/25 hover:border-white/40
              shadow-lg"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next slide"
            className="nav-btn hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-11 md:h-11
              items-center justify-center rounded-full
              bg-white/10 backdrop-blur-sm border border-white/20
              text-white hover:bg-white/25 hover:border-white/40
              shadow-lg"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          </div>
          </div>

          </div>{/* end image+buttons wrapper */}

          {/* Bottom controls row */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between gap-4">
            {/* Dot indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  className="dot-btn relative h-[3px] rounded-full transition-all duration-400 focus-visible:outline-none"
                  style={{
                    width: i === current ? "28px" : "10px",
                    background: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Counter + mobile nav buttons */}
            <div className="flex items-center gap-3">
              <span
                className="text-white/35 tabular-nums"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
                aria-live="polite"
                aria-label={`Slide ${current + 1} of ${total}`}
              >
                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>

              {/* Mobile prev/next */}
              <div className="flex sm:hidden gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="nav-btn w-9 h-9 flex items-center justify-center rounded-full
                    bg-white/8 border border-white/15 text-white/70 hover:bg-white/15 hover:text-white
                    transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="nav-btn w-9 h-9 flex items-center justify-center rounded-full
                    bg-white/8 border border-white/15 text-white/70 hover:bg-white/15 hover:text-white
                    transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail strip — tablet/desktop only */}
          <div
            className="hidden md:flex mt-5 gap-3"
            role="tablist"
            aria-label="Slide thumbnails"
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide: ${slide.title}`}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                className="thumb-btn relative flex-1 h-[64px] rounded-lg overflow-hidden focus-visible:outline-none"
                style={{
                  opacity: i === current ? 1 : 0.45,
                  transform: i === current ? "scale(1)" : "scale(0.97)",
                  outline: i === current ? "2px solid rgba(255,255,255,0.5)" : "2px solid transparent",
                  outlineOffset: "2px",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div
                  className="thumb-overlay absolute inset-0 bg-black/40 transition-opacity duration-300"
                  style={{ opacity: i === current ? 0 : 1 }}
                />
                {/* Active indicator line */}
                {i === current && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/70" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}