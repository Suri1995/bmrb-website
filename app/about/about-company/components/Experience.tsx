"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    description:
      "Managed the data collection process for major brands like Apollo Pharmacy and Taxi for Sure, executing comprehensive studies on a PAN India scale.",
    image: "/data.webp",
    company: "PAN India Data Collection",
    role: "For Apollo Pharmacy & Taxi for Sure",
  },
  {
    id: 2,
    description:
      "We conducted a detailed study for the Hyderabad Metro Rail on passenger needs and expectations to help determine a fare structure affordable by all classes.",
    image: "/metro.webp",
    company: "Hyderabad Metro Rail (Keolis)",
    role: "Public Transport & Infrastructure",
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <img src="/icon_1.webp" alt="Title Icon" className="mx-auto mb-4 w-12" />

        <h6 className="text-sm font-semibold tracking-[3px] text-indigo-700 uppercase mb-3">
          Our Project Experience
        </h6>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          A Look at Our Diverse Portfolio
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 px-4">
        {testimonials.map((item) => (
          <div key={item.id} className="w-full md:w-[420px] flex-shrink-0">
            <div className="bg-gray-50 rounded-2xl p-5 shadow-sm relative h-full">
              {/* Description */}
              <blockquote className="text-sm leading-6 text-gray-700">
                {item.description}
              </blockquote>

              {/* Triangle */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-50 rotate-45"></div>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-8">
                <Image
                  src={item.image}
                  alt={item.company}
                  width={60}
                  height={60}
                  className="w-14 h-14 object-contain"
                />

                <div>
                  <h6 className="text-lg font-bold text-gray-900">
                    {item.company}
                  </h6>

                  <small className="text-sm text-gray-500">{item.role}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Image */}
      <Image
        src="/logo-image.webp"
        alt="Background"
        width={800}
        height={100}
        className="w-[320px] sm:w-[560px] md:w-[640px] lg:w-[960px] object-cover pointer-events-none md:mx-auto mt-10 md:mt-10"      />
    </section>
  );
}
