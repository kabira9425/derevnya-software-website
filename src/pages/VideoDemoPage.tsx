import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Film, PlayCircle } from 'lucide-react';
import { PRIMARY_PRODUCT } from '../data/products';
import { ProductSubNav } from '../components/ProductSubNav';
import { usePageMeta } from '../components/usePageMeta';

const WORKFLOW_STEPS = [
  {
    step: 'Step 01',
    title: 'Configure Store Profile & Import Catalog',
    detail:
      'Set your store name, address, optional GSTIN/tax settings, and add products manually or via a clean CSV spreadsheet import.',
  },
  {
    step: 'Step 02',
    title: 'Scan Barcodes or Search Items at Counter',
    detail:
      'Use a standard USB/Bluetooth barcode scanner or quick keyboard search to add items, apply discounts, and verify tax totals instantly.',
  },
  {
    step: 'Step 03',
    title: 'Print Thermal Receipt or A4 Tax Invoice',
    detail:
      'Generate crisp 58mm/80mm POS thermal receipts or full-page A4 invoices and save local PDF copies with a single shortcut.',
  },
  {
    step: 'Step 04',
    title: 'Track Live Stock & Export Daily Registers',
    detail:
      'Monitor automatic stock deductions, low-stock reorder flags, customer/supplier balances, and daily sales reports offline.',
  },
];

export function VideoDemoPage() {
  usePageMeta(
    'Video Demo – VyaparDesk Retail Billing & Inventory',
    'Watch the product demo walkthrough for VyaparDesk Retail Billing & Inventory by Derevnya IT Solutions.'
  );

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const hasEmbedVideo = PRIMARY_PRODUCT.demoVideoEmbedUrl.trim() !== '';
  const hasDirectMp4 = PRIMARY_PRODUCT.demoVideoFileUrl.trim() !== '';

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Product Walkthrough · {PRIMARY_PRODUCT.poweredBy}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              {PRIMARY_PRODUCT.name} Video Demo
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              See how {PRIMARY_PRODUCT.name} streamlines retail counter billing, barcode lookup, and
              stock inventory management.
            </p>
          </div>
        </div>
      </section>

      {/* Video Player or Honest Video Placeholder */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            {hasEmbedVideo ? (
              <div className="aspect-video w-full">
                <iframe
                  src={PRIMARY_PRODUCT.demoVideoEmbedUrl}
                  title={`${PRIMARY_PRODUCT.name} Official Video Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : hasDirectMp4 ? (
              <div className="aspect-video w-full bg-black">
                <video
                  src={PRIMARY_PRODUCT.demoVideoFileUrl}
                  controls
                  className="w-full h-full"
                />
              </div>
            ) : (
              /* Honest Demo Video Placeholder */
              <div className="aspect-video w-full flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-orange-400 mb-5">
                  <Film className="w-8 h-8" />
                </div>
                <p className="text-xs font-semibold text-orange-400 mb-2">
                  Demo Video Placeholder · {PRIMARY_PRODUCT.poweredBy}
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white max-w-xl text-balance">
                  Official Screen-Recorded Video Walkthrough Coming Soon
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-3 leading-relaxed">
                  No video file or embed link has been added yet. Once recorded, paste your YouTube
                  embed URL or MP4 path into{' '}
                  <code className="font-mono text-blue-300">demoVideoEmbedUrl</code> inside{' '}
                  <code className="font-mono text-blue-300">src/data/products.ts</code> to play it
                  directly in this frame.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Try Interactive Dashboard Preview on Home</span>
                  </Link>
                  <Link
                    to="/downloads"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    <span>Check Direct Downloads</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Interactive 4-Step Workflow Walkthrough */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-700">Interactive Workflow Guide</p>
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                How {PRIMARY_PRODUCT.name} Works in 4 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {WORKFLOW_STEPS.map((item, idx) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-lg border text-left transition-colors ${
                    activeStepIndex === idx
                      ? 'bg-blue-50 border-blue-600 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono text-xs font-semibold text-blue-700 block">
                    {item.step}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-bold block mt-1 line-clamp-2">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-mono text-xs font-semibold text-orange-600">
                {WORKFLOW_STEPS[activeStepIndex].step}
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {WORKFLOW_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {WORKFLOW_STEPS[activeStepIndex].detail}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
