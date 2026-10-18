import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '../ui/gold-ornament';
import { BUSINESS_CONFIG } from '@/lib/config';
import { Shield, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function AboutSection() {
  const generalWhatsAppUrl = getGeneralInquiryWhatsAppUrl('Tentang Layanan Kami');

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-[#FAF7F0] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Automotive Image with Gold Frame (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37] rounded-2xl pointer-events-none hidden sm:block" />
              
              {/* Logo / Brand Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f0f] border border-[#D4AF37]/40 flex items-center justify-center">
                {/* Subtle luxury ambient glow behind logo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)] pointer-events-none" />
                
                <Image
                  src={BUSINESS_CONFIG.logoPath || '/brand/logo.webp'}
                  alt="Logo VVIP Rent Car Cianjur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-8 sm:p-12 pb-28 sm:pb-32"
                  priority
                />
                
                {/* Floating badge over container */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141414]/90 border border-[#D4AF37]/50 text-[#FAF7F0] backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F2D98D] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Komitmen Pelayanan</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Kebersihan, kenyamanan, dan keselamatan penumpang adalah prioritas mutlak kami di setiap perjalanan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              subtitle="Profil & Komitmen"
              title={`Mengenal Lebih Dekat ${BUSINESS_CONFIG.shortName}`}
              align="left"
              light={true}
            />

            <p className="text-stone-700 text-sm md:text-base leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Kami hadir untuk menjawab kebutuhan mobilitas masyarakat urban, pebisnis, dan keluarga yang mendambakan perjalanan nyaman. Unit kendaraan kami dibersihkan dan dicek kondisinya sebelum diserahkan kepada pelanggan.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Shield className="w-4 h-4 text-[#AA7C11]" />
                  <h4 className="font-bold text-sm text-[#111111]">Kesiapan Unit</h4>
                </div>
                <p className="text-xs text-stone-600">
                  Kelengkapan surat kendaraan dan kondisi unit disiapkan sebelum keberangkatan untuk mendukung kelancaran agenda perjalanan Anda.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#AA7C11]" />
                  <h4 className="font-bold text-sm text-[#111111]">Jangkauan Luas</h4>
                </div>
                <p className="text-xs text-stone-600">
                  {BUSINESS_CONFIG.serviceAreaNotice}
                </p>
              </div>
            </div>

            {/* Checkpoints */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#AA7C11] shrink-0" />
                <span>Pemesanan mudah terpusat melalui saluran WhatsApp.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#AA7C11] shrink-0" />
                <span>Opsi layanan dengan sopir atau lepas kunci dengan verifikasi dokumen yang jelas.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <WhatsAppButton
                href={generalWhatsAppUrl}
                size="md"
                variant="primary"
              >
                Hubungi Kami via WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
