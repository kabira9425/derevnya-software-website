/**
 * CENTRALIZED COMPANY & CONTACT CONFIGURATION
 * ---------------------------------------------------------------------------
 * Edit this file to update company branding, contact placeholders, and social
 * or support channels across the entire Derevnya IT Solutions website.
 *
 * IMPORTANT: Phone, WhatsApp, Email, and Office Location are intentionally set
 * as empty strings ("") with clear placeholder labels so no contact information
 * is invented. Once you add your real details below, active WhatsApp & Email
 * links will automatically turn on across the website.
 */

export interface ContactChannelConfig {
  /** Enter digits with country code (no + or spaces) to enable direct WhatsApp chat, e.g. "9198XXXXXXXX" */
  whatsappNumberRaw: string;
  /** Human-readable WhatsApp display text when configured, or placeholder label when empty */
  whatsappDisplayPlaceholder: string;
  /** Default pre-filled greeting message for WhatsApp inquiries */
  whatsappDefaultMessage: string;

  /** Enter your official support email to enable direct mailto links, e.g. "support@yourdomain.com" */
  supportEmail: string;
  supportEmailPlaceholder: string;

  /** Enter your official support phone number if applicable, e.g. "+91 XXXXX XXXXX" */
  phoneNumber: string;
  phonePlaceholder: string;

  /** Enter your registered office city/address when ready */
  officeLocation: string;
  officeLocationPlaceholder: string;

  /** Support working hours note */
  supportHoursPlaceholder: string;
}

export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  attributionLabel: string;
  heroHeading: string;
  companyIntro: string;
  freeSoftwarePromise: string;
  copyrightYear: number;
  contact: ContactChannelConfig;
}

export const SITE_CONFIG: SiteConfig = {
  companyName: 'Derevnya IT Solutions',
  shortName: 'Derevnya IT',
  tagline: 'Smart Software. Smarter Business.',
  attributionLabel: 'Powered by Derevnya IT Solutions',
  heroHeading: 'Smart Software Solutions for Modern Businesses',
  companyIntro:
    'Derevnya IT Solutions builds dependable, practical desktop and mobile business applications engineered to simplify daily retail operations, billing accuracy, and stock control—completely free to download with zero payment barriers.',
  freeSoftwarePromise:
    '100% Free Software Distribution — No subscriptions, no payment gateways, no hidden checkout, and no mandatory account registration.',
  copyrightYear: new Date().getFullYear(),
  contact: {
    // Replace "" with your real WhatsApp number (digits only, e.g. "919000000000") when ready:
    whatsappNumberRaw: '',
    whatsappDisplayPlaceholder: '[Editable Placeholder — Add WhatsApp Number in src/data/siteConfig.ts]',
    whatsappDefaultMessage:
      'Hello Derevnya IT Solutions team, I have a question regarding VyaparDesk Retail Billing & Inventory software.',

    // Replace "" with your real support email (e.g. "contact@derevnyait.example") when ready:
    supportEmail: '',
    supportEmailPlaceholder: '[Editable Placeholder — Add Official Email in src/data/siteConfig.ts]',

    // Replace "" with your real support phone number when ready:
    phoneNumber: '',
    phonePlaceholder: '[Editable Placeholder — Add Support Phone in src/data/siteConfig.ts]',

    // Replace "" with your real business address when ready:
    officeLocation: '',
    officeLocationPlaceholder: '[Editable Placeholder — Add Office Address in src/data/siteConfig.ts]',

    supportHoursPlaceholder: 'Monday – Saturday · Business Support Hours (Editable in siteConfig.ts)',
  },
};

export function hasConfiguredWhatsApp(): boolean {
  return /^\d{8,15}$/.test(SITE_CONFIG.contact.whatsappNumberRaw.trim());
}

export function getWhatsAppUrl(): string | null {
  if (!hasConfiguredWhatsApp()) return null;
  const digits = SITE_CONFIG.contact.whatsappNumberRaw.trim();
  const text = encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function hasConfiguredEmail(): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SITE_CONFIG.contact.supportEmail.trim());
}
