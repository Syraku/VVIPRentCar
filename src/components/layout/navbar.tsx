'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, NAV_LINKS } from '@/lib/config';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { Logo } from '../ui/logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const generalWhatsAppUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent border-b border-[#D4AF37]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#beranda"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-1"
            aria-label="VVIP Rent Car - Beranda"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-stone-300 hover:text-[#F2D98D] hover:bg-[#D4AF37]/10 rounded transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <WhatsAppButton
              href={generalWhatsAppUrl}
              size="sm"
              variant="primary"
            >
              Pesan via WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontak WhatsApp Cepat"
              className="p-2 rounded-full bg-[#D4AF37]/10 text-[#F2D98D] border border-[#D4AF37]/30"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-stone-300 hover:text-[#F2D98D] hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-[#0f0f0f]/98 backdrop-blur-xl border-t border-[#D4AF37]/30 flex flex-col justify-between p-6 animate-fade-in overflow-y-auto">
          <div className="space-y-2 pt-2">
            <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold px-3 mb-2">
              Menu Navigasi
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-stone-200 hover:text-[#F2D98D] hover:bg-[#D4AF37]/10 rounded-lg border-b border-stone-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-stone-800 space-y-4">
            <div className="flex items-center gap-2 text-xs text-stone-400 px-2">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Layanan Reservasi: {BUSINESS_CONFIG.displayPhone}</span>
            </div>
            <WhatsAppButton
              href={generalWhatsAppUrl}
              size="lg"
              variant="primary"
              className="w-full"
            >
              Pesan Sekarang via WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
