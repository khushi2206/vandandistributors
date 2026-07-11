import type { Metadata } from "next";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Testimonials | ${site.brand.name}`,
  description: "Customer testimonials from hospitals, diagnostic centres, and healthcare buyers across India.",
};

export default function GoogleReviewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customer Testimonials"
        title="Trusted by healthcare buyers across India"
        description="Feedback from hospitals, diagnostic centres, and radiology teams who rely on Vandan Distributors for contrast media, films, and MIPS solutions."
      />

      <section className="medical-section">
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}


