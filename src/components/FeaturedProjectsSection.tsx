import { useState } from "react";
import { Link } from "react-router-dom";
import FlexCarousel from "@/components/FlexCarousel";
import ProjectModal from "@/components/ProjectModal";
import { REAL_PROJECTS, type ProjectItem } from "@/data/portfolioData";

export default function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Map the two authentic projects symmetrically so the OGL liquid slider has continuous loop & momentum
  const carouselItems = [
    {
      src: REAL_PROJECTS[0].src,
      alt: REAL_PROJECTS[0].alt,
      title: REAL_PROJECTS[0].title,
      subtitle: REAL_PROJECTS[0].subtitle,
      description: REAL_PROJECTS[0].description,
      link: REAL_PROJECTS[0].link,
    },
    {
      src: REAL_PROJECTS[1].src,
      alt: REAL_PROJECTS[1].alt,
      title: REAL_PROJECTS[1].title,
      subtitle: REAL_PROJECTS[1].subtitle,
      description: REAL_PROJECTS[1].description,
      link: REAL_PROJECTS[1].link,
    },
    {
      src: REAL_PROJECTS[0].src,
      alt: REAL_PROJECTS[0].alt,
      title: REAL_PROJECTS[0].title,
      subtitle: REAL_PROJECTS[0].subtitle,
      description: REAL_PROJECTS[0].description,
      link: REAL_PROJECTS[0].link,
    },
    {
      src: REAL_PROJECTS[1].src,
      alt: REAL_PROJECTS[1].alt,
      title: REAL_PROJECTS[1].title,
      subtitle: REAL_PROJECTS[1].subtitle,
      description: REAL_PROJECTS[1].description,
      link: REAL_PROJECTS[1].link,
    },
  ];

  const handleSelect = (index: number) => {
    // Map index mod 2 back to the 2 authentic projects
    const project = REAL_PROJECTS[index % 2];
    setSelectedProject(project);
  };

  return (
    <>
      <section
        id="projects"
        data-purpose="featured-projects"
        className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 select-none"
      >
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-[10px] font-semibold tracking-widest uppercase text-neutral-700 mb-3">
              <span>AUTHENTIC PORTFOLIO WORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
            DRAG TO EXPLORE &bull; CLICK CARD TO INSPECT
          </p>
        </div>

        {/* Dynamic Projects Content Area with FlexCarousel (OGL WebGL liquid distortion) */}
        <div id="projects-content" className="w-full">
          <div
            id="flex-carousel-container"
            className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-[#0E0E12] overflow-hidden shadow-inner relative w-full h-[400px] sm:h-[480px] md:h-[560px]"
          >
            <FlexCarousel
              items={carouselItems}
              preset="liquid"
              intro="rise"
              cardHeight={0.52}
              gap={16}
              squeeze={0.2}
              focusOnClick={true}
              captions={true}
              onSelect={handleSelect}
            />
          </div>
        </div>

        {/* Editorial Project Overview Showcase Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REAL_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className={`p-6 rounded-3xl border bg-white transition-all duration-300 flex flex-col justify-between gap-5 cursor-pointer shadow-sm hover:shadow-xl ${
                proj.accent === "purple"
                  ? "border-neutral-200 hover:border-purple-500/80 hover:shadow-purple-500/5"
                  : "border-neutral-200 hover:border-cyan-500/80 hover:shadow-cyan-500/5"
              }`}
              onClick={() => setSelectedProject(proj)}
            >
              {/* Image Preview Banner */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 group">
                <img
                  src={proj.src}
                  alt={proj.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold font-mono uppercase tracking-wider backdrop-blur-md ${
                    proj.accent === "purple"
                      ? "bg-purple-950/80 text-purple-200 border border-purple-500/30"
                      : "bg-cyan-950/80 text-cyan-200 border border-cyan-500/30"
                  }`}
                >
                  {proj.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tools.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-medium text-neutral-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Touch Targets */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black inline-flex items-center gap-1 transition cursor-pointer min-h-[44px] py-2 px-1"
                >
                  <span>Project Specs</span>
                  <span>↗</span>
                </button>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`px-5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-105 cursor-pointer inline-flex items-center gap-1.5 min-h-[44px] ${
                    proj.accent === "purple"
                      ? "bg-purple-900 hover:bg-purple-800"
                      : "bg-neutral-900 hover:bg-black"
                  }`}
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Archive Navigation Link */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
            AUTHENTIC PROJECTS &bull; ARCHIVE &amp; EXPERIMENTAL RESEARCH
          </p>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>VIEW ALL PROJECTS</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* Interactive Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
