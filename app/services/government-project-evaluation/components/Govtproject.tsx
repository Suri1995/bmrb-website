import React from "react";
import Image from "next/image";

export default function Govtproject() {
  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
        <p className="text-2xl md:text-4xl font-bold">
          We provide independent and rigorous evaluations of government projects
          and public services to measure impact, identify gaps, and ensure
          accountability.
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Focus Areas</span> Public
          Infrastructure, Law Enforcement, Transportation
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Methodologies</span> Assessment Studies,
          Social Impact Assessment (SIA)
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Key Services</span> Project Evaluation,
          Gap Analysis, Consequence Studies
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Outcomes</span> Policy Recommendations,
          Improved Service Delivery, Impact Measurement
        </p>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[20px] md:text-[30px]">
            Services Overview:
          </h1>
          <p className="text-sm md:text-lg">
            Effective governance relies on understanding the real-world impact
            of public projects and policies. Our evaluation services offer
            government institutions a clear, data-driven perspective on the
            performance and consequences of their initiatives. We have a strong
            track record of working with various departments to provide
            actionable insights.
          </p>
        </div>

        <Image
          src="/services-5.webp"
          alt="Company Profile"
          width={1100}
          height={700}
          className="object-cover w-full h-auto mb-20"
        />

        <div className="flex gap-10">
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px]mb-5">
              Key Questions We Answer:
            </h1>
            <p className="text-[14px] md:text-lg">
              Government bodies need to ensure their projects are effective and
              well-received. Our research helps answer crucial questions: What
              is the public perception of this new service? Are there unintended
              consequences of this policy change? How can we identify and bridge
              gaps in our service delivery?
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
          By partnering with BMRB for project evaluation, government departments
          can make informed decisions, improve public services, and build
          greater trust with the citizens they serve.
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
            <p className="text-3xl font-bold mb-5">4+</p>
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
            Our government evaluation services are comprehensive. We conduct
            need assessments to inform initial project design, conflict
            management studies to address public concerns, and detailed
            feasibility studies to ensure the long-term viability and success of
            public sector investments.
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
