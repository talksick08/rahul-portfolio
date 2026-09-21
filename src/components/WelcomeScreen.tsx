import { motion } from "framer-motion";

export default function WelcomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.015,
        filter: "blur(6px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-[#050608]
        text-white
      "
    >

      {/* ================================================
          BACKGROUND GRID
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "75px 75px",
        }}
      />

      {/* ================================================
          AMBIENT LIGHT
      ================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[130px]
        "
      />

      {/* ================================================
          CINEMATIC SCAN LINE
      ================================================= */}

      <motion.div
        initial={{
          top: "-5%",
          opacity: 0,
        }}
        animate={{
          top: "105%",
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 3.6,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          h-px
          w-full
          bg-white/30
          shadow-[0_0_25px_rgba(255,255,255,0.25)]
        "
      />

      {/* ================================================
          OUTER FRAME
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          border-white/[0.08]
          md:inset-8
        "
      />

      {/* Corners */}

      <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-white/30 md:left-8 md:top-8" />

      <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-white/30 md:right-8 md:top-8" />

      <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-white/30 md:bottom-8 md:left-8" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-white/30 md:right-8 md:bottom-8" />

      {/* ================================================
          BRAND
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.05,
        }}
        className="
          absolute
          left-10
          top-10
          md:left-16
          md:top-14
        "
      >
        <p
          className="
            text-[10px]
            font-medium
            tracking-[0.35em]
            text-white/75
            md:text-xs
          "
        >
          RAHUL · HIGHNHOES
        </p>

        <p
          className="
            mt-2
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          Personal Portfolio
        </p>
      </motion.div>

      {/* ================================================
          TOP RIGHT
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
          delay: 0.15,
        }}
        className="
          absolute
          right-10
          top-10
          text-right
          md:right-16
          md:top-14
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/30
          "
        >
          2026
        </p>

        <p
          className="
            mt-2
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/20
          "
        >
          Portfolio
        </p>
      </motion.div>

      {/* ================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          w-full
          max-w-[1200px]
          -translate-x-1/2
          -translate-y-1/2
          px-8
          md:px-14
        "
      >

        {/* Portfolio label */}

        <motion.div
          initial={{
            opacity: 0,
            x: -18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.15,
          }}
          className="
            mb-5
            flex
            items-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-white/50" />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-white/45
            "
          >
            Portfolio
          </span>

          <span className="text-[9px] text-white/20">
            /
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            001
          </span>
        </motion.div>

        {/* ==============================================
            NAME
        ============================================== */}

        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "105%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              text-[17vw]
              font-medium
              leading-[0.72]
              tracking-[-0.085em]
              sm:text-[14vw]
              md:text-[11vw]
              lg:text-[9.5rem]
            "
          >
            Rahul
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{
              y: "105%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.38,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              text-[17vw]
              font-medium
              leading-[0.78]
              tracking-[-0.085em]
              text-white/20
              sm:text-[14vw]
              md:text-[11vw]
              lg:text-[9.5rem]
            "
          >
            Mahanta
          </motion.h2>
        </div>

        {/* ==============================================
            TITLE
        ============================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.8,
          }}
          className="
            mt-6
            border-t
            border-white/15
            pt-5
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/70
              md:text-sm
            "
          >
            Cybersecurity · Web · Technology
          </p>
        </motion.div>

        {/* ==============================================
            INTRODUCTION
        ============================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.95,
          }}
          className="
            mt-4
            max-w-2xl
            text-[11px]
            leading-5
            text-white/40
            md:text-sm
            md:leading-6
          "
        >
          Exploring cybersecurity, building modern web experiences,
          and turning ideas into practical digital projects.
          Curious about technology beneath the surface and focused
          on creating secure, meaningful digital experiences.
        </motion.p>

        {/* ==============================================
            SPECIALTIES
        ============================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.15,
          }}
          className="
            mt-6
            flex
            flex-wrap
            gap-x-6
            gap-y-3
            border-t
            border-white/10
            pt-5
          "
        >
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            ✦ Cybersecurity
          </span>

          <span className="text-white/10">
            •
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            &lt;/&gt; Web Development
          </span>

          <span className="text-white/10">
            •
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            ◈ Secure Applications
          </span>
        </motion.div>

        {/* ==============================================
            WHITE FINISH LINE
        ============================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="mt-6"
        >
          <div className="flex items-center justify-between">

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Exploring · Building · Learning
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-white/20
              "
            >
              HIGHNHOES
            </span>

          </div>

          {/* THIS LINE CONTROLS THE INTRO */}

          <div
            className="
              relative
              mt-3
              h-px
              w-full
              overflow-hidden
              bg-white/10
            "
          >
            <motion.div
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 3.75,
                delay: 0.1,
                ease: "linear",
              }}
              className="
                absolute
                inset-y-0
                left-0
                bg-white/70
                shadow-[0_0_10px_rgba(255,255,255,0.35)]
              "
            />
          </div>
        </motion.div>
      </div>

      {/* ================================================
          BOTTOM INFORMATION
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 1.25,
        }}
        className="
          absolute
          bottom-10
          left-10
          right-10
          flex
          items-end
          justify-between
          md:bottom-14
          md:left-16
          md:right-16
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          Noida · India
        </p>

        <div className="flex items-center gap-2">

          <motion.span
            animate={{
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white/70
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            Welcome
          </span>

        </div>
      </motion.div>

      {/* ================================================
          DECORATIVE SYMBOLS
      ================================================= */}

      <motion.span
        animate={{
          y: [-7, 7, -7],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[30%]
          text-lg
          text-white/20
        "
      >
        +
      </motion.span>

      <motion.span
        animate={{
          rotate: [0, 90, 180],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[32%]
          text-lg
          text-white/20
        "
      >
        ✦
      </motion.span>

    </motion.div>
  );
}