'use client';

import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-sm text-muted-foreground mb-4 capitalize">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-foreground/70 max-w-2xl text-pretty">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
