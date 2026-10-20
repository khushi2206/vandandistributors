import { AmbientBackground } from "@/components/AmbientBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="medical-site">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AmbientBackground />
      <SiteHeader />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
