"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import icon1 from "@/public/icon1.webp";
import icon2 from "@/public/icon2.webp";
import icon3 from "@/public/icon3.webp";

export default function Expertise() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="expertise"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full">
          
          {/* Heading + Paragraph */}
          <div className="flex flex-col gap-5 max-w-xl">
            <h2 className="text-sm font-semibold tracking-[3px] text-indigo-700 uppercase">
              Our Expertise
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Market Research Driven by
              <br />
              Experienced Professionals
            </h1>

            <p className="text-[14px] md:text-[16px] leading-8 text-gray-600">
              We provide high-quality data reports collected and analyzed by
              certified professionals. Our commitment is to accuracy, timely
              deliverables, and dedicated service, ensuring 100% confidentiality
              and value for every client.
            </p>
          </div>

          {/* ICONS */}
          <div className="flex md:items-start md:justify-start items-center justify-center gap-12 mt-10 mb-10">
              <Image
                src={icon1}
                alt="icon-1"
                width={60}
                height={60}
                className="w-[60px] h-auto"
              />

            <Image
                src={icon2}
                alt="icon-2"
                width={60}
                height={60}
                className="w-[60px] h-auto"
              />
              
              <Image
                src={icon3}
                alt="icon-3"
                width={60}
                height={60}
                className="w-[60px] h-auto"
              />
          
          </div>

          {/* BUTTON */}
          <Link
            href="/clients?tab=projects"
            className="flex md:inline-flex items-center justify-center px-10 py-5 rounded-full text-white text-sm font-bold bg-[#490eea] shadow-xl hover:scale-105 transition-transform duration-300 md:mb-0 mb-10"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-5 flex-1 justify-center">
          
          {/* Image 1 */}
          <div
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(${offsetY * 0.04}px)`,
            }}
          >
            <Image
              src="/home-1.webp"
              alt="Services Illustration 1"
              width={320}
              height={520}
              className="w-52 sm:w-64 h-auto object-cover shadow-lg"
            />
          </div>

          {/* Image 2 */}
          <div
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(${-offsetY * 0.04}px)`,
            }}
          >
            <Image
              src="/home-2.webp"
              alt="Services Illustration 2"
              width={320}
              height={520}
              className="w-52 sm:w-64 h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}