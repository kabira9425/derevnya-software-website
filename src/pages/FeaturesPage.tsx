import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { PRIMARY_PRODUCT, ProductFeature } from '../data/products';
import { ProductSubNav } from '../components/ProductSubNav';
import { usePageMeta } from '../components/usePageMeta';

const CATEGORIES: Array<'All' | ProductFeature['category']> = [
  'All',
  'Billing & POS',
  'Inventory Control',
  'Accounts & Reports',
  'Data & Reliability',
];

export function FeaturesPage() {
  usePageMeta(
    'VyaparDesk Features – Retail Billing, Barcode POS & Inventory Control',
    'Explore all capabilities of VyaparDesk by Derevnya IT Solutions: fast barcode POS billing, GST/thermal invoice printing, stock alerts, party ledgers, and offline backups.'
  );

  const [selectedCategory, setSelectedCategory] = useState<'All' | ProductFeature['category']>('All');

  const visibleFeatures =
    selectedCategory === 'All'
      ? PRIMARY_PRODUCT.features
      : PRIMARY_PRODUCT.features.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              {PRIMARY_PRODUCT.name} Capabilities · {PRIMARY_PRODUCT.poweredBy}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Complete Retail Billing &amp; Inventory Feature Suite
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Every module in {PRIMARY_PRODUCT.name} is designed around real counter operations—fast
              item entry, accurate stock tracking, clear supplier/customer balances, and zero
              recurring subscription charges.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter + Feature Modules */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Interactive Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl w-fit">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleFeatures.map((feature) => (
              <article
                key={feature.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <p className="text-xs text-slate-500">
                    <span className="font-mono font-bold text-blue-700">{feature.number}.</span>{' '}
                    <span>{feature.category}</span>
                  </p>
                  <h2 className="font-display text-xl font-bold text-slate-900">{feature.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-semibold text-slate-800">Included Capabilities</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {feature.highlights.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Industries & Store Types Supported */}
          <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold text-orange-400">Built for Diverse Retail Counters</p>
              <h2 className="font-display text-2xl font-bold">
                Suitable for Supermarkets, Hardware, Electronics, Apparel &amp; General Stores
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Flexible tax configuration and multi-unit inventory support allow {PRIMARY_PRODUCT.name}{' '}
                to adapt smoothly across retail counters and wholesale distribution desks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Direct Downloads</span>
              </Link>
              <Link
                to="/screenshots"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>View Screenshots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
