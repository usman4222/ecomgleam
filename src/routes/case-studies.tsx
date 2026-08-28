import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { meta } from "@/components/site/CapabilityGroupPage";
import { caseStudyLens, caseFilters } from "@/data/capabilities";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    meta(
      "Case Studies — Evidence-Led Brand Growth",
      "How Ecom Gleam thinks: situation, diagnosis, strategic framework, execution, control, outcome and the expansion the learning unlocked.",
    ),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="16 — Case Studies"
        title="Evidence, Not Screenshots"
        intro="Case studies should show how a brand problem was diagnosed and solved—not simply a revenue graph. Every study follows the same seven-part structure."
      />

      <section className="border-b border-border py-14">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2 px-5 md:px-10">
          {caseFilters.map((f, i) => (
            <Reveal key={f} delay={i * 0.04} y={12}>
              <span className="inline-flex rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {f}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {caseStudyLens.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.04} y={18}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-border py-7 md:grid-cols-[6rem_1fr_1.2fr] md:gap-10">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-[9vw] leading-none md:text-[3.2vw]">{c.label}</h2>
                <p className="col-span-2 text-sm text-muted-foreground md:col-span-1 md:text-base">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="panel mt-10 p-6 text-sm text-muted-foreground">
              Published studies are released with client approval and verified KPIs.{" "}
              <Link to="/contact" className="text-primary">
                Request the current case study pack
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <DiagnosticCta title="Bring Us The Brand Problem" body="Tell us the situation and we will show you the diagnostic path." />
    </>
  );
}
