import React from "react";
import Image from "next/image";

const clients = [
  {
    name: "Hyderabad Metro Rail (keolis)",
    description:
      "A study on passenger needs and demands to determine an affordable fare.",
  },
  {
    name: "SIA Project: Vikarabad-Yalal",
    description:
      "Social Impact Assessment for a high-level bridge construction project.",
  },
  {
    name: "SIA Project: Vikarabad-Peddammul",
    description:
      "Social Impact Assessment for a high-level bridge construction project.",
  },
  {
    name: "Election & Opinion Surveys",
    description:
      "Surveys for Medak & Madira constituencies (2014) and opinion polls since 2009.",
  },
  {
    name: "Telangana Police Department",
    description:
      "Multiple evaluation and assessment projects for public services.",
  },
  {
    name: "Traffic E-challan System Study",
    description:
      "Survey on the advantages and disadvantages of implementing the e-challan system.",
  },
  {
    name: "She Team Functioning Study",
    description:
      'Studied the perception of the "She Team" system among women and students.',
  },
  {
    name: "Passport Officer Performance",
    description:
      "State-wide study on the performance of passport verification officers.",
  },
  {
    name: "Hawkeye Application Assessment",
    description: "Assessment study for the citizen safety mobile application.",
  },
  {
    name: "Hyundai Motors",
    description:
      "Dealer satisfaction and customer satisfaction measurement & management study.",
  },
  {
    name: "Taxi for Sure & Apollo Pharmacy",
    description:
      "Managed the PAN India data collection process for market studies.",
  },
  {
    name: "Aparna Enterprises Ltd",
    description:
      "Market research for the launch of the e-commerce platform Homecues.com.",
  },
  {
    name: "Askme.com (Get it Info Media)",
    description:
      "Platform onboarding project to register retailers on Askme.com.",
  },
  {
    name: "Srinivasa Logistics",
    description: "A comprehensive customer satisfaction study.",
  },
  {
    name: "Reliance Broadcasting (92.7)",
    description: "Listener satisfaction study to gather audience feedback.",
  },
  {
    name: "Sarvotham Pharma",
    description:
      "Ongoing product testing for 16 different cosmetic products since 2015.",
  },
  {
    name: "Sahaay.com",
    description: "Market research to support a new business launch.",
  },
  {
    name: "IBS & ISB Institutions",
    description:
      "Served as an official project guide for leading business school institutions.",
  },
  {
    name: "Swiggy.com",
    description:
      "Market research projects for the food delivery service leader.",
  },
  {
    name: "Junglee Games",
    description: "Conducted a detailed player satisfaction survey.",
  },
  {
    name: "Zoylo.com",
    description:
      "Market research focusing on the doctors segment of the platform.",
  },
  {
    name: "NCL Wintech",
    description: "Provided dedicated market research services.",
  },
  {
    name: "Oxygem Mineral Water",
    description: "A comprehensive brand recollection and awareness study.",
  },
  {
    name: "Bambino",
    description: "Conducted a detailed brand reformulation study.",
  },
  {
    name: "NCL-AAC Blocks",
    description: "Provided dedicated market research services.",
  },
  {
    name: "Various Startups",
    description:
      "Experience on more than 300+ market research projects for startups.",
  },
];

export default function Cards() {
  return (
    <section className="py-14 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8 leading-snug">
            We have had the privilege of working with a diverse range of
            clients,
            <br />
            from government institutions and brand leaders to innovative
            startups across India.
          </h1>

          <p className="text-lg md:text-xl mb-5 font-semibold text-indigo-600">
            Our Portfolio
          </p>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mb-10">
            Below is a snapshot of the projects and organizations we have
            partnered with, showcasing our experience across various sectors and
            research disciplines.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="border-b border-gray-200">
                <h2 className="text:sm md:text-xl font-semibold text-center text-indigo-600 py-5 px-3 md:py-10 md:px-6">
                  {client.name}
                </h2>
              </div>

              {/* Card Body */}
              <div className="px-4 py-6 md:px-8 md:py-12 flex items-center justify-center min-h-[150px] md:min-h-[220px]">
                <p className="text-center text-gray-600 text-[14px] md:text-[18px] leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/logo-image.webp"
          alt="Background"
          width={800}
          height={100}
          className="w-[320px] sm:w-[560px] md:w-[640px] lg:w-[960px] object-cover pointer-events-none md:mx-auto mt-10 md:mt-10"
        />
      </div>
    </section> 
  );
}
