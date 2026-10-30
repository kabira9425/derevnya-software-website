import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Monitor, Printer, Smartphone } from 'lucide-react';
import { PRIMARY_PRODUCT, PlatformKey } from '../data/products';
import { ProductSubNav } from '../components/ProductSubNav';
import { usePageMeta } from '../components/usePageMeta';

export function SystemRequirementsPage() {
  usePageMeta(
    'System Requirements – VyaparDesk Windows & Android Specs',
    'View minimum and recommended hardware, operating system, printer, and barcode scanner requirements for VyaparDesk by Derevnya IT Solutions.'
  );

  const [selectedPlatform, setSelectedPlatform] = useState<'all' | PlatformKey>('all');

  const visibleRequirements =
    selectedPlatform === 'all'
      ? PRIMARY_PRODUCT.systemRequirements
      : PRIMARY_PRODUCT.systemRequirements.filter((r) => r.platform === selectedPlatform);

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductSubNav />

      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Hardware &amp; OS Compatibility · {PRIMARY_PRODUCT.poweredBy}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              System Requirements
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {PRIMARY_PRODUCT.name} is lightweight and engineered to run reliably on standard
              retail counter PCs as well as modern Android smartphones and tablets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Platform Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl">
              <button
                type="button"
                onClick={() => setSelectedPlatform('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedPlatform === 'all'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Platforms
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlatform('windows')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedPlatform === 'windows'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Windows Desktop (.exe)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlatform('android')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedPlatform === 'android'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Android Mobile (.apk)
              </button>
            </div>

            <Link
              to="/downloads"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Proceed to Direct Downloads</span>
            </Link>
          </div>

          {/* Specification Tables */}
          <div className="space-y-8">
            {visibleRequirements.map((req) => {
              const Icon = req.platform === 'windows' ? Monitor : Smartphone;
              return (
                <div
                  key={req.platform}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <div className="px-6 py-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-orange-400 shrink-0" />
                      <div>
                        <h2 className="font-display text-lg font-bold">{req.platformName}</h2>
                        <p className="text-xs text-slate-300">
                          Supported Versions: {req.supportedVersions}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500">
                        <tr>
                          <th className="py-3.5 px-6 font-semibold w-1/4">Component</th>
                          <th className="py-3.5 px-6 font-semibold w-3/8">Minimum Specification</th>
                          <th className="py-3.5 px-6 font-semibold w-3/8">
                            Recommended Specification
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {req.specs.map((row) => (
                          <tr key={row.component} className="hover:bg-slate-50/60">
                            <td className="py-4 px-6 font-medium text-slate-900">
                              {row.component}
                            </td>
                            <td className="py-4 px-6 text-slate-600 tabular-nums">{row.minimum}</td>
                            <td className="py-4 px-6 text-slate-800 font-medium tabular-nums">
                              {row.recommended}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="px-6 py-5 bg-slate-50 border-t border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                      <Printer className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Compatible Store Peripherals ({req.platformName})</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-600">
                      {req.compatiblePeripherals.map((item, idx) => (
                        <li key={idx}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
