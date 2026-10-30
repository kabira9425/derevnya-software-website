import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { DerevnyaLogoMark } from './BrandMarks';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Attribution Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
              <DerevnyaLogoMark className="w-9 h-9 shrink-0" />
              <span className="font-display text-lg font-bold tracking-tight">
                {SITE_CONFIG.companyName}
              </span>
            </Link>
            <p className="text-sm font-semibold text-orange-400 tracking-wide">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {SITE_CONFIG.companyIntro}
            </p>
            <p className="text-xs text-slate-400 pt-2">
              {SITE_CONFIG.attributionLabel} · 100% Free Software Download Portal
            </p>
          </div>

          {/* Company & Portal */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-slate-400 hover:text-white transition-colors">
                  Our Software
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* VyaparDesk Product Pages */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">VyaparDesk</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/software/vyapardesk" className="text-slate-400 hover:text-white transition-colors">
                  Software Details
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/screenshots" className="text-slate-400 hover:text-white transition-colors">
                  Screenshots Gallery
                </Link>
              </li>
              <li>
                <Link to="/video-demo" className="text-slate-400 hover:text-white transition-colors">
                  Video Demo
                </Link>
              </li>
              <li>
                <Link to="/system-requirements" className="text-slate-400 hover:text-white transition-colors">
                  System Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads, Support & Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">Downloads & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/downloads" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                  Direct Downloads
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="text-slate-400 hover:text-white transition-colors">
                  What&apos;s New / Changelog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.companyName}. All rights reserved.
          </p>
          <p className="font-medium text-slate-300">
            {SITE_CONFIG.attributionLabel}
          </p>
        </div>
      </div>
    </footer>
  );
}
