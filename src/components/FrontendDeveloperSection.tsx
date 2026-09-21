import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type PhysicsState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  angularY: number;
  angularZ: number;
};

type RibbonPoint = {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
};

type RibbonSegmentVisual = {
  x: number;
  y: number;
  length: number;
  angle: number;
};

const INITIAL_PHYSICS: PhysicsState = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  angularY: 0,
  angularZ: 0,
};

/* ============================================================
   CARD / RIBBON GEOMETRY
   ============================================================ */

const STAGE_WIDTH = 260;

const PIVOT_X = STAGE_WIDTH / 2;
const PIVOT_Y = 18;

const CARD_TOP = 315;

const CARD_RING_OFFSET = -11;

const CARD_ATTACH_X = PIVOT_X;

const CARD_ATTACH_Y = CARD_TOP + CARD_RING_OFFSET;

const RIBBON_SEGMENTS = 18;

const BASE_RIBBON_LENGTH = CARD_ATTACH_Y - PIVOT_Y;

const BASE_SEGMENT_LENGTH =
  BASE_RIBBON_LENGTH / RIBBON_SEGMENTS;

const MAX_X = 380;
const MAX_Y = 430;

const RIBBON_GRAVITY = 420;
const RIBBON_DAMPING = 0.985;
const RIBBON_CONSTRAINT_ITERATIONS = 7;
const RIBBON_STRETCH = 1.08;

const CARD_SPRING_X = 3.8;
const CARD_SPRING_Y = 4.5;
const CARD_DAMPING = 1.65;

const CARD_ROTATION_STIFFNESS = 5.5;
const CARD_ROTATION_DAMPING = 1.8;

/* ============================================================
   HELPER
   ============================================================ */

