export interface SkillItem {
  name: string;
  category: string;
  tag: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "FRONTEND DEVELOPMENT",
    shortTitle: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces with modern client-side standards.",
    skills: [
      {
        name: "HTML5",
        category: "frontend",
        tag: "Markup",
        context: "Semantic document structure, accessibility standards, and SEO architecture.",
      },
      {
        name: "CSS3",
        category: "frontend",
        tag: "Styling",
        context: "Responsive fluid layouts, Flexbox, Grid, custom properties, and keyframe animations.",
      },
      {
        name: "JavaScript",
        category: "frontend",
        tag: "Core Language",
        context: "ES6+ asynchronous workflows, DOM manipulation, event handling, and API integration.",
      },
      {
        name: "React",
        category: "frontend",
        tag: "Library",
        context: "Component-driven architecture, state hooks, reactive interfaces, and life-cycle management.",
      },
      {
        name: "TypeScript",
        category: "frontend",
        tag: "Type System",
        context: "Static type safety, interfaces, strict generics, and scalable codebase architecture.",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        tag: "Framework",
        context: "Utility-first design systems, responsive breakpoints, and dark mode theming.",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "BACKEND DEVELOPMENT",
    shortTitle: "Backend",
    description: "Developing robust server-side services, request lifecycles, and backend integrations.",
    skills: [
      {
        name: "PHP",
        category: "backend",
        tag: "Server Language",
        context: "Server-side scripting, authentication session management, and MySQL database connection.",
      },
      {
        name: "Python",
        category: "backend",
        tag: "Core Language",
        context: "Data analysis pipelines, backend scripting, automation, and machine learning integration.",
      },
      {
        name: "Flask",
        category: "backend",
        tag: "Microframework",
        context: "RESTful route routing, model endpoint exposure, lightweight backend architectures, and telemetry.",
      },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "DATABASES",
    shortTitle: "Databases",
    description: "Structured relational data models, transactional schemas, and query optimization.",
    skills: [
      {
        name: "MySQL",
        category: "databases",
        tag: "RDBMS",
        context: "Relational database schema design, normalized tables, complex joins, and transactional records.",
      },
      {
        name: "SQLite",
        category: "databases",
        tag: "Embedded DB",
        context: "Lightweight local storage, incident logging, alert tracking, and local development persistence.",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "CYBERSECURITY",
    shortTitle: "Cybersecurity",
    description: "Defensive concepts, network traffic inspection, threat intelligence, and systems defense.",
    skills: [
      {
        name: "Networking Fundamentals",
        category: "cybersecurity",
        tag: "Protocols",
        context: "TCP/IP suite, packet routing, DNS, subnetting, ports, and socket communication concepts.",
      },
      {
        name: "Cybersecurity Fundamentals",
        category: "cybersecurity",
        tag: "Defensive Security",
        context: "CIA triad, Identity and Access Management (IAM), defense-in-depth, and attack surface mitigation.",
      },
      {
        name: "Network Intrusion Detection",
        category: "cybersecurity",
        tag: "IDS Systems",
        context: "Telemetry inspection, anomaly detection, signature recognition, and live attack stream monitoring.",
      },
      {
        name: "Threat Classification",
        category: "cybersecurity",
        tag: "Incident Analysis",
        context: "Categorizing attack types including DoS, probing, unauthorized access, and brute-force attempts.",
      },
      {
        name: "Security Monitoring Concepts",
        category: "cybersecurity",
        tag: "SOC & Telemetry",
        context: "Log analysis, real-time alert dispatching, event correlation, and defensive console interfaces.",
      },
    ],
  },
  {
    id: "machine-learning",
    number: "05",
    title: "MACHINE LEARNING",
    shortTitle: "Machine Learning",
    description: "Practical predictive algorithms, model training pipelines, and dataset evaluation.",
    skills: [
      {
        name: "Scikit-learn",
        category: "machine-learning",
        tag: "ML Library",
        context: "Feature preprocessing, model training pipelines, cross-validation, and performance metrics evaluation.",
      },
      {
        name: "Random Forest",
        category: "machine-learning",
        tag: "Ensemble Classifier",
        context: "Decision tree aggregation, multi-class threat classification, and high-accuracy anomaly detection.",
      },
      {
        name: "Machine Learning Fundamentals",
        category: "machine-learning",
        tag: "Data Science",
        context: "Supervised classification, feature scaling, training/test splits, and confusion matrix evaluation.",
      },
      {
        name: "NSL-KDD Dataset",
        category: "machine-learning",
        tag: "Benchmark Telemetry",
        context: "Structured benchmark dataset for evaluating network intrusion detection systems and traffic features.",
      },
    ],
  },
  {
    id: "tools",
    number: "06",
    title: "DEVELOPMENT TOOLS",
    shortTitle: "Tools & Env",
    description: "Version control workflows, local runtime stacks, and modern developer tooling.",
    skills: [
      {
        name: "Git",
        category: "tools",
        tag: "VCS",
        context: "Branching strategies, commit hygiene, rebasing, merge conflict resolution, and history management.",
      },
      {
        name: "GitHub",
        category: "tools",
        tag: "Collaboration",
        context: "Repository hosting, open-source collaboration, pull request workflows, and deployment automation.",
      },
      {
        name: "VS Code",
        category: "tools",
        tag: "Code Editor",
        context: "Primary development environment with custom TypeScript, Python, and frontend tooling setups.",
      },
      {
        name: "Antigravity IDE",
        category: "tools",
        tag: "Agentic IDE",
        context: "Advanced agentic coding environment, pair programming workflows, and autonomous system verification.",
      },
      {
        name: "MAMP",
        category: "tools",
        tag: "Local Server",
        context: "Local Apache, PHP, and MySQL stack orchestration for full-stack web application development.",
      },
      {
        name: "Vite",
        category: "tools",
        tag: "Build Tool",
        context: "Next-generation ESM dev server, fast Hot Module Replacement, and optimized Rollup production bundling.",
      },
    ],
  },
];

// =======================================================================
// DEDICATED /skills PAGE EDITORIAL ARCHITECTURE
// Verified technologies strictly adhering to authentic work and projects
// =======================================================================
export interface EditorialSkill {
  name: string;
  tag: string;
  description: string;
  implementation: string;
  iconKey: string;
}

export interface EditorialSkillSection {
  id: string;
  number: string;
  kicker: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  isSpecial?: boolean;
  specialBadge?: string;
  specialNote?: string;
  skills: EditorialSkill[];
}

export const EDITORIAL_SKILL_SECTIONS: EditorialSkillSection[] = [
  {
    id: "frontend",
    number: "01",
    kicker: "01 — CLIENT ARCHITECTURE",
    title: "FRONTEND DEVELOPMENT",
    shortTitle: "Frontend",
    subtitle: "Component systems, responsive engineering, and modern client-side standards.",
    skills: [
      {
        name: "React",
        tag: "UI Architecture",
        description: "Component-driven user interfaces, reactive state management, custom hooks, and lifecycles.",
        implementation: "Dynamic SPA state & modular UI component design",
        iconKey: "react",
      },
      {
        name: "TypeScript",
        tag: "Type System",
        description: "Static type safety, explicit interface contracts, strict generics, and scalable codebases.",
        implementation: "End-to-end typed props & robust build-time safety",
        iconKey: "typescript",
      },
      {
        name: "JavaScript",
        tag: "Core Language",
        description: "Modern ES6+ syntax, asynchronous workflows, DOM manipulation, and REST API integration.",
        implementation: "Client-side interactivity & asynchronous events",
        iconKey: "javascript",
      },
      {
        name: "HTML5",
        tag: "Markup",
        description: "Semantic document structure, web accessibility (ARIA) standards, and SEO architecture.",
        implementation: "Accessible semantic structure across all devices",
        iconKey: "html5",
      },
      {
        name: "CSS3",
        tag: "Styling",
        description: "Responsive fluid design, Flexbox, Grid, custom properties, and keyframe animations.",
        implementation: "Fluid responsive breakpoints & hardware acceleration",
        iconKey: "css3",
      },
      {
        name: "Tailwind CSS",
        tag: "Utility Framework",
        description: "Utility-first design token workflows, custom component variants, and dark mode styling.",
        implementation: "Rapid, consistent design system implementation",
        iconKey: "tailwind",
      },
    ],
  },
  {
    id: "backend-databases",
    number: "02",
    kicker: "02 — SYSTEMS & PERSISTENCE",
    title: "BACKEND & DATABASES",
    shortTitle: "Backend & DB",
    subtitle: "Server runtimes, RESTful microservices, and structured relational persistence.",
    skills: [
      {
        name: "Python",
        tag: "Core Language",
        description: "Backend scripting, automated data processing pipelines, and machine learning integration.",
        implementation: "Data ingestion, telemetry analysis & model pipelines",
        iconKey: "python",
      },
      {
        name: "PHP",
        tag: "Server Language",
        description: "Server-side scripting, request lifecycles, session authentication, and database connections.",
        implementation: "Full-stack transactional web application backend",
        iconKey: "php",
      },
      {
        name: "Flask",
        tag: "Microframework",
        description: "RESTful route routing, model endpoint exposure, lightweight architectures, and telemetry.",
        implementation: "Lightweight inference API & alert dispatching",
        iconKey: "flask",
      },
      {
        name: "MySQL",
        tag: "Relational RDBMS",
        description: "Relational database schema design, normalized tables, complex joins, and transaction records.",
        implementation: "Structured schema design & transactional persistence",
        iconKey: "mysql",
      },
      {
        name: "SQLite",
        tag: "Embedded DB",
        description: "Lightweight local storage, incident logging, alert tracking, and local development persistence.",
        implementation: "Embedded telemetry logging & local cache persistence",
        iconKey: "sqlite",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "03",
    kicker: "03 — DEFENSIVE PRACTICE",
    title: "CYBERSECURITY",
    shortTitle: "Cybersecurity",
    subtitle: "Network traffic auditing, vulnerability assessments, and automated intrusion detection.",
    isSpecial: true,
    specialBadge: "SPECIALIZED DEFENSE",
    specialNote: "Defensive engineering methodology combining network protocol analysis, active vulnerability scanning, and real-time packet inspection evaluated against standard traffic benchmarks.",
    skills: [
      {
        name: "Linux",
        tag: "CLI & Systems",
        description: "Command-line environments, process auditing, permissions, shell workflows, and system administration.",
        implementation: "Security audit environment & server administration",
        iconKey: "linux",
      },
      {
        name: "Metasploit",
        tag: "Security Framework",
        description: "Penetration testing methodology, vulnerability scanning, security auditing, and exploit verification.",
        implementation: "Defensive vulnerability evaluation & security audits",
        iconKey: "metasploit",
      },
      {
        name: "Network Security",
        tag: "Protocols & Auditing",
        description: "TCP/IP suite, packet routing, DNS, subnetting, ports, and traffic inspection protocols.",
        implementation: "Traffic inspection & protocol security verification",
        iconKey: "network-security",
      },
      {
        name: "Threat Analysis",
        tag: "Vulnerability Modeling",
        description: "Categorizing attack vectors including DoS, probing, and brute-force attempts; anomaly correlation.",
        implementation: "Attack classification & risk surface reduction",
        iconKey: "threat-analysis",
      },
      {
        name: "Intrusion Detection",
        tag: "IDS & Telemetry",
        description: "Live traffic monitoring, packet flow analysis, anomaly threshold detection, and defensive logging.",
        implementation: "Real-time threat monitoring & alert automation",
        iconKey: "intrusion-detection",
      },
    ],
  },
  {
    id: "ai-machine-learning",
    number: "04",
    kicker: "04 — INTELLIGENT SYSTEMS",
    title: "AI & MACHINE LEARNING",
    shortTitle: "AI & ML",
    subtitle: "Predictive algorithms, ensemble classification, and empirical dataset evaluation.",
    skills: [
      {
        name: "Scikit-learn",
        tag: "ML Library",
        description: "Feature preprocessing, standard scaling, training/test splits, and model cross-validation.",
        implementation: "Feature engineering & end-to-end model training",
        iconKey: "scikit-learn",
      },
      {
        name: "Random Forest",
        tag: "Ensemble Classifier",
        description: "Decision tree aggregation, ensemble voting, multi-class threat classification, and high accuracy.",
        implementation: "Core classification engine for the THREATNEX IDS",
        iconKey: "random-forest",
      },
      {
        name: "Machine Learning",
        tag: "Predictive Systems",
        description: "Supervised classification workflows, confusion matrices, precision/recall scoring, and model tuning.",
        implementation: "Supervised classification & performance evaluation",
        iconKey: "machine-learning",
      },
      {
        name: "Data Analysis",
        tag: "Statistical Evaluation",
        description: "Exploratory data analysis, telemetry feature correlation, distribution profiling, and data cleaning.",
        implementation: "Dataset profiling & telemetry pattern extraction",
        iconKey: "data-analysis",
      },
    ],
  },
  {
    id: "development-tools",
    number: "05",
    kicker: "05 — WORKFLOW & ENVIRONMENT",
    title: "DEVELOPMENT TOOLS",
    shortTitle: "Dev Tools",
    subtitle: "Version control workflows, collaborative code review, and modern developer tooling.",
    skills: [
      {
        name: "Git",
        tag: "Version Control",
        description: "Distributed version control, atomic commits, branch workflows, rebasing, and history tracking.",
        implementation: "Clean commit hygiene & distributed branch workflows",
        iconKey: "git",
      },
      {
        name: "GitHub",
        tag: "Collaboration",
        description: "Remote repository management, pull request reviews, project tracking, and deployment automation.",
        implementation: "Repository hosting & open-source collaboration",
        iconKey: "github",
      },
      {
        name: "VS Code",
        tag: "Primary Editor",
        description: "Configured developer environment with TypeScript language servers, linting, debugging, and terminal.",
        implementation: "Full-stack code authoring & local debugging",
        iconKey: "vscode",
      },
      {
        name: "Vite",
        tag: "Build Tool",
        description: "Next-generation ESM dev server, lightning-fast Hot Module Replacement, and optimized Rollup bundling.",
        implementation: "Fast developer iteration & production bundling",
        iconKey: "vite",
      },
    ],
  },
];

