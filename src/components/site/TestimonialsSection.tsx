import { useState, useRef } from "react";
import { motion, LayoutGroup } from "motion/react";
import { Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollRevealText } from "@/components/site/ScrollRevealText";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  title: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "01",
    name: "ANNE WEYING",
    role: "Cloud Sales Executive",
    company: "AMD",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    rating: 5.0,
    title: "EXCEPTIONAL SERVICE AND DEDICATION.",
    quote:
      "I am beyond impressed with the dedication and expertise of this creative agency. From start to finish, they provided excellent customer service and always kept us informed.",
  },
  {
    id: "02",
    name: "JOHN FITZGERALD",
    role: "Designer Manager",
    company: "HBO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    rating: 4.9,
    title: "OUTSTANDING CREATIVITY AND PROFESSIONALISM!",
    quote:
      "They consistently delivered on time and ensured our feedback was incorporated at every step. Highly recommended for anyone looking to take their brand to the next level!",
  },
  {
    id: "03",
    name: "ELENA RODRIGUEZ",
    role: "Product Lead",
    company: "Spotify",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    rating: 5.0,
    title: "TRANSFORMATIVE BRAND ARCHITECTURE.",
    quote:
      "Exceptional design quality delivered ahead of schedule. Their work gave our enterprise product the polished, high-end velocity we needed to dominate the category.",
  },
  {
    id: "04",
    name: "DAVID CHEN",
    role: "VP of Growth",
    company: "Nexus Capital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    rating: 4.8,
    title: "EVIDENCE-BASED RESULTS AND VELOCITY.",
    quote:
      "Professional, responsive, and incredibly talented. They architected our multi-region commerce systems and increased our international conversion by 42% in 90 days.",
  },
];

const summaryAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
];

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState<string>("01");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Total items in mobile carousel: 1 summary card + 4 testimonial cards = 5 cards
  const totalCards = 1 + testimonials.length;

  // Smooth scroll handler for mobile & desktop controls
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth > 640 ? 360 : 300;
    const offset = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Sync scroll position with pagination dots on mobile
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth > 640 ? 360 : 300;
    const newIndex = Math.min(totalCards - 1, Math.max(0, Math.round(scrollLeft / itemWidth)));
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full max-w-full bg-[#F4F3EE] text-zinc-950 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden border-b border-zinc-300/80">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-14 md:mb-18 items-start">
          {/* Left Column: Eyebrow & Minimalist Indicator */}
          <div className="lg:col-span-4 flex items-center justify-between lg:flex-col lg:items-start lg:justify-between h-full">
            <div>
              <span className="font-mono text-xs tracking-[0.28em] text-zinc-600 uppercase block mb-3 lg:mb-6 font-semibold">
                // TESTIMONIALS
              </span>
              <div className="w-8 h-8 rounded-full border border-zinc-400/80 hidden lg:flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-950" />
              </div>
            </div>

            {/* Mobile / Tablet Navigation Buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:border-black hover:text-black transition-colors active:scale-95 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:border-black hover:text-black transition-colors active:scale-95 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Heading & Editorial Subtext */}
          <div className="lg:col-span-8">
            <div className="mb-3 sm:mb-4">
              <ScrollRevealText
                text="CLIENT SUCCESS STORIES"
                preset="Blur Reveal"
                htmlTag="h2"
                colorHidden="rgba(0, 0, 0, 0.2)"
                colorRevealed="rgba(0, 0, 0, 1)"
                className="font-clash font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] uppercase tracking-tight leading-[1.05] text-black"
                trigger="Scroll"
                offsetStart={85}
                offsetEnd={35}
              />
            </div>
            <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-700 max-w-2xl leading-relaxed">
              Read our clients&apos; inspiring testimonials and see how their success reflects our
              creative vision. &ldquo;Each story celebrates our commitment to innovative design and
              exceptional service.&rdquo;
            </p>
          </div>
        </div>

        {/* Cards Deck Container */}
        {/* On Mobile/Tablet: Swipeable snap carousel with HIDDEN scrollbar */}
        {/* On Desktop: Fluid flex layout with spring-animated card expansion */}
        <LayoutGroup id="testimonials-framer-deck">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-row items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 pt-1 select-none snap-x snap-mandatory lg:snap-none no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Dark Metric Summary Card */}
            <div className="w-[84vw] sm:w-[320px] lg:w-[320px] xl:w-[340px] shrink-0 snap-center bg-[#0C0C0E] text-white rounded-[24px] sm:rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-xl border border-zinc-800/80 min-h-[390px] sm:min-h-[430px] md:min-h-[450px]">
              {/* Top Row: 4.9/5 Rating & Project Note */}
              <div className="flex items-start justify-between gap-3">
                <div className="shrink-0">
                  <span className="font-clash font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white flex items-baseline">
                    4.9<span className="text-lg sm:text-xl text-zinc-500 font-medium ml-1">/5</span>
                  </span>
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-zinc-300 leading-relaxed text-right max-w-[160px]">
                  We&apos;ve delivered{" "}
                  <a
                    href="#projects"
                    className="text-white underline underline-offset-4 font-semibold decoration-zinc-500 hover:decoration-white transition-colors"
                  >
                    150+ projects
                  </a>{" "}
                  that help companies generate real results.
                </p>
              </div>

              {/* Middle Row: Studio Branding */}
              <div className="my-auto py-6 sm:py-8">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center text-primary">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-white" />
                  </div>
                  <div>
                    <span className="font-clash font-bold text-xs sm:text-sm tracking-wider uppercase block text-white">
                      Ecom Gleam
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 tracking-widest uppercase block">
                      Commerce & Growth Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Client Avatars & Worldwide Rating */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 mb-2.5">
                  {/* Overlapping Avatar Pill Stack */}
                  <div className="flex items-center -space-x-2">
                    {summaryAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Client avatar"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0C0C0E] object-cover"
                      />
                    ))}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 border-2 border-[#0C0C0E] flex items-center justify-center text-[9px] font-mono text-zinc-300">
                      •••
                    </div>
                  </div>
                </div>

                {/* 5 Stars & Label */}
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider">
                    Trusted by clients worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Cards */}
            {/* Desktop: Flex distribution with Framer Motion layout expansion */}
            {/* Mobile: Snap-center cards with clean card widths */}
            {testimonials.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 32,
                    mass: 0.8,
                  }}
                  className={`relative rounded-[24px] sm:rounded-[26px] bg-white text-zinc-950 p-5 sm:p-6 md:p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 min-h-[390px] sm:min-h-[430px] md:min-h-[450px] overflow-hidden shrink-0 lg:shrink snap-center ${
                    isOpen
                      ? "w-[84vw] sm:w-[340px] lg:w-auto lg:flex-[1.7] border-zinc-400/80 shadow-2xl shadow-zinc-300/60 opacity-100 min-w-0"
                      : "w-[84vw] sm:w-[320px] lg:w-auto lg:flex-1 border-zinc-200/90 shadow-md shadow-zinc-200/40 opacity-85 hover:opacity-100 min-w-0"
                  }`}
                >
                  {/* Card Top: Avatar & Client Credentials */}
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-zinc-200/90">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0 shadow-sm border border-zinc-200"
                        />
                        <div>
                          <h4 className="font-clash font-bold text-xs sm:text-sm md:text-base text-black uppercase tracking-tight">
                            {item.name}
                          </h4>
                          <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 tracking-wide mt-0.5">
                            {item.role}, {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating Badge */}
                      <div className="flex items-center gap-1 bg-zinc-100 px-2 sm:px-2.5 py-1 rounded-full border border-zinc-200/80 shrink-0">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-zinc-700">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* Card Middle: Testimonial Headline & Quote */}
                    <div className="pt-4 sm:pt-6">
                      <h3 className="font-clash font-bold text-sm sm:text-base md:text-lg lg:text-xl text-black uppercase tracking-tight leading-snug mb-2.5 sm:mb-3.5">
                        {item.title}
                      </h3>

                      <p
                        className={`font-sans text-xs sm:text-[13px] md:text-sm text-zinc-700 leading-relaxed ${
                          isOpen ? "" : "line-clamp-4 lg:line-clamp-3 xl:line-clamp-4"
                        }`}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Quote Mark Accent & Label */}
                  <div className="flex items-end justify-between pt-4 sm:pt-6 mt-auto">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-400">
                      0{item.id} // VERIFIED CLIENT
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-900 leading-none select-none font-bold">
                      &rdquo;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Mobile / Tablet Pagination Indicators (Dots) */}
        <div className="flex lg:hidden justify-center items-center gap-1.5 mt-6">
          {[...Array(totalCards)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const container = scrollContainerRef.current;
                const itemWidth = container.clientWidth > 640 ? 360 : 300;
                container.scrollTo({ left: idx * itemWidth, behavior: "smooth" });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-zinc-950" : "w-1.5 bg-zinc-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
