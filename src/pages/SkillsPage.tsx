import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Database,
  HardDrive,
  Terminal,
  ShieldAlert,
  ShieldCheck,
  Search,
  Activity,
  BrainCircuit,
  GitBranch,
  Cpu,
  BarChart3,
  Github,
  Code2,
  Zap,
  Sparkles,
  Shield,
  Layers,
  CheckCircle2,
} from "lucide-react";
import {
  EDITORIAL_SKILL_SECTIONS,
  type EditorialSkill,
  type EditorialSkillSection,
} from "@/data/skills";

// =======================================================================
// CUSTOM TECHNOLOGY SVG ICONS
// Recognizable, balanced SVG icons for key technologies
// =======================================================================
function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="-11.5 -10.23 23 20.46"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" />
      <path d="M5.5 8.5h5M8 8.5v7M13.5 15.5c1.2.7 2.4.7 3.2.2s.5-1.3-.2-1.9c-.7-.6-2-.8-2-1.8 0-1 .8-1.5 2-1.5 1 0 1.8.3 2.5.8" />
    </svg>
  );
}

function JavaScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" />
      <path d="M7 15.5c.7.5 1.5.7 2.2.4.7-.4.9-1.1.6-1.8L8.2 11M13.5 15.5c1.2.7 2.4.7 3.2.2s.5-1.3-.2-1.9c-.7-.6-2-.8-2-1.8 0-1 .8-1.5 2-1.5 1 0 1.8.3 2.5.8" />
    </svg>
  );
}

function HTML5Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 3l1.5 17 6.5 2 6.5-2 1.5-17H4z" />
      <path d="M7 7h10M7.5 11h9M8 15h8l-.5 4-3.5 1-3.5-1" />
    </svg>
  );
}

function CSS3Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 3l1.5 17 6.5 2 6.5-2 1.5-17H4z" />
      <path d="M16.5 7H7.5l.5 4.5h8l-.5 4.5-3.5 1-3.5-1-.2-2" />
    </svg>
  );
}

function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 12c1-2 2.5-3 4.5-3 3 0 3.5 2.5 5.5 2.5 1.5 0 2.5-1 3.5-2.5-1 2-2.5 3-4.5 3-3 0-3.5-2.5-5.5-2.5-1.5 0-2.5 1-3.5 2.5z" />
      <path d="M3 17c1-2 2.5-3 4.5-3 3 0 3.5 2.5 5.5 2.5 1.5 0 2.5-1 3.5-2.5-1 2-2.5 3-4.5 3-3 0-3.5-2.5-5.5-2.5-1.5 0-2.5 1-3.5 2.5z" />
    </svg>
  );
}

function PythonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c-3.3 0-6 1.2-6 3.5v2h6v1H4.5C2.5 8.5 1 10.2 1 12.5s1.5 4 3.5 4H6v-2c0-1.7 1.3-3 3-3h6c1.7 0 3-1.3 3-3V5.5C18 3.2 15.3 2 12 2zm-1.5 2a1 1 0 110 2 1 1 0 010-2z" />
      <path d="M12 22c3.3 0 6-1.2 6-3.5v-2h-6v-1h7.5c2 0 3.5-1.7 3.5-4s-1.5-4-3.5-4H18v2c0 1.7-1.3 3-3 3H9c-1.7 0-3 1.3-3 3v3c0 2.3 2.7 3.5 6 3.5zm1.5-2a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

function PHPIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="12" rx="10" ry="7" />
      <path d="M7 14V9.5h2a1.5 1.5 0 010 3H7M12 14v-4.5h2a1.5 1.5 0 010 3h-2M12 12h1.5M17 14V9.5h2a1.5 1.5 0 010 3h-2" />
    </svg>
  );
}

function FlaskIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3h6M10 3v5l-5 9.5A2 2 0 006.8 21h10.4a2 2 0 001.8-3.5L14 8V3M7.5 16h9" />
    </svg>
  );
}

function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M6 8.5v7M18 11.5c-1 2.5-3 4-6 4H6" />
    </svg>
  );
}

