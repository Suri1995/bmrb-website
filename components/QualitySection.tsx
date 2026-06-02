"use client";

import Link from "next/link";
import Image from "next/image";
import qualityImage from "@/public/home-work-2.webp"; // replace with your image
import graph from "@/public/icon-chart-graph.webp"

export default function QualitySection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6 md:px-16">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative w-100 h-[300px] bg-cover">
          <Image
            src={qualityImage}
            alt="Quality Insights"
            fill
            className=""
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          
          {/* Small Heading */}
          <p className="text-sm font-semibold tracking-[3px] font-sans-serif text-indigo-700 uppercase mb-6">
            Our Commitment To Quality
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-sans-serif font-bold leading-tight text-black mb-6">
            Delivering Accurate<br/> Insights with Guaranteed Confidentiality
          </h1>

          {/* Paragraph */}
          <p className="text-gray-900 text-[14px] md:text-sm font-sans-serif leading-[25px] max-w-3xl mb-16">
            Our team includes over 100 trained freelancers and 15 experienced
            supervisors. With dedicated Data Analysts, Researchers, and a
            professional Quality Control team, we ensure every project meets the
            highest standards.
          </p>

          {/* Bottom Graph Placeholder */}
          <div className="relative w-full h-[140px] bg-white ">
            <Image
              src={graph} // replace with your graph image
              alt="Quality Graph"
              fill
              className="object-cover"
              priority
            />
          </div>

          <Link
            href="/clients?tab=projects"
            className="inline-flex w-40 h-12 items-center justify-center px-10 py-5 rounded-full text-white text-sm font-bold bg-[#490eea] shadow-xl hover:scale-105 transition-transform duration-300 mt-10"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}