import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { site } from "@/content/site";
import { downloadGroups, downloadItems } from "@/content/downloads";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Brochures and print samples from Vandan Distributors for radiology and diagnostic imaging.",
  alternates: { canonical: "/downloads" },
  openGraph: {
    title: `Downloads | ${site.brand.name}`,
    description: "Brochures and print samples from Vandan Distributors.",
    url: "/downloads",
  },
};

export default function DownloadsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Brochures & print samples"
        description="Download existing product brochures and imaging print samples. For the latest availability, contact our team."
      />

      {downloadGroups.map((group) => {
        const items = downloadItems.filter((item) => item.group === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="medical-section">
            <h2 className="downloads-group-title">{group}</h2>
            <div className="downloads-grid">
              {items.map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.04}>
                  <a href={item.href} className="download-card glossy-card" target="_blank" rel="noopener noreferrer">
                    <span className="download-card__icon" aria-hidden="true">
                      <FileText className="size-5" />
                    </span>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <span className="download-card__cta">Open PDF</span>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>
        );
      })}

      <CTASection
        title="Need a specific brochure or quote?"
        description="WhatsApp, email, or call us and we will share the relevant product information."
      />
    </PageShell>
  );
}
