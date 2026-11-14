import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
import { REAL_PROJECTS, type ProjectItem } from "@/data/portfolioData";

const CARD_H = 0.40;
const CARD_MAX_W = 0.36;
const CARD_RATIO = 1.55;
const STEP = 40;
const DRUM = 2.22;
const LENS = 2.7;
const RING_R = 1.14;
const BOW = 1.82;
const TITLE = 0.115;
const INDEX = 0.038;
const CULL = 1.6;

const WHEEL_UNITS = 900;
const DRAG_UNITS = 420;
const SETTLE = 140;
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const rad = (deg: number) => (deg * Math.PI) / 180;
const bowAt = (drumDeg: number, bow: number) => -bow * (1 - Math.cos(rad(drumDeg)));

function place(ringDeg: number, drumDeg: number, ringR: number, drumR: number, bow: number, m: number) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export default function WorksWheel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Map the 2 authentic projects into a 4-card drum reel
  const items = [
    {
      project: REAL_PROJECTS[0],
      title: REAL_PROJECTS[0].title,
      image: REAL_PROJECTS[0].src,
      subtitle: REAL_PROJECTS[0].subtitle,
    },
    {
      project: REAL_PROJECTS[1],
      title: REAL_PROJECTS[1].title,
      image: REAL_PROJECTS[1].src,
      subtitle: REAL_PROJECTS[1].subtitle,
    },
    {
      project: REAL_PROJECTS[0],
      title: REAL_PROJECTS[0].title,
      image: REAL_PROJECTS[0].src,
      subtitle: REAL_PROJECTS[0].subtitle,
    },
    {
      project: REAL_PROJECTS[1],
      title: REAL_PROJECTS[1].title,
      image: REAL_PROJECTS[1].src,
      subtitle: REAL_PROJECTS[1].subtitle,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = items.length;
    const last = Math.max(count - 1, 0);

    let turn = 0;
    let target = 0;
    let active = 0;
    let stage = { w: container.clientWidth || 800, h: container.clientHeight || 600 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    container.innerHTML = "";
    container.classList.add("relative", "w-full", "h-full", "overflow-hidden", "select-none");

    const section = document.createElement("section");
    section.setAttribute("aria-label", "Works '26");
    section.className = "relative w-full h-full min-h-[24rem] overflow-hidden select-none bg-transparent text-neutral-900";

    const stageEl = document.createElement("div");
    stageEl.tabIndex = 0;
    stageEl.role = "listbox";
    stageEl.setAttribute("aria-label", "Works '26");
    stageEl.className = "absolute inset-0 cursor-grab touch-pan-x outline-none focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:-outline-offset-4 active:cursor-grabbing";

    const wheelEl = document.createElement("div");
    wheelEl.className = "absolute top-1/2 left-1/2 pointer-events-none";
    wheelEl.style.transformStyle = "preserve-3d";

    const cardRefs: HTMLDivElement[] = [];

    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.id = `works-wheel-${i}`;
      card.role = "option";
      card.setAttribute("aria-selected", i === 0 ? "true" : "false");
      card.className = "group absolute cursor-pointer pointer-events-auto [backface-visibility:hidden]";
      card.style.transformStyle = "preserve-3d";
      card.style.willChange = "transform, opacity";

      const face = document.createElement("div");
      face.className =
        "relative block w-full h-full overflow-hidden rounded-2xl bg-[#090B10] border border-neutral-700/60 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_28px_50px_-10px_rgba(0,0,0,0.45)] hover:border-white/80";
      face.style.willChange = "transform";
      face.style.transformOrigin = "center center";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.draggable = false;
      img.className = "w-full h-full object-cover select-none pointer-events-none";
      img.loading = "eager";

      face.appendChild(img);

      const gradientOverlay = document.createElement("div");
      gradientOverlay.className = "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent";
      face.appendChild(gradientOverlay);

      const cardInfo = document.createElement("div");
      cardInfo.className = "pointer-events-none absolute left-4 bottom-4 right-4 flex items-center justify-between";
      cardInfo.innerHTML = `
        <div class="flex flex-col truncate max-w-[75%]">
          <span class="text-[9px] font-mono tracking-widest text-neutral-300 uppercase font-bold">
            ${item.project.category}
          </span>
          <span class="text-[12px] font-bold tracking-tight text-white drop-shadow-sm truncate">
            ${item.title}
          </span>
        </div>
        <span class="bg-white text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 group-hover:scale-105 transition-transform">
          Inspect ↗
        </span>
      `;
      face.appendChild(cardInfo);

      card.appendChild(face);

      card.addEventListener("click", () => {
        if (dragDelta > 6) return;
        setSelectedProject(item.project);
      });

      wheelEl.appendChild(card);
      cardRefs.push(card);
    });

    stageEl.appendChild(wheelEl);
    section.appendChild(stageEl);

    // Center ring label
    const labelEl = document.createElement("div");
    labelEl.className = "pointer-events-none absolute inset-0 grid place-items-center tracking-tight font-black uppercase text-center text-neutral-900 select-none z-10 transition-opacity duration-300";
    labelEl.textContent = "WORKS '26";
    section.appendChild(labelEl);

    // Front-card title
    const titleEl = document.createElement("div");
    titleEl.className = "pointer-events-none absolute top-1/2 left-[5%] md:left-[7%] -translate-y-1/2 tracking-tight font-black uppercase text-neutral-900 opacity-0 select-none z-10 max-w-[42%] leading-[1.05]";
    titleEl.textContent = items[0]?.title || "";
    section.appendChild(titleEl);

    // Side Index List
    const indexList = document.createElement("ol");
    indexList.className = "text-neutral-500 absolute top-[7%] right-[3%] text-right leading-[1.75] z-20 space-y-0.5 select-none font-mono";
    const indexButtons: HTMLButtonElement[] = [];

    items.forEach((item, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = `${item.title} (${i % 2 === 0 ? "Web" : "AI"})`;
      btn.className = "cursor-pointer transition-all duration-200 text-[11px] md:text-xs tracking-wider outline-none text-neutral-400 hover:text-neutral-900 block ml-auto";
      if (i === 0) {
        btn.className = "cursor-pointer transition-all duration-200 text-[11px] md:text-xs tracking-wider outline-none text-neutral-900 font-bold block ml-auto underline decoration-2 underline-offset-4";
      }
      btn.addEventListener("click", () => {
        to(i + 1);
      });
      li.appendChild(btn);
      indexList.appendChild(li);
      indexButtons.push(btn);
    });
    section.appendChild(indexList);

    // Bottom hint pill
    const hintPill = document.createElement("div");
    hintPill.className = "pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-neutral-200 shadow-sm backdrop-blur-md text-[10px] md:text-[11px] font-mono text-neutral-600 uppercase tracking-wider";
    hintPill.innerHTML = `
      <svg class="w-3 h-3 text-neutral-500 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>SCROLL OR DRAG 3D DRUM TO CYCLE</span>
    `;
    section.appendChild(hintPill);

    container.appendChild(section);

    function calculateMetrics() {
      const w = stage.w || 800;
      const h = stage.h || 600;
      const cardW = Math.min(h * CARD_H * CARD_RATIO, w * CARD_MAX_W);
      const cardH = cardW / CARD_RATIO;
      const drumR = cardH * DRUM;
      const ringR = cardH * RING_R;
      const ringScale = count ? clamp((((2 * Math.PI * ringR) / count) * 0.82) / (cardW || 1), 0.16, 1) : 1;

      return {
        cardW,
        cardH,
        ringR,
        ringScale,
        drumR,
        bow: cardH * BOW,
        depth: cardH * LENS,
        title: Math.max(22, cardH * TITLE),
        index: Math.max(10, cardH * INDEX),
      };
    }

    let currentMetrics = calculateMetrics();

    function applyMetrics() {
      currentMetrics = calculateMetrics();
      stageEl.style.perspective = `${currentMetrics.depth}px`;

      cardRefs.forEach((card) => {
        card.style.width = `${currentMetrics.cardW}px`;
        card.style.height = `${currentMetrics.cardH}px`;
        card.style.marginLeft = `${-currentMetrics.cardW / 2}px`;
        card.style.marginTop = `${-currentMetrics.cardH / 2}px`;
      });

      labelEl.style.fontSize = `${currentMetrics.title}px`;
      titleEl.style.fontSize = `${currentMetrics.title * 0.9}px`;
    }

    applyMetrics();

    const ro = new ResizeObserver(() => {
      stage = { w: stageEl.clientWidth, h: stageEl.clientHeight };
      applyMetrics();
    });
    ro.observe(stageEl);

    function to(next: number) {
      target = clamp(next, 0, last + 1);
    }

    let settlingTimer: any = null;
    const onWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const next = target + delta / WHEEL_UNITS;
      if (next > 0 && next < last + 1) {
        event.preventDefault();
      }
      to(next);
      clearTimeout(settlingTimer);
      settlingTimer = setTimeout(() => {
        to(Math.round(target));
      }, SETTLE);
    };
    stageEl.addEventListener("wheel", onWheel, { passive: false });

    let isPointerDown = false;
    let dragStartY = 0;
    let dragDelta = 0;

    stageEl.addEventListener("pointerdown", (event) => {
      isPointerDown = true;
      dragStartY = event.clientY;
      dragDelta = 0;
      try {
        stageEl.setPointerCapture(event.pointerId);
      } catch (_) {}
    });

    stageEl.addEventListener("pointermove", (event) => {
      if (!isPointerDown) return;
      const diff = dragStartY - event.clientY;
      dragDelta += Math.abs(diff);
      to(target + diff / DRAG_UNITS);
      dragStartY = event.clientY;
    });

    const endDrag = (event: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      try {
        stageEl.releasePointerCapture(event.pointerId);
      } catch (_) {}
      if (target > 1) {
        to(Math.round(target));
      }
    };

    stageEl.addEventListener("pointerup", endDrag);
    stageEl.addEventListener("pointercancel", endDrag);

    function updateActiveUI(near: number) {
      stageEl.setAttribute("aria-activedescendant", `works-wheel-${near}`);
      cardRefs.forEach((card, idx) => {
        card.setAttribute("aria-selected", idx === near ? "true" : "false");
      });

      indexButtons.forEach((btn, idx) => {
        if (idx === near) {
          btn.className = "cursor-pointer transition-all duration-200 text-[11px] md:text-xs tracking-wider outline-none text-neutral-900 font-bold block ml-auto scale-105 underline decoration-2 underline-offset-4";
        } else {
          btn.className = "cursor-pointer transition-all duration-200 text-[11px] md:text-xs tracking-wider outline-none text-neutral-400 hover:text-neutral-900 block ml-auto";
        }
      });

      if (items[near]) {
        titleEl.textContent = items[near].title;
      }
    }

    let frameId = 0;
    let isRunning = true;

    const draw = () => {
      if (!isRunning) return;
      frameId = requestAnimationFrame(draw);

      const gap = target - turn;
      if (Math.abs(gap) < 0.0005) {
        turn = target;
      } else {
        turn += gap * (reduced ? 1 : EASE);
      }

      const t = turn;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      const { ringR, ringScale, drumR, bow } = currentMetrics;

      if (wheelEl) {
        wheelEl.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs[i];
        if (card) {
          card.style.transform = place(d * (360 / count), drumDeg, ringR, drumR, bow, m);
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card ? (card.firstElementChild as HTMLElement) : null;
        if (face) {
          face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
        }
      }

      if (labelEl) labelEl.style.opacity = String(1 - m);
      if (titleEl) titleEl.style.opacity = String(m);

      const near = clamp(Math.round(pos), 0, last);
      if (near !== active) {
        active = near;
        updateActiveUI(near);
      }
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      isRunning = false;
      cancelAnimationFrame(frameId);
      ro.disconnect();
      stageEl.removeEventListener("wheel", onWheel);
      clearTimeout(settlingTimer);
    };
  }, []);

  return (
    <>
      <section
        id="projects"
        data-purpose="featured-projects"
        className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 select-none scroll-mt-20"
      >
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-[10px] font-semibold tracking-widest uppercase text-neutral-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
              <span>03 &bull; FEATURED PROJECTS &bull; 3D INTERACTIVE REEL</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900">
              SELECTED WORKS<span className="text-neutral-400">.</span>
            </h2>
          </div>
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
            SPATIAL 3D REEL &bull; DRAG TO ROTATE &bull; CLICK CARD TO INSPECT
          </p>
        </div>

        {/* WorksWheel 3D Container */}
        <div className="w-full relative overflow-hidden" style={{ height: "640px", minHeight: "520px" }}>
          <div ref={containerRef} className="w-full h-full relative" />
        </div>

        {/* Link to Dedicated Projects Page */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest text-center sm:text-left">
            INTERACTIVE 3D CYLINDER &bull; TWO AUTHENTIC PROJECTS
          </p>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

