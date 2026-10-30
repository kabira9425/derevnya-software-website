import React, { useState } from 'react';
import { Monitor } from 'lucide-react';

export function DerevnyaLogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="11" fill="#0F172A" />
      <path
        d="M13 13.5H24.5C31.4036 13.5 37 18.4249 37 24.5C37 30.5751 31.4036 35.5 24.5 35.5H13V13.5Z"
        stroke="#2563EB"
        strokeWidth="3.75"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 19.5H24.5C27.8137 19.5 30.5 21.7386 30.5 24.5C30.5 27.2614 27.8137 29.5 24.5 29.5H19.5V19.5Z"
        fill="#F97316"
      />
    </svg>
  );
}

export function VyaparDeskLogo({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="14" fill="#1D4ED8" />
      <rect x="3" y="3" width="50" height="50" rx="11" stroke="white" strokeOpacity="0.16" strokeWidth="1.5" />
      <path
        d="M15 17L24.5 38L31.5 23.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="31" y="17" width="10" height="4" rx="2" fill="#F97316" />
      <rect x="34" y="25" width="7" height="4" rx="2" fill="white" fillOpacity="0.85" />
      <rect x="29" y="34" width="12" height="4" rx="2" fill="#F97316" />
    </svg>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ResilientImage({ src, alt, fallbackTitle, className = '' }: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-slate-200 p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Monitor className="w-10 h-10 text-blue-400 mb-3" />
        <p className="font-display text-sm font-semibold tracking-tight text-white">{fallbackTitle}</p>
        <p className="text-xs text-slate-400 mt-1">Derevnya IT Solutions Visual Preview</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
