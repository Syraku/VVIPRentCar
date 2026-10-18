'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const waUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip dialog */}
      {showTooltip && (
        <div className="relative mb-3 mr-1 bg-[#1a1813] text-[#FAF7F0] border border-[#D4AF37]/50 rounded-xl p-3.5 shadow-2xl max-w-xs animate-fade-in text-xs backdrop-blur-md">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Tutup pesan bantuan WhatsApp"
            className="absolute top-2 right-2 text-stone-400 hover:text-[#F2D98D] p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-[#F2D98D]">Butuh Bantuan Sewa Mobil?</span>
          </div>
          <p className="text-stone-300 leading-snug">
            Konsultasikan ketersediaan unit dan jadwal langsung dengan tim kami via WhatsApp.
          </p>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1a1813] border-r border-b border-[#D4AF37]/50 rotate-45" />
        </div>
      )}

      {/* Main floating button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi cepat via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#111111] via-[#1a1a1a] to-[#252525] border-2 border-[#D4AF37] text-[#F2D98D] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:border-[#F2D98D] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#111111]" />
        <MessageSquare className="w-7 h-7 text-[#F2D98D] group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
}
