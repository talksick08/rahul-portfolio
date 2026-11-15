import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onSelectService?: (index: number) => void;
}

export default function Hero({ onSelectService }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle scroll-linked parallax for the portrait, clamped so it never moves upward over the solid headline
  const portraitParallaxY = useTransform(scrollY, [0, 450], [0, shouldReduceMotion ? 0 : 20]);

  // Entrance animation variants
  const solidTitleVariant = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const outlinedTitleVariant = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 28,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const portraitVariant = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.18, duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const leftVariant = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.28, duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const rightVariant = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.34, duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      data-purpose="hero-section"
      className="relative isolate min-h-[calc(100dvh-72px)] lg:h-[calc(100svh-88px)] max-h-[1100px] overflow-hidden bg-[#f4f3ef] px-4 sm:px-6 md:px-8 lg:px-12 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 text-[#111] select-none flex flex-col justify-between"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-black/10" />

      {/* Main Typography Header: Two distinct oversized typography lines dominating the Hero */}
      <h1 className="relative mx-auto w-full max-w-[1400px] text-center select-none pointer-events-none pt-0 sm:pt-1">
        <span className="sr-only">Rahul Mahanta — Developer Portfolio &amp; Computer Science Student</span>
        {/* Line 1: Solid deep charcoal headline — z-index 20 (layers cleanly in FRONT) */}
        <span className="relative z-20 block">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={solidTitleVariant}
            className="block font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-[#121212] text-[clamp(1.95rem,7.4vw,6.6rem)]"
          >
            EXPLORE MY
          </motion.span>
        </span>

        {/* Line 2: Thin outlined charcoal typography — z-index 10 */}
        <span className="relative z-10 -mt-1 sm:-mt-2 block">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={outlinedTitleVariant}
            className="block font-black uppercase leading-[0.85] tracking-[-0.045em] text-[clamp(2.55rem,10.2vw,9.0rem)] text-transparent"
            style={{
              WebkitTextStroke: "1.5px #171717",
            }}
          >
            PORTFOLIO
          </motion.span>
        </span>
      </h1>

      {/* Centered Approved Black-and-White Suit Portrait: Headroom fixed, complete curls preserved, fully responsive */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={portraitVariant}
        style={{ y: portraitParallaxY }}
        className="pointer-events-none relative lg:absolute lg:bottom-6 xl:bottom-8 lg:left-1/2 lg:-translate-x-1/2 z-[15] flex items-end justify-center -mt-1 sm:-mt-3 lg:mt-0 h-[30vh] sm:h-[38vh] md:h-[44vh] lg:h-[62vh] xl:h-[65vh] min-h-[200px] max-h-[600px] w-full max-w-[270px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[560px] xl:max-w-[600px] mx-auto"
      >
        <picture className="h-full w-full flex items-end justify-center">
          <source srcSet="/assets/rahul-portrait-headroom-fixed.webp" type="image/webp" />
          <img
            src="/assets/rahul-portrait-headroom-fixed.png"
            alt="Rahul Mahanta — Computer Science Student & Developer"
            className="h-full w-full select-none object-contain object-bottom"
            draggable={false}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </motion.div>

      {/* Side Content Columns: z-index 30 (topmost foreground layer, fully accessible and contained within viewport) */}
      <div className="relative z-30 mx-auto mt-2 lg:mt-auto flex flex-col md:flex-row md:items-end justify-between w-full max-w-[1400px] gap-5 md:gap-4 lg:gap-0 pb-1 lg:pb-2 pointer-events-none px-2 sm:px-4">
        
        {/* Left Column: Academic Identity & Navigation CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftVariant}
          className="pointer-events-auto flex flex-col items-start gap-2.5 sm:gap-4 max-w-full sm:max-w-[280px]"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-black/50 block font-bold">
              PORTFOLIO &bull; 2026
            </span>
            <p className="max-w-[250px] text-xs sm:text-sm font-extrabold uppercase leading-[1.4] tracking-[0.15em] text-black">
              COMPUTER SCIENCE STUDENT
              <span className="block text-black/60 font-semibold text-[11px] tracking-[0.16em] mt-0.5">
                &amp; DEVELOPER
              </span>
            </p>
          </div>

          {/* Clear Editorial Navigation Actions with Touch-Friendly Targets */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full sm:w-auto pt-0.5">
            <Link
              to="/projects"
              className="px-5 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center justify-between gap-3 sm:gap-4 shadow-sm group cursor-pointer min-h-[44px]"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/about"
              className="px-5 py-3 rounded-full border border-black/25 hover:border-black text-black hover:bg-black/5 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center justify-between gap-3 sm:gap-4 cursor-pointer min-h-[44px]"
            >
              <span>ABOUT ME</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Professional Intro & Focus Disciplines */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rightVariant}
          className="pointer-events-auto flex flex-col items-start md:items-end gap-2.5 sm:gap-4 max-w-full sm:max-w-[290px]"
        >
          <div className="space-y-1 md:text-right">
            <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-black">
              CURIOUS BY NATURE. DRIVEN BY TECHNOLOGY.
            </h2>
            <p className="text-[10px] sm:text-[11px] font-medium leading-[1.55] tracking-[0.08em] text-black/65">
              Building practical software, exploring cybersecurity, and solving real-world problems.
            </p>
          </div>

          <div className="flex flex-col items-start gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-black/70 md:items-end">
            <span className="text-[9px] font-mono text-black/40 tracking-widest">FOCUS DISCIPLINES</span>
            <Link to="/projects" className="group inline-flex items-center gap-2 hover:text-black transition-colors min-h-[28px]">
              <span className="h-px w-0 bg-black transition-all duration-300 group-hover:w-4" />
              FULL-STACK WEB DEVELOPMENT
            </Link>
            <Link to="/projects" className="group inline-flex items-center gap-2 hover:text-black transition-colors min-h-[28px]">
              <span className="h-px w-0 bg-black transition-all duration-300 group-hover:w-4" />
              CYBERSECURITY &amp; THREAT MONITORING
            </Link>
            <Link to="/skills" className="group inline-flex items-center gap-2 hover:text-black transition-colors min-h-[28px]">
              <span className="h-px w-0 bg-black transition-all duration-300 group-hover:w-4" />
              APPLIED MACHINE LEARNING
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metadata Information Strip: z-index 30 */}
      <div className="relative z-30 mx-auto flex flex-col sm:flex-row w-full max-w-[1400px] items-center justify-between border-t border-black/15 pt-2 sm:pt-2.5 pb-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/45 gap-1.5 sm:gap-0 px-2 sm:px-4 text-center sm:text-left">
        <span>INDEPENDENT DIGITAL PRACTICE</span>
        <span>GALGOTIAS UNIVERSITY &bull; INDIA &bull; 2026</span>
        <a
          href="#preview-about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("preview-about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="transition-colors hover:text-black inline-flex items-center gap-1.5 cursor-pointer min-h-[28px]"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
