import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { ScrollRevealText } from "@/components/site/ScrollRevealText";

export function PressRecognition() {
  const awards = [
    {
      id: "cannes",
      name: "Cannes Lions",
      subtitle: "Auberi Cannes Awards",
      logo: (
        <div className="flex flex-col items-center gap-1.5 select-none">
          {/* Roaring Lion profile SVG */}
          <svg viewBox="0 0 100 65" className="w-16 h-12 text-white/85 group-hover:text-primary transition-colors duration-500 fill-current">
            <path d="M50 10c-3 0-6 2-7 5-1-1-3-2-5-2-5 0-9 4-9 9 0 2.5 1 5 2.5 7-1.5 1-2.5 3-2.5 5 0 4.5 3.5 8 8 8 1.5 0 3-.5 4-1.2.7.7 1.5 1.2 2.5 1.5.3 1.2 1 2.2 2 3 .2 1 .8 1.8 1.5 2.5.5.8 1.2 1.5 2 2 .5.8 1.3 1.3 2.2 1.7.5.3 1 .6 1.7.7 1 .2 2 .3 3 .3h5v-5c0-1.5-.3-3-.7-4.4-.2-1-.7-2-1.3-3-.5-.7-1.2-1.3-2-1.8-.7-.5-1.5-.9-2.3-1.2-.5-.3-1-.5-1.5-.6-1-.2-2-.3-3-.3h-2c-1.5 0-3 .5-4 1.5-.7-.7-1.5-1.2-2.5-1.5 0-1.5.5-3 1.5-4 .7-.7 1.5-1.2 2.5-1.5 1.5 0 3 .5 4 1.5.7-.7 1.5-1.2 2.5-1.5V10H50z" className="opacity-80" />
            <path d="M51 22.8c-1.5-2.2-4.5-3.3-7.5-3.3-4.5 0-8.5 2.8-10.2 7-1.8 4.2-1 9 2.2 12.2 3.2 3.2 8 4 12.2 2.2 4.2-1.8 7-5.7 7-10.2 0-3-.8-6-2.5-7.9h-1.2z" />
          </svg>
          <span className="font-serif font-black tracking-tight text-[11px] text-white/95 uppercase leading-none block">Cannes Lions</span>
        </div>
      )
    },
    {
      id: "webby",
      name: "The Webby Awards",
      subtitle: "The Webby Awards",
      logo: (
        <div className="flex items-center gap-3 select-none">
          {/* Spiral/spring shape on left, stacked text on right */}
          <svg viewBox="0 0 40 80" className="w-9 h-14 text-white/85 group-hover:text-primary transition-colors duration-500 fill-none stroke-current stroke-[3]" strokeLinecap="round">
            {/* Spring coil */}
            <path d="M20 10c10 0 15 5 15 10s-5 10-15 10-15 5-15 10 5 10 15 10 15 5 15 10-5 10-15 10-15 5-15 10 5 10 15 10" />
          </svg>
          <div className="flex flex-col text-left font-sans font-bold leading-[0.95] text-[10px] tracking-wide text-white/95 uppercase">
            <span>The</span>
            <span className="text-primary group-hover:text-white transition-colors">Webby</span>
            <span>Awards</span>
          </div>
        </div>
      )
    },
    {
      id: "kyoorius",
      name: "Kyoorius Award",
      subtitle: "Kyoorius Award",
      logo: (
        <div className="flex items-center gap-3 select-none">
          {/* Elephant silhouette on left, text on right */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 text-white/85 group-hover:text-primary transition-colors duration-500 fill-current">
            <path d="M40 20c-5 0-9 4-9 9v12h4v-7c0-2.8 2.2-5 5-5s5 2.2 5 5v7h4V29c0-5-4-9-9-9zm-15 5c-3 0-5 2-5 5v5h2v-5c0-1.7 1.3-3 3-3s3 1.3 3 3v5h2v-5c0-3-2-5-5-5zm-10 8c-2 0-3 1-3 3v3h1v-3c0-1.1.9-2 2-2s2 .9 2 2v3h1v-3c0-2-1-3-3-3z" />
            <path d="M25 40c0-6 5-11 11-11s11 5 11 11H25z" className="opacity-70" />
          </svg>
          <div className="flex flex-col text-left font-sans font-black leading-[0.95] text-[9px] tracking-wide text-white/95 uppercase">
            <span>Kyoorius</span>
            <span>Design</span>
            <span>Awards</span>
          </div>
        </div>
      )
    },
    {
      id: "danish",
      name: "Danish Design Awards",
      subtitle: "Danish Design Awards",
      logo: (
        <div className="flex items-center gap-3 select-none">
          {/* Circle outline with D segment */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 text-white/85 group-hover:text-primary transition-colors duration-500 fill-none stroke-current stroke-[3.5]" strokeLinecap="round">
            <circle cx="30" cy="30" r="22" />
            <path d="M30 18v24c6 0 10-4 10-12s-4-12-10-12z" fill="currentColor" className="text-white/80 group-hover:text-primary transition-colors duration-500" />
          </svg>
          <div className="flex flex-col text-left font-sans font-bold leading-[0.95] text-[9px] tracking-wide text-white/95 uppercase">
            <span>Danish</span>
            <span>Design</span>
            <span>Award</span>
          </div>
        </div>
      )
    },
    {
      id: "dentsu",
      name: "Dentsu Creative",
      subtitle: "Dentsu Creative",
      logo: (
        <div className="flex items-center gap-3 select-none">
          {/* Bold geometric C logo */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 text-white/85 group-hover:text-primary transition-colors duration-500 fill-current">
            <path d="M45 15H25c-8.3 0-15 6.7-15 15s6.7 15 15 15h20v-8H25c-3.9 0-7-3.1-7-7s3.1-7 7-7h20v-8z" />
          </svg>
          <div className="flex flex-col text-left font-sans font-black leading-[0.95] text-[9px] tracking-wide text-white/95 uppercase">
            <span>Dentsu</span>
            <span>Creative</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        
        {/* Eyebrow */}
        <Reveal>
          <span className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary uppercase block">
            // Press & Recognition
          </span>
        </Reveal>

        {/* Heading */}
        <div className="mt-8 mb-16 md:mb-24">
          <ScrollRevealText
            text="Our work has been consistently recognized for its ability to push boundaries and deliver client results."
            preset="Blur Reveal"
            htmlTag="h2"
            colorHidden="rgba(255, 255, 255, 0.15)"
            colorRevealed="rgba(255, 255, 255, 1)"
            className="font-clash font-bold text-[7.5vw] sm:text-[5vw] lg:text-[3.2vw] leading-[1.15] uppercase tracking-normal max-w-5xl"
            trigger="Scroll"
            offsetStart={85}
            offsetEnd={30}
          />
        </div>

        {/* Infinite Card Marquee Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Overlay fade effect on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <div className="flex w-max gap-6 animate-[marquee_26s_linear_infinite] hover:[animation-play-state:paused]">
            {[0, 1, 2].map((k) => (
              <div key={k} className="flex gap-6">
                {awards.map((award, idx) => (
                  <div key={award.id + "-" + k} className="flex flex-col gap-4 w-[240px]">
                    {/* Card box */}
                    <div className="group h-[170px] bg-zinc-950/60 border border-border/40 rounded-xl p-6 flex items-center justify-center hover:bg-zinc-900/60 hover:border-primary/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden">
                      {/* Decorative glowing background effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      {award.logo}
                    </div>
                    {/* Subtitle label */}
                    <div className="text-[10px] md:text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase pl-1 truncate">
                      {award.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
    </section>
  );
}

export default PressRecognition;
