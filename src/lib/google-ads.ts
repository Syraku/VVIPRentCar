const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-18526860834/89-YCM_i2q0dEKLspYJF';

export function trackWhatsAppConversion() {
  if (typeof window === 'undefined') return;

  const gtag = (window as Window & {
    gtag?: (...args: unknown[]) => void;
  }).gtag;

  gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
  });
}
