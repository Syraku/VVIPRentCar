export type TransmissionType = 'Automatic' | 'Manual' | 'Manual / Otomatis' | 'Automatic / Manual';

export type VehicleCategory = 'MPV' | 'SUV' | 'City Car' | 'Minibus / Van';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  capacity: number; // Jumlah kursi penumpang standar pabrikan
  transmission: TransmissionType;
  luggageCapacity?: number; // Kapasitas koper standar
  image: string;
  features: string[];
  fuelType?: 'Bensin' | 'Diesel' | 'Hybrid' | 'Bensin / Diesel';
  isPopular?: boolean;
  isFlagship?: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'driver' | 'key';
  highlights: string[];
  isConfirmed: boolean;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'clock' | 'sparkles' | 'award' | 'user-check' | 'headphones';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Eksterior' | 'Armada';
  imageUrl: string;
  caption: string;
  vehicleModel?: string; // Model kendaraan terkait
  isStockDemo: boolean;
}

export interface BookingFormData {
  customerName: string;
  selectedVehicle: string;
  startDate: string;
  duration: string;
  pickupLocation: string;
  serviceType: string;
  notes?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  whatsappNumber: string; // Format internasional tanpa +, contoh: 6281902433126
  displayPhone: string;
  url?: string;
  email?: string;
  address?: string;
  city?: string;
  operatingHours?: string; // Dikosongkan jika belum dikonfirmasi klien
  serviceAreaNotice: string;
  socials: SocialLinks;
  logoPath?: string; // Jalur file logo di folder public (opsional, contoh: '/logo.png')
  isConfigurationPlaceholder: boolean;
}
