/**
 * CENTRALIZED PRODUCT & DIRECT DOWNLOAD CONFIGURATION
 * ---------------------------------------------------------------------------
 * Owner Guide:
 * 1. To activate a real Windows (.exe) or Android (.apk) download button for
 *    VyaparDesk, paste the direct file URL into `downloadUrl` under `downloads`.
 *    - Leave `downloadUrl: ""` until your real installer file is hosted (e.g., on
 *      GitHub Releases or in `/public/downloads/`). When empty, the UI automatically
 *      and honestly displays "Download Coming Soon" instead of a broken/fake link.
 * 2. To add screenshots, place `.png`/`.jpg` files in `/public/screenshots/` and
 *    set `imageUrl: "./screenshots/your-screen.png"` in the `screenshots` array.
 * 3. To add a demo video, set `demoVideoEmbedUrl` (e.g., YouTube embed URL) or
 *    `demoVideoFileUrl` (direct `.mp4` path).
 * 4. To add a new software product in the future, append a new `SoftwareProduct`
 *    object to the `PRODUCTS` array below—all catalog, product detail, download,
 *    system requirement, and changelog pages update automatically!
 */

export type PlatformKey = 'windows' | 'android';

export interface PlatformDownload {
  id: string;
  platform: PlatformKey;
  platformLabel: string;
  fileType: string;
  fileExtension: '.exe' | '.apk';
  architecture: string;
  supportedOs: string;
  version: string;
  releaseDate: string;
  fileSize: string;
  /**
   * Direct URL to the real installer binary.
   * Keep as "" when no binary is uploaded yet — UI will show "Download Coming Soon".
   * Example when ready:
   * "https://github.com/your-username/your-repo/releases/download/v1.0.0/VyaparDesk-Setup-1.0.0.exe"
   * or "./downloads/VyaparDesk-Setup-1.0.0.exe"
   */
  downloadUrl: string;
  /** Optional SHA-256 checksum string once binary is built */
  sha256Checksum?: string;
  installSteps: string[];
}

export interface ProductFeature {
  id: string;
  number: string;
  category: 'Billing & POS' | 'Inventory Control' | 'Accounts & Reports' | 'Data & Reliability';
  title: string;
  summary: string;
  highlights: string[];
}

export interface ProductScreenshot {
  id: string;
  title: string;
  category: 'Billing & POS' | 'Inventory Control' | 'Reports & Ledger' | 'Mobile View';
  caption: string;
  /**
   * Set to your real screenshot path (e.g. "./screenshots/billing-counter.png") when available.
   * When "", the gallery renders an interactive UI layout preview clearly marked as a preview placeholder.
   */
  imageUrl: string;
  previewType: 'pos-billing' | 'inventory-grid' | 'sales-reports' | 'party-ledger' | 'barcode-labels' | 'mobile-stock';
}

export interface SystemRequirementRow {
  component: string;
  minimum: string;
  recommended: string;
}

export interface PlatformRequirements {
  platform: PlatformKey;
  platformName: string;
  supportedVersions: string;
  specs: SystemRequirementRow[];
  compatiblePeripherals: string[];
}

