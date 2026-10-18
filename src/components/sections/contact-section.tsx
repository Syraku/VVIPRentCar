import React from 'react';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/config';
import { SectionHeader } from '../ui/gold-ornament';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function ContactSection() {
  const directWaUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#0a0a0a] text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Hubungi Kami"
          title="Pusat Informasi & Reservasi"
          description="Layanan pemesanan mobil resmi VVIP Rent Car di Cianjur. Hubungi kami melalui saluran WhatsApp atau email untuk konfirmasi jadwal dan unit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct WhatsApp Booking Card (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1a12] border border-[#D4AF37]/40 text-[#F2D98D] text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Saluran Utama Layanan Pelanggan</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF7F0] mb-3">
                Konsultasi & Reservasi Melalui WhatsApp
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-6">
                Seluruh proses tanya-jawab ketersediaan unit, foto fisik kendaraan terkini, serta konfirmasi pemesanan dilakukan secara langsung dan transparan melalui nomor WhatsApp resmi VVIP Rent Car.
              </p>

              <div className="p-4 rounded-xl bg-[#1b1b1b] border border-stone-800 space-y-2 mb-6">
                <div className="text-xs text-stone-400">Nomor WhatsApp Resmi:</div>
                <div className="text-xl sm:text-2xl font-bold text-[#F2D98D] tracking-wide font-mono">
                  {BUSINESS_CONFIG.displayPhone}
                </div>
                <div className="text-[11px] text-stone-500">
                  (Nomor resmi: {BUSINESS_CONFIG.whatsappNumber} — Klik tombol di bawah untuk membuka chat WhatsApp)
                </div>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppButton
                href={directWaUrl}
                size="lg"
                variant="primary"
                className="w-full text-sm font-bold"
              >
                Mulai Percakapan WhatsApp Sekarang
              </WhatsAppButton>
            </div>
          </div>

          {/* Details & Address Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            {BUSINESS_CONFIG.address && (
              <div className="p-6 rounded-2xl bg-[#141414] border border-stone-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#F2D98D]" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-[#FAF7F0]">Alamat & Titik Kumpul</h4>
                    <span className="text-xs text-stone-400">Lokasi Garasi / Kantor</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 pl-13 leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
                <p className="text-xs text-stone-500 pl-13 mt-1">
                  {BUSINESS_CONFIG.serviceAreaNotice}
                </p>
              </div>
            )}

            {/* Email Card */}
            {BUSINESS_CONFIG.email && (
              <div className="p-6 rounded-2xl bg-[#141414] border border-stone-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#F2D98D]" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-[#FAF7F0]">Email Resmi</h4>
                    <span className="text-xs text-stone-400">Korespondensi & Penawaran</span>
                  </div>
                </div>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-xs sm:text-sm text-[#F2D98D] hover:underline pl-13 block"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            )}

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-stone-800 space-y-3">
              <h4 className="font-display text-sm font-bold text-[#FAF7F0] uppercase tracking-wider text-[#F2D98D]">
                Media Sosial Resmi
              </h4>

              <div className="flex items-center gap-3 pt-1">
                {BUSINESS_CONFIG.socials.instagram && (
                  <a
                    href={BUSINESS_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e1e1e] border border-stone-700 hover:border-[#D4AF37] text-stone-300 hover:text-[#F2D98D] text-xs transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram: @tukang_rentcar</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
