import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink, FileSpreadsheet, Layers, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, hasConfiguredEmail } from '../data/siteConfig';
import { PRIMARY_PRODUCT, isDownloadAvailable } from '../data/products';
import { DerevnyaLogoMark, ResilientImage, VyaparDeskLogo } from '../components/BrandMarks';
import { VyaparDeskMockup } from '../components/VyaparDeskMockup';
import { usePageMeta } from '../components/usePageMeta';
import retailPosImg from '../assets/images/retail_pos_environment_1793347329143.jpg';
import mobileCompanionImg from '../assets/images/vyapardesk_mobile_companion_1793347329917.jpg';

export function HomePage() {
  usePageMeta(
    'Derevnya IT Solutions – Smart Software Solutions for Modern Businesses',
    'Official free software download portal by Derevnya IT Solutions. Explore and download VyaparDesk Retail Billing & Inventory software for Windows and Android.'
  );

  const anyDownloadLive = PRIMARY_PRODUCT.downloads.some(isDownloadAvailable);
  const whatsappUrl = getWhatsAppUrl();
  const emailConfigured = hasConfiguredEmail();

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs sm:text-sm font-medium text-orange-400 tracking-wide">
                {SITE_CONFIG.companyName} · {SITE_CONFIG.tagline}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                {SITE_CONFIG.heroHeading}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                {SITE_CONFIG.companyIntro}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Download Now</span>
                </Link>
                <Link
                  to="/software"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Explore Software</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

              <p className="text-xs text-slate-400 pt-1">
                100% Free Direct Downloads · Zero Subscriptions · Windows &amp; Android Support
              </p>
            </div>

            {/* Interactive VyaparDesk Software Dashboard Mockup */}
            <div className="lg:col-span-7">
              <VyaparDeskMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Flagship Software Spotlight */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold text-blue-700">Flagship Business Application</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
                Meet {PRIMARY_PRODUCT.name} — {PRIMARY_PRODUCT.subtitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {PRIMARY_PRODUCT.shortDescription}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/software/vyapardesk"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>View Product Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/screenshots"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Screenshots Gallery</span>
              </Link>
            </div>
          </div>

          {/* Asymmetric Bento Grid for Core Software Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRIMARY_PRODUCT.features.map((feature, index) => {
              const spanWide = index === 0 || index === 3;
              return (
                <div
                  key={feature.id}
                  className={`p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-5 ${
                    spanWide ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500">
                      <span className="font-mono font-semibold text-blue-700">{feature.number}.</span>{' '}
                      <span>{feature.category}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.summary}</p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-200/80 text-xs text-slate-600">
                    {feature.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx}>· {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Business Benefits & Real Retail Context */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
              <ResilientImage
                src={retailPosImg}
                alt="Retail checkout counter with desktop billing terminal and barcode scanner"
                fallbackTitle="Retail Checkout & POS Workflow"
                className="w-full h-full min-h-[280px] object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-semibold text-blue-700">Why Businesses Choose Derevnya IT</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
                Practical Retail Operations Without Subscription Lock-In
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Many small and medium retail businesses struggle with overcomplicated accounting
                suites or recurring monthly SaaS fees just to print clean bills and track shelf
                inventory. {PRIMARY_PRODUCT.name} focuses on speed, clarity, and local data
                ownership.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Zero Payment Barriers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Free direct downloads with no checkout forms, trial expirations, or mandatory
                    customer sign-ups.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                    <FileSpreadsheet className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Clean Local Data Control</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep item catalogs, tax invoices, and party balances stored locally with
                    straightforward CSV and backup exports.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                    <Layers className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Desktop &amp; Mobile Ecosystem</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for Windows 10/11 counter PCs (.exe) alongside Android smartphones and
                    tablets (.apk).
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                    <ExternalLink className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Transparent Release Portal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clear changelogs, hardware requirements, and honest release status for every
                    platform package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Releases & Direct Download Status */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-700">Latest Releases &amp; Packages</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Direct Download Overview
              </h2>
            </div>
            <Link
              to="/changelog"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Read Full Changelog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-900 text-white px-6 py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <VyaparDeskLogo className="w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {PRIMARY_PRODUCT.name} — {PRIMARY_PRODUCT.subtitle}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {PRIMARY_PRODUCT.poweredBy} · Version {PRIMARY_PRODUCT.currentVersion} ·{' '}
                    {PRIMARY_PRODUCT.licenseType}
                  </p>
                </div>
              </div>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>{anyDownloadLive ? 'Go to Direct Downloads' : 'Check Release Status'}</span>
              </Link>
            </div>

            <div className="divide-y divide-slate-200 bg-white">
              {PRIMARY_PRODUCT.downloads.map((dl) => {
                const live = isDownloadAvailable(dl);
                return (
                  <div
                    key={dl.id}
                    className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <p className="font-display text-base font-semibold text-slate-900">
                        {dl.platformLabel} ({dl.fileType})
                      </p>
                      <p className="text-xs text-slate-500 tabular-nums">
                        v{dl.version} · {dl.supportedOs} · Size: {dl.fileSize} · Released:{' '}
                        {dl.releaseDate}
                      </p>
                    </div>
                    <div className="shrink-0">
                      {live ? (
                        <a
                          href={dl.downloadUrl}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download {dl.fileExtension.toUpperCase()}</span>
                        </a>
                      ) : (
                        <Link
                          to="/downloads"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                        >
                          <span>Download Coming Soon</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Information & Contact Summary */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Company Branding Card */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DerevnyaLogoMark className="w-10 h-10 shrink-0" />
                  <div>
                    <h2 className="font-display text-xl font-bold">{SITE_CONFIG.companyName}</h2>
                    <p className="text-xs text-orange-400 font-medium">{SITE_CONFIG.tagline}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We engineer focused business applications for independent retailers, wholesalers,
                  and growing enterprises. Every product published on our official download portal
                  is built for day-to-day reliability, clean user interfaces, and straightforward
                  self-installation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>About Derevnya IT Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/system-requirements"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>System Requirements</span>
                </Link>
              </div>
            </div>

            {/* Mobile Companion & Direct Support Entry */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                <ResilientImage
                  src={mobileCompanionImg}
                  alt="Retail manager checking stock inventory on Android smartphone"
                  fallbackTitle="Mobile & Desktop Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Questions or Feedback? Reach Our Support Team
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Need guidance on system compatibility, barcode printer setup, or upcoming releases?
                  Connect via our Contact page.
                </p>
                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-700 shrink-0" />
                    <span className="truncate">
                      WhatsApp:{' '}
                      {whatsappUrl
                        ? `+${SITE_CONFIG.contact.whatsappNumberRaw}`
                        : SITE_CONFIG.contact.whatsappDisplayPlaceholder}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                    <span className="truncate">
                      Email:{' '}
                      {emailConfigured
                        ? SITE_CONFIG.contact.supportEmail
                        : SITE_CONFIG.contact.supportEmailPlaceholder}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Open Contact &amp; Support Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
