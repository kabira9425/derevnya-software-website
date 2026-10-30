import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileCheck2, HelpCircle, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { ProductSubNav } from '../components/ProductSubNav';
import { DownloadCard } from '../components/DownloadCard';
import { VyaparDeskLogo } from '../components/BrandMarks';
import { usePageMeta } from '../components/usePageMeta';

export function DirectDownloadsPage() {
  usePageMeta(
    'Direct Downloads – Free Software by Derevnya IT Solutions',
    'Official free direct download center for VyaparDesk Retail Billing & Inventory (Windows .exe and Android .apk) by Derevnya IT Solutions.'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              100% Free Software Distribution · {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Direct Software Downloads
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Download standalone installers directly from {SITE_CONFIG.companyName}. No payment
              forms, no subscriptions, and no mandatory account registration.
            </p>
          </div>
        </div>
      </section>

      {/* Product Download Sections */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3.5">
                  <VyaparDeskLogo className="w-11 h-11 shrink-0" />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      {product.name} — {product.subtitle}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {product.poweredBy} · Current Release Target: v{product.currentVersion} ·{' '}
                      {product.licenseType}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/software/${product.slug}`}
                  className="text-xs font-semibold text-blue-700 hover:underline whitespace-nowrap"
                >
                  View Full Product Details &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {product.downloads.map((dl) => (
                  <DownloadCard
                    key={dl.id}
                    productName={product.name}
                    download={dl}
                    showInstallSteps={true}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Clear Download & Installation Instructions Section */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold text-blue-700">Download &amp; Setup Guide</p>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Before &amp; After Downloading Official Installers
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Follow these straightforward steps whenever downloading and installing{' '}
                {SITE_CONFIG.companyName} software packages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>1. Check System Compatibility</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Confirm your PC runs 64-bit Windows 10/11 for the <code className="font-mono">.exe</code>{' '}
                  edition, or Android 9.0+ for the <code className="font-mono">.apk</code> package.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                  <FileCheck2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>2. Verify Official Release Info</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Review the version number, file size, and optional SHA-256 checksum displayed on
                  each download card above before launching the installer.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>3. Offline Self-Installation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Run the installer directly on your device. No credit card, payment gateway, or
                  mandatory customer login screen will ever interrupt setup.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span>
                  Have questions about Windows SmartScreen prompts, Android APK installation, or
                  thermal printers?
                </span>
              </div>
              <div className="flex items-center gap-4 font-semibold text-blue-700 shrink-0">
                <Link to="/system-requirements" className="hover:underline">
                  System Requirements
                </Link>
                <Link to="/faq" className="hover:underline">
                  Read FAQ
                </Link>
                <Link to="/contact" className="hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
