import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/brand-strategy")({
  head: () =>
    meta(
      "Brand Strategy & Growth Framework — Ecom Gleam",
      "We translate research into a usable brand system: positioning, narrative, messaging architecture, go-to-market and execution playbooks.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="02 — Brand System"
      title="Brand Strategy, Narrative & Marketing Framework"
      intro="A usable brand system, not a presentation deck. The output becomes the strategic logic used by creative, advertising, marketplace, influencer, DTC and retail teams."
      slugs={["brand-strategy", "product-portfolio"]}
    />
  ),
});
