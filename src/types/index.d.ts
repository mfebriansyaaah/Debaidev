import { ReactNode } from "react";

declare global {
  interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    detailedDescription?: string;
    thumbnail: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    category: "frontend" | "backend" | "web3" | "fullstack";
    metrics?: {
      lighthouseScore?: number;
      stars?: number;
      usersCount?: string;
    };
  }

  interface TechStackItem {
    name: string;
    category: "frontend" | "backend" | "language" | "web3" | "tool";
    iconName?: string;
    proficiency?: "expert" | "advanced" | "intermediate";
  }

  interface BentoItemConfig {
    id: string;
    colSpan:
      | "md:col-span-1"
      | "md:col-span-2"
      | "md:col-span-3"
      | "md:col-span-4";
    rowSpan: "md:row-span-1" | "md:row-span-2" | "md:row-span-3";
    className?: string;
  }
}

export {};
