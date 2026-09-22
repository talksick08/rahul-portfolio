import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "PERSONAL FINANCE",
    title: "Personal Expense Tracker",
    description:
      "A web-based personal finance application designed to track expenses, manage financial goals, monitor spending, and organize financial records.",
    tags: ["WEB APP", "DASHBOARD", "FINANCE"],
  },
  {
    number: "02",
    category: "STUDENT RECORDS",
    title: "Student Result Management System",
    description:
      "A web-based system designed to manage student academic records and results through a structured digital interface.",
    tags: ["WEB APP", "RESULT MANAGEMENT", "STUDENT RECORDS"],
  },
  {
    number: "03",
    category: "DEVELOPER TOOL",
    title: "Online Code Editor",
    description:
      "A browser-based coding environment designed to provide an interactive space for writing and working with code.",
    tags: ["CODE EDITOR", "BROWSER BASED", "DEVELOPER TOOL"],
  },
];

export default function Showcase() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================================
          BACKGROUND GRID
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =========================================================
          AMBIENT GLOW
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.025]
          blur-[110px]
          sm:h-[400px]
          sm:w-[400px]
          md:h-[500px]
          md:w-[500px]
          md:blur-[140px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          py-20
          sm:px-6
          sm:py-24
          md:px-12
          md:py-28
          lg:px-20
          lg:py-36
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span className="h-px w-7 bg-white/30 sm:w-10" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/40
                sm:text-[10px]
                sm:tracking-[0.4em]
              "
            >
              Selected Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-5xl
              text-[clamp(56px,17vw,96px)]
              font-medium
              leading-[0.88]
              tracking-[-0.07em]
              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
            "
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl sm:mt-8"
          >
            <p
              className="
                text-[13px]
                leading-6
                text-white/45
                sm:text-sm
                sm:leading-7
                md:text-base
              "
            >
              A selection of projects built while exploring web development,
              technology, and practical problem solving.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            PROJECT COUNT
        ======================================================== */}
        <div
          className="
            mb-3
            flex
            items-end
            justify-between
            border-b
            border-white/10
            pb-4
            sm:mb-5
            sm:pb-5
            md:mb-8
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/30
              sm:text-[10px]
              sm:tracking-[0.35em]
            "
          >
            03 Projects
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/20
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            2026
          </span>
        </div>

        {/* =======================================================
            PROJECTS
        ======================================================== */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                border-b
                border-white/10
              "
            >
              <div
                className="
                  relative
                  grid
                  gap-7
                  py-8
                  transition-all
                  duration-500
                  sm:gap-8
                  sm:py-10
                  md:grid-cols-[80px_1fr_1fr_120px]
                  md:items-center
                  md:py-14
                "
              >
                {/* =================================================
                    MOBILE PROJECT META
                ================================================== */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    md:block
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                      text-white/25
                      sm:text-xs
                    "
                  >
                    {project.number}
                  </span>

                  {/* Mobile category */}
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30
                      md:hidden
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================== */}
                <div>
                  {/* Desktop category */}
                  <p
                    className="
                      mb-2
                      hidden
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-white/35
                      md:block
                      md:mb-3
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      max-w-xl
                      text-[clamp(26px,7vw,36px)]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.045em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      sm:text-3xl
                      md:text-4xl
                      md:group-hover:translate-x-2
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* =================================================
                    DESCRIPTION + TAGS
                ================================================== */}
                <div className="max-w-lg">
                  <p
                    className="
                      text-[13px]
                      leading-6
                      text-white/40
                      transition-colors
                      duration-500
                      group-hover:text-white/60
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-1.5
                      sm:mt-5
                      sm:gap-2
                    "
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          border
                          border-white/10
                          px-2.5
                          py-1.5
                          text-[7px]
                          uppercase
                          tracking-[0.17em]
                          text-white/30
                          transition-colors
                          duration-300
                          group-hover:border-white/20
                          group-hover:text-white/50
                          sm:px-3
                          sm:text-[8px]
                          sm:tracking-[0.2em]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    FUTURE LINK
                ================================================== */}
                <div
                  className="
                    flex
                    items-center
                    justify-start
                    pt-1
                    md:justify-end
                    md:pt-0
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.22em]
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-white/60
                      sm:text-[9px]
                      sm:tracking-[0.25em]
                    "
                  >
                    View Project →
                  </span>
                </div>
              </div>

              {/* =================================================
                  HOVER LINE
              ================================================== */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-white/40
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            FOOTER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mt-12
            flex
            flex-col
            gap-3
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/25
            sm:mt-16
            sm:gap-5
            sm:text-[9px]
            sm:tracking-[0.3em]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>More projects in progress</span>

          <span>HIGHNHOES / RAHUL MAHANTA</span>
        </motion.div>
      </div>
    </section>
  );
}