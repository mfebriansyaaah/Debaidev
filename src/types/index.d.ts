// src/types/index.d.ts

import { ReactNode } from "react";

declare global {
  // Konten utama untuk studi kasus portofolio (React, Node.js, Rust/Solana, dll)
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
    // Metrik tambahan untuk membuktikan dampak engineering kamu ke rekruter
    metrics?: {
      lighthouseScore?: number;
      stars?: number;
      usersCount?: string;
    };
  }

  // Tipe data untuk arsenal teknologi agar tidak terjadi typo saat mapping data
  interface TechStackItem {
    name: string;
    category: "frontend" | "backend" | "language" | "web3" | "tool";
    iconName?: string; // Menyimpan string nama icon dari lucide-react
    proficiency?: "expert" | "advanced" | "intermediate";
  }

  // Abstraksi untuk konfigurasi Bento Grid dinamis jika ingin dikontrol via data layer
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

// Pastikan file ini diperlakukan sebagai modul global oleh TypeScript compiler
export {};
