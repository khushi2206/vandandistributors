import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/content/site";
import { generalEnquiryUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappHref = generalEnquiryUrl();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__brand-lockup">
            <Image src={site.brand.logo} alt="" width={52} height={52} />
            <div>
              <strong>{site.brand.name}</strong>
              <span className="site-footer__tagline">{site.brand.tagline}</span>
            </div>
          </div>
          <p className="site-footer__brand-desc">
            Radiology and medical imaging supplier operating since 2007. Contrast media, diagnostic films, and MIPS solutions for hospitals and diagnostic centres.
          </p>
          <div className="site-footer__contact-list">
            <a href={site.brand.phoneHref} className="site-footer__contact-item">
              <Phone className="size-3.5" aria-hidden="true" />
              <span>{site.brand.phone}</span>
            </a>
            <a href={site.brand.emailHref} className="site-footer__contact-item">
              <Mail className="size-3.5" aria-hidden="true" />
              <span>{site.brand.email}</span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="site-footer__contact-item site-footer__whatsapp">
              <MessageCircle className="size-3.5" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
            <div className="site-footer__contact-item site-footer__hours">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
            </div>
          </div>
        </div>

        <div className="site-footer__col">
          <h2>Company</h2>
          <Link href="/about">About Us</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="site-footer__col">
          <h2>Products</h2>
          {site.productNav.map((product) => (
            <Link key={product.href} href={product.href}>
              {product.label}
            </Link>
          ))}
          <Link href="/products">All Products</Link>
        </div>

        <div className="site-footer__col">
          <h2>Contact</h2>
          <a href={site.brand.phoneHref}>{site.brand.phone}</a>
          <a href={site.brand.emailHref}>{site.brand.email}</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>
          <a href={site.brand.mapsLink} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
      </div>

      <div className="site-footer__address">
        <MapPin className="size-4 site-footer__address-icon" aria-hidden="true" />
        <address>{site.brand.location}</address>
      </div>

      <div className="site-footer__bottom">
        <p>© {currentYear} {site.brand.name}. All rights reserved. Operating since 2007.</p>
        <div className="site-footer__bottom-links">
          <a href={site.brand.mapsLink} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
          <span className="site-footer__bottom-sep" aria-hidden="true">·</span>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </footer>
  );
}
