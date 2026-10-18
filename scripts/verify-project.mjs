import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

console.log('====================================================');
console.log(' VVIP RENT CAR — SUITE PENGUJIAN & VERIFIKASI RESMI');
console.log('====================================================\n');

let failedTests = 0;
let passedTests = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    failedTests++;
  }
}

// ----------------------------------------------------
// 1. Verifikasi Data Bisnis Resmi di config.ts
// ----------------------------------------------------
console.log('1. Verifikasi Konfigurasi Bisnis (src/lib/config.ts):');
const configContent = fs.readFileSync(path.join(rootDir, 'src/lib/config.ts'), 'utf-8');

assert(configContent.includes("name: 'VVIP Rent Car'"), "Nama Brand adalah 'VVIP Rent Car'");
assert(configContent.includes("whatsappNumber: '6281902433126'"), "Nomor WhatsApp resmi: 6281902433126");
assert(configContent.includes("displayPhone: '0819-0243-3126'"), "Tampilan nomor telepon: 0819-0243-3126");
assert(configContent.includes("email: 'farlandsetianah@gmail.com'"), "Email resmi terverifikasi");
assert(configContent.includes("logoPath: '/brand/logo.webp'"), "Logo resmi terkonfigurasi di logoPath: '/brand/logo.webp'");
assert(configContent.includes("id: 'dengan-sopir'") && configContent.includes("id: 'lepas-kunci'"), "Tepat 2 layanan resmi (dengan sopir & lepas kunci)");

// ----------------------------------------------------
// 2. Verifikasi 7 Contoh Kendaraan di Katalog
// ----------------------------------------------------
console.log('\n2. Verifikasi 7 Contoh Kendaraan di Katalog (src/lib/data/vehicles.ts):');
const vehiclesContent = fs.readFileSync(path.join(rootDir, 'src/lib/data/vehicles.ts'), 'utf-8');

const requiredCars = [
  'Toyota Alphard',
  'Mitsubishi Pajero Sport',
  'Toyota Kijang Innova Reborn',
  'Toyota HiAce Commuter',
  'Toyota Fortuner',
  'Toyota Avanza',
  'Toyota Innova Zenix',
];

for (const car of requiredCars) {
  assert(vehiclesContent.includes(car), `Contoh armada memuat ${car}`);
}

const bannedCars = [
  'Daihatsu Sigra',
  'Toyota Agya',
  'Toyota Calya',
  'Honda Brio',
  'Mitsubishi Xpander',
  'Suzuki Ertiga',
  'Honda Mobilio',
  'Yamaha NMax',
  'Honda Vario',
  'Honda Beat',
  'Honda PCX',
];

for (const banned of bannedCars) {
  assert(!vehiclesContent.includes(banned), `Katalog armada TIDAK memuat ${banned} (telah dibersihkan)`);
}

// ----------------------------------------------------
// 3. Verifikasi Aturan Ketat Non-Fabrikasi Harga
// ----------------------------------------------------
console.log('\n3. Verifikasi Aturan Tanpa Harga (src/lib/data/vehicles.ts):');
// Hapus komentar agar tidak salah mendeteksi kalimat larangan di komentar file
const codeWithoutComments = vehiclesContent.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
const priceTerms = ['Rp', 'IDR', '/hari', '/24jam', 'mulai dari', 'tarif', 'harga sewa'];
for (const term of priceTerms) {
  assert(!codeWithoutComments.toLowerCase().includes(term), `Tidak ada kata harga/tarif '${term}' di katalog armada`);
}

// ----------------------------------------------------
// 4. Verifikasi Tampilan Publik Galeri (Tanpa Teks Developer)
// ----------------------------------------------------
console.log('\n4. Verifikasi Galeri Publik (src/components/sections/gallery-section.tsx):');
const gallerySectionContent = fs.readFileSync(path.join(rootDir, 'src/components/sections/gallery-section.tsx'), 'utf-8');
assert(!gallerySectionContent.includes('Keterangan: Foto di atas adalah ilustrasi'), 'Teks developer disclaimer telah dihapus dari tampilan publik');

// ----------------------------------------------------
// 5. Verifikasi Galeri Interior Sesuai Model
// ----------------------------------------------------
console.log('\n5. Verifikasi Galeri Interior (src/lib/data/gallery.ts):');
const galleryContent = fs.readFileSync(path.join(rootDir, 'src/lib/data/gallery.ts'), 'utf-8');
assert(galleryContent.includes('Toyota Alphard'), 'Galeri mencakup foto model Toyota Alphard');
assert(galleryContent.includes('Toyota Innova Zenix'), 'Galeri mencakup foto model Toyota Innova Zenix');
assert(galleryContent.includes('Mitsubishi Pajero Sport'), 'Galeri mencakup foto model Mitsubishi Pajero Sport');
assert(galleryContent.includes('interior-alphard.webp'), 'Galeri menggunakan interior-alphard.webp');
assert(galleryContent.includes('interior-zenix.webp'), 'Galeri menggunakan interior-zenix.webp');

