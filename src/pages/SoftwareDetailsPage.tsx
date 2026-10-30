import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';
import { PRIMARY_PRODUCT, getProductBySlug } from '../data/products';
import { ProductSubNav } from '../components/ProductSubNav';
import { VyaparDeskLogo } from '../components/BrandMarks';
import { DownloadCard } from '../components/DownloadCard';
import { ScreenshotPreviewRenderer } from '../components/VyaparDeskMockup';
import { usePageMeta } from '../components/usePageMeta';

export function SoftwareDetailsPage() {
  const { slug } = useParams<{ slug?: string }>();
  const product = getProductBySlug(slug) || PRIMARY_PRODUCT;

  usePageMeta(
    `${product.name} (${product.subtitle}) – Powered by Derevnya IT Solutions`,
    `Download ${product.name} – ${product.subtitle} (${product.poweredBy}). View features, screenshots, system requirements, changelog, and free direct downloads.`
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* 1. Product Hero & Powered By Derevnya IT Solutions Attribution */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-5 max-w-3xl">
              <div className="flex items-center gap-4">
                <VyaparDeskLogo className="w-16 h-16 shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-orange-400">
                    {product.poweredBy}
                  </p>
                  <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                    {product.name}
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-blue-300 mt-0.5">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Unboxed Clean Product Metadata */}
              <div className="text-xs text-slate-400 tabular-nums pt-1">
                <span>Version {product.currentVersion}</span>
                <span className="mx-2">·</span>
                <span>{product.supportedPlatformsSummary}</span>
                <span className="mx-2">·</span>
                <span className="text-white font-medium">{product.licenseType}</span>
                <span className="mx-2">·</span>
                <span>{product.poweredBy}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="#direct-download-section"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Direct Download Section</span>
              </a>
              <Link
                to="/video-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <PlayCircle className="w-4 h-4 shrink-0 text-blue-400" />
                <span>Watch Demo Walkthrough</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prominent Direct Download Cards */}
      <section id="direct-download-section" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700">{product.poweredBy}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Direct Download Packages — {product.name}
              </h2>
            </div>
            <Link
              to="/downloads"
              className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Full Download &amp; Verification Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {product.downloads.map((dl) => (
              <DownloadCard key={dl.id} productName={product.name} download={dl} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Real Feature List */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-blue-700">Core Capabilities</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Built for Daily Retail Billing &amp; Stock Accuracy
              </h2>
            </div>
            <Link
              to="/features"
              className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat) => (
              <div
                key={feat.id}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-3"
              >
                <p className="text-xs text-slate-500">
                  <span className="font-mono font-semibold text-blue-700">{feat.number}.</span>{' '}
                  {feat.category}
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.summary}</p>
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {feat.highlights.map((hl, i) => (
                    <li key={i}>· {hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Software Screenshots Preview & Demo Video Placeholder */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700">Interface Previews</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Software Screenshots &amp; Demo Walkthrough
              </h2>
            </div>
            <Link
              to="/screenshots"
              className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Open Full Screenshots Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.screenshots.slice(0, 3).map((scr) => (
              <div
                key={scr.id}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col"
              >
                <div className="h-56">
                  <ScreenshotPreviewRenderer screenshot={scr} />
                </div>
                <div className="p-5 space-y-1.5">
                  <p className="text-xs text-blue-700 font-medium">{scr.category}</p>
                  <h3 className="font-display text-base font-bold text-slate-900">{scr.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{scr.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Demo Video Placeholder Block */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold text-orange-400">Product Video Demo</p>
              <h3 className="font-display text-xl font-bold">
                {product.demoVideoEmbedUrl || product.demoVideoFileUrl
                  ? `Watch the Official ${product.name} Video Demo`
                  : `Official ${product.name} Screen-Recorded Video Placeholder`}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {product.demoVideoEmbedUrl || product.demoVideoFileUrl
                  ? 'Explore our guided video demonstration covering POS billing, stock entries, and thermal printing.'
                  : 'No external video URL is configured yet in src/data/products.ts. Visit the Video Demo page to view the placeholder player and interactive 4-step workflow guide.'}
              </p>
            </div>
            <Link
              to="/video-demo"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Open Video Demo Page</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. System Requirements & Changelog Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Supported OS & System Requirements */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Supported Operating Systems &amp; Specs
              </h2>
              <Link
                to="/system-requirements"
                className="text-xs font-semibold text-blue-700 hover:underline whitespace-nowrap"
              >
                Full Hardware Matrix &rarr;
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-100">
              {product.systemRequirements.map((req) => (
                <div key={req.platform} className="pt-4 first:pt-0 space-y-2">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {req.platformName}
                  </h3>
                  <p className="text-xs text-slate-500">Supported OS: {req.supportedVersions}</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {req.specs.slice(0, 3).map((s, i) => (
                      <li key={i}>
                        <strong className="font-medium text-slate-800">{s.component}:</strong>{' '}
                        {s.minimum}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Changelog Summary */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Release Changelog
                </h2>
                <Link
                  to="/changelog"
                  className="text-xs font-semibold text-blue-700 hover:underline whitespace-nowrap"
                >
                  All Release Notes &rarr;
                </Link>
              </div>

              {product.changelog.map((rel) => (
                <div key={rel.version} className="space-y-3">
                  <p className="text-xs text-slate-500 tabular-nums">
                    <span className="font-mono font-semibold text-slate-900">v{rel.version}</span> ·{' '}
                    {rel.status} · {rel.releaseDate}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{rel.summary}</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {rel.changes.map((c, idx) => (
                      <li key={idx}>
                        <strong className="font-medium text-slate-800">{c.type}:</strong>{' '}
                        {c.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-500 pt-4 border-t border-slate-100">
              {product.poweredBy}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
