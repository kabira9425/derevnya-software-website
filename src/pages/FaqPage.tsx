import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS, FaqItem } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { ProductSubNav } from '../components/ProductSubNav';
import { usePageMeta } from '../components/usePageMeta';

const FAQ_CATEGORIES: Array<'All' | FaqItem['category']> = [
  'All',
  'Free Licensing',
  'Downloads & Setup',
  'Features & Hardware',
  'Data & Support',
];

export function FaqPage() {
  usePageMeta(
    'Frequently Asked Questions (FAQ) – Derevnya IT Solutions',
    'Answers to common questions about free licensing, downloading VyaparDesk, offline billing, barcode scanners, thermal printers, and local backups.'
  );

  const [category, setCategory] = useState<'All' | FaqItem['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [FAQ_ITEMS[0].id]: true,
    [FAQ_ITEMS[2].id]: true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = category === 'All' || item.category === category;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Help &amp; Answers · {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Clear answers regarding our 100% free software policy, direct downloads, hardware
              peripherals, and offline business data storage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search frequently asked questions..."
                aria-label="Search FAQ"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    category === cat
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-3">
              <p className="font-display text-base font-bold text-slate-900">
                No matching questions found
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = Boolean(openIds[faq.id]);
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-semibold text-blue-700 block">
                          {faq.category}
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold text-slate-900 block">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-blue-700' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-display text-lg font-bold">Still have a technical question?</h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Reach out to {SITE_CONFIG.companyName} via our Contact &amp; Support page.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
