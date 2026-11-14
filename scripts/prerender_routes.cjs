const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "..", "dist");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error("Error: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, "utf8");

const DOMAIN = "https://rahul08.vercel.app";
const DEFAULT_IMAGE = `${DOMAIN}/assets/og-image.jpg`;

const personSchema = {
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

const websiteSchema = {
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

const routes = [
  {
    path: "about",
    canonicalUrl: `${DOMAIN}/about`,
    title: "About Rahul Mahanta | Computer Science Student & Developer",
    description:
      "Learn about Rahul Mahanta, his academic background, technical interests, development journey and passion for cybersecurity and technology.",
    type: "profile",
    image: DEFAULT_IMAGE,
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
  {
    path: "experience",
    canonicalUrl: `${DOMAIN}/experience`,
    title: "Rahul Mahanta | Experience & Technical Journey",
    description:
      "Explore Rahul Mahanta's technical experience, web development internship, academic background and professional development journey.",
    type: "profile",
    image: DEFAULT_IMAGE,
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
  {
    path: "projects",
    canonicalUrl: `${DOMAIN}/projects`,
    title: "Projects by Rahul Mahanta | Web Development & Cybersecurity",
    description:
      "Explore Rahul Mahanta's software development and cybersecurity projects, including THREATNEX AI intrusion detection system and Personal Expense Tracker.",
    type: "website",
    image: DEFAULT_IMAGE,
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
  {
    path: "skills",
    canonicalUrl: `${DOMAIN}/skills`,
    title: "Technical Skills | Rahul Mahanta Developer Portfolio",
    description:
      "Explore Rahul Mahanta's technical skills across React, TypeScript, JavaScript, Python, Flask, PHP, MySQL, cybersecurity and machine learning.",
    type: "website",
    image: DEFAULT_IMAGE,
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
  {
    path: "certifications",
    canonicalUrl: `${DOMAIN}/certifications`,
    title: "Certifications & Training | Rahul Mahanta",
    description:
      "Explore Rahul Mahanta's verified professional certificates, cybersecurity training, technical learning and job simulation achievements.",
    type: "website",
    image: DEFAULT_IMAGE,
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
  {
    path: "contact",
    canonicalUrl: `${DOMAIN}/contact`,
    title: "Contact Rahul Mahanta | Developer Collaboration & Opportunities",
    description:
      "Contact Rahul Mahanta for software development opportunities, technical collaborations, cybersecurity projects and professional discussions.",
    type: "website",
    image: DEFAULT_IMAGE,
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
];

console.log("Generating static pre-rendered HTML for non-JS and social crawlers...");

for (const r of routes) {
  const routeDir = path.join(DIST_DIR, r.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${r.title}</title>`);

  // 2. Replace Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${r.description}" />`
  );

  // 3. Replace Canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${r.canonicalUrl}" />`
  );

  // 4. Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${r.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${r.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${r.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${r.type}" />`
  );

  // 5. Replace Twitter Cards
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${r.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${r.description}" />`
  );

  // 6. Replace JSON-LD
  html = html.replace(
    /<script\s+type="application\/ld\+json"\s+id="json-ld-route">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json" id="json-ld-route">${JSON.stringify(r.structuredData)}</script>`
  );

  const outPath = path.join(routeDir, "index.html");
  fs.writeFileSync(outPath, html, "utf8");
  // Also write clean URL flat file for static hosts
  const flatPath = path.join(DIST_DIR, `${r.path}.html`);
  fs.writeFileSync(flatPath, html, "utf8");
  console.log(`  [PRE-RENDERED] /${r.path} -> dist/${r.path}/index.html & dist/${r.path}.html`);
}

console.log("All 6 sub-routes statically pre-rendered with complete metadata for crawlers!");
