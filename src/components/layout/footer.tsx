import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, NAV_LINKS } from '@/lib/config';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';
import { Logo } from '../ui/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const generalWhatsAppUrl = getGeneralInquiryWhatsAppUrl();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/30 text-stone-300 relative overflow-hidden">
      {/* Decorative top gold gradient accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F2D98D]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Unit Bersih • Pilihan Sopir / Lepas Kunci • Pemesanan Cepat</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#F2D98D] mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]" />
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-[#F2D98D] hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <span className="text-[#D4AF37] text-xs">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan & Kebijakan */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#F2D98D] mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]" />
              Pilihan Layanan
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Rental Mobil dengan Sopir</li>
              <li>Rental Mobil Lepas Kunci</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-stone-800">
              <p className="text-xs text-stone-500">
                Pemesanan diproses melalui WhatsApp kami.
              </p>
            </div>
          </div>

          {/* Col 4: Informasi Kontak */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#F2D98D] mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]" />
              Kontak Reservasi
            </h3>
            
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-stone-400">WhatsApp (Chat Langsung)</span>
                <span className="font-semibold text-xs md:text-sm text-[#F2D98D] group-hover:underline flex items-center gap-1">
                  {BUSINESS_CONFIG.displayPhone}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            {BUSINESS_CONFIG.operatingHours && (
              <div className="flex items-start gap-3 text-xs text-stone-400 px-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.operatingHours}</span>
              </div>
            )}

            {BUSINESS_CONFIG.address && (
              <div className="flex items-start gap-3 text-xs text-stone-400 px-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address}</span>
              </div>
            )}

            {BUSINESS_CONFIG.email && (
              <div className="flex items-start gap-3 text-xs text-stone-400 px-1">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Config Notice */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-center md:text-right text-[11px] text-stone-500">
            Dikelola dengan Next.js & Tailwind CSS • Desain Identitas Emas × Hitam × Putih
          </p>
        </div>
      </div>
    </footer>
  );
}
