import { GalleryItem } from '@/types';

/**
 * ============================================================================
 * DATA GALERI FOTO: VVIP RENT CAR
 * ============================================================================
 * Foto diselaraskan dengan contoh model armada VVIP Rent Car:
 * - Toyota Alphard (Interior & Armada)
 * - Toyota Innova Zenix (Interior & Armada)
 * - Mitsubishi Pajero Sport (Interior & Armada)
 * - Toyota Fortuner (Interior)
 * - Toyota Kijang Innova Reborn (Interior)
 * - Toyota HiAce Commuter (Interior)
 * - Toyota Avanza (Interior)
 */

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-alphard-interior',
    title: 'Kabin Eksekutif Toyota Alphard',
    category: 'Interior',
    vehicleModel: 'Toyota Alphard',
    imageUrl: '/images/gallery/interior-alphard.webp',
    caption: 'Kenyamanan kabin kelas satu dengan captain seat ergonomis dan ruang kabin ekstra senyap.',
    isStockDemo: true,
  },
  {
    id: 'gal-zenix-interior',
    title: 'Interior Modern Toyota Innova Zenix',
    category: 'Interior',
    vehicleModel: 'Toyota Innova Zenix',
    imageUrl: '/images/gallery/interior-zenix.webp',
    caption: 'Kokpit modern berbasis platform TNGA dengan visibilitas lapang dan kenyamanan kabin mutakhir.',
    isStockDemo: true,
  },
  {
    id: 'gal-pajero-interior',
    title: 'Dasbor & Kabin Mitsubishi Pajero Sport',
    category: 'Interior',
    vehicleModel: 'Mitsubishi Pajero Sport',
    imageUrl: '/images/gallery/interior-pajero-sport.webp',
    caption: 'Desain dasbor kokoh dan ergonomis dengan balutan material premium untuk kenyamanan SUV tangguh.',
    isStockDemo: true,
  },
  {
    id: 'gal-fortuner-interior',
    title: 'Dasbor & Interior Toyota Fortuner',
    category: 'Interior',
    vehicleModel: 'Toyota Fortuner',
    imageUrl: '/images/gallery/interior-fortuner.webp',
    caption: 'Interior SUV berkarakter gagah dengan posisi duduk tinggi dan ruang interior lapang.',
    isStockDemo: true,
  },
  {
    id: 'gal-innova-interior',
    title: 'Interior Kabin Toyota Kijang Innova Reborn',
    category: 'Interior',
    vehicleModel: 'Toyota Kijang Innova Reborn',
    imageUrl: '/images/gallery/interior-innova.webp',
    caption: 'Tata letak kursi ergonomis dan suspensi senyap yang nyaman untuk perjalanan keluarga.',
    isStockDemo: true,
  },
  {
    id: 'gal-hiace-interior',
    title: 'Kabin Lapang Toyota HiAce Commuter',
    category: 'Interior',
    vehicleModel: 'Toyota HiAce Commuter',
    imageUrl: '/images/gallery/interior-hiace.webp',
    caption: 'Kabin luas berkapasitas 15 kursi dengan hembusan AC per baris untuk kenyamanan rombongan.',
    isStockDemo: true,
  },
  {
    id: 'gal-avanza-interior',
    title: 'Kabin Ergonomis Toyota Avanza',
    category: 'Interior',
    vehicleModel: 'Toyota Avanza',
    imageUrl: '/images/gallery/interior-avanza.webp',
    caption: 'Ruang kabin fleksibel yang bersih dan nyaman untuk kebutuhan bepergian harian.',
    isStockDemo: true,
  },
  {
    id: 'gal-alphard-armada',
    title: 'Unit Toyota Alphard',
    category: 'Armada',
    vehicleModel: 'Toyota Alphard',
    imageUrl: '/images/fleet/toyota-alphard.webp',
    caption: 'Armada VVIP kelas atas siap memberikan pengalaman berkendara mewah dan prestisius.',
    isStockDemo: false,
  },
  {
    id: 'gal-zenix-armada',
    title: 'Unit Toyota Innova Zenix',
    category: 'Armada',
    vehicleModel: 'Toyota Innova Zenix',
    imageUrl: '/images/fleet/toyota-innova-zenix.webp',
    caption: 'MPV modern efisien berdesain elegan untuk mobilitas eksekutif dan keluarga.',
    isStockDemo: false,
  },
];

