import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, ShieldAlert, Cpu, CheckCircle2, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import type { ProjectItem } from "@/data/portfolioData";

type ModalProject = Project | ProjectItem;

interface ProjectModalProps {
  project: ModalProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  // Normalized project field extractors
  const imageSrc = ("image" in project && project.image) || ("src" in project && project.src) || "";
  const imageAlt = ("alt" in project && project.alt) || project.title;
  const descriptionText =
    ("fullDescription" in project && project.fullDescription) ||
    ("description" in project && project.description) ||
    "";
  const featuresList =
    ("features" in project && project.features) ||
    ("keyFeatures" in project && project.keyFeatures) ||
    [];
  const techList =
    ("technologies" in project && project.technologies) ||
    ("tools" in project && project.tools) ||
    [];
  const liveLink = ("liveUrl" in project && project.liveUrl) || ("link" in project && project.link) || "";
  const githubLink = ("githubUrl" in project && project.githubUrl) || ("github" in project && project.github) || "";
  const statusLabel = ("status" in project && project.status) || "Live Application";
  const categoryBadge =
    ("categoryBadge" in project && project.categoryBadge) ||
    ("subtitle" in project && project.subtitle) ||
    project.category;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 bg-[#0E0E12] rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto no-scrollbar p-6 sm:p-9 shadow-2xl border border-white/[0.1] text-[#F2EFE9] select-none space-y-6 sm:space-y-8"
        >
          {/* Header */}
          <div className="relative pb-5 border-b border-white/[0.08] pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[10px] font-mono tracking-wider uppercase text-[#C5A880]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                <span>{statusLabel}</span>
              </span>
              <span className="text-xs font-mono text-white/20">&bull;</span>
              <span className="text-xs font-mono text-[#A7A39C] uppercase tracking-wider">
                {categoryBadge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#F2EFE9] tracking-tight leading-tight">
              {project.title}
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-0 w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-[#A7A39C] hover:border-[#C5A880] hover:text-[#F2EFE9] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="space-y-6 sm:space-y-8 text-sm text-[#A7A39C]">
            {/* Project Showcase Artwork Display */}
            {imageSrc && (
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#090B10] shadow-xl relative flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2EFE9] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>PROJECT OVERVIEW</span>
              </h4>
              <p className="text-sm sm:text-[14.5px] leading-[1.75] text-[#A7A39C]">
                {descriptionText}
              </p>
            </div>

            {/* Problem Addressed */}
            {project.problem && (
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2EFE9] flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>PROBLEM ADDRESSED</span>
                </h4>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#A7A39C]">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Technical Implementation */}
            {project.implementation && (
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2EFE9] flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>TECHNICAL IMPLEMENTATION</span>
                </h4>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#A7A39C]">
                  {project.implementation}
                </p>
              </div>
            )}

            {/* Key Features */}
            {featuresList && featuresList.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2EFE9] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>KEY FEATURES &amp; CAPABILITIES</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuresList.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-[#F2EFE9] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Tags */}
            {techList && techList.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#77736F]">
                  CORE TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#F2EFE9] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>LIVE PROJECT DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D]" />
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-white/15 hover:border-white text-xs font-mono uppercase tracking-wider text-[#A7A39C] hover:text-[#F2EFE9] transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-[#77736F] hover:text-[#F2EFE9] transition-colors cursor-pointer py-1"
            >
              CLOSE CASE STUDY [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
