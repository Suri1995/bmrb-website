"use client";

import {
  MessageSquareText,
  LaptopMinimalCheck,
  CloudUpload,
} from "lucide-react";

import Image from "next/image";
import icon1 from "@/public/icon_2.webp";
import icon2 from "@/public/icon_4.webp";
import icon3 from "@/public/icon_3.webp";
import icon4 from "@/public/icon_5.webp";
import icon5 from "@/public/icon_6.webp";
import icon6 from "@/public/icon_1.webp";

export default function ServicesSection() {
  const services = [
    {
      image: icon1,
      title: "Brand & Equity Research",
      description:
        "In-depth studies on brand positioning, image correlation, equity, and consumer attitude.",
    },
    {
      image: icon2,
      title: "Customer Satisfaction",
      description:
        "Measuring and managing customer satisfaction through real-time tracking and feedback analysis.",
    },
    {
      image: icon3,
      title: "B2B & Industrial Research",
      description:
        "Providing market assessment, feasibility studies, and competitive intelligence for B2B sectors.",
    },
    {
      image: icon4,
      title: "Election & Opinion Polls",
      description:
        "Conducting political and social research, including opinion polling and readership surveys."},
    {
      image: icon5,
      title: "Product & Packaging Tests",
      description:
        "Evaluating product performance and packaging effectiveness through comprehensive testing and analysis."
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Small Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-violet-600 text-4xl">
            <Image
              src={icon6}
              alt="Service Icon"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm font-semibold tracking-[3px] tracking-[3px] text-indigo-700 uppercase font-sans-serif">
          Our Spectrum Of Services
        </p>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-sans-serif leading-tight text-black max-w-5xl mx-auto">
          Extensive Research and Advisory Services
          <br />
          for Your Business
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            
            {/* Icon */}
            
              <div className="mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            

            {/* Title */}
            <h2 className="text-xl font-medium font-sans-serif text-black mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-800 font-sans-serif text-sm leading-6">
              {service.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}