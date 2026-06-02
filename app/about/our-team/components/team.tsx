import React from "react";
import Image from "next/image";

export default function team() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-8 flex flex-col gap-7">
        <p className="text-sm md:text-lg font-semibold tracking-[3px] text-indigo-700 uppercase">
          OUR PROFESSIONAL TEAM
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Experienced Professionals Driving Quality Research
        </h1>
        <p className="text-sm">
          Our strength lies in our people. The Brand Market Research Bureau is
          powered by a <br />
          team of trained, certified, and experienced market research
          professionals, <br />
          including dedicated Data Analysts, Researchers, and a Quality Control
          team committed <br />
          to delivering the highest quality data.
        </p>
        <div className="flex md:flex-row flex-col gap-5 mb-10">
          <p className="text-[14px] md:text-sm leading-[25px] tracking-wide font-medium">
            Our core operational team consists of 100 freelancers and 15
            supervisors who are experienced and trained in certified market
            research programs. To carry out large-scale research projects, we
            have a freelance executive team of over 500 members throughout
            Telangana & AP.
          </p>
          <p className="text-[14px] md:text-sm leading-[25px] tracking-wide font-medium">
            Our team of in-house analysts brings a wealth of experience to every
            project. They have worked on several government-related initiatives
            and for brand leaders in various sectors, ensuring a deep
            understanding of complex market dynamics.
          </p>
        </div>
      </div>
      <Image
        src="/logo-image.webp"
        alt="Background"
        width={800}
        height={100}
        className="w-[320px] sm:w-[560px] md:w-[640px] lg:w-[960px] object-cover pointer-events-none md:mx-auto mt-10 md:mt-10"
      />
    </section>
  );
}
