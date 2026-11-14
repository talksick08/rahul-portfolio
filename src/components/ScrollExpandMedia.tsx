import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import AboutEditorialProfile from "@/components/AboutEditorialProfile";

interface ScrollExpandMediaProps {
  onOpenContact?: () => void;
  showDetailedProfile?: boolean;
}

export default function ScrollExpandMedia({
  onOpenContact,
  showDetailedProfile = false,
}: ScrollExpandMediaProps) {
  const shouldReduceMotion = useReducedMotion();

  // Pinned track specifically measures the 200vh pinned stage
  const pinnedTrackRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLDivElement | null>(null);
  const mediaContainerRef = useRef<HTMLDivElement | null>(null);
  const mediaBlurRef = useRef<HTMLImageElement | null>(null);
  const mediaOverlayRef = useRef<HTMLDivElement | null>(null);
  const titleFirstRef = useRef<HTMLHeadingElement | null>(null);
  const titleRestRef = useRef<HTMLHeadingElement | null>(null);
  const dateTagRef = useRef<HTMLParagraphElement | null>(null);
  const scrollPromptRef = useRef<HTMLParagraphElement | null>(null);
  const mediaContentRef = useRef<HTMLDivElement | null>(null);

  const ASPECT_RATIO = 1024 / 546; // ≈ 1.875457875 (cinematic widescreen aspect ratio)

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const applyFrame = useCallback(
    (progress: number, isMobile: boolean) => {
      // If reduced motion is requested, snap immediately to full expansion
      const clampedProgress = Math.min(1, Math.max(0, progress));
      // Smoothstep keeps the expansion tied to scroll while avoiding a mechanical,
      // linear start/stop. Reduced-motion users see the final state immediately.
      const easedProgress = clampedProgress * clampedProgress * (3 - 2 * clampedProgress);
      const effectiveProgress = shouldReduceMotion ? 1 : easedProgress;

      // Initial closed shape: exact 300px x 400px (or 280px x 360px on mobile)
      const startW = isMobile ? 280 : 300;
      const startH = isMobile ? 360 : 400;

      // Fully expanded size matching widescreen theater
      const maxWByViewport = window.innerWidth * 0.94;
      const maxWByHeight = window.innerHeight * 0.86 * ASPECT_RATIO;
      const endW = Math.min(maxWByViewport, maxWByHeight);
      const endH = endW / ASPECT_RATIO;

      const currentW = startW + effectiveProgress * (endW - startW);
      const currentH = startH + effectiveProgress * (endH - startH);
      const textTranslateX = (effectiveProgress * (isMobile ? 180 : 150)).toFixed(1);

      // 1. Hardware accelerated unblur: smoothly fades out pre-blurred layer
      if (mediaBlurRef.current) {
        if (effectiveProgress < 0.45 && !shouldReduceMotion) {
          mediaBlurRef.current.style.visibility = "visible";
          mediaBlurRef.current.style.opacity = Math.max(0, 1 - effectiveProgress * 2.3).toFixed(3);
        } else {
          mediaBlurRef.current.style.opacity = "0";
          mediaBlurRef.current.style.visibility = "hidden";
        }
      }

      // 2. Media container sizing: direct 1:1 hardware composited size update
      if (mediaContainerRef.current) {
        mediaContainerRef.current.style.width = `${currentW.toFixed(1)}px`;
        mediaContainerRef.current.style.height = `${currentH.toFixed(1)}px`;
        const borderOpacity = (0.1 + (1 - effectiveProgress) * 0.25).toFixed(2);
        mediaContainerRef.current.style.borderColor = `rgba(255, 255, 255, ${borderOpacity})`;
      }

      // 3. Background ambient image fade
      if (bgImgRef.current) {
        bgImgRef.current.style.opacity = Math.max(0, 1 - effectiveProgress * 1.3).toFixed(3);
      }

      // 4. Media overlay contrast
      if (mediaOverlayRef.current) {
        mediaOverlayRef.current.style.opacity = Math.max(0.3, 0.8 - effectiveProgress * 0.4).toFixed(3);
      }

      // 5. Title words translate outward and fade
      const titleOpacity = Math.max(0, 1 - effectiveProgress * 1.6).toFixed(3);
      if (titleFirstRef.current) {
        titleFirstRef.current.style.transform = `translateX(-${textTranslateX}vw) translateZ(0)`;
        titleFirstRef.current.style.opacity = titleOpacity;
      }
      if (titleRestRef.current) {
        titleRestRef.current.style.transform = `translateX(${textTranslateX}vw) translateZ(0)`;
        titleRestRef.current.style.opacity = titleOpacity;
      }

      // 6. Subtitles translate outward and fade quickly
      const subOpacity = Math.max(0, 1 - effectiveProgress * 2.8).toFixed(3);
      if (dateTagRef.current) {
        dateTagRef.current.style.transform = `translateX(-${textTranslateX}vw)`;
        dateTagRef.current.style.opacity = subOpacity;
      }
      if (scrollPromptRef.current) {
        scrollPromptRef.current.style.transform = `translateX(${textTranslateX}vw)`;
        scrollPromptRef.current.style.opacity = subOpacity;
      }

      // 7. Reveal the content during the final part of the expansion.
      // Starting slightly before the card reaches full size avoids a sudden late reveal.
      if (mediaContentRef.current) {
        if (effectiveProgress >= 0.78 || shouldReduceMotion) {
          const contentFade = shouldReduceMotion ? 1 : Math.min(1, (effectiveProgress - 0.78) / 0.22);
          mediaContentRef.current.style.opacity = contentFade.toFixed(3);
          mediaContentRef.current.style.pointerEvents = contentFade > 0.5 ? "auto" : "none";
          mediaContentRef.current.style.transform = `translateY(${((1 - contentFade) * 12).toFixed(1)}px)`;
        } else {
          mediaContentRef.current.style.opacity = "0";
          mediaContentRef.current.style.pointerEvents = "none";
          mediaContentRef.current.style.transform = "translateY(15px)";
        }
      }
    },
    [shouldReduceMotion, ASPECT_RATIO]
  );

  useEffect(() => {
    const track = pinnedTrackRef.current;
    if (!track) return;

    let rafScheduled = false;

    const renderFrame = () => {
      rafScheduled = false;
      const isMobile = window.innerWidth < 768;
      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = track.offsetHeight - windowHeight;

      if (totalDist <= 0) {
        applyFrame(1, isMobile);
        return;
      }

      const scrolled = -rect.top;
      let target = 0;
      if (scrolled > 0) {
        const rawRatio = scrolled / totalDist;
        // Complete expansion smoothly near 88% of the 200vh track so section unpins naturally
        target = Math.min(Math.max(rawRatio / 0.88, 0), 1);
      }

      applyFrame(target, isMobile);
    };

    const onScroll = () => {
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(renderFrame);
      }
    };

    const onResize = () => {
      renderFrame();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Initial evaluation immediately on mount
    renderFrame();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [applyFrame]);

  return (
    <section
      id="about"
      data-purpose="about-section"
      className="relative w-full bg-[#0D0D0D] text-white scroll-mt-20"
    >
      {/* =========================================================
          STAGE 1: SCROLL-EXPAND MEDIA THEATER STAGE (200vh)
      ========================================================= */}
      <div
        ref={pinnedTrackRef}
        className="relative w-full"
        style={{ minHeight: "200vh" }}
      >
        {/* Sticky 100vh Theater Window */}
        <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start z-10">
          {/* Layer 0: Background Ambient (Starry Night Castle) with dynamic opacity */}
          <div
            ref={bgImgRef}
            id="sem-bg-img"
            className="absolute inset-0 z-0 h-full w-full pointer-events-none"
            style={{ willChange: "opacity", transform: "translateZ(0)" }}
          >
            <picture>
              <source srcSet="/assets/echo/about_starry_castle_hq.webp" type="image/webp" />
              <img
                src="/assets/echo/about_starry_castle_hq.jpg"
                alt="Monochrome Starry Night Castle Background"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Centered Interactive Stage Container */}
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding Media Card (Closed state: 300px x 400px, expands on scroll) */}
              <div
                ref={mediaContainerRef}
                id="sem-media-container"
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl transition-none bg-[#07090E]"
                style={{
                  width: "300px",
                  height: "400px",
                  maxWidth: "95vw",
                  maxHeight: "88vh",
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  willChange: "width, height",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Media Image Container: fits 100% of the box without letterboxing */}
                <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center bg-[#07090E]">
                  {/* Crisp Base Image: Spotlight Human Silhouette Artwork */}
                  <picture className="w-full h-full">
                    <source srcSet="/assets/echo/about_floating_light_hq.webp" type="image/webp" />
                    <img
                      id="sem-media-img"
                      src="/assets/echo/about_floating_light_hq.png"
                      alt="Rahul Mahanta — Digital Craft & Security"
                      className="w-full h-full object-cover rounded-xl transition-none"
                      style={{
                        transform: "scale(1.02) translateZ(0)",
                        transformOrigin: "center",
                        backfaceVisibility: "hidden",
                      }}
                      loading="lazy"
                    />
                  </picture>

                  {/* Pre-blurred Layer for GPU-accelerated Unblur */}
                  <picture className="absolute inset-0 w-full h-full pointer-events-none">
                    <source srcSet="/assets/echo/about_floating_light_hq.webp" type="image/webp" />
                    <img
                      ref={mediaBlurRef}
                      id="sem-media-blur"
                      src="/assets/echo/about_floating_light_hq.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl transition-none pointer-events-none"
                      style={{
                        filter: "blur(18px)",
                        transform: "scale(1.08) translateZ(0)",
                        transformOrigin: "center",
                        opacity: 1,
                        willChange: "opacity",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </picture>

                  {/* Subtle Gradient Overlay: protects legibility while preserving center transparency */}
                  <div
                    ref={mediaOverlayRef}
                    id="sem-media-overlay"
                    className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90 rounded-xl pointer-events-none"
                  />

                  {/* Revealed About Content (Appears at progress >= 0.85) */}
                  <div
                    ref={mediaContentRef}
                    id="sem-media-content"
                    className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 md:p-9 pointer-events-none opacity-0 select-none overflow-hidden"
                    style={{ transform: "translateY(15px)" }}
                  >
                    {/* Top Perimeter: Small Portrait + Headline + Identity Tag */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 bg-neutral-900 shrink-0 shadow-md">
                          <img
                            src="/assets/echo/hero_portrait.png"
                            alt="Rahul Mahanta"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight text-white leading-snug">
                            CURIOUS BY NATURE. DRIVEN BY TECHNOLOGY.
                          </h3>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                            RAHUL MAHANTA &bull; COMPUTER SCIENCE STUDENT
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 shrink-0 hidden md:block">
                        GALGOTIAS UNIVERSITY
                      </span>
                    </div>

                    {/* Center Zone: COMPLETELY OPEN & EMPTY — 100% Unobscured View of Spotlight Silhouette Artwork */}
                    <div className="flex-1 pointer-events-none min-h-[120px] md:min-h-[180px]" />

                    {/* Bottom Perimeter: Disciplines, About Summary & Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
                      {/* Summary & Disciplines */}
                      <div className="max-w-xl space-y-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">
                            DISCIPLINE &amp; CRAFT
                          </span>
                          <div className="h-px bg-white/15 w-6" />
                          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                            FULL-STACK WEB &bull; CYBERSECURITY &bull; ML
                          </span>
                        </div>
                        <p className="text-xs sm:text-[12px] font-medium leading-relaxed tracking-wider uppercase text-neutral-300">
                          EXPLORING SOFTWARE DEVELOPMENT, CYBERSECURITY AND EMERGING TECHNOLOGIES. DEVELOPING PRACTICAL APPLICATIONS AND CONTINUOUSLY EXPANDING MY TECHNICAL CAPABILITIES.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 shrink-0 pt-1 md:pt-0">
                        <Link
                          to="/about"
                          className="pointer-events-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <span>DISCOVER MORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                        </Link>

                        {onOpenContact && (
                          <button
                            type="button"
                            onClick={onOpenContact}
                            className="pointer-events-auto px-5 py-2.5 rounded-full border border-neutral-400 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>GET IN TOUCH</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            const el = document.getElementById("experience");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className="pointer-events-auto px-5 py-2.5 rounded-full border border-neutral-600 hover:border-white text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <span>TIMELINE</span>
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Subtitles (Translate Outward and fade, positioned directly below card) */}
              <div className="absolute top-[calc(50%+215px)] sm:top-[calc(50%+225px)] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center text-center w-full">
                <p
                  ref={dateTagRef}
                  id="sem-date"
                  className="text-xl md:text-2xl text-neutral-300 font-semibold tracking-wider uppercase transition-none drop-shadow"
                >
                  BACKGROUND &amp; VISION
                </p>
                <p
                  ref={scrollPromptRef}
                  id="sem-scroll-prompt"
                  className="text-neutral-400 font-medium text-xs tracking-widest uppercase transition-none mt-1 drop-shadow"
                >
                  SCROLL TO EXPAND
                </p>
              </div>

              {/* Splitting Title Header (ABOUT translates left, ME translates right - Centered in front of card) */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full flex items-center justify-center text-center gap-2 sm:gap-4 flex-col"
                style={{ willChange: "transform", backfaceVisibility: "hidden" }}
              >
                <h2
                  ref={titleFirstRef}
                  id="sem-title-first"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                  style={{ willChange: "transform, opacity" }}
                >
                  ABOUT
                </h2>
                <h2
                  ref={titleRestRef}
                  id="sem-title-rest"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                  style={{ willChange: "transform, opacity" }}
                >
                  ME
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          STAGE 2: COMPLETE PROFESSIONAL PERSONAL PROFILE (Optional)
      ========================================================= */}
      {showDetailedProfile && (
        <div id="about-profile">
          <AboutEditorialProfile onOpenContact={onOpenContact} />
        </div>
      )}
    </section>
  );
}