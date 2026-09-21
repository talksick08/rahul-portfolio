import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import {
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
  },
  {
    name: "Terminal",
    icon: FaTerminal,
    color: "#4ADE80",
  },
  {
    name: "Cybersecurity",
    icon: FaShieldAlt,
    color: "#A855F7",
  },
];

/* =========================================================
   HELIX SETTINGS
========================================================= */

const HELIX_RADIUS = 175;
const HELIX_HEIGHT = 1120;
const TOP = -510;

/*
  How far each icon travels around the invisible
  vertical axis.
*/
const ORBIT_RADIUS_X = 175;
const ORBIT_RADIUS_Z = 120;

/*
  Creates the vertical helix positions.
*/
const helixPositions = technologies.map((_, index) => {
  const progress =
    index / (technologies.length - 1);

  /*
    Different phase for every icon.

    This creates the continuous spiral.
  */
  const phase =
    progress * Math.PI * 5.5;

  return {
    y:
      TOP +
      progress * HELIX_HEIGHT,

    phase,
  };
});

/* =========================================================
   CREATE ORBIT POINTS
========================================================= */

function getOrbitPoints(
  phase: number,
  y: number,
) {
  const steps = 8;

  return Array.from(
    { length: steps + 1 },
    (_, index) => {
      const angle =
        phase +
        (index / steps) *
        Math.PI *
        2;

      return {
        x:
          Math.cos(angle) *
          ORBIT_RADIUS_X,

        y:
          y +
          Math.sin(angle * 2) *
          8,

        z:
          Math.sin(angle) *
          ORBIT_RADIUS_Z,
      };
    },
  );
}

/* =========================================================
   TECHNOLOGY ORB
========================================================= */

