/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OurSoftwarePage } from './pages/OurSoftwarePage';
import { SoftwareDetailsPage } from './pages/SoftwareDetailsPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ScreenshotsPage } from './pages/ScreenshotsPage';
import { VideoDemoPage } from './pages/VideoDemoPage';
import { SystemRequirementsPage } from './pages/SystemRequirementsPage';
import { DirectDownloadsPage } from './pages/DirectDownloadsPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* 1. Home */}
            <Route path="/" element={<HomePage />} />
            {/* 2. About Us */}
            <Route path="/about" element={<AboutPage />} />
            {/* 3. Our Software */}
            <Route path="/software" element={<OurSoftwarePage />} />
            {/* 4. Software Details (VyaparDesk & future products) */}
            <Route path="/software-details" element={<SoftwareDetailsPage />} />
            <Route path="/software/:slug" element={<SoftwareDetailsPage />} />
            {/* 5. Features */}
            <Route path="/features" element={<FeaturesPage />} />
            {/* 6. Screenshots Gallery */}
            <Route path="/screenshots" element={<ScreenshotsPage />} />
            {/* 7. Video Demo */}
            <Route path="/video-demo" element={<VideoDemoPage />} />
            {/* 8. System Requirements */}
            <Route path="/system-requirements" element={<SystemRequirementsPage />} />
            {/* 9. Direct Downloads */}
            <Route path="/downloads" element={<DirectDownloadsPage />} />
            {/* 10. What's New / Changelog */}
            <Route path="/changelog" element={<ChangelogPage />} />
            {/* 11. FAQ */}
            <Route path="/faq" element={<FaqPage />} />
            {/* 12. Contact Us */}
            <Route path="/contact" element={<ContactPage />} />
            {/* 13. Privacy Policy */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* 14. Terms and Conditions */}
            <Route path="/terms" element={<TermsPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
