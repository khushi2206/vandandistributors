import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to know more about Vandan Distributors products."
  )}`;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__grid">
        {/* Brand column */}
        <div className="site-footer__brand">
          <div className="site-footer__brand-lockup">
            <Image src={site.brand.logo} alt={site.brand.name} width={52} height={52} />
            <div>
              <strong>{site.brand.name}</strong>
              <span className="site-footer__tagline">{site.brand.tagline}</span>
            </div>
          </div>
          <p className="site-footer__brand-desc">
            Trusted radiology &amp; medical imaging supplier. Operating since 2007 with contrast media, diagnostic films, and MIPS solutions for hospitals across India.
          </p>
          <div className="site-footer__contact-list">
            <a href={site.brand.phoneHref} className="site-footer__contact-item" aria-label={`Call ${site.brand.phone}`}>
              <Phone className="size-3.5" aria-hidden="true" />
              <span>{site.brand.phone}</span>
            </a>
            <a href={site.brand.emailHref} className="site-footer__contact-item" aria-label={`Email ${site.brand.email}`}>
              <Mail className="size-3.5" aria-hidden="true" />
              <span>{site.brand.email}</span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="site-footer__contact-item site-footer__whatsapp" aria-label="Chat on WhatsApp">
              <MessageCircle className="size-3.5" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
            <div className="site-footer__contact-item site-footer__hours">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
            </div>
          </div>
        </div>

        {/* Company links */}
        <div className="site-footer__col">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Products links */}
        <div className="site-footer__col">
          <h4>Products</h4>
          {site.productNav.map((p) => (
            <Link key={p.href} href={p.href}>
              {p.label}
            </Link>
          ))}
          <Link href="/products">All Products</Link>
        </div>

        {/* Solutions / address */}
        <div className="site-footer__col">
          <h4>Solutions</h4>
          <Link href="/products/printing-solutions">MRI Solution</Link>
          <Link href="/products/printing-solutions">CT Scan Solution</Link>
          <Link href="/products/printing-solutions">Ultrasound Solution</Link>
          <Link href="/products/contrast-media">Contrast Media</Link>
          <Link href="/products/x-ray-films">X-Ray Films (MIPS)</Link>
        </div>
      </div>

      {/* Address */}
      <div className="site-footer__address">
        <MapPin className="size-4 site-footer__address-icon" aria-hidden="true" />
        <address>{site.brand.location}</address>
      </div>

      {/* Bottom bar */}
      <div className="site-footer__bottom">
        <p>© {currentYear} {site.brand.name}. All rights reserved. Operating Since 2007.</p>
        <div className="site-footer__bottom-links">
          <a href={site.brand.mapsLink} target="_blank" rel="noreferrer" aria-label="View office location on Google Maps">
            View on Google Maps
          </a>
          <span className="site-footer__bottom-sep" aria-hidden="true">·</span>
          <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </footer>
  );
}
