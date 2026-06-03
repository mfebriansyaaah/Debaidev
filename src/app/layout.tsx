import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Debaidev - Software Engineer",
    template: "%s | Debaidev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://debaidev.web.id",
    title: "Debaidev - Software Engineer",
    description:
      "Crafting high-performance digital experiences with clean architecture, pixel-perfect UI, and seamless interactivity.",
    siteName: "debaidev",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Febriansyah Ramadhan Portfolio Showcase",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Debaidev - Software Engineer",
    description:
      "Crafting high-performance digital experiences with clean architecture and seamless interactivity.",
    images: ["/images/og-image.png"],
  },

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
        {children}
      </body>
    </html>
  );
}
