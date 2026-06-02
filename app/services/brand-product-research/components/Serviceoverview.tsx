import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Serviceoverview() {
  return (
    <section className="bg-white w-full py-15">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
        <p className="text-2xl md:text-4xl font-bold">
          We help businesses understand consumer perceptions and market
          positioning through comprehensive Brand and Product Research, ensuring
          your brand resonates with its target audience.
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Focus Areas</span> Consumer Goods,
          Startups, Corporate
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Methodologies</span> Quantitative &
          Qualitative Research
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Key Services</span> Brand Equity
          Studies, Product Testing, Package Research, Name & Logo Tests
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Outcomes</span> Actionable Insights,
          Go-to-Market Strategy
        </p>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[20px] md:text-[30px]">
            Services Overview:
          </h1>
          <p className="text-sm md:text-lg">
            Understanding how your brand is perceived and how your products meet
            consumer needs <br /> is critical for success. Our research studies
            delve into brand name connectivity, logo testing,
            <br /> brand image correlation, and consumer attitudes to build a
            complete profile of your market
            <br /> standing. We diagnose reasons for brand switching and analyze
            purchase behaviors to
            <br /> provide a clear path for growth.
          </p>
        </div>

        <Image
          src="/services-1.webp"
          alt="Company Profile"
          width={1100}
          height={700}
          className="object-cover w-full h-auto mb-20"
        />

        <div className="flex gap-10">
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] mb-5">
              Key Questions We Answer:
            </h1>
            <p className="text-[14px] md:text-lg">
              Many businesses struggle to connect with their audience. Our
              research addresses critical questions: Is our brand name
              effective? Does our packaging appeal to consumers? How do we stack
              up against competitors? What are the key drivers for customer
              loyalty and brand switching?
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] mb-5">
              Our Approach & Solutions:
            </h1>
            <p className="text-[14px] md:text-lg">
              We employ a range of proven research methods, from concept and
              product tests to detailed usage and attitude studies. Our approach
              provides clear, data-driven answers, helping you refine your
              product, positioning, and communication strategies for maximum
              market impact.
            </p>
          </div>
        </div>

        <p className="mt-10 font-bold text-2xl md:text-3xl mb-5 md:mb-10">
          By partnering with BMRB, you gain the strategic insights needed to
          build a resilient brand, launch successful products, and maintain a
          strong, positive connection with your customers.
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
              PROJECTS FOR STARTUPS
            </h1>
            <p className="text-3xl font-bold mb-5">300+</p>
          </div>
          <div>
            <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">
              COSMETICS TESTED (SINGLE CLIENT)
            </h1>
            <p className="text-3xl font-bold mb-5">16+</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-5">
            Comprehensive Research Areas:
          </h1>
          <p className="text-[14px] md:text-lg">
            Our Brand and Product research services are extensive. We cover
            everything from initial concept development and market investigation
            to post-launch tracking studies. This includes positioning studies,
            visual identity testing, advertising studies, and merchandising
            analysis to ensure your brand's message is consistent and effective
            at every touchpoint.
          </p>
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
