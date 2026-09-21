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
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-12 lg:px-20 lg:py-36">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-white/30" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
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
              text-6xl
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
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
            className="mt-8 max-w-xl"
          >
            <p className="text-sm leading-7 text-white/45 md:text-base">
              A selection of projects built while exploring web development,
              technology, and practical problem solving.
            </p>
          </motion.div>
        </div>

        {/* Project count */}
        <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
            03 Projects
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            2026
          </span>
        </div>

        {/* Projects */}
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
              className="group relative border-b border-white/10"
            >
              <div
                className="
                  relative
                  grid
                  gap-8
                  py-10
                  transition-all
                  duration-500
                  md:grid-cols-[80px_1fr_1fr_120px]
                  md:items-center
                  md:py-14
                "
              >
                {/* Number */}
                <div className="self-start">
                  <span className="text-xs tracking-[0.2em] text-white/25">
                    {project.number}
                  </span>
                </div>

                {/* Main content */}
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-white/35">
                    {project.category}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-medium
                      tracking-[-0.04em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      md:text-4xl
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description + tags */}
                <div className="max-w-lg">
                  <p className="text-sm leading-7 text-white/40 transition-colors duration-500 group-hover:text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          border
                          border-white/10
                          px-3
                          py-1.5
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-white/30
                          transition-colors
                          duration-300
                          group-hover:border-white/20
                          group-hover:text-white/50
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Future link */}
                <div className="flex items-center md:justify-end">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-white/60
                    "
                  >
                    View Project →
                  </span>
                </div>
              </div>

              {/* Hover line */}
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mt-16
            flex
            flex-col
            gap-5
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/25
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>More projects in progress</span>

          <span>HIGHNHOES / RAHUL MAHANTA</span>
        </motion.div>
      </div>
    </section>
  );
}