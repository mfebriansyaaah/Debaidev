// src/data/portfolio.ts
// Catatan: Tidak perlu mengimpor tipe data karena Project dan TechStackItem
// sudah dideklarasikan secara global di dalam src/types/index.d.ts[cite: 1]

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "SolXen: Decentralized Yield Optimizer",
    slug: "solxen-yield-optimizer",
    description:
      "A high-performance Web3 yield optimizer built on the Solana blockchain utilizing custom Rust smart contracts and an interactive React frontend.",
    detailedDescription:
      "SolXen solves the capital inefficiency problem in decentralized finance. Designed and engineered from scratch, the platform features a real-time tracking dashboard, automated vault compounding via Rust programs, and a seamless UI with ultra-low latency data streaming via WebSockets.",
    thumbnail: "/images/portfolio/solxen.png",
    tags: [
      "Solana",
      "Rust",
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
    ],
    liveUrl: "https://solxen.debaidev.web.id",
    githubUrl: "https://github.com/febriansyah/solxen-contracts",
    featured: true,
    category: "web3",
    metrics: {
      lighthouseScore: 98,
      stars: 142,
      usersCount: "12K+",
    },
  },
  {
    id: "proj-2",
    title: "SaaS Enterprise Core & Analytics Dashboard",
    slug: "saas-enterprise-dashboard",
    description:
      "An enterprise-grade full-stack administration suite featuring complex state management and a robust Node.js microservices backend.",
    detailedDescription:
      "A highly responsive administrative control center engineered for optimal data visualization. Features heavy multi-tenant role management, dynamic data caching using Redis, interactive drag-and-drop Bento Grid components, and sub-100ms API responses powered by an optimized Node.js core.",
    thumbnail: "/images/portfolio/saas-dashboard.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://dashboard.debaidev.web.id",
    githubUrl: "https://github.com/febriansyah/enterprise-dashboard",
    featured: true,
    category: "fullstack",
    metrics: {
      lighthouseScore: 96,
      stars: 89,
      usersCount: "2.5K",
    },
  },
  {
    id: "proj-3",
    title: "Nexus UI: High-Performance Component Library",
    slug: "nexus-ui-library",
    description:
      "An accessible, lightweight, and fluid component library optimized for Next.js and core web vitals.",
    detailedDescription:
      "Built out of a necessity for pixel-perfection and performance. Nexus UI is a fully headless, accessible (WAI-ARIA compliant) component setup geared towards extreme optimization, sub-2kb bundle sizes, and seamless Framer Motion micro-interactions.",
    thumbnail: "/images/portfolio/nexus-ui.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
    ],
    liveUrl: "https://nexus-ui.debaidev.web.id",
    githubUrl: "https://github.com/febriansyah/nexus-ui",
    featured: false,
    category: "frontend",
    metrics: {
      lighthouseScore: 100,
      stars: 310,
      usersCount: "400+",
    },
  },
];

export const techStacks: TechStackItem[] = [
  // Languages
  { name: "TypeScript", category: "language", proficiency: "expert" },
  { name: "JavaScript (ES6+)", category: "language", proficiency: "expert" },
  { name: "Rust", category: "language", proficiency: "advanced" },

  // Front-End
  { name: "React", category: "frontend", proficiency: "expert" },
  { name: "Next.js", category: "frontend", proficiency: "expert" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "expert" },
  { name: "Framer Motion", category: "frontend", proficiency: "advanced" },

  // Back-End & Web3
  { name: "Node.js", category: "backend", proficiency: "expert" },
  { name: "Express.js", category: "backend", proficiency: "expert" },
  { name: "Solana Programs", category: "web3", proficiency: "advanced" },

  // Tools & Others
  { name: "Git / GitHub", category: "tool", proficiency: "expert" },
  { name: "Docker", category: "tool", proficiency: "intermediate" },
];
