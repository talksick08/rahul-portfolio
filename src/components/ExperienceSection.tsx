import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { EXPERIENCE_ITEMS } from "@/data/experience";

interface ExperienceSectionProps {
  compact?: boolean;
}

export default function ExperienceSection({ compact = false }: ExperienceSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants adhering to reduced motion preferences
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

  const cardVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // -------------------------------------------------------------
  // VIEW A: COMPACT HOMEPAGE PREVIEW (compact === true)
  // -------------------------------------------------------------
  if (compact) {
    return (
      <section
        id="experience"
        data-purpose="experience-timeline-section"
        className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] py-16 sm:py-20 md:py-24 lg:py-28 select-none scroll-mt-20 border-t border-white/[0.08] overflow-hidden"
      >
        {/* Subtle, restrained ambient background warmth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#C5A880]/[0.03] blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#A89AC9]/[0.03] blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Balanced Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* COLUMN 1: SECTION HEADER & EDITORIAL CONTEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              variants={fadeInVariants}
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 sm:space-y-7"
            >
              {/* 1. Small Eyebrow Label */}
              <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
                <span className="text-[#C5A880] font-bold">02</span>
                <span className="text-white/20">&mdash;</span>
                <span>EXPERIENCE &amp; TIMELINE</span>
              </div>

              {/* 2. Main Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.08]">
                  THE JOURNEY
                  <br />
                  <span className="text-[#F2EFE9]">SO FAR</span>
                  <span className="text-[#C5A880]">.</span>
                </h2>

                {/* 3. Short Subtitle */}
                <p className="text-sm sm:text-[15px] text-[#A7A39C] leading-[1.7] font-normal max-w-md">
                  From academic foundations to practical development experience.
                </p>
              </div>

              {/* Thin Elegant Divider */}
              <div className="h-px w-14 bg-[#C5A880]/30" aria-hidden="true" />

              {/* Editorial Metadata / Action */}
              <div className="pt-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#77736F]">
                  <span className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
                    2 KEY MILESTONES
                  </span>
                  <span className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
                    CONTINUOUS GROWTH
                  </span>
                </div>

                <div>
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-[#F2EFE9] hover:text-[#0B0B0D] hover:border-[#F2EFE9] text-xs font-bold uppercase tracking-wider transition-all duration-300 group cursor-pointer shadow-sm"
                  >
                    <span>VIEW FULL EXPERIENCE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* COLUMN 2: CONNECTED VERTICAL TIMELINE */}
            <div className="lg:col-span-7 relative">
              {/* Clean Vertical Timeline Rail */}
              <div
                aria-hidden="true"
                className="absolute left-4 sm:left-5 top-7 bottom-7 w-px bg-white/[0.12] pointer-events-none"
              />

              {/* Subtle Gradient Glow Overlay for the Rail */}
              <div
                aria-hidden="true"
                className="absolute left-4 sm:left-5 top-7 bottom-7 w-px bg-gradient-to-b from-[#C5A880]/50 via-white/20 to-[#C5A880]/30 pointer-events-none"
              />

              {/* Timeline Entries List */}
              <div className="space-y-6 sm:space-y-8">
                {EXPERIENCE_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    variants={cardVariants}
                    className="relative pl-11 sm:pl-14 group"
                  >
                    {/* Numbered Timeline Marker Node */}
                    <div
                      aria-hidden="true"
                      className="absolute left-4 sm:left-5 top-5 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-[#0B0B0D] flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold text-[#A7A39C] transition-all duration-300 group-hover:border-[#C5A880] group-hover:text-[#F2EFE9] group-hover:shadow-[0_0_18px_rgba(197,168,128,0.25)] group-hover:scale-105 z-10"
                    >
                      <span className="relative z-10">{item.number}</span>
                      <span className="absolute inset-0 rounded-full bg-[#C5A880]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Editorial Experience Card */}
                    <div className="relative rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-[#C5A880]/35 hover:bg-[#141418] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                      {/* Top Meta Header: Period / Category & Active Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-white/[0.06] pb-4 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                            {item.number} &mdash; {item.category}
                          </span>
                        </div>

                        {item.id === "cybrexus" ? (
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs text-[#A7A39C] uppercase tracking-wider">
                              {item.periodOrCategory}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[10px] font-mono tracking-wider uppercase text-[#C5A880]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                              <span>{item.statusBadge}</span>
                            </span>
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[10px] font-mono tracking-wider uppercase text-[#A7A39C]">
                            <span>{item.periodOrCategory}</span>
                          </span>
                        )}
                      </div>

                      {/* Institution / Company Name & Role */}
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold uppercase tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors leading-[1.15]">
                          {item.institutionOrOrg}
                        </h3>
                        <div className="font-mono text-xs sm:text-sm text-[#C5A880]/90 font-medium">
                          {item.role}
                        </div>
                      </div>

                      {/* Readable Narrative Description */}
                      <p className="mt-3.5 text-[13.5px] sm:text-[14.5px] text-[#A7A39C] leading-[1.7] font-normal">
                        {item.description}
                      </p>

                      {/* Technology / Focus Tags Underneath Description */}
                      <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                        <span className="block font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-[#77736F]">
                          CORE FOCUS &amp; COMPETENCIES
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.keyAreas.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[#F2EFE9]/85 text-xs font-mono tracking-wide transition-colors group-hover:border-[#C5A880]/25 group-hover:text-[#F2EFE9]"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Bottom Metadata Strip */}
          <div className="mt-14 sm:mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>GALGOTIAS UNIVERSITY &bull; CYBREXUS TECHNOLOGY</span>
            </div>
            <span>ACADEMIC FOUNDATIONS TO INDUSTRY WORKFLOWS</span>
          </div>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------
  // VIEW B: DEDICATED FULL EXPERIENCE PAGE (compact === false)
  // -------------------------------------------------------------
  const educationItem = EXPERIENCE_ITEMS.find((i) => i.id === "galgotias") || EXPERIENCE_ITEMS[0];
  const internItem = EXPERIENCE_ITEMS.find((i) => i.id === "cybrexus") || EXPERIENCE_ITEMS[1];

  return (
    <div
      data-purpose="full-experience-editorial-view"
      className="relative w-full text-[#F2EFE9] select-none"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/6 -left-32 w-96 h-96 rounded-full bg-[#C5A880]/[0.03] blur-[120px]" />
        <div className="absolute top-2/3 -right-32 w-96 h-96 rounded-full bg-[#A89AC9]/[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* TOP EDITORIAL BREADCRUMB & BACK ACTION */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#A7A39C]">
            <Link to="/" className="hover:text-[#F2EFE9] transition-colors">
              HOME
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#C5A880]">EXPERIENCE</span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOMEPAGE</span>
          </Link>
        </div>

        {/* SECTION HERO HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="space-y-5"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
            <span className="text-[#C5A880] font-bold">02</span>
            <span className="text-white/20">&mdash;</span>
            <span>EXPERIENCE &amp; TIMELINE</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
            THE JOURNEY
            <br />
            <span className="text-[#F2EFE9]">SO FAR</span>
            <span className="text-[#C5A880]">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#A7A39C] leading-[1.7] font-normal max-w-2xl">
            From academic foundations to practical development experience.
          </p>

          {/* Summary Metadata Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              2 KEY MILESTONES
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              6 CORE ACADEMIC MODULES
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              4 INDUSTRY WORKFLOW DISCIPLINES
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            SECTION 01: HIGHER EDUCATION & ACADEMIC FOUNDATION
        ========================================================= */}
        <motion.section
          data-purpose="section-education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          variants={fadeInVariants}
          className="border-t border-white/[0.08] pt-10 sm:pt-12 space-y-6 sm:space-y-8"
        >
          {/* Section Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">01</span>
              <span className="text-white/20">&mdash;</span>
              <span>EDUCATION</span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono tracking-wider uppercase text-[#A7A39C]">
              <GraduationCap className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{educationItem.periodOrCategory}</span>
            </span>
          </div>

          {/* Education Primary Header Card */}
          <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
                {educationItem.institutionOrOrg}
              </h2>
              <div className="font-mono text-sm sm:text-base text-[#C5A880] font-medium">
                {educationItem.role}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#A7A39C] leading-[1.75] font-normal max-w-3xl">
              {educationItem.description}
            </p>
          </div>

          {/* Detailed Academic Focus Modules Grid (All 6 Genuine Subjects) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#77736F]">
                CORE ACADEMIC CURRICULUM &bull; 6 KEY MODULES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {educationItem.detailedFocusAreas.map((focus) => (
                <div
                  key={focus.title}
                  className="rounded-xl border border-white/[0.08] bg-[#111114]/60 p-5 space-y-2 transition-all duration-300 hover:border-[#C5A880]/30 hover:bg-[#141418]"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#C5A880] font-bold">{focus.number}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#77736F]">
                      FOUNDATION
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold uppercase tracking-tight text-[#F2EFE9]">
                    {focus.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#A7A39C] leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =========================================================
            SECTION 02: PROFESSIONAL EXPERIENCE & INDUSTRY EXPOSURE
        ========================================================= */}
        <motion.section
          data-purpose="section-professional-experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          variants={fadeInVariants}
          className="border-t border-white/[0.08] pt-10 sm:pt-12 space-y-6 sm:space-y-8"
        >
          {/* Section Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">02</span>
              <span className="text-white/20">&mdash;</span>
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-[#A7A39C] uppercase tracking-wider">
                {internItem.periodOrCategory}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-xs font-mono tracking-wider uppercase text-[#C5A880]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                <span>{internItem.statusBadge}</span>
              </span>
            </div>
          </div>

          {/* Internship Primary Header Card */}
          <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
                  {internItem.institutionOrOrg}
                </h2>
                <div className="font-mono text-sm sm:text-base text-[#C5A880] font-medium">
                  {internItem.role}
                </div>
              </div>
              <div className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <Briefcase className="w-5 h-5 text-[#C5A880]" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#A7A39C] leading-[1.75] font-normal max-w-3xl">
              {internItem.description}
            </p>
          </div>

          {/* Detailed Practical Focus Disciplines Grid (All 4 Genuine Focus Areas) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#77736F]">
                PRACTICAL COMPETENCIES &amp; WORKFLOWS &bull; 4 FOCUS AREAS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {internItem.detailedFocusAreas.map((focus) => (
                <div
                  key={focus.title}
                  className="rounded-xl border border-white/[0.08] bg-[#111114]/60 p-5 sm:p-6 space-y-2.5 transition-all duration-300 hover:border-[#C5A880]/30 hover:bg-[#141418]"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#C5A880] font-bold">{focus.number}</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#77736F]">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A880]" />
                      <span>WORKFLOW</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-[#F2EFE9]">
                    {focus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =========================================================
            SECTION 03: EDITORIAL BOTTOM EXPLORATION STRIP
        ========================================================= */}
        <div className="border-t border-white/[0.08] pt-10 sm:pt-12 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736F] block">
              CONTINUE EXPLORING
            </span>
            <div className="text-sm font-semibold uppercase text-[#F2EFE9] tracking-wider">
              Selected projects and verified technical credentials
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>READ ABOUT ME</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
