import React from "react";
import Image from "next/image";

export default function Election() {
  return (
    <section className="bg-white w-full py-15">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
        <p className="text-2xl md:text-4xl font-bold">
          With over a decade of experience, we provide accurate and insightful
          election surveys and opinion polls to gauge public sentiment and
          predict political outcomes.
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Focus Areas</span> Political Campaigns,
          Media, Social Research
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Methodologies</span> Quantitative
          Surveys, Readership Surveys
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Key Services</span> Election Surveys,
          Opinion Polling, Political & Social Research
        </p>
        <p className="text-[14px] md:text-[20px]">
          <span className="font-medium">Outcomes</span> Voter Behavior Insights,
          Public Opinion Trends, Campaign Strategy Data
        </p>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[20px] md:text-[30px]">
            Services Overview:
          </h1>
          <p className="text-sm md:text-lg">
            Understanding the political landscape and public opinion is crucial
            for campaigns, media, and social analysis. Our services are designed
            to provide a clear and accurate picture of voter intent and
            sentiment. We have a proven track record of conducting detailed
            surveys for specific constituencies and broader opinion polls since
            2009.
          </p>
        </div>

        <Image
          src="/home-clients-4.webp"
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
              Political strategy requires precise data. We help answer the most
              pressing questions: What is the current voter sentiment in a key
              demographic? Which issues are most important to the electorate?
              How is our campaign messaging being received? What are the likely
              outcomes based on current trends?
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] mb-5">
              Our Approach & Solutions:
            </h1>
            <p className="text-[14px] md:text-lg">
              Our approach combines rigorous quantitative methods with deep
              contextual understanding. Having conducted opinion poll surveys
              since 2009, we have honed our techniques for accuracy. By
              deploying trained teams for on-the-ground data collection, we
              ensure our surveys reflect the true sentiments of the population.
            </p>
          </div>
        </div>

        <p className="mt-10 font-bold text-2xl md:text-3xl mb-5 md:mb-10">
          Partnering with BMRB for election and opinion research provides your
          campaign or organization with the reliable data needed to craft
          winning strategies and anticipate political trends.
        </p>

        <div className="flex items-center  gap-8 md:gap-14 md:mt-5 mt-3 mb-12 md:mb-16">
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
            <h1 className="text-xl font-bold text-[16px] md:text-xl mb-5 text-indigo-700">
              GLOBAL AUTOMOTIVE CLIENTS
            </h1>
            <p className="text-3xl font-bold mb-5">15+</p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[16px] md:text-xl mb-5 text-indigo-700">
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
            Beyond pre-election polls, our capabilities include a range of
            political and social research services. We conduct readership
            surveys to gauge media influence, multi-cultural research to
            understand diverse voter blocks, and rural market studies to capture
            insights from all sections of the electorate.
          </p>
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
