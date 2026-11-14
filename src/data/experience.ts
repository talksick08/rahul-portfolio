export interface FocusArea {
  number?: string;
  title: string;
  desc: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  category: string;
  institutionOrOrg: string;
  role: string;
  periodOrCategory: string;
  statusBadge: string;
  isActive?: boolean;
  description: string;
  keyAreas: string[];
  detailedFocusAreas: FocusArea[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "galgotias",
    number: "01",
    category: "EDUCATION",
    institutionOrOrg: "Galgotias University",
    role: "Computer Science Student",
    periodOrCategory: "Currently pursuing",
    statusBadge: "Currently pursuing",
    isActive: true,
    description:
      "Building a foundation in computer science through programming, database management, operating systems, computer networks and software development.",
    keyAreas: [
      "Programming Fundamentals",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Development",
      "Cybersecurity Fundamentals",
    ],
    detailedFocusAreas: [
      {
        number: "01",
        title: "Programming Fundamentals",
        desc: "Core algorithmic thinking, data structures, and foundational programming paradigms.",
      },
      {
        number: "02",
        title: "Database Management Systems",
        desc: "Relational schema design, SQL querying, data normalization, and integrity constraints.",
      },
      {
        number: "03",
        title: "Operating Systems",
        desc: "Process scheduling, virtual memory management, concurrency, file systems, and system-level operations.",
      },
      {
        number: "04",
        title: "Computer Networks",
        desc: "OSI and TCP/IP protocol suites, packet inspection, IP routing, network sockets, and client-server architectures.",
      },
      {
        number: "05",
        title: "Software Development",
        desc: "Practical application architecture, modular programming, and software engineering methodologies.",
      },
      {
        number: "06",
        title: "Cybersecurity Fundamentals",
        desc: "Core defensive security principles (CIA triad), network defense fundamentals, threat analysis, and risk mitigation.",
      },
    ],
  },
  {
    id: "cybrexus",
    number: "02",
    category: "PROFESSIONAL EXPERIENCE",
    institutionOrOrg: "Cybrexus Technology",
    role: "Web Development Intern",
    periodOrCategory: "August 2026 – Present",
    statusBadge: "Active Internship",
    isActive: true,
    description:
      "Gaining practical exposure to web development, frontend implementation, responsive interfaces and structured application development workflows.",
    keyAreas: [
      "Frontend Development",
      "Responsive Web Design",
      "Application Development",
      "Version Control and Development Workflows",
    ],
    detailedFocusAreas: [
      {
        number: "01",
        title: "Frontend Development",
        desc: "Implementing interactive UI components, state management, and modern component frameworks.",
      },
      {
        number: "02",
        title: "Responsive Web Design",
        desc: "Crafting semantic HTML structures, accessible layouts, and responsive cross-browser interfaces.",
      },
      {
        number: "03",
        title: "Application Development",
        desc: "Working with practical application components, build systems, and development workflows.",
      },
      {
        number: "04",
        title: "Version Control and Development Workflows",
        desc: "Collaborative Git version control, structured code reviews, and disciplined team engineering practices.",
      },
    ],
  },
];
