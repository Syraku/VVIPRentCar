'use client';

import React, { useState } from 'react';
import { VEHICLES_DATA, VEHICLE_CATEGORIES } from '@/lib/data/vehicles';
import { VehicleCard } from '../fleet/vehicle-card';
import { SectionHeader } from '../ui/gold-ornament';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { Info, HelpCircle } from 'lucide-react';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function FleetSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Armada');

  const filteredVehicles =
    selectedCategory === 'Semua Armada'
      ? VEHICLES_DATA
      : VEHICLES_DATA.filter((v) => v.category === selectedCategory);

  const customRequestUrl = getGeneralInquiryWhatsAppUrl(
    'Konsultasi Armada VVIP Rent Car Cianjur'
  );

  const askOtherFleetUrl = getGeneralInquiryWhatsAppUrl(
    'Tanyakan Ketersediaan Armada Lain'
  );

  return (
    <section id="armada" className="py-20 lg:py-28 bg-[#0a0a0a] relative">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1c180e]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Contoh Armada"
          title="Armada Mobil VVIP Rent Car"
          description="Berikut beberapa contoh kendaraan yang kami sediakan untuk perjalanan Anda di Cianjur: Toyota Alphard, Mitsubishi Pajero Sport, Toyota Kijang Innova Reborn, Toyota HiAce Commuter, Toyota Fortuner, Toyota Avanza, dan Toyota Innova Zenix. Armada kami tidak terbatas pada daftar ini. Hubungi kami melalui WhatsApp untuk menanyakan ketersediaan unit lainnya."
        />

        {/* WhatsApp CTA: Tanyakan Ketersediaan Armada Lain */}
        <div className="flex justify-center -mt-6 md:-mt-8 mb-12">
          <WhatsAppButton
            href={askOtherFleetUrl}
            size="md"
            variant="outline"
            className="shadow-lg"
          >
            Tanyakan Ketersediaan Armada Lain
          </WhatsAppButton>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {VEHICLE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#111111] font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-[#161616] text-stone-300 hover:text-[#F2D98D] hover:bg-[#202020] border border-stone-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Informative Disclaimer & Custom Request Banner */}
        <div className="mt-14 p-5 rounded-xl bg-[#14120e] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs text-stone-300 leading-relaxed">
              <span className="font-semibold text-[#F2D98D] block mb-0.5">
                Konfirmasi Ketersediaan & Ketentuan
              </span>
              Setiap pemesanan akan dicek ketersediaan jadwalnya oleh staf reservasi kami. Syarat verifikasi dokumen disesuaikan dengan jenis layanan (dengan sopir atau lepas kunci).
            </div>
          </div>

          <a
            href={customRequestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded text-xs font-semibold text-[#FAF7F0] bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
