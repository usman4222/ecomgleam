import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/performance-creative")({
  head: () =>
    meta(
      "Performance Media & Creative Systems — Ecom Gleam",
      "Amazon Ads, DSP, Google, Meta and TikTok media managed against contribution margin, paired with creative systems built from customer insight.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="04 / 05 — Demand & Creative"
      title="Performance Media & Creative Intelligence"
      intro="Media is managed as part of the commercial system, not as an isolated ad account—and creative is a repeatable system connecting brand storytelling with conversion."
      slugs={["performance-media", "creative-systems"]}
    />
  ),
});
