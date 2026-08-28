import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/partners")({
  head: () =>
    meta(
      "Partners & Ecosystem — Ecom Gleam",
      "Marketplace, distribution, fulfillment, creator and technology partners that extend the Ecom Gleam operating model across digital and physical channels.",
    ),
  component: Partners,
});

const layers = [
  {
    t: "Marketplace & Retail Media",
    b: "Amazon, Walmart, TikTok Shop and Shopify commerce, plus the retail media surfaces attached to them.",
  },
  {
    t: "Distribution & Fulfillment",
    b: "U.S. wholesale networks, retail-chain development, 3PL warehousing, B2B and B2C fulfillment.",
  },
  {
    t: "Creator & Content Networks",
    b: "Creator sourcing, seeding programs, affiliate development and UGC production capacity.",
  },
  {
    t: "Technology & Data",
    b: "Dashboards, integrations, automation, custom storefronts, POS and SaaS development capability.",
  },
  {
    t: "Legal & Compliance Counsel",
    b: "Enforcement is coordinated with the brand's qualified legal counsel; our role is intelligence, control, documentation and marketplace execution.",
  },
  {
    t: "Market Entry Support",
    b: "Country-specific tax, fee, logistics and compliance advisors across the USA, UK and UAE.",
  },
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Ecosystem"
        title="An Operating Ecosystem, Not A Vendor List"
        intro="Brands reach growth faster when intelligence, commerce, distribution and technology are coordinated inside one accountable model."
      />
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-5 md:grid-cols-3 md:px-10">
          {layers.map((l, i) => (
            <Reveal key={l.t} delay={i * 0.05}>
              <div className="panel h-full p-6">
                <h2 className="text-lg font-semibold leading-tight">{l.t}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{l.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="text-sm text-muted-foreground">
              See how the physical layer connects to digital growth in{" "}
              <Link to="/distribution-omnichannel" className="text-primary">
                Distribution & Omnichannel
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
      <DiagnosticCta />
    </>
  );
}
