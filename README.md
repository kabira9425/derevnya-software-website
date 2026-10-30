# Derevnya IT Solutions — Official Free Software Download Website

**Tagline:** *Smart Software. Smarter Business.*  
**Flagship Software:** **VyaparDesk** (*Retail Billing & Inventory — Powered by Derevnya IT Solutions*)

A responsive, modern, 100% free software download portal built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Engineered with a purely static architecture (`HashRouter` + configurable Vite `base` path) for zero-cost hosting on **GitHub Pages**—with **zero payment gateways, zero shopping carts, and zero mandatory customer logins**.

---

## 1. Clear Folder Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Automated GitHub Pages build & deployment workflow
├── public/
│   ├── 404.html                        # Static fallback redirecting stray paths to HashRouter
│   └── favicon.svg                     # Derevnya IT Solutions SVG brand icon
├── src/
│   ├── assets/
│   │   └── images/                     # Bundled visual photography assets
│   ├── components/
│   │   ├── BrandMarks.tsx              # Derevnya IT & VyaparDesk SVG logos + resilient image wrapper
│   │   ├── DownloadCard.tsx            # Direct Download card (.exe / .apk + honest Coming Soon fallback)
│   │   ├── Footer.tsx                  # Corporate footer with all 14 page links & attribution
│   │   ├── Navbar.tsx                  # Responsive top navigation bar + mobile drawer
│   │   ├── ProductSubNav.tsx           # Contextual VyaparDesk sub-navigation bar
│   │   ├── VyaparDeskMockup.tsx        # Interactive POS Billing & Inventory UI preview
│   │   └── usePageMeta.ts              # Dynamic SEO page title & meta description hook
│   ├── data/
│   │   ├── products.ts                 # CENTRALIZED PRODUCT & DOWNLOAD CONFIGURATION (Edit here!)
│   │   └── siteConfig.ts               # CENTRALIZED COMPANY & CONTACT PLACEHOLDERS (Edit here!)
│   ├── pages/
│   │   ├── HomePage.tsx                # 1. Home
│   │   ├── AboutPage.tsx               # 2. About Us
│   │   ├── OurSoftwarePage.tsx         # 3. Our Software
│   │   ├── SoftwareDetailsPage.tsx     # 4. Software Details (/software/vyapardesk)
│   │   ├── FeaturesPage.tsx            # 5. Features
│   │   ├── ScreenshotsPage.tsx         # 6. Screenshots Gallery
│   │   ├── VideoDemoPage.tsx           # 7. Video Demo
│   │   ├── SystemRequirementsPage.tsx  # 8. System Requirements
│   │   ├── DirectDownloadsPage.tsx     # 9. Direct Downloads
│   │   ├── ChangelogPage.tsx           # 10. What's New / Changelog
│   │   ├── FaqPage.tsx                 # 11. FAQ
│   │   ├── ContactPage.tsx             # 12. Contact Us
│   │   ├── PrivacyPolicyPage.tsx       # 13. Privacy Policy
│   │   └── TermsPage.tsx               # 14. Terms and Conditions
│   ├── App.tsx                         # HashRouter setup connecting all 14 pages
│   ├── index.css                       # Typography, corporate colors, and Tailwind v4 setup
│   └── main.tsx                        # React entry point
├── .env.example                        # Optional VITE_BASE_PATH reference
├── index.html                          # SEO meta tags, OpenGraph, Schema.org JSON-LD
├── package.json                        # Scripts and dependencies
└── vite.config.ts                      # Configurable base path for GitHub Pages
```

---

## 2. Local Setup & Running Instructions

### Prerequisites
- **Node.js** `v18+` (recommended `v20 LTS`) and **npm** installed on your computer.

### Step-by-Step Commands
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
3. **Type-check the codebase:**
   ```bash
   npm run lint
   ```
4. **Create a production static build (`dist/` folder):**
   ```bash
   npm run build
   ```
5. **Preview the production static build locally:**
   ```bash
   npm run preview
   ```

---

## 3. Beginner-Friendly GitHub Pages Deployment Guide (100% Free Hosting)

This project uses `HashRouter` (`#/software`, `#/downloads`, etc.) and defaults to `base: './'` in `vite.config.ts`, meaning all assets and routes work out-of-the-box on **GitHub Pages** without 404 errors on refresh.

