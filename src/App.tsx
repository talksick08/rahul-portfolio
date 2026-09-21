import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import heroRahul from "@/assets/hero-rahul.png";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "@/components/Showcase";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";

import About from "./pages/About";

export default function App() {
  const [showWelcome, setShowWelcome] =
    useState(true);

  /* =====================================================
     INTRO SCREEN
  ====================================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  /* =====================================================
     PREVENT SCROLL DURING INTRO
  ====================================================== */

  useEffect(() => {
    document.body.style.overflow =
      showWelcome ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome]);

  /* =====================================================
     HOME PAGE
  ====================================================== */

  const HomePage = () => {
    const navigate = useNavigate();

    const goTo = (id: string) => {
      const section =
        document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    return (
      <main
        className="
          min-h-screen
          overflow-x-hidden
          bg-black
          text-white
        "
      >

        {/* =================================================
            HERO
        ================================================== */}

        <section
          id="Home"
          className="
            relative
            w-full
            bg-black
          "
        >
          <div
            className="
              relative
              w-full
              aspect-[1672/941]
            "
          >
            <img
              src={heroRahul}
              alt="Rahul Mahanta"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
              "
            />

            {/* =================================================
                INVISIBLE NAVIGATION HOTSPOTS
            ================================================== */}

            <div
              className="
                absolute
                right-[0.5%]
                top-[4%]
                z-20
                flex
                h-[10%]
                w-[28%]
                items-center
              "
            >

              {/* ABOUT */}

              <button
                type="button"
                aria-label="About"
                onClick={() =>
                  navigate("/about")
                }
                className="
                  h-full
                  w-[16%]
                  shrink-0
                  -translate-x-[35%]
                  cursor-pointer
                  border-0
                  bg-transparent
                "
              />

              {/* PROJECTS */}

              <button
                type="button"
                aria-label="Projects"
                onClick={() =>
                  goTo("Projects")
                }
                className="
                  h-full
                  flex-1
                  cursor-pointer
                  border-0
                  bg-transparent
                "
              />

              {/* EXPERIENCE */}

              <button
                type="button"
                aria-label="Experience"
                onClick={() =>
                  goTo("Experience")
                }
                className="
                  h-full
                  flex-1
                  cursor-pointer
                  border-0
                  bg-transparent
                "
              />

              {/* CONTACT */}

              <button
                type="button"
                aria-label="Contact"
                onClick={() =>
                  goTo("Contact")
                }
                className="
                  h-full
                  flex-1
                  cursor-pointer
                  border-0
                  bg-transparent
                "
              />

            </div>
          </div>
        </section>


        {/* =================================================
            ABOUT / ID CARD SECTION
        ================================================== */}

        <section
          id="About"
          className="
            relative
            bg-black
          "
        >
          <FrontendDeveloperSection />
        </section>


        {/* =================================================
            PROJECTS
        ================================================== */}

        <section
          id="Projects"
          className="
            relative
            bg-black
          "
        >
          <Showcase />
        </section>


        {/* =================================================
            TECH STACK
        ================================================== */}

        <section
          id="Skills"
          className="
            relative
            bg-black
          "
        >
          <TechStack />
        </section>


        {/* =================================================
            EXPERIENCE
        ================================================== */}

        <section
          id="Experience"
          className="
            relative
            overflow-hidden
            bg-black
            text-white
          "
        >

          {/* =================================================
              BACKGROUND GRID
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.018]
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
              ATMOSPHERIC GLOW
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[30%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-purple-500/[0.025]
              blur-[150px]
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
              px-6
              py-32
              md:px-12
              lg:px-20
            "
          >

            {/* =================================================
                EXPERIENCE HEADER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
                    05 / Experience
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
                  Work
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
                  Experience
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
                  Practical experience, continuous
                  learning, and a growing focus on
                  technology, web development, and
                  cybersecurity.
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
                    Building · Learning · Growing
                  </span>
                </div>

              </div>

            </motion.div>


            {/* =================================================
                TIMELINE
            ================================================== */}

            <div
              className="
                relative
                mt-24
                ml-2
                md:ml-8
              "
            >

              {/* Vertical timeline */}

              <div
                className="
                  absolute
                  bottom-0
                  left-[13px]
                  top-0
                  w-px
                  bg-gradient-to-b
                  from-white/20
                  via-white/10
                  to-transparent
                  md:left-[17px]
                "
              />


              {/* =================================================
                  EXPERIENCE 01
              ================================================== */}

              <motion.article
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  relative
                  pb-24
                  pl-12
                  md:pl-20
                "
              >

                {/* Timeline dot */}

                <div
                  className="
                    absolute
                    left-[5px]
                    top-1
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black
                    md:left-[9px]
                  "
                >
                  <div
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/80
                    "
                  />
                </div>


                {/* Number */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-4
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/25
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      h-px
                      w-8
                      bg-white/10
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30
                    "
                  >
                    Present
                  </span>

                </div>


                {/* Experience Card */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-7
                    transition-all
                    duration-500
                    hover:border-white/[0.16]
                    hover:bg-white/[0.04]
                    md:p-10
                  "
                >

                  {/* Hover line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-px
                      origin-top
                      scale-y-0
                      bg-white/60
                      transition-transform
                      duration-500
                      group-hover:scale-y-100
                    "
                  />


                  {/* Header */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      md:flex-row
                      md:items-start
                      md:justify-between
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.35em]
                          text-white/35
                        "
                      >
                        Cybrexus Technology
                      </p>

                      <h3
                        className="
                          mt-3
                          text-3xl
                          font-medium
                          tracking-[-0.04em]
                          md:text-4xl
                        "
                      >
                        Web Development Intern
                      </h3>

                    </div>


                    <div
                      className="
                        shrink-0
                        text-left
                        md:text-right
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
                        20 Aug 2026
                      </p>

                      <p
                        className="
                          mt-1
                          text-[8px]
                          uppercase
                          tracking-[0.3em]
                          text-white/50
                        "
                      >
                        Present
                      </p>

                    </div>

                  </div>


                  {/* Divider */}

                  <div
                    className="
                      my-7
                      h-px
                      w-full
                      bg-white/[0.07]
                    "
                  />


                  {/* Description */}

                  <p
                    className="
                      max-w-3xl
                      text-sm
                      leading-7
                      text-white/45
                      md:text-base
                      md:leading-8
                    "
                  >
                    Currently gaining hands-on
                    experience in web development
                    at Cybrexus Technology, working
                    on practical development tasks
                    and strengthening my understanding
                    of modern web technologies,
                    development workflows, and
                    real-world project requirements.
                  </p>


                  {/* Tags */}

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      Web Development
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      Internship
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      2026 — Present
                    </span>

                  </div>

                </div>

              </motion.article>


              {/* =================================================
                  EXPERIENCE 02
              ================================================== */}

              <motion.article
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="
                  relative
                  pb-10
                  pl-12
                  md:pl-20
                "
              >

                {/* Timeline dot */}

                <div
                  className="
                    absolute
                    left-[5px]
                    top-1
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black
                    md:left-[9px]
                  "
                >
                  <div
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/40
                    "
                  />
                </div>


                {/* Number */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-4
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/25
                    "
                  >
                    02
                  </span>

                  <span
                    className="
                      h-px
                      w-8
                      bg-white/10
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
                    Ongoing
                  </span>

                </div>


                {/* Learning Card */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.018]
                    p-7
                    transition-all
                    duration-500
                    hover:border-white/[0.12]
                    hover:bg-white/[0.03]
                    md:p-10
                  "
                >

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-px
                      origin-top
                      scale-y-0
                      bg-white/40
                      transition-transform
                      duration-500
                      group-hover:scale-y-100
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/30
                    "
                  >
                    Personal Development
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-medium
                      tracking-[-0.03em]
                      md:text-3xl
                    "
                  >
                    Technology & Cybersecurity
                  </h3>

                  <div
                    className="
                      my-6
                      h-px
                      w-full
                      bg-white/[0.06]
                    "
                  />

                  <p
                    className="
                      max-w-3xl
                      text-sm
                      leading-7
                      text-white/40
                      md:text-base
                      md:leading-8
                    "
                  >
                    Exploring cybersecurity, web
                    development, technology, and
                    practical digital projects while
                    continuously strengthening technical
                    fundamentals and learning through
                    hands-on experimentation.
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Cybersecurity
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Web Development
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        px-3
                        py-1.5
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Continuous Learning
                    </span>

                  </div>

                </div>

              </motion.article>

            </div>


            {/* =================================================
                EXPERIENCE FOOTER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="
                mt-20
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
                  Experience · Progress · Direction
                </span>

                <span>
                  RAHUL · HIGHNHOES
                </span>

              </div>
            </motion.div>

          </div>
        </section>


        {/* =================================================
            CONTACT
        ================================================== */}

        <section
          id="Contact"
          className="
            relative
            bg-black
          "
        >
          <ContactSection />
        </section>


        {/* =================================================
            FOOTER
        ================================================== */}

        <footer
          className="
            border-t
            border-white/10
            bg-black
            px-6
            py-10
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-4
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/40
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <span>
              RAHUL · HIGHNHOES
            </span>

            <span>
              © {new Date().getFullYear()}
              {" "}
              Rahul Mahanta
            </span>

          </div>
        </footer>

      </main>
    );
  };


  /* =====================================================
     APP ROUTES
  ====================================================== */

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<HomePage />}
          />

          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>
      )}
    </>
  );
}