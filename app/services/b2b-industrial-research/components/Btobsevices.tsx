import React from 'react'
import Image from 'next/image'

export default function Btobsevices() {
  return (
    <section className="bg-white w-full py-15">
              <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
                <p className="text-2xl md:text-4xl font-bold">
                  We deliver strategic market intelligence for the B2B and industrial sectors, enabling informed decisions on feasibility, partner identification, and sourcing strategies.
                </p>
                <p className="text-[14px] md:text-[20px]">
                  <span className="font-medium">
                    Focus Areas
                  </span>{" "}
                  Manufacturing, Logistics, Technology, Startups
                </p>
                <p className="text-[14px] md:text-[20px]">
                  <span className="font-medium">
                    Methodologies
                  </span>{" "}
                  Market Assessment, Due Diligence, Potential Estimation
                </p>
                <p className="text-[14px] md:text-[20px]">
                  <span className="font-medium">
                    Key Services
                  </span>{" "}
                  Feasibility Studies, Partner Identification, Sourcing Strategy, Economic Viability Studies                  </p>
                <p className="text-[14px] md:text-[20px]">
                  <span className="font-medium">
                    Outcomes
                  </span>{" "}
                  Risk Mitigation, Market Entry Strategy, Competitive Intelligence
                </p>
                <div className="flex flex-col gap-5">
                  <h1 className="font-bold text-[20px] md:text-[30px]">Services Overview:</h1>
                  <p className='text-sm md:text-lg'>
                    Navigating the complexities of the business-to-business and industrial landscape requires specialized insights. Our research provides a comprehensive assessment of your target market, including industry structure, competition mapping, and potential estimation. We help you understand the dynamics of your industry to build robust, effective business strategies.                  
                  </p>
                </div>
        
                <Image
                  src="/services-3.webp"
                  alt="Company Profile"
                  width={1100}
                  height={700}
                  className="object-cover w-full h-auto mb-20"
                /> 
        
        
                <div className="flex gap-10">
                    <div>
                        <h1 className="font-bold text-[20px] md:text-[30px] mb-5">Key Questions We Answer:</h1>
                        <p className="text-[14px] md:text-lg">Companies entering or operating in B2B markets face unique challenges. We provide clarity on critical questions: Is this new venture economically viable? Who are the right strategic partners for our business? What is the true potential of this market? How can we optimize our sourcing and supply chain for better efficiency?</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-[20px] md:text-[30px] mb-5">Our Approach & Solutions:</h1>
                        <p className="text-[14px] md:text-lg">Our approach involves rigorous data collection and analysis tailored to industrial markets. We conduct thorough feasibility and economic viability studies to assess new opportunities. Through services like due diligence, partner identification, and trade audits, we provide the concrete intelligence needed to make strategic, low-risk decisions.</p>
                    </div>
                </div>
        
                <p className="mt-10 font-bold text-2xl md:text-3xl mb-5 md:mb-10">With BMRB's B2B & Industrial Research, your organization gains a trusted partner capable of delivering the deep market intelligence required to build, expand, and thrive in competitive industrial environments.</p>
        
        
                <div className="flex items-center gap-8 md:gap-14 md:mt-5 mt-3 mb-12 md:mb-16">  
                      <Image
                        src='/project-image1.webp'
                        alt="Icon 1"
                        width={40}
                        height={40}
                        className="md:w-20 w-12 h-auto object-contain"
                      />
                   
                      <Image
                        src='/project-image3.webp'
                        alt="Icon 2"
                        width={20}
                        height={20}
                        className="md:w-20 w-12 h-auto object-contain"
                      />
                    
                      <Image
                        src='/project-image2.webp'
                        alt="Icon 3"
                        width={20}
                        height={20}
                        className="md:w-20 w-12 h-auto object-contain"
                      />
                  </div>
        
                  <div className='flex gap-10'>
                    <div>
                        <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">GLOBAL AUTOMOTIVE CLIENTS</h1>
                        <p className="text-3xl font-bold mb-5">2+</p>
                    </div>
                    <div>
                        <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">MAJOR PAN INDIA STUDIES</h1>
                        <p className="text-3xl font-bold mb-5">1+</p>
                    </div>
                  </div>
        
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold mb-5">Comprehensive Research Areas:</h1>
                    <p className="text-[14px] md:text-lg">Our B2B research capabilities cover a wide spectrum. We conduct macro-economic studies to understand the broader landscape, need assessments to identify market gaps, and prognostic studies to forecast future trends. This holistic view ensures you have all the necessary information for strategic planning and execution.</p>
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
  )
}
