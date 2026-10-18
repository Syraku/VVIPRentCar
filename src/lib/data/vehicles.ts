import { Vehicle, VehicleCategory } from '@/types';

/**
 * ============================================================================
 * KATALOG ARMADA MOBIL: VVIP RENT CAR
 * ============================================================================
 * Contoh model armada kendaraan yang tersedia di VVIP Rent Car:
 * 1. Toyota Alphard
 * 2. Mitsubishi Pajero Sport
 * 3. Toyota Kijang Innova Reborn
 * 4. Toyota HiAce Commuter
 * 5. Toyota Fortuner
 * 6. Toyota Avanza
 * 7. Toyota Innova Zenix
 * 
 * ATURAN KETAT:
 * - Tidak menampilkan harga, tarif, perkiraan biaya, maupun tulisan "mulai dari".
 * - Spesifikasi hanya memuat kapasitas tempat duduk dan transmisi standar pabrikan.
 * - Foto berformat portrait dengan visual utuh dari materi resmi VVIP Rent Car.
 */

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    category: 'MPV',
    capacity: 7,
    transmission: 'Automatic',
    fuelType: 'Bensin',
    isPopular: true,
    isFlagship: true,
    image: '/images/fleet/toyota-alphard.webp',
    features: [
      'Kapasitas 7 Penumpang (Captain Seat)',
      'Kabin Mewah & Senyap',
      'Pintu Geser Elektrik (Power Sliding Door)',
      'Kenyamanan Kelas Eksekutif VVIP',
    ],
    description:
      'MPV premium kelas atas yang menyajikan kemewahan puncak, kenyamanan kabin ekstra senyap, dan captain seat eksklusif untuk perjalanan istimewa.',
  },
  {
    id: 'mitsubishi-pajero-sport',
    name: 'Mitsubishi Pajero Sport',
    category: 'SUV',
    capacity: 7,
    transmission: 'Automatic / Manual',
    fuelType: 'Diesel',
    isPopular: true,
    image: '/images/fleet/mitsubishi-pajero-sport.webp',
    features: [
      'Kapasitas 7 Penumpang',
      'Performa Mesin Diesel Bertenaga',
      'Ground Clearance Tinggi',
      'Desain Maskulin & Tangguh',
    ],
    description:
      'SUV tangguh berkarakter gagah dengan kenyamanan berkendara optimal untuk perjalanan dinas, bisnis, maupun agenda keluarga di berbagai medan.',
  },
  {
    id: 'toyota-kijang-innova-reborn',
    name: 'Toyota Kijang Innova Reborn',
    category: 'MPV',
    capacity: 7,
    transmission: 'Manual / Otomatis',
    fuelType: 'Bensin / Diesel',
    isPopular: true,
    image: '/images/fleet/toyota-kijang-innova-reborn.webp',
    features: [
      'Kapasitas 7 Penumpang',
      'Suspensi Halus & Nyaman',
      'Kabin Luas & Senyap',
      'Ruang Bagasi Lega',
    ],
    description:
      'Kendaraan keluarga legendaris dengan kenyamanan suspensi teruji, kabin lapang, dan ketangguhan prima untuk berbagai agenda perjalanan Anda.',
  },
  {
    id: 'toyota-hiace-commuter',
    name: 'Toyota HiAce Commuter',
    category: 'Minibus / Van',
    capacity: 15,
    transmission: 'Manual',
    fuelType: 'Diesel',
    isPopular: true,
    isFlagship: true,
    image: '/images/fleet/toyota-hiace-commuter.webp',
    features: [
      'Kapasitas 15 Penumpang',
      'Kabin Lapang & Nyaman',
      'AC Kisi-kisi Per Baris Kursi',
      'Pilihan Utama Rombongan & Wisata',
    ],
    description:
      'Minibus berkapasitas besar andalan untuk perjalanan rombongan keluarga besar, wisata, maupun antar-kota dengan kabin lega dan sejuk.',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    capacity: 7,
    transmission: 'Automatic / Manual',
    fuelType: 'Diesel',
    isPopular: true,
    isFlagship: true,
    image: '/images/fleet/toyota-fortuner.webp',
    features: [
      'Kapasitas 7 Penumpang',
      'Ground Clearance Tinggi',
      'Tangguh Melibas Berbagai Medan',
      'Tampilan Berwibawa & Gagah',
    ],
    description:
      'SUV tangguh dengan ground clearance tinggi dan kabin berwibawa, siap melintasi rute perkotaan maupun jalan berbukit di Cianjur dan sekitarnya.',
  },
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    category: 'MPV',
    capacity: 7,
    transmission: 'Manual / Otomatis',
    fuelType: 'Bensin',
    isPopular: true,
    image: '/images/fleet/toyota-avanza.webp',
    features: [
      'Kapasitas 7 Penumpang',
      'AC Double Blower Dingin',
      'Fleksibilitas Pengaturan Kursi',
      'Pilihan Favorit Keluarga Indonesia',
    ],
    description:
      'MPV keluarga serbaguna yang nyaman dan handal, menjadi pilihan andalan untuk bepergian bersama keluarga maupun perjalanan kerja harian.',
  },
  {
    id: 'toyota-innova-zenix',
    name: 'Toyota Innova Zenix',
    category: 'MPV',
    capacity: 7,
    transmission: 'Automatic',
    fuelType: 'Bensin',
    isPopular: true,
    isFlagship: true,
    image: '/images/fleet/toyota-innova-zenix.webp',
    features: [
      'Kapasitas 7 Penumpang',
      'Platform Modern TNGA Senyap & Nyaman',
      'Kabin Luas Berfitur Mutakhir',
      'Efisiensi Bahan Bakar Optimal',
    ],
    description:
      'Generasi MPV modern Toyota berbasis platform TNGA yang menghadirkan kenyamanan berkendara halus, kabin lega berkelas, dan performa efisien.',
  },
];

export const VEHICLE_CATEGORIES: ('Semua Armada' | VehicleCategory)[] = [
  'Semua Armada',
  'MPV',
  'SUV',
  'Minibus / Van',
];

