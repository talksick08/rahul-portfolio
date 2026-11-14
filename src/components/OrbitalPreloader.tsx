import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface OrbitalPreloaderProps {
  onComplete?: () => void;
}

export default function OrbitalPreloader({ onComplete }: OrbitalPreloaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let start = 0;
    let completed = false;
    let exitTimer: number | undefined;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cx = width / 2;
      const cy = height / 2;
      const progress = Math.min(elapsed / 2450, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      context.clearRect(0, 0, width, height);

      // A fine elliptical orbit, drawn as a warm, restrained light trail.
      context.save();
      context.translate(cx, cy);
      context.rotate(-0.22);
      context.beginPath();
      context.ellipse(0, 0, 150 + ease * 26, 43 + ease * 10, 0, Math.PI * 1.08, Math.PI * 2.08);
      context.strokeStyle = `rgba(255, 226, 171, ${0.22 + 0.5 * Math.sin(progress * Math.PI)})`;
      context.lineWidth = 1.4;
      context.shadowColor = "rgba(255, 207, 132, 0.9)";
      context.shadowBlur = 16;
      context.stroke();

      const angle = -1.1 + elapsed * 0.00125;
      const orbitX = Math.cos(angle) * (150 + ease * 26);
      const orbitY = Math.sin(angle) * (43 + ease * 10);
      const glow = context.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 15);
      glow.addColorStop(0, "rgba(255,255,238,1)");
      glow.addColorStop(0.22, "rgba(255,220,164,.85)");
      glow.addColorStop(1, "rgba(255,190,110,0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(orbitX, orbitY, 15, 0, Math.PI * 2);
      context.fill();
      context.restore();

      if (progress < 1 && !completed) {
        frame = requestAnimationFrame(render);
      } else if (!completed) {
        completed = true;
        exitTimer = window.setTimeout(() => setIsExiting(true), 180);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!isExiting) return;
    const timer = window.setTimeout(() => onComplete?.(), 650);
    return () => window.clearTimeout(timer);
  }, [isExiting, onComplete]);

  const skip = () => setIsExiting(true);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, scale: 1.025, filter: "blur(10px)" } : { opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808] text-white"
      aria-label="RAHUL portfolio introduction"
      role="status"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      <button
        type="button"
        onClick={skip}
        className="absolute right-6 top-6 z-10 rounded-full border border-white/20 px-4 py-2 text-[10px] tracking-[0.2em] text-white/55 transition hover:border-white/60 hover:text-white"
        aria-label="Skip introduction"
      >
        SKIP INTRO ↗
      </button>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12, letterSpacing: "0.35em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="select-none text-5xl font-semibold uppercase text-[#fff8e9] sm:text-6xl md:text-7xl"
          style={{ textShadow: "0 0 12px rgba(255,220,164,.85), 0 0 38px rgba(255,190,110,.38)" }}
        >
          RAHUL
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.62 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-4 text-[9px] uppercase tracking-[0.42em] text-white/70"
        >
          RAHUL MAHANTA
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] text-white/30">
        AN INTERACTIVE PORTFOLIO
      </div>
    </motion.div>
  );
}