import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from "react";

// Helper utilities matching the Framer module source
function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(Math.max(value, minimum), maximum);
}

function lerp(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

function smootherstep(start: number, end: number, value: number) {
  if (start === end) {
    return value < start ? 0 : 1;
  }
  const progress = clamp((value - start) / (end - start));
  return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
}

interface ProjectItem {
  image: string;
  label: string;
}

const DEFAULT_ITEMS: ProjectItem[] = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    label: "Commerce System Expansion",
  },
  {
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    label: "Global Brand Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    label: "Marketplace Optimization",
  },
  {
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    label: "Omnichannel Growth",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    label: "Fulfillment Automation",
  },
  {
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    label: "Customer Insights Hub",
  },
];

export function OrbitProjects() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [progress, setProgress] = useState(0);

  const targetProgressRef = useRef(0);
  const animatedProgressRef = useRef(0);
  const progressRafRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);

  // Resize handler
  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver to only animate when in viewport
  const [isInViewport, setIsInViewport] = useState(false);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { root: null, rootMargin: "100% 0px 100% 0px", threshold: 0 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Smooth scroll loop matching Framer module physics interpolation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const smoothness = 7;
    const startOffset = 55;

    const animateProgress = (time: number) => {
      progressRafRef.current = null;
      const previousTime = lastFrameTimeRef.current ?? time;
      const deltaSeconds = Math.min(Math.max((time - previousTime) / 1000, 0), 0.064);
      lastFrameTimeRef.current = time;

      const current = animatedProgressRef.current;
      const target = targetProgressRef.current;
      const interpolation = 1 - Math.exp(-smoothness * deltaSeconds);
      const next = current + (target - current) * interpolation;
      const difference = Math.abs(target - next);

      const finalProgress = difference < 0.0001 ? target : next;
      animatedProgressRef.current = finalProgress;
      setProgress(finalProgress);

      if (difference >= 0.0001) {
        progressRafRef.current = window.requestAnimationFrame(animateProgress);
      } else {
        lastFrameTimeRef.current = null;
      }
    };

    const updateTargetProgress = () => {
      const root = rootRef.current;
      if (!root) return;
      const bounds = root.getBoundingClientRect();
      const entryLead = window.innerHeight * (startOffset / 100);
      const availableDistance = Math.max(bounds.height - window.innerHeight, 1);
      targetProgressRef.current = clamp((entryLead - bounds.top) / availableDistance);

      if (progressRafRef.current === null) {
        progressRafRef.current = window.requestAnimationFrame(animateProgress);
      }
    };

    updateTargetProgress();
    window.addEventListener("scroll", updateTargetProgress, { passive: true });
    window.addEventListener("resize", updateTargetProgress);

    return () => {
      if (progressRafRef.current !== null) {
        window.cancelAnimationFrame(progressRafRef.current);
      }
      progressRafRef.current = null;
      lastFrameTimeRef.current = null;
      window.removeEventListener("scroll", updateTargetProgress);
      window.removeEventListener("resize", updateTargetProgress);
    };
  }, [isInViewport]);

  const isCompact = viewportWidth < 1024;
  const isMobile = viewportWidth < 640;

  // Render direct Grid layout for Compact Breakpoint (matching Framer component fallback)
  if (isCompact) {
    return (
      <section className="relative w-full h-auto bg-black text-white px-5 sm:px-10 py-16 md:py-24 border-b border-border">
        <header className="mb-12">
          <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block mb-4">
            // Featured Projects
          </span>
          <h2 className="font-clash font-bold text-4xl sm:text-5xl leading-[0.9] text-white">
            ECOM PROJECTS IN MOTION
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground mt-4 max-w-md">
            Selected case studies and digital commerce solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DEFAULT_ITEMS.map((item, index) => (
            <a
              key={index}
              href="/case-studies"
              className="group block relative w-full aspect-[1.48] overflow-hidden bg-zinc-900 border border-border/40 hover:border-primary/40 transition-colors"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 select-none"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-end justify-between">
                <span className="font-clash text-lg font-bold text-white tracking-wide">
                  {item.label}
                </span>
                <span className="text-xs uppercase tracking-widest text-primary font-bold group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  // 3D Motion Orbit parameters (matching Framer component defaults)
  const arcCardWidth = Math.min(410, viewportWidth * 0.28);
  const arcCardHeight = arcCardWidth / 1.48;
  const actualCurveWidth = Math.min(570, viewportWidth * 0.44);
  const actualCurveHeight = Math.min(210, viewportHeight * 0.3);
  const actualDepth = Math.min(520, viewportWidth * 0.42);

  const desktopColumns = 3;
  const gridGap = 16;
  const gridMaxWidth = 1160;
  const gridPositionY = 52;

  const titleEnterProgress = smootherstep(0, 0.2, progress);
  const titleExitProgress = smootherstep(0.74, 0.94, progress);
  const titleOpacity = titleEnterProgress * (1 - titleExitProgress);
  const titleVerticalShift = lerp(28, 0, titleEnterProgress);
  const titleOutsideOffset = viewportWidth * 0.7;

  const safeCenterTextWidth = Math.min(220, viewportWidth * 0.5);
  const titleFinalOffset = (safeCenterTextWidth + 32) / 2;
  const leftTitleOffset = lerp(titleOutsideOffset, titleFinalOffset, titleEnterProgress);
  const rightTitleOffset = lerp(titleOutsideOffset, titleFinalOffset, titleEnterProgress);

  const revealProgress = smootherstep(0, 0.17, progress);
  const orbitProgress = smootherstep(0.05, 0.7, progress);
  const centerCopyOpacity = smootherstep(0.12, 0.25, progress) * (1 - smootherstep(0.58, 0.82, progress));

  const desktopColumnsCount = Math.min(desktopColumns, DEFAULT_ITEMS.length);
  const rowsCount = Math.ceil(DEFAULT_ITEMS.length / desktopColumnsCount);
  const availableGridWidth = Math.max(viewportWidth - 96, 200);
  const finalGridWidth = Math.min(gridMaxWidth, availableGridWidth);
  const finalCardWidth = Math.max(90, (finalGridWidth - gridGap * (desktopColumnsCount - 1)) / desktopColumnsCount);
  const finalCardHeight = finalCardWidth / 1.48;
  const finalGridHeight = rowsCount * finalCardHeight + Math.max(rowsCount - 1, 0) * gridGap;

  return (
    <section
      ref={rootRef}
      className="relative w-full bg-black border-b border-border"
      style={{ height: "460vh" }}
    >
      <div
        className="sticky top-0 w-full h-[100svh] overflow-hidden flex items-center justify-center bg-black"
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
          isolation: "isolate",
        }}
      >
        {/* Animated Background Text (Title Line 1) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[56%] z-0 w-max pointer-events-none select-none"
          style={{
            opacity: titleOpacity,
            transform: `translate3d(calc(-100% - ${leftTitleOffset}px), calc(-50% + ${titleVerticalShift}px), 0)`,
            willChange: "transform, opacity",
          }}
        >
          <span className="font-clash font-extrabold text-[120px] lg:text-[144px] leading-[0.86] tracking-tight text-white/5 uppercase">
            ECOM
          </span>
        </div>

        {/* Animated Background Text (Title Line 2) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[39%] z-0 w-max pointer-events-none select-none"
          style={{
            opacity: titleOpacity,
            transform: `translate3d(${rightTitleOffset}px, calc(-50% - ${titleVerticalShift}px), 0)`,
            willChange: "transform, opacity",
          }}
        >
          <span className="font-clash font-extrabold text-[120px] lg:text-[144px] leading-[0.86] tracking-tight text-white/5 uppercase">
            PROJECTS
          </span>
        </div>

        {/* Center Text Description */}
        <div
          className="absolute left-1/2 top-[50%] z-20 max-w-[80vw] p-4 text-center pointer-events-none select-none"
          style={{
            width: safeCenterTextWidth,
            opacity: centerCopyOpacity,
            transform: "translate3d(-50%, -50%, 0)",
          }}
        >
          <p className="font-sans text-xs lg:text-sm font-semibold tracking-wider text-muted-foreground uppercase leading-relaxed">
            Selected case studies and digital commerce solutions.
          </p>
        </div>

        {/* 3D Orbiting Cards Mesh simulation */}
        <div className="absolute inset-0 z-10" style={{ transformStyle: "preserve-3d" }}>
          {DEFAULT_ITEMS.map((item, index) => {
            const revealStart = 0.025 + index * 0.01;
            const revealEnd = 0.18 + index * 0.012;
            const cardReveal = smootherstep(revealStart, revealEnd, progress);

            const flattenStart = 0.56 + index * 0.009;
            const flattenEnd = Math.min(0.91 + index * 0.009, 0.99);
            const flattenProgress = smootherstep(flattenStart, flattenEnd, progress);

            const baseAngle = (index / Math.max(DEFAULT_ITEMS.length, 1)) * 360 - 125;
            const angle = baseAngle + orbitProgress * 310;
            const radians = (angle * Math.PI) / 180;

            const arcCenterX = Math.sin(radians) * actualCurveWidth;
            const arcCenterY = Math.cos(radians + 0.65) * actualCurveHeight - viewportHeight * 0.025 - 40;
            const arcZ = Math.cos(radians) * actualDepth;

            const normalizedDepth = clamp((arcZ + actualDepth) / Math.max(actualDepth * 2, 1));
            const arcScale = lerp(0.82, 1, normalizedDepth);
            const arcOpacity = lerp(0.2, 1, normalizedDepth);

            const arcRotateY = -Math.sin(radians) * 62;
            const arcRotateZ = -Math.sin(radians) * 8;
            const entranceOffset = (1 - cardReveal) * viewportHeight * 0.48;

            const arcLeft = arcCenterX - arcCardWidth / 2;
            const arcTop = arcCenterY - arcCardHeight / 2 + entranceOffset;

            const column = index % desktopColumnsCount;
            const row = Math.floor(index / desktopColumnsCount);
            const gridLeft = -finalGridWidth / 2 + column * (finalCardWidth + gridGap);
            const gridTop = viewportHeight * (gridPositionY / 100) - viewportHeight / 2 - finalGridHeight / 2 + row * (finalCardHeight + gridGap);

            const width = lerp(arcCardWidth, finalCardWidth, flattenProgress);
            const height = lerp(arcCardHeight, finalCardHeight, flattenProgress);
            const x = lerp(arcLeft, gridLeft, flattenProgress);
            const y = lerp(arcTop, gridTop, flattenProgress);
            const z = lerp(arcZ, 0, flattenProgress);
            const rotateY = lerp(arcRotateY, 0, flattenProgress);
            const rotateZ = lerp(arcRotateZ, 0, flattenProgress);
            const scale = lerp(arcScale, 1, flattenProgress);
            const opacity = clamp(lerp(arcOpacity * cardReveal * revealProgress, 1, flattenProgress));
            const zIndex = flattenProgress > 0.86 ? 100 + index : Math.round(100 + normalizedDepth * 800);

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: width,
                  height: height,
                  opacity,
                  zIndex,
                  transformOrigin: "50% 50%",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: `
                    translate3d(${x}px, ${y}px, ${z}px)
                    rotateY(${rotateY}deg)
                    rotateZ(${rotateZ}deg)
                    scale(${scale})
                  `,
                }}
              >
                <a
                  href="/case-studies"
                  className="block w-full h-full relative border border-border/40 overflow-hidden bg-zinc-950 transition-colors hover:border-primary group"
                  style={{
                    boxShadow: `0 ${18 * lerp(1, 0.4, flattenProgress)}px ${50 * lerp(1, 0.4, flattenProgress)}px rgba(0, 0, 0, 0.35)`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Title overlay on hover / final grid */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-clash text-sm font-bold text-white uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-[10px] tracking-widest text-primary font-bold mt-1 uppercase">
                      View Project
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OrbitProjects;
