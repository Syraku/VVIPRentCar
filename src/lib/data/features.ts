import { WhyUsItem } from '@/types';

/**
 * ============================================================================
 * DATA KEUNGGULAN LAYANAN (WHY CHOOSE US)
 * ============================================================================
 * Disusun berdasarkan nilai layanan riil tanpa membuat klaim palsu seperti
 * penghargaan fiktif, jumlah pelanggan buatan, atau rating rekayasa.
 */

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'kondisi-bersih',
    title: 'Armada Bersih & Siap Pakai',
    description:
      'Setiap unit kendaraan dibersihkan dan dicek kondisinya sebelum diserahkan kepada pelanggan untuk kenyamanan perjalanan Anda.',
    iconName: 'sparkles',
  },
  {
    id: 'layanan-pengemudi',
    title: 'Layanan Pengemudi',
    description:
      'Tersedia pilihan rental didampingi sopir untuk membantu kelancaran dan kemudahan rute perjalanan Anda di Cianjur dan sekitarnya.',
    iconName: 'user-check',
  },
  {
    id: 'booking-praktis',
    title: 'Pemesanan Praktis via WhatsApp',
    description:
      'Proses reservasi langsung terhubung dengan customer service kami tanpa perlu membuat akun atau mengisi alur sistem yang berbelit-belit.',
    iconName: 'clock',
  },
  {
    id: 'keamanan-kenyamanan',
    title: 'Kenyamanan Perjalanan',
    description:
      'Kelengkapan surat kendaraan dan kondisi unit disiapkan dengan baik agar perjalanan Anda berlangsung tenang.',
    iconName: 'shield',
  },
  {
    id: 'fleksibilitas-layanan',
    title: 'Fleksibilitas Rute & Durasi',
    description:
      'Pilihan durasi sewa harian, mingguan, hingga jangka panjang dengan titik penjemputan fleksibel di hotel, kediaman, atau kantor di wilayah Cianjur.',
    iconName: 'award',
  },
  {
    id: 'pelayanan-responsif',
    title: 'Konsultasi Armada Responsif',
    description:
      'Tim kami siap membantu merekomendasikan tipe kendaraan yang paling sesuai dengan kebutuhan kapasitas dan rute perjalanan Anda.',
    iconName: 'headphones',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Pilih Kendaraan & Tentukan Jadwal',
    description:
      'Telusuri katalog armada kami, lalu tentukan tipe mobil, tanggal mulai, durasi sewa, serta jenis layanan (dengan sopir atau lepas kunci).',
  },
  {
    step: '02',
    title: 'Hubungi via WhatsApp Resmi',
    description:
      'Klik tombol pemesanan atau isi formulir reservasi. Sistem akan otomatis menyusun pesan WhatsApp berisi rincian perjalanan Anda.',
  },
  {
    step: '03',
    title: 'Konfirmasi Ketersediaan & Persyaratan',
    description:
      'Tim customer service kami akan segera memverifikasi ketersediaan unit, jadwal penjemputan, dan syarat verifikasi dokumen.',
  },
  {
    step: '04',
    title: 'Unit Siap Digunakan',
    description:
      'Kendaraan siap dijemput di lokasi yang disepakati atau diantar ke alamat Anda dalam kondisi bersih, wangi, dan bahan bakar siap jalan.',
  },
];
