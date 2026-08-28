import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/research-intelligence")({
  head: () =>
    meta(
      "Research & Intelligence — Marketplace Competitive Research",
      "Category, demand, competitor and digital shelf research that becomes the intelligence layer behind positioning, media, pricing and expansion decisions.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="01 — Intelligence Layer"
      title="Research, Intelligence & Opportunity Mapping"
      intro="Before execution, we build an evidence base for the brand—market, customer, competition, channel economics and demand—so capital is only scaled behind proof."
      slugs={["research-intelligence", "data-analytics"]}
    />
  ),
});
