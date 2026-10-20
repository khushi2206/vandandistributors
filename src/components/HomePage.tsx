"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  BadgeCheck,
  CheckCircle2,
  HeartPulse,
  Mail,
  MessageCircle,
  Phone,
  Printer,
  ScanLine,
  ShieldCheck,
  Star,
  Truck,
  Award,
  Clock,
  MapPin,
  Quote,
} from "lucide-react";
import { productCategories } from "@/content/products";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

const printImages = {
  heroPrimary: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM.jpeg",
  printMedia: "/images/products/20250913_131833.jpg.jpeg",
  contrastPrint: "/images/contrast-media/lohexol-injection-usp-300-mg-100-ml.jpg",
  filmPack: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM.jpeg",
  xrayPrint: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM-1.jpeg",
  filmOutput: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM-2.jpeg",
  printSheet: "/images/products/WhatsApp-Image-2026-06-02-at-10.04.29-PM.jpeg",
  printDetail: "/images/products/WhatsApp-Image-2026-06-02-at-10.04.30-PM.jpeg",
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const partnerStats = [
  { value: "2007", label: "Operating Since" },
  { value: "MIPS", label: "Per-print model" },
  { value: "MRI / CT / X-Ray", label: "Workflow coverage" },
  { value: "Pan India", label: "Supply support" },
];

const trustBadges = [
  { icon: Clock, label: "Since 2007", sub: "17+ years experience" },
  { icon: MapPin, label: "Pan India Delivery", sub: "All major states" },
  { icon: Award, label: "Healthcare Trusted", sub: "Hospitals & clinics" },
  { icon: ShieldCheck, label: "Quality Assured", sub: "Diagnostic-grade" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Healthcare-first reliability",
    copy: "A radiology-focused catalogue for departments where product quality and supply timing directly affect daily operations.",
  },
  {
    icon: ScanLine,
    title: "Modality-aware guidance",
    copy: "Support across MRI, CT, X-ray, ultrasound, PET-CT, contrast media, films, and printing workflows.",
  },
  {
    icon: Printer,
    title: "Cost-controlled MIPS",
    copy: "Printer, software, ink, media, service, and maintenance available through a practical per-print model.",
  },
  {
    icon: Truck,
    title: "Responsive distribution",
    copy: "Fast enquiry handling, clear product recommendations, and dependable procurement support for healthcare buyers.",
  },
];

const featuredProducts = [
  {
    title: "Dry Imaging Films",
    tag: "X-Ray Films",
    copy: "Diagnostic film supply for clear grayscale output and reliable clinical presentation.",
    image: printImages.xrayPrint,
    href: "/products/x-ray-films",
    accent: "#294d44",
  },
  {
    title: "MRI / CT Solution",
    tag: "Solutions",
    copy: "Imaging output support for multimodality diagnostic centres.",
    image: printImages.printMedia,
    href: "/products/printing-solutions",
    accent: "#b38a4d",
  },
  {
    title: "Contrast Media Portfolio",
    tag: "Contrast",
    copy: "CT, MRI, angiography, oral, and procedural contrast requirements.",
    image: printImages.contrastPrint,
    href: "/products/contrast-media",
    accent: "#496d62",
  },
];

const categoryPrintImages: Record<string, string> = {
  "contrast-media": printImages.contrastPrint,
  "x-ray-films": printImages.filmPack,
  "other-products": printImages.printSheet,
  "printing-solutions": printImages.printMedia,
};

const printingHighlights = [
  "No capital expense",
  "Per-print billing",
  "Software, ink, media, and service included",
  "MRI, CT, ultrasound, X-ray, and PET-CT workflows",
];

const manufacturers = [
  "Agfa", "Fujifilm", "Carestream", "Kodak", "Bayer", "GE Healthcare",
  "Bracco", "Guerbet", "Siemens Healthineers", "Konica Minolta",
];

// Duplicate for infinite marquee
const manufacturersRow1 = [...manufacturers, ...manufacturers];
const manufacturersRow2 = [...manufacturers.slice(5), ...manufacturers.slice(0, 5), ...manufacturers.slice(5), ...manufacturers.slice(0, 5)];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function HomePage() {

  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I want a product consultation for Vandan Distributors."
  )}`;

  return (
    <div className="vandan-home">
      {/* ── Hero ── */}
      <section className="vandan-hero" aria-label="Vandan Distributors homepage hero">
        <div className="vandan-hero__banner">
          <Image
            src="/images/radiology-hero-banner.png"
            alt="Vandan Distributors – Radiology & Medical Imaging Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="vandan-hero__veil" />
          <div className="vandan-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="vandan-eyebrow">{site.hero.eyebrow}</p>
              <h1>{site.hero.headline}</h1>
              <p>{site.hero.lede}</p>
              <div className="vandan-hero__actions">
                <a className="vandan-btn vandan-btn--whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Request Consultation
                </a>
                <Link className="vandan-btn vandan-btn--secondary" href="/products">
                  Explore Products
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          {/* Scroll indicator */}
          <motion.div
            className="vandan-hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            aria-hidden="true"
          >
            <ArrowDown className="size-4" />
          </motion.div>
        </div>
      </section>

      {/* ── Trust Badges Strip ── */}
      <section className="vandan-trust" aria-label="Trust indicators">
        <div className="vandan-trust__inner">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className="vandan-trust__badge"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="vandan-trust__badge-icon" aria-hidden="true">
                  <Icon className="size-4" />
                </span>
                <span className="vandan-trust__badge-text">
                  <strong>{badge.label}</strong>
                  <small>{badge.sub}</small>
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Partner / Stats ── */}
      <section className="vandan-partner">
        <motion.div className="vandan-partner__intro" {...reveal}>
          <p className="vandan-eyebrow">Trusted healthcare partner</p>
          <h2>Vandan Distributors supports the imaging teams behind accurate diagnoses.</h2>
          <p>
            We specialize in radiology, diagnostic imaging products, X-ray films, contrast media,
            and medical solutions for doctors, radiologists, hospitals, and diagnostic centres.
          </p>
          <Link className="vandan-btn vandan-btn--primary" href="/about">
            Learn about us
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
        <div className="vandan-stat-grid">
          {partnerStats.map((item, index) => (
            <motion.div className="vandan-stat-card" key={item.label} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="vandan-section">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Product categories</p>
          <h2>A focused portfolio for radiology procurement.</h2>
          <p>Clear category paths for healthcare buyers who need dependable products and quick guidance.</p>
        </motion.div>
        <div className="vandan-category-grid">
          {productCategories.map((category, index) => (
            <motion.article className="vandan-category-card" key={category.slug} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <Link href={category.href}>
                <div className="vandan-category-card__image">
                  <Image src={categoryPrintImages[category.slug] ?? printImages.heroPrimary} alt={category.title} fill sizes="(max-width: 900px) 100vw, 25vw" className="object-cover" />
                  <div className="vandan-category-card__overlay" />
                </div>
                <div className="vandan-category-card__body">
                  <span className="vandan-category-card__tag">{category.tag}</span>
                  <h3>{category.title.replace("Vandan Distributors", "Medical")}</h3>
                  <p>{category.description}</p>
                  <small>View category <ArrowRight className="size-4" /></small>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="vandan-section vandan-section--soft">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Why choose us</p>
          <h2>Professional support built around real imaging workflows.</h2>
        </motion.div>
        <div className="vandan-reason-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article className="vandan-reason-card" key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <span aria-hidden="true" className="vandan-reason-card__icon"><Icon className="size-5" /></span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="vandan-reason-card__bar" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="vandan-section">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Featured products</p>
          <h2>High-priority supplies for diagnostic centres and hospitals.</h2>
        </motion.div>
        <div className="vandan-featured-grid">
          {featuredProducts.map((item, index) => (
            <motion.article
              className="vandan-featured-card"
              key={item.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              style={{ "--card-accent": item.accent } as React.CSSProperties}
            >
              <Link href={item.href}>
                <div className="vandan-featured-card__image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-contain p-4" />
                </div>
                <div className="vandan-featured-card__body">
                  <span className="vandan-featured-card__tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="vandan-featured-card__cta">
                    View details <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div className="vandan-section__more" {...reveal}>
          <Link href="/products" className="vandan-btn vandan-btn--secondary">
            View all products
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── Mid-page Conversion CTA ── */}
      <motion.div className="vandan-midcta" {...reveal}>
        <span className="vandan-midcta__icon" aria-hidden="true"><HeartPulse className="size-6" /></span>
        <p className="vandan-eyebrow">Get a free quote today</p>
        <h2>Tell us your modality — we&apos;ll respond within 24 hours.</h2>
        <p>Share your print volume, film size, or contrast requirement and get a tailored quote.</p>
        <div className="vandan-midcta__actions">
          <a className="vandan-btn vandan-btn--whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" />
            WhatsApp for a Quote
          </a>
          <a className="vandan-btn vandan-btn--ghost" href={site.brand.emailHref}>
            <Mail className="size-4" />
            Email Enquiry
          </a>
          <a className="vandan-btn vandan-btn--ghost" href={site.brand.phoneHref}>
            <Phone className="size-4" />
            Call Us
          </a>
        </div>
      </motion.div>

      {/* ── Printing/MIPS Solution ── */}
      <section className="vandan-printing">
        <motion.div className="vandan-printing__media" {...reveal}>
          <Image
            src={printImages.printMedia}
            alt="Medical imaging solution presentation"
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div className="vandan-printing__copy" {...reveal}>
          <p className="vandan-eyebrow">Healthcare solutions</p>
          <h2>Professional medical solutions without the capital burden.</h2>
          <p>
            Vandan Distributors MIPS brings printer, software, ink, media, maintenance, and service
            into one dependable workflow for MRI, CT, ultrasound, X-ray, and PET-CT output.
          </p>
          <div className="vandan-printing__list">
            {printingHighlights.map((item) => (
              <span key={item}><BadgeCheck className="size-4" />{item}</span>
            ))}
          </div>
          <Link className="vandan-btn vandan-btn--primary" href="/products/printing-solutions">
            View solutions
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── Manufacturer Brands Marquee ── */}
      <section className="vandan-brands" aria-label="Brands and manufacturers we work with">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Brands we work with</p>
          <h2>Trusted manufacturer partnerships across imaging modalities.</h2>
        </motion.div>
        <div className="vandan-brands__marquee-wrap" aria-hidden="true">
          <div className="vandan-brands__marquee">
            <div className="vandan-brands__track vandan-brands__track--ltr">
              {manufacturersRow1.map((brand, i) => (
                <span key={i} className="vandan-brands__chip">
                  <CheckCircle2 className="size-3.5" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="vandan-brands__marquee">
            <div className="vandan-brands__track vandan-brands__track--rtl">
              {manufacturersRow2.map((brand, i) => (
                <span key={i} className="vandan-brands__chip">
                  <CheckCircle2 className="size-3.5" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="vandan-section vandan-section--soft">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Customer testimonials</p>
          <h2>Trusted by imaging departments and healthcare buyers.</h2>
        </motion.div>
        <div className="vandan-testimonial-grid">
          {testimonials.slice(0, 4).map((item, index) => (
            <motion.article className="vandan-testimonial-card" key={item.id} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
              <div className="vandan-testimonial-card__quote-icon" aria-hidden="true">
                <Quote className="size-5" />
              </div>
              <div className="vandan-testimonial-card__stars" aria-label="Five star rating">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="size-3.5" fill="currentColor" />)}
              </div>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <div className="vandan-testimonial-card__author">
                <span className="vandan-testimonial-card__avatar" aria-hidden="true">
                  {getInitials(item.author)}
                </span>
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}, {item.facility}</span>
                  {item.modality && <span className="vandan-testimonial-card__loc">{item.modality}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div className="vandan-testimonials__more" {...reveal}>
          <Link href="/testimonials" className="vandan-btn vandan-btn--secondary">
            Read all testimonials
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── Final CTA ── */}
      <section className="vandan-cta">
        <motion.div className="vandan-cta__panel" {...reveal}>
          <span className="vandan-cta__icon" aria-hidden="true"><HeartPulse className="size-6" /></span>
          <p className="vandan-eyebrow">Contact Vandan Distributors</p>
          <h2>Need radiology films, contrast media, consumables, or a MIPS quotation?</h2>
          <p>
            Tell us your modality, monthly print volume, film size, or contrast requirement.
            We will help you choose the right product path.
          </p>
          <div className="vandan-cta__actions">
            <a className="vandan-btn vandan-btn--whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a className="vandan-btn vandan-btn--secondary" href={site.brand.emailHref}>
              <Mail className="size-4" />
              Email inquiry
            </a>
            <a className="vandan-btn vandan-btn--secondary" href={site.brand.phoneHref}>
              <Phone className="size-4" />
              {site.brand.phone}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Floating consult buttons ── */}
      <div className="floating-consult" aria-label="Quick contact shortcuts">
        <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp consultation" className="floating-consult__whatsapp">
          <MessageCircle className="size-5" />
          <span className="floating-consult__tooltip">WhatsApp Us</span>
        </a>
        <a href={site.brand.phoneHref} aria-label="Call us" className="floating-consult__phone">
          <Phone className="size-5" />
          <span className="floating-consult__tooltip">Call Us</span>
        </a>
      </div>

      {/* ── Sticky enquiry side tab (desktop) ── */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="vandan-side-tab"
        aria-label="Quick WhatsApp enquiry"
      >
        <MessageCircle className="size-4" />
        <span>Quick Enquiry</span>
      </a>

      {/* ── Mobile sticky CTA bar ── */}
      <div className="vandan-mobile-sticky" role="complementary" aria-label="Mobile quick contact">
        <a href={site.brand.phoneHref} className="vandan-mobile-sticky__btn vandan-mobile-sticky__btn--phone">
          <Phone className="size-4" />
          Call Us
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="vandan-mobile-sticky__btn vandan-mobile-sticky__btn--wa">
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
        <a href={site.brand.emailHref} className="vandan-mobile-sticky__btn vandan-mobile-sticky__btn--email">
          <Mail className="size-4" />
          Email
        </a>
      </div>
    </div>
  );
}
