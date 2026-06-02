// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css"; // Mengimpor direktif global Tailwind CSS

// Menginisialisasi font Inter untuk teks body (mengoptimalkan CLS / Cumulative Layout Shift)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Menginisialisasi font Space Grotesk untuk memberikan vibes "tech/modern" pada heading ala Roobinium
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Konfigurasi Metadata Enterprise-Grade untuk SEO dan Social Share Optimization
export const metadata: Metadata = {
  title: {
    default: "Muhammad Febriansyah Ramadhan | Senior Front-End Engineer",
    template: "%s | debaidev",
  },
  description:
    "Portfolio of Muhammad Febriansyah Ramadhan, a Senior Front-End Engineer specializing in building pixel-perfect, high-performance web applications with React, Next.js, TypeScript, and scalable UI architectures.",
  keywords: [
    "Front-End Developer",
    "Web Developer Portfolio",
    "React Engineer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Solana Rust Developer",
    "UI/UX Engineering",
    "Creative Developer Portfolio",
  ],
  authors: [
    { name: "Muhammad Febriansyah Ramadhan", url: "https://debaidev.web.id" },
  ],
  creator: "Muhammad Febriansyah Ramadhan",
  metadataBase: new URL("https://debaidev.web.id"),

  // Open Graph (Penting untuk optimasi tampilan link saat dibagikan di LinkedIn / WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://debaidev.web.id",
    title: "Muhammad Febriansyah Ramadhan | Senior Front-End Engineer",
    description:
      "Crafting high-performance digital experiences with clean architecture, pixel-perfect UI, and seamless interactivity.",
    siteName: "debaidev",
    images: [
      {
        url: "/images/og-image.png", // Pastikan file ini ada di folder public/images/ untuk thumbnail share
        width: 1200,
        height: 630,
        alt: "Muhammad Febriansyah Ramadhan Portfolio Showcase",
      },
    ],
  },

  // Twitter / X Card Configuration
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Febriansyah Ramadhan | Senior Front-End Engineer",
    description:
      "Crafting high-performance digital experiences with clean architecture and seamless interactivity.",
    images: ["/images/og-image.png"],
  },

  // Memberitahu Crawler Google cara mengindeks halaman ini
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#050505] text-zinc-200 min-h-screen selection:bg-purple-500/30 font-sans">
        {/* Konten halaman utama (page.tsx) akan di-render di sini */}
        {children}
      </body>
    </html>
  );
}
