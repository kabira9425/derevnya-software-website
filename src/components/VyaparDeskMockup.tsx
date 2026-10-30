import React, { useState } from 'react';
import { Barcode, Plus, Printer, RotateCcw } from 'lucide-react';
import { ProductScreenshot } from '../data/products';
import { VyaparDeskLogo } from './BrandMarks';

interface SampleItem {
  sku: string;
  name: string;
  unit: string;
  rate: number;
  taxPct: number;
  stock: number;
}

const SAMPLE_CATALOG: SampleItem[] = [
  { sku: 'SKU-104', name: 'Premium Basmati Rice (5 kg)', unit: 'Bag', rate: 640, taxPct: 5, stock: 42 },
  { sku: 'SKU-209', name: 'Stainless Steel Vacuum Flask 1L', unit: 'Pcs', rate: 480, taxPct: 12, stock: 19 },
  { sku: 'SKU-315', name: 'LED Surface Panel Light 18W', unit: 'Pcs', rate: 350, taxPct: 18, stock: 8 },
  { sku: 'SKU-422', name: 'Spiral Ledger Notebook (Pack of 3)', unit: 'Pack', rate: 210, taxPct: 12, stock: 64 },
];

export function VyaparDeskMockup() {
  const [activeTab, setActiveTab] = useState<'billing' | 'inventory' | 'summary'>('billing');
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'SKU-104': 2,
    'SKU-209': 1,
    'SKU-315': 1,
  });

  const incrementItem = (sku: string) => {
    setQuantities((prev) => ({
      ...prev,
      [sku]: (prev[sku] || 0) + 1,
    }));
  };

  const resetInvoice = () => {
    setQuantities({
      'SKU-104': 2,
      'SKU-209': 1,
      'SKU-315': 1,
    });
  };

  const billedLines = SAMPLE_CATALOG.filter((item) => (quantities[item.sku] || 0) > 0).map(
    (item) => {
      const qty = quantities[item.sku] || 0;
      const subtotal = item.rate * qty;
      const taxAmount = Math.round((subtotal * item.taxPct) / 100);
      return {
        ...item,
        qty,
        subtotal,
        taxAmount,
        lineTotal: subtotal + taxAmount,
      };
    }
  );

  const invoiceSubtotal = billedLines.reduce((acc, row) => acc + row.subtotal, 0);
  const invoiceTax = billedLines.reduce((acc, row) => acc + row.taxAmount, 0);
  const grandTotal = invoiceSubtotal + invoiceTax;

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl text-left">
      {/* Desktop Window Titlebar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <VyaparDeskLogo className="w-6 h-6 shrink-0" />
          <span className="font-display text-xs sm:text-sm font-semibold text-white">
            VyaparDesk — Retail Billing &amp; Inventory
          </span>
          <span className="hidden sm:inline text-xs text-slate-400">
            · Interactive Interface Preview
          </span>
        </div>

        {/* Interactive Workspace Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('billing')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'billing'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            POS Billing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('inventory')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'inventory'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Stock
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('summary')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'summary'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Day Register
          </button>
        </div>
      </div>

      {/* Window Workspace Content */}
      <div className="p-4 sm:p-5 bg-slate-900 text-slate-100">
        {activeTab === 'billing' && (
          <div className="space-y-4">
            {/* Quick Add Barcode Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Barcode className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Click any item below to simulate barcode scan on Invoice #INV-1048:</span>
              </div>
              <button
                type="button"
                onClick={resetInvoice}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Sample Bill</span>
              </button>
            </div>

            {/* Quick Scan Item Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SAMPLE_CATALOG.map((item) => (
                <button
                  key={item.sku}
                  type="button"
                  onClick={() => incrementItem(item.sku)}
                  className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-left transition-colors group"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white truncate">{item.name}</p>
                    <p className="text-[11px] font-mono text-slate-400 tabular-nums">
                      ₹{item.rate} · {item.sku}
                    </p>
                  </div>
                  <Plus className="w-3.5 h-3.5 text-orange-400 shrink-0 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>

            {/* Invoice Line Table */}
            <div className="overflow-x-auto border border-slate-800 rounded-lg">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3 font-medium">Item Description</th>
                    <th className="py-2.5 px-3 font-medium text-right">Qty</th>
                    <th className="py-2.5 px-3 font-medium text-right">Rate</th>
                    <th className="py-2.5 px-3 font-medium text-right">GST</th>
                    <th className="py-2.5 px-3 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {billedLines.map((row) => (
                    <tr key={row.sku} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-medium text-slate-100">
                        {row.name}
                        <span className="block text-[11px] font-mono text-slate-400">
                          {row.sku} · {row.unit}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono tabular-nums text-white">
                        {row.qty}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-300">
                        ₹{row.rate.toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-400">
                        {row.taxPct}% (₹{row.taxAmount})
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold tabular-nums text-white">
                        ₹{row.lineTotal.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Invoice Footer Summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="text-xs text-slate-400 tabular-nums">
                <span>Taxable Subtotal: ₹{invoiceSubtotal.toLocaleString('en-IN')}</span>
                <span className="mx-2">·</span>
                <span>Total GST: ₹{invoiceTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="block text-[11px] text-slate-400">Net Payable Invoice</span>
                  <span className="font-mono text-lg font-bold text-orange-400 tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-xs font-medium text-blue-200 whitespace-nowrap">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Thermal / A4 Ready</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span>Real-Time Store Stock Master (Sample Preview Data)</span>
              <span>Reorder Threshold Alert: &le; 10 Units</span>
            </div>
            <div className="overflow-x-auto border border-slate-800 rounded-lg">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3 font-medium">SKU</th>
                    <th className="py-2.5 px-3 font-medium">Product Name</th>
                    <th className="py-2.5 px-3 font-medium text-right">In Stock</th>
                    <th className="py-2.5 px-3 font-medium text-right">Selling Price</th>
                    <th className="py-2.5 px-3 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {SAMPLE_CATALOG.map((item) => {
                    const low = item.stock <= 10;
                    return (
                      <tr key={item.sku}>
                        <td className="py-2.5 px-3 font-mono text-slate-400">{item.sku}</td>
                        <td className="py-2.5 px-3 font-medium text-white">{item.name}</td>
                        <td className="py-2.5 px-3 text-right font-mono tabular-nums text-white">
                          {item.stock} {item.unit}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-300">
                          ₹{item.rate}
                        </td>
                        <td className="py-2.5 px-3 text-right font-medium">
                          {low ? (
                            <span className="text-orange-400">Low Stock — Reorder</span>
                          ) : (
                            <span className="text-emerald-400">Healthy Stock</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <p className="text-xs text-slate-400">Sample Invoices Today</p>
                <p className="font-mono text-xl font-bold text-white tabular-nums mt-1">38 Bills</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <p className="text-xs text-slate-400">Sample Gross Counter Sales</p>
                <p className="font-mono text-xl font-bold text-blue-400 tabular-nums mt-1">
                  ₹42,860
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <p className="text-xs text-slate-400">Low-Stock Reorder Items</p>
                <p className="font-mono text-xl font-bold text-orange-400 tabular-nums mt-1">
                  3 SKUs
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive UI layout demonstration of VyaparDesk · Powered by Derevnya IT Solutions.
              Figures shown above are illustrative sample calculations for previewing the billing
              interface.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Renders either the real supplied screenshot image (when `screenshot.imageUrl` is populated)
 * or a dedicated, clearly labeled UI Concept Preview frame for the Screenshots Gallery.
 */
export function ScreenshotPreviewRenderer({ screenshot }: { screenshot: ProductScreenshot }) {
  if (screenshot.imageUrl && screenshot.imageUrl.trim() !== '') {
    return (
      <img
        src={screenshot.imageUrl}
        alt={screenshot.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="w-full h-full min-h-[230px] bg-slate-950 text-slate-200 p-4 flex flex-col justify-between border-b border-slate-200">
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800 text-[11px]">
        <span className="font-display font-semibold text-white truncate">
          VyaparDesk · {screenshot.title}
        </span>
        <span className="text-orange-400 font-mono shrink-0">UI Preview Slot</span>
      </div>

      {screenshot.previewType === 'pos-billing' && (
        <div className="my-3 space-y-2 text-[11px] font-mono">
          <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1">
            <span>ITEM</span>
            <span>QTY × RATE</span>
            <span>TOTAL</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>Basmati Rice 5kg</span>
            <span>2 × ₹640</span>
            <span>₹1,344</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>Vacuum Flask 1L</span>
            <span>1 × ₹480</span>
            <span>₹538</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-slate-800 text-orange-400 font-semibold">
            <span>NET INVOICE</span>
            <span>GST INCL.</span>
            <span>₹1,882</span>
          </div>
        </div>
      )}

      {screenshot.previewType === 'inventory-grid' && (
        <div className="my-3 space-y-2 text-[11px] font-mono">
          <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1">
            <span>SKU CODE</span>
            <span>AVAILABLE</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>SKU-104</span>
            <span>42 Bags</span>
            <span className="text-emerald-400">In Stock</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>SKU-315</span>
            <span>08 Pcs</span>
            <span className="text-orange-400">Reorder</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>SKU-422</span>
            <span>64 Packs</span>
            <span className="text-emerald-400">In Stock</span>
          </div>
        </div>
      )}

      {screenshot.previewType === 'sales-reports' && (
        <div className="my-3 grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Taxable Value</span>
            <span className="font-mono text-sm font-semibold text-white tabular-nums">₹38,420</span>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Output GST</span>
            <span className="font-mono text-sm font-semibold text-blue-400 tabular-nums">₹4,440</span>
          </div>
          <div className="col-span-2 p-2 rounded bg-slate-900/70 border border-slate-800 text-slate-300 font-mono">
            Export Formats: PDF Statement · CSV Spreadsheet
          </div>
        </div>
      )}

      {screenshot.previewType === 'party-ledger' && (
        <div className="my-3 space-y-2 text-[11px] font-mono">
          <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1">
            <span>ACCOUNT NAME</span>
            <span>TYPE</span>
            <span>BALANCE</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>Shree Traders</span>
            <span>Supplier</span>
            <span className="text-orange-400">₹12,400 Cr</span>
          </div>
          <div className="flex justify-between text-slate-200">
            <span>Metro Mart Retail</span>
            <span>Customer</span>
            <span className="text-blue-400">₹4,850 Dr</span>
          </div>
        </div>
      )}

      {screenshot.previewType === 'barcode-labels' && (
        <div className="my-3 flex items-center justify-center gap-3">
          <div className="bg-white text-slate-950 rounded p-2.5 w-44 text-center">
            <p className="text-[10px] font-bold truncate">VYAPARDESK RETAIL</p>
            <div className="my-1.5 h-6 bg-[repeating-linear-gradient(90deg,#0f172a,#0f172a_2px,#fff_2px,#fff_4px)]" />
            <p className="font-mono text-[10px] font-semibold">SKU-104 · MRP ₹640</p>
          </div>
        </div>
      )}

      {screenshot.previewType === 'mobile-stock' && (
        <div className="my-2 mx-auto w-44 rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-[10px] space-y-1.5">
          <div className="flex justify-between font-semibold text-white">
            <span>Android Companion</span>
            <span className="text-blue-400">v1.0</span>
          </div>
          <div className="flex justify-between text-slate-300 font-mono">
            <span>Quick Stock Lookup</span>
            <span>148 SKUs</span>
          </div>
          <div className="flex justify-between text-orange-400 font-mono">
            <span>Low Stock Alerts</span>
            <span>3 Active</span>
          </div>
        </div>
      )}

      <p className="text-[10px] text-slate-500">
        Replaceable via <code className="font-mono text-slate-400">imageUrl</code> in{' '}
        <code className="font-mono text-slate-400">src/data/products.ts</code>
      </p>
    </div>
  );
}
