export type ProjectCategory =
  | "Web Development"
  | "Cybersecurity"
  | "AI & Machine Learning"
  | "Other";

export interface Project {
  id: string;
  number?: string;
  title: string;
  category: ProjectCategory;
  categoryBadge?: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  implementation: string;
  image?: string;
  alt?: string;
  technologies: string[];
  features: string[];
  status: string; // e.g. "Live Demo", "Production Demo", "Research Prototype"
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "expense-tracker",
    number: "01",
    title: "Personal Expense Tracker",
    category: "Web Development",
    categoryBadge: "Full-Stack Web Application",
    shortDescription:
      "A full-stack personal finance application designed to help users organize financial activity, manage expense records, and gain real-time visibility into personal spending habits.",
    fullDescription:
      "A full-stack personal finance web application built to streamline personal money management. Users can record and categorize income and expenditures, track daily cash flow, and visualize spending distributions. Designed with a clean separation of concerns, the application pairs an interactive frontend with a secure, transactional backend database.",
    problem:
      "Managing personal finances and tracking expenditures across disjointed spreadsheets often lacks immediate categorization, persistence, and clear visual breakdown of where funds are allocated.",
    implementation:
      "Engineered with a modular PHP backend communicating with a normalized relational MySQL database. Employs prepared statements for SQL injection prevention, dynamic HTML/CSS rendering for transaction records, and client-side JavaScript for instant sum calculations and live balance updates.",
    image: "/assets/projects/expense-tracker.png",
    alt: "Personal Expense Tracker — Full-Stack Web Application Showcase",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "CRUD transaction recording for daily expenses and incomes",
      "Dynamic category breakdowns and expense filtering",
      "Relational database schema with transactional consistency",
      "Responsive interface designed for desktop and mobile browsers",
    ],
    status: "Live Demo",
    liveUrl: "https://expense-tracker-demo.ct.ws/",
    githubUrl: "https://github.com/talksick08",
    featured: true,
  },
  {
    id: "threatnex",
    number: "02",
    title: "THREATNEX",
    category: "Cybersecurity",
    categoryBadge: "AI-Driven Cybersecurity",
    shortDescription:
      "An intelligent network intrusion detection platform that uses machine learning to analyse network traffic and identify potentially suspicious activity in real-time.",
    fullDescription:
      "An intelligent network intrusion detection system (IDS) that applies supervised machine learning to classify network traffic flows. Trained on the benchmark NSL-KDD dataset, THREATNEX evaluates protocol flags, service types, and packet lengths to detect potential intrusion attempts including Denial of Service (DoS), unauthorized remote-to-local access, and network probing.",
    problem:
      "Traditional signature-based intrusion detection often struggles against emerging or polymorphic network attacks. Network administrators require intelligent classification models capable of distinguishing benign traffic from malicious anomalies.",
    implementation:
      "Constructed using Python and Flask with an exported scikit-learn Random Forest classifier trained on the benchmark NSL-KDD intrusion dataset. Preprocesses incoming network flow attributes (protocols, flag states, byte counts), performs multi-class inference, and records anomaly incidents into an SQLite logging store with an interactive analytical dashboard.",
    image: "/assets/projects/threatnex.png",
    alt: "THREATNEX — AI-Driven Intrusion Detection System Showcase",
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Random Forest",
      "SQLite",
      "NSL-KDD Dataset",
    ],
    features: [
      "Multi-class network attack classification (DoS, Probe, R2L, U2R, Normal)",
      "Trained Random Forest machine learning pipeline on NSL-KDD benchmark",
      "Interactive web-based classification dashboard powered by Flask",
      "Structured incident logging with SQLite database",
    ],
    status: "Production Demo",
    liveUrl: "https://threatnex-ai-ids.vercel.app/",
    githubUrl: "https://github.com/talksick08",
    featured: true,
  },
];
