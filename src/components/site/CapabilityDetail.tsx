import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import type { Capability } from "@/data/capabilities";

export function CapabilityDetail({ cap }: { cap: Capability }) {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <span className="display text-[7rem] leading-none text-primary/25">{cap.num}</span>
            <h2 className="mt-2 max-w-[14ch] text-2xl font-semibold leading-tight md:text-3xl">
              {cap.title}
            </h2>
          </Reveal>
          <div>
            {cap.intro && (
              <Reveal>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {cap.intro}
                </p>
              </Reveal>
            )}
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {cap.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.03} y={16}>
                  <span className="flex gap-3 border-b border-border/70 py-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
            {cap.note && (
              <Reveal>
                <p className="panel mt-8 p-5 text-sm leading-relaxed text-muted-foreground">
                  {cap.note}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DiagnosticCta({
  title = "Start With Intelligence",
  body = "We begin every engagement with an evidence base: market, customer, competition, channel economics and the brand problem.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="veil py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-[14vw] leading-[0.82] md:text-[7vw]">{title}</h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">{body}</p>
          <Link
            to="/contact"
            className="mt-9 inline-flex rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request a Brand Diagnostic
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
