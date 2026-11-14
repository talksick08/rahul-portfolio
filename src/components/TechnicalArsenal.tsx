import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Shield,
  BrainCircuit,
  Wrench,
  Layers,
  Terminal,
  Cpu,
  Boxes,
  Lock,
  Binary,
  ArrowUpRight,
  Sparkles,
  Workflow,
  HardDrive,
  ShieldCheck,
  ShieldAlert,
  GitBranch,
  Search,
  Activity,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory, SkillItem } from "@/data/skills";

// =======================================================================
// CUSTOM RECOGNIZABLE TECHNOLOGY ICON COMPONENTS
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

// =======================================================================
// HOMEPAGE TECHNICAL ECOSYSTEM DATA (4 AUTHENTIC CATEGORIES)
// =======================================================================
interface SkillEntry {
  name: string;
  context: string;
  icon: React.ReactNode;
}

interface CategoryGroup {
  number: string;
  kicker: string;
  title: string;
  subtitle: string;
  isSpecial?: boolean;
  specialBadge?: string;
  skills: SkillEntry[];
}

const HOMEPAGE_SKILL_CATEGORIES: CategoryGroup[] = [
  {
    number: "01",
    kicker: "01 — CLIENT ARCHITECTURE",
    title: "FRONTEND DEVELOPMENT",
    subtitle: "Component systems & responsive interfaces",
    skills: [
      { name: "React", context: "UI Architecture", icon: <ReactIcon /> },
      { name: "TypeScript", context: "Type-Safe Contracts", icon: <TypeScriptIcon /> },
      { name: "JavaScript", context: "Modern ES6+ Logic", icon: <JavaScriptIcon /> },
      { name: "Tailwind CSS", context: "Utility Design", icon: <TailwindIcon /> },
    ],
  },
  {
    number: "02",
    kicker: "02 — SYSTEMS & DATA",
    title: "BACKEND & DATABASES",
    subtitle: "Server runtimes & structured persistence",
    skills: [
      { name: "Python", context: "Systems & Scripting", icon: <PythonIcon /> },
      { name: "PHP", context: "Server-Side Logic", icon: <Server className="w-4 h-4" /> },
      { name: "Flask", context: "RESTful Services", icon: <FlaskIcon /> },
      { name: "MySQL", context: "Relational SQL", icon: <Database className="w-4 h-4" /> },
      { name: "SQLite", context: "Embedded Storage", icon: <HardDrive className="w-4 h-4" /> },
    ],
  },
  {
    number: "03",
    kicker: "03 — DEFENSIVE PRACTICE",
    title: "CYBERSECURITY",
    subtitle: "Traffic auditing & threat inspection",
    isSpecial: true,
    specialBadge: "DEFENSIVE LABS",
    skills: [
      { name: "Linux", context: "CLI & Systems", icon: <Terminal className="w-4 h-4" /> },
      { name: "Metasploit", context: "Security Framework", icon: <ShieldAlert className="w-4 h-4" /> },
      { name: "Network Security", context: "Traffic Inspection", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Threat Analysis", context: "Vulnerability Modeling", icon: <Search className="w-4 h-4" /> },
      { name: "Intrusion Detection", context: "Packet Monitoring", icon: <Activity className="w-4 h-4" /> },
    ],
  },
  {
    number: "04",
    kicker: "04 — INTELLIGENT SYSTEMS",
    title: "AI & MACHINE LEARNING",
    subtitle: "Predictive models & dataset evaluation",
    skills: [
      { name: "Scikit-learn", context: "Model Pipelines", icon: <BrainCircuit className="w-4 h-4" /> },
      { name: "Random Forest", context: "Ensemble Classifiers", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Machine Learning", context: "Predictive Systems", icon: <Cpu className="w-4 h-4" /> },
      { name: "Data Analysis", context: "Statistical Evaluation", icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
];

// =======================================================================
// HOMEPAGE COMPACT EDITORIAL PREVIEW (compact === true)
// =======================================================================
function CompactSkillsSection() {
  const shouldReduceMotion = useReducedMotion();

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

  const columnVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="skills"
      data-purpose="homepage-technical-ecosystem"
      className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] py-16 sm:py-20 md:py-24 lg:py-28 select-none scroll-mt-20 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Restrained ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#C5A880]/[0.025] blur-[130px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#A89AC9]/[0.025] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-10 sm:space-y-12">
        
        {/* =========================================================
            1. SECTION HEADING & EDITORIAL HEADER
        ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          variants={fadeInVariants}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/[0.08]"
        >
          <div className="space-y-4 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">04</span>
              <span className="text-white/20">&mdash;</span>
              <span>TECHNICAL ECOSYSTEM</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.08]">
              THE TOOLS BEHIND
              <br />
              <span className="text-[#F2EFE9]">THE THINKING</span>
              <span className="text-[#C5A880]">.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-[15px] md:text-base text-[#A7A39C] leading-[1.7] font-normal max-w-xl">
              A growing technical toolkit across software development, cybersecurity and intelligent systems.
            </p>
          </div>

          {/* Right Action / CTA & Summary */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 sm:gap-4 shrink-0">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#77736F]">
              <span className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
                4 CATEGORIES
              </span>
              <span className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
                18 CORE TOOLS
              </span>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-[#F2EFE9] hover:text-[#0B0B0D] hover:border-[#F2EFE9] text-xs font-bold uppercase tracking-wider transition-all duration-300 group cursor-pointer shadow-sm"
            >
              <span>EXPLORE ALL SKILLS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            2. REFINED EDITORIAL GRID (4 BALANCED CATEGORIES)
        ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {HOMEPAGE_SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              variants={columnVariants}
              className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                cat.isSpecial
                  ? "border border-[#C5A880]/35 bg-[#121115]/95 hover:border-[#C5A880]/55 shadow-[0_4px_28px_rgba(0,0,0,0.4)]"
                  : "border border-white/[0.08] bg-[#111114]/90 hover:border-[#C5A880]/30 hover:bg-[#141418] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              }`}
            >
              <div>
                {/* Category Header Strip */}
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#C5A880]">
                      {cat.number}
                    </span>
                    <span className="text-white/20">&bull;</span>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[#77736F]">
                      {cat.skills.length} TOOLS
                    </span>
                  </div>

                  {cat.specialBadge ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[9px] font-mono tracking-wider uppercase text-[#C5A880]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                      <span>{cat.specialBadge}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736F]">
                      ACTIVE
                    </span>
                  )}
                </div>

                {/* Category Title & Subtitle */}
                <div className="space-y-1 mb-5">
                  <h3 className="text-base sm:text-[17px] font-extrabold uppercase tracking-tight text-[#F2EFE9] leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#A7A39C] leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Compact Technology Items List with Stacked Label (Zero Truncation) */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between gap-3 p-2.5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:border-[#C5A880]/35 hover:bg-[#C5A880]/[0.05] transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/[0.08] flex items-center justify-center shrink-0 text-[#C5A880] group-hover/item:text-white group-hover/item:border-[#C5A880]/40 transition-colors">
                          <div className={shouldReduceMotion ? undefined : "transition-transform duration-200 group-hover/item:scale-110"}>
                            {skill.icon}
                          </div>
                        </div>

                        <div className="flex flex-col min-w-0">
                          <span className="text-[13px] sm:text-[13.5px] font-bold text-[#F2EFE9] group-hover/item:text-white transition-colors tracking-tight leading-snug">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#77736F] group-hover/item:text-[#A7A39C] transition-colors leading-tight">
                            {skill.context}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Discipline Indicator */}
              <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[9px] font-mono text-[#77736F]">
                <span>DISCIPLINE {cat.number}</span>
                <span className="text-[#C5A880]/80">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            3. SECTION BOTTOM METADATA STRIP
        ========================================================= */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>DISCIPLINED ITERATION &bull; MODERN COMPONENT ARCHITECTURES</span>
          </div>
          <span>FRONTEND &bull; BACKEND &bull; SECURITY &bull; INTELLIGENT SYSTEMS</span>
        </div>

      </div>
    </section>
  );
}

// Helper icon resolver per skill name for the full catalog
function getSkillIcon(name: string, categoryId: string) {
  const iconProps = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };

  switch (categoryId) {
    case "frontend":
      return <Code2 {...iconProps} className="w-5 h-5 text-[#C5A880] group-hover:text-white" />;
    case "backend":
      return <Server {...iconProps} className="w-5 h-5 text-[#C5A880] group-hover:text-white" />;
    case "databases":
      return <Database {...iconProps} className="w-5 h-5 text-[#C5A880] group-hover:text-white" />;
    case "cybersecurity":
      return <Shield {...iconProps} className="w-5 h-5 text-[#A89AC9] group-hover:text-white" />;
    case "machine-learning":
      return <BrainCircuit {...iconProps} className="w-5 h-5 text-[#C5A880] group-hover:text-white" />;
    case "tools":
      return <Wrench {...iconProps} className="w-5 h-5 text-[#A7A39C] group-hover:text-white" />;
    default:
      return <Cpu {...iconProps} className="w-5 h-5 text-neutral-300" />;
  }
}

interface TechnicalArsenalProps {
  compact?: boolean;
}

// =======================================================================
// MAIN COMPONENT (Conditional: Homepage Compact vs Dedicated /skills Page)
// =======================================================================
export default function TechnicalArsenal({ compact = false }: TechnicalArsenalProps) {
  // Homepage preview uses the compact editorial technology ecosystem
  if (compact) {
    return <CompactSkillsSection />;
  }

  // Dedicated /skills page uses the complete catalog with category filters
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  // All skills flat
  const allSkills = SKILL_CATEGORIES.flatMap((cat) => cat.skills);

  // Filter skills based on tab
  const displayedSkills: { skill: SkillItem; category: SkillCategory }[] =
    activeCategory === "all"
      ? SKILL_CATEGORIES.flatMap((cat) => cat.skills.map((s) => ({ skill: s, category: cat })))
      : (SKILL_CATEGORIES.find((c) => c.id === activeCategory)?.skills.map((s) => ({
          skill: s,
          category: SKILL_CATEGORIES.find((c) => c.id === activeCategory)!,
        })) ?? []);

  const totalTechnologies = allSkills.length;

  return (
    <section
      id="skills"
      data-purpose="technical-arsenal"
      className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] py-16 sm:py-20 md:py-28 overflow-hidden scroll-mt-24 select-none"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C5A880]/[0.025] blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#A89AC9]/[0.025] blur-[180px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-10 mb-12">
          {/* Eyebrow Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-widest uppercase text-[#F2EFE9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span>TECHNICAL ARSENAL &bull; 06 DISCIPLINES</span>
            </div>

            <div className="font-mono text-xs text-[#77736F] uppercase tracking-widest">
              <span>{totalTechnologies} VERIFIED TECHNOLOGIES</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
                THE TECHNOLOGY
                <br />
                <span className="text-[#77736F]">BEHIND MY WORK</span>
                <span className="text-[#C5A880]">.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <div className="w-12 h-px bg-[#C5A880]/30 mb-4 hidden lg:block" />
              <p className="text-sm md:text-base text-[#A7A39C] leading-relaxed font-light">
                Exploring technologies, developing practical solutions and continuously expanding my technical capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {/* All Filter */}
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`relative px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeCategory === "all"
                  ? "bg-[#F2EFE9] text-[#0B0B0D] border-[#F2EFE9] shadow-[0_0_20px_rgba(242,239,233,0.15)]"
                  : "bg-white/[0.03] text-[#A7A39C] border-white/10 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>ALL ({totalTechnologies})</span>
            </button>

            {/* Individual Categories */}
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#F2EFE9] text-[#0B0B0D] border-[#F2EFE9] shadow-[0_0_20px_rgba(242,239,233,0.15)]"
                      : "bg-white/[0.03] text-[#A7A39C] border-white/10 hover:text-white hover:bg-white/[0.07]"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-60">{cat.number}</span>
                  <span>{cat.shortTitle}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-black/15 text-black" : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Notice */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#77736F] font-mono">
            <span>
              {activeCategory === "all"
                ? "Displaying complete technical overview across all 6 structured domains"
                : SKILL_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </span>
            <span className="hidden sm:inline text-[#77736F]">
              {displayedSkills.length} {displayedSkills.length === 1 ? "Technology" : "Technologies"} Listed
            </span>
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {displayedSkills.map(({ skill, category }, index) => {
              return (
                <div
                  key={`${category.id}-${skill.name}`}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#111114]/90 hover:bg-[#141418] p-6 transition-all duration-300 hover:border-[#C5A880]/35 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                >
                  {/* Header: Icon + Category Badge + Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:border-[#C5A880]/40 group-hover:bg-[#C5A880]/10 transition-colors duration-300 text-[#C5A880]">
                        {getSkillIcon(skill.name, category.id)}
                      </div>

                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-[#77736F] group-hover:text-[#C5A880] transition-colors">
                          {category.number} / {category.shortTitle}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                    </div>

                    <span className="shrink-0 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-mono tracking-wider text-[#A7A39C] uppercase">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Practical Application Context */}
                  <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light min-h-[40px]">
                    {skill.context}
                  </p>

                  {/* Bottom Discrete Metadata */}
                  <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#77736F]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                      Practical Implementation
                    </span>
                    <span className="uppercase text-[#77736F]">ID #{category.number}.{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Section Bottom Discipline Summary Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "border-[#C5A880]/40 bg-[#C5A880]/[0.08]"
                  : "border-white/[0.06] bg-white/[0.015] hover:border-white/15"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <div className="font-mono text-[9px] text-[#77736F] uppercase tracking-widest mb-1">
                {cat.number}
              </div>
              <div className="text-xs font-bold text-[#F2EFE9] uppercase tracking-wider truncate">
                {cat.shortTitle}
              </div>
              <div className="text-[10px] text-[#A7A39C] font-mono mt-0.5">
                {cat.skills.length} Items
              </div>
            </div>
          ))}
        </div>

        {/* Back Link to Homepage */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#77736F] font-mono uppercase tracking-widest text-center sm:text-left">
            COMPREHENSIVE TECHNICAL ARSENAL &bull; 6 DISCIPLINES &bull; 26 VERIFIED TOOLS
          </p>
          <Link
            to="/"
            className="px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-white hover:text-[#0B0B0D] hover:border-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>BACK TO HOMEPAGE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
