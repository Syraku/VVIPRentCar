import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS_CONFIG } from '@/lib/config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} — Rental Mobil Terpercaya di Cianjur`,
  description:
    'Layanan rental mobil dengan sopir dan lepas kunci di Cianjur. Contoh armada: Toyota Alphard, Mitsubishi Pajero Sport, Toyota Kijang Innova Reborn, Toyota HiAce Commuter, Toyota Fortuner, Toyota Avanza, dan Toyota Innova Zenix.',
  keywords: [
    'rental mobil cianjur',
    'sewa mobil cianjur',
    'vvip rent car',
    'rental mobil cibeber',
    'sewa alphard cianjur',
    'sewa zenix cianjur',
    'sewa pajero sport cianjur',
    'sewa fortuner cianjur',
    'sewa innova reborn cianjur',
    'sewa hiace cianjur',
    'sewa avanza cianjur',
    'rental mobil lepas kunci cianjur',
    'rental mobil dengan sopir cianjur',
  ],
  authors: [{ name: BUSINESS_CONFIG.name }],
  metadataBase: new URL('https://vviprentcarcianjur.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${BUSINESS_CONFIG.name} — Rental Mobil Terpercaya di Cianjur`,
    description:
      'Solusi transportasi terpercaya di Cianjur dengan pilihan sewa mobil dengan sopir atau lepas kunci. Hubungi kami langsung via WhatsApp untuk reservasi.',
    url: 'https://vviprentcarcianjur.com',
    locale: 'id_ID',
    type: 'website',
    siteName: BUSINESS_CONFIG.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0d0d0d] text-stone-100 antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
