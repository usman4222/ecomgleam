import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "motion/react";
import { TextAnimate } from "@/registry/magicui/text-animate";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "AI-Centered",
    description:
      "In all of our work, we think about how AI can provide more efficiency and personalization. This drives how we experiment to deliver process innovation and data-driven.",
  },
  {
    num: "02",
    title: "Embedded Research",
    description:
      "We use data to strengthen hypotheses and identify risks. Our research team ensures the customer has the loudest voice in the room — using qual and quant data.",
  },
  {
    num: "03",
    title: "Systems First",
    description:
      "Process is at the core of every partnership at Ecom Gleam. We help our clients sustain new growth by providing guidance on which investments in systems and infrastructure.",
  },
  {
    num: "04",
    title: "Dedicated Speed",
    description:
      "Clients come to us when they need to adapt, shift, and scale. These critical moments are why we work quickly — utilizing early prototyping and our expertise.",
  },
];

const stats = [
  { value: 121, label: "YEARS EXPERIENCE", heightClass: "h-[130px] md:h-[150px]" },
  { value: 244, label: "CREATIVE SOLUTIONS", heightClass: "h-[190px] md:h-[220px]" },
  { value: 181, label: "CREATIVE PERSONNEL", heightClass: "h-[160px] md:h-[185px]" },
  { value: 355, label: "HAPPY CUSTOMERS", heightClass: "h-[220px] md:h-[260px]" },
];

function RunningNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress * (2 - progress);
      setCount(Math.floor(ease * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    // Pin the outer container while scrolling
    const pin = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
    });

    let currentState = 0;

    // Cycle text based on scroll progress
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=200%",
      scrub: 0.15,
      onUpdate: (self) => {
        const p = self.progress;
        const total = pillars.length;
        let i = Math.floor(p * total);
        if (i >= total) i = total - 1;

        if (currentState !== i) {
          currentState = i;

          // Staggered slide out upwards
          gsap.to([numRef.current, titleRef.current, descRef.current], {
            opacity: 0,
            y: -25,
            duration: 0.22,
            stagger: 0.02,
            ease: "power2.in",
            onComplete: () => {
              // Update text
              const active = pillars[i];
              if (active) {
                if (numRef.current) numRef.current.innerText = `// ${active.num} ${active.title}`;
                if (titleRef.current) titleRef.current.innerText = active.title;
                if (descRef.current) descRef.current.innerText = active.description;
              }

              // Staggered slide in from bottom
              gsap.fromTo(
                [numRef.current, titleRef.current, descRef.current],
                { y: 25, opacity: 0 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.38,
                  ease: "power3.out",
                  stagger: 0.03,
                }
              );
            },
          });
        }
      },
    });

    return () => {
      pin.kill();
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-black flex items-center justify-center py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-10 z-20">

        {/* White Rounded Container Card */}
        <div ref={cardRef} className="bg-[oklch(0.96_0.005_200)] text-zinc-950 p-8 sm:p-12 md:p-20 shadow-2xl flex flex-col justify-between gap-16 md:gap-20">

          {/* Top Half: Why Choose Us split section */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-24 items-center w-full">

            {/* Left Column (Sticky Title) */}
            <div className="flex flex-col justify-center">
              <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block">
                // Why Choose Ecom Gleam
              </span>

              <h2 className="font-clash font-bold text-[7.5vw] leading-[1.1] lg:text-[3.2vw] tracking-normal uppercase text-zinc-950 mt-6 flex flex-col gap-1">
                <TextAnimate animation="blurInUp" by="character" once className="whitespace-nowrap">
                  Unlocking Growth
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once delay={0.25} className="whitespace-nowrap">
                  Through Precision.
                </TextAnimate>
              </h2>

              <p className="mt-8 max-w-sm text-base md:text-lg text-zinc-700 leading-relaxed font-sans">
                We build scalable solutions aligned with process innovation and forward-thinking technologies.
              </p>
            </div>

            {/* Right Column (Dynamic Text Cycling scroll visual) */}
            <div className="border-l-2 border-primary/40 pl-8 py-4 flex flex-col justify-center min-h-[220px]">
              <span ref={numRef} className="font-mono text-xs text-primary tracking-[0.28em] block uppercase mb-4">
                // 01 AI-Centered
              </span>

              <h3 ref={titleRef} className="font-clash font-bold text-2xl sm:text-3xl text-zinc-950 uppercase tracking-wide">
                AI-Centered
              </h3>

              <p ref={descRef} className="mt-5 text-base sm:text-lg text-zinc-700 leading-relaxed font-sans max-w-xl min-h-[80px]">
                In all of our work, we think about how AI can provide more efficiency and personalization. This drives how we experiment to deliver process innovation and data-driven.
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-zinc-200" />

          {/* Bottom Half: The Numbers Speak bar chart section */}
          <div className="flex flex-col w-full">
            <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block mb-8">
              // The Numbers Speak
            </span>

            {/* Staggered Heights Bars Layout - Base starts from bottom (items-end) and sharp corners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 items-end rounded-none">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-zinc-950 text-white p-6 flex flex-col justify-between transition-transform duration-500 hover:bg-zinc-900 ${stat.heightClass} relative rounded-none`}
                >
                  {/* Top Left Number with running count-up animation */}
                  <div className="font-clash font-bold text-4xl md:text-5xl text-primary tracking-tight">
                    <RunningNumber value={stat.value} />
                  </div>

                  {/* Bottom Right Label */}
                  <div className="text-right text-[0.6875rem] md:text-xs font-bold tracking-wider text-white/70 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
