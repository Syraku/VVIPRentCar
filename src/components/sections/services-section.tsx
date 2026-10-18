import React from 'react';
import { UserCheck, Key, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data/services';
import { SectionHeader } from '../ui/gold-ornament';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'driver':
        return <UserCheck className="w-6 h-6 text-[#AA7C11]" />;
      case 'key':
        return <Key className="w-6 h-6 text-[#AA7C11]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#AA7C11]" />;
    }
  };

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-[#FAF7F0] text-[#111111] relative">
      {/* Decorative top transition curve / divider */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Pilihan Layanan"
          title="Layanan Rental Mobil VVIP Rent Car"
          description="Menyediakan dua opsi utama yang fleksibel sesuai kebutuhan Anda di Cianjur: kenyamanan didampingi pengemudi atau keleluasaan menyetir sendiri (lepas kunci)."
          light={true}
        />

        {/* Services Cards Grid (2 Columns Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {SERVICES_DATA.map((service) => {
            const serviceWaUrl = getGeneralInquiryWhatsAppUrl(`Layanan ${service.title}`);

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-7 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Container with Gold Ring */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FAF7F0] to-[#F7EFCF] border border-[#D4AF37]/50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-inner">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-bold text-[#111111] group-hover:text-[#AA7C11] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#AA7C11] mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-4 border-t border-stone-100 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation CTA */}
                <div className="pt-2">
                  <WhatsAppButton
                    href={serviceWaUrl}
                    size="sm"
                    variant="secondary"
                    className="w-full text-xs font-semibold"
                  >
                    Konsultasi Layanan Ini
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on requirements */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-2xl mx-auto">
          * Catatan: Untuk layanan lepas kunci (self-drive), penyewa wajib melengkapi berkas verifikasi identitas sesuai prosedur standar keamanan rental sebelum unit diserahkan.
        </div>
      </div>
    </section>
  );
}
