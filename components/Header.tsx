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

  return (
    <header className="fixed w-full z-50">
      <div className="bg-gray-200 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Image
              src="/logo-image.webp"
              alt="Logo"
              width={180}
              height={50}
              className="w-[180px] h-[50px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <button
                    type="button"
                    className="text-md font-semibold text-secondary hover:text-secondary transition-colors px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-muted"
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-md font-semibold text-secondary hover:text-secondary transition-colors px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-0 min-w-[250px] bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-block px-6 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-orange-50 shadow-xl lg:hidden">
          <div className="space-y-2 px-4 py-5">
            {navLinks.map((link) => (
              <div key={link.label}>
                {/* MOBILE ITEM */}
                <div className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-muted">
                  <Link
                    href={link.href}
                    className="flex-1 text-sm font-semibold text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label,
                        )
                      }
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* MOBILE DROPDOWN */}
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className={`mt-2 space-y-2 pl-4 overflow-y-auto ${
                      link.label === "Services" ? "max-h-60 pr-2" : ""
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block rounded-lg px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary hover:text-white"
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
