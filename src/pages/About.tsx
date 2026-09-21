import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  Shield,
  Code2,
  Globe,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();

  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);

  // ==========================================
  // TYPING EFFECT
  // ==========================================

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayedText("");
      index = 0;

      interval = setInterval(() => {
        index++;

        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);

          setTimeout(() => {
            startTyping();
          }, 5000);
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // RESUME DOWNLOAD
  // ==========================================

  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    let time = 3;

    const timer = setInterval(() => {
      time--;

      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);

        const resumeHTML = `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

<title>Rahul Mahanta - Resume</title>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    Arial,
    Helvetica,
    sans-serif;

  background: #050505;

  color: #ffffff;

  padding: 40px;
}

.container {
  max-width: 900px;

  margin: auto;

  background: #0d0d0d;

  border: 1px solid #252525;

  padding: 45px;
}

.header {
  border-bottom: 1px solid #333333;

  padding-bottom: 30px;

  margin-bottom: 30px;
}

h1 {
  font-size: 42px;

  letter-spacing: -1px;

  margin-bottom: 8px;
}

.title {
  color: #aaaaaa;

  font-size: 16px;

  margin-bottom: 18px;
}

.contact {
  color: #aaaaaa;

  font-size: 13px;

  line-height: 2;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 14px;

  text-transform: uppercase;

  letter-spacing: 3px;

  border-bottom: 1px solid #292929;

  padding-bottom: 10px;

  margin-bottom: 16px;
}

p,
li {
  color: #bbbbbb;

  font-size: 14px;

  line-height: 1.8;
}

ul {
  padding-left: 20px;
}

.skills {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;
}

.skill {
  border: 1px solid #333333;

  padding: 7px 12px;

  color: #cccccc;

  font-size: 12px;
}

</style>

</head>

<body>

<div class="container">

  <!-- HEADER -->

  <div class="header">

    <h1>Rahul Mahanta</h1>

    <div class="title">
      Cybersecurity Enthusiast · Web Developer · Technology
    </div>

    <div class="contact">
      Noida, India<br>
      HIGHNHOES
    </div>

  </div>


  <!-- PROFILE -->

  <div class="section">

    <h2>Profile</h2>

    <p>
      Technology enthusiast focused on cybersecurity, web development,
      and modern digital experiences. Interested in understanding how
      systems are built, how applications work, and how digital
      environments can be made more secure.
    </p>

  </div>


  <!-- TECHNICAL SKILLS -->

  <div class="section">

    <h2>Technical Skills</h2>

    <div class="skills">

      <span class="skill">HTML5</span>

      <span class="skill">CSS3</span>

      <span class="skill">JavaScript</span>

      <span class="skill">React.js</span>

      <span class="skill">Tailwind CSS</span>

      <span class="skill">Next.js</span>

      <span class="skill">Node.js</span>

      <span class="skill">Git</span>

      <span class="skill">GitHub</span>

      <span class="skill">Cybersecurity</span>

    </div>

  </div>


  <!-- FOCUS AREAS -->

  <div class="section">

    <h2>Focus Areas</h2>

    <ul>

      <li>
        Cybersecurity and information security
      </li>

      <li>
        Web development and modern frontend technologies
      </li>

      <li>
        Secure and responsive digital applications
      </li>

      <li>
        Security tools and practical technologies
      </li>

    </ul>

  </div>


  <!-- CAREER OBJECTIVE -->

  <div class="section">

    <h2>Career Objective</h2>

    <p>
      To build a career in technology with a long-term focus on
      cybersecurity and secure software development, while continuously
      improving my technical knowledge through practical projects,
      experimentation, and real-world learning.
    </p>

  </div>

</div>

</body>

</html>
        `;

        const blob = new Blob(
          [resumeHTML],
          {
            type: "text/html",
          }
        );

        const url =
          URL.createObjectURL(blob);

        const a =
          document.createElement("a");

        a.href = url;

        a.download =
          "Rahul_Mahanta_Resume.html";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        window.open(
          url,
          "_blank"
        );

        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 10000);

        setDownloading(false);

        setCountdown(null);
      }
    }, 1000);
  };

  return (
    <div
      className="
        relative
        min-h-screen
        bg-black
        text-white
        overflow-hidden
      "
    >

      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            bg-white/[0.025]
            rounded-full
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-white/[0.025]
            rounded-full
            blur-[120px]
          "
        />

      </div>


      {/* ==========================================
          BACK BUTTON
      ========================================== */}

      <motion.button

        initial={{
          opacity: 0,
          x: -20,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          duration: 0.6,
        }}

        onClick={() =>
          navigate("/")
        }

        className="
          fixed
          top-6
          left-6
          z-50
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-4
          py-2
          text-sm
          text-white/70
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-white/25
          hover:bg-white/[0.08]
          hover:text-white
        "
      >

        <ArrowLeft size={17} />

        <span>
          Back
        </span>

      </motion.button>


      {/* ==========================================
          MAIN
      ========================================== */}

      <main
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-5
          py-24
          sm:px-8
          lg:px-12
        "
      >


        {/* ==========================================
            BRAND HEADER
        ========================================== */}

        <motion.div

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="mb-12"
        >

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-white/30
            "
          >
            RAHUL · HIGHNHOES
          </p>

          <div
            className="
              mt-5
              h-px
              w-full
              bg-white/10
            "
          />

        </motion.div>


        {/* ==========================================
            HERO
        ========================================== */}

        <section
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >

          {/* LEFT */}

          <motion.div

            initial={{
              opacity: 0,
              x: -35,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <p
              className="
                mb-5
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.35em]
                text-white/35
              "
            >

              <span
                className="
                  h-px
                  w-8
                  bg-white/30
                "
              />

              About

            </p>


            <h1
              className="
                min-h-[1.2em]
                text-5xl
                font-medium
                tracking-[-0.06em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >

              {displayedText}

              <span
                className="
                  ml-2
                  animate-pulse
                  text-white/40
                "
              >
                |
              </span>

            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white/50
                sm:text-lg
              "
            >
              I’m Rahul — a technology enthusiast focused on
              cybersecurity, web development, and modern digital
              experiences. I enjoy understanding how things work,
              building practical projects, and continuously exploring
              new technologies.
            </p>

          </motion.div>


          {/* PROFILE CARD */}

          <motion.div

            initial={{
              opacity: 0,
              x: 35,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}

            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              p-7
              backdrop-blur-2xl
              sm:p-9
            "
          >

            <div
              className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-white/[0.025]
                blur-3xl
              "
            />

            <div
              className="relative"
            >

              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                  "
                >

                  <Shield
                    size={22}
                    className="text-white/70"
                  />

                </div>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  Profile
                </span>

              </div>


              <h2
                className="
                  text-2xl
                  font-medium
                  tracking-tight
                "
              >
                Rahul Mahanta
              </h2>


              <p
                className="
                  mt-2
                  text-sm
                  text-white/40
                "
              >
                Cybersecurity · Web Development · Technology
              </p>


              <div
                className="
                  mt-8
                  space-y-4
                "
              >

                {/* FOCUS */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-t
                    border-white/10
                    pt-4
                  "
                >

                  <Code2
                    size={17}
                    className="text-white/40"
                  />

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Focus
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-white/70
                      "
                    >
                      Cybersecurity & Web Development
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-t
                    border-white/10
                    pt-4
                  "
                >

                  <Globe
                    size={17}
                    className="text-white/40"
                  />

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-white/70
                      "
                    >
                      Noida, India
                    </p>

                  </div>

                </div>


                {/* CURRENTLY */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-t
                    border-white/10
                    pt-4
                  "
                >

                  <Terminal
                    size={17}
                    className="text-white/40"
                  />

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      Currently
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-white/70
                      "
                    >
                      Learning & Building
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </section>


        {/* ==========================================
            JOURNEY
        ========================================== */}

        <motion.section

          initial={{
            opacity: 0,
            y: 35,
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

          className="mt-28"
        >

          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >

            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-white/30
                "
              >
                01
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-medium
                  tracking-tight
                  sm:text-4xl
                "
              >
                The Journey
              </h2>

            </div>

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/25
                sm:block
              "
            >
              About Me
            </span>

          </div>


          <div
            className="
              grid
              gap-8
              md:grid-cols-2
            "
          >

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.025]
                p-7
                sm:p-9
              "
            >

              <p
                className="
                  text-sm
                  leading-8
                  text-white/55
                "
              >
                My interest in technology started with curiosity —
                wanting to understand how websites, applications, and
                digital systems actually work behind the interface.
              </p>


              <p
                className="
                  mt-6
                  text-sm
                  leading-8
                  text-white/55
                "
              >
                Over time, that curiosity developed into an interest
                in cybersecurity and web development. I enjoy learning
                by building, experimenting with different technologies,
                and solving problems through practical projects.
              </p>

            </div>


            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.025]
                p-7
                sm:p-9
              "
            >

              <p
                className="
                  text-sm
                  leading-8
                  text-white/55
                "
              >
                Cybersecurity particularly interests me because it
                combines technology, problem solving, and a deeper
                understanding of how systems can be protected from
                real-world threats.
              </p>


              <p
                className="
                  mt-6
                  text-sm
                  leading-8
                  text-white/55
                "
              >
                I’m currently focused on strengthening my fundamentals,
                developing practical skills, and building projects
                that help me move from learning concepts to applying
                them.
              </p>

            </div>

          </div>

        </motion.section>


        {/* ==========================================
            TECHNICAL STACK
        ========================================== */}

        <motion.section

          initial={{
            opacity: 0,
            y: 35,
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

          className="mt-28"
        >

          <div
            className="
              mb-10
              border-b
              border-white/10
              pb-5
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
              "
            >
              02
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-medium
                tracking-tight
                sm:text-4xl
              "
            >
              Technical Stack
            </h2>

          </div>


          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Next.js",
              "Node.js",
              "Git",
              "GitHub",
              "Cybersecurity",
            ].map(
              (skill, index) => (
                <motion.div

                  key={skill}

                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.4,
                    delay:
                      index * 0.04,
                  }}

                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-5
                    py-5
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >

                  <span
                    className="
                      text-sm
                      text-white/70
                      group-hover:text-white
                    "
                  >
                    {skill}
                  </span>

                  <span
                    className="
                      text-xs
                      text-white/20
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                </motion.div>
              )
            )}

          </div>

        </motion.section>


        {/* ==========================================
            FOCUS AREAS
        ========================================== */}

        <motion.section

          initial={{
            opacity: 0,
            y: 35,
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

          className="mt-28"
        >

          <div
            className="
              mb-10
              border-b
              border-white/10
              pb-5
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
              "
            >
              03
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-medium
                tracking-tight
                sm:text-4xl
              "
            >
              Focus Areas
            </h2>

          </div>


          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >

            {[
              {
                number: "01",
                title: "Cybersecurity",
                text:
                  "Learning security fundamentals, vulnerabilities, system protection, and practical security concepts.",
              },

              {
                number: "02",
                title: "Web Development",
                text:
                  "Building modern, responsive interfaces and learning how applications work across the web stack.",
              },

              {
                number: "03",
                title: "Secure Applications",
                text:
                  "Exploring how security can be considered while designing and developing digital applications.",
              },

              {
                number: "04",
                title: "Continuous Learning",
                text:
                  "Experimenting with new technologies, tools, and practical projects to strengthen technical skills.",
              },
            ].map(
              (item) => (
                <div
                  key={item.number}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-7
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.04]
                    sm:p-8
                  "
                >

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    {item.number}
                  </span>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-medium
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/45
                    "
                  >
                    {item.text}
                  </p>

                </div>
              )
            )}

          </div>

        </motion.section>


        {/* ==========================================
            CAREER DIRECTION
        ========================================== */}

        <motion.section

          initial={{
            opacity: 0,
            y: 35,
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

          className="mt-28"
        >

          <div
            className="
              mb-10
              border-b
              border-white/10
              pb-5
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
              "
            >
              04
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-medium
                tracking-tight
                sm:text-4xl
              "
            >
              Where I’m Heading
            </h2>

          </div>


          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.025]
              p-8
              sm:p-12
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-white/[0.03]
                blur-3xl
              "
            />


            <p
              className="
                relative
                max-w-4xl
                text-xl
                leading-9
                tracking-tight
                text-white/65
                sm:text-2xl
                sm:leading-10
              "
            >

              My long-term direction is to build a career around

              <span className="text-white">
                {" "}cybersecurity{" "}
              </span>

              and secure technology. I want to keep developing my
              understanding of security, networking, systems, and
              modern software while continuing to build real projects
              along the way.

            </p>

          </div>

        </motion.section>


        {/* ==========================================
            RESUME BUTTON
        ========================================== */}

        <motion.section

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
            mt-24
            flex
            justify-center
          "
        >

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="
              group
              relative
              flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/15
              bg-white/[0.05]
              px-8
              py-4
              text-sm
              font-medium
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/[0.1]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            <Download
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />

            <span>
              {downloading
                ? `Preparing Resume ${countdown}s`
                : "Download Resume"}
            </span>

          </button>

        </motion.section>


        {/* ==========================================
            FOOTER
        ========================================== */}

        <footer
          className="
            mt-28
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            RAHUL · HIGHNHOES
          </p>


          <div
            className="
              flex
              items-center
              gap-5
            "
          >

            <a
              href="mailto:"
              className="
                text-white/30
                transition-colors
                hover:text-white
              "
              aria-label="Email"
            >
              <Mail size={17} />
            </a>


            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/30
                transition-colors
                hover:text-white
              "
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>


            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/30
                transition-colors
                hover:text-white
              "
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

          </div>

        </footer>

      </main>

    </div>
  );
}