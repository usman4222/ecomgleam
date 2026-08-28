import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CapabilityDetail, DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";
import { capabilities } from "@/data/capabilities";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    meta(
      "Capabilities — Ecom Gleam Brand Growth & Commerce",
      "Research intelligence, brand strategy, marketplace growth, performance media, creative systems, channel control, expansion and distribution—one integrated operating model.",
    ),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="One Integrated Operating Model"
        intro="Ecom Gleam combines research intelligence, brand strategy, marketplace execution, performance media, creative systems, channel control and expansion into one operating model."
      />
      {capabilities.map((cap) => (
        <div key={cap.slug} id={cap.slug} className="scroll-mt-24">
          <CapabilityDetail cap={cap} />
        </div>
      ))}
      <DiagnosticCta />
    </>
  );
}
