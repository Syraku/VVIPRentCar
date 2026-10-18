import React from 'react';
import { Sparkles, UserCheck, Clock, Shield, Award, Headphones, ArrowRight } from 'lucide-react';
import { WHY_US_DATA, HOW_IT_WORKS_STEPS } from '@/lib/data/features';
import { SectionHeader } from '../ui/gold-ornament';
import { WhatsAppButton } from '../ui/whatsapp-button';
import { getGeneralInquiryWhatsAppUrl } from '@/lib/whatsapp';

export function WhyUsSection() {
  const generalWhatsAppUrl = getGeneralInquiryWhatsAppUrl();

  const getFeatureIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-[#F2D98D]';
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'user-check':
        return <UserCheck className={iconClass} />;
      case 'clock':
        return <Clock className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'award':
        return <Award className={iconClass} />;
      case 'headphones':
        return <Headphones className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-[#111111] text-stone-100 relative overflow-hidden">
      {/* Decorative background grid and gold glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Standar Keunggulan"
          title="Mengapa Memilih Layanan Kami"
          description="Komitmen kami adalah memberikan rasa aman, ketepatan waktu, dan kenyamanan tanpa kompromi bagi setiap pelanggan di setiap kilometer perjalanan."
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#171717] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-[0_4px_25px_rgba(212,175,55,0.15)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getFeatureIcon(item.iconName)}
              </div>
              <h3 className="font-display text-lg font-bold text-[#FAF7F0] group-hover:text-[#F2D98D] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works (Alur Booking WhatsApp) */}
        <div className="pt-12 border-t border-stone-800">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] block mb-2">
              Alur Pemesanan Mudah
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-[#FAF7F0]">
              4 Langkah Cepat Sewa Mobil
            </h3>
            <p className="text-sm text-stone-400 mt-2">
              Tanpa prosedur rumit, langsung terhubung dan terkonfirmasi melalui WhatsApp resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl bg-[#151515] border border-stone-800 hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-bold gold-gradient-text">
                      {step.step}
                    </span>
                    {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-[#D4AF37]/50" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-[#FAF7F0] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              href={generalWhatsAppUrl}
              size="lg"
              variant="primary"
            >
              Mulai Pesan Mobil Sekarang
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
