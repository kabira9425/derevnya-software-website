import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { PRIMARY_PRODUCT, ProductScreenshot } from '../data/products';
import { ProductSubNav } from '../components/ProductSubNav';
import { ScreenshotPreviewRenderer } from '../components/VyaparDeskMockup';
import { usePageMeta } from '../components/usePageMeta';

const SCREEN_CATEGORIES: Array<'All' | ProductScreenshot['category']> = [
  'All',
  'Billing & POS',
  'Inventory Control',
  'Reports & Ledger',
  'Mobile View',
];

export function ScreenshotsPage() {
  usePageMeta(
    'Screenshots Gallery – VyaparDesk by Derevnya IT Solutions',
    'Inspect interface previews and workspace layouts for VyaparDesk Retail Billing & Inventory across Windows desktop and Android mobile.'
  );

  const [activeCategory, setActiveCategory] = useState<'All' | ProductScreenshot['category']>('All');
  const [selectedScreen, setSelectedScreen] = useState<ProductScreenshot | null>(null);

  const filteredScreens =
    activeCategory === 'All'
      ? PRIMARY_PRODUCT.screenshots
      : PRIMARY_PRODUCT.screenshots.filter((s) => s.category === activeCategory);

  const anyRealImages = PRIMARY_PRODUCT.screenshots.some((s) => s.imageUrl.trim() !== '');

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Visual Interface Gallery · {PRIMARY_PRODUCT.poweredBy}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              {PRIMARY_PRODUCT.name} Screenshots Gallery
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore workspace layouts for counter billing, stock inventory control, party balance
              ledgers, and mobile companion views.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Transparent Placeholder Notice when real image files have not yet been supplied */}
          {!anyRealImages && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="font-semibold text-slate-900">
                Transparent Placeholder Notice:
              </strong>{' '}
              Production PNG/JPG screenshot files have not been uploaded yet. Each card below
              renders a clean UI Layout Preview representing the planned {PRIMARY_PRODUCT.name}{' '}
              module. To display actual application screenshots, place image files in{' '}
              <code className="font-mono text-slate-800">public/screenshots/</code> and update{' '}
              <code className="font-mono text-slate-800">imageUrl</code> in{' '}
              <code className="font-mono text-slate-800">src/data/products.ts</code>.
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl w-fit">
            {SCREEN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Screenshot Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScreens.map((screen) => (
              <div
                key={screen.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <ScreenshotPreviewRenderer screenshot={screen} />
                    <button
                      type="button"
                      onClick={() => setSelectedScreen(screen)}
                      aria-label={`Inspect ${screen.title}`}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 hover:bg-blue-700 border border-slate-700 rounded-lg transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  <div className="p-5 space-y-1.5">
                    <p className="text-xs font-medium text-blue-700">{screen.category}</p>
                    <h2 className="font-display text-base font-bold text-slate-900">
                      {screen.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">{screen.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Inspector */}
      {selectedScreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedScreen(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 font-semibold">{selectedScreen.category}</p>
                <h3 id="lightbox-title" className="font-display text-lg font-bold text-slate-900">
                  {selectedScreen.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreen(null)}
                aria-label="Close preview modal"
                className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="min-h-[300px]">
              <ScreenshotPreviewRenderer screenshot={selectedScreen} />
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <p>{selectedScreen.caption}</p>
              <button
                type="button"
                onClick={() => setSelectedScreen(null)}
                className="px-4 py-2 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
