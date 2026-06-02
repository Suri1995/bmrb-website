'use client';

import React from 'react';
import { BarChart3, TrendingUp, Users, Vote, Package, Brain } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  icon: React.ReactNode;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hyderabad Metro Rail Study',
    client: 'Metro Rail Authority',
    category: 'Transport & Government',
    icon: <BarChart3 size={32} />,
    tags: ['Market Analysis', 'Public Sector', 'Transportation'],
    description: 'Comprehensive feasibility and impact analysis of metro rail systems',
  },
  {
    id: 2,
    title: 'Hyundai Motors CSAT Research',
    client: 'Hyundai Motors',
    category: 'Automotive',
    icon: <TrendingUp size={32} />,
    tags: ['CSAT Research', 'Dealer Study', 'Automotive'],
    description: 'Customer satisfaction and dealer network analysis for automotive sector',
  },
  {
    id: 3,
    title: 'Telangana Police Assessment',
    client: 'Telangana Police Department',
    category: 'Government',
    icon: <Users size={32} />,
    tags: ['Public Sector', 'Assessment', 'Multi-phase'],
    description: 'Multi-phase evaluation and effectiveness assessment studies',
  },
  {
    id: 4,
    title: 'Election & Opinion Polls',
    client: 'Political Organizations',
    category: 'Political Research',
    icon: <Vote size={32} />,
    tags: ['Opinion Polls', 'Election', 'Political'],
    description: 'Comprehensive election surveys and public opinion tracking',
  },
  {
    id: 5,
    title: 'Startup Ecosystem Research',
    client: '450+ Startups (incl. Swiggy)',
    category: 'E-commerce & Tech',
    icon: <Package size={32} />,
    tags: ['Startup', 'Market Research', 'E-commerce'],
    description: 'Market research and analysis for 450+ startup companies',
  },
  {
    id: 6,
    title: 'Reliance Broadcasting Study',
    client: 'Reliance Broadcasting',
    category: 'Media & Entertainment',
    icon: <Brain size={32} />,
    tags: ['Media', 'Listener Research', 'Entertainment'],
    description: 'Listener satisfaction and audience engagement analysis',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Showcasing Our Work With <span className="text-secondary">Government & Industry Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our portfolio of successful projects spanning multiple industries and sectors
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-8 rounded-xl bg-white border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-block p-3 bg-blue-100 text-secondary rounded-lg mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                {project.icon}
              </div>

              {/* Title & Client */}
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {project.client}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full group-hover:bg-secondary group-hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
