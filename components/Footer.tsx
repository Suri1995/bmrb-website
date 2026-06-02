'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Linkedin from "@/public/linkedin_icon.webp";
import FaceBook from "@/public/facebook_icon.webp";
import Instagram from "@/public/instagram_icon.webp";
import { MapPin, Phone, Mail } from "lucide-react";




export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-image.webp"
                alt="BMRB Logo"
                width={40}
                height={40}
                className="h-18 w-50"
              />

            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Brand Market Research Bureau is a market research organization providing qualitative data, business consulting, and research solutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link href="/services/brand-product-research" className="hover:text-white transition-colors">
                  Brand Research
                </Link>
              </li>
              <li>
                <Link href="/services/customer-satisfaction-research" className="hover:text-white transition-colors">
                  Customer Satisfaction
                </Link>
              </li>
              <li>
                <Link href="/services/market-assessment-studies" className="hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/election-surveys-opinion-polls" className="hover:text-white transition-colors">
                  Opinion Polls
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>padmini residency, Sri Raghavendra Nagar, Adarsh Nagar, Uppal, Hyderabad, Telangana 500039</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98667 39499</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>director@bmrb.in</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-blue-100">
          <p>
            &copy; {currentYear} BMRB - Brand Market Research Bureau | All rights reserved .
          </p>
        </div>
      </div>
    </footer>
  );
}