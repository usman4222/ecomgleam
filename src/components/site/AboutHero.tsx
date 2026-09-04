import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, ShieldCheck, Globe, Compass } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  sub: string;
  icon: typeof TrendingUp;
}

const metrics: MetricItem[] = [
  {
    value: "$1.4B+",
    label: "Total GMV Scaled",
    sub: "Across digital marketplaces & omnichannel retail",
    icon: TrendingUp,
  },
  {
    value: "14+",
    label: "Global Markets",
    sub: "USA, UK, European Union & UAE ecosystems",
    icon: Globe,
  },
  {
    value: "99.4%",
    label: "Channel Compliance",
    sub: "Automated MAP enforcement & rogue seller removal",
    icon: ShieldCheck,
  },
  {
    value: "20+ Yrs",
    label: "Market Leadership",
    sub: "Executive strategy connecting digital & physical supply",
    icon: Compass,
  },
];

export function AboutHero() {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        
        {/* ========================================================================= */}
        {/* MAIN HERO BANNER: Clean, uncluttered, matching reference image 1:1        */}
        {/* Image is fully visible, crisp, and warm without dark heavy gradients      */}
        {/* ========================================================================= */}
        <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between p-5 sm:p-8 md:p-12 lg:p-14">
          
          {/* Background Image: Clearly visible with full natural warmth */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/about-hero-ecomgleam.jpg"
              alt="About Ecom Gleam"
              className="w-full h-full object-cover object-center"
            />
            {/* Minimal subtle scrim only to ensure text legibility while keeping the image vibrant and clear */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* TOP ROW: Contact Info on Left, Pill Button on Right */}
          <div className="relative z-10 flex items-start justify-between gap-4">
            
            {/* Left Contact Group */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              {/* City & Email */}
              <div className="flex flex-col space-y-0.5 font-sans font-medium">
                <span className="text-white/95">Based In Los Angeles, California</span>
                <a
                  href="mailto:contact@ecomgleam.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@ecomgleam.com
                </a>
                <a
                  href="tel:2341096666"
                  className="sm:hidden text-white/90 hover:text-white transition-colors pt-0.5"
                >
                  Call Us — (234) 109-6666
                </a>
              </div>

              {/* Vertical Divider with '+' sign (exact match to image) */}
              <div className="hidden sm:flex items-center gap-4 text-white/50">
                <span className="h-7 w-px bg-white/30" />
                <span className="text-sm font-light select-none text-white/70">+</span>
              </div>

              {/* Phone */}
              <div className="hidden sm:block font-sans font-medium text-white/95">
                <a href="tel:2341096666" className="hover:text-white transition-colors">
                  Call Us — (234) 109-6666
                </a>
              </div>
            </motion.div>

            {/* Right: Pill Button "GET IN TOUCH ->" (exact match to image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="shrink-0"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2 sm:px-8 sm:py-3 rounded-full bg-white text-black font-clash font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95 shadow-xl"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* MIDDLE LEFT: Eyebrow "• About Ecom Gleam" */}
          <div className="relative z-10 my-auto">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-sans font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              <span className="text-primary text-base font-bold">•</span>
              <span>About Ecom Gleam</span>
            </motion.div>
          </div>

          {/* BOTTOM RIGHT: Bold Statement (exact match to image) */}
          <div className="relative z-10 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-right max-w-2xl sm:max-w-3xl"
            >
              <h1 className="font-clash font-extrabold uppercase text-white tracking-tight leading-[0.92] text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Empathy and Innovation<br />
                Create Engaging Digital<br />
                Experiences
              </h1>
            </motion.div>
          </div>

        </div>


        {/* ========================================================================= */}
        {/* MORE CONTENT SECTION: Cleanly placed BELOW the banner, not cluttering it  */}
        {/* ========================================================================= */}
        <div className="mt-16 md:mt-24 space-y-16">
          
          {/* Introduction & Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-border pb-16">
            <div className="lg:col-span-4">
              <span className="eyebrow block">Strategic Vision</span>
              <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-foreground">
                Connecting Ideas With Unmatched Execution
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                We believe brand elevation requires more than just marketing or creative design. It demands deep consumer intelligence, high-velocity omnichannel execution, and seamless integration with supply and retail ecosystems.
              </p>
              <p>
                From launching flagship campaigns to scaling cross-border distribution across the U.S., UK, and UAE, we unite strategic rigor with creative craft to build category leaders that endure.
              </p>
            </div>
          </div>

          {/* Metric Strip: High-Impact Performance Data */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="eyebrow">Key Milestones & Scale</span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Updated 2026
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="panel p-6 sm:p-8 relative group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-primary font-bold tracking-wider">
                        0{idx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <div className="font-clash font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
                        {m.value}
                      </div>
                      <div className="font-clash font-bold text-sm text-foreground uppercase tracking-wide">
                        {m.label}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        {m.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;
