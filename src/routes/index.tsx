import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-intelligence.jpg";
import { ThreeHero } from "@/components/site/ThreeHero";
import { AboutSection } from "@/components/site/AboutSection";
import { MissionSection } from "@/components/site/MissionSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { OrbitProjects } from "@/components/site/OrbitProjects";
import { WorkingProcess } from "@/components/site/WorkingProcess";
import { HowWeOperate } from "@/components/site/HowWeOperate";
import { PressRecognition } from "@/components/site/PressRecognition";
import { TeamSection } from "@/components/site/TeamSection";
import { Preloader } from "@/components/site/Preloader";
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

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-start overflow-hidden pt-20 sm:pt-24 md:pt-12 pb-8 sm:pb-12 md:pb-12">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/60 z-0 pointer-events-none md:hidden" />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 flex flex-col pointer-events-none">

          <h1 className="relative z-10 display mt-0 text-[17vw] sm:text-[19vw] md:text-[21.5vw] leading-[1.0] w-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] md:drop-shadow-none">
            <span className="block w-full overflow-hidden pb-[4vw] sm:pb-[6vw]">
              <motion.span
                initial={{ y: "-115%", opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1 } : { y: "-115%", opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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

          {/* Description & Buttons with 3D Element in between on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-[1.25fr_0.75fr] gap-4 sm:gap-6 md:gap-16 items-start md:items-end w-full mt-3 sm:mt-6 md:mt-[16vh] pb-8 sm:pb-12">
            {/* Left Column: Left-aligned description */}
            <div className="relative z-30 text-left pointer-events-auto max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-100 md:text-muted-foreground/95 font-sans text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:drop-shadow-none"
              >
                We research, position, build, operate, protect and scale brands across digital
                marketplaces, DTC and physical distribution—from the USA to the UK, UAE and beyond.
              </motion.p>
            </div>

            {/* Dedicated 3D Carousel Stage on Mobile */}
            <div className="w-full h-[300px] sm:h-[360px] md:hidden relative pointer-events-none" />

            {/* CTA Buttons: Rendered AFTER the 3D element on mobile */}
            <div className="relative z-40 pointer-events-auto w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 justify-end items-stretch md:items-end w-full"
              >
                <Button asChild className="rounded-none w-full md:w-auto h-12 sm:h-14 bg-primary text-zinc-950 border-none hover:bg-primary/90 hover:scale-[1.02] transition-all before:hidden font-clash font-bold text-xs sm:text-sm">
                  <Link to="/contact">Build Your Growth System</Link>
                </Button>
                <Button asChild className="rounded-none border-2 border-white text-white before:bg-white hover:text-black bg-black/30 backdrop-blur-[2px] w-full md:w-auto h-12 sm:h-14 font-clash font-bold text-xs sm:text-sm">
                  <Link to="/capabilities">Explore Our Capabilities</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <ThreeHero isLoaded={isLoaded} />
      </section>

      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <WhyChooseUs />
      <OrbitProjects />
      <HowWeOperate />
      <WorkingProcess />
      <PressRecognition />
      <TeamSection />
    </>
  );
}
