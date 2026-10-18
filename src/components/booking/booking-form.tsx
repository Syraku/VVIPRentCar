'use client';

import React, { useState } from 'react';
import { VEHICLES_DATA } from '@/lib/data/vehicles';
import { SERVICE_TYPES, DURATION_OPTIONS, BUSINESS_CONFIG } from '@/lib/config';
import { getBookingFormWhatsAppUrl } from '@/lib/whatsapp';
import { BookingFormData } from '@/types';
import { Calendar, User, Car, MapPin, Clock, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    selectedVehicle: VEHICLES_DATA[0]?.name || '',
    startDate: '',
    duration: DURATION_OPTIONS[0]?.value || '1 Hari',
    pickupLocation: '',
    serviceType: SERVICE_TYPES[0]?.label || 'Rental Mobil dengan Sopir',
    notes: '',
  });

  const [minDate] = useState<string>(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Nama lengkap pemesan wajib diisi';
    }

    if (!formData.selectedVehicle) {
      newErrors.selectedVehicle = 'Silakan pilih kendaraan yang diinginkan';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Tanggal mulai sewa wajib dipilih';
    } else if (minDate && formData.startDate < minDate) {
      newErrors.startDate = 'Tanggal mulai tidak boleh berupa tanggal yang sudah lewat';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Durasi sewa wajib ditentukan';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Lokasi penjemputan / pengantaran wajib diisi';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Silakan pilih jenis layanan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Generate WhatsApp URL and open in new tab
    const waUrl = getBookingFormWhatsAppUrl(formData);
    setSubmitted(true);

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#141414] border border-[#D4AF37]/35 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative"
      noValidate
    >
      <div className="mb-8">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF7F0] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          Formulir Reservasi WhatsApp
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mt-1.5 leading-relaxed">
          Isi detail rencana perjalanan Anda. Formulir ini akan otomatis membuat draf pesan reservasi terstruktur langsung ke customer service kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nama Lengkap */}
        <div className="space-y-1.5">
          <label htmlFor="customerName" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Nama Lengkap Pemesan <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Contoh: Bpk. Bambang Wijaya"
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors ${
                errors.customerName
                  ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
              }`}
            />
          </div>
          {errors.customerName && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.customerName}
            </p>
          )}
        </div>

        {/* Pilihan Kendaraan */}
        <div className="space-y-1.5">
          <label htmlFor="selectedVehicle" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Pilihan Kendaraan <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <Car className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="selectedVehicle"
              name="selectedVehicle"
              value={formData.selectedVehicle}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors appearance-none cursor-pointer ${
                errors.selectedVehicle
                  ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
              }`}
            >
              {VEHICLES_DATA.map((v) => (
                <option key={v.id} value={v.name} className="bg-[#1c1c1c] text-stone-100">
                  {v.name} ({v.capacity} Seat)
                </option>
              ))}
            </select>
          </div>
          {errors.selectedVehicle && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.selectedVehicle}
            </p>
          )}
        </div>

        {/* Tanggal Mulai Sewa */}
        <div className="space-y-1.5">
          <label htmlFor="startDate" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Tanggal Mulai Sewa <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              id="startDate"
              name="startDate"
              min={minDate}
              value={formData.startDate}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors [color-scheme:dark] ${
                errors.startDate
                  ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
              }`}
            />
          </div>
          {errors.startDate && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.startDate}
            </p>
          )}
        </div>

        {/* Durasi Sewa */}
        <div className="space-y-1.5">
          <label htmlFor="duration" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Durasi Sewa <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors appearance-none cursor-pointer ${
                errors.duration
                  ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
              }`}
            >
              {DURATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#1c1c1c] text-stone-100">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {errors.duration && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.duration}
            </p>
          )}
        </div>

        {/* Jenis Layanan */}
        <div className="space-y-1.5">
          <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Pilihan Jenis Layanan <span className="text-rose-400">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors appearance-none cursor-pointer ${
              errors.serviceType
                ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
            }`}
          >
            {SERVICE_TYPES.map((type) => (
              <option key={type.id} value={type.label} className="bg-[#1c1c1c] text-stone-100">
                {type.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.serviceType}
            </p>
          )}
        </div>

        {/* Lokasi Penjemputan */}
        <div className="space-y-1.5">
          <label htmlFor="pickupLocation" className="block text-xs font-semibold uppercase tracking-wider text-[#F2D98D]">
            Lokasi Penjemputan <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Contoh: Alamat Rumah / Hotel di Cianjur"
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border focus:outline-none transition-colors ${
                errors.pickupLocation
                  ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
              }`}
            />
          </div>
          {errors.pickupLocation && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.pickupLocation}
            </p>
          )}
        </div>
      </div>

      {/* Catatan Tambahan (Opsional) */}
      <div className="mt-5 space-y-1.5">
        <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-stone-400">
          Catatan Tambahan / Permintaan Khusus (Opsional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tuliskan rute tujuan, titik penjemputan spesifik, atau kebutuhan khusus lainnya..."
          className="w-full px-4 py-2.5 rounded-lg bg-[#1c1c1c] text-stone-100 text-sm border border-stone-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Notice on WhatsApp Confirmation Process */}
      <div className="mt-6 p-4 rounded-xl bg-[#1c1912] border border-[#D4AF37]/30 text-xs text-[#F2D98D] flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
        <div className="leading-relaxed text-stone-300">
          <strong className="text-[#F2D98D] block mb-0.5">Mekanisme Konfirmasi:</strong>
          Menekan tombol di bawah akan membuka aplikasi WhatsApp dengan pesan reservasi yang telah tersusun rapi. Tim kami akan segera memeriksa ketersediaan kendaraan pada tanggal yang diminta dan memberikan instruksi verifikasi.
        </div>
      </div>

      {/* Submit Action */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[#F2D98D] via-[#D4AF37] to-[#AA7C11] text-[#111111] font-bold text-sm tracking-wide hover:from-[#FFFFFF] hover:via-[#F2D98D] hover:to-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Kirim Rincian Reservasi via WhatsApp</span>
        </button>

        <span className="text-xs text-stone-400">
          WhatsApp: {BUSINESS_CONFIG.displayPhone}
        </span>
      </div>

      {/* Success Notification feedback */}
      {submitted && (
        <div className="mt-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-600/50 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Jendela WhatsApp telah dibuka. Silakan tekan tombol &quot;Kirim&quot; di WhatsApp untuk mengirimkan pesan ke customer service kami.
          </span>
        </div>
      )}
    </form>
  );
}
