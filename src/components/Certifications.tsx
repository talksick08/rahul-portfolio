import { motion } from "framer-motion";
import {
    FaArrowUpRightFromSquare,
    FaAward,
    FaShieldHalved,
} from "react-icons/fa6";

const certifications = [
    {
        number: "01",
        organization: "DELOITTE × FORAGE",
        title: "Technology Job Simulation",
        type: "Certificate of Completion",
        date: "09 · 09 · 2026",
        description:
            "Completed Deloitte's Technology Job Simulation through Forage, gaining practical exposure to technology-focused tasks involving coding and development. The simulation provided hands-on experience in applying technical problem-solving skills to practical scenarios.",
        skills: ["Coding", "Development"],
        image: "/assets/deloitte-certificate.png",
        icon: "award",
    },
    {
        number: "02",
        organization: "TATA × FORAGE",
        title: "Cybersecurity Analyst Job Simulation",
        type: "Certificate of Completion",
        date: "08 · 09 · 2026",
        description:
            "Completed TATA's Cybersecurity Analyst Job Simulation through Forage, working through practical tasks covering Identity and Access Management (IAM) fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.",
        skills: ["IAM", "Security", "Integration"],
        image: "/assets/tata-certificate.png",
        icon: "security",
    },
];

export default function Certifications() {
    return (
        <section
            id="Certifications"
            className="
        relative
        overflow-hidden
        bg-black
        px-4
        py-24
        text-white
        sm:px-6
        sm:py-28
        md:px-12
        md:py-36
        lg:px-20
        lg:py-40
      "
        >
            {/* =========================================================
          BACKGROUND
      ========================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
            absolute
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/[0.02]
            blur-[140px]
            sm:h-[600px]
            sm:w-[600px]
          "
                />

                <div
                    className="
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-white/[0.018]
            blur-[150px]
          "
                />

                <div
                    className="
            absolute
            inset-0
            opacity-[0.025]
          "
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">

                {/* =========================================================
            SECTION HEADER
        ========================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
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
                >
                    <div
                        className="
              flex
              items-center
              gap-4
              border-b
              border-white/[0.08]
              pb-5
              sm:gap-6
              sm:pb-6
            "
                    >
                        <span
                            className="
                h-px
                w-8
                bg-white/40
                sm:w-14
              "
                        />

                        <span
                            className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.5em]
                text-white/40
                sm:text-[9px]
                sm:tracking-[0.6em]
              "
                        >
                            06 / Certifications
                        </span>

                        <span
                            className="
                ml-auto
                font-mono
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/20
                sm:text-[8px]
              "
                        >
                            VERIFIED LEARNING
                        </span>
                    </div>
                </motion.div>

                {/* =========================================================
            TITLE
        ========================================================= */}

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
                        duration: 0.9,
                    }}
                    className="
            mt-12
            grid
            gap-8
            sm:mt-16
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
                >
                    <div>
                        <p
                            className="
                mb-5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white/20
              "
                        >
                            Credentials · Practical Learning
                        </p>

                        <h2
                            className="
                text-[clamp(50px,12vw,112px)]
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
              "
                        >
                            CERTIFIED
                            <br />

                            <span className="text-white/30">
                                LEARNING
                            </span>

                            <span className="text-white/20">
                                .
                            </span>
                        </h2>
                    </div>

                    <div
                        className="
              max-w-md
              lg:justify-self-end
              lg:pb-2
            "
                    >
                        <div
                            className="
                mb-5
                h-px
                w-16
                bg-white/20
                sm:w-24
              "
                        />

                        <p
                            className="
                text-sm
                leading-7
                text-white/40
                sm:text-base
                sm:leading-8
              "
                        >
                            Certifications and practical job simulations
                            reflecting continued learning across technology,
                            development, and cybersecurity.
                        </p>
                    </div>
                </motion.div>

                {/* =========================================================
            CERTIFICATION ARCHIVE
        ========================================================= */}

                <div
                    className="
            mt-16
            sm:mt-20
          "
                >
                    {certifications.map((certificate, index) => (
                        <motion.article
                            key={certificate.number}
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
                                margin: "-80px",
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                            }}
                            className="
                group
                relative
                border-t
                border-white/[0.1]
                py-10
                sm:py-14
              "
                        >
                            <div
                                className="
                  grid
                  gap-10
                  lg:grid-cols-[70px_1fr_0.9fr]
                  lg:items-center
                  lg:gap-12
                "
                            >

                                {/* =================================================
                    NUMBER
                ================================================= */}

                                <div className="hidden lg:block">
                                    <span
                                        className="
                      font-mono
                      text-[10px]
                      tracking-[0.2em]
                      text-white/20
                    "
                                    >
                                        {certificate.number}
                                    </span>
                                </div>

                                {/* =================================================
                    CERTIFICATE DETAILS
                ================================================= */}

                                <div>
                                    <div
                                        className="
                      mb-4
                      flex
                      items-center
                      gap-3
                    "
                                    >
                                        <div
                                            className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                      "
                                        >
                                            {certificate.icon === "security" ? (
                                                <FaShieldHalved
                                                    className="
                            text-xs
                            text-white/55
                          "
                                                />
                                            ) : (
                                                <FaAward
                                                    className="
                            text-xs
                            text-white/55
                          "
                                                />
                                            )}
                                        </div>

                                        <span
                                            className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-white/35
                      "
                                        >
                                            {certificate.organization}
                                        </span>
                                    </div>

                                    <div
                                        className="
                      mb-2
                      lg:hidden
                    "
                                    >
                                        <span
                                            className="
                        font-mono
                        text-[8px]
                        tracking-[0.2em]
                        text-white/20
                      "
                                        >
                                            {certificate.number}
                                        </span>
                                    </div>

                                    <h3
                                        className="
                      max-w-xl
                      text-2xl
                      font-medium
                      leading-tight
                      tracking-[-0.04em]
                      text-white
                      sm:text-3xl
                      md:text-4xl
                    "
                                    >
                                        {certificate.title}
                                    </h3>

                                    <p
                                        className="
                      mt-2
                      text-xs
                      text-white/35
                      sm:text-sm
                    "
                                    >
                                        {certificate.type}
                                    </p>

                                    {/* Skills */}

                                    <div
                                        className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                                    >
                                        {certificate.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="
                          rounded-full
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-white/35
                        "
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* =================================================
                    CERTIFICATE PREVIEW
                ================================================= */}

                                <div
                                    className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.1]
                    bg-[#080808]
                  "
                                >
                                    <div
                                        className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                                    />

                                    <img
                                        src={certificate.image}
                                        alt={`${certificate.title} certificate`}
                                        className="
                      block
                      aspect-[1.5/1]
                      w-full
                      object-cover
                      object-top
                      opacity-80
                      transition-all
                      duration-700
                      group-hover:scale-[1.025]
                      group-hover:opacity-100
                    "
                                    />

                                    <div
                                        className="
                      absolute
                      bottom-3
                      left-3
                      z-20
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-black/70
                      px-3
                      py-1.5
                      backdrop-blur-md
                    "
                                    >
                                        <span
                                            className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-lime-400
                      "
                                        />

                                        <span
                                            className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/60
                      "
                                        >
                                            Certificate
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                  DESCRIPTION + DATE
              ================================================= */}

                            <div
                                className="
                  mt-8
                  flex
                  flex-col
                  gap-6
                  border-t
                  border-white/[0.06]
                  pt-6
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
                            >
                                <p
                                    className="
                    max-w-xl
                    text-xs
                    leading-6
                    text-white/35
                    sm:text-sm
                    sm:leading-7
                  "
                                >
                                    {certificate.description}
                                </p>

                                <div
                                    className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                    gap-6
                  "
                                >
                                    <span
                                        className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/25
                    "
                                    >
                                        {certificate.date}
                                    </span>

                                    <span
                                        className="
                      flex
                      items-center
                      gap-2
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/45
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                                    >
                                        View Certificate

                                        <FaArrowUpRightFromSquare
                                            className="
                        text-[8px]
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                                        />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* =========================================================
            FOOTER
        ========================================================= */}

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
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.08]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
                >
                    <span
                        className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-white/20
            "
                    >
                        Learning · Progress · Direction
                    </span>

                    <span
                        className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.35em]
              text-white/15
            "
                    >
                        02 CERTIFICATIONS
                    </span>
                </motion.div>
            </div>
        </section>
    );
}