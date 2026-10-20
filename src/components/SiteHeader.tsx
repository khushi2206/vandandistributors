"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X, ChevronDown, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setProductsOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimerRef.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to know more about Vandan Distributors products."
  )}`;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={cn("site-header", scrolled && "site-header--scrolled")} role="banner">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" onClick={() => setMobileOpen(false)} aria-label="Vandan Distributors – Home">
          <Image
            src={site.brand.logo}
            alt={site.brand.name}
            width={44}
            height={44}
            priority
            className="site-brand__logo"
          />
          <span className="site-brand__text">
            <strong>{site.brand.shortName}</strong>
            <small>{site.brand.tagline}</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {site.nav.map((item) =>
            item.href === "/products" ? (
              <div
                key={item.href}
                className="site-nav__dropdown"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className={cn("site-nav__link", isActive(item.href) && "site-nav__link--active")}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                >
                  {item.label}
                  <ChevronDown className={cn("size-3.5 opacity-60 transition-transform duration-200", productsOpen && "rotate-180")} />
                </Link>
                {productsOpen && (
                  <div
                    className="site-nav__menu"
                    role="menu"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link href="/products" role="menuitem" onClick={() => setProductsOpen(false)}>All Products</Link>
                    {site.productNav.map((p) => (
                      <Link key={p.href} href={p.href} role="menuitem" onClick={() => setProductsOpen(false)}>
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn("site-nav__link", isActive(item.href) && "site-nav__link--active")}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="site-header__actions">
          <a
            href={site.brand.phoneHref}
            className="site-header__phone"
            aria-label={`Call us at ${site.brand.phone}`}
          >
            <Phone className="size-3.5" />
            <span>{site.brand.phone}</span>
          </a>
          <Button
            render={
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
                <MessageCircle className="size-4" data-icon="inline-start" />
                WhatsApp Us
              </a>
            }
            size="lg"
            className="site-header__cta hidden cursor-pointer sm:inline-flex"
          />
          <button
            type="button"
            className="site-header__menu-btn"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="site-mobile-nav__backdrop"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={cn("site-mobile-nav", mobileOpen && "site-mobile-nav--open")}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="site-mobile-nav__inner">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn("site-mobile-nav__link", isActive(item.href) && "site-mobile-nav__active")}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="site-mobile-nav__divider" />
          <p className="site-mobile-nav__section-label">Products</p>
          {site.productNav.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="site-mobile-nav__sub">
              {p.label}
            </Link>
          ))}
          <div className="site-mobile-nav__divider" />
          <a href={site.brand.phoneHref} className="site-mobile-nav__phone">
            <Phone className="size-4" />
            {site.brand.phone}
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="site-mobile-nav__whatsapp">
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
          <div className="site-mobile-nav__hours">
            <span>Mon – Sat</span>
            <span>9:30 AM – 6:30 PM</span>
          </div>
        </div>
      </div>
    </header>
  );
}
