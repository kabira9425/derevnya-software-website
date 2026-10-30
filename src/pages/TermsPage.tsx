import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { PRIMARY_PRODUCT } from '../data/products';
import { usePageMeta } from '../components/usePageMeta';

export function TermsPage() {
  usePageMeta(
    'Terms and Conditions – Derevnya IT Solutions',
    'Terms and Conditions governing the free software download portal and software products by Derevnya IT Solutions.'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold text-orange-400">
            Software Usage &amp; Portal Terms · {SITE_CONFIG.companyName}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Please review these terms before downloading or using software published by{' '}
            {SITE_CONFIG.companyName}.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                1. Free Software License Grant
              </h2>
              <p>
                {SITE_CONFIG.companyName} grants users a non-exclusive, royalty-free, revocable
                license to download, install, and use {PRIMARY_PRODUCT.name} and future free
                software releases published on this official portal for lawful internal business and
                retail operations.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                2. Intellectual Property &amp; Restrictions
              </h2>
              <p>
                All brand names, including <strong className="text-slate-900">{SITE_CONFIG.companyName}</strong>{' '}
                and <strong className="text-slate-900">{PRIMARY_PRODUCT.name}</strong>, logos,
                interface designs, and software binaries remain the intellectual property of{' '}
                {SITE_CONFIG.companyName}. Users may not repackage, sell, charge fees for, or
                misrepresent official installers as third-party paid products.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                3. User Responsibility for Backups &amp; Tax Compliance
              </h2>
              <p>
                Users are responsible for verifying tax rates (such as GST/HSN configurations)
                applicable to their jurisdiction and maintaining regular local backups of their
                business database on external storage media.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                4. Disclaimer of Warranties
              </h2>
              <p>
                Because our software is distributed completely free of charge, it is provided on an
                &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any
                kind, express or implied, to the fullest extent permitted by applicable law.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="font-display text-lg font-bold text-slate-900">
                5. Questions About These Terms
              </h2>
              <p>
                If you have questions regarding licensing or permitted usage, please contact{' '}
                {SITE_CONFIG.companyName} via our{' '}
                <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
                  Contact Us
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
