import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onOpenContact?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  path: string;
}

const navLinks: NavItem[] = [
  { id: "home", label: "HOME", path: "/" },
  { id: "about", label: "ABOUT", path: "/about" },
  { id: "experience", label: "EXPERIENCE", path: "/experience" },
  { id: "projects", label: "PROJECTS", path: "/projects" },
  { id: "skills", label: "SKILLS", path: "/skills" },
  { id: "certifications", label: "CERTIFICATIONS", path: "/certifications" },
  { id: "contact", label: "CONTACT", path: "/contact" },
];

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine whether current page has a dark background theme
  const isDarkPage = location.pathname !== "/";

  const handleNavClick = (link: NavItem) => {
    setIsMobileOpen(false);

    if (location.pathname === link.path) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate(link.path);
    }
  };

  const isLinkActive = (link: NavItem): boolean => {
    return location.pathname === link.path;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${
          isDarkPage
            ? "bg-[#0B0B0D]/85 border-b border-white/[0.08]"
            : "bg-[#FAFAFA]/90 border-b border-black/[0.06]"
        }`}
        data-purpose="site-navigation"
      >
        <div className="max-w-[1400px] mx-auto pt-4 pb-4 px-6 md:px-14 flex items-center justify-between">
          {/* Brand Wordmark (Returns to Home /) */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }}
            className={`group font-extrabold text-xl tracking-tight flex items-center select-none ${
              isDarkPage ? "text-[#F2EFE9]" : "text-black"
            }`}
          >
            <span>RAHUL</span>
            <span
              className={`inline-block w-2 h-2 rounded-full ml-1.5 transition-transform group-hover:scale-150 duration-200 ${
                isDarkPage ? "bg-[#A89AC9]" : "bg-black"
              }`}
            />
          </Link>

          {/* Center Multi-Page Navigation Links (Floating Pill) */}
          <nav
            className={`hidden lg:flex items-center gap-1 p-1 rounded-full shadow-xs text-[11px] xl:text-xs font-semibold tracking-wider ${
              isDarkPage
                ? "bg-[#141418]/90 border border-white/10 text-neutral-400"
                : "bg-white/95 border border-[#E2E2E2] text-neutral-600"
            }`}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`px-3 xl:px-4 py-1.5 xl:py-2 rounded-full transition whitespace-nowrap cursor-pointer text-[11px] xl:text-xs font-semibold tracking-wider ${
                    active
                      ? isDarkPage
                        ? "border border-white/20 text-[#F2EFE9] bg-white/10 shadow-xs font-bold"
                        : "border border-neutral-300 text-black bg-neutral-50 shadow-2xs font-bold"
                      : isDarkPage
                      ? "border border-transparent text-neutral-400 hover:border-white/15 hover:text-white"
                      : "border border-transparent text-neutral-600 hover:border-neutral-200 hover:text-black"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Social & Menu Links */}
          <div
            className={`flex items-center gap-1.5 md:gap-2 p-1.5 rounded-full shadow-xs ${
              isDarkPage
                ? "bg-[#141418]/90 border border-white/10 text-neutral-300"
                : "bg-white/95 border border-[#E2E2E2] text-neutral-700"
            }`}
          >
            {/* Instagram */}
            <a
              className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                isDarkPage
                  ? "hover:bg-white/10 hover:text-white"
                  : "hover:bg-neutral-100 hover:text-black"
              }`}
              href="https://www.instagram.com/highnhoes"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="18" rx="5" ry="5" width="18" x="3" y="3" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                isDarkPage
                  ? "hover:bg-white/10 hover:text-white"
                  : "hover:bg-neutral-100 hover:text-black"
              }`}
              href="https://github.com/talksick08"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                isDarkPage
                  ? "hover:bg-white/10 hover:text-white"
                  : "hover:bg-neutral-100 hover:text-black"
              }`}
              href="https://www.linkedin.com/in/rahul-mahanta-57a16a325/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Navigation Menu"
              className={`lg:hidden w-8 h-8 rounded-full flex items-center justify-center transition ml-1 cursor-pointer ${
                isDarkPage
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" x2="20" y1="7" y2="7" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="17" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="relative z-10 w-4/5 max-w-sm bg-white h-full p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                  <span className="font-extrabold text-lg tracking-tight flex items-center">
                    <span>RAHUL</span>
                    <span className="inline-block w-2 h-2 rounded-full ml-1.5 bg-[#A89AC9]" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <nav className="flex flex-col gap-3 mt-8 text-base font-bold tracking-wider">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => handleNavClick(link)}
                        className={`py-2 text-left border-b border-neutral-100 hover:text-black cursor-pointer text-sm font-bold tracking-widest uppercase transition-colors ${
                          active ? "text-black underline font-black" : "text-neutral-600"
                        }`}
                      >
                        {link.label}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileOpen(false);
                      if (onOpenContact) {
                        onOpenContact();
                      } else {
                        navigate("/contact");
                      }
                    }}
                    className="pt-4 text-left text-sm font-bold tracking-widest uppercase text-black hover:underline cursor-pointer flex items-center gap-1.5"
                  >
                    <span>CONTACT ME</span>
                    <span>↗</span>
                  </button>
                </nav>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1 font-bold">
                  RAHUL MAHANTA
                </p>
                <p className="text-xs text-neutral-600">Developer &bull; Computer Science Student</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
