# VVIP Rent Car — Website Rental Mobil Premium Cianjur

Website resmi **VVIP Rent Car** (Cianjur) berbasis **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS**, dirancang dengan identitas visual mewah bernuansa **Emas (Gold) × Putih (White) × Hitam (Black)**. Seluruh pemesanan kendaraan terpusat langsung melalui **WhatsApp** resmi.

---

## 📋 Data Bisnis Terverifikasi

- **Nama Brand**: VVIP Rent Car
- **WhatsApp**: 081902433126 (URL wa.me: `https://wa.me/6281902433126`)
- **Alamat**: Jl. Raya Cibeber KM 11, Desa Peuteuycondong, Cibeber, Cianjur
- **Area Layanan**: Cianjur dan sekitarnya (Cibeber, Cianjur Kota, Cipanas, dll.)
- **Email**: farlandsetianah@gmail.com
- **Instagram**: [https://www.instagram.com/tukang_rentcar/](https://www.instagram.com/tukang_rentcar/)
- **Layanan Resmi yang Tersedia**:
  1. Rental Mobil dengan Sopir
  2. Rental Mobil Lepas Kunci

---

## 🚗 Contoh Armada Kendaraan (7 Unit Sampel)

Katalog armada menampilkan 7 contoh unit kendaraan yang disediakan oleh VVIP Rent Car (armada tidak terbatas pada daftar ini):

1. **Toyota Alphard** (MPV Premium, 7 Kursi Captain Seat, Otomatis)
2. **Mitsubishi Pajero Sport** (SUV, 7 Kursi, Otomatis / Manual)
3. **Toyota Kijang Innova Reborn** (MPV, 7 Kursi, Manual / Otomatis)
4. **Toyota HiAce Commuter** (Minibus / Van, 15 Kursi, Manual)
5. **Toyota Fortuner** (SUV, 7 Kursi, Otomatis / Manual)
6. **Toyota Avanza** (MPV, 7 Kursi, Manual / Otomatis)
7. **Toyota Innova Zenix** (MPV Modern TNGA, 7 Kursi, Otomatis)

*Catatan: Model kendaraan di atas merupakan contoh armada. Ketersediaan unit lainnya dapat ditanyakan langsung melalui WhatsApp.*

---

## 📷 Dokumentasi Sumber Foto, Format & Status Lisensi

### 1. Foto Armada (Katalog Utama)
Foto armada menggunakan materi visual resmi berformat portrait (asli tersimpan di `src/components/fleet/`), dikonversi ke format modern **WebP** terkompresi ringan untuk kecepatan loading optimal, dan tersimpan di `public/images/fleet/`:

| File Gambar WebP | Model Kendaraan | Format | Resolusi Asli | Status Sumber |
|---|---|---|---|---|
| `public/images/fleet/toyota-alphard.webp` | Toyota Alphard | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/mitsubishi-pajero-sport.webp` | Mitsubishi Pajero Sport | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/toyota-kijang-innova-reborn.webp` | Toyota Kijang Innova Reborn | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/toyota-hiace-commuter.webp` | Toyota HiAce Commuter | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/toyota-fortuner.webp` | Toyota Fortuner | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/toyota-avanza.webp` | Toyota Avanza | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |
| `public/images/fleet/toyota-innova-zenix.webp` | Toyota Innova Zenix | Portrait (9:16) | 720×1280 | Materi Resmi VVIP Rent Car |

> **Penyesuaian Kartu Armada**: Kartu armada ([`src/components/fleet/vehicle-card.tsx`](file:///home/siraku/premium-car-rental/src/components/fleet/vehicle-card.tsx)) telah disesuaikan menggunakan rasio potret `aspect-[9/16]` dengan `object-contain` sehingga seluruh poster dan informasi visual mobil tampil utuh tanpa terpotong. File asli resolusi tinggi di `src/components/fleet/` tetap dipertahankan aman.

### 2. Galeri Foto Interior
Seluruh foto galeri interior diselaraskan secara akurat dengan model kendaraan yang ada di katalog (termasuk Toyota Alphard dan Toyota Innova Zenix):

| File Gambar | Model Terkait | Sumber Asli | Lisensi |
|---|---|---|---|
| `public/images/gallery/interior-alphard.webp` | Toyota Alphard | Wikimedia Commons (`File:Toyota ALPHARD HYBRID Executive Lounge (AYH30W) interior.JPG`) | CC BY-SA 4.0 |
| `public/images/gallery/interior-zenix.webp` | Toyota Innova Zenix | Wikimedia Commons (`File:Toyota Zenix MAGH10 2.0 Q HEV interior.jpg`) | CC BY-SA 4.0 |
| `public/images/gallery/interior-pajero-sport.webp` | Mitsubishi Pajero Sport | Wikimedia Commons (`File:2020 Mitsubishi Pajero Sport (Vietnam; facelift) interior.png`) | CC BY-SA 4.0 |
| `public/images/gallery/interior-fortuner.webp` | Toyota Fortuner | Wikimedia Commons (`File:2019 Toyota Fortuner VRZ interior.jpg`) | CC BY-SA 4.0 |
| `public/images/gallery/interior-innova.webp` | Toyota Kijang Innova Reborn | Wikimedia Commons (`File:2015 Toyota Kijang Innova interior view.jpg`) | CC BY-SA 3.0 |
| `public/images/gallery/interior-hiace.webp` | Toyota HiAce Commuter | Wikimedia Commons (`File:2019 Toyota HiAce Premio 2.8 GDH322R interior.jpg`) | CC BY-SA 4.0 |
| `public/images/gallery/interior-avanza.webp` | Toyota Avanza | Wikimedia Commons (`File:2021 Toyota Avanza TSS interior.jpg`) | CC BY-SA 4.0 |

---

## 🛠️ Panduan Penggantian Foto & Logo

### 1. Mengganti Foto Armada
1. Siapkan file gambar baru (disarankan format WebP atau JPG).
2. Simpan file baru ke dalam folder `public/images/fleet/`.
3. Buka [`src/lib/data/vehicles.ts`](file:///home/siraku/premium-car-rental/src/lib/data/vehicles.ts) dan perbarui properti `image` pada model mobil yang bersangkutan.

### 2. Mengganti Foto Galeri
1. Simpan file foto dokumentasi interior atau unit baru di `public/images/gallery/`.
2. Buka [`src/lib/data/gallery.ts`](file:///home/siraku/premium-car-rental/src/lib/data/gallery.ts) dan sesuaikan properti `imageUrl`, `title`, dan `caption`.
3. Teks developer (*disclaimer ilustrasi*) telah dihilangkan dari tampilan publik agar antarmuka bersih dan profesional. Seluruh dokumentasi lisensi dicatat di file README ini.

### 3. Mengganti Logo Brand
1. File logo resmi bisnis tersimpan di `public/brand/logo.webp` (dan `public/brand/logo.jpeg`).
2. Konfigurasi logo aktif diatur pada [`src/lib/config.ts`](file:///home/siraku/premium-car-rental/src/lib/config.ts):
   ```ts
   export const BUSINESS_CONFIG: BusinessConfig = {
     // ...
     logoPath: '/brand/logo.webp',
   };
   ```
3. Logo ditampilkan di navbar kiri atas dan footer dengan batas tinggi proporsional (`max-h-[40px]`), menjaga navbar tetap ramping dan elegan di semua ukuran layar.
4. Alt text logo otomatis menggunakan `Logo VVIP Rent Car Cianjur`.

---

## 🚀 Pengujian & Verifikasi Proyek

### 1. Menjalankan Suite Verifikasi Otomatis
Skrip verifikasi komprehensif memvalidasi tampilan 7 contoh kendaraan, ketiadaan harga tersembunyi, nomor WhatsApp resmi, dan integritas file:
```bash
npm run test:verify
```

### 2. Memeriksa Linter
```bash
npm run lint
```

### 3. Memeriksa TypeScript
```bash
npx tsc --noEmit
```

### 4. Menjalankan Build Produksi
```bash
npm run build
```

### 5. Menjalankan Server Pengembangan
```bash
npm run dev
```
Kunjungi [http://localhost:3000](http://localhost:3000) di browser Anda.
