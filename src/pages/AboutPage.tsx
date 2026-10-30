import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Download, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { PRIMARY_PRODUCT } from '../data/products';
import { DerevnyaLogoMark, ResilientImage, VyaparDeskLogo } from '../components/BrandMarks';
import { usePageMeta } from '../components/usePageMeta';
import studioImg from '../assets/images/about_engineering_studio_1793347327260.jpg';

export function AboutPage() {
  usePageMeta(
    'About Us – Derevnya IT Solutions',
    'Learn about Derevnya IT Solutions, our mission to build dependable free business software, and our flagship retail billing application VyaparDesk.'
  );

  return (
    <div className="bg-slate-50">
      {/* Page Hero */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-orange-400 tracking-wide">
              About {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              {SITE_CONFIG.tagline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {SITE_CONFIG.companyName} designs clean, resilient business software built for real
              commercial counters, stockrooms, and growing retail teams—distributed freely without
              complicated licensing barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Visual + Story */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <p className="text-xs font-semibold text-blue-700">Our Engineering Purpose</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
                Software Crafted for Speed, Accuracy, and Everyday Business Ownership
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Independent retailers, distributors, and local shop owners rely on fast billing and
                trustworthy inventory counts every hour of the business day. Too often, available
                tools either require expensive recurring subscriptions or overwhelm counter staff
                with cluttered accounting menus.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At {SITE_CONFIG.companyName}, we focus on straightforward software architecture:
                clean interfaces, keyboard-friendly speed, local data reliability, and transparent
                free distribution. Our first public product,{' '}
                <strong className="font-semibold text-slate-900">{PRIMARY_PRODUCT.name}</strong> (
                {PRIMARY_PRODUCT.subtitle}), embodies that commitment.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
              <ResilientImage
                src={studioImg}
                alt="Derevnya IT Solutions modern software engineering workspace"
                fallbackTitle="Derevnya IT Solutions Engineering Studio"
                className="w-full h-full min-h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <p className="text-xs font-semibold text-blue-700">Core Principles</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How We Design &amp; Publish Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                01. Free &amp; Transparent Access
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every release on this website is completely free to download. We never place
                paywalls, checkout carts, or fake download buttons between users and software.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                02. Practical Shop-Floor Performance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We optimize for modest hardware, instant barcode scanning, thermal printer
                compatibility, and uninterrupted offline counter operation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                03. Long-Term Modular Ecosystem
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Starting with {PRIMARY_PRODUCT.name}, our product lineup is structured to grow into
                a cohesive suite of specialized utilities for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Company & Product Branding Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-xs font-semibold text-blue-700">Official Identity</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Company &amp; Flagship Product Branding
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-950 text-white flex flex-col justify-between gap-6">
              <div className="flex items-center gap-4">
                <DerevnyaLogoMark className="w-14 h-14 shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold">{SITE_CONFIG.companyName}</h3>
                  <p className="text-sm text-orange-400 font-medium mt-0.5">
                    {SITE_CONFIG.tagline}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Official corporate brand identity representing engineering reliability in deep navy,
                royal blue, crisp white, and vibrant orange.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50 flex flex-col justify-between gap-6">
              <div className="flex items-center gap-4">
                <VyaparDeskLogo className="w-14 h-14 shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {PRIMARY_PRODUCT.name}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium mt-0.5">
                    {PRIMARY_PRODUCT.subtitle} · {SITE_CONFIG.attributionLabel}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/software/vyapardesk"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Explore {PRIMARY_PRODUCT.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>Direct Downloads</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
