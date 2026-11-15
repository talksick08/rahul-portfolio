import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Calendar, Hash, CheckCircle2, Sparkles } from "lucide-react";
import { CertificationItem } from "@/data/certifications";

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certification, onClose }: CertificateModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (!certification) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${certification.title} Certificate View`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[88dvh] sm:max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#0B0B0D] text-[#F2EFE9] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Modal Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 sm:px-8 py-3.5 sm:py-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-semibold">
                  VERIFIED CREDENTIAL ARCHIVE
                </span>
                <span className="text-xs text-[#A7A39C] font-mono">
                  {certification.issuer} &bull; {certification.type}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 bg-white/[0.03] text-[#A7A39C] hover:text-[#F2EFE9] hover:bg-white/[0.08] transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Close Certificate Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body: Scrollable Content */}
          <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
            {/* Title & Narrative */}
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#C5A880] mb-1.5">
                <span>{certification.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F2EFE9] mb-3">
                {certification.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A7A39C] leading-relaxed font-light">
                {certification.description}
              </p>
            </div>

            {/* Verification Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-mono">
              <div className="flex items-center gap-2.5 text-[#F2EFE9]">
                <Calendar className="w-4 h-4 text-[#C5A880] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase text-[#77736F]">Date of Completion</div>
                  <div className="font-medium text-[#F2EFE9]">{certification.issueDate || "2026"}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[#F2EFE9]">
                <Hash className="w-4 h-4 text-[#C5A880] shrink-0" />
                <div>
                  <div className="text-[9px] uppercase text-[#77736F]">Verification Code</div>
                  <div className="font-medium text-[#F2EFE9] truncate max-w-[160px] sm:max-w-none">
                    {certification.verificationCode || "Verified via Forage"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[#F2EFE9]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[9px] uppercase text-[#77736F]">Credential Status</div>
                  <div className="font-medium text-emerald-400">Authentic &amp; On File</div>
                </div>
              </div>
            </div>

            {/* High-Resolution Certificate Image */}
            {certification.image && (
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-black/60 shadow-inner group">
                <img
                  src={certification.image}
                  alt={`${certification.title} Certificate for Rahul Mahanta`}
                  className="w-full h-auto object-contain max-h-[55vh] mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[10px] font-mono text-[#A7A39C] backdrop-blur-sm">
                  Verified High-Res Certificate
                </div>
              </div>
            )}

            {/* Practical Skills Covered */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#77736F] mb-2.5">
                Demonstrated Practical Competencies:
              </div>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-wider text-[#A7A39C]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-white/[0.08] px-4 sm:px-8 py-3.5 sm:py-4 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="font-mono text-[10px] text-[#77736F] uppercase tracking-widest">
              RAHUL MAHANTA &bull; VERIFIED CREDENTIAL ARCHIVE
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