function TechnologyOrb({
  technology,
  index,
}: {
  technology: Technology;
  index: number;
}) {
  const Icon = technology.icon;

  const position =
    helixPositions[index];

  const orbitPoints =
    getOrbitPoints(
      position.phase,
      position.y,
    );

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        -ml-[42px]
        -mt-[42px]
      "
      initial={{
        x: orbitPoints[0].x,
        y: orbitPoints[0].y,
        z: orbitPoints[0].z,
      }}
      animate={{
        x: orbitPoints.map(
          (point) => point.x,
        ),

        y: orbitPoints.map(
          (point) => point.y,
        ),

        z: orbitPoints.map(
          (point) => point.z,
        ),

        /*
          Very small tilt only.

          The card NEVER rotates 90/180 degrees,
          so the words can never become mirrored.
        */
        rotateX: [
          3,
          0,
          -3,
          0,
          3,
          0,
          -3,
          0,
          3,
        ],

        rotateY: [
          -5,
          -2,
          0,
          2,
          5,
          2,
          0,
          -2,
          -5,
        ],
      }}
      transition={{
        duration:
          16 + index * 0.18,

        repeat: Infinity,

        ease: "linear",

        delay:
          index * 0.35,
      }}
      style={{
        transformStyle:
          "preserve-3d",
      }}
    >
      {/* =================================================
          CARD
      ================================================= */}

      <motion.div
        whileHover={{
          scale: 1.12,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          flex
          h-[84px]
          w-[84px]
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.18]
          bg-[#090b0f]
          shadow-[0_18px_45px_rgba(0,0,0,0.65)]
        "
        style={{
          transformStyle:
            "preserve-3d",
        }}
      >
        {/* =================================================
            VERY SUBTLE COLOR
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
          "
          style={{
            backgroundColor:
              technology.color,
            opacity: 0.025,
          }}
        />

        {/* =================================================
            OUTER RING
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[3px]
            rounded-full
            border
            border-white/[0.10]
          "
        />

        {/* =================================================
            INNER RING
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[8px]
            rounded-full
            border
            border-white/[0.035]
          "
        />

        {/* =================================================
            LOGO
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
          "
          style={{
            transform:
              "translateZ(18px)",
          }}
        >
          <Icon
            className="
              h-[42px]
              w-[42px]
            "
            style={{
              color:
                technology.color,

              filter:
                `drop-shadow(
                  0 0 2px
                  ${technology.color}
                )`,
            }}
          />

          <span
            className="
              mt-1.5
              max-w-[68px]
              truncate
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.10em]
              text-white/90
            "
          >
            {technology.name}
          </span>
        </div>

        {/* =================================================
            SMALL GLASS HIGHLIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-[18px]
            top-[11px]
            h-[8px]
            w-[24px]
            rounded-full
            bg-white/[0.07]
          "
        />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechStack() {
  return (
    <section
      id="Skills"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-32
        text-white
        md:px-10
        lg:px-20
      "
    >
      {/* =================================================
          BACKGROUND GRID
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "80px 80px",
        }}
      />

      {/* =================================================
          BACKGROUND ATMOSPHERE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[55%]
          h-[850px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.018]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            grid
            gap-10
            lg:grid-cols-[1fr_0.55fr]
            lg:items-end
          "
        >
          <div>
            <div
              className="
                mb-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-white/50
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white/40
                "
              >
                04 / Skills
              </span>
            </div>

            <h2
              className="
                text-7xl
                font-medium
                leading-[0.78]
                tracking-[-0.07em]
                sm:text-8xl
                md:text-9xl
              "
            >
              Tech
            </h2>

            <h2
              className="
                text-7xl
                font-medium
                leading-[0.78]
                tracking-[-0.07em]
                text-white/15
                sm:text-8xl
                md:text-9xl
              "
            >
              Stack
            </h2>
          </div>

          <div
            className="
              max-w-md
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-white/40
                md:text-base
              "
            >
              A growing toolkit of technologies
              I use to build, experiment, learn,
              and explore modern digital
              experiences.
            </p>

            <div
              className="
                mt-6
                border-t
                border-white/10
                pt-4
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-white/25
                "
              >
                16 Technologies · 3D Vertical Spiral
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SPIRAL STAGE
        ================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-24
            h-[1120px]
            w-full
            max-w-[760px]
          "
          style={{
            perspective:
              "1600px",
            perspectiveOrigin:
              "50% 50%",
          }}
        >
          {/* =================================================
              INVISIBLE CENTRAL AXIS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-white/[0.045]
              to-transparent
            "
          />

          {/* =================================================
              TOP ORBIT GUIDE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[5%]
              h-[170px]
              w-[450px]
              -translate-x-1/2
              rounded-[50%]
              border
              border-white/[0.025]
            "
          />

          {/* =================================================
              MIDDLE ORBIT GUIDE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[42%]
              h-[170px]
              w-[450px]
              -translate-x-1/2
              rounded-[50%]
              border
              border-white/[0.018]
            "
          />

          {/* =================================================
              BOTTOM ORBIT GUIDE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[79%]
              h-[170px]
              w-[450px]
              -translate-x-1/2
              rounded-[50%]
              border
              border-white/[0.018]
            "
          />

          {/* =================================================
              TECHNOLOGY SPIRAL
          ================================================= */}

          <div
            className="
              absolute
              inset-0
            "
            style={{
              transformStyle:
                "preserve-3d",
            }}
          >
            {technologies.map(
              (
                technology,
                index,
              ) => (
                <TechnologyOrb
                  key={
                    technology.name
                  }
                  technology={
                    technology
                  }
                  index={index}
                />
              ),
            )}
          </div>

          {/* =================================================
              CENTER BRAND
          ================================================= */}

          <motion.div
            animate={{
              opacity: [
                0.20,
                0.42,
                0.20,
              ],
              scale: [
                0.98,
                1,
                0.98,
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-[500]
              -translate-x-1/2
              -translate-y-1/2
              text-center
            "
          >
            <span
              className="
                text-[8px]
                tracking-[0.45em]
                text-white/35
              "
            >
              RAHUL
            </span>

            <span
              className="
                mt-2
                block
                text-[12px]
                font-semibold
                tracking-[0.2em]
                text-white/65
              "
            >
              HIGHNHOES
            </span>

            <div
              className="
                mx-auto
                mt-4
                h-px
                w-8
                bg-white/15
              "
            />

            <span
              className="
                mt-3
                block
                text-[5px]
                uppercase
                tracking-[0.35em]
                text-white/20
              "
            >
              Technology
            </span>
          </motion.div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            border-t
            border-white/10
            pt-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-white/20
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>
              Learning · Building · Securing
            </span>

            <span>
              RAHUL · HIGHNHOES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}