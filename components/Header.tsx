"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about/about-company",
      dropdown: [
        {
          label: "About Company",
          href: "/about/about-company",
        },
        {
          label: "Our Team",
          href: "/about/our-team",
        },
      ],
    },
    {
      label: "Services",
      href: "/services/brand-product-research",
      dropdown: [
        {
          label: "Brand & Product Research",
          href: "/services/brand-product-research",
        },
        {
          label: "Customer Satisfaction Research",
          href: "/services/customer-satisfaction-research",
        },
        {
          label: "B2B & Industrial Research",
          href: "/services/b2b-industrial-research",
        },
        {
          label: "Election Surveys & Opinion Polls",
          href: "/services/election-surveys-opinion-polls",
        },
        {
          label: "Government Project Evaluation",
          href: "/services/government-project-evaluation",
        },
        {
          label: "Market Assessment Studies",
          href: "/services/market-assessment-studies",
        },
      ],
    },
    {
      label: "Clients",
      href: "/clients",
      dropdown: [
        {
          label: "Our Projects & Clients",
          href: "/clients",
        },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  // Handle mobile tap: only open dropdown for items that have one, otherwise navigate
  const handleMobileItemClick = (link: typeof navLinks[0]) => {
    if (link.dropdown) {
      // Toggle dropdown for items that have submenu
      setOpenDropdown(openDropdown === link.label ? null : link.label);
    } else {
      // Navigate away and close menu for items without dropdown (Home & Contact Us)
      window.location.href = link.href;
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className={`transition-colors duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-white shadow-sm'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
            aria-label="Home"
          >
            <Image
              src="/logo-image.webp"
              alt="BMRB Logo"
              width={180}
              height={50}
              className="w-[180px] h-[50px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <button
                    type="button"
                    className="text-md font-medium text-gray-700 hover:text-secondary transition-colors px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    aria-expanded="false"
                  >
                    {link.label}
                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-md font-medium text-gray-700 hover:text-secondary transition-colors px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  >
                    {link.label}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-1 min-w-[260px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-secondary hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-block px-6 py-2.5 bg-secondary text-white rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU - Enhanced UI/UX */}
      {isOpen && (
        <div className="lg:hidden absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-200 h-[100vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 last:border-0">
                {/* Mobile Main Item */}
                <div className="flex items-center justify-between rounded-xl py-3 px-2 hover:bg-gray-50 transition-colors">
                  {link.dropdown ? (
                    // Dropdown items (About Us, Services, Clients) - tap to open dropdown
                    <button
                      onClick={() => handleMobileItemClick(link)}
                      className="flex-1 text-left text-base font-semibold text-gray-800 focus:outline-none"
                    >
                      {link.label}
                    </button>
                  ) : (
                    // Non-dropdown items (Home, Contact Us) - normal navigation
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex-1 text-left text-base font-semibold text-gray-800"
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label,
                        )
                      }
                      className="p-1 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 text-gray-500 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown with smooth animation */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="ml-4 mb-2 space-y-1 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-secondary hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}