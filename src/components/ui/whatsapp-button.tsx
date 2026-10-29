'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackWhatsAppConversion } from '@/lib/google-ads';

interface WhatsAppButtonProps {
  href: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
}

export function WhatsAppButton({
  href,
  children = 'Pesan via WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-7 py-3.5 text-base font-bold gap-2.5 tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#F2D98D] via-[#D4AF37] to-[#AA7C11] text-[#111111] hover:from-[#FFFFFF] hover:via-[#F2D98D] hover:to-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-[#F2D98D]/60',
    secondary:
      'bg-[#141414] text-[#F2D98D] hover:bg-[#1f1f1f] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]',
    outline:
      'bg-transparent text-[#FAF7F0] hover:text-[#F2D98D] border border-stone-600 hover:border-[#D4AF37] hover:bg-stone-900/50',
    pill:
      'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#111111] rounded-full hover:brightness-110 shadow-lg',
  };

  const baseClasses =
    'inline-flex items-center justify-center transition-all duration-300 rounded font-medium cursor-pointer text-center select-none active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppConversion}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="Hubungi kami melalui WhatsApp"
    >
      {icon && <MessageSquare className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
      <span>{children}</span>
    </a>
  );
}
