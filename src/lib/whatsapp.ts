import { BUSINESS_CONFIG } from './config';
import { BookingFormData } from '@/types';

/**
 * Membersihkan nomor telepon agar sesuai dengan format wa.me
 * Menghapus spasi, tanda tambah (+), tanda hubung, dan karakter non-angka.
 */
export function sanitizeWhatsAppNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Menghasilkan URL WhatsApp resmi (https://wa.me/PHONE?text=...)
 */
export function createWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = sanitizeWhatsAppNumber(customPhone || BUSINESS_CONFIG.whatsappNumber);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Format pesan WhatsApp untuk booking kendaraan spesifik dari katalog armada
 */
export function getVehicleBookingWhatsAppUrl(vehicleName: string): string {
  const message = `Halo ${BUSINESS_CONFIG.name}, saya tertarik untuk menyewa kendaraan *${vehicleName}*.

Mohon informasi lebih lanjut mengenai ketersediaan unit dan persyaratan rental untuk armada ini. Terima kasih.`;

  return createWhatsAppUrl(message);
}

/**
 * Format pesan WhatsApp untuk pertanyaan umum / konsultasi
 */
export function getGeneralInquiryWhatsAppUrl(topic?: string): string {
  const message = topic
    ? `Halo ${BUSINESS_CONFIG.name}, saya ingin berkonsultasi mengenai layanan *${topic}*. Mohon informasi ketersediaan dan ketentuannya. Terima kasih.`
    : `Halo ${BUSINESS_CONFIG.name}, saya ingin berkonsultasi mengenai ketersediaan layanan rental mobil Anda. Mohon informasi selengkapnya. Terima kasih.`;

  return createWhatsAppUrl(message);
}

/**
 * Format pesan WhatsApp dari formulir pemesanan lengkap
 */
export function getBookingFormWhatsAppUrl(data: BookingFormData): string {
  const notesText = data.notes && data.notes.trim() ? data.notes.trim() : '-';

  const message = `Halo ${BUSINESS_CONFIG.name}, saya ingin melakukan reservasi rental mobil dengan rincian berikut:

📋 *RINCIAN RESERVASI MOBIL*
• *Nama Pemesan:* ${data.customerName}
• *Pilihan Kendaraan:* ${data.selectedVehicle}
• *Tanggal Mulai Sewa:* ${data.startDate}
• *Durasi Sewa:* ${data.duration}
• *Lokasi Penjemputan:* ${data.pickupLocation}
• *Jenis Layanan:* ${data.serviceType}
• *Catatan Tambahan:* ${notesText}

Mohon konfirmasi ketersediaan unit pada tanggal tersebut serta instruksi verifikasi selanjutnya. Terima kasih.`;

  return createWhatsAppUrl(message);
}
