"use client";

import * as THREE from "three";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Environment,
  Lightformer,
  useTexture,
} from "@react-three/drei";

import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";

import { extend } from "@react-three/fiber";

import {
  MeshLineGeometry,
  MeshLineMaterial,
} from "meshline";

extend({
  MeshLineGeometry,
  MeshLineMaterial,
});


// ============================================================
// CARD SETTINGS
// ============================================================

const CARD_WIDTH = 1.35;
const CARD_HEIGHT = 1.9;
const CARD_DEPTH = 0.09;

const ROPE_LENGTH = 0.72;

const CARD_ANCHOR_Y = CARD_HEIGHT / 2;

const MOBILE_CARD_WIDTH = 1.15;
const MOBILE_CARD_HEIGHT = 1.62;


// ============================================================
// CREATE RAHUL RIBBON TEXTURE
// ============================================================

function createRibbonTexture() {
  if (typeof document === "undefined") {
    return null;
  }

  const canvas = document.createElement("canvas");

  canvas.width = 1400;
  canvas.height = 180;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  // Black ribbon background
  ctx.fillStyle = "#050505";
  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  // Very subtle center highlight
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height
  );

  gradient.addColorStop(0, "#080808");
  gradient.addColorStop(0.5, "#111111");
  gradient.addColorStop(1, "#050505");

  ctx.fillStyle = gradient;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  // Ribbon text
  ctx.font =
    "700 52px Arial, Helvetica, sans-serif";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const text = "RAHUL";

  const spacing = 155;

  for (
    let x = -100;
    x < canvas.width + 200;
    x += spacing
  ) {
    ctx.fillStyle = "rgba(255,255,255,0.92)";

    ctx.fillText(
      text,
      x,
      canvas.height / 2
    );
  }

  // Very subtle borders
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, 2);
  ctx.lineTo(canvas.width, 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 2);
  ctx.lineTo(canvas.width, canvas.height - 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  texture.needsUpdate = true;

  return texture;
}


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function BandCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          orthographic={false}
          camera={{
            position: [0, 0, 13],
            fov: isMobile ? 32 : 25,
            near: 0.1,
            far: 100,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]}
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
          }}
        >
          <ambientLight intensity={1.8} />

          <directionalLight
            position={[4, 6, 8]}
            intensity={3}
          />

          <directionalLight
            position={[-4, 2, 4]}
            intensity={1.5}
          />

          <Physics
            interpolate
            gravity={[0, -25, 0]}
            timeStep={1 / 60}
          >
            <Band
              isMobile={isMobile}
            />
          </Physics>

          <Environment blur={0.8}>
            <Lightformer
              intensity={3}
              position={[4, 4, 6]}
              scale={[6, 6, 1]}
            />

            <Lightformer
              intensity={2}
              position={[-4, 2, 3]}
              scale={[4, 4, 1]}
            />

            <Lightformer
              intensity={2}
              position={[0, -4, 2]}
              scale={[5, 2, 1]}
            />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}


// ============================================================
// PHYSICS BAND
// ============================================================

