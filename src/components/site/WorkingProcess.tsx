import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/site/ScrollRevealText";

interface ProcessStep {
  stepNum: string;
  eyebrow: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  image: string;
  bottomLeftIcon?: string;
  bottomRightIcon?: string;
  bg: string;
  fg: string;
}

const steps: ProcessStep[] = [
  {
    stepNum: "STEP 1",
    eyebrow: "01 / DISCOVERY & RESEARCH",
    title: "Discovery and Research",
    badge: "PHASE 01 • IMMERSION",
    description:
      "Identify client needs and gather market insights through focused discussions, competitive auditing, and deep consumer behavior analysis.",
    bullets: [
      "Conduct stakeholder discovery interviews to align core business objectives",
      "Perform competitive brand auditing & market trend benchmarking",
      "Map customer journey archetypes and key revenue conversion friction points",
    ],
    image: "/assets/images/step-1.jpg",
    bottomLeftIcon: "❖",
    bottomRightIcon: "⬚",
    bg: "#070709",
    fg: "#ffffff",
  },
  {
    stepNum: "STEP 2",
    eyebrow: "02 / STRATEGY DEVELOPMENT",
    title: "Strategy Development",
    badge: "PHASE 02 • ARCHITECTURE",
    description:
      "Craft a focused strategy that aligns client goals with market trends, distinct brand values, and scalable growth funnels.",
    bullets: [
      "Define a sharp brand message, value proposition, and narrative positioning",
      "Outline actionable digital roadmaps to capture target market share",
      "Architect scalable technical infrastructure and automated conversion engines",
    ],
    image: "/assets/images/step-2.jpg",
    bottomLeftIcon: "",
    bottomRightIcon: "〰",
    bg: "#0b0b0e",
    fg: "#ffffff",
  },
  {
    stepNum: "STEP 3",
    eyebrow: "03 / CREATIVE CONCEPTING",
    title: "Creative Concepting",
    badge: "PHASE 03 • VISUAL DESIGN",
    description:
      "Develop creative concepts to transform the strategy into engaging narrative ideas and boundary-pushing visual directions.",
    bullets: [
      "Brainstorm innovative design directions, luxury layouts, and typographic systems",
      "Build interactive mood boards & high-fidelity clickable prototypes",
      "Establish coherent brand design tokens, motion choreography, and micro-interactions",
    ],
    image: "/assets/images/step-3.jpg",
    bottomLeftIcon: "",
    bottomRightIcon: "✦",
    bg: "#070709",
    fg: "#ffffff",
  },
  {
    stepNum: "STEP 4",
    eyebrow: "04 / EXECUTION & SCALE",
    title: "Execution & Scale",
    badge: "PHASE 04 • ENGINEERING",
    description:
      "Translate approved concepts into high-performing digital experiences, optimized for scale, velocity, and global market expansion.",
    bullets: [
      "Execute full-stack engineering with rigorous speed and QA benchmarks",
      "Deploy real-time analytics, automated funnels, and continuous conversion tuning",
      "Establish multi-currency internationalization and multi-region infrastructure",
    ],
    image: "/assets/images/step-4.jpg",
    bottomLeftIcon: "",
    bottomRightIcon: "⚏",
    bg: "#0b0b0e",
    fg: "#ffffff",
  },
  {
    stepNum: "READY?",
    eyebrow: "05 / FINAL LAUNCH",
    title: "Ready to Scale Your Brand?",
    badge: "PHASE 05 • PARTNERSHIP",
    description:
      "Code. Create. Conquer. With us, no regrets. Partner with an engineering and creative team dedicated to transforming your vision into market dominance.",
    bullets: [
      "Full-service creative engineering, headless commerce, and brand systems",
      "Dedicated senior team embedded directly with your stakeholders",
      "Guaranteed velocity, enterprise reliability, and measurable ROI",
    ],
    image: "/assets/images/step-ready.jpg",
    bottomLeftIcon: "❖",
    bottomRightIcon: "❖",
    bg: "#070709",
    fg: "#ffffff",
  },
];

