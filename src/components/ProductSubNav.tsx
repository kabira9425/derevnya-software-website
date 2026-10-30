import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PRODUCT_SUB_LINKS = [
  { label: 'VyaparDesk Overview', to: '/software/vyapardesk' },
  { label: 'Features', to: '/features' },
  { label: 'Screenshots', to: '/screenshots' },
  { label: 'Video Demo', to: '/video-demo' },
  { label: 'System Requirements', to: '/system-requirements' },
  { label: 'Direct Downloads', to: '/downloads' },
  { label: "What's New", to: '/changelog' },
  { label: 'FAQ', to: '/faq' },
];

export function ProductSubNav() {
  const location = useLocation();

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Product & Documentation Pages"
          className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar"
        >
          <span className="text-xs font-medium text-slate-400 pr-3 mr-1 border-r border-slate-700 whitespace-nowrap shrink-0">
            VyaparDesk Portal
          </span>
          {PRODUCT_SUB_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
