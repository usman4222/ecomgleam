import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { DiagnosticCta } from "@/components/site/CapabilityDetail";
import { capabilities, engagementModels, caseStudyLens } from "@/data/capabilities";
import heroImg from "@/assets/hero-intelligence.jpg";
import { RoundCarousel } from "@/components/site/RoundCarousel";
import { ThreeHero } from "@/components/site/ThreeHero";
import { AboutSection } from "@/components/site/AboutSection";
import { MissionSection } from "@/components/site/MissionSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { OrbitProjects } from "@/components/site/OrbitProjects";
import { Button } from "@/components/ui/button";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecom Gleam — Brand Growth, Commerce & Market Expansion" },
      {
        name: "description",
        content:
          "Intelligence before execution. We research, position, build, operate, protect and scale brands across marketplaces, DTC and physical distribution in the USA, UK and UAE.",
      },
      {
        property: "og:title",
        content: "Ecom Gleam — Intelligence Before Execution",
      },
      {
        property: "og:description",
        content:
          "An integrated brand growth, commerce and market expansion firm. Research. Position. Build. Control. Expand.",
      },
    ],
  }),
  component: Home,
});

const pipeline = [
  "Research Intelligence",
  "Brand System",
  "Demand",
  "Commerce",
  "Channel Control",
  "International Scale",
];

const markets = [
  { code: "USA", body: "Marketplace, DTC, wholesale and retail infrastructure." },
  { code: "UK", body: "Localized demand, assortment and marketplace expansion." },
  { code: "UAE", body: "Regional market entry, pricing feasibility and creator commerce." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-start overflow-hidden pt-12">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10 pointer-events-none flex flex-col">

          <h1 className="relative z-20 display mt-0 text-[19vw] leading-[1.0] md:text-[21.5vw] w-full">
            <span className="block w-full overflow-hidden pb-[6vw]">
              <motion.span
                initial={{ y: "-115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="flex w-full justify-between"
              >
                {[
                  { char: "E", scale: 1.2 },
                  { char: "C", scale: 1.4 },
                  { char: "O", scale: 1.3 },
                  { char: "M", scale: 1.2 },
                  { char: "G", scale: 1.4 },
                  { char: "L", scale: 1.0 },
                  { char: "E", scale: 1.2 },
                  { char: "A", scale: 1.4 },
                  { char: "M", scale: 1.2 },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block"
                    style={{
                      transform: `scaleY(${item.scale})`,
                      transformOrigin: "top",
                    }}
                  >
                    {item.char}
                  </span>
                ))}
              </motion.span>
            </span>
          </h1>

          {/* Description (left side) and Buttons (right side) split grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-8 md:gap-16 items-end w-full mt-[12vh] md:mt-[16vh] pb-12">
            {/* Left Column: Left-aligned description (z-20 behind z-30 cards) */}
            <div className="relative z-20 text-left">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-base leading-relaxed text-muted-foreground/95 md:text-lg max-w-xl font-sans text-left"
              >
                We research, position, build, operate, protect and scale brands across digital
                marketplaces, DTC and physical distribution—from the USA to the UK, UAE and beyond.
              </motion.p>
            </div>

            {/* Right Column: CTA Buttons (z-40 pointer-events-auto in front of z-30 cards) */}
            <div className="relative z-40 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex flex-col sm:flex-row md:flex-col gap-4 justify-end items-stretch md:items-end w-full"
              >
                <Button asChild className="rounded-none w-full md:w-auto h-14 bg-primary text-zinc-950 border-none hover:bg-primary/90 hover:scale-[1.02] transition-all before:hidden">
                  <Link to="/contact">Build Your Growth System</Link>
                </Button>
                <Button asChild className="rounded-none border-2 border-white text-white before:bg-white hover:text-black bg-black/30 backdrop-blur-[2px] w-full md:w-auto h-14">
                  <Link to="/capabilities">Explore Our Capabilities</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <ThreeHero />
      </section>

      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <WhyChooseUs />
      <OrbitProjects />

      {/* Pipeline marquee */}
      <section className="overflow-hidden border-y border-border bg-[var(--ink)] py-5">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10">
              {pipeline.map((p) => (
                <span
                  key={p + k}
                  className="flex items-center gap-10 text-xs uppercase tracking-[0.28em] text-muted-foreground"
                >
                  {p}
                  <span className="h-1 w-1 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </section>

      {/* Positioning */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[0.9fr_1.3fr] md:px-10">
          <Reveal>
            <p className="eyebrow">The Positioning</p>
            <h2 className="display mt-5 text-[13vw] leading-[0.82] md:text-[5.5vw]">
              Most agencies start with a channel. We start with the business problem.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Ecom Gleam is not another Amazon, PPC or digital marketing agency. We are an
                integrated Brand Growth, Commerce & Market Expansion firm.
              </p>
              <p>
                We work from the intelligence layer upward: understanding the market, customer,
                competition, channel economics and brand problem first; building the brand narrative
                and growth framework second; then executing across commerce, media, creative,
                operations, channel governance and international expansion.
              </p>
              <p className="text-foreground">
                Primary markets: United States, United Kingdom and United Arab Emirates—with a model
                designed to expand successful brands marketplace-to-marketplace and
                country-to-country.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {markets.map((m) => (
                <div key={m.code} className="panel p-5">
                  <span className="display text-5xl text-primary">{m.code}</span>
                  <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities index */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="display mt-5 text-[14vw] leading-[0.82] md:text-[6.5vw]">
              One Operating Model
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-border">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.slug} delay={i * 0.02} y={18}>
                <Link
                  to="/capabilities"
                  hash={cap.slug}
                  className="group flex items-baseline gap-5 border-b border-border py-6 transition-colors hover:bg-surface/50 md:gap-10 md:px-4"
                >
                  <span className="font-mono text-xs text-primary">{cap.num}</span>
                  <span className="display flex-1 text-[9vw] leading-none transition-colors group-hover:text-primary md:text-[3.4vw]">
                    {cap.short}
                  </span>
                  <span className="hidden max-w-md text-sm text-muted-foreground lg:block">
                    {cap.intro ?? cap.items.slice(0, 3).join(" · ")}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case study lens */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">Case Studies</p>
            <h2 className="display mt-5 max-w-[16ch] text-[12vw] leading-[0.82] md:text-[5vw]">
              Evidence-led, not screenshots of revenue
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {caseStudyLens.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="panel h-full p-6">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{c.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <Link
                to="/case-studies"
                className="flex h-full flex-col justify-between rounded-xl bg-primary p-6 text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  View case studies
                </span>
                <span className="display mt-8 text-6xl">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <Reveal>
            <p className="eyebrow">Engagement Models</p>
            <h2 className="display mt-5 text-[12vw] leading-[0.82] md:text-[4.5vw]">
              How brands work with us
            </h2>
          </Reveal>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {engagementModels.map((m, i) => (
              <Reveal as="div" key={m} delay={i * 0.04} y={16}>
                <div className="flex items-baseline gap-4 border-b border-border py-4">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base">{m}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="max-w-4xl text-2xl leading-snug md:text-4xl">
              We don't begin with ads, listings or channels. We begin with intelligence. Then we
              build the narrative, commercial framework and execution system required to grow the
              brand across marketplaces, countries and physical channels.
            </p>
          </Reveal>
        </div>
      </section>

      <DiagnosticCta />
    </>
  );
}
