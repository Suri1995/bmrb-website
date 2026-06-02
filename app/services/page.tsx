'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { BarChart3, Users, Building2, Vote, FileCheck, TrendingUp } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

const services = [
  {
    id: 'brand-research',
    title: 'Brand & Product Research',
    icon: TrendingUp,
    description: 'In-depth studies to understand brand perception and product performance in the market',
    details: 'Our brand and equity research services provide in-depth studies on brand positioning, image correlation, equity assessment, and consumer attitudes. We help organizations understand how their brand is perceived, evaluate new product concepts, analyze competitive positioning, and identify market opportunities. Our comprehensive approach delivers detailed insights for brand strategy and product development decisions.',
    features: ['Brand Awareness Studies', 'Product Concept Testing', 'Competitive Positioning Analysis', 'Brand Health Tracking', 'Consumer Attitude Studies', 'Brand Equity Assessment', 'Market Positioning Analysis'],
    additional: 'We work with leading automotive and consumer brands to ensure their products resonate with target audiences and maintain competitive advantage.'
  },
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction Research',
    icon: Users,
    description: 'Comprehensive feedback collection to measure customer satisfaction and improve services',
    details: 'Measuring and managing customer satisfaction is critical for business growth. We conduct comprehensive satisfaction studies through real-time tracking and continuous feedback analysis. Our services help you assess customer satisfaction levels, identify pain points in service delivery, measure Net Promoter Score (NPS), evaluate loyalty programs, and build lasting customer relationships through continuous service improvement.',
    features: ['NPS & CSAT Studies', 'Customer Journey Mapping', 'Satisfaction Surveys', 'Loyalty Program Evaluation', 'Service Quality Assessment', 'Dealer Satisfaction Studies', 'Customer Experience Analysis'],
    additional: 'We have extensive experience in automotive sector satisfaction studies, helping dealers and manufacturers optimize customer relationships.'
  },
  {
    id: 'b2b-research',
    title: 'B2B & Industrial Research',
    icon: Building2,
    description: 'Data-driven insights to support strategic decisions for B2B and industrial sectors',
    details: 'Our B2B and industrial research services provide market assessment, feasibility studies, and competitive intelligence specifically tailored for business-to-business sectors. We understand complex B2B markets, industrial dynamics, and enterprise decision-making processes. Our research helps you identify market opportunities, understand buyer behavior, and develop effective go-to-market strategies.',
    features: ['Decision-Maker Profiling', 'Purchase Intent Studies', 'Industry Benchmarking', 'Channel Strategy Research', 'Feasibility Studies', 'Market Entry Analysis', 'Competitive Intelligence'],
    additional: 'Our expertise spans transportation, manufacturing, and industrial sectors, providing actionable insights for strategic business decisions.'
  },
  {
    id: 'election-surveys',
    title: 'Election Surveys & Opinion Polls',
    icon: Vote,
    description: 'Accurate and reliable election surveys and opinion polls for political insights',
    details: 'We conduct comprehensive political and social research including election surveys, opinion polling, constituency analysis, and readership surveys. Our proven methodologies ensure representative sampling and statistically valid results for political campaigns, policy research, and public opinion tracking. We maintain the highest standards of accuracy and objectivity in all political research.',
    features: ['Exit Polls', 'Voter Preference Tracking', 'Constituency Analysis', 'Opinion Polling', 'Demographic Analysis', 'Trend Analysis', 'Statistical Validation'],
    additional: 'Our election research team has conducted successful surveys across multiple constituencies and campaigns with proven accuracy.'
  },
  {
    id: 'government-evaluation',
    title: 'Government Project Evaluation',
    icon: FileCheck,
    description: 'Independent evaluations of public and government projects for policy improvements',
    details: 'We provide comprehensive evaluation services for government programs and public sector projects. Our evaluations assess program effectiveness, measure social impact, evaluate policy outcomes, and provide evidence-based recommendations for improvement. We work with government institutions to ensure projects deliver intended benefits and achieve policy objectives.',
    features: ['Impact Assessment', 'Program Evaluation', 'Policy Research', 'Stakeholder Analysis', 'Performance Metrics', 'Compliance Assessment', 'Outcome Measurement'],
    additional: 'We have successfully evaluated government projects in transportation, public safety, and social welfare sectors across multiple government agencies.'
  },
  {
    id: 'market-assessment',
    title: 'Market Assessment Studies',
    icon: BarChart3,
    description: 'Research-based studies to analyze markets, trends, and opportunities for growth',
    details: 'Our market assessment studies provide thorough market analysis for new market entry, expansion planning, or market opportunity identification. We help you understand market size and growth potential, identify key players, assess regulatory environment, and understand success factors in target markets. Perfect for startups and established companies planning growth strategies.',
    features: ['Market Sizing', 'Growth Opportunity Analysis', 'Market Trends', 'Entry Strategy', 'Competitive Landscape', 'Startup Market Research', 'E-commerce Research'],
    additional: 'We have provided market research for 450+ startups including industry leaders like Swiggy, supporting their launch and growth strategies.'
  }
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceParam = searchParams.get('service');
  const [activeService, setActiveService] = useState(serviceParam || 'brand-research');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service && services.find(s => s.id === service)) {
      setActiveService(service);
    } else {
      setActiveService('brand-research');
    }
  }, [searchParams]);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    router.push(`/services?service=${serviceId}`, { scroll: false });
  };

  const selectedService = services.find(s => s.id === activeService);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service List Sidebar */}
        <div className="md:col-span-1">
          <div className="space-y-2 sticky top-24">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`w-full flex items-start gap-4 p-4 rounded-lg border transition-all text-left ${
                    activeService === service.id
                      ? 'bg-secondary/10 border-secondary text-foreground'
                      : 'border-border text-foreground/70 hover:border-secondary/50 hover:bg-muted'
                  }`}
                >
                  <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm">{service.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Details */}
        <div className="md:col-span-2">
          {selectedService && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-start gap-6">
                {React.createElement(selectedService.icon, { 
                  className: 'w-16 h-16 text-secondary flex-shrink-0' 
                })}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{selectedService.title}</h2>
                  <p className="text-lg text-foreground/70">{selectedService.description}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground/70 leading-relaxed">{selectedService.details}</p>
              </div>

              {/* Key Features */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Features & Deliverables</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-secondary font-bold text-lg">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-foreground/70 leading-relaxed italic">{selectedService.additional}</p>
              </div>

              {/* CTA */}
              <div className="bg-primary text-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">Let's discuss how we can help with your research needs</p>
                <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Our Services" 
        description="Comprehensive market research and data analytics services tailored to your business needs"
      />

      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20">Loading...</div>}>
        <ServicesContent />
      </Suspense>

      <Footer />
    </main>
  );
}
