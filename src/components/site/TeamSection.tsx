import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ScrollRevealText } from "@/components/site/ScrollRevealText";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alexander Wright",
    role: "Managing Partner & Chief Strategist",
    location: "New York / London",
    image: "/assets/images/team/alexander.jpg",
  },
  {
    name: "Elena Rostova",
    role: "VP of Creative Engineering",
    location: "London",
    image: "/assets/images/team/elena.jpg",
  },
  {
    name: "Marcus Vance",
    role: "Head of Commerce & Operations",
    location: "New York",
    image: "/assets/images/team/marcus.jpg",
  },
  {
    name: "Sophia Chen",
    role: "Director of Research & Intelligence",
    location: "Dubai / Singapore",
    image: "/assets/images/team/sophia.jpg",
  },
  {
    name: "David Sterling",
    role: "Principal Brand Architect",
    location: "Chicago / New York",
    image: "/assets/images/team/david.jpg",
  },
  {
    name: "Aria Thorne",
    role: "Head of Global Expansion",
    location: "London / Dubai",
    image: "/assets/images/team/aria.jpg",
  },
];

interface TeamSectionProps {
  overlayText?: string;
}

export function TeamSection({ overlayText = "OUR TEAM" }: TeamSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(1600);
  const [activeIdx, setActiveIdx] = useState(0);

  // Measure exact horizontal distance needed
  const updateScrollBounds = () => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = Math.max(0, trackWidth - viewportWidth + 80);
    setMaxScroll(distance);
  };

  useEffect(() => {
    updateScrollBounds();
    window.addEventListener("resize", updateScrollBounds);
    return () => window.removeEventListener("resize", updateScrollBounds);
  }, []);

  // Framer Motion Scroll Progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for fluid card gliding
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });

  // Transform progress into horizontal translation
  const x = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        teamMembers.length - 1,
        Math.max(0, Math.round(v * (teamMembers.length - 1)))
      );
      setActiveIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Scroll to a specific card smoothly
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const target = Math.max(0, Math.min(teamMembers.length - 1, index));
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (target / (teamMembers.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="team-section"
      className="relative w-full bg-black text-white"
      style={{
        height: "175vh", // Tight, responsive scroll runway leading cleanly into footer
        isolation: "isolate", // Confine mix-blend-mode difference to this section
      }}
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 bg-black select-none">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.025),transparent_75%)] pointer-events-none" />

        {/* Section Header Controls & Eyebrow */}
        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 flex items-end justify-between gap-6 shrink-0">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
                // Leadership & Specialists
              </span>
            </div>
            <div className="max-w-2xl">
              <ScrollRevealText
                text="The Strategic Minds Behind Ecom Gleam."
                preset="Blur Reveal"
                htmlTag="h2"
                colorHidden="rgba(255, 255, 255, 0.25)"
                colorRevealed="rgba(255, 255, 255, 1)"
                className="font-clash font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-tight"
                trigger="Scroll"
                offsetStart={85}
                offsetEnd={35}
              />
            </div>
          </div>

          {/* Nav Controls & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Active Counter */}
            <div className="hidden sm:flex items-center font-mono text-xs text-zinc-400 tracking-widest mr-2 bg-zinc-950/80 px-3 py-1.5 border border-zinc-800/80 rounded-full">
              <span className="text-white font-bold">{String(activeIdx + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-zinc-600">/</span>
              <span>{String(teamMembers.length).padStart(2, "0")}</span>
            </div>

            {/* Prev Button */}
            <button
              onClick={() => scrollToCard(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => scrollToCard(activeIdx + 1)}
              disabled={activeIdx === teamMembers.length - 1}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Viewport with Scrolling Cards and Difference Blend Text */}
        <div className="relative w-full h-[460px] sm:h-[495px] md:h-[520px] flex items-center my-auto overflow-visible">
          {/* Horizontally Moving Cards Track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-6 sm:gap-8 md:gap-10 pl-[6vw] md:pl-[10vw] pr-[20vw] shrink-0 cursor-grab active:cursor-grabbing"
          >
            {teamMembers.map((member, i) => {
              const isCurrent = i === activeIdx;

              return (
                <motion.div
                  key={member.name}
                  onClick={() => scrollToCard(i)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative group shrink-0 w-[280px] sm:w-[315px] md:w-[340px] h-[440px] sm:h-[475px] md:h-[500px] rounded-[28px] sm:rounded-[34px] bg-white text-zinc-950 p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 border ${isCurrent
                    ? "border-primary/50 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)]"
                    : "border-zinc-200/90 shadow-black/40"
                    }`}
                >
                  {/* Top: Colorful Portrait Photo with increased height (Protected on z-30 layer) */}
                  <div className="relative z-30 w-full h-[160px] sm:h-[180px] md:h-[195px] rounded-[20px] sm:rounded-[22px] overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90 uppercase tracking-wider select-none">
                      {member.location.split("/")[0].trim()}
                    </div>
                  </div>

                  {/* Middle: Clean White Canvas for Giant Inverted Difference Text */}
                  <div className="flex-1 w-full min-h-[150px] sm:min-h-[170px] md:min-h-[185px] pointer-events-none select-none" />

                  {/* Bottom: Team Member Name & Role (Closer to OUR TEAM, reduced gap, protected on z-30 layer) */}
                  <div className="relative z-30 pt-2.5 border-t border-zinc-100 bg-white shrink-0">
                    <h3 className="font-clash font-bold text-lg sm:text-xl md:text-[1.45rem] text-black uppercase tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-[11px] text-zinc-500 uppercase tracking-wider mt-1 font-medium">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Massive Inverted Typography (Difference Blend Overlay) */}
          {/* Positioned at top-[61%] to reduce space between text and bottom role while keeping safe buffer from image */}
          <div
            className="absolute inset-x-0 top-[61%] -translate-y-1/2 pointer-events-none select-none z-20 flex items-center justify-center overflow-hidden w-full px-2 sm:px-4"
            style={{
              mixBlendMode: "difference",
            }}
          >
            <h1 className="font-clash font-black text-white text-[clamp(5.25rem,13.5vw,13.5rem)] leading-[0.88] tracking-[0.06em] sm:tracking-[0.1em] md:tracking-[0.14em] uppercase whitespace-nowrap text-center drop-shadow-none scale-y-105">
              {overlayText}
            </h1>
          </div>
        </div>

        {/* Bottom Section Progress Bar & Drag Instruction with generous breathing room */}
        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 flex items-center justify-between gap-6 shrink-0 pt-6 sm:pt-8 md:pt-10 mb-2">
          {/* Progress Track Line */}
          <div className="flex-1 max-w-md h-[2px] bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              style={{
                scaleX: smoothProgress,
                transformOrigin: "left",
              }}
              className="h-full w-full bg-primary"
            />
          </div>

          <div className="flex items-center gap-4 text-zinc-500 font-mono text-[11px] tracking-widest uppercase">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-400">
              <Sparkles className="w-3 h-3 text-primary" /> Scroll or drag to explore
            </span>
            <span className="text-zinc-600">•</span>
            <span>{teamMembers[activeIdx]?.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
