import React from 'react'
import Link from 'next/link'

export default function  Getintouch() {
  return (
    <section className="relative z-20 px-4 md:px-4">
      <div className="h-fit max-w-7xl translate-y-1/2 bg-[#490eea] px-6 py-6 shadow-2xl md:px-14 md:py-14">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left Side */}
          <div className="max-w-2xl">
            <h1 className="text-xl font-bold leading-tight text-white md:text-3xl">
              Ready to Start Your Next Research Project?
            </h1>
          </div>

          {/* Right Side */}
          <div>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-bold tracking-wide text-[#490eea] transition-all duration-300 hover:scale-105 md:h-16 md:px-12 md:text-base"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}