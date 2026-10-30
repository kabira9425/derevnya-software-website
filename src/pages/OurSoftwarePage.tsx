import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FolderPlus, Search } from 'lucide-react';
import { PRODUCTS, PlatformKey, isDownloadAvailable } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { VyaparDeskLogo } from '../components/BrandMarks';
import { usePageMeta } from '../components/usePageMeta';

export function OurSoftwarePage() {
  usePageMeta(
    'Our Software – Free Business Applications by Derevnya IT Solutions',
    'Browse free business software developed by Derevnya IT Solutions, featuring VyaparDesk Retail Billing & Inventory for Windows and Android.'
  );

  const [platformFilter, setPlatformFilter] = useState<'all' | PlatformKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesPlatform =
      platformFilter === 'all' ||
      product.downloads.some((dl) => dl.platform === platformFilter);

    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.subtitle.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    return matchesPlatform && matchesQuery;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400 tracking-wide">
              Official Software Directory · {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Our Free Business Software
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Every application listed below is developed by {SITE_CONFIG.companyName} and offered
              as a 100% free direct download with zero subscriptions or checkout steps.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Interactive Platform Segmented Control */}
            <div
              role="group"
              aria-label="Filter software by operating system"
              className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start"
            >
              <button
                type="button"
                onClick={() => setPlatformFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  platformFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Platforms ({PRODUCTS.length})
              </button>
              <button
                type="button"
                onClick={() => setPlatformFilter('windows')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  platformFilter === 'windows'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Windows (.exe)
              </button>
              <button
                type="button"
                onClick={() => setPlatformFilter('android')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  platformFilter === 'android'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Android (.apk)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search software by name or feature..."
                aria-label="Search software catalog"
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Product Cards */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-3">
              <p className="font-display text-lg font-bold text-slate-900">
                No matching software products found
              </p>
              <p className="text-sm text-slate-600">
                Try clearing your search filter to view our available applications.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPlatformFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => {
                const anyLive = product.downloads.some(isDownloadAvailable);
                return (
                  <article
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 lg:p-10 space-y-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex items-start gap-4 sm:gap-5">
                        <VyaparDeskLogo className="w-14 h-14 shrink-0" />
                        <div className="space-y-1.5">
                          <p className="text-xs text-slate-500">
                            <span>{product.category}</span>
                            <span className="mx-2">·</span>
                            <span className="font-mono tabular-nums">v{product.currentVersion}</span>
                            <span className="mx-2">·</span>
                            <span className="text-blue-700 font-medium">{product.licenseType}</span>
                          </p>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                            {product.name} — {product.subtitle}
                          </h2>
                          <p className="text-xs font-medium text-slate-500">{product.poweredBy}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <Link
                          to={`/software/${product.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                        >
                          <span>Software Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          to="/downloads"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
                        >
                          <Download className="w-4 h-4" />
                          <span>{anyLive ? 'Direct Download' : 'Download Status'}</span>
                        </Link>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                      {product.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-sm text-slate-700">
                      {product.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">·</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                      <span>Supported Platforms: {product.supportedPlatformsSummary}</span>
                      <div className="flex flex-wrap items-center gap-4 font-medium text-blue-700">
                        <Link to="/features" className="hover:underline">
                          Features
                        </Link>
                        <Link to="/screenshots" className="hover:underline">
                          Screenshots
                        </Link>
                        <Link to="/video-demo" className="hover:underline">
                          Video Demo
                        </Link>
                        <Link to="/system-requirements" className="hover:underline">
                          System Requirements
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Future Products Extensibility Notice */}
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <FolderPlus className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-display text-base font-bold text-slate-900">
                  Built for Upcoming Derevnya IT Releases
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Additional free business software titles can be added at any time in{' '}
                  <code className="font-mono text-slate-800">src/data/products.ts</code>—each
                  automatically receives its own product page, system requirements, and direct
                  download cards.
                </p>
              </div>
            </div>
            <Link
              to="/changelog"
              className="text-xs font-semibold text-blue-700 hover:underline whitespace-nowrap shrink-0"
            >
              View Release Roadmap &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
