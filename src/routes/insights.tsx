import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/insights")({
  head: () =>
    meta(
      "Insights — Marketplace, Channel & Expansion Thinking",
      "Perspectives on marketplace research, channel governance, gray-market control, creator commerce and international expansion.",
    ),
  component: Insights,
});

const posts = [
  {
    topic: "Channel Control",
    title: "Why traffic cannot fix a broken Buy Box",
    body: "When multiple sellers compete on the same ASIN, spend amplifies the pricing conflict instead of solving it.",
  },
  {
    topic: "Research",
    title: "Share-of-search as a leading indicator",
    body: "Search demand shifts before revenue does. Measuring share-of-search gives an earlier read on category position.",
  },
  {
    topic: "Expansion",
    title: "Validate → Localize → Launch → Learn → Scale",
    body: "A phased model for taking a proven marketplace engine into the UK and UAE without duplicating spend.",
  },
  {
    topic: "Brand Protection",
    title: "Mapping the gray market before enforcing it",
    body: "Enforcement without source identification removes symptoms. Mapping identifies where leakage originates.",
  },
  {
    topic: "Creative",
    title: "Creative systems beat one-off assets",
    body: "Repeatable creative frameworks compound because each test feeds the next brief.",
  },
  {
    topic: "Media",
    title: "Optimizing to contribution margin, not ACOS",
    body: "ACOS is a channel metric. Contribution margin is a business metric—and they often disagree.",
  },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="How We Think About Growth"
        intro="Working notes from research, channel governance, media and expansion engagements."
      />
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="panel flex h-full flex-col p-6">
                  <span className="eyebrow">{p.topic}</span>
                  <h2 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DiagnosticCta />
    </>
  );
}
