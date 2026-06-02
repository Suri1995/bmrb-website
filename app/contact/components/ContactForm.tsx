"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { Field, inputCls } from "./Field";
import { SuccessMessage } from "./SuccessMessage";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email.trim()) e.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Enter a valid email";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const v = validate();

  if (Object.keys(v).length) {
    setErrors(v);
    return;
  }

  try {
    console.log("Submitting form...", formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
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
  } catch (error) {
    console.error("FORM SUBMIT ERROR:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong while sending the message."
    );
  }
};

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="bg-[oklch(0.98_0_0)] border border-[oklch(0.88_0.04_258/0.5)] rounded-3xl p-7 sm:p-12 shadow-[0_8px_48px_oklch(0.55_0.15_258/0.07)]">
      <div className="mb-9">
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[oklch(0.55_0.15_258)]">
          Contact Form
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[oklch(0.2_0.05_258)] mt-2 leading-tight">
          Send us a Message
        </h2>
        <p className="text-[oklch(0.5_0.05_258)] text-sm font-light mt-2">
          Fill in the details below and our team will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
    </div>
  );
}