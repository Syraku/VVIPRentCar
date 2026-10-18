import React from 'react';
import Image from 'next/image';
import { Users, Gauge, Fuel, Briefcase, Check } from 'lucide-react';
import { Vehicle } from '@/types';
import { getVehicleBookingWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/whatsapp-button';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const bookingUrl = getVehicleBookingWhatsAppUrl(vehicle.name);

  return (
    <article className="group relative rounded-xl bg-[#141414] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)]">
      {/* Popular / Flagship Tag */}
      {vehicle.isPopular && (
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#111111] shadow-md">
            Pilihan Populer
          </span>
        </div>
      )}

      {/* Vehicle Category Tag */}
      <div className="absolute top-3 right-3 z-20">
        <span className="px-2.5 py-1 rounded text-[11px] font-medium tracking-wide bg-[#111111]/90 text-[#F2D98D] border border-[#D4AF37]/40 backdrop-blur-sm">
          {vehicle.category}
        </span>
      </div>

      {/* Vehicle Portrait Image Container (9:16 Aspect Ratio) */}
      <div className="relative w-full aspect-[9/16] bg-[#0d0d0d] overflow-hidden border-b border-stone-800/80">
        <Image
          src={vehicle.image}
          alt={`Foto armada ${vehicle.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          priority={vehicle.isFlagship}
        />
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Vehicle Name */}
          <h3 className="font-display text-lg md:text-xl font-bold text-[#FAF7F0] group-hover:text-[#F2D98D] transition-colors leading-snug">
            {vehicle.name}
          </h3>

          {/* Short description */}
          <p className="mt-2 text-xs text-stone-400 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Core Specifications Grid (Strictly NO prices) */}
          <div className="mt-4 grid grid-cols-2 gap-2 py-3 border-y border-stone-800 text-xs">
            <div className="flex items-center gap-2 text-stone-300">
              <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{vehicle.capacity} Penumpang</span>
            </div>

            <div className="flex items-center gap-2 text-stone-300">
              <Gauge className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{vehicle.transmission}</span>
            </div>

            {vehicle.luggageCapacity && (
              <div className="flex items-center gap-2 text-stone-300">
                <Briefcase className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Kapasitas {vehicle.luggageCapacity} Koper</span>
              </div>
            )}

            {vehicle.fuelType && (
              <div className="flex items-center gap-2 text-stone-300">
                <Fuel className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Bahan Bakar {vehicle.fuelType}</span>
              </div>
            )}
          </div>

          {/* Key Feature Bullets */}
          <div className="mt-3 space-y-1.5">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-300">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: WhatsApp Booking Action */}
        <div className="pt-2">
          <WhatsAppButton
            href={bookingUrl}
            size="md"
            variant="primary"
            className="w-full text-xs font-bold"
          >
            Pesan Armada Ini via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