export function WorkingProcess() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const panels = Array.from(wrap.querySelectorAll<HTMLElement>(".panel"));
    const n = panels.length;
    if (n === 0) return;

    function applyAt(raw: number) {
      const scaled = Math.min(n - 1, Math.max(0, raw));
      const idx = Math.min(n - 2, Math.floor(scaled));
      const t = scaled - idx;

      panels.forEach((panel, i) => {
        const year = panel.querySelector<HTMLElement>(".year");
        if (!year) return;

        if (i < idx) {
          panel.style.clipPath = "inset(0 0 0 100%)";
          year.style.transform = "rotate(-90deg)";
        } else if (i === idx) {
          const visible = 1 - t;
          panel.style.clipPath = `inset(0 ${(1 - visible) * 100}% 0 0)`;
          year.style.transform = `rotate(${-90 * t}deg)`;
        } else if (i === idx + 1) {
          const visible = t;
          panel.style.clipPath = `inset(0 0 0 ${(1 - visible) * 100}%)`;
          year.style.transform = "rotate(0deg)";
        } else {
          panel.style.clipPath = "inset(0 0 0 100%)";
          year.style.transform = "rotate(0deg)";
        }
        panel.style.zIndex = String(i);
      });
    }

    function update() {
      const rect = wrap.getBoundingClientRect();
      const navbarOffset = 96;
      const total = wrap.offsetHeight - window.innerHeight;
      let raw = total > 0 ? -(rect.top - navbarOffset) / total : 0;
      raw = Math.min(1, Math.max(0, raw));
      const scaled = raw * (n - 1);
      applyAt(scaled);
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    applyAt(0);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white relative">
      {/* Section Header */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 md:gap-8">
          <div className="shrink-0">
            <span className="font-mono text-xs tracking-[0.28em] text-primary uppercase block">
              // Working Process
            </span>
          </div>
          <div className="max-w-3xl">
            <ScrollRevealText
              text="We are combining our love of well-designed websites with our marketing knowledge to help you thrive."
              preset="Blur Reveal"
              htmlTag="h2"
              colorHidden="rgba(255, 255, 255, 0.2)"
              colorRevealed="rgba(255, 255, 255, 1)"
              className="font-clash font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.2] uppercase text-white"
              trigger="Scroll"
              offsetStart={85}
              offsetEnd={35}
            />
          </div>
          <div className="hidden lg:flex shrink-0 items-center justify-center">
            <div className="w-9 h-9 border border-zinc-700/80 flex items-center justify-center hover:border-primary transition-colors">
              <div className="w-2 h-2 bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Framer ScrollTimeline Container */}
      <div
        ref={wrapRef}
        className="timeline relative w-full bg-black px-4 sm:px-6 md:px-8"
        style={{ height: `${steps.length * 85}vh` }}
      >
        {/* Sticky square architectural frame */}
        <div
          className="frame sticky top-[84px] sm:top-[92px] md:top-[96px] overflow-hidden bg-[#070709] select-none border border-zinc-800 shadow-2xl rounded-none"
          style={{
            height: "min(650px, calc(100svh - 110px))",
            maxWidth: "1400px",
            margin: "0 auto",
            borderRadius: "0px",
          }}
        >
          {steps.map((step, idx) => (
            <section
              key={idx}
              className="panel absolute inset-0 overflow-hidden rounded-none"
              style={{
                background: step.bg,
                color: step.fg,
                clipPath: idx === 0 ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
                zIndex: idx,
              }}
            >
              <div className="relative h-full p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-between box-border overflow-hidden">
                {/* Architectural Corner Crosshairs on 90-degree square corners */}
                <span className="absolute top-2 right-2 font-mono text-xs text-zinc-600 select-none pointer-events-none">
                  +
                </span>
                <span className="absolute bottom-2 right-2 font-mono text-xs text-zinc-600 select-none pointer-events-none">
                  +
                </span>
                <span className="absolute top-2 left-2 font-mono text-xs text-zinc-600 select-none pointer-events-none">
                  +
                </span>
                <span className="absolute bottom-2 left-2 font-mono text-xs text-zinc-600 select-none pointer-events-none">
                  +
                </span>

                {/* Two-Column Layout: Left Text & Big Step, Right Full-Height Square Image */}
                <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-10 w-full h-[calc(100%-60px)] sm:h-[calc(100%-80px)] z-10 overflow-hidden">
                  {/* Left Column: Text Information & Bullets */}
                  <div className="flex-1 flex flex-col justify-between overflow-y-auto pr-0 lg:pr-4 no-scrollbar">
                    <div>
                      <span className="block font-mono text-xs font-semibold tracking-[0.18em] uppercase mb-1 sm:mb-2 text-primary">
                        {step.eyebrow}
                      </span>

                      <h3 className="font-clash font-bold text-lg sm:text-2xl lg:text-[1.85rem] uppercase tracking-wide mb-2 sm:mb-3 text-white leading-tight">
                        {step.title}
                      </h3>

                      <p className="font-sans text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-xl">
                        {step.description}
                      </p>

                      <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {step.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs sm:text-[0.8125rem] text-zinc-300 flex items-start gap-2.5 font-sans leading-relaxed"
                          >
                            <span className="text-primary font-bold select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button for Final Step */}
                    {idx === steps.length - 1 && (
                      <div className="mt-2">
                        <Button
                          asChild
                          size="lg"
                          className="rounded-none bg-white text-zinc-950 hover:bg-zinc-200 font-sans font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-4 sm:py-6 shadow-xl"
                        >
                          <Link to="/contact" className="flex items-center gap-3">
                            <span>Let's Work Together</span>
                            <span className="text-sm">→</span>
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Full-Height Square Cinematic Image */}
                  <div className="w-full lg:w-[46%] xl:w-[48%] h-[120px] sm:h-[180px] lg:h-full flex flex-col justify-between shrink-0 relative order-first lg:order-last">
                    <div className="relative w-full h-full overflow-hidden border border-zinc-800 bg-zinc-950 rounded-none group shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out rounded-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                      {/* Square Image Badge Overlay */}
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between font-mono text-[10px] sm:text-[0.6875rem] text-zinc-300">
                        <span className="bg-black/85 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/15 text-white font-medium rounded-none">
                          {step.badge}
                        </span>
                        <span className="text-zinc-400 bg-black/75 px-2 py-0.5 sm:py-1 border border-white/10 rounded-none">
                          {step.bottomRightIcon}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Rotating Signature Step Label */}
                <div className="w-full h-[55px] sm:h-[70px] flex items-end overflow-visible select-none pt-1 sm:pt-2 border-t border-zinc-800/80">
                  <h2
                    className="year m-0 font-clash font-black tracking-tight leading-[0.75] will-change-transform text-white/90"
                    style={{
                      fontSize: "clamp(38px, 7.5vw, 95px)",
                      transformOrigin: "left bottom",
                    }}
                  >
                    {step.stepNum}
                  </h2>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingProcess;
