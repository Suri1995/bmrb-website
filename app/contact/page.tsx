"use client";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Getintouch from "@/components/Getintouch";
import Banner from "./components/Banner";
import { ContactForm } from "@/app/contact/components/ContactForm";
import { ContactSidebar } from "@/app/contact/components/ContactSidebar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.98_0_0)]">
      <Header />
      <Banner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          <ContactForm />
          <ContactSidebar />
        </div>
      </div>

      <Getintouch />
      <Footer />
    </main>
  );
}