function Band({
  isMobile,
}: {
  isMobile: boolean;
}) {
  const band = useRef<any>(null);

  const fixed = useRef<any>(null);

  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);

  const card = useRef<any>(null);

  const [dragged, setDragged] =
    useState<THREE.Vector3 | null>(null);

  const [hovered, setHovered] =
    useState(false);


  // ----------------------------------------------------------
  // PHYSICS HELPERS
  // ----------------------------------------------------------

  const vec = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const dir = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const ang = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const rot = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const target = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const lastTarget = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const dragVelocity = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const releaseVelocity = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const dragStartPosition = useMemo(
    () => new THREE.Vector3(),
    []
  );

  const releaseQuaternion = useMemo(
    () => new THREE.Quaternion(),
    []
  );

  const releaseEuler = useMemo(
    () => new THREE.Euler(),
    []
  );


  // ----------------------------------------------------------
  // DRAG STATE
  // ----------------------------------------------------------

  const wasDragging =
    useRef(false);

  const releasePending =
    useRef(false);

  const initialDropDone =
    useRef(false);


  // ----------------------------------------------------------
  // RIBBON
  // ----------------------------------------------------------

  const ribbonTexture = useMemo(
    () => createRibbonTexture(),
    []
  );

  useEffect(() => {
    return () => {
      ribbonTexture?.dispose();
    };
  }, [ribbonTexture]);


  // ----------------------------------------------------------
  // RIBBON CURVE
  // ----------------------------------------------------------

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
    []
  );


  // ----------------------------------------------------------
  // TEXTURE
  // ----------------------------------------------------------

  const texture = useTexture(
    "/assets/rahul.png"
  );


  useEffect(() => {
    texture.colorSpace =
      THREE.SRGBColorSpace;

    texture.needsUpdate = true;
  }, [texture]);


  // ----------------------------------------------------------
  // CARD MATERIALS
  // ----------------------------------------------------------

  const frontMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.32,
        metalness: 0.05,
        clearcoat: 0.9,
        clearcoatRoughness: 0.15,
      }),
    [texture]
  );


  const backMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#050505",
        roughness: 0.28,
        metalness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
      }),
    []
  );


  const sideMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0a0a0a",
        roughness: 0.3,
        metalness: 0.35,
        clearcoat: 0.8,
      }),
    []
  );


  // ----------------------------------------------------------
  // CARD MATERIAL ARRAY
  // BoxGeometry order:
  //
  // right
  // left
  // top
  // bottom
  // front
  // back
  // ----------------------------------------------------------

  const materials = useMemo(
    () => [
      sideMaterial,
      sideMaterial,
      sideMaterial,
      sideMaterial,
      frontMaterial,
      backMaterial,
    ],
    [
      sideMaterial,
      frontMaterial,
      backMaterial,
    ]
  );


  // ----------------------------------------------------------
  // ROPE JOINTS
  // ----------------------------------------------------------

  useRopeJoint(
    fixed,
    j1,
    [
      [0, 0, 0],
      [0, 0, 0],
      ROPE_LENGTH,
    ]
  );

  useRopeJoint(
    j1,
    j2,
    [
      [0, 0, 0],
      [0, 0, 0],
      ROPE_LENGTH,
    ]
  );

  useRopeJoint(
    j2,
    j3,
    [
      [0, 0, 0],
      [0, 0, 0],
      ROPE_LENGTH,
    ]
  );


  // ----------------------------------------------------------
  // CARD CONNECTION
  // ----------------------------------------------------------

  useSphericalJoint(
    j3,
    card,
    [
      [0, 0, 0],
      [0, CARD_ANCHOR_Y, 0],
    ]
  );


  // ----------------------------------------------------------
  // PHYSICS FRAME LOOP
  // ----------------------------------------------------------

  useFrame(
    (state, delta) => {
      if (
        !card.current ||
        !fixed.current ||
        !j1.current ||
        !j2.current ||
        !j3.current
      ) {
        return;
      }


      // ======================================================
      // DRAGGING
      // ======================================================

      if (
        dragged !== null &&
        card.current
      ) {
        vec
          .set(
            state.pointer.x,
            state.pointer.y,
            0.5
          )
          .unproject(state.camera);

        dir
          .copy(vec)
          .sub(state.camera.position)
          .normalize();

        vec.add(
          dir.multiplyScalar(
            state.camera.position.length()
          )
        );


        const newX =
          vec.x - dragged.x;

        const newY =
          vec.y - dragged.y;


        target.set(
          newX,
          newY,
          0
        );


        // ----------------------------------------------------
        // CALCULATE REAL DRAG VELOCITY
        // ----------------------------------------------------

        if (wasDragging.current) {
          const frameVelocity =
            target
              .clone()
              .sub(lastTarget)
              .divideScalar(
                Math.max(delta, 1 / 120)
              );

          dragVelocity.lerp(
            frameVelocity,
            0.45
          );
        }

        lastTarget.copy(target);


        // ----------------------------------------------------
        // LIMIT LOWER MOVEMENT
        // ----------------------------------------------------

        let limitedY = newY;

        const lowerLimit =
          isMobile
            ? -0.5
            : -0.9;

        if (
          state.pointer.y <
          lowerLimit
        ) {
          limitedY =
            card.current.translation().y;
        }


        // ----------------------------------------------------
        // MOVE CARD
        // ----------------------------------------------------

        card.current.setNextKinematicTranslation(
          {
            x: newX,
            y: limitedY,
            z: 0,
          }
        );


        // ----------------------------------------------------
        // NATURAL 3D DRAG ROTATION
        // ----------------------------------------------------

        const offsetX =
          newX -
          dragStartPosition.x;

        const offsetY =
          limitedY -
          dragStartPosition.y;


        const yaw =
          THREE.MathUtils.clamp(
            offsetX * 0.18,
            -1.15,
            1.15
          );

        const pitch =
          THREE.MathUtils.clamp(
            -offsetY * 0.12,
            -0.7,
            0.7
          );

        const roll =
          THREE.MathUtils.clamp(
            -offsetX * 0.1,
            -0.65,
            0.65
          );


        releaseEuler.set(
          pitch,
          yaw,
          roll
        );

        releaseQuaternion.setFromEuler(
          releaseEuler
        );


        card.current.setNextKinematicRotation(
          releaseQuaternion
        );


        // ----------------------------------------------------
        // WAKE ENTIRE ROPE
        // ----------------------------------------------------

        fixed.current.wakeUp();
        j1.current.wakeUp();
        j2.current.wakeUp();
        j3.current.wakeUp();
        card.current.wakeUp();


        wasDragging.current = true;

        return;
      }


      // ======================================================
      // RELEASE
      // ======================================================

      if (
        !dragged &&
        wasDragging.current &&
        !releasePending.current
      ) {
        releasePending.current = true;

        releaseVelocity.copy(
          dragVelocity
        );

        // Small boost so the throw feels physical
        releaseVelocity.multiplyScalar(
          1.0
        );

        wasDragging.current = false;

        card.current.wakeUp();
      }


      // ======================================================
      // APPLY THROW VELOCITY
      // ======================================================

      if (
        releasePending.current
      ) {
        releasePending.current = false;


        const spinY =
          THREE.MathUtils.clamp(
            -dragVelocity.x * 0.38,
            -8,
            8
          );


        const spinZ =
          THREE.MathUtils.clamp(
            -dragVelocity.x * 0.08,
            -3,
            3
          );


        const spinX =
          THREE.MathUtils.clamp(
            dragVelocity.y * 0.12,
            -3,
            3
          );


        card.current.setLinvel({
          x: releaseVelocity.x,
          y: releaseVelocity.y,
          z: 0,
        });


        card.current.setAngvel({
          x: spinX,
          y: spinY,
          z: spinZ,
        });


        fixed.current.wakeUp();
        j1.current.wakeUp();
        j2.current.wakeUp();
        j3.current.wakeUp();
        card.current.wakeUp();
      }


      // ======================================================
      // RIBBON SMOOTHING
      // ======================================================

      [
        j1,
        j2,
      ].forEach((ref) => {
        if (!ref.current) {
          return;
        }


        if (
          !ref.current.lerped
        ) {
          ref.current.lerped =
            new THREE.Vector3().copy(
              ref.current.translation()
            );
        }


        const distance =
          Math.max(
            0.1,
            Math.min(
              1,
              ref.current.lerped.distanceTo(
                ref.current.translation()
              )
            )
          );


        ref.current.lerped.lerp(
          ref.current.translation(),
          delta *
          (
            12 +
            distance * 24
          )
        );
      });


      // ======================================================
      // UPDATE RIBBON CURVE
      // ======================================================

      curve.points[0].copy(
        j3.current.translation()
      );

      curve.points[1].copy(
        j2.current.lerped
      );

      curve.points[2].copy(
        j1.current.lerped
      );

      curve.points[3].copy(
        fixed.current.translation()
      );


      if (
        band.current?.geometry
      ) {
        band.current.geometry.setPoints(
          curve.getPoints(40)
        );
      }


      // ======================================================
      // CARD ROTATIONAL STABILIZATION
      // ======================================================

      ang.copy(
        card.current.angvel()
      );

      rot.copy(
        card.current.rotation()
      );


      // Prevent endless spinning.
      // Still allows natural flips.
      card.current.setAngvel({
        x: ang.x * 0.985,
        y:
          ang.y -
          rot.y * 0.16,
        z: ang.z * 0.985,
      });


      // ======================================================
      // INITIAL PHYSICS KICK
      // ======================================================

      if (
        !initialDropDone.current
      ) {
        initialDropDone.current = true;

        // Small physical angular impulse.
        // This is NOT a CSS animation.
        // Rapier handles the actual movement.
        card.current.setAngvel({
          x: -1.15,
          y: 1.65,
          z: 0.12,
        });

        card.current.wakeUp();
      }
    }
  );


  // ==========================================================
  // POSITIONING
  // ==========================================================

  const groupPosition = isMobile
    ? [1.55, 3.65, 0]
    : [3.25, 3.65, 0];


  // ==========================================================
  // CARD SIZE
  // ==========================================================

  const cardWidth = isMobile
    ? MOBILE_CARD_WIDTH
    : CARD_WIDTH;

  const cardHeight = isMobile
    ? MOBILE_CARD_HEIGHT
    : CARD_HEIGHT;


  // ==========================================================
  // RETURN PHYSICS SCENE
  // ==========================================================

  return (
    <>
      <group
        position={
          groupPosition as [
            number,
            number,
            number
          ]
        }
      >

        {/* ================================================== */}
        {/* FIXED TOP CONNECTION */}
        {/* ================================================== */}

        <RigidBody
          ref={fixed}
          type="fixed"
          colliders={false}
        >
          <group
            position={[0, 0.1, 0]}
          >
            {/* top metal grip */}
            <mesh
              rotation={[
                0,
                0,
                Math.PI / 2,
              ]}
            >
              <cylinderGeometry
                args={[
                  0.055,
                  0.055,
                  0.8,
                  20,
                ]}
              />

              <meshStandardMaterial
                color="#050505"
                metalness={0.75}
                roughness={0.22}
              />
            </mesh>


            {/* top mounting ring */}
            <mesh
              position={[0, -0.35, 0]}
            >
              <torusGeometry
                args={[
                  0.11,
                  0.035,
                  12,
                  32,
                ]}
              />

              <meshStandardMaterial
                color="#0b0b0b"
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>
          </group>
        </RigidBody>


        {/* ================================================== */}
        {/* ROPE JOINT 1 */}
        {/* ================================================== */}

        <RigidBody
          ref={j1}
          type="dynamic"
          colliders={false}
          canSleep
          linearDamping={0.7}
          angularDamping={1.5}
        >
          <BallCollider
            args={[0.055]}
          />
        </RigidBody>


        {/* ================================================== */}
        {/* ROPE JOINT 2 */}
        {/* ================================================== */}

        <RigidBody
          ref={j2}
          type="dynamic"
          colliders={false}
          canSleep
          linearDamping={0.7}
          angularDamping={1.5}
        >
          <BallCollider
            args={[0.055]}
          />
        </RigidBody>


        {/* ================================================== */}
        {/* ROPE JOINT 3 */}
        {/* ================================================== */}

        <RigidBody
          ref={j3}
          type="dynamic"
          colliders={false}
          canSleep
          linearDamping={0.7}
          angularDamping={1.5}
        >
          <BallCollider
            args={[0.055]}
          />
        </RigidBody>


        {/* ================================================== */}
        {/* CARD */}
        {/* ================================================== */}

        <RigidBody
          ref={card}
          position={[
            0,
            -3.11,
            0,
          ]}
          type={
            dragged
              ? "kinematicPosition"
              : "dynamic"
          }
          colliders={false}
          canSleep
          linearDamping={0.75}
          angularDamping={1.55}
        >

          {/* Physical card collider */}

          <CuboidCollider
            args={[
              cardWidth / 2,
              cardHeight / 2,
              CARD_DEPTH / 2,
            ]}
          />


          {/* ================================================= */}
          {/* CARD VISUAL */}
          {/* ================================================= */}

          <group
            onPointerOver={(event: any) => {
              event.stopPropagation();

              if (
                !dragged
              ) {
                setHovered(true);
              }
            }}

            onPointerOut={(event: any) => {
              event.stopPropagation();

              setHovered(false);
            }}

            onPointerDown={(event: any) => {
              event.stopPropagation();

              event.target.setPointerCapture(
                event.pointerId
              );


              const cardPosition =
                card.current.translation();


              dragStartPosition.set(
                cardPosition.x,
                cardPosition.y,
                cardPosition.z
              );


              const offset =
                new THREE.Vector3()
                  .copy(event.point)
                  .sub(
                    cardPosition
                  );


              setDragged(offset);

              lastTarget.set(
                cardPosition.x,
                cardPosition.y,
                0
              );


              dragVelocity.set(
                0,
                0,
                0
              );


              releaseVelocity.set(
                0,
                0,
                0
              );


              wasDragging.current =
                true;


              releasePending.current =
                false;


              card.current.wakeUp();

              j1.current?.wakeUp();
              j2.current?.wakeUp();
              j3.current?.wakeUp();
            }}


            onPointerUp={(event: any) => {
              event.stopPropagation();

              event.target.releasePointerCapture(
                event.pointerId
              );

              setDragged(null);
            }}
          >

            {/* ============================================= */}
            {/* CARD BODY */}
            {/* ============================================= */}

            <mesh>
              <boxGeometry
                args={[
                  cardWidth,
                  cardHeight,
                  CARD_DEPTH,
                ]}
              />

              {materials.map(
                (material, index) => (
                  <primitive
                    object={material}
                    attach={`material-${index}`}
                    key={index}
                  />
                )
              )}
            </mesh>


            {/* ============================================= */}
            {/* CARD TOP METAL HOLDER */}
            {/* ============================================= */}

            <mesh
              position={[
                0,
                cardHeight / 2 + 0.055,
                0,
              ]}
            >
              <boxGeometry
                args={[
                  0.22,
                  0.1,
                  0.13,
                ]}
              />

              <meshStandardMaterial
                color="#111111"
                metalness={0.95}
                roughness={0.18}
              />
            </mesh>


            {/* ============================================= */}
            {/* METAL RING */}
            {/* ============================================= */}

            <mesh
              position={[
                0,
                cardHeight / 2 + 0.15,
                0,
              ]}
            >
              <torusGeometry
                args={[
                  0.09,
                  0.027,
                  12,
                  32,
                ]}
              />

              <meshStandardMaterial
                color="#111111"
                metalness={0.95}
                roughness={0.17}
              />
            </mesh>


            {/* ============================================= */}
            {/* SMALL CONNECTOR */}
            {/* ============================================= */}

            <mesh
              position={[
                0,
                cardHeight / 2 + 0.085,
                0,
              ]}
            >
              <cylinderGeometry
                args={[
                  0.035,
                  0.035,
                  0.12,
                  16,
                ]}
              />

              <meshStandardMaterial
                color="#090909"
                metalness={1}
                roughness={0.16}
              />
            </mesh>


            {/* ============================================= */}
            {/* FRONT GLASS EFFECT */}
            {/* ============================================= */}

            <mesh
              position={[
                0,
                0,
                CARD_DEPTH / 2 + 0.003,
              ]}
            >
              <planeGeometry
                args={[
                  cardWidth * 0.985,
                  cardHeight * 0.985,
                ]}
              />

              <meshPhysicalMaterial
                transparent
                opacity={
                  hovered
                    ? 0.07
                    : 0.025
                }
                roughness={0.08}
                metalness={0.05}
                clearcoat={1}
              />
            </mesh>

          </group>
        </RigidBody>
      </group>


      {/* ==================================================== */}
      {/* PHYSICAL RIBBON */}
      {/* ==================================================== */}

      <mesh
        ref={band}
        renderOrder={10}
      >
        <meshLineGeometry />

        <meshLineMaterial
          transparent
          opacity={0.98}
          color="#050505"
          depthTest={false}
          depthWrite={false}
          resolution={[
            typeof window !== "undefined"
              ? window.innerWidth
              : 1920,
            typeof window !== "undefined"
              ? window.innerHeight
              : 1080,
          ]}
          lineWidth={
            isMobile
              ? 0.85
              : 1.15
          }
          map={
            ribbonTexture ??
            undefined
          }
          useMap={
            ribbonTexture
              ? true
              : false
          }
        />
      </mesh>
    </>
  );
}