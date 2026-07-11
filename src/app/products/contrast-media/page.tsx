import type { Metadata } from "next";
import { site } from "@/content/site";
import { contrastProducts, contrastCategories, contrastSpecsTable } from "@/content/contrast-media";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { FlaskConical, PackageCheck, TestTube2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Contrast Media | ${site.brand.name}`,
  description: "Contrast media portfolio - non-ionic, ionic, iso-osmolar, and MRI contrast agents for CT, angiography, and MR imaging.",
};

export default function ContrastMediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vandan Distributors Contrast Media"
        title="Contrast Media"
        description="A carefully curated range of X-ray, CT, MRI, and oral contrast agents supplied under Vandan Distributors for modern diagnostic imaging workflows."
      />

      {contrastCategories.map((cat) => {
        const products = contrastProducts.filter((p) => p.category === cat.id);
        if (products.length === 0) return null;
        return (
          <section key={cat.id} className="medical-section">
            <SectionHeading title={cat.title} description={cat.description} />
            <div className="product-grid">
              {products.map((p, i) => (
                <ProductCard
                  key={p.id}
                  title={p.name}
                  description={p.description}
                  image={p.image}
                  category={p.subcategory}
                  tags={[p.activeIngredient, ...(p.iodineConc ? [p.iodineConc] : []), ...p.packs.slice(0, 2)]}
                  brochure={p.brochure}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="medical-section medical-section--alt">
        <SectionHeading
          title="Product specifications"
          description="Detailed concentration and pack size reference for contrast media products available through Vandan Distributors."
        />
        <FadeIn>
          <div className="spec-card-grid">
            {contrastSpecsTable.map((row) => (
              <Card key={`${row.product}-${row.ingredient}-${row.iodine}`} className="spec-card glossy-card border-0 ring-0">
                <CardContent className="spec-card__content">
                  <div className="spec-card__header">
                    <span className="spec-card__icon"><TestTube2 className="size-5" /></span>
                    <div>
                      <h3>{row.product}</h3>
                      <p>{row.ingredient}</p>
                    </div>
                  </div>
                  <div className="spec-card__meta">
                    <div>
                      <FlaskConical className="size-4" />
                      <span>Concentration</span>
                      <strong>{row.iodine}</strong>
                    </div>
                    <div>
                      <PackageCheck className="size-4" />
                      <span>Pack sizes</span>
                      <strong>{row.pack}</strong>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <CTASection title="Need contrast media for your facility?" description="Contact us for pricing, availability, and bulk supply quotes for contrast media products." />
    </PageShell>
  );
}


