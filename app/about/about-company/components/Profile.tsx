import React from "react";
import Image from "next/image";

const profile = [
  {
    id: 1,
    icon: "/icon_2.webp",
    title: "Quality & Accuracy",
    description:
      "We are committed to delivering the highest quality data reports, ensuring every insight is valuable and precise.",
  },
  {
    id: 2,
    icon: "/icon_3.webp",
    title: "Experienced Professionals",
    description:
      "Our team consists of certified and experienced market research professionals and analysts with in-house expertise.",
  },
  {
    id: 3,
    icon: "/icon_4.webp",
    title: "Guaranteed Confidentiality",
    description:
      "We ensure 100% confidentiality in all data collected, maintaining the highest standards of professional integrity.",
  },
  {
    id: 4,
    icon: "/icon_5.webp",
    title: "Dedicated & Timely Service",
    description:
      "We pride ourselves on on-time deliverables and providing dedicated service to meet the unique needs of every client.",
  },
];


export default function Profile() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-20 px-8 flex flex-col gap-7 mb-20">
        <p className="text-sm font-semibold font-sans-serif tracking-[3px] text-indigo-700 uppercase">
          Company profile
        </p>
        <h1 className="text-3xl md:text-5xl font-sans-serif font-bold leading-tight text-gray-900">
          A Market Research Organization Serving
          <br/> India
        </h1>
        <p className="text-[14px] md:text-sm">
          Brand Market Research Bureau is a Market Research organization
          providing services in all <br/>  metropolitan cities and others in India. Our
          brand agency portfolio of services includes<br/> business consultants and
          market research solutions We offer the highest qualitative data,<br/>
          collected and analyzed by trained, certified, and experienced
          professionals.
        </p>
        <div className="flex md:flex-row flex-col gap-5 mb-10">
          <p className="text-[14px] md:text-sm font-medium">
            We have successfully collaborated on numerous projects with both
            State government institutions and private organizations. Our team of
            analysts has worked for several brand leaders in various sectors and
            on government-related projects. We also have extensive experience
            with over 300+ market research projects for startups.
          </p>
          <p className="text-[14px] md:text-sm font-medium">
            Our core team consists of 100 freelancers and 15 supervisors who are
            experienced and trained in a certified market research program. We
            ensure 100% quality and confidentiality in all data collected. Our
            commitment is to value, accuracy, on-time deliverables, and
            dedicated service for every client.
          </p>
        </div>

        <Image
          src="/home-clients5.webp"
          alt="Company Profile"
          width={1100}
          height={700}
          className="object-cover w-full h-auto mb-30"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {profile.map((item) => (
            <div
              key={item.id}
              className="text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-lg font-medium text-black mb-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 font-sans-serif text-sm leading-7 max-w-xs justify-evenly">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