### Steps to Publish on GitHub Pages
1. Create a free GitHub account (if you don't already have one) and create a **New Repository** (for example, `derevnya-it-website`). Set visibility to **Public** for free GitHub Pages hosting.
2. Push this project folder to your GitHub repository's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Derevnya IT Solutions website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/derevnya-it-website.git
   git push -u origin main
   ```
3. In your GitHub repository, click **Settings** (top tab) → **Pages** (left sidebar).
4. Under **Build and deployment** → **Source**, select **GitHub Actions** from the dropdown.
5. The included workflow file (`.github/workflows/deploy.yml`) will automatically install dependencies, build `dist/`, and publish your live site within ~1–2 minutes!
6. Your live website will be available at:
   `https://YOUR_GITHUB_USERNAME.github.io/derevnya-it-website/`
   *(Note: If you later connect a custom domain like `www.derevnyait.com`, simply add it under **Settings → Pages → Custom domain**—no code rebuild needed!)*

### Optional Custom Base Path
If you ever want to force an explicit base path at build time instead of `./`, set `VITE_BASE_PATH`:
```bash
VITE_BASE_PATH="/derevnya-it-website/" npm run build
```

---

## 4. Owner Guide: Updating Product Information, Download Links & Contact Details

All editable content is centralized in two TypeScript files inside `src/data/` so you never have to redesign React components.

### A. Enabling Real Windows (`.exe`) & Android (`.apk`) Downloads
> **Important:** By default, `downloadUrl` is `""` (empty), so the website honestly displays **"Download Coming Soon"**. Never enter fake URLs.

1. Host your compiled `VyaparDesk-Setup-1.0.0.exe` and `VyaparDesk-1.0.0.apk` files (recommended free method: upload them to **GitHub Releases** in your repository, which supports files up to 2 GB each for free!).
2. Copy the direct release asset URL (e.g., `https://github.com/YOUR_USERNAME/REPO/releases/download/v1.0.0/VyaparDesk-Setup-1.0.0.exe`).
3. Open `src/data/products.ts` and update the matching object inside `downloads`:
   ```ts
   version: '1.0.0',
   releaseDate: 'November 2026',
   fileSize: '48.4 MB',
   downloadUrl: 'https://github.com/YOUR_USERNAME/REPO/releases/download/v1.0.0/VyaparDesk-Setup-1.0.0.exe',
   sha256Checksum: 'optional-sha256-hash-here',
   ```
4. Commit and push—the **"Download Coming Soon"** badge immediately transforms into an active orange **Download VyaparDesk (.EXE) — Free** button!

### B. Adding Real Software Screenshots & Video Demo
1. Place your real `.png` or `.jpg` screenshots inside `public/screenshots/` (create the folder if needed), e.g., `public/screenshots/pos-counter.png`.
2. Open `src/data/products.ts` and set `imageUrl: './screenshots/pos-counter.png'` on each item in `screenshots`.
3. To embed a demo video on the **Video Demo** page, set `demoVideoEmbedUrl` (e.g., `'https://www.youtube.com/embed/YOUR_VIDEO_ID'`) or `demoVideoFileUrl` in `src/data/products.ts`.

### C. Adding Future Free Software Products
To launch a second or third software product:
1. Open `src/data/products.ts`.
2. Duplicate the `VyaparDesk` object inside the `PRODUCTS` array with a new `id`, `slug` (e.g. `'ledgerlite'`), `name`, `downloads`, `features`, `systemRequirements`, and `changelog`.
3. It will automatically appear on **Our Software**, **Direct Downloads**, **Changelog**, and get its own dedicated product page at `#/software/ledgerlite`!

### D. Updating WhatsApp, Email, Phone & Office Placeholders
1. Open `src/data/siteConfig.ts`.
2. Fill in your real details under `SITE_CONFIG.contact`:
   - `whatsappNumberRaw`: digits with country code, no `+` or spaces (e.g. `'9198XXXXXXXX'`).
   - `supportEmail`: e.g. `'support@yourdomain.com'`.
   - `phoneNumber`: e.g. `'+91 XXXXX XXXXX'`.
   - `officeLocation`: your real city/office address.
3. Once saved, the **Chat on WhatsApp** and **Send Support Email** buttons on the **Home** and **Contact Us** pages automatically activate!
