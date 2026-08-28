import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/registry/magicui/text-animate";

const services = [
  {
    num: "//01",
    title: "Copywriting",
    description:
      "At the core of everything we do is branding. We work closely with our clients to understand their business operations and challenges, enabling us to write copy that converts, builds relationships, and elevates brand voice.",
    subServices: [
      "Brand Positioning",
      "Tagline Development",
      "Copywriting",
      "Brand Naming",
      "Brand Identity",
      "Tone of Voice",
      "Brand Audits",
      "Brand Strategy",
    ],
    icon: (
      <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3.2" />
        <circle cx="16" cy="8" r="3.2" />
        <circle cx="8" cy="16" r="3.2" />
        <circle cx="16" cy="16" r="3.2" />
      </svg>
    ),
  },
  {
    num: "//02",
    title: "Branding",
    description:
      "Creating unified, compelling brand structures that anchor your business narrative across channels. We position your brand for growth and translate insights into execution.",
    subServices: [
      "Brand Guidelines",
      "Visual Identity",
      "Logo System Systems",
      "Collateral Design",
      "Rebranding Strategy",
      "Typography Design",
    ],
    icon: (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  {
    num: "//03",
    title: "Graphic Design",
    description:
      "Breaking through noise with dynamic layouts, visual assets, and state-of-the-art digital aesthetics that tell your brand story with visual excellence.",
    subServices: [
      "UI/UX Interface Design",
      "Marketing Collateral",
      "Packaging Design",
      "Social Campaign Assets",
      "Editorial Layouts",
      "Motion Graphics",
    ],
    icon: (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636" />
      </svg>
    ),
  },
  {
    num: "//04",
    title: "Digital Marketing",
    description:
      "Driving commercial demand and marketplace scale using data-led media buying, search intelligence, and conversion rate optimization frameworks.",
    subServices: [
      "SEO / SEM Audits",
      "Paid Search & Social",
      "Media Feasibility Study",
      "Omnichannel Strategy",
      "Creator Commerce",
      "Analytics Integration",
    ],
    icon: (
      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];



export function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -65 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-border bg-black py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block">
                // Our Services
              </span>

              {/* Animation Placeholder Container */}
              <div className="my-10 h-[260px] w-full flex items-center justify-center relative overflow-hidden">
                <div className="cube-viewport">
                  <div className="cube-container">
                    <div className="cube-box">
                      <div className="cube-element"></div>
                    </div>
                  </div>
                </div>
                <style>{`
                  .cube-viewport {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                  }
                  .cube-container {
                    position: relative;
                    width: 100%;
                    transform: rotate(-35deg) scale(0.42) translateY(15px);
                  }
                  .cube-box {
                    position: relative;
                    left: -100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(100% + 400px);
                    -webkit-box-reflect: below 1px linear-gradient(transparent, #000);
                    animation: animatesurface 1.5s ease-in-out infinite;
                  }
                  @keyframes animatesurface {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-200px);
                    }
                  }
                  .cube-element {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    background: var(--primary);
                    box-shadow: 0 0 5px var(--primary),
                                0 0 25px var(--primary),
                                0 0 50px var(--primary),
                                0 0 150px var(--primary);
                    transform-origin: bottom right;
                    animation: animatecube 1.5s ease-in-out infinite;
                  }
                  @keyframes animatecube {
                    0% { 
                      transform: rotate(0deg);
                    }
                    60%, 70%, 80%, 100% {
                      transform: rotate(90deg);
                    }
                    65% {
                      transform: rotate(85deg);
                    }
                    75% {
                      transform: rotate(87.5deg);
                    }
                  }
                `}</style>
              </div>

              <h2 className="font-clash font-bold text-[7.5vw] leading-[1.1] lg:text-[3.2vw] tracking-normal uppercase text-foreground mt-6 flex flex-col gap-1">
                <TextAnimate animation="blurInUp" by="character" once className="whitespace-nowrap">
                  Providing Solutions
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once delay={0.2} className="whitespace-nowrap">
                  and Services That
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once delay={0.4} className="whitespace-nowrap">
                  Uplift Your Business
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once delay={0.6} className="whitespace-nowrap">
                  and Your Customers.
                </TextAnimate>
              </h2>

              <p className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground/90 leading-relaxed font-sans">
                At our creative agency, imagination meets strategy. Our talented team crafts
                vibrant visuals and compelling narratives. We transform your vision into a
                dynamic brand experience that stands out.
              </p>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link to="/capabilities">
                  <span>View All Services</span>
                  <span>→</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column (Accordion) */}
          <div className="flex flex-col justify-center divide-y divide-border/60">
            {services.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  {/* Row Header */}
                  <div
                    onClick={() => setActiveIdx(idx)}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      {/* Icon Circle */}
                      <div className={`w-14 h-14 border border-border/60 flex items-center justify-center transition-all duration-300 ${isActive ? "bg-primary border-primary text-primary-foreground" : "bg-surface/20 group-hover:bg-surface/60 group-hover:border-primary/40 text-foreground"
                        }`}>
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className={`font-clash font-bold text-2xl sm:text-3xl uppercase tracking-wide transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary/70"
                        }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Service Number */}
                    <span className="font-mono text-xs sm:text-sm text-muted-foreground/60">
                      {item.num}
                    </span>
                  </div>

                  {/* Expandable Content Container */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-20"
                      >
                        <p className="text-base md:text-lg text-muted-foreground/90 max-w-xl leading-relaxed font-sans">
                          {item.description}
                        </p>

                        {/* Sub-services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8 max-w-xl text-[0.82rem] sm:text-sm tracking-[0.16em] uppercase font-clash text-foreground/85">
                          {item.subServices.map((sub, i) => (
                            <div key={i} className="transition-colors duration-300 hover:text-primary">
                              {sub}
                            </div>
                          ))}
                        </div>

                        {/* See Work Button */}
                        <div className="mt-8">
                          <Button asChild size="sm">
                            <Link to="/case-studies">
                              <span>See Work</span>
                              <span>→</span>
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
