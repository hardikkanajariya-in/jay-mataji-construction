# JAY MATAJI CONSTRUCTION — Production Website

A multi-page, high-performance static website built for **JAY MATAJI CONSTRUCTION**, an industrial contractor specializing in refinery turnaround, shutdown maintenance, static equipment overhaul, plant maintenance services, and specialized technical manpower supply.

---

## 1. Project Overview

- **Company Name**: JAY MATAJI CONSTRUCTION (JMC)
- **Tagline**: Shutdown & Maintenance Solutions
- **Established**: 2014
- **Stated Technical Manpower**: 700+ technical personnel on call
- **Documented Experience**: 49 documented turnaround and shutdown contracts across major Indian refineries from 2014 through 2026.
- **Visual Theme**: Authoritative industrial light theme derived from the approved brand logo (Industrial Blue `#155497`, Deep Blue `#123A68`, Industrial Orange `#F28A00`, Charcoal `#292929`, Neutral Grays `#EEF1F2`, `#DCE2E5`).

---

## 2. Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict checking)
- **Styling**: Tailwind CSS v4
- **Icons**: Custom, zero-dependency inline accessible SVGs
- **Deployment**: Static Export (`output: "export"` generating standalone HTML/CSS/JS in `out/`)
- **Images**: Unoptimized local static assets with explicit dimensions

---

## 3. Site Architecture & Implemented Routes

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Editorial hero, verified proof strip, core service pillars, interactive 5-phase shutdown workflow, equipment diagrams, curated project highlights, about snippet, and enquiry CTA. |
| `/about/` | **About Us** | Corporate background (Est. 2014), operational scope, pan-India refinery footprint (Jamnagar, Mangalore, Mumbai, Vizag, Vadinar, Bhatinda, Barauni, Haldia, Kochi, Assam, Nagothane). |
| `/services/` | **Services** | Documented service packages categorized into Static Equipment, Plant Maintenance & Servicing, and Site Execution & Manpower. |
| `/projects/` | **Project Experience** | Data-driven interactive project register of all 49 contracts with real-time text search, year filter (2014–2026), category filter, sorting, and record detail inspector modal. |
| `/contact/` | **Contact & Mobilization** | Industrial requisition form with validation, Web3Forms email delivery, Google reCAPTCHA v3, and honeypot spam protection. |

---

## 4. Centralized Data Architecture

All business logic and data records are separated from presentation in the `data/` directory:

- `data/company.ts`: Company profile facts, verified metrics, and contact configuration.
- `data/services.ts`: Catalog of verified service scopes, documented tasks, and equipment handled.
- `data/projects.ts`: Complete, typed historical dataset of 49 records (2014 to 2026) directly transcribed from the client's job register.
- `data/navigation.ts`: Header, footer, and breadcrumb links.

### Confidentiality & Privacy Toggle
In `data/projects.ts`, the publication settings object allows client or refinery names to be masked until the client confirms public disclosure:
```typescript
export const projectPublicationConfig = {
  anonymizeThirdPartyClients: false, // Set to true to mask third-party client names
  anonymizeSites: false,             // Set to true to generalize unit/refinery locations
};
```

---

## 5. Local Image Assets

All images are stored locally under `public/images/`:
- `public/images/brand/logo.jpg`: Approved customer brand logo (unaltered proportions, typography, and colors).
- `public/images/hero-refinery.jpg`: Original high-resolution daylight photograph of a refinery turnaround.
- `public/images/heat-exchanger-maintenance.jpg`: Shell-and-tube heat exchanger maintenance scene.
- `public/images/scaffolding-column-maintenance.jpg`: Column with engineered modular scaffolding.
- `public/images/equipment-servicing.jpg`: Close-up mechanical servicing of heavy control valves and process equipment.

---

## 6. How to Run & Build

### Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Lint
```bash
pnpm lint
```

### Static Production Export
```bash
pnpm build
```
This builds the site and exports static HTML, CSS, JavaScript, and assets into the `out/` directory ready for deployment on any static hosting platform (e.g., Nginx, Apache, Cloudflare Pages, AWS S3, GitHub Pages, Vercel).

### Contact form (Web3Forms + reCAPTCHA v3)

1. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — from [Web3Forms](https://web3forms.com/)
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — optional; used only in the browser before submit (not sent to Web3Forms on the free plan)
2. In the Web3Forms dashboard, leave **reCAPTCHA disabled** for this form.
3. Rebuild after changing any `NEXT_PUBLIC_*` variable (`pnpm build`), since values are inlined at build time.

Form logic lives in `components/contact/EnquiryForm.tsx`; public integration settings are in `config/integrations.ts`.

---

## 7. Pending Client Information Awaiting Confirmation

Before publishing to a live custom domain, confirm the following client-specific production variables in `data/company.ts`:
1. **Official Corporate Mailbox**: Currently defaulted to `contact@jaymatajiconstruction.com`. Update to client's preferred dispatch address.
2. **Operations Hotline**: Currently set as a placeholder in `company.ts`. Update to the official corporate phone number.
3. **Headquarters Address / GSTIN**: Add registered corporate office address and tax registration number if required on public invoices/enquiries.
