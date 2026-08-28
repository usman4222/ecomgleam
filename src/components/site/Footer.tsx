import { Link } from "@tanstack/react-router";
import logo from "@/assets/ecomgleam-logo.png.asset.json";

const columns = [
  {
    title: "Capabilities",
    links: [
      { to: "/research-intelligence", label: "Research & Intelligence" },
      { to: "/brand-strategy", label: "Brand Strategy" },
      { to: "/commerce-marketplaces", label: "Commerce & Marketplaces" },
      { to: "/performance-creative", label: "Performance & Creative" },
    ],
  },
  {
    title: "Control & Scale",
    links: [
      { to: "/brand-protection", label: "Brand Protection & Channel Control" },
      { to: "/international-expansion", label: "International Expansion" },
      { to: "/distribution-omnichannel", label: "Distribution & Omnichannel" },
      { to: "/capabilities", label: "All Capabilities" },
    ],
  },
  {
    title: "Firm",
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/industries", label: "Industries" },
      { to: "/insights", label: "Insights" },
      { to: "/about", label: "About / Leadership" },
      { to: "/partners", label: "Partners & Ecosystem" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <p className="display text-[13vw] leading-[0.8] text-foreground/90 md:text-[9vw]">
          Research. Position. Build. Control. Expand.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <img src={logo.url} alt="Ecom Gleam" className="h-8 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An integrated Brand Growth, Commerce & Market Expansion firm operating across the
              United States, United Kingdom and United Arab Emirates.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow">{col.title}</h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ecom Gleam</span>
          <span>USA · UK · UAE</span>
          <Link to="/contact" className="text-primary">
            Request a Brand Diagnostic
          </Link>
        </div>
      </div>
    </footer>
  );
}
