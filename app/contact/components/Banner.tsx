"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const contactCards = [
  {
    icon: <Mail className="w-7 h-7" />,
    label: "Email",
    value: "hello@bmrb.com",
    sub: "We reply within 24 h",
  },
  {
    icon: <Phone className="w-7 h-7" />,
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Fri, 9 AM–6 PM IST",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    label: "Head Office",
    value: "Hyderabad, Telangana",
    sub: "India",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    label: "Global Clients",
    value: "30+ Countries",
    sub: "Multi-language research",
  },
];

export default function Banner() {
  return (
    <section
      className="relative overflow-visible"
      style={{
        backgroundImage: "url('/home-bg-5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Wavy Overlay */}
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

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="max-w-5xl">
          <p className="text-sm md:text-lg text-white mb-6 tracking-[3px] uppercase">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
            We'd Love To Hear From You
          </h1>

          <p className="text-sm md:text-lg text-white/80 leading-relaxed max-w-3xl">
            Connect with our research experts for customised market
            intelligence, strategic insights, and data-driven solutions.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="absolute hidden left-0 right-0 bottom-0 translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="
                bg-[#f7f7f7]
                border-2
                border-[#dce4f0]
                rounded-[22px]
                px-5
                py-5
                flex
                items-start
                gap-4
                min-h-[110px]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[16px] bg-[#e8edf5] flex items-center justify-center shrink-0 text-[#2f67bc]"
                >
                  {React.cloneElement(card.icon, {
                    className: "w-5 h-5",
                  })}
                </div>

                {/* Content */}
                <div>
                  <p
                    className="
        text-[10px]
        uppercase
        tracking-[1.8px]
        font-semibold
        text-[#8ca8d7]
        mb-1
      "
                  >
                    {card.label}
                  </p>

                  <h3
                    className="
        text-[15px]
        font-bold
        text-[#0f172a]
        leading-tight
        mb-1
      "
                  >
                    {card.value}
                  </h3>

                  <p
                    className="
                    text-[13px]
                    text-[#97add3]
                    leading-relaxed
                    "
                  >
                    {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
