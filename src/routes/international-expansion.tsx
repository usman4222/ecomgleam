import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/international-expansion")({
  head: () =>
    meta(
      "International eCommerce Expansion — USA, UK & UAE",
      "Marketplace-to-marketplace and country-to-country expansion: opportunity scoring, localized demand research, feasibility modeling and phased validation.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="10 — Expansion"
      title="International & Marketplace-to-Marketplace Expansion"
      intro="Prove the commercial engine in the right initial marketplace, then use that evidence to expand intelligently into additional countries. Validate → Localize → Launch → Learn → Scale."
      slugs={["international-expansion"]}
    />
  ),
});
