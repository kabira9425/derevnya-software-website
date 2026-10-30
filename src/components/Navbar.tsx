import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { DerevnyaLogoMark } from './BrandMarks';

const TOP_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Software', to: '/software' },
  { label: 'Features', to: '/features' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const MOBILE_ALL_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Software', to: '/software' },
  { label: 'VyaparDesk Details', to: '/software/vyapardesk' },
  { label: 'Features', to: '/features' },
  { label: 'Screenshots Gallery', to: '/screenshots' },
  { label: 'Video Demo', to: '/video-demo' },
  { label: 'System Requirements', to: '/system-requirements' },
  { label: 'Direct Downloads', to: '/downloads' },
  { label: "What's New / Changelog", to: '/changelog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Clean single-line brand lockup */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 text-slate-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-md"
        >
          <DerevnyaLogoMark className="w-8 h-8 shrink-0" />
          <span className="font-display text-base sm:text-lg font-bold tracking-tight">
            {SITE_CONFIG.companyName}
          </span>
        </Link>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {TOP_NAV_LINKS.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  active
                    ? 'text-blue-700 border-orange-500 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/downloads"
            onClick={() => setMobileMenuOpen(false)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>Direct Downloads</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <p className="text-xs text-slate-500">{SITE_CONFIG.tagline} · Free Software Portal</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {MOBILE_ALL_LINKS.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap truncate ${
                      active
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2">
              <Link
                to="/downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Free Direct Downloads</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
