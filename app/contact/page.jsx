"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