function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.max(
    min,
    Math.min(max, value)
  );
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function FrontendDeveloperSection() {
  const navigate = useNavigate();

  const [showCard, setShowCard] =
    useState(false);

  const [goAbout, setGoAbout] =
    useState(false);

  const [physics, setPhysics] =
    useState<PhysicsState>({
      ...INITIAL_PHYSICS,
    });

  const [ribbonVisuals, setRibbonVisuals] =
    useState<RibbonSegmentVisual[]>([]);

  const physicsRef =
    useRef<PhysicsState>({
      ...INITIAL_PHYSICS,
    });

  const ribbonPointsRef =
    useRef<RibbonPoint[]>([]);

  const animationFrameRef =
    useRef<number | null>(null);

  const lastFrameRef =
    useRef(0);

  const draggingRef =
    useRef(false);

  const pointerStartRef =
    useRef({
      x: 0,
      y: 0,
    });

  const cardStartRef =
    useRef({
      x: 0,
      y: 0,
    });

  const previousPointerRef =
    useRef({
      x: 0,
      y: 0,
      time: 0,
    });

  const pointerVelocityRef =
    useRef({
      x: 0,
      y: 0,
    });

  /* ==========================================================
     STOP ANIMATION
     ========================================================== */

  const stopAnimation = () => {
    if (
      animationFrameRef.current !== null
    ) {
      cancelAnimationFrame(
        animationFrameRef.current
      );

      animationFrameRef.current =
        null;
    }

    lastFrameRef.current = 0;
  };

  /* ==========================================================
     UPDATE PHYSICS
     ========================================================== */

  const updatePhysics = (
    next: PhysicsState
  ) => {
    physicsRef.current = next;

    setPhysics({
      ...next,
    });
  };

  /* ==========================================================
     CREATE RIBBON
     ========================================================== */

  const createRibbon = (
    targetX: number,
    targetY: number
  ) => {
    const points: RibbonPoint[] = [];

    for (
      let i = 0;
      i <= RIBBON_SEGMENTS;
      i++
    ) {
      const progress =
        i / RIBBON_SEGMENTS;

      const x =
        PIVOT_X +
        (
          targetX -
          PIVOT_X
        ) *
        progress;

      const y =
        PIVOT_Y +
        (
          targetY -
          PIVOT_Y
        ) *
        progress;

      points.push({
        x,
        y,
        oldX: x,
        oldY: y,
      });
    }

    ribbonPointsRef.current =
      points;

    updateRibbonVisuals(points);
  };

  /* ==========================================================
     UPDATE RIBBON VISUALS
     ========================================================== */

  const updateRibbonVisuals = (
    points: RibbonPoint[]
  ) => {
    const visuals: RibbonSegmentVisual[] =
      [];

    for (
      let i = 0;
      i < points.length - 1;
      i++
    ) {
      const a =
        points[i];

      const b =
        points[i + 1];

      const dx =
        b.x - a.x;

      const dy =
        b.y - a.y;

      const length =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      const angle =
        Math.atan2(
          dx,
          dy
        ) *
        (180 / Math.PI);

      visuals.push({
        x: a.x,
        y: a.y,
        length,
        angle,
      });
    }

    setRibbonVisuals(
      visuals
    );
  };

  /* ==========================================================
     RIBBON PHYSICS
     ========================================================== */

  const simulateRibbon = (
    dt: number,
    cardX: number,
    cardY: number
  ) => {
    const points =
      ribbonPointsRef.current;

    if (
      points.length !==
      RIBBON_SEGMENTS + 1
    ) {
      createRibbon(
        CARD_ATTACH_X + cardX,
        CARD_ATTACH_Y + cardY
      );

      return;
    }

    for (
      let i = 1;
      i < points.length - 1;
      i++
    ) {
      const point =
        points[i];

      const velocityX =
        point.x -
        point.oldX;

      const velocityY =
        point.y -
        point.oldY;

      point.oldX =
        point.x;

      point.oldY =
        point.y;

      point.x +=
        velocityX *
        RIBBON_DAMPING;

      point.y +=
        velocityY *
        RIBBON_DAMPING;

      point.y +=
        RIBBON_GRAVITY *
        dt *
        dt;
    }

    points[0].x =
      PIVOT_X;

    points[0].y =
      PIVOT_Y;

    points[0].oldX =
      PIVOT_X;

    points[0].oldY =
      PIVOT_Y;

    const targetX =
      CARD_ATTACH_X +
      cardX;

    const targetY =
      CARD_ATTACH_Y +
      cardY;

    for (
      let iteration = 0;
      iteration <
      RIBBON_CONSTRAINT_ITERATIONS;
      iteration++
    ) {
      points[0].x =
        PIVOT_X;

      points[0].y =
        PIVOT_Y;

      points[
        points.length - 1
      ].x = targetX;

      points[
        points.length - 1
      ].y = targetY;

      for (
        let i = 0;
        i < points.length - 1;
        i++
      ) {
        const a =
          points[i];

        const b =
          points[i + 1];

        const dx =
          b.x - a.x;

        const dy =
          b.y - a.y;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );

        if (
          distance === 0
        ) {
          continue;
        }

        const desiredLength =
          BASE_SEGMENT_LENGTH *
          RIBBON_STRETCH;

        const difference =
          (
            distance -
            desiredLength
          ) /
          distance;

        const offsetX =
          dx *
          difference;

        const offsetY =
          dy *
          difference;

        if (i === 0) {
          b.x -= offsetX;
          b.y -= offsetY;
        } else if (
          i ===
          points.length - 2
        ) {
          a.x += offsetX;
          a.y += offsetY;
        } else {
          a.x +=
            offsetX *
            0.5;

          a.y +=
            offsetY *
            0.5;

          b.x -=
            offsetX *
            0.5;

          b.y -=
            offsetY *
            0.5;
        }
      }

      points[0].x =
        PIVOT_X;

      points[0].y =
        PIVOT_Y;

      points[
        points.length - 1
      ].x = targetX;

      points[
        points.length - 1
      ].y = targetY;
    }

    updateRibbonVisuals(
      points
    );
  };

  /* ==========================================================
     CARD PHYSICS LOOP
     ========================================================== */

  const startPhysicsLoop = (
    mode:
      | "entrance"
      | "swing"
  ) => {
    stopAnimation();

    lastFrameRef.current =
      performance.now();

    let entranceFinished =
      mode === "swing";

    const tick = (
      time: number
    ) => {
      const elapsed =
        time -
        lastFrameRef.current;

      lastFrameRef.current =
        time;

      const dt =
        clamp(
          elapsed / 1000,
          0.001,
          0.025
        );

      const state =
        physicsRef.current;

      if (
        mode === "entrance" &&
        !entranceFinished
      ) {
        state.vy +=
          1850 * dt;

        state.y +=
          state.vy * dt;

        state.rotateY +=
          (
            420 +
            Math.abs(
              state.vy
            ) *
            0.08
          ) *
          dt;

        state.rotateZ +=
          75 * dt;

        state.rotateX =
          clamp(
            65 -
            Math.abs(
              state.vy
            ) *
            0.018,
            -20,
            65
          );

        if (
          state.y >= 0
        ) {
          state.y = 0;

          state.vy *=
            -0.28;

          state.vx =
            110;

          state.angularY =
            470;

          state.angularZ =
            75;

          entranceFinished =
            true;
        }
      }

      if (
        mode === "swing" ||
        entranceFinished
      ) {
        const dx =
          -state.x;

        const dy =
          -state.y;

        state.vx +=
          (
            dx *
            CARD_SPRING_X -
            state.vx *
            CARD_DAMPING
          ) *
          dt;

        state.vy +=
          (
            dy *
            CARD_SPRING_Y -
            state.vy *
            CARD_DAMPING
          ) *
          dt;

        state.x +=
          state.vx *
          dt;

        state.y +=
          state.vy *
          dt;

        state.angularY +=
          (
            -state.rotateY *
            CARD_ROTATION_STIFFNESS -
            state.angularY *
            CARD_ROTATION_DAMPING
          ) *
          dt;

        state.angularZ +=
          (
            -state.rotateZ *
            5.8 -
            state.angularZ *
            1.9
          ) *
          dt;

        state.rotateY +=
          state.angularY *
          dt;

        state.rotateZ +=
          state.angularZ *
          dt;

        state.rotateX =
          clamp(
            -state.vy *
            0.012,
            -18,
            18
          );
      }

      state.x =
        clamp(
          state.x,
          -MAX_X,
          MAX_X
        );

      state.y =
        clamp(
          state.y,
          -90,
          MAX_Y
        );

      simulateRibbon(
        dt,
        state.x,
        state.y
      );

      updatePhysics({
        ...state,
      });

      if (
        entranceFinished &&
        Math.abs(state.x) <
        0.7 &&
        Math.abs(state.y) <
        0.7 &&
        Math.abs(state.vx) <
        3 &&
        Math.abs(state.vy) <
        3 &&
        Math.abs(
          state.angularY
        ) <
        3 &&
        Math.abs(
          state.angularZ
        ) <
        3
      ) {
        state.x = 0;
        state.y = 0;

        state.vx = 0;
        state.vy = 0;

        state.rotateX = 0;
        state.rotateY = 0;
        state.rotateZ = 0;

        state.angularY = 0;
        state.angularZ = 0;

        updatePhysics({
          ...state,
        });

        animationFrameRef.current =
          null;

        return;
      }

      animationFrameRef.current =
        requestAnimationFrame(
          tick
        );
    };

    animationFrameRef.current =
      requestAnimationFrame(
        tick
      );
  };

  /* ==========================================================
     START ENTRANCE
     ========================================================== */

  const startEntrance = () => {
    stopAnimation();

    const startingY =
      -Math.max(
        700,
        window.innerHeight *
        0.95
      );

    const state: PhysicsState = {
      x: 0,
      y: startingY,
      vx: 0,
      vy: 80,
      rotateX: 65,
      rotateY: -145,
      rotateZ: -12,
      angularY: 0,
      angularZ: 0,
    };

    physicsRef.current =
      state;

    updatePhysics({
      ...state,
    });

    createRibbon(
      CARD_ATTACH_X,
      CARD_ATTACH_Y
    );

    startPhysicsLoop(
      "entrance"
    );
  };

  /* ==========================================================
     SHOW / HIDE CARD
     ========================================================== */

  useEffect(() => {
    if (!showCard) {
      stopAnimation();

      const reset = {
        ...INITIAL_PHYSICS,
      };

      physicsRef.current =
        reset;

      setPhysics({
        ...reset,
      });

      setRibbonVisuals([]);

      draggingRef.current =
        false;

      return;
    }

    const timer =
      window.setTimeout(() => {
        startEntrance();
      }, 40);

    return () => {
      window.clearTimeout(
        timer
      );

      stopAnimation();
    };
  }, [showCard]);

  /* ==========================================================
     CLEANUP
     ========================================================== */

  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, []);

  /* ==========================================================
     POINTER DOWN
     ========================================================== */

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    stopAnimation();

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    const now =
      performance.now();

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    cardStartRef.current = {
      x: physicsRef.current.x,
      y: physicsRef.current.y,
    };

    previousPointerRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: now,
    };

    pointerVelocityRef.current = {
      x: 0,
      y: 0,
    };

    draggingRef.current =
      true;

    lastFrameRef.current =
      performance.now();

    const dragRibbonLoop = (
      time: number
    ) => {
      if (
        !draggingRef.current
      ) {
        return;
      }

      const elapsed =
        time -
        lastFrameRef.current;

      lastFrameRef.current =
        time;

      const dt =
        clamp(
          elapsed / 1000,
          0.001,
          0.025
        );

      const current =
        physicsRef.current;

      simulateRibbon(
        dt,
        current.x,
        current.y
      );

      animationFrameRef.current =
        requestAnimationFrame(
          dragRibbonLoop
        );
    };

    animationFrameRef.current =
      requestAnimationFrame(
        dragRibbonLoop
      );
  };

  /* ==========================================================
     POINTER MOVE
     ========================================================== */

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      !draggingRef.current
    ) {
      return;
    }

    const now =
      performance.now();

    const dx =
      event.clientX -
      pointerStartRef.current.x;

    const dy =
      event.clientY -
      pointerStartRef.current.y;

    const x =
      clamp(
        cardStartRef.current.x +
        dx,
        -MAX_X,
        MAX_X
      );

    const y =
      clamp(
        cardStartRef.current.y +
        dy,
        -90,
        MAX_Y
      );

    const dt =
      Math.max(
        8,
        now -
        previousPointerRef.current
          .time
      );

    const rawVX =
      (
        event.clientX -
        previousPointerRef.current.x
      ) /
      dt *
      1000;

    const rawVY =
      (
        event.clientY -
        previousPointerRef.current.y
      ) /
      dt *
      1000;

    pointerVelocityRef.current.x =
      pointerVelocityRef.current.x *
      0.3 +
      rawVX *
      0.7;

    pointerVelocityRef.current.y =
      pointerVelocityRef.current.y *
      0.3 +
      rawVY *
      0.7;

    previousPointerRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: now,
    };

    const rotateY =
      clamp(
        x * 0.32,
        -115,
        115
      );

    const rotateZ =
      clamp(
        x * 0.018 +
        pointerVelocityRef.current.x *
        0.012,
        -26,
        26
      );

    const rotateX =
      clamp(
        -y * 0.018,
        -18,
        18
      );

    updatePhysics({
      ...physicsRef.current,

      x,
      y,

      vx:
        pointerVelocityRef.current
          .x,

      vy:
        pointerVelocityRef.current
          .y,

      rotateX,
      rotateY,
      rotateZ,

      angularY:
        pointerVelocityRef.current
          .x * 1.7,

      angularZ:
        pointerVelocityRef.current
          .x * 0.22,
    });
  };

  /* ==========================================================
     POINTER UP
     ========================================================== */

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Pointer already released.
    }

    draggingRef.current =
      false;

    stopAnimation();

    const releaseVX =
      clamp(
        pointerVelocityRef.current
          .x * 0.78,
        -1800,
        1800
      );

    const releaseVY =
      clamp(
        pointerVelocityRef.current
          .y * 0.78,
        -1800,
        1800
      );

    physicsRef.current.vx =
      releaseVX;

    physicsRef.current.vy =
      releaseVY;

    physicsRef.current.angularY =
      releaseVX * 1.9;

    physicsRef.current.angularZ =
      releaseVX * 0.24;

    startPhysicsLoop(
      "swing"
    );
  };

  /* ==========================================================
     CARD TRANSFORM
     ========================================================== */

  const cardTransform = `
    translate3d(
      ${physics.x}px,
      ${physics.y}px,
      0
    )

    rotateX(
      ${physics.rotateX}deg
    )

    rotateY(
      ${physics.rotateY}deg
    )

    rotateZ(
      ${physics.rotateZ}deg
    )
  `;

  /* ==========================================================
     PAGE
     ========================================================== */

  return (
    <motion.section
      id="frontend"
      initial={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      animate={
        goAbout
          ? {
            x: "-40vw",
            scale: 0.92,
            opacity: 0,
            filter: "blur(8px)",
          }
          : {
            x: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          }
      }
      transition={{
        duration: 1.8,
        ease: [
          0.16,
          1,
          0.3,
          1,
        ],
      }}
      onAnimationComplete={() => {
        if (goAbout) {
          navigate("/about");

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });

          requestAnimationFrame(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "auto",
            });

            requestAnimationFrame(() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
              });
            });
          });
        }
      }}
      className="
        relative
        w-full
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        flex
        items-start
        px-6
        md:px-20
        pt-16
        md:pt-28
        select-none
      "
    >
      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div className="relative z-20 max-w-2xl">

        {/* TOP LABEL */}

        <motion.div
          className="
            flex
            items-center
            mb-6
          "
        >
          <motion.span
            animate={{
              width: [
                "0ch",
                "48ch",
                "48ch",
                "0ch",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [
                0,
                0.3,
                0.8,
                1,
              ],
            }}
            className="
              inline-block
              overflow-hidden
              whitespace-nowrap
              text-[11px]
              tracking-[0.3em]
              uppercase
              text-white/60
              font-mono
            "
          >
            ✦ Security • Code • Technology
          </motion.span>

          <motion.span
            animate={{
              opacity: [
                1,
                0,
                1,
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="
              text-white/60
              font-mono
              ml-[2px]
            "
          >
            |
          </motion.span>
        </motion.div>

        {/* TITLE */}

        <div>
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white
              text-[clamp(56px,9vw,120px)]
            "
          >
            Cybersecurity
          </motion.h1>

          <motion.h1
            initial={{
              opacity: 0,
              x: -80,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white/70
              text-[clamp(56px,9vw,120px)]
              mb-6
            "
          >
            Enthusiast
          </motion.h1>
        </div>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
            relative
            text-sm
            sm:text-base
            lg:text-xl
            leading-relaxed
            max-w-md
            font-[Poppins]
            font-medium
            tracking-wide
            text-transparent
            bg-clip-text
            bg-[length:200%_auto]
            bg-gradient-to-r
            from-white
            via-white/60
            to-white
            animate-[shine_4s_linear_infinite]
          "
        >
          Exploring cybersecurity, building digital experiences, and turning
          ideas into modern, interactive projects.
        </motion.p>

        {/* SKILLS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            mt-6
            flex
            flex-wrap
            gap-4
          "
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Cybersecurity",
          ].map((tech) => (
            <div
              key={tech}
              className="
                relative
                group
                px-5
                py-2.5
                rounded-2xl
                text-sm
                font-medium
                text-white/90
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                overflow-hidden
                transition-all
                duration-300
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-300
                  bg-gradient-to-r
                  from-white/20
                  via-white/10
                  to-transparent
                "
              />

              <span
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-white/30
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              <span
                className="
                  relative
                  z-10
                "
              >
                {tech}
              </span>
            </div>
          ))}
        </motion.div>

        {/* BUTTONS */}

        <div
          className="
            mt-8
            flex
            flex-col
            [@media(min-width:540px)]:flex-row
            items-start
            gap-4
          "
        >
          <motion.button
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            onClick={() =>
              setShowCard(
                (value) => !value
              )
            }
            className="
              inline-flex
              items-center
              gap-2
              border
              border-accent
              text-accent
              px-6
              py-3
              text-xs
              tracking-[0.25em]
              uppercase
              font-semibold
              hover:bg-accent
              hover:text-black
              transition-all
              duration-200
              rounded-full
              relative
              z-50
            "
          >
            {showCard
              ? "Hide Card"
              : "Show Card"}
          </motion.button>

          <motion.button
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 1.4,
            }}
            onClick={() =>
              setGoAbout(true)
            }
            className="
              inline-flex
              items-center
              gap-2
              border
              border-white/30
              text-white
              px-6
              py-3
              text-xs
              uppercase
              font-bold
              hover:bg-white
              hover:text-black
              rounded-full
              transition
            "
          >
            About Me
          </motion.button>
        </div>
      </div>

      {/* ======================================================
          ID CARD SYSTEM
          ====================================================== */}

      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              absolute
              inset-0
              z-30
              pointer-events-none
            "
          >
            <div
              className="
                absolute
                right-[8%]
                md:right-[13%]
                top-0
                w-[260px]
                h-full
              "
              style={{
                perspective:
                  "1800px",
              }}
            >
              <div
                className="
                  absolute
                  top-[32px]
                  left-0
                  w-[260px]
                  h-[720px]
                  pointer-events-none
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                }}
              >
                {/* TOP PIVOT */}

                <div
                  className="
                    absolute
                    top-[5px]
                    left-1/2
                    -translate-x-1/2
                    w-[27px]
                    h-[27px]
                    rounded-full
                    bg-black
                    border-[3px]
                    border-white/30
                    shadow-[0_4px_18px_rgba(0,0,0,0.9)]
                    z-50
                  "
                />

                {/* FLEXIBLE RIBBON */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    z-20
                  "
                >
                  {ribbonVisuals.map(
                    (
                      segment,
                      index
                    ) => (
                      <div
                        key={index}
                        className="
                          absolute
                          origin-top
                          overflow-hidden
                          bg-black
                          border-x
                          border-white/20
                        "
                        style={{
                          left:
                            segment.x,

                          top:
                            segment.y,

                          width:
                            "44px",

                          height:
                            Math.max(
                              13,
                              segment.length
                            ),

                          transform:
                            `
                              translateX(-50%)
                              rotate(${segment.angle}deg)
                            `,

                          transformOrigin:
                            "50% 0%",

                          zIndex:
                            20,
                        }}
                      >
                        <div
                          className="
                            absolute
                            left-[2px]
                            top-0
                            bottom-0
                            w-[1px]
                            bg-white/10
                          "
                        />

                        <div
                          className="
                            absolute
                            right-[2px]
                            top-0
                            bottom-0
                            w-[1px]
                            bg-white/10
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              font-black
                              tracking-[0.08em]
                              text-white
                              whitespace-nowrap
                              drop-shadow-[0_1px_4px_rgba(0,0,0,1)]
                            "
                            style={{
                              writingMode:
                                "vertical-rl",

                              transform:
                                "rotate(180deg)",
                            }}
                          >
                            RAHUL
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* ID CARD */}

                <div
                  onPointerDown={
                    handlePointerDown
                  }
                  onPointerMove={
                    handlePointerMove
                  }
                  onPointerUp={
                    handlePointerUp
                  }
                  onPointerCancel={
                    handlePointerUp
                  }
                  className="
                    absolute
                    top-[315px]
                    left-1/2
                    w-[150px]
                    sm:w-[175px]
                    md:w-[185px]
                    aspect-[0.72]
                    pointer-events-auto
                    touch-none
                    cursor-grab
                    z-40
                  "
                  style={{
                    transform:
                      `
                        translateX(-50%)
                        ${cardTransform}
                      `,

                    transformOrigin:
                      "50% 0%",

                    transformStyle:
                      "preserve-3d",

                    willChange:
                      "transform",
                  }}
                >
                  {/* CARD TOP RING */}

                  <div
                    className="
                      absolute
                      -top-[12px]
                      left-1/2
                      -translate-x-1/2
                      w-[23px]
                      h-[23px]
                      rounded-full
                      bg-black
                      border-[3px]
                      border-white/20
                      z-50
                    "
                  />

                  {/* FRONT */}

                  <div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      rounded-[9px]
                      border
                      border-white/30
                      bg-white
                      shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                    "
                    style={{
                      backfaceVisibility:
                        "hidden",
                    }}
                  >
                    <img
                      src="/assets/rahul.png"
                      alt="Rahul Mahanta"
                      draggable={false}
                      className="
                        block
                        w-full
                        h-full
                        object-cover
                        pointer-events-none
                      "
                    />

                    {/* NAME PLATE */}

                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        bottom-0
                        h-[60px]
                        bg-black/94
                        border-t
                        border-white/25
                        flex
                        flex-col
                        items-center
                        justify-center
                        z-10
                        shadow-[0_-8px_20px_rgba(0,0,0,0.4)]
                      "
                    >
                      <div
                        className="
                          text-[13px]
                          sm:text-[15px]
                          md:text-[16px]
                          font-black
                          tracking-[0.10em]
                          text-white
                          whitespace-nowrap
                        "
                      >
                        RAHUL MAHANTA
                      </div>

                      <div
                        className="
                          mt-[4px]
                          text-[7px]
                          md:text-[8px]
                          font-semibold
                          tracking-[0.28em]
                          uppercase
                          text-white/65
                          whitespace-nowrap
                        "
                      >
                        CYBERSECURITY
                      </div>
                    </div>
                  </div>

                  {/* BACK */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[9px]
                      border
                      border-white/25
                      bg-black
                      shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-white
                    "
                    style={{
                      backfaceVisibility:
                        "hidden",

                      transform:
                        "rotateY(180deg)",
                    }}
                  >
                    <div
                      className="
                        text-[9px]
                        font-bold
                        tracking-[0.45em]
                        text-white/50
                      "
                    >
                      HIGHNHOES
                    </div>

                    <div
                      className="
                        mt-5
                        text-3xl
                        font-black
                        tracking-[0.12em]
                        text-white
                      "
                    >
                      RAHUL
                    </div>

                    <div
                      className="
                        mt-2
                        text-[8px]
                        font-semibold
                        tracking-[0.3em]
                        uppercase
                        text-white/45
                      "
                    >
                      CYBERSECURITY
                    </div>

                    <div
                      className="
                        absolute
                        bottom-7
                        text-[7px]
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      SECURE • CREATE • BUILD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}