import { useState } from "react";
import { Link } from "react-router-dom";

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

interface ContactSectionProps {
  compact?: boolean;
}

export default function ContactSection({ compact = false }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
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

  // Quick Direct Email compose button
  const handleQuickEmailClick = () => {
    const defaultSubject = "Let's Connect — Portfolio Inquiry";
    const defaultBody = "Hello Rahul,\n\nI would like to connect with you regarding...";
    const url = buildGmailUrl(defaultSubject, defaultBody);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Contact form submission -> open Gmail compose with validated details
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedBody = `Hello Rahul,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    const url = buildGmailUrl(subject.trim(), formattedBody);

    // Open Gmail compose in a new tab
    window.open(url, "_blank", "noopener,noreferrer");

    // Display honest instructions to visitor (do not pretend message was sent automatically)
    setStatusNotice(
      "Gmail has opened in a new tab with your message prefilled. Please review and click Send inside Gmail to complete your inquiry."
    );
  };

  return (
    <section
      id="contact"
      data-purpose="contact-section"
      className="relative w-full bg-[#08080C] text-white py-20 md:py-28 overflow-hidden select-none border-t border-white/10 scroll-mt-20"
    >
      {/* Background Ambience & Halos */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-widest uppercase text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>06 &bull; START A CONVERSATION &bull; CONTACT &amp; COLLABORATION</span>
          </div>
        </div>

        {compact ? (
          /* =========================================================
              COMPACT HOMEPAGE CLOSING PREVIEW (Dramatic Dark "LET'S TALK")
          ========================================================= */
          <div className="max-w-4xl space-y-10">
            <div className="space-y-5">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                LET'S TALK<span className="text-purple-400">.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  START A CONVERSATION.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl">
                Have an opportunity, collaboration idea or technical project? Whether exploring full-stack engineering, cybersecurity workflows, or academic research, let's connect.
              </p>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleQuickEmailClick}
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>EMAIL ME</span>
                <span className="text-base">↗</span>
              </button>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/40 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>VISIT CONTACT PAGE</span>
                <span className="text-base">↗</span>
              </Link>
            </div>

            {/* Social Channels List */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-bold">
                ONLINE PROFILES &amp; SOCIAL CHANNELS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                <a
                  href="https://github.com/talksick08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Code</span>
                  <span className="text-sm font-bold text-white uppercase mt-1">GitHub ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Network</span>
                  <span className="text-sm font-bold text-white uppercase mt-1">LinkedIn ↗</span>
                </a>

                <a
                  href="https://www.instagram.com/highnhoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Social</span>
                  <span className="text-sm font-bold text-white uppercase mt-1">Instagram ↗</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================
              FULL CONTACT PAGE VIEW (2-Column Form + Direct Channel)
          ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Social Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                  LET'S BUILD<br />
                  <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
                    SOMETHING MEANINGFUL.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  Have an interesting project, collaboration opportunity or technical idea? Let's connect and explore what we can create together.
                </p>
              </div>

              {/* Direct Connect Card (No visible email address displayed) */}
              <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md space-y-4 hover:border-purple-500/40 transition-all duration-300 group">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-purple-300 block font-bold mb-1">
                    DIRECT CHANNEL
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">
                    LET'S CONNECT
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-1">
                    Have a project or collaboration idea? Send me an email.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleQuickEmailClick}
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>EMAIL ME</span>
                    <span className="text-sm">↗</span>
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-bold">
                  ONLINE PROFILES &amp; SOCIALS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://github.com/talksick08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Code</span>
                    <span className="text-sm font-bold text-white uppercase mt-1">GitHub ↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Network</span>
                    <span className="text-sm font-bold text-white uppercase mt-1">LinkedIn ↗</span>
                  </a>

                  <a
                    href="https://www.instagram.com/highnhoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Social</span>
                    <span className="text-sm font-bold text-white uppercase mt-1">Instagram ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Professional Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-white/[0.025] backdrop-blur-xl shadow-2xl relative">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-6">
                  SEND AN INQUIRY
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Rahul Mahanta"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors min-h-[44px] ${
                        errors.name
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/15 focus:border-cyan-400"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors min-h-[44px] ${
                        errors.email
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/15 focus:border-cyan-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: "" });
                      }}
                      placeholder="Project Inquiry / Collaboration / Web Application"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors min-h-[44px] ${
                        errors.subject
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/15 focus:border-cyan-400"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Tell me about your project, technical requirements, or collaboration goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/15 focus:border-cyan-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Status Notice (Genuine instructions, no fake success pretense) */}
                  {statusNotice && (
                    <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-xs text-purple-200 leading-relaxed font-mono">
                      {statusNotice}
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105 cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>SEND MESSAGE</span>
                      <span className="text-sm">↗</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-400 font-mono pt-1">
                    &bull; Opens directly in Gmail with your details prefilled for review before sending.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
