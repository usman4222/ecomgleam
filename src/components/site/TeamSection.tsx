import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { ScrollRevealText } from "@/components/site/ScrollRevealText";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  specialties: string[];
  image: string;
  stats: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alexander Wright",
    role: "Managing Partner & Chief Strategist",
    location: "New York / London",
    bio: "Pioneering evidence-based commerce architecture and international market expansion. Former advisor to Fortune 500 direct-to-consumer conglomerates.",
    specialties: ["Market Intelligence", "Brand Architecture", "Enterprise Capital"],
    image: "/assets/images/team/alexander.jpg",
    stats: "12+ Yrs Experience • $400M+ Scale",
  },
  {
    name: "Elena Rostova",
    role: "VP of Creative Engineering",
    location: "London",
    bio: "Spearheading luxury visual systems, motion choreography, and high-conversion brand storytelling. Translates complex offerings into visceral consumer experiences.",
    specialties: ["Creative Direction", "Motion Systems", "High-Converting UI"],
    image: "/assets/images/team/elena.jpg",
    stats: "Cannes Lions & Webby Honoree",
  },
  {
    name: "Marcus Vance",
    role: "Head of Commerce & Operations",
    location: "New York",
    bio: "Architecting algorithmic revenue engines, omnichannel inventory automation, and multi-region fulfillment infrastructure.",
    specialties: ["Omnichannel Ops", "Algorithmic Pricing", "Channel Governance"],
    image: "/assets/images/team/marcus.jpg",
    stats: "150+ Enterprise Deployments",
  },
  {
    name: "Sophia Chen",
    role: "Director of Research & Intelligence",
    location: "Dubai / Singapore",
    bio: "Unlocking proprietary category moats, consumer search intent analysis, and competitive channel arbitrage before capital allocation.",
    specialties: ["Consumer Data", "Search Intent", "Competitive Auditing"],
    image: "/assets/images/team/sophia.jpg",
    stats: "500+ Brand Audits Executed",
  },
  {
    name: "David Sterling",
    role: "Principal Brand Architect",
    location: "Chicago / New York",
    bio: "Connecting consumer psychology with category-dominant narrative framing. Leading positioning strategies that withstand marketplace commoditization.",
    specialties: ["Narrative Framing", "Market Positioning", "Category Design"],
    image: "/assets/images/team/david.jpg",
    stats: "20+ Yrs Brand Governance",
  },
  {
    name: "Aria Thorne",
    role: "Head of Global Expansion",
    location: "London / Dubai",
    bio: "Guiding brands into high-margin international jurisdictions across Europe, the Gulf Cooperation Council (GCC), and North America.",
    specialties: ["Cross-Border DTC", "GCC & EMEA Scale", "Regulatory Setup"],
    image: "/assets/images/team/aria.jpg",
    stats: "14 Countries Operationalized",
  },
];

