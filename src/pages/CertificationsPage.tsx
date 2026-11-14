import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Award,
  ShieldCheck,
  BookOpen,
  Terminal,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Eye,
  ExternalLink,
  Shield,
  Layers,
  Laptop,
} from "lucide-react";
import {
  VERIFIED_CERTIFICATIONS,
  LEARNING_PATHWAYS,
  HANDS_ON_PRACTICE,
  type CertificationItem,
} from "@/data/certifications";
import CertificateModal from "@/components/CertificateModal";

export default function CertificationsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main
        data-purpose="page-certifications"
        className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-4 sm:pt-6 pb-28 select-none relative overflow-hidden"
      >
        <SEO {...seoConfig.certifications} />
        {/* Ambient Lighting */}
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
              <span className="text-[#C5A880]">CERTIFICATIONS</span>
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
              1. HERO: SECTION IDENTIFIER & EDITORIAL HEADER
          ========================================================= */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="space-y-5"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
              <span className="text-[#C5A880] font-bold">05</span>
              <span className="text-white/20">&mdash;</span>
              <span>CREDENTIALS &amp; STRUCTURED LEARNING</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
              PROOF OF CONTINUOUS
              <br />
              <span className="text-[#F2EFE9]">LEARNING &amp; PRACTICE</span>
              <span className="text-[#C5A880]">.</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-[#A7A39C] leading-[1.7] font-normal max-w-2xl">
              A transparent archive of verified job simulations, active professional certification
              pathways, and continuous hands-on laboratory practice.
            </p>

            {/* Dynamic Metadata Line */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
              <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-emerald-400">
                2 VERIFIED JOB SIMULATIONS
              </span>
              <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02]">
                4 IN-PROGRESS PATHWAYS
              </span>
              <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-[#C5A880]">
                HANDS-ON LAB PRACTICE
              </span>
            </div>
          </motion.div>

          {/* =========================================================
              QUICK CATEGORY JUMP STRIP
          ========================================================= */}
          <div className="border-t border-white/[0.08] pt-6 flex items-center justify-start gap-2.5 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => scrollToSection("professional-certificates")}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="text-[10px] text-[#77736F]">01</span>
              <span>PROFESSIONAL CERTIFICATES</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-neutral-400 font-mono">
                {LEARNING_PATHWAYS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("job-simulations")}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="text-[10px] text-emerald-400">02</span>
              <span>JOB SIMULATIONS</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
                {VERIFIED_CERTIFICATIONS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("cybersecurity-learning")}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="text-[10px] text-[#C5A880]">03</span>
              <span>CYBERSECURITY LABS</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#C5A880]/20 text-[#C5A880] font-mono">
                1
              </span>
            </button>
          </div>

          {/* =========================================================
              PART 1: PROFESSIONAL CERTIFICATES (IN PROGRESS PATHWAYS)
          ========================================================= */}
          <section id="professional-certificates" className="scroll-mt-28 space-y-8 pt-4 border-t border-white/[0.08]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736F]">
                <span className="text-[#C5A880] font-bold">01 — PROFESSIONAL CREDENTIAL CANDIDACIES</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F2EFE9]">
                  PROFESSIONAL CERTIFICATES<span className="text-[#C5A880]">.</span>
                </h2>
                <span className="font-mono text-xs text-[#77736F] uppercase tracking-wider">
                  {LEARNING_PATHWAYS.length} IN-PROGRESS PATHWAYS
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#A7A39C] max-w-2xl font-light">
                Standardized industry certification curricula and foundational credential pathways currently in active preparation.
              </p>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {LEARNING_PATHWAYS.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-6 sm:p-7 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                >
                  <div>
                    {/* Header: Issuer + In-Progress Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880] font-semibold block">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-[#77736F] uppercase">
                          {cert.type}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono text-amber-300 uppercase shrink-0">
                        <Clock className="w-3 h-3" />
                        <span>{cert.statusLabel}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F2EFE9] mb-3">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light mb-6">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Competency Badges */}
                    <div className="pt-4 border-t border-white/[0.05] space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#77736F]">
                        Curriculum Focus Areas:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] font-mono text-[#A7A39C] uppercase"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              PART 2: JOB SIMULATIONS (VERIFIED WITH GENUINE ASSETS)
          ========================================================= */}
          <section id="job-simulations" className="scroll-mt-28 space-y-8 pt-4 border-t border-white/[0.08]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736F]">
                <span className="text-emerald-400 font-bold">02 — VERIFIED INDUSTRY SIMULATIONS</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F2EFE9]">
                  JOB SIMULATIONS<span className="text-emerald-400">.</span>
                </h2>
                <span className="font-mono text-xs text-[#77736F] uppercase tracking-wider">
                  {VERIFIED_CERTIFICATIONS.length} VERIFIED CREDENTIALS WITH AUDITABLE ASSETS
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#A7A39C] max-w-2xl font-light">
                Hands-on corporate technology simulations completed through Forage with genuine completion
                certificates on file and auditable verification codes.
              </p>
            </div>

            {/* 2-Column Grid with High-Resolution Previews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {VERIFIED_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl border border-white/[0.1] bg-[#111114]/95 p-6 sm:p-8 hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.35)] group"
                >
                  <div className="space-y-6">
                    {/* Header Strip: Issuer + Verified Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          {cert.issuer}
                        </div>
                        <div className="text-[10px] font-mono text-[#77736F] uppercase">
                          {cert.type} &bull; {cert.category}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 uppercase shrink-0 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Credential</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F2EFE9]">
                      {cert.title}
                    </h3>

                    {/* Certificate Thumbnail Preview Frame */}
                    {cert.image && (
                      <div
                        onClick={() => setSelectedCert(cert)}
                        className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-[16/10] cursor-pointer group/thumb"
                      >
                        <img
                          src={cert.image}
                          alt={`${cert.title} Certificate for Rahul Mahanta`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                          <span className="px-4 py-2 rounded-full bg-white text-[#0B0B0D] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Full Certificate</span>
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/20 text-[9px] font-mono text-[#A7A39C]">
                          High-Res Asset On File
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>

                  {/* Metadata and Action */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <div className="text-[9px] uppercase text-[#77736F]">Date of Completion</div>
                        <div className="text-[#F2EFE9] font-medium">{cert.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase text-[#77736F]">Verification Code</div>
                        <div className="text-[#F2EFE9] font-medium truncate">{cert.verificationCode}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] font-mono text-[#A7A39C] uppercase"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-white hover:text-[#0B0B0D] hover:border-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 inline-flex items-center gap-1.5 cursor-pointer font-bold"
                      >
                        <span>INSPECT</span>
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              PART 3: CYBERSECURITY LEARNING & PRACTICE
          ========================================================= */}
          <section id="cybersecurity-learning" className="scroll-mt-28 space-y-8 pt-4 border-t border-white/[0.08]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736F]">
                <span className="text-[#C5A880] font-bold">03 — CONTINUOUS HANDS-ON LABORATORY WORK</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F2EFE9]">
                  CYBERSECURITY LEARNING &amp; PRACTICE<span className="text-[#C5A880]">.</span>
                </h2>
                <span className="font-mono text-xs text-[#77736F] uppercase tracking-wider">
                  PRACTICAL LABS &bull; NOT A CERTIFICATION
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#A7A39C] max-w-2xl font-light">
                Continuous engagement with interactive security rooms, defensive CTF challenges, and hands-on vulnerability analysis.
              </p>
            </div>

            {/* TryHackMe Showcase Card */}
            <div className="rounded-2xl border border-white/[0.1] bg-[#111115]/95 p-6 sm:p-8 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                      TRYHACKME &bull; CONTINUOUS PRACTICE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F2EFE9]">
                      {HANDS_ON_PRACTICE.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono text-[#A7A39C] uppercase">
                  <span>Interactive Labs Platform</span>
                </div>
              </div>

              {/* Explicit Truthful Notice */}
              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs sm:text-sm text-[#A7A39C] leading-relaxed font-light">
                {HANDS_ON_PRACTICE.description}
                <div className="mt-2 text-[11px] font-mono text-[#77736F]">
                  Note: TryHackMe is utilized as an active hands-on training and practice ground for technical skills and network exploration, distinct from formal certification credentials.
                </div>
              </div>

              {/* 5 Practical Domains */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
                  Key Active Practice Domains:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {HANDS_ON_PRACTICE.domains.map((domain, index) => (
                    <div
                      key={domain}
                      className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-white/15 transition-all text-xs font-mono text-[#F2EFE9] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              BOTTOM EDITORIAL SUMMARY & NAVIGATION STRIP
          ========================================================= */}
          <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-[#77736F]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>VERIFIED CREDENTIAL ARCHIVE &bull; 100% AUDITABLE ASSETS</span>
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
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white text-[#0B0B0D] hover:bg-[#F2EFE9] font-bold transition-all text-xs font-mono"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* High-Resolution Certificate Modal Inspector */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
