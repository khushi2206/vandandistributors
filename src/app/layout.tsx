import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
import "./site-pages.css";
import "./improvements.css";

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
    template: `%s | ${site.brand.name}`,
  },
  description: site.brand.description,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.brand.title,
    description: site.brand.description,
    images: [{ url: site.brand.ogImage, width: 1200, height: 630, alt: site.brand.name }],
    type: "website",
    locale: "en_IN",
    siteName: site.brand.name,
    url: "/",
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
