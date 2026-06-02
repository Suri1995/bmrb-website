"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    description:
      "Conducted a comprehensive study on dealer and customer satisfaction to measure and manage key performance metrics in the automotive sector.",
    image: "/hyundai.webp",
    company: "Hyundai Motors",
    role: "Global Automotive Leader",
  },
  {
    id: 2,
    description:
      "Performed multiple assessment studies, including analyses of the Traffic E-challan system, 'She Team' functioning, and the Hawkeye safety application.",
    image: "/Telangana.webp",
    company: "Telangana Police Department",
    role: "State Government Institution",
  },
  {
    id: 3,
    description:
      "Executed a listener satisfaction study for the 92.7 radio channel, gathering valuable feedback to enhance the broadcasting experience.",
    image: "/Reliance.webp",
    company: "Reliance Broadcasting",
    role: "Media & Entertainment",
  },
  {
    id: 4,
    description:
      "Provided crucial market research for over 300+ startups, including industry leaders like Swiggy, to support new business launches and growth strategies.",
    image: "/Start-up.webp",
    company: "Start-up Ecosystem",
    role: "Featuring Swiggy.com & Others",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move ONLY one card at a time
  const nextSlide = () => {
    if (current < testimonials.length - cardsPerView) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center ">
        <img src="/icon_1.webp" alt="Title Icon" className="mx-auto mb-4 w-12" />

        <h6 className="text-sm font-semibold tracking-[3px] text-indigo-700 uppercase mb-3">
          Our Clients & Projects
        </h6>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Showcasing Our Work With <br />
          Government & Industry Leaders
        </h2>
      </div>

      {/* Carousel */}
      <div className="mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
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
        {/* Buttons */}
      <div className="flex justify-center gap-3 max-w-6xl mx-auto px-4 mt-8">
        <button
          onClick={prevSlide}
          className="bg-accent text-white shadow-md p-3 rounded-full hover:bg-white hover:text-blue-600 transition hover:cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-accent text-white shadow-md p-3 rounded-full hover:bg-white hover:text-blue-600 transition hover:cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
        <Image
          src="/logo-image.webp"
          alt="Background"
          width={800}
          height={100}
          className=" object-cover pointer-events-none md:mx-auto mt-10 md:mt-10"
        />
      </div>
    </section>
  );
}
