import { BusinessConfig } from '@/types';

/**
 * ============================================================================
 * KONFIGURASI UTAMA BISNIS: VVIP RENT CAR
 * ============================================================================
 * Data terverifikasi resmi klien:
 * - Nama: VVIP Rent Car
 * - WhatsApp: 081902433126 (wa.me: 6281902433126)
 * - Alamat: Jl. Raya Cibeber KM 11, Desa Peuteuycondong, Cibeber, Cianjur
 * - Area Layanan: Cianjur dan sekitarnya
 * - Layanan: Rental mobil dengan sopir & lepas kunci saja
 * - Instagram: https://www.instagram.com/tukang_rentcar/
 * - Email: farlandsetianah@gmail.com
 * - Jam Operasional: Belum dikonfirmasi (disembunyikan agar tidak mengarang jadwal)
 */

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'VVIP Rent Car',
  shortName: 'VVIP Rent Car',
  tagline: 'Rental Mobil Terpercaya di Cianjur',
  description:
    'Layanan rental mobil dengan sopir dan lepas kunci di Cianjur. Menyediakan contoh armada yang bersih dan nyaman untuk kebutuhan perjalanan pribadi, dinas kerja, dan keluarga dengan pemesanan cepat via WhatsApp.',
  
  // Nomor WhatsApp resmi terverifikasi
  whatsappNumber: '6281902433126',
  displayPhone: '0819-0243-3126',
  
  // Alamat dan area layanan resmi
  address: 'Jl. Raya Cibeber KM 11, Desa Peuteuycondong, Cibeber, Cianjur',
  city: 'Cianjur',
  serviceAreaNotice:
    'Melayani area Cibeber, Cianjur kota, dan wilayah sekitarnya untuk opsi rental dengan sopir maupun lepas kunci.',

  // Kontak resmi
  email: 'farlandsetianah@gmail.com',
  
  // Jam operasional: Belum dikonfirmasi oleh pemilik rental, sengaja dikosongkan agar tidak mengarang data
  operatingHours: undefined,

  socials: {
    instagram: 'https://www.instagram.com/tukang_rentcar/',
  },

  // Logo resmi bisnis (dapat diganti langsung melalui baris ini)
  logoPath: '/brand/logo.webp',

  // Data identitas bisnis sudah terverifikasi riil
  isConfigurationPlaceholder: false,
};

export const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Armada', href: '#armada' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

/**
 * HANYA DUA LAYANAN YANG TERSEDIA SESUAI DATA RESMI KLIEN
 */
export const SERVICE_TYPES = [
  { id: 'dengan-sopir', label: 'Rental Mobil dengan Sopir' },
  { id: 'lepas-kunci', label: 'Rental Mobil Lepas Kunci' },
];

export const DURATION_OPTIONS = [
  { value: '1 Hari', label: '1 Hari (Harian)' },
  { value: '2 Hari', label: '2 Hari' },
  { value: '3 Hari', label: '3 Hari' },
  { value: '4 - 7 Hari', label: '4 - 7 Hari (Mingguan)' },
  { value: 'Lebih dari 1 Minggu', label: 'Lebih dari 1 Minggu (Jangka Panjang)' },
];
