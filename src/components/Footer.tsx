import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Instagram, Mail, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      data-purpose="global-footer"
      className="relative w-full bg-[#0B0B0D] text-[#F2EFE9] select-none border-t border-white/[0.08] overflow-hidden z-10"
    >
      {/* Restrained ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#C5A880]/[0.02] blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#A89AC9]/[0.02] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* =========================================================
            VARIANT 1: HOMEPAGE FOOTER (GRAND EDITORIAL FINALE)
        ========================================================= */}
        {isHome && (
          <div className="pt-20 sm:pt-24 md:pt-28 pb-12">
            {/* Eyebrow Kicker */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#77736F] mb-6">
              <span className="text-[#C5A880] font-bold">NEXT CHAPTER</span>
              <span className="text-white/20">&mdash;</span>
              <span>START A CONVERSATION</span>
            </div>

            {/* Oversized Editorial Heading */}
            <div className="mb-10 sm:mb-12">
              <h2
                onClick={onOpenContact}
                className="text-[clamp(2.5rem,11vw,7.5rem)] font-black uppercase tracking-tight text-[#F2EFE9] leading-[0.9] select-none cursor-pointer group"
              >
                <span className="group-hover:text-white transition-colors">LET'S BUILD</span>
                <span className="text-[#C5A880]">.</span>
                <br />
                <span className="text-[#77736F] group-hover:text-[#A7A39C] transition-colors">
                  LET'S CREATE
                </span>
                <span className="text-[#A89AC9]">.</span>
              </h2>
            </div>

            {/* Collaboration Invitation & Contact Action */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-12 border-b border-white/[0.08]">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-[#A7A39C] leading-relaxed font-light max-w-xl">
                  Open to full-stack software development, cybersecurity engineering, and intelligent system
                  initiatives. Available for high-impact technical collaborations worldwide.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3.5">
                <Link
                  to="/contact"
                  className="px-7 py-3 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] min-h-[44px] w-full sm:w-auto"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] text-[#F2EFE9] hover:bg-white/[0.08] hover:border-white/30 text-xs font-mono uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer min-h-[44px] w-full sm:w-auto"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>QUICK INQUIRY</span>
                </button>
              </div>
            </div>

            {/* Secondary Navigation & Social Channels */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
              {/* Portfolio Navigation Links */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-mono uppercase tracking-wider text-[#A7A39C]">
                <Link to="/" className="hover:text-[#F2EFE9] transition-colors">HOME</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/about" className="hover:text-[#F2EFE9] transition-colors">ABOUT</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/experience" className="hover:text-[#F2EFE9] transition-colors">EXPERIENCE</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/projects" className="hover:text-[#F2EFE9] transition-colors">PROJECTS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/skills" className="hover:text-[#F2EFE9] transition-colors">SKILLS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/certifications" className="hover:text-[#F2EFE9] transition-colors">CERTIFICATIONS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/contact" className="hover:text-[#F2EFE9] transition-colors">CONTACT</Link>
              </div>

              {/* Verified Social Profile Pills */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/talksick08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://www.instagram.com/highnhoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            VARIANT 2: INNER PAGES FOOTER (COMPACT EDITORIAL SUMMARY)
        ========================================================= */}
        {!isHome && !isContactPage && (
          <div className="py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
              {/* Brand & Discipline Indicator */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black tracking-wider uppercase text-[#F2EFE9]">RAHUL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A89AC9]" />
                </div>
                <p className="text-xs text-[#A7A39C] font-mono">
                  Computer Science Student &bull; Software &amp; Cybersecurity &bull; New Delhi / NCR
                </p>
              </div>

              {/* Verified Social Profile Links & Contact Action */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://github.com/talksick08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Github className="w-3 h-3" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://www.instagram.com/highnhoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3 h-3" />
                  <span>INSTAGRAM</span>
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-1.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-mono uppercase tracking-wider font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Navigation Strip */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#A7A39C]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link to="/" className="hover:text-[#F2EFE9] transition-colors">HOME</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/about" className="hover:text-[#F2EFE9] transition-colors">ABOUT</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/experience" className="hover:text-[#F2EFE9] transition-colors">EXPERIENCE</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/projects" className="hover:text-[#F2EFE9] transition-colors">PROJECTS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/skills" className="hover:text-[#F2EFE9] transition-colors">SKILLS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/certifications" className="hover:text-[#F2EFE9] transition-colors">CERTIFICATIONS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/contact" className="hover:text-[#F2EFE9] transition-colors">CONTACT</Link>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#77736F] hover:text-[#F2EFE9] transition-colors cursor-pointer"
              >
                <span>TOP</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* =========================================================
            VARIANT 3: CONTACT PAGE FOOTER (SEAMLESS COMPLEMENT)
        ========================================================= */}
        {isContactPage && (
          <div className="py-8 sm:py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              {/* Navigation Links */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs font-mono uppercase tracking-wider text-[#A7A39C]">
                <Link to="/" className="hover:text-[#F2EFE9] transition-colors">HOME</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/about" className="hover:text-[#F2EFE9] transition-colors">ABOUT</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/experience" className="hover:text-[#F2EFE9] transition-colors">EXPERIENCE</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/projects" className="hover:text-[#F2EFE9] transition-colors">PROJECTS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/skills" className="hover:text-[#F2EFE9] transition-colors">SKILLS</Link>
                <span className="text-white/20">&bull;</span>
                <Link to="/certifications" className="hover:text-[#F2EFE9] transition-colors">CERTIFICATIONS</Link>
              </div>

              {/* Social Channels & Back to Top */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/talksick08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/highnhoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="p-2 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 transition-all cursor-pointer"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            FINAL VISIBLE FOOTER CREDIT (EXACT SPECIFICATION)
        ========================================================= */}
        <div className="w-full pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#77736F] gap-4">
          <div>&copy; 2026 RAHUL MAHANTA</div>
          <div>DESIGN BY RAHUL MAHANTA</div>
        </div>

      </div>
    </footer>
  );
}
