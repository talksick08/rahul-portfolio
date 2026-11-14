
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "PERSONAL FINANCE · WEB APPLICATION",
    title: "Personal Expense Tracker",
    shortTitle: "Manage your money. Understand your spending.",
    description:
      "A full-stack personal finance management application designed to help users track daily expenses, manage income and transactions, and monitor their spending habits. Built with PHP and MySQL, it provides an organized way to record financial activity and gain better visibility into personal finances.",
    tags: ["PHP", "MYSQL", "HTML", "CSS", "JAVASCRIPT"],
    link: "https://expense-tracker-demo.ct.ws/",
    accent: "from-emerald-400/20 via-teal-400/5 to-transparent",
    accentText: "text-emerald-300",
    accentBorder: "group-hover:border-emerald-400/40",
    accentGlow: "group-hover:shadow-emerald-500/10",
    symbol: "₹",
    action: "EXPLORE PROJECT",
  },
  {
    number: "02",
    category: "CYBERSECURITY · MACHINE LEARNING",
    title: "THREATNEX",
    shortTitle: "Intelligent threat detection. Real-time security insights.",
    description:
      "An AI-powered network security platform that analyzes network traffic to identify and classify potential cyber threats. Powered by a Random Forest machine learning model trained on the NSL-KDD dataset, it detects suspicious activities such as DoS attacks, probing, and brute-force attempts, presenting threat insights through an interactive security dashboard.",
    tags: [
      "PYTHON",
      "FLASK",
      "SCIKIT-LEARN",
      "RANDOM FOREST",
      "SQLITE",
      "NSL-KDD",
    ],
    link: "https://threatnex-ai-ids.vercel.app/",
    accent: "from-cyan-400/20 via-blue-400/5 to-transparent",
    accentText: "text-cyan-300",
    accentBorder: "group-hover:border-cyan-400/40",
    accentGlow: "group-hover:shadow-cyan-500/10",
    symbol: "⌘",
    action: "EXPLORE PROJECT",
  },
];

export default function Showcase() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 md:px-12 lg:px-20 lg:py-36">

        {/* Section heading */}
        <div className="mb-14 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 sm:mb-8"
          >
            <span className="h-px w-8 bg-white/40" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/40 sm:text-[10px]">
              Selected Work · 2026
            </span>
          </motion.div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(55px,12vw,110px)] font-medium leading-[0.85] tracking-[-0.075em]"
            >
              Selected
              <br />
              <span className="text-white/35">Projects.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-sm text-[13px] leading-7 text-white/45 sm:text-sm md:pb-2"
            >
              A collection of things I've built through experimentation,
              problem-solving, and a passion for technology. From web
              applications to intelligent cybersecurity solutions.
            </motion.p>
          </div>
        </div>

        {/* Project overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center justify-between border-y border-white/10 py-4"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
            Featured Projects
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/35 sm:text-[10px]">
            02 / 02
          </span>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <motion.a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live project`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
              }}
              className={`group relative flex min-h-[490px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090909] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[470px] sm:p-8 lg:min-h-[530px] lg:p-9 ${project.accentBorder} ${project.accentGlow}`}
            >
              {/* Card gradient */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Decorative background symbol */}
              <div className="pointer-events-none absolute -right-5 top-20 select-none text-[190px] font-semibold leading-none text-white/[0.025] transition-all duration-700 group-hover:scale-110 group-hover:text-white/[0.045] sm:text-[230px]">
                {project.symbol}
              </div>

              {/* Top row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] text-white/35">
                  PROJECT / {project.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Featured
                </span>
              </div>

              {/* Project identity */}
              <div className="relative z-10 mt-16 sm:mt-20">
                <p
                  className={`mb-4 text-[9px] font-medium uppercase tracking-[0.25em] ${project.accentText}`}
                >
                  {project.category}
                </p>

                <h3 className="max-w-lg text-[clamp(34px,6vw,48px)] font-medium leading-[0.98] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/70 sm:text-base">
                  {project.shortTitle}
                </p>

                <p className="mt-4 max-w-lg text-[12px] leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/60 sm:text-[13px] sm:leading-7">
                  {project.description}
                </p>
              </div>

              {/* Technology stack */}
              <div className="relative z-10 mt-7">
                <p className="mb-3 text-[8px] uppercase tracking-[0.25em] text-white/30">
                  Technologies Used
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-[8px] tracking-[0.12em] text-white/50 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/75 sm:text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom action */}
              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                <span
                  className={`text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${project.accentText}`}
                >
                  {project.action}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                  ↗
                </span>
              </div>

              {/* Bottom hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${project.accent} transition-all duration-700 group-hover:w-full`}
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[8px] uppercase tracking-[0.25em] text-white/25 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-[9px]"
        >
          <span>More ideas. More projects. Always building.</span>
          <span>RAHUL MAHANTA · PORTFOLIO</span>
        </motion.div>
      </div>
    </section>
  );
}
