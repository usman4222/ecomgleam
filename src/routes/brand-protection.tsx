import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/brand-protection")({
  head: () =>
    meta(
      "Brand Protection & Channel Control — Gray Market & Buy Box",
      "Pricing architecture, MAP governance, Buy Box diagnostics, unauthorized seller monitoring and gray-market control for multi-channel brands.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="07 / 08 — Control"
      title="Pricing, Channel Governance & Brand Protection"
      intro="For brands selling through multiple sellers and channels, growth depends on controlling the commercial ecosystem—not simply increasing traffic."
      slugs={["channel-control", "brand-protection"]}
    />
  ),
});
