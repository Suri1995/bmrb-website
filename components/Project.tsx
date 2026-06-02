
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import projectImage from "@/public/home-meet-1.webp";

import icon1 from "@/public/project-image1.webp";
import icon2 from "@/public/project-image3.webp";
import icon3 from "@/public/project-image2.webp";

export default function Project() {
  return (
    <section className="w-full bg-[#f5f5f5] px-6 py-20 overflow-hidden">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          {/* Small Heading */}
          <p className="text-sm tracking-[3px] font-semibold text-indigo-700 uppercase font-sans-serif mb-6">
            HAVE A PROJECT IN MIND?
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold font-sans-serif leading-tight text-black mb-6">
            Let's Discuss Your Market
            <br />
            Research Needs
          </h1>

          {/* Paragraph */}
          <p className="text-gray-900 text-[14px] md:text-lg font-sans-serif leading-[25px] max-w-2xl mb-16">
            Whether you're a government institution, a private<br />
            organization, or a startup, we have the experience to deliver
            the insights you need. Reach out to our team to get started.
          </p>

          {/* Icons Row */}
          <div className="flex items-center gap-14 mb-16">

            <div className="relative w-[70px] h-[70px]">
              <Image
                src={icon1}
                alt="Icon 1"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-[70px] h-[70px]">
              <Image
                src={icon2}
                alt="Icon 2"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-[70px] h-[70px]">
              <Image
                src={icon3}
                alt="Icon 3"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Button */}
          <Link
                href="/contact"
                className="w-fit px-10 py-5 rounded-full
                bg-[#490eea] text-white text-sm md:text-lg
                hover:scale-105 transition-transform duration-300
                shadow-xl"
              >
                Contact Us Now
              </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[640px] overflow-hidden">

          <Image
            src={projectImage}
            alt="Project Discussion"
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>
    </section>
  );
}