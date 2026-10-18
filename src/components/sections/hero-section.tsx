import React from 'react';
import Image from 'next/image';
import { Shield, Sparkles, UserCheck, ArrowDown } from 'lucide-react';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function HeroSection() {
  const generalWhatsAppUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background Hero Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/toyota-alphard.webp"
          alt="Rental Mobil VVIP Rent Car Cianjur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
        />
        {/* Multilayered radial and linear dark gradients for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0d0d0d_90%)]" />
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Luxury Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181611]/80 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F2D98D]">
            VVIP Rent Car • Cianjur
          </span>
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F0] max-w-5xl mx-auto leading-[1.15] mb-6">
          Kenyamanan Perjalanan Bersama{' '}
          <span className="gold-gradient-text block mt-1 sm:inline">
            VVIP Rent Car Cianjur
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Penyedia rental mobil terpercaya di Cianjur dengan pilihan layanan dengan sopir atau lepas kunci. Tersedia contoh armada seperti Alphard, Pajero Sport, Innova Reborn, HiAce Commuter, Fortuner, Avanza, hingga Innova Zenix serta unit lainnya yang siap menemani agenda perjalanan Anda.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <WhatsAppButton
            href={generalWhatsAppUrl}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-2xl"
          >
            Pesan via WhatsApp
          </WhatsAppButton>

          <a
            href="#armada"
            className="w-full sm:w-auto px-7 py-3.5 rounded text-sm md:text-base font-semibold text-[#FAF7F0] bg-[#1a1a1a]/80 hover:bg-[#252525] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Lihat Contoh Armada</span>
            <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>

        {/* Pillar Highlights (Verified Service Attributes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 border-t border-[#D4AF37]/20">
          <div className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg bg-[#141414]/60 border border-stone-800">
            <div className="w-9 h-9 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#F2D98D]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-[#FAF7F0]">Armada Bersih</span>
              <span className="text-[11px] text-stone-400">Pengecekan unit sebelum jalan</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg bg-[#141414]/60 border border-stone-800">
            <div className="w-9 h-9 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <UserCheck className="w-4 h-4 text-[#F2D98D]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-[#FAF7F0]">Layanan Sopir</span>
              <span className="text-[11px] text-stone-400">Siap mendampingi perjalanan</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg bg-[#141414]/60 border border-stone-800">
            <div className="w-9 h-9 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-[#F2D98D]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-[#FAF7F0]">Layanan Terpercaya</span>
              <span className="text-[11px] text-stone-400">Transparansi syarat & armada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
