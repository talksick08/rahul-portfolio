export interface RouteSEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
  type?: "website" | "profile";
  structuredData: object;
}

const DOMAIN = "https://rahul08.vercel.app";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${DOMAIN}/#person`,
  name: "Rahul Mahanta",
  url: `${DOMAIN}/`,
  image: `${DOMAIN}/assets/og-image.jpg`,
  jobTitle: "Computer Science Student & Software Developer",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Galgotias University",
  },
  sameAs: [
    "https://github.com/talksick08",
    "https://www.linkedin.com/in/rahul-mahanta-57a16a325/",
    "https://www.instagram.com/highnhoes",
  ],
  knowsAbout: [
    "Computer Science",
    "Full-Stack Web Development",
    "Cybersecurity",
    "Python",
    "React",
    "TypeScript",
    "Flask",
    "PHP",
    "MySQL",
    "Machine Learning",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  url: `${DOMAIN}/`,
  name: "Rahul Mahanta Portfolio",
  description:
    "Portfolio of Rahul Mahanta — Computer Science Student, Web Developer & Cybersecurity Practitioner.",
  publisher: {
    "@id": `${DOMAIN}/#person`,
  },
  inLanguage: "en-US",
};

export const seoConfig: Record<string, RouteSEOConfig> = {
  home: {
    title: "Rahul Mahanta | Developer Portfolio & Computer Science Student",
    description:
      "Explore Rahul Mahanta's portfolio featuring web development, cybersecurity projects, Python, React, technical skills and software development work.",
    canonicalPath: "/",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [personSchema, websiteSchema],
    },
  },
  about: {
    title: "About Rahul Mahanta | Computer Science Student & Developer",
    description:
      "Learn about Rahul Mahanta, his academic background, technical interests, development journey and passion for cybersecurity and technology.",
    canonicalPath: "/about",
    type: "profile",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${DOMAIN}/about#webpage`,
      url: `${DOMAIN}/about`,
      name: "About Rahul Mahanta | Computer Science Student & Developer",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
      },
    },
  },
  experience: {
    title: "Rahul Mahanta | Experience & Technical Journey",
    description:
      "Explore Rahul Mahanta's technical experience, web development internship, academic background and professional development journey.",
    canonicalPath: "/experience",
    type: "profile",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${DOMAIN}/experience#webpage`,
      url: `${DOMAIN}/experience`,
      name: "Rahul Mahanta | Experience & Technical Journey",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
        hasOccupation: [
          {
            "@type": "Role",
            roleName: "Web Development Intern",
            startDate: "2026-08",
            organization: {
              "@type": "Organization",
              name: "Cybrexus Technology",
            },
          },
        ],
      },
    },
  },
  projects: {
    title: "Projects by Rahul Mahanta | Web Development & Cybersecurity",
    description:
      "Explore Rahul Mahanta's software development and cybersecurity projects, including THREATNEX AI intrusion detection system and Personal Expense Tracker.",
    canonicalPath: "/projects",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${DOMAIN}/projects#webpage`,
      url: `${DOMAIN}/projects`,
      name: "Projects by Rahul Mahanta | Web Development & Cybersecurity",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
      },
      hasPart: [
        {
          "@type": "SoftwareSourceCode",
          name: "Personal Expense Tracker",
          programmingLanguage: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
          description:
            "A full-stack personal finance application designed to help users organize financial activity, manage expense records, and gain real-time visibility into spending habits.",
          url: "https://expense-tracker-demo.ct.ws/",
        },
        {
          "@type": "SoftwareSourceCode",
          name: "THREATNEX — AI Intrusion Detection System",
          programmingLanguage: ["Python", "Flask", "Scikit-Learn", "Machine Learning"],
          description:
            "An intelligent network intrusion detection platform that uses machine learning to analyse network traffic and identify potentially suspicious activity in real-time.",
          url: "https://threatnex-ai-ids.vercel.app/",
        },
      ],
    },
  },
  skills: {
    title: "Technical Skills | Rahul Mahanta Developer Portfolio",
    description:
      "Explore Rahul Mahanta's technical skills across React, TypeScript, JavaScript, Python, Flask, PHP, MySQL, cybersecurity and machine learning.",
    canonicalPath: "/skills",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "@id": `${DOMAIN}/skills#webpage`,
      url: `${DOMAIN}/skills`,
      name: "Technical Skills | Rahul Mahanta Developer Portfolio",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
      },
    },
  },
  certifications: {
    title: "Certifications & Training | Rahul Mahanta",
    description:
      "Explore Rahul Mahanta's verified professional certificates, cybersecurity training, technical learning and job simulation achievements.",
    canonicalPath: "/certifications",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "@id": `${DOMAIN}/certifications#webpage`,
      url: `${DOMAIN}/certifications`,
      name: "Certifications & Training | Rahul Mahanta",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
      },
    },
  },
  contact: {
    title: "Contact Rahul Mahanta | Developer Collaboration & Opportunities",
    description:
      "Contact Rahul Mahanta for software development opportunities, technical collaborations, cybersecurity projects and professional discussions.",
    canonicalPath: "/contact",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${DOMAIN}/contact#webpage`,
      url: `${DOMAIN}/contact`,
      name: "Contact Rahul Mahanta | Developer Collaboration & Opportunities",
      mainEntity: {
        "@id": `${DOMAIN}/#person`,
      },
    },
  },
};
