import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface NavLinkItem {
  to: string;
  label: string;
  external?: boolean;
}

interface NavColumn {
  title: string;
  links: NavLinkItem[];
}

const columns: NavColumn[] = [
  {
    title: "Capabilities",
    links: [
      { to: "/research-intelligence", label: "Research & Intelligence" },
      { to: "/brand-strategy", label: "Brand Strategy" },
      { to: "/commerce-marketplaces", label: "Commerce & Marketplaces" },
      { to: "/performance-creative", label: "Performance & Creative" },
    ],
  },
  {
    title: "Control & Scale",
    links: [
      { to: "/brand-protection", label: "Brand Protection & Control" },
      { to: "/international-expansion", label: "International Expansion" },
      { to: "/distribution-omnichannel", label: "Distribution & Omnichannel" },
      { to: "/capabilities", label: "All Capabilities" },
    ],
  },
  {
    title: "Firm",
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/industries", label: "Industries" },
      { to: "/insights", label: "Insights" },
      { to: "/about", label: "About / Leadership" },
    ],
  },
  {
    title: "Connect",
    links: [
      { to: "/contact", label: "Request Diagnostic" },
      { to: "https://linkedin.com", label: "LinkedIn", external: true },
      { to: "https://x.com", label: "X / Twitter", external: true },
      { to: "https://instagram.com", label: "Instagram", external: true },
    ],
  },
];

// Custom 8-point rotating geometric Asterisk icon from Framer source
function AsteriskIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6 text-primary shrink-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      whileHover={{ rotate: 180, scale: 1.2, transition: { duration: 0.4 } }}
    >
      <path
        d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

// Interactive Link with animated slide-in underline from Framer FooterLink
function FooterLink({ to, label, external }: NavLinkItem) {
  const content = (
    <span className="group relative inline-flex items-center gap-1 text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 font-sans">
      <span>{label}</span>
      {external && (
        <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
      )}
      {/* Animated Underline */}
      <span className="absolute bottom-0.5 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
    </span>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="inline-block">
      {content}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full bg-[var(--ink)] text-foreground border-t border-border overflow-hidden select-none">
      {/* === Animated Breathing Glow Orbs (In Ecom Gleam Theme Tokens) === */}
      {/* Glow 1: Bottom Left Main */}
      <motion.div
        animate={{
          x: [0, 180, 0],
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -left-16 w-[500px] h-[300px] pointer-events-none rounded-full blur-[60px] -z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--gleam) 40%, transparent) 0%, transparent 100%)",
        }}
      />

      {/* Glow 2: Top Right Small */}
      <motion.div
        animate={{
          x: [0, -140, 0],
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -top-20 right-10 w-[440px] h-[260px] pointer-events-none rounded-full blur-[65px] -z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--gleam-soft) 30%, transparent) 0%, transparent 100%)",
        }}
      />

      {/* Glow 3: Bottom Center Deep */}
      <motion.div
        animate={{
          x: [0, -90, 0],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-28 left-1/3 w-[460px] h-[260px] pointer-events-none rounded-full blur-[70px] -z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--gleam) 22%, transparent) 0%, transparent 100%)",
        }}
      />

      {/* Full-width content wrapper */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
        {/* Top Content Row: Brand Info on Left, Link Columns on Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-5 max-w-sm">
            {/* Logo Link with Rotating Asterisk */}
            <Link
              to="/"
              className="group flex items-center gap-3 text-decoration-none cursor-pointer"
            >
              <AsteriskIcon />
              <span className="font-clash font-extrabold text-2xl sm:text-3xl text-foreground tracking-[1.5px] uppercase group-hover:text-primary transition-colors">
                Ecom Gleam
              </span>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans max-w-[340px]">
              An integrated Brand Growth, Commerce &amp; Market Expansion firm operating across the
              United States, United Kingdom and United Arab Emirates.
            </p>

            {/* Glowing CTA Button in Theme Primary */}
            <motion.div
              whileHover={{ rotate: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="mt-2"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-clash font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_color-mix(in_oklab,var(--gleam)_45%,transparent)]"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 4 Link Columns in Theme Grid */}
          <div className="w-full lg:w-auto flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:gap-14 max-w-3xl">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                {/* Column Title in Theme Primary */}
                <h4 className="font-mono text-[11px] sm:text-xs font-bold text-primary tracking-[0.2em] uppercase mb-1">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-border my-12 sm:my-16" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.1em]">
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Ecom Gleam. All rights reserved.
          </span>

          <div className="flex items-center gap-3 text-muted-foreground">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </motion.div>
            <span>USA &middot; UK &middot; UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
