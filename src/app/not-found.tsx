import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="not-found">
        <p className="vandan-eyebrow">Page not found</p>
        <h1>This page is not available.</h1>
        <p>Return to the product catalogue or contact the team for radiology supplies and MIPS enquiries.</p>
        <div className="not-found__actions">
          <Link className="vandan-btn vandan-btn--primary" href="/">
            Back to home
          </Link>
          <Link className="vandan-btn vandan-btn--secondary" href="/products">
            Browse products
          </Link>
          <Link className="vandan-btn vandan-btn--secondary" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
