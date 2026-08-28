import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/industries")({
  head: () =>
    meta(
      "Industries — Categories We Grow",
      "Beauty, fragrance, supplements, home, consumer electronics, apparel and food brands growing across marketplaces, DTC and retail distribution.",
    ),
  component: Industries,
});

const industries = [
  {
    name: "Beauty & Personal Care",
    body: "Crowded digital shelves, heavy review influence and constant assortment churn.",
  },
  {
    name: "Fragrance",
    body: "Wardrobing, bundling and gray-market exposure across authorized and unauthorized sellers.",
  },
  {
    name: "Health & Supplements",
    body: "Compliance-sensitive claims, subscription economics and retention modeling.",
  },
  {
    name: "Home & Kitchen",
    body: "Variation architecture, seasonality and margin pressure from private-label competitors.",
  },
  {
    name: "Consumer Electronics & Accessories",
    body: "Fast lifecycles, counterfeit risk and price-conflict management.",
  },
  {
    name: "Apparel & Accessories",
    body: "Size/colour catalog complexity, creator-driven demand and returns economics.",
  },
  {
    name: "Food & Beverage",
    body: "Distribution-led growth where retail placement and marketplace demand must align.",
  },
  {
    name: "Pet & Baby",
    body: "High trust thresholds, repeat purchase behaviour and review-quality sensitivity.",
  },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Categories With Real Channel Complexity"
        intro="Our model fits brands where growth depends on demand, pricing, channel control and distribution working together—not on a single ad account."
      />
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-4">
          {industries.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.04}>
              <div className="panel h-full p-6">
                <h2 className="text-lg font-semibold leading-tight">{it.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <DiagnosticCta />
    </>
  );
}
