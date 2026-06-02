'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const expertise = [
    'Market Research Excellence',
    'Data-Driven Insights',
    'Certified Professionals',
    'Government & Corporate Trust',
    '100% Confidentiality',
    'Timely Deliverables',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[3px] text-primary mb-6 text-balance">
              About <span className="text-secondary">BMRB</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              BMRB (Business Market Research Bureau) is a premier professional market research firm with over 25 years of proven excellence in delivering actionable market intelligence.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals combines rigorous research methodology with deep industry expertise to provide comprehensive market insights that drive strategic decisions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { number: '500+', label: 'Successful Projects' },
                { number: '100+', label: 'Research Experts' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-lg bg-white border border-border">
                  <div className="text-2xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {[
              {
                title: 'Professional Expertise',
                description:
                  'Our team includes certified researchers, statisticians, and industry consultants with extensive experience across all sectors.',
              },
              {
                title: 'Comprehensive Methodology',
                description:
                  'We employ scientifically rigorous research methodologies including quantitative surveys, qualitative interviews, and advanced analytics.',
              },
              {
                title: 'Industry Leadership',
                description:
                  'Trusted by government agencies, multinational corporations, and emerging startups for reliable market insights.',
              },
              {
                title: 'Confidentiality & Ethics',
                description:
                  'We maintain the highest standards of data privacy and ethical research practices, ensuring 100% client confidentiality.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-border hover:border-secondary hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-primary mb-3 text-balance">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
