import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { ProductSubNav } from '../components/ProductSubNav';
import { VyaparDeskLogo } from '../components/BrandMarks';
import { usePageMeta } from '../components/usePageMeta';

export function ChangelogPage() {
  usePageMeta(
    "What's New & Changelog – Derevnya IT Solutions",
    'Track release notes, version history, and feature updates for VyaparDesk and software applications by Derevnya IT Solutions.'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Release History &amp; Version Notes · {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              What&apos;s New / Changelog
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Transparent version milestones, feature additions, and platform distribution updates
              for software built by {SITE_CONFIG.companyName}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <VyaparDeskLogo className="w-11 h-11 shrink-0" />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      {product.name} — {product.subtitle}
                    </h2>
                    <p className="text-xs text-slate-500">{product.poweredBy}</p>
                  </div>
                </div>
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Direct Downloads</span>
                </Link>
              </div>

              <div className="space-y-6">
                {product.changelog.map((release) => (
                  <article
                    key={release.version}
                    className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                      <div className="space-y-1">
                        <h3 className="font-display text-xl font-bold text-slate-900 tabular-nums">
                          Version {release.version}
                        </h3>
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-blue-700">{release.status}</span>
                          <span className="mx-2">·</span>
                          <span>{release.releaseDate}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{release.summary}</p>

                    <div className="space-y-2.5 pt-2">
                      {release.changes.map((change, idx) => (
                        <div key={idx} className="text-sm text-slate-700 leading-relaxed">
                          <span className="font-mono text-xs font-semibold text-blue-700 mr-2">
                            [{change.type}]
                          </span>
                          <span>{change.description}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
