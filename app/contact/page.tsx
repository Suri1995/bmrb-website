"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  Send,
  Globe,
  ArrowRight,
} from "lucide-react";
import Getintouch from "@/components/Getintouch";
import Banner from "./components/Banner";

/* ─────────────────────────────────────────────
   Field wrapper
───────────────────────────────────────────── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[oklch(0.55_0.15_258/0.5)] mb-2">
        {label}
        {required && (
          <span className="text-[oklch(0.55_0.15_258)] ml-0.5">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full px-5 py-3.5 rounded-2xl border text-[oklch(0.2_0.05_258)] text-sm",
    "bg-[oklch(0.97_0.01_258)] placeholder:text-[oklch(0.7_0.03_258)]",
    "placeholder:font-light outline-none transition-all duration-200",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      : "border-[oklch(0.88_0.04_258)] focus:border-[oklch(0.55_0.15_258)] focus:ring-2 focus:ring-[oklch(0.55_0.15_258/0.12)] focus:bg-[oklch(0.98_0_0)]",
  ].join(" ");
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email.trim()) e.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Enter a valid email";
    // Phone validation
    if (!formData.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      e.phone = "Phone number must contain only numbers";
    } else if (formData.phone.length !== 10) {
      e.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };



  const faqs = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      q: "What information do you need?",
      a: "Share your research objectives, target audience, timeline, and budget. We'll deliver a fully customised proposal.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      q: "How long does research take?",
      a: "Simple studies take 2–4 weeks. Comprehensive research spans 2–3 months based on complexity.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      q: "Do you serve international clients?",
      a: "Yes — we conduct multi-country research across various languages and work with clients in 30+ countries.",
    },
  ];

  const responseTimes = [
    { channel: "Email", time: "Within 24 hours" },
    { channel: "Phone", time: "Same business day" },
    { channel: "Proposals", time: "3–5 business days" },
    { channel: "Urgent enquiries", time: "Available on request" },
  ];

  return (
    <main className="min-h-screen bg-[oklch(0.98_0_0)]">
      <Header />
      <Banner/>

      {/* ═══════════════════════════════════════════
          MAIN — Form + Sidebar
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* ── LEFT: Form ── */}
          <div className="bg-[oklch(0.98_0_0)] border border-[oklch(0.88_0.04_258/0.5)] rounded-3xl p-7 sm:p-12 shadow-[0_8px_48px_oklch(0.55_0.15_258/0.07)]">
            <div className="mb-9">
              <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[oklch(0.55_0.15_258)]">
                Contact Form
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[oklch(0.2_0.05_258)] mt-2 leading-tight">
                Send us a Message
              </h2>
              <p className="text-[oklch(0.5_0.05_258)] text-sm font-light mt-2">
                Fill in the details below and our team will get back to you
                shortly.
              </p>
            </div>

            {/* Success Banner */}
            {submitted ? (
              <div className="min-h-[520px] flex flex-col items-center justify-center text-center px-4">
                {/* Tick Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full animate-pulse"></div>

                  <div className="relative flex justify-center">
                    <Image
                      src="/success.gif"
                      alt="Success"
                      width={120}
                      height={120}
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-[oklch(0.2_0.05_258)] mb-5">
                  Successfully Submitted
                </h2>

                {/* Message */}
                <p className="max-w-xl text-[oklch(0.5_0.05_258)] text-lg leading-8 font-light">
                  Thank you for contacting us. Our team has successfully
                  received your enquiry and will respond within{" "}
                  <span className="font-semibold text-[oklch(0.55_0.15_258)]">
                    24 hours on business days
                  </span>
                  .
                </p>

                {/* Badge */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
                  <CheckCircle className="w-4 h-4" />
                  Your message has been delivered successfully
                </div>

                <button
                  onClick={() => router.push("/")}
                  className="mt-6 inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-2xl
                  bg-[oklch(0.55_0.15_258)]
                  hover:bg-[oklch(0.48_0.15_258)]
                  text-white text-sm font-semibold
                  shadow-[0_4px_24px_oklch(0.55_0.15_258/0.35)]
                  hover:shadow-[0_8px_32px_oklch(0.55_0.15_258/0.45)]
                  transition-all duration-300"
              >
                Back to Home Page
              </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" required error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputCls(!!errors.name)}
                    />
                  </Field>

                  <Field label="Email Address" required error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputCls(!!errors.email)}
                    />
                  </Field>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      className={inputCls(!!errors.phone)}
                    />
                  </Field>

                  <Field label="Company Name">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className={inputCls(false)}
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field label="Subject" required error={errors.subject}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this inquiry about?"
                    className={inputCls(!!errors.subject)}
                  />
                </Field>

                {/* Message */}
                <Field label="Message" required error={errors.message}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your research needs, objectives, and timeline..."
                    className={`${inputCls(!!errors.message)} resize-none`}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5
                  bg-[oklch(0.55_0.15_258)] hover:bg-[oklch(0.48_0.15_258)]
                  text-[oklch(0.98_0_0)] font-semibold text-sm
                  py-4 rounded-2xl
                  shadow-[0_4px_24px_oklch(0.55_0.15_258/0.35)]
                  hover:shadow-[0_8px_32px_oklch(0.55_0.15_258/0.45)]
                  transition-all duration-300 active:scale-[0.99]"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                <p className="text-center text-xs text-[oklch(0.6_0.04_258)] font-light pt-1">
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            )}
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="flex flex-col gap-6">
            {/* FAQ Card */}
            <div className="bg-[oklch(0.98_0_0)] border border-[oklch(0.88_0.04_258/0.5)] rounded-3xl p-7 shadow-[0_4px_32px_oklch(0.55_0.15_258/0.06)]">
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[oklch(0.55_0.15_258)] block mb-1">
                Quick Answers
              </span>
              <h3 className="text-xl font-bold text-[oklch(0.2_0.05_258)] mb-7">
                Frequently Asked
              </h3>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[oklch(0.55_0.15_258/0.1)] flex items-center justify-center flex-shrink-0 text-[oklch(0.55_0.15_258)] mt-0.5">
                      {faq.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.2_0.05_258)] mb-1.5">
                        {faq.q}
                      </p>
                      <p className="text-xs text-[oklch(0.5_0.05_258)] leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times Card */}
            <div className="bg-[oklch(0.55_0.15_258)] rounded-3xl p-7 shadow-[0_8px_48px_oklch(0.55_0.15_258/0.35)]">
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[oklch(0.98_0_0/0.6)] block mb-1">
                Turnaround Times
              </span>
              <h3 className="text-lg font-bold text-[oklch(0.98_0_0)] mb-6">
                Our Response Times
              </h3>

              <div className="space-y-1">
                {responseTimes.map((item) => (
                  <div
                    key={item.channel}
                    className="flex items-center justify-between gap-4 py-3 border-b border-[oklch(0.98_0_0/0.08)] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md bg-[oklch(0.98_0_0/0.15)] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-[oklch(0.98_0_0/0.8)]" />
                      </div>
                      <span className="text-sm font-medium text-[oklch(0.98_0_0/0.9)]">
                        {item.channel}
                      </span>
                    </div>
                    <span className="text-xs text-[oklch(0.98_0_0/0.5)] font-light text-right">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative bg-[oklch(0.35_0.15_258)] rounded-3xl p-7 overflow-hidden shadow-[0_8px_48px_oklch(0.35_0.15_258/0.3)]">
              <span className="pointer-events-none absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[oklch(0.98_0_0/0.05)]" />
              <span className="pointer-events-none absolute -left-4 -top-4 w-24 h-24 rounded-full bg-[oklch(0.98_0_0/0.04)]" />

              <h4 className="text-lg font-bold text-[oklch(0.98_0_0)] mb-2 relative">
                International Research
              </h4>
              <p className="text-[oklch(0.98_0_0/0.65)] text-sm font-light leading-relaxed mb-5 relative">
                We serve global clients and conduct multi-country research
                across 30+ countries in various languages.
              </p>
              <a
                href="#"
                className="relative inline-flex items-center gap-2 bg-[oklch(0.98_0_0)] text-[oklch(0.55_0.15_258)] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[oklch(0.95_0.02_258)] transition-all duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Getintouch />
      <Footer />
    </main>
  );
}