// ----------------------------------------------------
// 6. Verifikasi Keberadaan Aset Logo & Gambar Fleet
// ----------------------------------------------------
console.log('\n6. Verifikasi File Aset di Folder public/:');
const requiredFiles = [
  'public/brand/logo.webp',
  'public/brand/logo.jpeg',
  'public/images/fleet/toyota-alphard.webp',
  'public/images/fleet/mitsubishi-pajero-sport.webp',
  'public/images/fleet/toyota-kijang-innova-reborn.webp',
  'public/images/fleet/toyota-hiace-commuter.webp',
  'public/images/fleet/toyota-fortuner.webp',
  'public/images/fleet/toyota-avanza.webp',
  'public/images/fleet/toyota-innova-zenix.webp',
  'public/images/gallery/interior-alphard.webp',
  'public/images/gallery/interior-zenix.webp',
  'public/images/gallery/interior-pajero-sport.webp',
  'public/images/gallery/interior-hiace.webp',
  'public/images/gallery/interior-innova.webp',
  'public/images/gallery/interior-avanza.webp',
  'public/images/gallery/interior-fortuner.webp',
];

for (const relPath of requiredFiles) {
  const fullPath = path.join(rootDir, relPath);
  assert(fs.existsSync(fullPath), `File aset ada: ${relPath}`);
}

// ----------------------------------------------------
// 7. Verifikasi File Asli Tetap Aman di src/
// ----------------------------------------------------
console.log('\n7. Verifikasi File Asli di src/components/fleet/ & Brand/ (Belum Dihapus):');
const originalFiles = [
  'src/components/Brand/logo.jpeg',
  'src/components/fleet/Alphard.jpeg',
  'src/components/fleet/Avanza.jpeg',
  'src/components/fleet/Fortuner.jpeg',
  'src/components/fleet/HiAce Commuter.jpeg',
  'src/components/fleet/Innova Zenix.jpeg',
  'src/components/fleet/kijang innova reborn.jpeg',
  'src/components/fleet/pajero sport.jpeg',
];

for (const relPath of originalFiles) {
  const fullPath = path.join(rootDir, relPath);
  assert(fs.existsSync(fullPath), `File asli tersimpan aman: ${relPath}`);
}

// ----------------------------------------------------
// 8. Verifikasi Bagian Armada & Netralitas Klaim
// ----------------------------------------------------
console.log('\n8. Verifikasi Bagian Armada & Netralitas Klaim:');
const fleetSectionContent = fs.readFileSync(path.join(rootDir, 'src/components/sections/fleet-section.tsx'), 'utf-8');
assert(fleetSectionContent.includes('subtitle="Contoh Armada"'), 'Label kecil bagian armada adalah "Contoh Armada"');
assert(fleetSectionContent.includes('title="Armada Mobil VVIP Rent Car"'), 'Judul armada adalah "Armada Mobil VVIP Rent Car"');
assert(
  fleetSectionContent.includes(
    'Berikut beberapa contoh kendaraan yang kami sediakan untuk perjalanan Anda di Cianjur: Toyota Alphard, Mitsubishi Pajero Sport, Toyota Kijang Innova Reborn, Toyota HiAce Commuter, Toyota Fortuner, Toyota Avanza, dan Toyota Innova Zenix. Armada kami tidak terbatas pada daftar ini. Hubungi kami melalui WhatsApp untuk menanyakan ketersediaan unit lainnya.'
  ),
  'Deskripsi armada memuat 7 contoh kendaraan dan keterangan tidak terbatas pada daftar ini'
);
assert(fleetSectionContent.includes('Tanyakan Ketersediaan Armada Lain'), 'Tombol WhatsApp "Tanyakan Ketersediaan Armada Lain" tersedia');

// Verifikasi ketiadaan klaim belum terkonfirmasi di komponen UI utama
const footerContent = fs.readFileSync(path.join(rootDir, 'src/components/layout/footer.tsx'), 'utf-8');
const heroContent = fs.readFileSync(path.join(rootDir, 'src/components/sections/hero-section.tsx'), 'utf-8');
const servicesSectionContent = fs.readFileSync(path.join(rootDir, 'src/components/sections/services-section.tsx'), 'utf-8');
const aboutContent = fs.readFileSync(path.join(rootDir, 'src/components/sections/about-section.tsx'), 'utf-8');

assert(!footerContent.includes('Legalitas Terjamin'), 'Footer tidak memuat klaim "Legalitas Terjamin"');
assert(!footerContent.includes('Pengemudi Santun'), 'Footer tidak memuat klaim "Pengemudi Santun"');
assert(!heroContent.includes('Pengemudi Santun'), 'Hero section tidak memuat klaim "Pengemudi Santun"');
assert(!servicesSectionContent.includes('pengemudi berpengalaman'), 'Services section tidak memuat klaim "pengemudi berpengalaman"');
assert(!aboutContent.includes('jadwal servis berkala'), 'About section tidak memuat klaim "jadwal servis berkala"');

console.log('\n====================================================');
console.log(` HASIL PENGUJIAN: ${passedTests} LULUS, ${failedTests} GAGAL`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
}