export interface ChangelogRelease {
  version: string;
  releaseDate: string;
  status: 'Upcoming Initial Release' | 'Stable Release' | 'Maintenance Update';
  summary: string;
  changes: {
    type: 'Feature' | 'Architecture' | 'Platform';
    description: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: 'Free Licensing' | 'Downloads & Setup' | 'Features & Hardware' | 'Data & Support';
  question: string;
  answer: string;
}

export interface SoftwareProduct {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  poweredBy: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  currentVersion: string;
  releaseStatusLabel: string;
  licenseType: '100% Free Download';
  supportedPlatformsSummary: string;
  /** Optional YouTube/Vimeo embed URL or direct MP4 URL. Leave "" to show the honest Demo Video Placeholder. */
  demoVideoEmbedUrl: string;
  demoVideoFileUrl: string;
  demoVideoDurationEstimate: string;
  downloads: PlatformDownload[];
  features: ProductFeature[];
  screenshots: ProductScreenshot[];
  systemRequirements: PlatformRequirements[];
  changelog: ChangelogRelease[];
}

export const PRODUCTS: SoftwareProduct[] = [
  {
    id: 'prod-vyapardesk',
    slug: 'vyapardesk',
    name: 'VyaparDesk',
    subtitle: 'Retail Billing & Inventory',
    category: 'Retail POS, Billing & Stock Management',
    poweredBy: 'Powered by Derevnya IT Solutions',
    shortDescription:
      'Fast, practical retail counter billing, barcode stock tracking, supplier ledger management, and tax-ready invoice generation built for shops, supermarkets, pharmacies, hardware stores, and wholesale counters.',
    fullDescription:
      'VyaparDesk is the flagship Retail Billing & Inventory solution developed by Derevnya IT Solutions. Designed around real shop-floor workflows, it streamlines counter invoicing, item-level and batch-level stock tracking, low-inventory alerts, customer/supplier account ledgers, and clean thermal or A4 invoice printing—completely free to download without subscriptions or checkout lock-ins.',
    highlights: [
      'Keyboard-first rapid POS billing with USB/Bluetooth barcode scanner support',
      'Real-time stock deduction, reorder threshold alerts, and unit conversions',
      'Configurable GST / non-GST retail & wholesale invoice layouts (Thermal 58mm/80mm & A4)',
      'Customer & supplier balance ledger tracking with exportable statements',
      'Offline-ready local database design for uninterrupted billing during internet outages',
    ],
    currentVersion: '1.0.0',
    releaseStatusLabel: 'v1.0.0 · Installer Upload Pending',
    licenseType: '100% Free Download',
    supportedPlatformsSummary: 'Windows 10/11 (64-bit) · Android 9.0+',
    // Paste your official YouTube embed URL (e.g. "https://www.youtube.com/embed/XXXX") or MP4 file URL when recorded:
    demoVideoEmbedUrl: '',
    demoVideoFileUrl: '',
    demoVideoDurationEstimate: '4-part guided workflow preview available below',
    downloads: [
      {
        id: 'vyapardesk-win-exe',
        platform: 'windows',
        platformLabel: 'Windows Desktop Edition',
        fileType: 'Windows Installer (.exe)',
        fileExtension: '.exe',
        architecture: '64-bit (x64)',
        supportedOs: 'Windows 10 (1903+) & Windows 11',
        version: '1.0.0',
        releaseDate: 'Pending Official Build Upload',
        fileSize: 'Pending Installer Upload',
        // OWNER: Paste your real Windows .exe URL below when ready (keep "" until real file exists):
        downloadUrl: '',
        sha256Checksum: '',
        installSteps: [
          'Download the official VyaparDesk Windows Installer (.exe) once published on this portal.',
          'Double-click the downloaded .exe installer file on your Windows 10 or Windows 11 PC.',
          'If Windows SmartScreen prompts during first run, verify the file publisher/checksum and select Run.',
          'Choose your preferred installation folder and launch VyaparDesk directly from your Desktop shortcut—no account login required.',
        ],
      },
      {
        id: 'vyapardesk-android-apk',
        platform: 'android',
        platformLabel: 'version: '1.0.0.2',
releaseDate: '30 Oct 2026',
fileSize: '10.4 MB',
downloadUrl: 'https://github.com/kabira9425/derevnya-software-website/releases/download/v1.0.0/VyaparDesk-Mobile-Offline-1.0.0.2.apk',,
        fileExtension: '.apk',
        architecture: 'ARM64 / Universal APK',
        supportedOs: 'Android 9.0 (Pie) to Android 15',
        version: '1.0.0',
        releaseDate: 'Pending Official Build Upload',
        fileSize: 'Pending APK Upload',
        // OWNER: Paste your real Android .apk URL below when ready (keep "" until real file exists):
        downloadUrl: '',
        sha256Checksum: '',
        installSteps: [
          'Download the official VyaparDesk .apk package directly to your Android smartphone or tablet once released.',
          'Open the downloaded .apk file from your browser Downloads or File Manager.',
          'If prompted by Android security settings, allow installation from your browser for this official package.',
          'Open VyaparDesk, configure your store name and currency/tax preferences, and begin managing inventory immediately.',
        ],
      },
    ],
    features: [
      {
        id: 'feat-pos-billing',
        number: '01',
        category: 'Billing & POS',
        title: 'Rapid Counter Billing & Barcode Checkout',
        summary:
          'Generate accurate retail and wholesale bills in seconds using keyboard shortcuts or standard plug-and-play barcode scanners.',
        highlights: [
          'Instant item lookup by SKU, item name, HSN code, or scanned barcode',
          'Support for item-wise discounts, flat bill discounts, and multiple quantity units',
          'Hold and resume multiple counter bills simultaneously during peak store hours',
        ],
      },
      {
        id: 'feat-tax-invoicing',
        number: '02',
        category: 'Billing & POS',
        title: 'Thermal Receipt & A4 Tax Invoice Printing',
        summary:
          'Print crisp, professional bills formatted for 58mm/80mm POS thermal printers as well as standard A4/A5 laser and inkjet printers.',
        highlights: [
          'Configurable GST (CGST/SGST/IGST) or simple non-tax retail receipt modes',
          'Custom store header with business name, GSTIN/registration details, and terms',
          'Export clean PDF invoices directly to local folders for sharing with customers',
        ],
      },
      {
        id: 'feat-inventory-control',
        number: '03',
        category: 'Inventory Control',
        title: 'Live Stock Tracking & Low-Stock Alerts',
        summary:
          'Automatically update item quantities on every sale, purchase entry, or return so shelf counts stay accurate without manual spreadsheets.',
        highlights: [
          'Configurable minimum stock thresholds with visual reorder indicators',
          'Category, brand, rack location, and batch/expiry organization',
          'Primary-to-secondary unit conversion (e.g., Box to Pieces, Kilogram to Grams)',
        ],
      },
      {
        id: 'feat-purchase-suppliers',
        number: '04',
        category: 'Inventory Control',
        title: 'Purchase Inward & Supplier Management',
        summary:
          'Record supplier purchase bills, update inward landed cost prices, and monitor pending supplier payables in one structured ledger.',
        highlights: [
          'Automatic stock increment upon saving verified supplier purchase entries',
          'Purchase return (debit note) and sales return (credit note) adjustments',
          'Item-wise purchase price history to spot supplier cost changes quickly',
        ],
      },
      {
        id: 'feat-party-ledger',
        number: '05',
        category: 'Accounts & Reports',
        title: 'Customer & Supplier Account Ledgers',
        summary:
          'Maintain clear receivables and payables balances for regular retail and wholesale customers with date-range account statements.',
        highlights: [
          'Complete transaction history per customer or distributor',
          'Daily cash-in / cash-out register and expense tracking',
          'Itemized sales, profit margin, and tax summary reports exportable to CSV',
        ],
      },
      {
        id: 'feat-offline-backup',
        number: '06',
        category: 'Data & Reliability',
        title: 'Offline-First Operation & Local Backups',
        summary:
          'Engineered to run smoothly at your billing counter even without continuous internet connectivity, keeping business data under your control.',
        highlights: [
          'Zero cloud latency during peak checkout hours',
          'One-click local database backup and restore to external USB or local drive',
          'CSV import templates for migrating existing product catalogs effortlessly',
        ],
      },
    ],
    screenshots: [
      {
        id: 'scr-pos-billing',
        title: 'POS Counter Billing Workspace',
        category: 'Billing & POS',
        caption:
          'UI PreviewPlaceholder — Keyboard-driven billing grid with barcode scan input, tax summary, and instant receipt preview. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'pos-billing',
      },
      {
        id: 'scr-inventory-master',
        title: 'Stock & Inventory Master Directory',
        category: 'Inventory Control',
        caption:
          'UI Preview Placeholder — Real-time stock register showing SKU codes, available units, reorder alerts, and selling rates. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'inventory-grid',
      },
      {
        id: 'scr-sales-analytics',
        title: 'Daily Sales & Tax Summary Reports',
        category: 'Reports & Ledger',
        caption:
          'UI Preview Placeholder — Structured daily register with invoice totals, tax breakdown, and CSV/PDF export actions. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'sales-reports',
      },
      {
        id: 'scr-party-ledger',
        title: 'Customer & Supplier Balance Ledger',
        category: 'Reports & Ledger',
        caption:
          'UI Preview Placeholder — Party-wise receivable and payable tracking with clear chronological statement history. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'party-ledger',
      },
      {
        id: 'scr-barcode-utility',
        title: 'SKU & Shelf Label Preparation',
        category: 'Inventory Control',
        caption:
          'UI Preview Placeholder — Clean item barcode and MRP shelf tag setup for standard retail label printers. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'barcode-labels',
      },
      {
        id: 'scr-android-companion',
        title: 'Android Mobile Stock & Quick Bill View',
        category: 'Mobile View',
        caption:
          'UI Preview Placeholder — Compact mobile layout for checking shelf stock, prices, and daily summaries on Android devices. Replaceable via imageUrl in src/data/products.ts.',
        imageUrl: '',
        previewType: 'mobile-stock',
      },
    ],
    systemRequirements: [
      {
        platform: 'windows',
        platformName: 'Windows Desktop (.exe)',
        supportedVersions: 'Windows 10 (64-bit, v1903 or newer) & Windows 11 (64-bit)',
        specs: [
          {
            component: 'Processor (CPU)',
            minimum: 'Dual-Core 1.8 GHz (Intel Core i3 / AMD Ryzen 3 or equivalent)',
            recommended: 'Quad-Core 2.4 GHz+ (Intel Core i5 / AMD Ryzen 5 or newer)',
          },
          {
            component: 'Memory (RAM)',
            minimum: '4 GB RAM',
            recommended: '8 GB RAM or higher for large multi-thousand SKU catalogs',
          },
          {
            component: 'Disk Space',
            minimum: '500 MB free storage for application & local database',
            recommended: '2 GB+ SSD storage for fast search indexing & local backups',
          },
          {
            component: 'Display Resolution',
            minimum: '1366 × 768 HD display',
            recommended: '1920 × 1080 Full HD monitor',
          },
          {
            component: 'Network',
            minimum: 'Offline-capable (internet only needed to download installer/updates)',
            recommended: 'Optional broadband for downloading updates or sharing exported PDFs',
          },
        ],
        compatiblePeripherals: [
          'Standard 1D / 2D USB & Wireless HID Barcode Scanners',
          '58mm & 80mm ESC/POS Thermal Receipt Printers (USB / LAN)',
          'Standard Windows-compatible A4 / A5 Laser & Inkjet Printers',
        ],
      },
      {
        platform: 'android',
        platformName: 'Android Mobile (.apk)',
        supportedVersions: 'Android 9.0 (Pie) through Android 15',
        specs: [
          {
            component: 'Processor',
            minimum: '64-bit ARMv8 Quad-Core 1.8 GHz',
            recommended: 'Octa-Core 2.0 GHz+ modern Android chipset',
          },
          {
            component: 'Memory (RAM)',
            minimum: '3 GB RAM',
            recommended: '4 GB+ RAM',
          },
          {
            component: 'Internal Storage',
            minimum: '250 MB free internal storage',
            recommended: '1 GB+ free storage for invoice PDFs and backups',
          },
          {
            component: 'Camera / Input',
            minimum: 'Touchscreen (720p+); optional rear autofocus camera for barcode scan',
            recommended: '1080p display + autofocus camera or Bluetooth barcode scanner',
          },
        ],
        compatiblePeripherals: [
          'Bluetooth 58mm / 80mm Portable Thermal Printers',
          'Bluetooth HID Pocket Barcode Scanners',
          'Built-in Android Camera Barcode Scanning',
        ],
      },
    ],
    changelog: [
      {
        version: '1.0.0',
        releaseDate: 'Upcoming Public Build (Installer Upload Pending)',
        status: 'Upcoming Initial Release',
        summary:
          'Foundational architecture of VyaparDesk Retail Billing & Inventory for Windows Desktop (.exe) and Android (.apk), engineered by Derevnya IT Solutions.',
        changes: [
          {
            type: 'Feature',
            description:
              'POS counter billing interface with keyboard navigation, barcode lookup, item-wise discounts, and configurable tax calculation.',
          },
          {
            type: 'Feature',
            description:
              'Complete Inventory Master with SKU management, unit conversions, purchase inward entries, and low-stock reorder indicators.',
          },
          {
            type: 'Feature',
            description:
              'Customer and supplier account ledgers alongside exportable CSV/PDF sales and stock reports.',
          },
          {
            type: 'Platform',
            description:
              'Prepared direct standalone distribution structure for Windows 10/11 (.exe) and Android 9+ (.apk) with zero payment or login requirements.',
          },
        ],
      },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-free-forever',
    category: 'Free Licensing',
    question: 'Is VyaparDesk genuinely free to download and use?',
    answer:
      'Yes. This website is an official 100% free software download portal operated by Derevnya IT Solutions. There are no shopping carts, no payment gateways, no subscription plans, and no hidden checkout prompts.',
  },
  {
    id: 'faq-account-login',
    category: 'Free Licensing',
    question: 'Do I need to register an account or sign in before downloading?',
    answer:
      'No mandatory customer registration or login is required. When official installer files (.exe or .apk) are published, you can download them directly with a single click.',
  },
  {
    id: 'faq-coming-soon',
    category: 'Downloads & Setup',
    question: 'Why does a download button currently say "Download Coming Soon"?',
    answer:
      'Derevnya IT Solutions never publishes fake or placeholder installer links. Until a verified Windows (.exe) or Android (.apk) binary URL is configured in the product release data, the portal transparently displays "Download Coming Soon".',
  },
  {
    id: 'faq-offline-mode',
    category: 'Features & Hardware',
    question: 'Does VyaparDesk require an active internet connection for daily billing?',
    answer:
      'VyaparDesk is designed with an offline-first architecture so retail counters can continue generating invoices, scanning barcodes, and tracking stock smoothly without relying on constant internet connectivity.',
  },
  {
    id: 'faq-printers-scanners',
    category: 'Features & Hardware',
    question: 'Which barcode scanners and receipt printers are supported?',
    answer:
      'On Windows, VyaparDesk works with standard plug-and-play USB/wireless HID barcode scanners, 58mm/80mm thermal POS printers, and standard A4 laser or inkjet printers. On Android, Bluetooth thermal printers and camera/Bluetooth barcode scanning are supported.',
  },
  {
    id: 'faq-windows-android',
    category: 'Downloads & Setup',
    question: 'Which operating systems are supported by VyaparDesk?',
    answer:
      'VyaparDesk targets Windows 10 and Windows 11 (64-bit) via a standalone .exe installer, and Android 9.0 (Pie) or newer smartphones and tablets via a direct .apk package.',
  },
  {
    id: 'faq-backups',
    category: 'Data & Support',
    question: 'Where is my store billing and inventory data stored?',
    answer:
      'Your business catalog, invoices, and party ledgers remain stored locally on your own device, with local export and backup utilities so you can save copies to an external USB drive or backup folder at any time.',
  },
  {
    id: 'faq-future-products',
    category: 'Data & Support',
    question: 'Will Derevnya IT Solutions release additional free business software?',
    answer:
      'Yes. VyaparDesk is our first flagship release. Our portal is built on a modular multi-product catalog so upcoming business utilities from Derevnya IT Solutions will appear under Our Software and Direct Downloads with their own dedicated installers.',
  },
];

/**
 * Helper that strictly checks whether a real, non-empty download URL has been configured.
 * Prevents fake "#" or placeholder links from ever being treated as active downloads.
 */
export function isDownloadAvailable(download: PlatformDownload): boolean {
  const url = download.downloadUrl.trim();
  if (!url || url === '#' || url.toLowerCase().includes('placeholder')) {
    return false;
  }
  return (
    url.startsWith('https://') ||
    url.startsWith('http://') ||
    url.startsWith('./') ||
    url.startsWith('/')
  );
}

export function getProductBySlug(slug?: string): SoftwareProduct | undefined {
  if (!slug) return PRODUCTS[0];
  return PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export const PRIMARY_PRODUCT: SoftwareProduct = PRODUCTS[0];
