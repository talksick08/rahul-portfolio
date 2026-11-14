import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from "lucide-react";

// Email destination is kept secure and never rendered as visible text on the page
const RECIPIENT_EMAIL = "rahulmahanta156@gmail.com";

function buildGmailUrl(subjectText: string, bodyText: string): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: RECIPIENT_EMAIL,
    su: subjectText,
    body: bodyText,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

function buildMailtoUrl(subjectText: string, bodyText: string): string {
  return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    subjectText
  )}&body=${encodeURIComponent(bodyText)}`;
}

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  // Video Background Lifecycle & Performance State
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileOrReduced, setIsMobileOrReduced] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [shouldLoadVideo, setShouldLoadVideo] = useState<boolean>(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Detect mobile device or reduced-motion preference
  useEffect(() => {
    const evaluateMobileOrReduced = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileOrReduced(Boolean(shouldReduceMotion || isMobile));
    };

    evaluateMobileOrReduced();
    window.addEventListener("resize", evaluateMobileOrReduced);
    return () => window.removeEventListener("resize", evaluateMobileOrReduced);
  }, [shouldReduceMotion]);

  // Load video only when Contact section approaches viewport via IntersectionObserver
  useEffect(() => {
    if (isMobileOrReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          if (videoRef.current && videoRef.current.paused) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          }
        } else {
          // Pause playback when Contact section leaves viewport to save GPU/CPU
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "200px 0px 200px 0px",
        threshold: 0.05,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobileOrReduced]);

  // Trigger video playback once source is activated
  useEffect(() => {
    if (shouldLoadVideo && videoRef.current && !isMobileOrReduced) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [shouldLoadVideo, isMobileOrReduced]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your name or company.";
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!message.trim()) {
      newErrors.message = "Please write a brief message.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Quick Direct Email Compose
  const handleQuickConnect = () => {
    const defaultSubject = "Let's Connect — Portfolio Inquiry";
    const defaultBody = "Hello Rahul,\n\nI would like to connect with you regarding...";
    const url = buildGmailUrl(defaultSubject, defaultBody);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedSubject = `[Portfolio Inquiry] ${subject.trim()}`;
    const formattedBody = `Hello Rahul,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;

    const url = buildGmailUrl(formattedSubject, formattedBody);
    window.open(url, "_blank", "noopener,noreferrer");

    // Transparent, truthful user notice (no false claims of automated background sending)
    setSubmittedNotice(
      "Gmail has opened in a new tab with your details prefilled. Please review and click Send inside Gmail to complete your inquiry."
    );
  };

  // Fallback to default desktop mail client
  const handleMailtoFallback = () => {
    if (!name.trim() && !message.trim()) {
      window.location.href = buildMailtoUrl(
        "Let's Connect — Portfolio Inquiry",
        "Hello Rahul,\n\nI would like to connect with you regarding..."
      );
      return;
    }
    const formattedSubject = subject.trim()
      ? `[Portfolio Inquiry] ${subject.trim()}`
      : "Portfolio Inquiry";
    const formattedBody = `Hello Rahul,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    window.location.href = buildMailtoUrl(formattedSubject, formattedBody);
  };

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

  return (
    <main
      ref={containerRef}
      data-purpose="page-contact"
      className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-4 sm:pt-6 pb-28 select-none relative overflow-hidden"
    >
      <SEO {...seoConfig.contact} />
      {/* =========================================================
          CINEMATIC VIDEO BACKGROUND (CONTACT PAGE ONLY)
          Full-width, red-and-black aesthetic with refined 38-42% overlay.
          Preserves the marble statue, glowing red eclipse ring, smoke and embers.
      ========================================================= */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* On mobile or reduced-motion, render only the static poster image */}
        {isMobileOrReduced ? (
          <img
            src="/assets/rahul-contact-bg-poster.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <video
            ref={videoRef}
            src={shouldLoadVideo ? "/assets/rahul-contact-bg.mp4" : undefined}
            preload="none"
            muted
            loop
            playsInline
            autoPlay
            poster="/assets/rahul-contact-bg-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}

        {/* Calibrated Dark Cinematic Overlay (~38-42% darkness)
            Maintains the rich red-and-black contrast, red smoke and glowing ring
            while ensuring all editorial text, forms and buttons remain crystal clear */}
        <div className="absolute inset-0 bg-[#0B0B0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/55 via-transparent to-[#0B0B0D]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/35 via-transparent to-[#0B0B0D]/35" />
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
            <span className="text-[#C5A880]">CONTACT</span>
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
            1. HERO: PAGE IDENTIFIER & EDITORIAL HEADER
        ========================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="space-y-5"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#A7A39C]">
            <span className="text-[#C5A880] font-bold">06</span>
            <span className="text-white/20">&mdash;</span>
            <span>DIRECT INQUIRIES &amp; COLLABORATION</span>
          </div>

          {/* Dominant Headline with subtle text-shadow for crisp legibility over dynamic video background */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            LET'S BUILD
            <br />
            <span className="text-[#F2EFE9]">SOMETHING MEANINGFUL</span>
            <span className="text-[#C5A880]">.</span>
          </h1>

          {/* Narrative Subtitle */}
          <p className="text-base sm:text-lg text-[#A7A39C] leading-[1.7] font-normal max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            I'm open to opportunities, collaborations and conversations around software
            development, cybersecurity and technology.
          </p>

          {/* Dynamic Metadata Line */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-[#0B0B0D]/60 backdrop-blur-sm">
              FAST EMAIL RESPONSE
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-[#0B0B0D]/60 backdrop-blur-sm">
              NEW DELHI / NCR &bull; IST (UTC+5:30)
            </span>
            <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-[#0B0B0D]/60 backdrop-blur-sm text-[#C5A880]">
              VERIFIED CHANNELS
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            2. TWO-COLUMN BALANCED CONTACT INTERFACE
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4 border-t border-white/[0.08]">
          
          {/* LEFT COLUMN: DIRECT CHANNELS & VERIFIED SOCIALS (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Connect Direct Dispatch Card */}
            <div className="rounded-2xl border border-white/[0.1] bg-[#111114]/90 backdrop-blur-md p-6 sm:p-7 space-y-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block font-semibold mb-1">
                  DIRECT CHANNEL
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#F2EFE9]">
                  LAUNCH GMAIL COMPOSE
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed mt-2 font-light">
                  Prefer sending a quick email directly? Launch a prefilled Gmail compose window with one click.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleQuickConnect}
                  className="px-6 py-3 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>COMPOSE IN GMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-[#77736F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Zero text exposure &bull; Spam-protected dispatch</span>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#77736F]">
                Verified Online Profiles:
              </div>

              <div className="space-y-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111114]/80 backdrop-blur-md hover:border-white/20 hover:bg-[#141418] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#C5A880] group-hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#F2EFE9] font-semibold">
                        LinkedIn
                      </div>
                      <div className="text-[10px] font-mono text-[#77736F]">
                        Professional Experience &amp; Network
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77736F] group-hover:text-white transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/talksick08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111114]/80 backdrop-blur-md hover:border-white/20 hover:bg-[#141418] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#C5A880] group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#F2EFE9] font-semibold">
                        GitHub
                      </div>
                      <div className="text-[10px] font-mono text-[#77736F]">
                        Repositories, Code &amp; Experiments
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77736F] group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/highnhoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111114]/80 backdrop-blur-md hover:border-white/20 hover:bg-[#141418] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#C5A880] group-hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#F2EFE9] font-semibold">
                        Instagram
                      </div>
                      <div className="text-[10px] font-mono text-[#77736F]">
                        Personal &amp; Creative Updates
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77736F] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Geographical Context */}
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111114]/70 backdrop-blur-md flex items-center gap-3 text-xs font-mono text-[#A7A39C]">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <div>Based in New Delhi / NCR, India</div>
                <div className="text-[10px] text-[#77736F]">Open to remote engineering opportunities worldwide</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REFINED EDITORIAL CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.1] bg-[#111114]/90 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block font-semibold mb-1">
                  SEND AN INQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F2EFE9]">
                  PREPARE YOUR MESSAGE
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A39C] leading-relaxed mt-1 font-light">
                  Fill in your details below. Submitting will prefill a clean, formatted inquiry ready for dispatch.
                </p>
              </div>

              {/* Status Notice Banner */}
              {submittedNotice && (
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs sm:text-sm text-emerald-300 leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Inquiry Prepared Successfully</div>
                    <div>{submittedNotice}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="text-xs font-mono underline hover:text-white transition-colors cursor-pointer"
                      >
                        Prefer desktop mail client? Click here &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A7A39C] mb-2"
                  >
                    Your Name <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Rahul Sharma or Company Name"
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-[#F2EFE9] text-sm placeholder:text-[#55524F] transition-all focus:outline-none ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.1] focus:border-[#C5A880]/70 focus:bg-black/60"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A7A39C] mb-2"
                  >
                    Your Email Address <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    placeholder="your.name@domain.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-[#F2EFE9] text-sm placeholder:text-[#55524F] transition-all focus:outline-none ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.1] focus:border-[#C5A880]/70 focus:bg-black/60"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A7A39C] mb-2"
                  >
                    Subject <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                    }}
                    placeholder="Engineering Role / Project Collaboration / Consultation"
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-[#F2EFE9] text-sm placeholder:text-[#55524F] transition-all focus:outline-none ${
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.1] focus:border-[#C5A880]/70 focus:bg-black/60"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#A7A39C]"
                    >
                      Message <span className="text-[#C5A880]">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-[#77736F]">
                      {message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    placeholder="Provide details about your project, timeline, or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-[#F2EFE9] text-sm placeholder:text-[#55524F] transition-all focus:outline-none resize-y ${
                      errors.message
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.1] focus:border-[#C5A880]/70 focus:bg-black/60"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>COMPOSE IN GMAIL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-[#A7A39C] hover:text-[#F2EFE9] hover:border-white/25 font-mono text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>DEFAULT MAIL CLIENT</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* =========================================================
            BOTTOM EXPLORATION & RETURN
        ========================================================= */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-[#77736F]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>COMMUNICATION &bull; OPEN TO NEW OPPORTUNITIES</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#A7A39C] hover:text-[#F2EFE9] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
