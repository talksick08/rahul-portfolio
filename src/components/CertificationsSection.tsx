import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BookOpen,
  Terminal,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import {
  VERIFIED_CERTIFICATIONS,
  LEARNING_PATHWAYS,
  HANDS_ON_PRACTICE,
  CertificationItem,
} from "@/data/certifications";
import CertificateModal from "@/components/CertificateModal";

interface CertificationsSectionProps {
  compact?: boolean;
}

// =======================================================================
// HOMEPAGE COMPACT EDITORIAL PREVIEW (2 Verified Credentials Showcase)
// =======================================================================
function CompactCertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Exactly two verified credentials for the homepage preview
  const homepageCerts = [VERIFIED_CERTIFICATIONS[0], VERIFIED_CERTIFICATIONS[1]];

  const headerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const panelVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.14,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section
        id="certifications"
        data-purpose="homepage-certifications"
        className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] py-20 md:py-28 select-none scroll-mt-20 border-t border-white/[0.08] overflow-hidden"
      >
        {/* Restrained Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#A89AC9]/5 blur-[160px]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-slate-500/5 blur-[160px]"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Section Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            variants={headerVariants}
            className="border-b border-white/[0.08] pb-10 md:pb-14 mb-12 md:mb-16 space-y-6"
          >
            {/* Section Identifier Kicker */}
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[#77736F]">
              <span className="text-[#A89AC9]">05</span>
              <span>&mdash;</span>
              <span>VERIFIED CREDENTIALS</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05] max-w-2xl">
                PROOF OF CONTINUOUS
                <br />
                <span className="text-[#77736F]">LEARNING</span>
                <span className="text-[#A89AC9]">.</span>
              </h2>

              <div className="max-w-md space-y-4">
                <p className="text-[15px] sm:text-base text-[#A7A39C] leading-[1.7] font-normal">
                  Practical experience and verified learning through industry-focused simulations.
                </p>
                <div>
                  <Link
                    to="/certifications"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-white hover:text-[#0B0B0D] hover:border-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group"
                  >
                    <span>VIEW ALL CERTIFICATIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Refined Horizontal Credential Panels */}
          <div className="space-y-5 sm:space-y-6">
            {homepageCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                variants={panelVariants}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#121216]/40 hover:bg-[#121216]/75 hover:border-[#A89AC9]/40 backdrop-blur-md p-5 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(168,154,201,0.12)] cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
                  {/* Left Sub-Container: Thumbnail + Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 flex-1 min-w-0">
                    {/* Small Certificate Document Thumbnail */}
                    <div className="relative w-full sm:w-44 md:w-52 aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md shrink-0 group/thumb">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-full object-cover object-top opacity-85 group-hover/thumb:opacity-100 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 rounded-full bg-black/80 border border-white/10 text-[9px] font-mono text-neutral-300 backdrop-blur-sm">
                          ID: {cert.verificationCode}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/80 text-black text-[9px] font-mono font-bold">
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Credential Content */}
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-[11px] tracking-widest uppercase text-[#A89AC9] font-bold">
                          {cert.issuer}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>{cert.statusLabel}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold uppercase tracking-tight text-[#F2EFE9] group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>

                      <div className="flex items-center gap-2 font-mono text-xs text-[#A7A39C]">
                        <Calendar className="w-3.5 h-3.5 text-[#77736F]" />
                        <span>Completed {cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Sub-Container: Clean "VIEW CERTIFICATE" interaction */}
                  <div className="shrink-0 self-start md:self-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] text-[#F2EFE9] group-hover:bg-[#F2EFE9] group-hover:text-[#0B0B0D] group-hover:border-[#F2EFE9] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <span>VIEW CERTIFICATE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}

// =======================================================================
// MAIN COMPONENT (Conditional: Homepage Compact vs Dedicated /certifications Page)
// =======================================================================
export default function CertificationsSection({ compact = false }: CertificationsSectionProps) {
  // Homepage preview uses the compact editorial credential showcase
  if (compact) {
    return <CompactCertificationsSection />;
  }

  // Dedicated /certifications page uses the full 3-tier catalog
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const cardFadeVariant: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      data-purpose="certifications-learning"
      className="relative w-full bg-[#070709] text-white py-24 md:py-32 overflow-hidden scroll-mt-24 select-none"
    >
      {/* Background Ambient Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Cyan Ambient Glow */}
        <div
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[170px]"
          aria-hidden="true"
        />
        {/* Subtle Purple Ambient Glow */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[170px]"
          aria-hidden="true"
        />

        {/* Ambient Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-10 mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-widest uppercase text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>STRUCTURED LEARNING &bull; VERIFIED CREDENTIALS</span>
            </div>

            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              <span>02 COMPLETED &bull; 04 PURSUING &bull; HANDS-ON LABS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                KNOWLEDGE BUILT THROUGH
                <br />
                <span className="text-white/40">CONTINUOUS LEARNING</span>
                <span className="text-cyan-400">.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <div className="w-12 h-px bg-white/20 mb-4 hidden lg:block" />
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                Building a strong technical foundation through structured learning, industry certifications and hands-on cybersecurity practice.
              </p>
            </div>
          </div>
        </div>

        {/* TIER 1: VERIFIED COMPLETED CREDENTIALS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-300 font-bold">
              01 / VERIFIED COMPLETED CREDENTIALS
            </h3>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/90 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Verified Proof on File
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VERIFIED_CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardFadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.045] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_40px_-15px_rgba(160,185,129,0.15)] flex flex-col justify-between"
              >
                {/* Top Subtle Gradient Accents */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-400/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8">
                  {/* Card Header: Issuer + Status Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-semibold">
                          {cert.issuer}
                        </span>
                        <span className="text-xs text-neutral-400 font-mono">
                          {cert.type}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.statusLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-emerald-100 transition-colors">
                    {cert.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {cert.description}
                  </p>

                  {/* Certificate Preview Card with Click-to-View Overlay */}
                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 mb-6 cursor-pointer group/thumb"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          className="w-full h-full object-cover object-top opacity-75 group-hover/thumb:opacity-95 group-hover/thumb:scale-105 transition-all duration-500"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Full Certificate</span>
                        </button>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-[9px] font-mono text-neutral-300 backdrop-blur-sm">
                          ID: {cert.verificationCode}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/80 text-black text-[9px] font-mono font-bold">
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Demonstrated Skills Tags */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2 font-semibold">
                      Demonstrated Core Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-neutral-300 uppercase"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metadata Bar */}
                <div className="px-8 py-4 bg-white/[0.015] border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Completed {cert.issueDate}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>Inspect Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIER 2: IN-PROGRESS / STRUCTURED LEARNING PATHWAYS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-300 font-bold">
              02 / STRUCTURED LEARNING PATHWAYS &bull; ACTIVE STUDY
            </h3>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/90 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              In Progress &bull; No Fake IDs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_PATHWAYS.map((pathway) => (
              <motion.div
                key={pathway.id}
                variants={cardFadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.045] backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400/90 font-semibold truncate">
                      {pathway.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-[9px] font-mono tracking-wider uppercase shrink-0">
                      <Clock className="w-2.5 h-2.5" />
                      Pursuing
                    </span>
                  </div>

                  <h4 className="text-lg font-bold tracking-tight text-white mb-2 leading-snug group-hover:text-cyan-100 transition-colors">
                    {pathway.title}
                  </h4>

                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-3">
                    {pathway.category}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-5">
                    {pathway.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                      Core Curriculum Topics:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pathway.skills.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.025] text-[9px] font-mono text-neutral-400 uppercase"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIER 3: HANDS-ON CYBERSECURITY PRACTICE (TRYHACKME) */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-300 font-bold">
              03 / HANDS-ON CYBERSECURITY PRACTICE &bull; VIRTUAL LABS
            </h3>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400/90 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
              Interactive Lab Practice
            </span>
          </div>

          <motion.div
            variants={cardFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.035] backdrop-blur-md p-8 md:p-10 transition-all duration-300 hover:border-rose-500/30 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 text-[14vw] font-black uppercase text-white/[0.015] tracking-tighter select-none pointer-events-none">
              LABS
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl border border-rose-500/30 bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-rose-400 block font-semibold">
                      {HANDS_ON_PRACTICE.platform} &bull; PRACTICAL APPLICATION
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {HANDS_ON_PRACTICE.type}
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  {HANDS_ON_PRACTICE.title}
                </h4>

                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-4">
                  {HANDS_ON_PRACTICE.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-neutral-400">
                  <Sparkles className="w-3 h-3 text-rose-400" />
                  <span>Separated from formal certifications as practical hands-on labs</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
                  <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4 flex items-center justify-between">
                    <span>Active Lab Domains Explored</span>
                    <span className="text-emerald-400 text-[10px]">● Continuous Practice</span>
                  </div>

                  <div className="space-y-2.5">
                    {HANDS_ON_PRACTICE.domains.map((domain, idx) => (
                      <div
                        key={domain}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-neutral-300"
                      >
                        <span className="w-5 h-5 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[9px] text-neutral-400 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="truncate">{domain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Link to Dedicated Certifications Page */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest text-center sm:text-left">
            VERIFIED CREDENTIALS &bull; IN-PROGRESS LEARNING &bull; HANDS-ON LABS
          </p>
          <Link
            to="/certifications"
            className="px-6 py-3 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>VIEW FULL CERTIFICATIONS PAGE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
