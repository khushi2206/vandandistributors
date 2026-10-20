import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
import "./site-pages.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vandandistributors.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.brand.title,
    template: `%s | Vandan Distributors`,
  },
  description: site.brand.description,
  keywords: [
    "contrast media",
    "x-ray films",
    "dry imaging films",
    "MIPS medical imaging",
    "radiology supplies India",
    "diagnostic films",
    "medical imaging solutions",
    "MRI CT films",
    "radiology consumables",
    "Vandan Distributors",
    "Gujarat radiology supplier",
    "hospital imaging supplies",
    "Lohexol injection",
    "iodinated contrast media",
    "per-print billing radiology",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: site.brand.title,
    description: site.brand.description,
    images: [{ url: site.brand.ogImage, width: 1200, height: 630, alt: site.brand.name }],
    type: "website",
    locale: "en_IN",
    siteName: site.brand.name,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.title,
    description: site.brand.description,
    images: [site.brand.ogImage],
  },
  icons: {
    icon: site.brand.logo,
    apple: site.brand.logo,
  },
  verification: {},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf8" },
    { media: "(prefers-color-scheme: dark)", color: "#294d44" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": siteUrl,
  name: site.brand.name,
  description: site.brand.description,
  url: siteUrl,
  telephone: site.brand.phone,
  email: site.brand.email,
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Second Floor Shop No. 218-221, Heritage Trade Center, Kada Road",
    addressLocality: "Visnagar",
    addressRegion: "Gujarat",
    postalCode: "384315",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.7042",
    longitude: "72.5484",
  },
  hasMap: site.brand.mapsLink,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  image: siteUrl + site.brand.logo,
  priceRange: "₹₹",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [site.brand.mapsLink],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/images/radiology-hero-banner.png"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
