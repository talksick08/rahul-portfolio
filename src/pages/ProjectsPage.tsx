import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Boxes,
  Sparkles,
} from "lucide-react";
import { PROJECTS, type Project, type ProjectCategory } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Compute unique categories present in the project data dynamically
  const categoryFilters = useMemo(() => {
    const presentCategories = new Set(PROJECTS.map((p) => p.category));
    const allFilters: { id: string; label: string; count: number }[] = [
      { id: "ALL", label: "ALL PROJECTS", count: PROJECTS.length },
    ];

    const standardCategories: ProjectCategory[] = [
      "Web Development",
      "Cybersecurity",
      "AI & Machine Learning",
      "Other",
    ];

    standardCategories.forEach((cat) => {
      const count = PROJECTS.filter((p) => p.category === cat).length;
      if (count > 0) {
        allFilters.push({ id: cat, label: cat.toUpperCase(), count });
      }
    });

    return allFilters;
  }, []);

  // Filtered projects list based on active category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL") {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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

  const projectCardVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <main
      data-purpose="page-projects"
      className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-4 sm:pt-6 pb-24 select-none relative overflow-hidden"
    >
      <SEO {...seoConfig.projects} />
      {/* Restrained ambient background glow */}
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
            <span className="text-[#C5A880]">PROJECTS</span>
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
            1. PAGE INTRODUCTION & EDITORIAL HEADER
        ========================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="space-y-5"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
            <span className="text-[#C5A880] font-bold">03</span>
            <span className="text-white/20">&mdash;</span>
            <span>PROJECT ARCHIVE &amp; RESEARCH</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
            SELECTED WORK.
            <br />
            <span className="text-[#F2EFE9]">BUILT TO SOLVE</span>
            <span className="text-[#C5A880]">.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#A7A39C] leading-[1.7] font-normal max-w-2xl">
            An evolving collection of applications, experiments and engineering projects built through practical problem-solving.
          </p>

          {/* Dynamic Metadata Line */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              {PROJECTS.length} CURATED {PROJECTS.length === 1 ? "PROJECT" : "PROJECTS"}
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
              {categoryFilters.length - 1} ACTIVE DOMAINS
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-[#C5A880]">
              CONTINUOUS DEVELOPMENT
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            2. REUSABLE CATEGORY FILTERS
        ========================================================= */}
        <div className="border-t border-white/[0.08] pt-8 flex items-center justify-start gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {categoryFilters.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#F2EFE9] text-[#0B0B0D] border-[#F2EFE9] font-bold shadow-sm"
                    : "bg-white/[0.02] text-[#A7A39C] border-white/10 hover:text-[#F2EFE9] hover:border-white/25"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-black/15 text-black" : "bg-white/10 text-neutral-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================
            3. LARGE EDITORIAL PROJECT SHOWCASES
        ========================================================= */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const displayIndex = index + 1;
              const formattedNumber = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

              return (
                <motion.article
                  key={project.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  variants={projectCardVariants}
                  data-purpose={`project-entry-${project.id}`}
                  className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#111114]/90 hover:border-[#C5A880]/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.35)] space-y-8"
                >
                  {/* Top Meta Header: Project Number, Category Kicker & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#C5A880]">
                        {formattedNumber}
                      </span>
                      <span className="text-white/20">&mdash;</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#A7A39C]">
                        {project.categoryBadge || project.category}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-xs font-mono tracking-wider uppercase text-[#C5A880] self-start sm:self-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Main Balanced Side-by-Side Layout (Desktop) / Stacked (Mobile) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
                    
                    {/* LEFT COLUMN: Large Media Showcase Frame & Technical Problem/Architecture */}
                    <div className="lg:col-span-6 space-y-4">
                      {project.image ? (
                        <div
                          onClick={() => setActiveModalProject(project)}
                          className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0A0A0D] cursor-pointer shadow-lg"
                        >
                          <img
                            src={project.image}
                            alt={project.alt || project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />

                          {/* Hover inspection badge */}
                          <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-black/85 border border-white/25 text-[11px] font-mono uppercase tracking-wider text-[#F2EFE9] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 shadow-lg">
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[16/9] w-full rounded-2xl border border-white/[0.08] bg-[#0A0A0D] flex items-center justify-center p-6 text-center text-[#77736F] font-mono text-xs uppercase tracking-widest">
                          <span>TECHNICAL ARCHIVE SPECIFICATION</span>
                        </div>
                      )}

                      {/* Problem Addressed Insight Card */}
                      {project.problem && (
                        <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40 space-y-1.5">
                          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#C5A880]">
                            <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
                            <span>PROBLEM ADDRESSED</span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-[#A7A39C] leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                      )}

                      {/* Technical Architecture Insight Card */}
                      {project.implementation && (
                        <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40 space-y-1.5">
                          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#C5A880]">
                            <Cpu className="w-3.5 h-3.5 text-[#C5A880]" />
                            <span>TECHNICAL IMPLEMENTATION</span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-[#A7A39C] leading-relaxed">
                            {project.implementation}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* RIGHT COLUMN: Project Title, Description, Key Features & Stack */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-1.5">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F2EFE9] leading-[1.15]">
                          {project.title}
                        </h2>
                        <div className="font-mono text-xs sm:text-sm text-[#C5A880] font-medium">
                          {project.categoryBadge || project.category}
                        </div>
                      </div>

                      {/* Narrative Description */}
                      <p className="text-[14.5px] sm:text-base text-[#A7A39C] leading-[1.8] font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Key Features & Architecture Grid */}
                      {project.features && project.features.length > 0 && (
                        <div className="space-y-3 pt-1">
                          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#77736F]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                            <span>KEY FEATURES &amp; CAPABILITIES</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-lg border border-white/[0.05] bg-black/25 text-xs text-[#F2EFE9] flex items-center gap-2.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technology Stack Tags */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[#77736F]">
                            CORE TECHNOLOGIES:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-[#F2EFE9] hover:border-[#C5A880]/30 hover:text-white transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons Row */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                          >
                            <span>LIVE PROJECT DEMO</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D]" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-[#F2EFE9] hover:bg-white/[0.04] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono uppercase tracking-wider text-[#A7A39C] hover:text-[#F2EFE9] transition-colors inline-flex items-center gap-1.5"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GITHUB</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* =========================================================
            4. BOTTOM EDITORIAL NAVIGATION STRIP
        ========================================================= */}
        <div className="border-t border-white/[0.08] pt-10 sm:pt-12 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736F] block">
              CONTINUE EXPLORING
            </span>
            <div className="text-sm font-semibold uppercase text-[#F2EFE9] tracking-wider">
              Technical timeline, verified skills and credentials
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>EXPLORE SKILLS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>VIEW EXPERIENCE</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </main>
  );
}
