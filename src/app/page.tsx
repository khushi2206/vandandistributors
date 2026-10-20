import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { HomePage } from "@/components/HomePage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.brand.title },
  description: site.brand.description,
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <PageShell>
      <HomePage />
    </PageShell>
  );
}
