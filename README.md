# Vandan Distributors — Website

Production website for **Vandan Distributors** (radiology print & imaging workflow materials).

Built with **Next.js + React**.

## Folder layout

```
├── src/                 App routes, components, content
├── public/              Site images & PDF downloads
├── assets/              Source PDFs & images (synced into public/)
└── scripts/             Asset sync utilities
```

## Quick start

```powershell
npm install
npm run dev
```

Open **http://localhost:3000**

## Production

```powershell
npm run build
npm start
```

## Edit content

Update **`src/content/site.ts`** — brand name, hero text, contact details, product info, etc.

## Sync assets from source files

```powershell
npm run sync:assets
```

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home |
| `/about` | About Vandan Distributors |
| `/products` | Product catalogue |
| `/products/contrast-media` | Contrast media |
| `/products/x-ray-films` | X-ray films |
| `/products/other-products` | Other products |
| `/products/printing-solutions` | Accurate printing solutions |
| `/testimonials` | Customer testimonials |
| `/contact` | Contact form |
| `/downloads` | Brochures & PDFs |

## Deploy (Vercel)

Connect this repo to Vercel — Next.js is auto-detected at the repo root. No custom output directory needed.

Optional env var: `NEXT_PUBLIC_SITE_URL` = your production URL.
