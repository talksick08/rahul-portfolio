export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  category: string;
  type: string;
  status: "verified" | "in-progress" | "practice";
  statusLabel: string;
  issueDate?: string;
  verificationCode?: string;
  description: string;
  skills: string[];
  image?: string; // Genuine certificate asset path if available
  hasCertificateAsset: boolean;
}

export const VERIFIED_CERTIFICATIONS: CertificationItem[] = [
  {
    id: "deloitte-tech",
    number: "01",
    title: "Technology Job Simulation",
    issuer: "Deloitte × Forage",
    category: "Software Development & Architecture",
    type: "Certificate of Completion",
    status: "verified",
    statusLabel: "Verified Credential",
    issueDate: "September 9, 2026",
    verificationCode: "cjlaJZmkSM9hhnNj9",
    description:
      "Completed Deloitte's Technology Job Simulation through Forage, gaining practical exposure to technology-focused tasks involving coding, architecture evaluation, and practical development problem-solving.",
    skills: ["Coding", "System Design", "Practical Problem Solving", "Architecture Analysis"],
    image: "/assets/deloitte-certificate.png",
    hasCertificateAsset: true,
  },
  {
    id: "tata-cybersecurity",
    number: "02",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata × Forage",
    category: "Cybersecurity & IAM",
    type: "Certificate of Completion",
    status: "verified",
    statusLabel: "Verified Credential",
    issueDate: "September 8, 2026",
    verificationCode: "6aa06eff39a1f8e666123763",
    description:
      "Completed TATA's Cybersecurity Analyst Job Simulation through Forage, working through practical tasks covering Identity and Access Management (IAM) fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.",
    skills: ["IAM Fundamentals", "Security Strategy", "Platform Integration", "Access Control"],
    image: "/assets/tata-certificate.png",
    hasCertificateAsset: true,
  },
];

export const LEARNING_PATHWAYS: CertificationItem[] = [
  {
    id: "google-cybersecurity",
    number: "03",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    category: "Cybersecurity Professional Foundation",
    type: "Professional Learning Pathway",
    status: "in-progress",
    statusLabel: "Pursuing / Learning Pathway",
    description:
      "Comprehensive curriculum covering cybersecurity foundations, security models, Linux commands, SQL query structures, Python security automation, SIEM telemetry tools, and incident response playbooks.",
    skills: ["Network Security", "Linux & Bash", "SQL Analysis", "Python Automation", "SIEM Telemetry"],
    hasCertificateAsset: false,
  },
  {
    id: "isc2-cc",
    number: "04",
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    category: "Foundational Cybersecurity Certification",
    type: "Certification Candidate",
    status: "in-progress",
    statusLabel: "Active Study / Candidate",
    description:
      "Targeted preparation across foundational security domains: Security Principles, Business Continuity & Disaster Recovery, Access Controls Concepts, Network Security, and Security Operations.",
    skills: ["Security Principles", "Access Controls", "Network Security", "Incident Response", "Security Operations"],
    hasCertificateAsset: false,
  },
  {
    id: "cisco-ccst",
    number: "05",
    title: "Cisco Certified Support Technician (CCST) — Cybersecurity",
    issuer: "Cisco",
    category: "Technical Network Security",
    type: "Certification Candidate",
    status: "in-progress",
    statusLabel: "Active Study / Candidate",
    description:
      "Focusing on foundational security principles, network connectivity defense, endpoint threat assessment, vulnerability mitigation, and essential defensive support operations.",
    skills: ["Network Defense", "Endpoint Security", "Vulnerability Mitigation", "Protocol Inspection"],
    hasCertificateAsset: false,
  },
  {
    id: "fortinet-fcf",
    number: "06",
    title: "Fortinet Certified Fundamentals (FCF)",
    issuer: "Fortinet Training Institute",
    category: "Threat Landscape & Network Defense",
    type: "Learning Pathway",
    status: "in-progress",
    statusLabel: "Pursuing / Learning Pathway",
    description:
      "Developing deep conceptual knowledge of the modern cyber threat landscape, firewall architectures, enterprise network security concepts, and multi-layered defense techniques.",
    skills: ["Threat Landscape", "Firewall Architectures", "Defense in Depth", "Enterprise Security"],
    hasCertificateAsset: false,
  },
];

export const HANDS_ON_PRACTICE = {
  id: "tryhackme-practice",
  platform: "TryHackMe",
  title: "Hands-on Cybersecurity Labs & Practice",
  category: "Interactive Lab Environments",
  type: "Practical Hands-on Training",
  status: "practice" as const,
  statusLabel: "Continuous Practice",
  description:
    "Active participation in interactive rooms, defensive security labs, network exploration, and hands-on vulnerability analysis. Practical application of foundational knowledge in simulated security environments.",
  domains: [
    "Defensive Security Fundamentals",
    "Network Protocol Inspection & Wireshark",
    "Linux CLI & System Administration",
    "Web Application Vulnerabilities (OWASP Top 10)",
    "Incident Investigation & Log Analysis",
  ],
};

