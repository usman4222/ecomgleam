import { useEffect, useRef, type ElementType, type ReactNode } from "react";

let registered = false;

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 28,
  x = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      if (!registered) {
        gsap.registerPlugin(ScrollTrigger);
        registered = true;
      }
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y, x },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      }, el);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [delay, y, x]);

  return (
    <Tag ref={ref as never} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}

