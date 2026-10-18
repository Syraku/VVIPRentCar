import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
            {subtitle}
          </span>
          <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
        </div>
      )}
      <h2
        className={`font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? 'text-[#111111]' : 'text-[#FAF7F0]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-stone-600' : 'text-stone-400'}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37] border border-[#F2D98D]" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>
    </div>
  );
}

export function GoldBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-[#1c1912] text-[#F2D98D] border border-[#D4AF37]/40 shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function ConfigNoticeBanner({ message }: { message?: string }) {
  return (
    <div className="bg-[#1c180e] border-y border-[#D4AF37]/30 py-2.5 px-4 text-center">
      <p className="text-xs text-[#F2D98D] flex items-center justify-center gap-2 flex-wrap">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        <span className="font-medium">Pratinjau Klien:</span>
        <span className="text-stone-300">
          {message ||
            'Data kontak & nama brand saat ini menggunakan konfigurasi contoh. Hubungi pengembang untuk aktivasi nomor WhatsApp resmi.'}
        </span>
      </p>
    </div>
  );
}
