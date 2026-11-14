export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  implementation: string;
  keyFeatures: string[];
  link: string;
  github?: string;
  src: string;
  alt: string;
  accent: "purple" | "cyan";
  tools: string[];
  deliverables: string[];
  stats: string;
}

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    subtitle: "Personal Finance & Web Application",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A full-stack personal finance application designed to help users organize financial activity, manage expense records, and gain real-time visibility into personal spending habits.",
    problem:
      "Managing personal finances and tracking expenditures across disjointed spreadsheets often lacks immediate categorization, persistence, and clear visual breakdown of where funds are allocated.",
    implementation:
      "Engineered with a modular PHP backend communicating with a normalized relational MySQL database. Employs prepared statements for SQL injection prevention, dynamic HTML/CSS rendering for transaction records, and client-side JavaScript for instant sum calculations.",
    keyFeatures: [
      "CRUD transaction recording for daily expenses and incomes",
      "Dynamic category breakdowns and expense filtering",
      "Relational database schema with transactional consistency",
      "Responsive interface designed for desktop and mobile browsers",
    ],
    link: "https://expense-tracker-demo.ct.ws/",
    github: "https://github.com/talksick08",
    src: "/assets/projects/expense-tracker.png",
    alt: "Personal Expense Tracker — Full-Stack Web Application Showcase",
    accent: "purple",
    tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    deliverables: [
      "Daily Expense & Income Tracking Ledger",
      "Categorized Expense Summaries",
      "Interactive Financial Dashboard",
      "Relational MySQL Database Architecture",
    ],
    stats: "PHP Backend • Relational MySQL Database • Real-Time Financial Calculations",
  },
  {
    id: "threatnex",
    title: "THREATNEX",
    subtitle: "AI-Driven Intrusion Detection System",
    category: "CYBERSECURITY · MACHINE LEARNING",
    description:
      "An intelligent network intrusion detection platform that uses machine learning to analyse network traffic and identify potentially suspicious activity. Built with a Random Forest model trained on the NSL-KDD dataset, the platform presents threat classification and security insights through an interactive dashboard.",
    problem:
      "Traditional signature-based intrusion detection often struggles against emerging or polymorphic network attacks. Network administrators require intelligent classification models capable of distinguishing benign traffic from malicious anomalies.",
    implementation:
      "Constructed using Python and Flask with an exported scikit-learn Random Forest classifier trained on the benchmark NSL-KDD intrusion dataset. Preprocesses incoming network flow attributes (protocols, flag states, byte counts), performs multi-class inference, and records anomaly incidents into an SQLite logging store.",
    keyFeatures: [
      "Multi-class network attack classification (DoS, Probe, R2L, U2R, Normal)",
      "Trained Random Forest machine learning pipeline on NSL-KDD benchmark",
      "Interactive web-based classification dashboard powered by Flask",
      "Structured incident logging with SQLite database",
    ],
    link: "https://threatnex-ai-ids.vercel.app/",
    github: "https://github.com/talksick08",
    src: "/assets/projects/threatnex.png",
    alt: "THREATNEX — AI-Driven Intrusion Detection System Showcase",
    accent: "cyan",
    tools: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Random Forest",
      "SQLite",
      "NSL-KDD dataset",
    ],
    deliverables: [
      "Random Forest Multi-Class ML Model",
      "Real-Time Network Traffic Classifier",
      "Interactive Threat Monitoring Console",
      "SQLite Incident & Alert Logging Database",
    ],
    stats: "Trained on NSL-KDD Benchmark • Multi-Class Threat Classification • Flask & SQLite Backend",
  },
];

export { PROJECTS, type Project } from "./projects";
