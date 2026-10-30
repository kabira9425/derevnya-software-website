import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { PRIMARY_PRODUCT } from '../data/products';
import { usePageMeta } from '../components/usePageMeta';

export function PrivacyPolicyPage() {
  usePageMeta(
    'Privacy Policy – Derevnya IT Solutions',
    'Read the Privacy Policy for Derevnya IT Solutions and the VyaparDesk free software download website.'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold text-orange-400">
            Legal &amp; Data Transparency · {SITE_CONFIG.companyName}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Clear overview of how {SITE_CONFIG.companyName} handles visitor privacy across this free
            software download portal and our local-first applications.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                1. No Mandatory Accounts or Payment Data Collection
              </h2>
              <p>
                This website is operated by <strong className="text-slate-900">{SITE_CONFIG.companyName}</strong>{' '}
                strictly as a free software information and direct download portal. We do not
                require visitors to create user accounts, sign in, or submit financial, credit card,
                UPI, or billing information at any point.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                2. Static Website Hosting &amp; Technical Logs
              </h2>
              <p>
                Our website is engineered as a lightweight static web application compatible with
                GitHub Pages. Standard web hosting infrastructure may automatically process basic
                technical request metadata (such as browser user-agent and IP address) solely to
                deliver web pages and software installer files securely.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                3. Local Business Data in {PRIMARY_PRODUCT.name}
              </h2>
              <p>
                {PRIMARY_PRODUCT.name} ({PRIMARY_PRODUCT.subtitle}) is designed around local-first
                data ownership. Product catalogs, invoices, customer records, and supplier ledgers
                created inside the software are stored locally on the user&apos;s own Windows or
                Android device unless the user explicitly exports or shares backup files.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-lg font-bold text-slate-900">
                4. Voluntary Support Communications
              </h2>
              <p>
                If you voluntarily contact {SITE_CONFIG.companyName} via email, WhatsApp, or our
                contact inquiry form, any contact details you provide are used solely to respond to
                your support request or product feedback and are never sold to third parties.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="font-display text-lg font-bold text-slate-900">
                5. Privacy Inquiries
              </h2>
              <p>
                For questions regarding this Privacy Policy, please reach out through our{' '}
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
