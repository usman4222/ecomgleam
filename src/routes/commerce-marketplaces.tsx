import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/commerce-marketplaces")({
  head: () =>
    meta(
      "Commerce & Marketplaces — Amazon Brand Management Agency",
      "Amazon, Walmart, TikTok Shop and Shopify management built around discoverability, conversion, profitability, brand consistency and channel health.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="03 — Commerce"
      title="Marketplace Growth & Digital Shelf Management"
      intro="End-to-end marketplace operations across Amazon, Walmart, TikTok Shop and DTC—run as one commercial system rather than a set of disconnected accounts."
      slugs={["commerce-marketplaces", "creator-social-commerce"]}
    />
  ),
});
