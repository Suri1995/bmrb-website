import React from 'react'
import Image from 'next/image';


function Customeroverview() {
  return (
    <section className="bg-white w-full py-15">
          <div className="max-w-7xl mx-auto px-8 flex flex-col gap-5">
            <p className="text-2xl md:text-4xl font-bold">
              We provide critical insights into customer loyalty and<br/> satisfaction through real-time tracking, feedback analysis,<br/> and comprehensive measurement studies.
            </p>
            <p className="text-[14px] md:text-[20px]">
              <span className="font-medium">
                Focus Areas
              </span>{" "}
              Automotive, Retail, E-commerce, Service Industries
            </p>
            <p className="text-[14px] md:text-[20px]">
              <span className="font-medium">
                Methodologies
              </span>{" "}
              Real-Time Tracking, Feedback Surveys, Mystery Shopping
            </p>
            <p className="text-[14px] md:text-[20px]">
              <span className="font-medium">
                Key Services
              </span>{" "}
              Satisfaction Measurement, Loyalty Analysis, Customer Tracking, Purchase Behavior Studies
            </p>
            <p className="text-[14px] md:text-[20px]">
              <span className="font-medium">
                Outcomes
              </span>{" "}
              Increased Retention, Improved Customer Experience
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-[20px] md:text-[30px]">Services Overview:</h1>
              <p className="text-sm md:text-lg">
                Understanding and improving customer satisfaction is key to long-term business success.<br/> Our research provides a clear view of your customers' experiences and perceptions.<br/> We conduct in-depth studies to measure satisfaction levels, track sentiment over time,<br/> and identify the key drivers behind customer loyalty and churn.
              </p>
            </div>
    
            <Image
              src="/services-2.webp"
              alt="Company Profile"
              width={1100}
              height={700}
              className="object-cover w-full h-auto mb-20"
            />
    
    
            <div className="flex gap-10">
                <div>
                    <h1 className="font-bold text-[20px] md:text-[30px] mb-5">Key Questions We Answer:</h1>
                    <p className="text-[14px] md:text-lg">Businesses often face uncertainty about their customer base. We help answer vital questions: How satisfied are our customers with our products and services? Why are customers choosing competitors? What are the most critical areas for service improvement? How can we turn satisfied customers into loyal advocates?</p>
                </div>
                <div>
                    <h1 className="font-bold text-[20px] md:text-[30px] mb-5">Our Approach & Solutions:</h1>
                    <p className="text-[14px] md:text-lg">Our approach is centered on gathering actionable data. We utilize real-time customer feedback systems and tracking studies to monitor satisfaction continuously. Techniques like mystery shopping and detailed purchase behavior analysis allow us to uncover specific strengths and weaknesses in your customer journey.</p>
                </div>
            </div>
    
            <p className="mt-10 font-bold text-2xl md:text-3xl mb-5 md:mb-10">By leveraging our Customer Satisfaction Research, your business can proactively address issues, enhance the customer experience, and build a loyal customer base that drives sustainable growth.</p>
    
    
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
                    <p className="text-3xl font-bold mb-5">1+</p>
                </div>
                <div>
                    <h1 className="text-[16px] md:text-xl font-bold mb-5 text-indigo-700">MAJOR PAN INDIA STUDIES</h1>
                    <p className="text-3xl font-bold mb-5">2+</p>
                </div>
              </div>
    
              <div>
                <h1 className="text-xl md:text-2xl font-bold mb-5">Comprehensive Research Areas:</h1>
                <p className="text-[14px] md:text-lg">Our services extend beyond standard surveys. We conduct detailed customer profiling to understand different segments, analyze usage and attitudes to see how customers interact with your products, and perform marketing effectiveness audits. We also offer channel and retail research to evaluate the entire customer journey from start to finish.</p>
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

export default Customeroverview