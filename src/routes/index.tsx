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

          {/* Description (left side) and Buttons (right side) split grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-8 md:gap-16 items-end w-full mt-[12vh] md:mt-[16vh] pb-12">
            {/* Left Column: Left-aligned description (z-20 behind z-30 cards) */}
            <div className="relative z-20 text-left">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.9, delay: 0.35 }}
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
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
