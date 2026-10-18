import React from 'react';
import Image from 'next/image';
import { BUSINESS_CONFIG } from '@/lib/config';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showTagline = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: {
      box: 'px-2 py-0.5 text-xs',
      title: 'text-base',
      tagline: 'text-[9px]',
      imgHeight: 32,
    },
    md: {
      box: 'px-2.5 py-1 text-sm',
      title: 'text-lg md:text-xl',
      tagline: 'text-[10px]',
      imgHeight: 40,
    },
    lg: {
      box: 'px-3 py-1.5 text-base',
      title: 'text-2xl md:text-3xl',
      tagline: 'text-xs',
      imgHeight: 52,
    },
  };

  const currentSize = sizeMap[size];

  // Jika klien telah menetapkan file logo resmi di folder public (misal: /brand/logo.webp)
  if (BUSINESS_CONFIG.logoPath) {
    const aspect = 1.43;
    const imgWidth = Math.round(currentSize.imgHeight * aspect);

    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
        <div className="relative shrink-0 flex items-center overflow-hidden rounded">
          <Image
            src={BUSINESS_CONFIG.logoPath}
            alt={`Logo ${BUSINESS_CONFIG.name} Cianjur`}
            width={imgWidth}
            height={currentSize.imgHeight}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain max-h-[40px]"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-wider text-[#FAF7F0] leading-tight ${currentSize.title}`}>
            {BUSINESS_CONFIG.name}
          </span>
          {showTagline && (
            <span className={`uppercase tracking-[0.2em] text-[#D4AF37] font-medium leading-none mt-0.5 ${currentSize.tagline}`}>
              {BUSINESS_CONFIG.city || 'Cianjur'} • Rental Mobil
            </span>
          )}
        </div>
      </div>
    );
  }

  // Wordmark Teks Eksklusif Emas & Hitam sebagai Identitas Visual Sementara
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* VVIP Metallic Gold Badge */}
      <div className="flex items-center justify-center rounded bg-gradient-to-r from-[#F2D98D] via-[#D4AF37] to-[#AA7C11] p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
        <div className={`bg-[#111111] rounded-[3px] flex items-center justify-center font-black tracking-widest text-[#F2D98D] font-display ${currentSize.box}`}>
          VVIP
        </div>
      </div>

      {/* Brand Name Text & Location */}
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-wide text-[#FAF7F0] leading-tight ${currentSize.title}`}>
          Rent Car
        </span>
        {showTagline && (
          <span className={`uppercase tracking-[0.2em] text-[#D4AF37] font-medium leading-none mt-0.5 ${currentSize.tagline}`}>
            {BUSINESS_CONFIG.city || 'Cianjur'} • Sewa Mobil
          </span>
        )}
      </div>
    </div>
  );
}
