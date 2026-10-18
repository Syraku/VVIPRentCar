import { ServiceItem } from '@/types';

/**
 * ============================================================================
 * DATA LAYANAN RENTAL MOBIL: VVIP RENT CAR
 * ============================================================================
 * Sesuai data resmi klien, HANYA 2 layanan yang disediakan:
 * 1. Rental Mobil dengan Sopir
 * 2. Rental Mobil Lepas Kunci
 */

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dengan-sopir',
    title: 'Rental Mobil dengan Sopir',
    tagline: 'Perjalanan Nyaman Didampingi Sopir',
    description:
      'Nikmati kenyamanan bepergian tanpa perlu menyetir sendiri. Didampingi sopir untuk menemani rute perjalanan Anda di wilayah Cianjur serta sekitarnya.',
    iconName: 'driver',
    highlights: [
      'Didampingi sopir selama perjalanan',
      'Membantu navigasi rute di area Cianjur dan sekitarnya',
      'Bebas lelah kemacetan perjalanan',
      'Penjemputan tepat waktu sesuai jadwal yang disepakati',
    ],
    isConfirmed: true,
  },
  {
    id: 'lepas-kunci',
    title: 'Rental Mobil Lepas Kunci',
    tagline: 'Privasi & Fleksibilitas Penuh Menyetir Sendiri',
    description:
      'Layanan sewa kendaraan mandiri untuk keperluan pribadi atau keluarga dengan prosedur verifikasi data identitas resmi yang jelas, transparan, dan aman.',
    iconName: 'key',
    highlights: [
      'Privasi perjalanan maksimal bersama keluarga atau rekan',
      'Prosedur verifikasi dokumen identitas resmi yang terstruktur',
      'Kondisi kendaraan diperiksa sebelum diserahkan',
      'Pilihan durasi harian, mingguan, hingga jangka panjang',
    ],
    isConfirmed: true,
  },
];
