import React from 'react';
import { Clock, Download, Monitor, Smartphone } from 'lucide-react';
import { PlatformDownload, isDownloadAvailable } from '../data/products';

interface DownloadCardProps {
  productName: string;
  download: PlatformDownload;
  showInstallSteps?: boolean;
}

export function DownloadCard({
  productName,
  download,
  showInstallSteps = true,
}: DownloadCardProps) {
  const available = isDownloadAvailable(download);
  const Icon = download.platform === 'windows' ? Monitor : Smartphone;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {productName} — {download.platformLabel}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {download.supportedOs} · {download.architecture}
              </p>
            </div>
          </div>
        </div>

        {/* Metadata Table (Tabular Numerals, Unboxed Clean Layout) */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 py-4 border-y border-slate-100 text-sm">
          <div>
            <dt className="text-xs text-slate-500">Version</dt>
            <dd className="font-mono font-medium text-slate-900 tabular-nums mt-0.5">
              v{download.version}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">File Type</dt>
            <dd className="font-mono font-medium text-slate-900 mt-0.5">
              {download.fileType}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">File Size</dt>
            <dd className="font-mono font-medium text-slate-900 tabular-nums mt-0.5">
              {download.fileSize}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Release Date</dt>
            <dd className="font-medium text-slate-900 tabular-nums mt-0.5">
              {download.releaseDate}
            </dd>
          </div>
        </dl>

        {download.sha256Checksum && download.sha256Checksum.trim() !== '' && (
          <div className="text-xs text-slate-500 break-all">
            <span className="font-medium text-slate-700">SHA-256: </span>
            <span className="font-mono">{download.sha256Checksum}</span>
          </div>
        )}

        {/* Primary Download Action or Honest Coming Soon State */}
        <div className="pt-1">
          {available ? (
            <a
              href={download.downloadUrl}
              download
              target={download.downloadUrl.startsWith('http') ? '_blank' : undefined}
              rel={download.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>
                Download {productName} ({download.fileExtension.toUpperCase()}) — Free
              </span>
            </a>
          ) : (
            <div className="space-y-2.5">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-not-allowed whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Download Coming Soon ({download.fileExtension.toUpperCase()})</span>
              </button>
              <p className="text-xs text-slate-500 leading-relaxed">
                No verified {download.fileExtension} installer link has been configured yet in{' '}
                <code className="font-mono text-slate-700">src/data/products.ts</code>. Once the
                official binary URL is added, this button activates automatically for free direct
                download.
              </p>
            </div>
          )}
        </div>
      </div>

      {showInstallSteps && (
        <div className="pt-4 border-t border-slate-100">
          <h4 className="font-display text-xs font-semibold text-slate-800 mb-2.5">
            Setup &amp; Installation Steps
          </h4>
          <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
            {download.installSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
