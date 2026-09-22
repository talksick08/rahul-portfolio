import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPython,
  SiLinux,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: Tech[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

const HELIX_HEIGHT = 900;
const ORBIT_X = 150;
const ORBIT_Z = 100;

function getHelixPoint(index: number, progress: number) {
  const phase = (index / (technologies.length - 1)) * Math.PI * 5.5;
  const angle = phase + progress * Math.PI * 2;

  return {
    x: Math.cos(angle) * ORBIT_X,
    y: -410 + (index / (technologies.length - 1)) * HELIX_HEIGHT,
    z: Math.sin(angle) * ORBIT_Z,
  };
}

function TechnologyOrb({
  technology,
  index,
}: {
  technology: Tech;
  index: number;
}) {
  const Icon = technology.icon;

  const points = Array.from({ length: 9 }, (_, step) =>
    getHelixPoint(index, step / 8),
  );

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        -ml-[29px]
        -mt-[29px]
        sm:-ml-[35px]
        sm:-mt-[35px]
        md:-ml-[42px]
        md:-mt-[42px]
      "
      initial={{
        x: points[0].x,
        y: points[0].y,
        z: points[0].z,
      }}
      animate={{
        x: points.map((point) => point.x),
        y: points.map((point) => point.y),
        z: points.map((point) => point.z),
        rotateX: [3, 0, -3, 0, 3, 0, -3, 0, 3],
        rotateY: [-4, -2, 0, 2, 4, 2, 0, -2, -4],
      }}
      transition={{
        duration: 18 + index * 0.2,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.28,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.2 }}
        className="
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.18]
          bg-[#090b0f]
          shadow-[0_18px_45px_rgba(0,0,0,0.65)]
          sm:h-[70px]
          sm:w-[70px]
          md:h-[84px]
          md:w-[84px]
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            backgroundColor: technology.color,
            opacity: 0.025,
          }}
        />

        <div className="pointer-events-none absolute inset-[3px] rounded-full border border-white/[0.10]" />

        <div className="pointer-events-none absolute inset-[8px] rounded-full border border-white/[0.035]" />

        <div
          className="relative z-10 flex flex-col items-center justify-center"
          style={{
            transform: "translateZ(18px)",
          }}
        >
          <Icon
            className="
              h-[29px]
              w-[29px]
              sm:h-[35px]
              sm:w-[35px]
              md:h-[42px]
              md:w-[42px]
            "
            style={{
              color: technology.color,
              filter: `drop-shadow(0 0 2px ${technology.color})`,
            }}
          />

          <span
            className="
              mt-1
              max-w-[62px]
              truncate
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white/90
              sm:max-w-[68px]
              sm:text-[7px]
              sm:tracking-[0.10em]
            "
          >
            {technology.name}
          </span>
        </div>

        <div className="pointer-events-none absolute left-[13px] top-[8px] h-[6px] w-[18px] rounded-full bg-white/[0.07] sm:left-[18px] sm:top-[11px] sm:h-[8px] sm:w-[24px]" />
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="
        relative
        overflow-hidden
        bg-black
        px-4
        py-20
        text-white
        sm:px-6
        sm:py-24
        md:px-10
        md:py-32
        lg:px-20
      "
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[700px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.018] blur-[120px] sm:h-[800px] sm:w-[480px] md:h-[850px] md:w-[550px] md:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-10"
        >
          <div>
            <div className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="h-px w-8 bg-white/50 sm:w-12" />

              <span className="text-[7px] uppercase tracking-[0.32em] text-white/40 sm:text-[8px] sm:tracking-[0.45em]">
                04 / Skills
              </span>
            </div>

            <h2 className="text-[clamp(58px,18vw,92px)] font-medium leading-[0.78] tracking-[-0.07em] sm:text-8xl md:text-9xl">
              Tech
            </h2>

            <h2 className="text-[clamp(58px,18vw,92px)] font-medium leading-[0.78] tracking-[-0.07em] text-white/15 sm:text-8xl md:text-9xl">
              Stack
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[13px] leading-6 text-white/40 sm:text-sm sm:leading-7 md:text-base">
              A growing toolkit of technologies I use to build, experiment,
              learn, and explore modern digital experiences.
            </p>

            <div className="mt-5 border-t border-white/10 pt-4 sm:mt-6">
              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25 sm:text-[7px] sm:tracking-[0.35em]">
                14 Technologies · 3D Vertical Spiral
              </span>
            </div>
          </div>
        </motion.div>

        <div
          className="
            relative
            mx-auto
            mt-16
            h-[800px]
            w-full
            max-w-[560px]
            sm:mt-20
            sm:h-[940px]
            sm:max-w-[680px]
            md:mt-24
            md:h-[1120px]
            md:max-w-[760px]
          "
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.045] to-transparent" />

          <div className="pointer-events-none absolute left-1/2 top-[5%] h-[116px] w-[306px] -translate-x-1/2 rounded-[50%] border border-white/[0.025] sm:h-[143px] sm:w-[378px] md:h-[170px] md:w-[450px]" />

          <div className="pointer-events-none absolute left-1/2 top-[42%] h-[116px] w-[306px] -translate-x-1/2 rounded-[50%] border border-white/[0.018] sm:h-[143px] sm:w-[378px] md:h-[170px] md:w-[450px]" />

          <div className="pointer-events-none absolute left-1/2 top-[79%] h-[116px] w-[306px] -translate-x-1/2 rounded-[50%] border border-white/[0.018] sm:h-[143px] sm:w-[378px] md:h-[170px] md:w-[450px]" />

          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {technologies.map((technology, index) => (
              <TechnologyOrb
                key={technology.name}
                technology={technology}
                index={index}
              />
            ))}
          </div>

          <motion.div
            animate={{
              opacity: [0.2, 0.42, 0.2],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[500] -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="text-[7px] tracking-[0.35em] text-white/35 sm:text-[8px] sm:tracking-[0.45em]">
              RAHUL
            </span>

            <span className="mt-2 block text-[10px] font-semibold tracking-[0.16em] text-white/65 sm:text-[12px] sm:tracking-[0.2em]">
              HIGHNHOES
            </span>

            <div className="mx-auto mt-3 h-px w-7 bg-white/15 sm:mt-4 sm:w-8" />

            <span className="mt-3 block text-[5px] uppercase tracking-[0.35em] text-white/20">
              Technology
            </span>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-5 sm:pt-6">
          <div className="flex flex-col gap-3 text-[7px] uppercase tracking-[0.3em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <span>Learning · Building · Securing</span>
            <span>RAHUL · HIGHNHOES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