// Icon Resolver Component
function RenderSkillIcon({ iconKey }: { iconKey: string }) {
  const iconProps = { className: "w-4 h-4" };

  switch (iconKey) {
    case "react":
      return <ReactIcon {...iconProps} />;
    case "typescript":
      return <TypeScriptIcon {...iconProps} />;
    case "javascript":
      return <JavaScriptIcon {...iconProps} />;
    case "html5":
      return <HTML5Icon {...iconProps} />;
    case "css3":
      return <CSS3Icon {...iconProps} />;
    case "tailwind":
      return <TailwindIcon {...iconProps} />;
    case "python":
      return <PythonIcon {...iconProps} />;
    case "php":
      return <PHPIcon {...iconProps} />;
    case "flask":
      return <FlaskIcon {...iconProps} />;
    case "mysql":
      return <Database {...iconProps} />;
    case "sqlite":
      return <HardDrive {...iconProps} />;
    case "linux":
      return <Terminal {...iconProps} />;
    case "metasploit":
      return <ShieldAlert {...iconProps} />;
    case "network-security":
      return <ShieldCheck {...iconProps} />;
    case "threat-analysis":
      return <Search {...iconProps} />;
    case "intrusion-detection":
      return <Activity {...iconProps} />;
    case "scikit-learn":
      return <BrainCircuit {...iconProps} />;
    case "random-forest":
      return <GitBranch {...iconProps} />;
    case "machine-learning":
      return <Cpu {...iconProps} />;
    case "data-analysis":
      return <BarChart3 {...iconProps} />;
    case "git":
      return <GitIcon {...iconProps} />;
    case "github":
      return <Github {...iconProps} />;
    case "vscode":
      return <Code2 {...iconProps} />;
    case "vite":
      return <Zap {...iconProps} />;
    default:
      return <Code2 {...iconProps} />;
  }
}

