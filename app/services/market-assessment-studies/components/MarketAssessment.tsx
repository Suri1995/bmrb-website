import React from "react";
import Image from "next/image";

export default function MarketAssessment() {
  return (
    <section className="bg-white w-full py-15">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
        <p className="text-2xl md:text-4xl font-bold">
          We provide comprehensive market assessments to help businesses identify opportunities, estimate market potential, and make data-driven decisions for market entry and expansion.
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">
            Focus Areas
          </span>{" "}
          New Business Ventures, Startups, Corporate Expansion
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">
            Methodologies
          </span>{" "}
          Potential Estimation, Need Assessment, Prognostic Studies
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">
            Key Services
          </span>{" "}
          Market Assessment, Feasibility Studies, Economic Viability
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">
            Outcomes
          </span>{" "}
          Market Sizing Data, Opportunity Identification, Strategic Planning
        </p>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[20px] md:text-[30px]">Services Overview:</h1>
          <p className="text-sm md:text-lg">
            Entering a new market or launching a new product requires a deep understanding of the landscape. Our Market Assessment Studies provide a holistic view, evaluating the size of the opportunity, the needs of the target audience, and the competitive environment. We deliver the foundational knowledge you need to build a successful strategy.
          </p>
        </div>

        <Image
          src="/service-6.webp"
          alt="Company Profile"
          width={1100}
          height={700}
          className="object-cover w-full h-auto mb-20"
        />

        <div className="flex gap-10">
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] mb-5">Key Questions We Answer:</h1>
            <p className="text-[14px] md:text-lg">
              Strategic decisions are fraught with uncertainty. Our research helps answer fundamental questions: What is the true size and potential of this market? Is there a genuine need for our product or service? Who are the key competitors and what are their strategies? What are the potential risks and barriers to entry?
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] mb-5">
              Our Approach & Solutions:
            </h1>
            <p className="text-[14px] md:text-lg">
              Our approach involves tailored assessment studies. For
              infrastructure, we conduct Social Impact Assessments (SIA). For
              public services, we analyze functionality and perception, as seen
              in our work on the 'She Team' system and Traffic E-challan
              consequences for the Telangana Police.
            </p>
          </div>
        </div>

        <p className="mt-10 font-bold text-2xl md:text-3xl mb-5 md:mb-10">
            With a BMRB Market Assessment Study, you can confidently invest in new ventures, armed with the data and insights necessary to minimize risk and maximize your chances of success.
        </p>

        <div className="flex items-center gap-8 md:gap-14 md:mt-5 mt-3 mb-12 md:mb-16">
          <Image
            src="/project-image1.webp"
            alt="Icon 1"
            width={40}
            height={40}
            className="md:w-20 w-12 h-auto object-contain"
          />

          <Image
            src="/project-image3.webp"
            alt="Icon 2"
            width={20}
            height={20}
            className="md:w-20 w-12 h-auto object-contain"
          />

          <Image
            src="/project-image2.webp"
            alt="Icon 3"
            width={20}
            height={20}
            className="md:w-20 w-12 h-auto object-contain"
          />
        </div>

        <div className="flex gap-10">
          <div>
            <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">
              GLOBAL AUTOMOTIVE CLIENTS
            </h1>
            <p className="text-3xl font-bold mb-5">300+</p>
          </div>
          <div>
            <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">
              MAJOR PAN INDIA STUDIES
            </h1>
            <p className="text-3xl font-bold mb-5">2</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-5">
            Comprehensive Research Areas:
          </h1>
          <p className="text-[14px] md:text-lg">
            Our market assessment capabilities extend to detailed due diligence for mergers and acquisitions, sourcing strategy to optimize supply chains, and business opportunity identification. We also conduct thorough feasibility and economic viability studies to provide a 360-degree view of any new venture.
          </p>
        </div>

        <Image
          src="/logo-image.webp"
          alt="Background"
          width={800}
          height={100}
          className="object-cover pointer-events-none md:mx-auto mt-10 md:mt-10"
        />
      </div>
    </section>
  );
}
