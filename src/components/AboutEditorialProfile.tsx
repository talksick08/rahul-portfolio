import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Shield,
  BrainCircuit,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface AboutEditorialProfileProps {
  onOpenContact?: () => void;
  portraitAspectRatio?: string;
  portraitFit?: "cover" | "contain";
  portraitPosition?: string;
}

export default function AboutEditorialProfile({
  onOpenContact,
  portraitAspectRatio = "aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5]",
  portraitFit = "cover",
  portraitPosition = "center 25%",
}: AboutEditorialProfileProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const academicSubjects = [
    {
      number: "01",
      title: "Programming Fundamentals",
      description: "Algorithmic thinking, data structures, and core programming paradigms.",
    },
    {
      number: "02",
      title: "Database Management Systems",
      description: "Relational schema design, SQL querying, data normalization, and ACID integrity.",
    },
    {
      number: "03",
      title: "Operating Systems",
      description: "Process scheduling, virtual memory management, concurrency, and system-level operations.",
    },
    {
      number: "04",
      title: "Computer Networks",
      description: "OSI and TCP/IP protocol suites, packet inspection, network routing, and client-server architectures.",
    },
    {
      number: "05",
      title: "Software Development",
      description: "Application lifecycle engineering, modular architecture, clean code practices, and version control.",
    },
    {
      number: "06",
      title: "Cybersecurity Fundamentals",
      description: "Core defensive security principles, network protection, threat analysis, and risk mitigation.",
    },
  ];

  const technicalInterests = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Architecting responsive, high-performance web applications with clean frontend structure and scalable backends.",
      technologies: "HTML, CSS, JavaScript, React, TypeScript, PHP, Python, Flask",
      icon: <Code2 className="w-4 h-4 text-[#C5A880]" />,
    },
    {
      number: "02",
      title: "Cybersecurity",
      description:
        "Exploring network defense, vulnerability assessment, traffic inspection, and threat detection mechanisms.",
      technologies: "Network Protocols, Threat Modeling, Intrusion Detection, Security Auditing",
      icon: <Shield className="w-4 h-4 text-[#C5A880]" />,
    },
    {
      number: "03",
      title: "AI & Machine Learning",
      description:
        "Applying machine learning algorithms to practical problems, with emphasis on security data and traffic classification.",
      technologies: "Python, Scikit-learn, Random Forest, SQLite, NSL-KDD Dataset",
      icon: <BrainCircuit className="w-4 h-4 text-[#C5A880]" />,
    },
    {
      number: "04",
      title: "Problem Solving",
      description:
        "Deconstructing complex technical challenges into modular components and developing robust solutions through disciplined iteration.",
      technologies: "Algorithmic Logic, System Debugging, Performance Optimization, Clean Architecture",
      icon: <Compass className="w-4 h-4 text-[#C5A880]" />,
    },
  ];

  const practicalExposureAreas = [
    "Website Structure & Semantic Markup",
    "Frontend Implementation & Component Architecture",
    "Responsive Interfaces & Cross-Browser Design",
    "Application Workflows & Version Control",
  ];

  const principles = [
    {
      number: "01",
      title: "BUILD WITH PURPOSE",
      description:
        "Focusing on applications that solve clear, practical problems and deliver genuine utility for users.",
    },
    {
      number: "02",
      title: "LEARN BY EXPERIMENTING",
      description:
        "Developing deep technical understanding through hands-on implementation, testing, and continuous iteration.",
    },
    {
      number: "03",
      title: "IMPROVE CONTINUOUSLY",
      description:
        "Maintaining persistent curiosity, writing cleaner code, and refining architectural thinking across every project.",
    },
  ];

  return (
    <div
      data-purpose="about-editorial-profile"
      className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] pt-6 md:pt-10 pb-20 md:pb-28 select-none"
    >
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* =========================================================
            SECTION 01: INTRODUCTION & IDENTITY
        ========================================================= */}
        <section
          data-purpose="section-introduction"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start"
        >
          {/* Left Column: Authentic Portrait Frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            variants={fadeInVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Portrait Container: Independently adjustable aspect ratios (3:4 on smartphone, 4:5 on tablet/desktop) */}
              <div
                data-purpose="about-portrait-frame"
                className={`relative w-full ${portraitAspectRatio} rounded-2xl overflow-hidden border border-white/[0.12] bg-[#111114] shadow-[0_16px_36px_rgba(0,0,0,0.6)]`}
              >
                <picture className="w-full h-full block">
                  <source srcSet="/assets/about-restaurant-original.webp" type="image/webp" />
                  <img
                    src="/assets/about-restaurant-original.jpeg"
                    alt="Rahul Mahanta — Computer Science Student"
                    className={`w-full h-full ${
                      portraitFit === "contain"
                        ? "object-contain object-center"
                        : "object-cover"
                    } block rounded-2xl`}
                    style={{
                      objectPosition:
                        portraitFit === "contain" ? "center" : portraitPosition,
                    }}
                    loading="lazy"
                    decoding="async"
                    width={576}
                    height={1024}
                  />
                </picture>
              </div>

              {/* Understated Metadata Strip */}
              <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A7A39C]">
                <span className="text-[#C5A880] font-semibold uppercase tracking-wider text-[11px]">
                  COMPUTER SCIENCE STUDENT
                </span>
                <span className="text-[#77736F] text-[10px] uppercase tracking-widest">
                  GALGOTIAS UNIVERSITY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Headline & Concise Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            variants={fadeInVariants}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">01</span>
              <span className="text-white/20">&mdash;</span>
              <span>INTRODUCTION</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.1]">
              CURIOUS BY NATURE.
              <br />
              <span className="text-[#77736F]">DRIVEN BY TECHNOLOGY</span>
              <span className="text-[#C5A880]">.</span>
            </h1>

            {/* Concise Bio Paragraphs (No Repetition) */}
            <div className="space-y-3.5 text-sm sm:text-[15px] text-[#A7A39C] leading-[1.75] font-normal max-w-2xl">
              <p>
                I'm Rahul Mahanta, a Computer Science student at Galgotias University interested in software development, cybersecurity and emerging technologies.
              </p>
              <p>
                I focus on turning foundational computer science concepts into practical, working software. By building applications and experimenting with systems across web development, defensive security, and machine learning, I continuously refine my approach to problem-solving and software architecture.
              </p>
            </div>

            {/* Small Metadata Row for Identity & Primary Interests */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#77736F]">
                  IDENTITY
                </span>
                <span className="text-xs font-semibold text-[#F2EFE9] uppercase tracking-wider block">
                  Computer Science Student
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#77736F]">
                  INSTITUTION
                </span>
                <span className="text-xs text-[#A7A39C] block">
                  Galgotias University
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#77736F]">
                  PRIMARY INTERESTS
                </span>
                <span className="text-xs font-mono text-[#C5A880] block">
                  Web &bull; Security &bull; ML
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================
            SECTION 02: ACADEMIC FOUNDATION
        ========================================================= */}
        <section
          data-purpose="section-academic-foundation"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">02</span>
              <span className="text-white/20">&mdash;</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              THE FOUNDATION<span className="text-[#C5A880]">.</span>
            </h2>
          </div>

          {/* Clean Editorial Grid: 6 Subjects with Subtle Dividers (No oversized cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 sm:gap-y-7 pt-2">
            {academicSubjects.map((subject) => (
              <div
                key={subject.number}
                className="border-t border-white/[0.08] pt-4 space-y-1.5 group transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C5A880] font-semibold">{subject.number}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#77736F]">
                    CORE SUBJECT
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold uppercase tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors">
                  {subject.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#A7A39C] leading-relaxed font-normal">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 03: TECHNICAL INTERESTS
        ========================================================= */}
        <section
          data-purpose="section-technical-interests"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">03</span>
              <span className="text-white/20">&mdash;</span>
              <span>TECHNICAL INTERESTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              AREAS THAT DRIVE MY CURIOSITY<span className="text-[#C5A880]">.</span>
            </h2>
          </div>

          {/* Balanced 2 x 2 Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
            {technicalInterests.map((area) => (
              <div
                key={area.number}
                className="rounded-xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-6 transition-all duration-300 hover:border-[#C5A880]/35 hover:bg-[#141418] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg border border-white/[0.1] bg-white/[0.02] flex items-center justify-center">
                        {area.icon}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                        {area.number} &bull; {area.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-[#A7A39C] leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-[#77736F] mb-1">
                    RELEVANT TECHNOLOGIES &amp; CONCEPTS:
                  </span>
                  <span className="text-xs font-mono text-[#F2EFE9]/85">
                    {area.technologies}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 04: PRACTICAL EXPERIENCE
        ========================================================= */}
        <section
          data-purpose="section-practical-experience"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">04</span>
              <span className="text-white/20">&mdash;</span>
              <span>PRACTICAL EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              LEARNING THROUGH EXPERIENCE<span className="text-[#C5A880]">.</span>
            </h2>
          </div>

          {/* Compact Visually Distinctive Experience Card */}
          <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-7 md:p-8 space-y-5 transition-all duration-300 hover:border-[#C5A880]/30 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
                  Cybrexus Technology
                </h3>
                <div className="font-mono text-xs sm:text-sm text-[#C5A880] font-medium mt-0.5">
                  Web Development Intern
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#A7A39C] uppercase tracking-wider">
                  August 2026 &ndash; Present
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[10px] font-mono tracking-wider uppercase text-[#C5A880]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                  <span>ACTIVE INTERNSHIP</span>
                </span>
              </div>
            </div>

            {/* Accurate Narrative */}
            <p className="text-sm sm:text-[14.5px] text-[#A7A39C] leading-[1.75] font-normal max-w-3xl">
              Practical exposure to website structure, frontend implementation, responsive interfaces and application development workflows. This role emphasizes structured implementation, component-driven layouts, and version-controlled team workflows.
            </p>

            {/* Highlighted Exposure Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {practicalExposureAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 p-3 rounded-lg border border-white/[0.06] bg-black/30 text-xs text-[#F2EFE9]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            {/* Clear Action Link to /experience */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-white/[0.06]">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>EXPLORE FULL EXPERIENCE TIMELINE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0D]" />
              </Link>
              <span className="font-mono text-[11px] text-[#77736F]">
                Detailed curriculum modules &bull; Technical roadmaps
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 05: SELECTED PROJECTS
        ========================================================= */}
        <section
          data-purpose="section-selected-projects"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">05</span>
              <span className="text-white/20">&mdash;</span>
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              IDEAS TURNED INTO APPLICATIONS<span className="text-[#C5A880]">.</span>
            </h2>
          </div>

          {/* Two Genuine Projects in Balanced Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Project 01: Personal Expense Tracker */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-[#C5A880]/35 hover:bg-[#141418]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
                    PROJECT 01 &bull; WEB APPLICATION
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[#A7A39C] text-[10px] font-mono uppercase">
                    PHP &bull; MySQL
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
                  Personal Expense Tracker
                </h3>

                <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-normal">
                  Personal finance and expense tracking application designed to help users record transactions, categorize expenditures, and manage financial records efficiently.
                </p>

                <div className="p-3 rounded-lg border border-white/[0.06] bg-black/30 font-mono text-xs text-[#A7A39C]">
                  <span className="text-[#F2EFE9] font-medium block text-[10px] uppercase tracking-wider mb-1">
                    TECH STACK:
                  </span>
                  PHP, MySQL, HTML, CSS, JavaScript
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <Link
                  to="/projects"
                  className="px-4 py-2 rounded-full border border-white/15 hover:border-white text-xs font-mono uppercase text-[#F2EFE9] hover:bg-white/[0.04] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-3 h-3 text-[#A7A39C]" />
                </Link>

                <a
                  href="https://expense-tracker-demo.ct.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 text-[#0B0B0D]" />
                </a>
              </div>
            </div>

            {/* Project 02: THREATNEX */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-[#C5A880]/35 hover:bg-[#141418]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
                    PROJECT 02 &bull; MACHINE LEARNING &amp; SECURITY
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[#A7A39C] text-[10px] font-mono uppercase">
                    Python &bull; AI
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
                  THREATNEX &mdash; Intrusion Detection System
                </h3>

                <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-normal">
                  AI-driven intrusion detection system that analyzes network traffic and classifies potentially suspicious anomalies using a Random Forest model trained on the NSL-KDD dataset.
                </p>

                <div className="p-3 rounded-lg border border-white/[0.06] bg-black/30 font-mono text-xs text-[#A7A39C]">
                  <span className="text-[#F2EFE9] font-medium block text-[10px] uppercase tracking-wider mb-1">
                    TECH STACK:
                  </span>
                  Python, Flask, scikit-learn, Random Forest, SQLite
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <Link
                  to="/projects"
                  className="px-4 py-2 rounded-full border border-white/15 hover:border-white text-xs font-mono uppercase text-[#F2EFE9] hover:bg-white/[0.04] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-3 h-3 text-[#A7A39C]" />
                </Link>

                <a
                  href="https://threatnex-ai-ids.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 text-[#0B0B0D]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 06: PHILOSOPHY
        ========================================================= */}
        <section
          data-purpose="section-philosophy"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">06</span>
              <span className="text-white/20">&mdash;</span>
              <span>PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              ALWAYS LEARNING. ALWAYS BUILDING<span className="text-[#C5A880]">.</span>
            </h2>
          </div>

          {/* Horizontal Editorial Layout with Three Concise Principles & Fine Separators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border-t border-white/[0.08] pt-4 space-y-2 group"
              >
                <div className="font-mono text-xs text-[#C5A880] font-semibold">
                  {principle.number} &mdash; PRINCIPLE
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#A7A39C] leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 07: CAREER DIRECTION
        ========================================================= */}
        <section
          data-purpose="section-career-direction"
          className="border-t border-white/[0.08] pt-12 sm:pt-14 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">07</span>
              <span className="text-white/20">&mdash;</span>
              <span>CAREER DIRECTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9]">
              WHAT I'M WORKING TOWARDS<span className="text-[#C5A880]">.</span>
            </h2>

            {/* One Concise Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#A7A39C] leading-[1.75] font-normal max-w-2xl">
              I am focused on strengthening my software development and cybersecurity foundations, gaining practical industry experience, and building useful applications that solve real-world problems.
            </p>
          </div>

          {/* Two Clear Actions */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
            <button
              type="button"
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  window.location.href = "/contact";
                }
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0D]" />
            </button>

            <Link
              to="/experience"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 hover:border-white text-xs font-mono tracking-wider uppercase text-[#F2EFE9] hover:bg-white/[0.04] transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>EXPLORE EXPERIENCE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A7A39C]" />
            </Link>
          </div>
        </section>

        {/* Subtle Footer Separator */}
        <div className="border-t border-white/[0.08]" aria-hidden="true" />
      </div>
    </div>
  );
}
