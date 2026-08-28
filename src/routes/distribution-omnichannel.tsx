import { createFileRoute } from "@tanstack/react-router";
import { CapabilityGroupPage, meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/distribution-omnichannel")({
  head: () =>
    meta(
      "Distribution & Omnichannel Growth — Online to Offline",
      "Connecting digital demand with U.S. wholesale, retail placement, 3PL warehousing and fulfillment through the Ecom Gleam and Patriotic Distributors ecosystem.",
    ),
  component: () => (
    <CapabilityGroupPage
      eyebrow="11 / 12 — Physical Market"
      title="Omnichannel Growth & Distribution Infrastructure"
      intro="Digital demand and physical distribution should strengthen each other. Online intelligence connects to U.S. wholesale, retail, warehousing and fulfillment capability."
      slugs={["omnichannel", "distribution-infrastructure", "technology-automation"]}
    />
  ),
});
