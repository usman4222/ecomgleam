import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/site/AboutHero";
import { Reveal } from "@/components/site/Reveal";
import { TeamSection } from "@/components/site/TeamSection";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About & Leadership — Ecom Gleam",
      "An integrated brand growth, commerce and market expansion firm connecting digital intelligence with physical distribution capability at leadership level.",
    ),
  component: About,
});

const principles = [
  { n: "01", t: "Research", b: "Build the evidence base before capital is committed." },
  { n: "02", t: "Position", b: "Turn intelligence into a brand system teams can execute." },
  { n: "03", t: "Build", b: "Operate commerce, media, creative and supply as one system." },
  { n: "04", t: "Control", b: "Govern pricing, sellers, catalog and brand integrity." },
  { n: "05", t: "Expand", b: "Take proven engines to new marketplaces and countries." },
];

function About() {
  return (
    <>
      <AboutHero />

      <section id="ecosystem" className="border-b border-border py-16 md:py-24 bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="eyebrow">The Ecosystem</p>
            <h2 className="display mt-5 text-[11vw] leading-[0.85] md:text-[4.2vw]">
              Ecom Gleam & Patriotic Distributors
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Ecom Gleam is the intelligence, brand and commerce growth firm. Patriotic
                Distributors provides an integrated U.S. model covering distribution, retail-chain
                and wholesale networks, brick-and-mortar placement, trade-show exposure, 3PL
                warehousing and fulfillment.
              </p>
              <p>
                The two businesses are connected at leadership level and operate as one ecosystem
                for brands that need digital demand and physical distribution to reinforce each
                other. They remain distinct companies with distinct positioning.
              </p>
              <p className="text-sm">
                Leadership titles and biographies are published using the final approved details
                supplied by management.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="principles" className="border-b border-border py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">Operating Principles</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className="panel h-full p-6">
                  <span className="font-mono text-xs text-primary">{p.n}</span>
                  <h3 className="display mt-3 text-5xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="leadership">
        <TeamSection overlayText="LEADERSHIP" />
      </div>

      <DiagnosticCta />
    </>
  );
}

