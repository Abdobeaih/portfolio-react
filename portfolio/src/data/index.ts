export const SKILLS: Record<string, string[]> = {
  Frontend: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap 5", "Framer Motion", "GSAP"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC"],
  Database: ["MongoDB", "PostgreSQL", "Supabase", "Prisma ORM"],
  State: ["Redux Toolkit", "Zustand", "Context API", "React Hooks"],
  Tools: ["Git / GitHub", "Vite", "Vercel", "Netlify", "VS Code", "npm"],
  Specialty: ["RTL / Arabic UI", "Bilingual i18n", "Monorepo", "WCAG A11y", "Mobile-First"],
};

export const PROJECTS = [
  {
    title: "Amazon Clone – E-Commerce Platform",
    badge: "Full Stack",
    desc: "Full e-commerce prototype with product listings, category filtering, dynamic cart, and a reusable TypeScript component library. Zero runtime type errors in production build.",
    tags: ["React.js", "TypeScript", "Redux", "Node.js"],
    link: "https://github.com/Abdobeaih",
  },
  {
    title: "كراون (Crown) Freelancer Platform",
    badge: "MERN · RTL",
    desc: "Arabic RTL luxury platform for Egyptian market. Monochrome black/white theme, 3D scroll-driven card carousel, animated user counter, and role-based dashboards (user/admin/company).",
    tags: ["React", "TypeScript", "MongoDB", "RTL", "Arabic"],
    link: "https://github.com/Abdobeaih",
  },
  {
    title: "حياة الفريلانسر – Freelancer Life",
    badge: "Full Stack · Monorepo",
    desc: "Full-stack monorepo (npm workspaces). Gold-and-black luxury identity, three membership tiers, discount workflows, referral & points system, digital ID cards, Prisma + PostgreSQL backend.",
    tags: ["Node.js", "Prisma", "PostgreSQL", "Zustand", "Vite"],
    link: "https://github.com/Abdobeaih",
  },

  {
    title: "Fresh Bites – Restaurant Website",
    badge: "Frontend · Lighthouse 90+",
    desc: "Pixel-perfect responsive restaurant website deployed on Netlify. CSS Grid/Flexbox, semantic HTML5, Lighthouse Performance score 90+ via optimised asset loading.",
    tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    link: "https://github.com/Abdobeaih",
  },

];

export const EXPERIENCE = [
  {
    date: "Jan 2026 – Jul 2026",
    role: "React Developer Trainee",
    company: "Digilians · Cairo, Egypt",
    type: "work",
    bullets: [
      "Built responsive web apps with React, TypeScript & Node.js, serving 10K+ monthly users",
      "Designed RESTful APIs with MongoDB, reducing data fetch latency by 30%",
      "Delivered pixel-perfect UIs in cross-functional Agile sprints",
      "Applied code splitting, lazy loading & caching for cross-browser performance",
    ],
  },
  {
    date: "Aug – Oct 2025",
    role: "Front-End Developer Intern – UI/UX",
    company: "NTI (National Telecommunication Institute) · Tanta",
    type: "work",
    bullets: [
      "Built fully responsive pages with strict mobile-first and WCAG principles",
      "Improved UX flows and cross-browser compatibility (Chrome, Firefox, Edge)",
      "Reduced page load time through UI/UX best practices",
      "Participated in Agile sprint planning, stand-ups, and code reviews",
    ],
  },
  {
    date: "Aug – Sep 2023",
    role: "Electrical Engineer Intern – HSE & Site Operations",
    company: "North Cairo Electricity Distribution Co. · Cairo",
    type: "work",
    bullets: [
      "Supported implementation of HSE protocols on active electrical distribution sites",
      "Conducted systematic site inspections, risk assessments and incident documentation",
    ],
  },
  {
    date: "Sep 2020 – May 2024",
    role: "B.Tech – Industrial Technology Education",
    company: "Suez University · Suez, Egypt",
    type: "edu",
    bullets: [
      "Grade: Good · Graduation Project (Smart Home Technologies): Excellent",
      "NTI Certified – UI/UX & Front-End Web Development (2025)",
    ],
  },
];

export const STATS = [
  { n: 6, suffix: "+", label: "Projects Shipped" },
  { n: 30, suffix: "%", label: "Latency Reduced" },
  { n: 10, suffix: "K+", label: "Users Served" },
  { n: 90, suffix: "+", label: "Lighthouse Score" },
];

export const CONTACT_INFO = [
  { icon: "mail", label: "Email", value: "abdobeaih43@gmail.com", href: "mailto:abdobeaih43@gmail.com" },
  { icon: "map-pin", label: "Location", value: "Zefta, Gharbia, Egypt", href: null },
  { icon: "github", label: "GitHub", value: "github.com/Abdobeaih", href: "https://github.com/Abdobeaih" },
  { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/abdobeaih", href: "https://linkedin.com/in/abdobeaih" },
  { icon: "phone", label: "Phone", value: "+20 109 020 5350", href: "tel:+201090205350" },
];
