import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/registry/magicui/text-animate";

export function AboutSection() {
  const items = [
    {
      title: "Harnessing the Power of Ideas",
      description: "We transform creative concepts into inspiring campaigns.",
    },
    {
      title: "Ultimate Connectivity",
      description:
        "By seamlessly merging modern marketing with breakthrough design, we craft a unique identity for every brand.",
    },
    {
      title: "Partners in Success",
      description:
        "With attentive listening and close collaboration, we elevate each project to unprecedented heights.",
    },
  ];

  return (
    <section className="relative border-b border-border bg-[var(--ink)] py-20 md:py-32 overflow-hidden">
      {/* Absolute center dividing line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-[var(--ink)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <Reveal>
                <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block">
                  // About Ecom Gleam
                </span>
              </Reveal>

              <div className="mt-8 md:mt-16">
                <h2 className="font-clash font-bold text-[8.5vw] leading-[1.1] md:text-[4.2vw] tracking-normal uppercase text-foreground flex flex-col gap-1">
                  <TextAnimate animation="blurInUp" by="character" once className="whitespace-nowrap">
                    Sparking Ideas,
                  </TextAnimate>
                  <TextAnimate animation="blurInUp" by="character" once delay={0.25} className="whitespace-nowrap">
                    Igniting Success.
                  </TextAnimate>
                </h2>
              </div>
            </div>

            <div className="mt-10 md:mt-16">
              <Reveal delay={0.1}>
                <p className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
                  Hey! Look at me! You like getting attention? Us too. With 20+ years in the
                  brand building business, we are skilled at making you standout. Ready to reach
                  your audience, secure greater sales and entice top talent? Read on my friend...
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between relative pt-8 md:pt-0">
            {/* Top Right Label */}
            <div className="md:absolute top-0 right-0 text-right mb-8 md:mb-0">
              <Reveal>
                <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-muted-foreground uppercase">
                  Since 2015
                </span>
              </Reveal>
            </div>

            {/* List of items */}
            <div className="space-y-10 md:mt-16">
              {items.map((item, idx) => (
                <Reveal key={idx} delay={0.15 + idx * 0.05}>
                  <div className="group flex items-start gap-4">
                    {/* List Bullet Point */}
                    <span className="text-xl text-primary font-bold leading-none mt-1">•</span>
                    <div className="space-y-2">
                      <h3 className="font-clash text-lg font-bold text-foreground tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Button */}
            <div className="mt-12 md:mt-16">
              <Reveal delay={0.35}>
                <Button asChild>
                  <Link to="/about" className="flex items-center gap-2">
                    <span>More About Us</span>
                    <span className="text-sm">→</span>
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
