// src/components/ui/BentoCard.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export const BentoCard = ({ children, className, innerClassName }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();

    // Hitung posisi mouse relatif terhadap kartu
    const x = e.clientX - left;
    const y = e.clientY - top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        "group relative rounded-3xl overflow-hidden",
        "border border-white/[0.08] bg-[#08080A]/80 backdrop-blur-md",
        "transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)]",
        className,
      )}
    >
      {/* Efek Lampu Sorot / Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Konten Kartu */}
      <div className={cn("relative z-10 p-6 h-full w-full flex flex-col justify-between", innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
};
