import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import {
  SITE_CONFIG,
  getWhatsAppUrl,
  hasConfiguredEmail,
  hasConfiguredWhatsApp,
} from '../data/siteConfig';
import { PRIMARY_PRODUCT } from '../data/products';
import { usePageMeta } from '../components/usePageMeta';

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export function ContactPage() {
  usePageMeta(
    'Contact Us – Derevnya IT Solutions Support',
    'Get in touch with Derevnya IT Solutions via WhatsApp, Email Support, or our Contact Form regarding VyaparDesk and free business software.'
  );

  const [form, setForm] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    topic: `${PRIMARY_PRODUCT.name} – General Question`,
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submittedData, setSubmittedData] = useState<ContactFormState | null>(null);

  const whatsappActive = hasConfiguredWhatsApp();
  const whatsappUrl = getWhatsAppUrl();
  const emailActive = hasConfiguredEmail();
  const phoneActive = SITE_CONFIG.contact.phoneNumber.trim() !== '';
  const addressActive = SITE_CONFIG.contact.officeLocation.trim() !== '';

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (form.phone.trim() !== '' && !/^[0-9+\-\s()]{7,18}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number or leave this field blank.';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData({ ...form });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-orange-400">
              Support &amp; Inquiries · {SITE_CONFIG.companyName}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Contact Us
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Have a question about {PRIMARY_PRODUCT.name}, printer compatibility, or upcoming free
              business software? Reach out through any channel below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Transparent Placeholder Notice if contact channels are not yet filled in */}
          {(!whatsappActive || !emailActive) && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="font-semibold text-slate-900">
                Editable Contact Placeholders:
              </strong>{' '}
              To keep company details 100% accurate and never display invented phone numbers or
              email addresses, contact channels below are configured as editable placeholders in{' '}
              <code className="font-mono text-slate-800">src/data/siteConfig.ts</code>. Once real
              WhatsApp, Email, and Phone values are entered there, direct one-click buttons activate
              automatically.
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Contact Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-base font-bold text-slate-900">
                      WhatsApp Support
                    </h2>
                    <p className="text-xs text-slate-500">Quick product &amp; setup assistance</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-700 break-words">
                  {whatsappActive
                    ? `+${SITE_CONFIG.contact.whatsappNumberRaw}`
                    : SITE_CONFIG.contact.whatsappDisplayPlaceholder}
                </p>
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded-lg cursor-not-allowed whitespace-nowrap"
                  >
                    <span>WhatsApp Number Placeholder (Set in siteConfig.ts)</span>
                  </button>
                )}
              </div>

              {/* Email Support Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-base font-bold text-slate-900">
                      Email Support
                    </h2>
                    <p className="text-xs text-slate-500">Technical queries &amp; bug reports</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-700 break-words">
                  {emailActive
                    ? SITE_CONFIG.contact.supportEmail
                    : SITE_CONFIG.contact.supportEmailPlaceholder}
                </p>
                {emailActive ? (
                  <a
                    href={`mailto:${SITE_CONFIG.contact.supportEmail}?subject=${encodeURIComponent(
                      'VyaparDesk Inquiry – Derevnya IT Solutions'
                    )}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Support Email</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded-lg cursor-not-allowed whitespace-nowrap"
                  >
                    <span>Email Address Placeholder (Set in siteConfig.ts)</span>
                  </button>
                )}
              </div>

              {/* Phone & Office Placeholder Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-700 shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <p className="font-display text-sm font-bold text-slate-900">Support Phone</p>
                    <p className="text-xs text-slate-600 font-mono">
                      {phoneActive
                        ? SITE_CONFIG.contact.phoneNumber
                        : SITE_CONFIG.contact.phonePlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <p className="font-display text-sm font-bold text-slate-900">
                      Company Location
                    </p>
                    <p className="text-xs text-slate-600">
                      {addressActive
                        ? SITE_CONFIG.contact.officeLocation
                        : SITE_CONFIG.contact.officeLocationPlaceholder}
                    </p>
                    <p className="text-[11px] text-slate-400 pt-1">
                      {SITE_CONFIG.contact.supportHoursPlaceholder}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Contact Form UI */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-1.5 mb-6">
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill out the inquiry form below. All fields marked with * are validated locally.
                </p>
              </div>

              {submittedData ? (
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2.5 text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h3 className="font-display text-base font-bold">
                      Inquiry Prepared Successfully
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>.
                    Because this website runs on a 100% static GitHub Pages architecture without a
                    paid backend database, your message has been formatted locally on your browser.
                  </p>
                  {emailActive ? (
                    <a
                      href={`mailto:${SITE_CONFIG.contact.supportEmail}?subject=${encodeURIComponent(
                        submittedData.topic
                      )}&body=${encodeURIComponent(
                        `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${
                          submittedData.phone || 'Not provided'
                        }\n\n${submittedData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-Filled Email in Mail Client</span>
                    </a>
                  ) : (
                    <p className="text-xs text-slate-500">
                      Owner Note: Configure <code className="font-mono">supportEmail</code> in{' '}
                      <code className="font-mono">src/data/siteConfig.ts</code> to enable one-click
                      email dispatch of submitted messages.
                    </p>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm({
                          fullName: '',
                          email: '',
                          phone: '',
                          topic: `${PRIMARY_PRODUCT.name} – General Question`,
                          message: '',
                        });
                      }}
                      className="text-xs font-semibold text-blue-700 hover:underline"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Optional callback number"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Inquiry Subject
                      </label>
                      <select
                        id="contact-topic"
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      >
                        <option value="VyaparDesk – General Question">
                          VyaparDesk – General Question
                        </option>
                        <option value="Installation & System Compatibility">
                          Installation &amp; System Compatibility
                        </option>
                        <option value="Feature Suggestion / Feedback">
                          Feature Suggestion / Feedback
                        </option>
                        <option value="Bug Report">Bug Report</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your question, retail store setup, or feedback..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
