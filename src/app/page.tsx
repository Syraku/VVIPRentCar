import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FleetSection } from '@/components/sections/fleet-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AboutSection } from '@/components/sections/about-section';
import { BookingSection } from '@/components/sections/booking-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import { ConfigNoticeBanner } from '@/components/ui/gold-ornament';
import { BUSINESS_CONFIG } from '@/lib/config';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: BUSINESS_CONFIG.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.address,
      addressLocality: BUSINESS_CONFIG.city,
    },
    telephone: BUSINESS_CONFIG.displayPhone,
    url: BUSINESS_CONFIG.url,
    sameAs: BUSINESS_CONFIG.socials.instagram ? [BUSINESS_CONFIG.socials.instagram] : undefined,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-stone-100 selection:bg-[#D4AF37] selection:text-black">
      {/* Structured Data (Schema.org JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Configuration Status Notice (Shown during development / client preview) */}
      {BUSINESS_CONFIG.isConfigurationPlaceholder && (
        <ConfigNoticeBanner
          message={`Mode Pratinjau Klien: Nama brand (${BUSINESS_CONFIG.name}) dan nomor WhatsApp (${BUSINESS_CONFIG.displayPhone}) dapat langsung dikonfigurasi melalui src/lib/config.ts`}
        />
      )}

      {/* Luxury Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Fleet / Armada Section (No prices, pure automotive luxury) */}
        <FleetSection />

        {/* Services Section (Warm Ivory / Contrast surface) */}
        <ServicesSection />

        {/* Why Choose Us & How It Works (Dark charcoal & gold accents) */}
        <WhyUsSection />

        {/* Gallery Section (Automotive Stock / Client Documentation) */}
        <GallerySection />

        {/* About Us Section (Warm Ivory / Pure White & gold frame) */}
        <AboutSection />

        {/* Booking Section with interactive WhatsApp form */}
        <BookingSection />

        {/* Contact & Hours Section */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