export function TeamSection() {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const total = teamMembers.length;

  // Responsive carousel dimensions
  const cardWidth = 340;
  const cardHeight = 470;
  const spacing = 260;
  const rotationDeg = 24;
  const scaleStep = 0.12;
  const perspective = 1400;

  // Navigation
  const goTo = (i: number) => {
    const next = ((i % total) + total) % total;
    setActive(next);
  };

  // Autoplay (pauses on card hover or drag)
  useEffect(() => {
    if (isPaused || isDragging.current) return;
    const timer = setTimeout(() => {
      goTo(active + 1);
    }, 3800);
    return () => clearTimeout(timer);
  }, [active, isPaused]);

  return (
    <section className="relative w-full bg-black text-white border-b border-zinc-800 py-24 md:py-32 overflow-hidden select-none">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(163,230,53,0.035),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-14 md:mb-20">
          <div>
            <span className="font-mono text-xs tracking-[0.28em] text-primary uppercase block mb-3">
              // Leadership & Core Team
            </span>
            <div className="max-w-3xl">
              <ScrollRevealText
                text="The Strategic Minds Behind Ecom Gleam."
                preset="Blur Reveal"
                htmlTag="h2"
                colorHidden="rgba(255, 255, 255, 0.2)"
                colorRevealed="rgba(255, 255, 255, 1)"
                className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05]"
                trigger="Scroll"
                offsetStart={85}
                offsetEnd={35}
              />
            </div>
          </div>

          {/* Navigation Buttons & Progress */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mr-2">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <button
              onClick={() => goTo(active - 1)}
              className="w-11 h-11 border border-zinc-800 bg-[#08080a] flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary transition-all rounded-none"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => goTo(active + 1)}
              className="w-11 h-11 border border-zinc-800 bg-[#08080a] flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary transition-all rounded-none"
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Viewport */}
        <div
          className="relative w-full flex items-center justify-center py-6"
          style={{
            perspective: `${perspective}px`,
            perspectiveOrigin: "center center",
            minHeight: `${cardHeight + 90}px`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIdx(null);
          }}
        >
          {/* Drag Surface */}
          <motion.div
            className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragStart={() => {
              isDragging.current = true;
            }}
            onDragEnd={(_, info) => {
              isDragging.current = false;
              const threshold = spacing / 3.5;
              if (info.offset.x < -threshold) goTo(active + 1);
              else if (info.offset.x > threshold) goTo(active - 1);
            }}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {teamMembers.map((member, i) => {
                const offset = i - active;
                const abs = Math.abs(offset);
                const x = offset * spacing;
                const rotY = -offset * rotationDeg;
                const scale = Math.max(0.55, 1 - abs * scaleStep);
                const opacity = abs > 3 ? 0 : 1 - abs * 0.16;
                const z = -abs * 85;
                const isCurrent = i === active;
                const isHovered = hoveredIdx === i;

                return (
                  <motion.div
                    key={member.name}
                    onClick={() => {
                      if (!isDragging.current) goTo(i);
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    animate={{
                      x,
                      rotateY: rotY,
                      scale,
                      opacity,
                      z,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 22,
                      mass: 0.8,
                    }}
                    style={{
                      position: "absolute",
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      transformStyle: "preserve-3d",
                      zIndex: 100 - abs,
                      cursor: isCurrent ? "grab" : "pointer",
                      pointerEvents: abs > 3 ? "none" : "auto",
                    }}
                    className="relative group rounded-none"
                  >
                    {/* Square Architectural Card Container */}
                    <div className="relative w-full h-full border border-zinc-800 bg-[#0a0a0d] overflow-hidden rounded-none shadow-2xl transition-colors duration-300 group-hover:border-primary/60">
                      {/* Corner Architectural Crosshairs */}
                      <span className="absolute top-2 left-2 font-mono text-xs text-zinc-600 select-none z-30 pointer-events-none">
                        +
                      </span>
                      <span className="absolute top-2 right-2 font-mono text-xs text-zinc-600 select-none z-30 pointer-events-none">
                        +
                      </span>
                      <span className="absolute bottom-2 left-2 font-mono text-xs text-zinc-600 select-none z-30 pointer-events-none">
                        +
                      </span>
                      <span className="absolute bottom-2 right-2 font-mono text-xs text-zinc-600 select-none z-30 pointer-events-none">
                        +
                      </span>

                      {/* Member Portrait Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient shade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                      </div>

                      {/* Default Bottom Information Bar */}
                      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end z-20">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase block mb-1">
                          {member.role}
                        </span>
                        <h3 className="font-clash font-bold text-xl text-white uppercase tracking-wide flex items-center justify-between">
                          <span>{member.name}</span>
                          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-primary transition-colors" />
                        </h3>
                      </div>

                      {/* Hover Overlay: Detailed Biography & Specialties */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md p-6 flex flex-col justify-between z-40 border border-primary/40 rounded-none overflow-hidden"
                          >
                            {/* Top Info */}
                            <div>
                              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                                  {member.location}
                                </span>
                                <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase">
                                  CORE TEAM
                                </span>
                              </div>

                              <h4 className="font-clash font-bold text-2xl text-white uppercase tracking-wide leading-none mb-1.5">
                                {member.name}
                              </h4>
                              <p className="font-mono text-xs text-primary font-medium tracking-wider uppercase mb-4">
                                {member.role}
                              </p>

                              <p className="font-sans text-xs sm:text-[0.8125rem] text-zinc-300 leading-relaxed">
                                {member.bio}
                              </p>
                            </div>

                            {/* Bottom Specialties & Stats */}
                            <div className="pt-4 border-t border-zinc-800/90">
                              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2">
                                Core Capabilities
                              </span>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {member.specialties.map((spec, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="bg-white/5 border border-white/10 text-zinc-300 font-mono text-[9px] uppercase px-2 py-0.5 rounded-none"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>

                              <div className="font-mono text-[10px] text-primary/90 font-semibold tracking-wide">
                                ❖ {member.stats}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Pagination Dots (Square Formatted) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {teamMembers.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-none border-none outline-none ${
                  isActive ? "w-8 bg-primary" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to team member ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