export default function SkillsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>("frontend");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of EDITORIAL_SKILL_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Motion variants
  const fadeInVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Calculate total verified technologies across all disciplines
  const totalVerifiedTech = EDITORIAL_SKILL_SECTIONS.reduce(
    (sum, section) => sum + section.skills.length,
    0
  );

  return (
    <main
      data-purpose="page-skills"
      className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-4 sm:pt-6 pb-28 select-none relative overflow-hidden"
    >
      <SEO {...seoConfig.skills} />
      {/* Restrained ambient background illumination */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/6 -left-32 w-96 h-96 rounded-full bg-[#C5A880]/[0.025] blur-[140px]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#A89AC9]/[0.025] blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* =========================================================
            TOP BREADCRUMB & RETURN TO HOMEPAGE ACTION
        ========================================================= */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#A7A39C]">
            <Link to="/" className="hover:text-[#F2EFE9] transition-colors">
              HOME
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#C5A880]">SKILLS</span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOMEPAGE</span>
          </Link>
        </div>

        {/* =========================================================
            1. HERO: PAGE INTRODUCTION & EDITORIAL HEADER
        ========================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="space-y-5"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
            <span className="text-[#C5A880] font-bold">04</span>
            <span className="text-white/20">&mdash;</span>
            <span>TECHNICAL EXPERTISE</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
            THE TECHNOLOGY
            <br />
            <span className="text-[#F2EFE9]">BEHIND MY WORK</span>
            <span className="text-[#C5A880]">.</span>
          </h1>

          {/* Short Narrative Introduction */}
          <p className="text-base sm:text-lg text-[#A7A39C] leading-[1.7] font-normal max-w-2xl">
            A disciplined technical foundation spanning modern software engineering, server-side
            architectures, cybersecurity defense, and intelligent systems.
          </p>

          {/* Dynamic Metadata Line */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              {totalVerifiedTech} VERIFIED TECHNOLOGIES
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              {EDITORIAL_SKILL_SECTIONS.length} CORE DISCIPLINES
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-[#C5A880]">
              PRACTICAL IMPLEMENTATION
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            COMPACT CATEGORY NAVIGATION (SMOOTH SCROLL)
        ========================================================= */}
        <div className="border-t border-white/[0.08] pt-6 sticky top-20 z-20 bg-[#0B0B0D]/90 backdrop-blur-md pb-4">
          <div className="flex items-center justify-start gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {EDITORIAL_SKILL_SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#F2EFE9] text-[#0B0B0D] border-[#F2EFE9] font-bold shadow-sm"
                      : "bg-white/[0.02] text-[#A7A39C] border-white/10 hover:text-[#F2EFE9] hover:border-white/25"
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? "text-[#0B0B0D]/60" : "text-[#77736F]"}`}>
                    {section.number}
                  </span>
                  <span>{section.shortTitle}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-black/15 text-black" : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {section.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            STRUCTURED EDITORIAL SECTIONS
        ========================================================= */}
        <div className="space-y-20 sm:space-y-24">
          {EDITORIAL_SKILL_SECTIONS.map((section: EditorialSkillSection) => {
            const isCyber = section.isSpecial === true;

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-36 pt-4 border-t border-white/[0.08]"
              >
                {/* Section Header */}
                <div className="mb-8 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736F]">
                      <span className={isCyber ? "text-[#A89AC9] font-bold" : "text-[#C5A880] font-bold"}>
                        {section.kicker}
                      </span>
                    </div>

                    {/* Distinctive Badge for Cybersecurity */}
                    {isCyber && section.specialBadge && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#A89AC9]/30 bg-[#A89AC9]/[0.08] text-[10px] font-mono tracking-widest text-[#A89AC9] uppercase">
                        <Shield className="w-3 h-3 text-[#A89AC9]" />
                        <span>{section.specialBadge}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F2EFE9]">
                      {section.title}
                      <span className={isCyber ? "text-[#A89AC9]" : "text-[#C5A880]"}>.</span>
                    </h2>
                    <span className="font-mono text-xs text-[#77736F] uppercase tracking-wider">
                      {section.skills.length} VERIFIED {section.skills.length === 1 ? "TOOL" : "TOOLS"}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#A7A39C] max-w-2xl font-light">
                    {section.subtitle}
                  </p>

                  {/* Visual Distinction Callout Note for Cybersecurity */}
                  {isCyber && section.specialNote && (
                    <div className="mt-4 p-4 rounded-xl border border-[#A89AC9]/20 bg-[#A89AC9]/[0.03] text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A89AC9] mt-2 shrink-0 animate-pulse" />
                      <span>{section.specialNote}</span>
                    </div>
                  )}
                </div>

                {/* Editorial Grid of Verified Skills */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    section.skills.length >= 5 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                  } gap-4 sm:gap-5`}
                >
                  {section.skills.map((skill: EditorialSkill, idx: number) => {
                    return (
                      <div
                        key={skill.name}
                        className={`group relative rounded-xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                          isCyber
                            ? "bg-[#111115]/95 border-white/[0.08] hover:border-[#A89AC9]/40 hover:bg-[#14141a]"
                            : "bg-[#111114]/90 border-white/[0.08] hover:border-[#C5A880]/35 hover:bg-[#141418]"
                        } shadow-[0_4px_20px_rgba(0,0,0,0.25)]`}
                      >
                        <div>
                          {/* Card Header: Icon + Name + Tag */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                  isCyber
                                    ? "border-white/10 bg-white/[0.03] text-[#A89AC9] group-hover:border-[#A89AC9]/50 group-hover:bg-[#A89AC9]/10"
                                    : "border-white/10 bg-white/[0.03] text-[#C5A880] group-hover:border-[#C5A880]/50 group-hover:bg-[#C5A880]/10"
                                }`}
                              >
                                <RenderSkillIcon iconKey={skill.iconKey} />
                              </div>

                              <div>
                                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors">
                                  {skill.name}
                                </h3>
                                <div className="font-mono text-[9px] uppercase tracking-widest text-[#77736F]">
                                  {section.shortTitle}
                                </div>
                              </div>
                            </div>

                            {/* Tag Pill */}
                            <span className="shrink-0 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono tracking-wider text-[#A7A39C] uppercase">
                              {skill.tag}
                            </span>
                          </div>

                          {/* Meaningful Context Description */}
                          <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light mb-5">
                            {skill.description}
                          </p>
                        </div>

                        {/* Card Bottom: Practical Implementation Context */}
                        <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#77736F]">
                          <span className="flex items-center gap-1.5 leading-tight">
                            <span
                              className={`w-1 h-1 rounded-full ${
                                isCyber ? "bg-[#A89AC9]" : "bg-[#C5A880]"
                              }`}
                            />
                            <span className="group-hover:text-[#A7A39C] transition-colors">
                              {skill.implementation}
                            </span>
                          </span>
                          <span className="text-[#55524F] shrink-0 ml-2">
                            #{section.number}.{String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM EDITORIAL SUMMARY & NAVIGATION STRIP
        ========================================================= */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-[#77736F]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>24 VERIFIED TECHNOLOGIES &bull; 05 SPECIALIZED DISCIPLINES</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 transition-all text-xs font-mono cursor-pointer"
            >
              <ArrowUp className="w-3 h-3" />
              <span>BACK TO TOP</span>
            </button>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white text-[#0B0B0D] hover:bg-[#F2EFE9] font-bold transition-all text-xs font-mono"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
