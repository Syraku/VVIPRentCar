import React from 'react';
import { BookingForm } from '../booking/booking-form';
import { SectionHeader } from '../ui/gold-ornament';
import { Phone, ShieldCheck, Clock, Check } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/config';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function BookingSection() {
  const directWaUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#0d0d0d] text-stone-100 relative">
      {/* Decorative gold ambient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Reservasi Mudah & Praktis"
          title="Pesan Mobil Pilihan Anda"
          description="Rencanakan perjalanan istimewa Anda dengan mengisi formulir di bawah ini. Pesan langsung terhubung ke WhatsApp resmi untuk verifikasi jadwal dan ketersediaan armada."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (8 Cols) */}
          <div className="lg:col-span-8">
            <BookingForm />
          </div>

          {/* Right Column: Information & Fast Contact Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 shadow-xl">
              <h4 className="font-display text-lg font-bold text-[#F2D98D] mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Butuh Respon Cepat?
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                Jika Anda memiliki jadwal mendesak atau butuh konsultasi rekomendasi armada secara langsung, hubungi kami via WhatsApp langsung.
              </p>
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#1a1811] border border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#F2D98D] text-xs font-bold text-center block transition-all shadow-sm"
              >
                Chat WhatsApp Langsung
              </a>
            </div>

            {/* Rental Policy & Peace of Mind Points */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-stone-800 space-y-4">
              <h4 className="font-display text-base font-bold text-[#FAF7F0] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Ketentuan & Transparansi
              </h4>

              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Verifikasi Identitas:</strong> Berlaku untuk rental lepas kunci (KTP, SIM A, identitas penjamin).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Inspeksi Bersama:</strong> Pengecekan kondisi fisik & bahan bakar sebelum dan sesudah sewa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tanpa Biaya Siluman:</strong> Seluruh kesepakatan fasilitas dibicarakan secara transparan di awal.
                  </span>
                </li>
              </ul>

              {BUSINESS_CONFIG.operatingHours && (
                <div className="pt-3 border-t border-stone-800/80 flex items-center gap-2 text-[11px] text-stone-400">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{BUSINESS_CONFIG.operatingHours}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
