import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, ChevronsRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ArcText } from "@/components/site/ArcText";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function HowWeOperate() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemsRef = useRef<(HTMLUListElement | null)[]>([]);

  const items = [
    {
      title: "Collaborative",
      points: [
        "We believe the best work is born from cooperation.",
        "We work closely with your team to understand your goals, culture, and audience.",
        "Turning shared insights into impactful digital experiences.",
      ],
    },
    {
      title: "Responsive",
      points: [
        "Agility is our strength.",
        "We adapt swiftly to changing market needs, user feedback, and technical challenges.",
        "Keeping your project moving forward without delay.",
      ],
    },
    {
      title: "Experienced",
      points: [
        "With years of collective expertise in modern design, technology, and marketing.",
        "We deliver industry-grade engineering and design practices to elevate your brand.",
        "Sustaining scale with robust systems and professional operations.",
      ],
    },
  ];

  // ScrollTrigger to trigger section entry animations
  useEffect(() => {
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        setSectionInView(true);
      },
    });
    return () => {
      trigger.kill();
    };
  }, []);

  // GSAP for Accordion height and items stagger
  useEffect(() => {
    items.forEach((_, idx) => {
      const panel = panelsRef.current[idx];
      const list = itemsRef.current[idx];
      if (!panel || !list) return;

      const isOpen = activeIndex === idx;
      const lis = list.querySelectorAll("li");

      if (isOpen) {
        // Elastic open animation for height (duration 1, elastic.out)
        gsap.to(panel, {
          height: "auto",
          duration: 1,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto",
        });

        // Staggered slide in for list items (duration 1.5, elastic.out, stagger 0.1)
        gsap.fromTo(
          lis,
          { y: -30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)",
            stagger: 0.1,
            overwrite: "auto",
          }
        );
      } else {
        // Smooth close animation (duration 0.5, power1.out)
        gsap.to(panel, {
          height: 0,
          duration: 0.5,
          ease: "power1.out",
          overwrite: "auto",
        });

        // Reset list items state immediately
        gsap.set(lis, { y: -30, opacity: 0 });
      }
    });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="relative border-b border-border bg-[var(--ink)] overflow-hidden">
      {/* Outer Grid with borders */}
      <div className="mx-auto max-w-[1400px] border-x border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          
          {/* Left Column - Image with Padding */}
          <div className="p-8 sm:p-12 md:p-16 flex items-center justify-center bg-black/40">
            {/* Image container scales from a dot (circle 0%) to full (circle 100%) */}
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={sectionInView ? { clipPath: "circle(100% at 50% 50%)" } : { clipPath: "circle(0% at 50% 50%)" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="relative border border-border p-4 bg-zinc-950/80 w-full max-w-[500px] aspect-square flex items-center justify-center group overflow-hidden"
            >
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={sectionInView ? { scale: 1, opacity: 0.95 } : { scale: 1.05, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                src="/assets/images/how-we-operate.jpg"
                alt="How Ecom Gleam operates"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Right Column - Accordion & Content */}
          <div className="p-5 sm:p-10 md:p-16 flex flex-col justify-between relative min-h-[420px] md:min-h-[500px]">
            
            {/* Header info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-between items-start w-full mb-6 sm:mb-12"
            >
              <Reveal>
                <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block">
                  // How do we operate?
                </span>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="text-muted-foreground p-1.5 border border-border rounded-sm bg-black/20 hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <ChevronsRight className="w-5 h-5" />
                </div>
              </Reveal>
            </motion.div>

            {/* Middle Circle Graphic replaced with animated wavy ArcText */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="hidden md:flex items-center justify-center my-6 relative w-full h-24 mx-auto overflow-hidden"
            >
              <ArcText
                text="COLLABORATIVE • RESPONSIVE • EXPERIENCED"
                preset="wave_double"
                typography={{
                  font: {
                    fontSize: 13,
                    fontWeight: "800",
                    fontFamily: "var(--font-clash), sans-serif",
                    letterSpacing: 3,
                  },
                  fill: "var(--primary)",
                  textTransform: "uppercase",
                }}
                animation={{
                  enabled: true,
                  dir: "forward",
                  duration: 22,
                }}
              />
            </motion.div>

            {/* Accordion List - Slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
              className="space-y-0 w-full mt-auto"
            >
              {items.map((item, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className="border-t border-border last:border-b last:border-border">
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full py-6 md:py-8 flex justify-between items-center text-left group hover:text-primary transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="font-clash font-bold text-xl md:text-2xl tracking-wide uppercase text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        {isOpen ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </span>
                    </button>

                    <div
                      ref={(el) => {
                        panelsRef.current[idx] = el;
                      }}
                      className="overflow-hidden h-0"
                    >
                      <ul
                        ref={(el) => {
                          itemsRef.current[idx] = el;
                        }}
                        className="pb-6 md:pb-8 space-y-3.5 font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl list-none pl-0"
                      >
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 opacity-0">
                            <span className="text-primary font-bold select-none mt-1">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWeOperate;
