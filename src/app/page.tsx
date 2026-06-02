import { BentoCard } from "@/components/ui/BentoCard";
import { MapPin, Briefcase, ChevronRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-[410px] bg-[#050505] text-zinc-200 p-4 lg:p-12 font-sans selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-85 transition-opacity">
            <span className="text-[#D9F9DF]">debai</span><span className="text-[#B2A4FF]">dev</span><span className="text-[#D5E5D5]">.</span>
          </Link>
          <a
            href="https://wa.me/+6285691895208"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-purple-500/50 hover:text-white block text-center"
          >
            Let's Talk
          </a>
        </header>

        <div className="grid grid-cols-1 xs:grid-cols-2 intro:grid-cols-3 intro:grid-rows-2 gap-4 auto-rows-[minmax(180px,_auto)]">
          <BentoCard
            className="xs:col-span-2 intro:col-span-1 intro:row-span-2 h-fit intro:h-full flex flex-col justify-between p-8 bg-gradient-to-br from-white/[0.03] to-transparent"
            innerClassName="p-0"
          >
            <div className="mb-[10px]">
              <p className="text-[#8C00FF] font-medium mb-3 tracking-wide text-sm uppercase">
                Software Engineer
              </p>
              <h1 className="text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
                Crafting pixel-perfect <br className="hidden intro:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  digital experiences.
                </span>
              </h1>
            </div>
            <div>
              <p className="hidden min-[598px]:block text-zinc-400 text-base leading-relaxed max-w-md">
                Hi, I'm Muhammad Febriansyah Ramadhan. I specialize in building
                scalable, SEO-friendly, and highly interactive web interfaces
                that bridge the gap between complex logic and elegant design.
              </p>
            </div>
          </BentoCard>

          <a
            href="/CV_M.Febriansyah_Full-Stack_Updated.pdf"
            download="CV_M.Febriansyah_Full-Stack_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="xs:col-span-1 intro:col-span-1 intro:row-span-1 block"
          >
            <BentoCard className="h-full w-full flex flex-col justify-center items-center text-center group cursor-pointer">
              <div className="relative flex h-4 w-4 mb-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#050505] animate-pulse"></span>
              </div>
              <h3 className="text-white text-base max-[793px]:text-[19px] font-semibold mb-1">Open for Work</h3>
              <p className="text-zinc-500 text-sm">Full-time Full-Stack Roles</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs text-[#B7A3E3] font-medium">
                View Resume <ChevronRight size={14} />
              </div>
            </BentoCard>
          </a>

          <BentoCard className="xs:col-span-1 intro:col-span-1 intro:row-span-1 flex flex-col justify-between p-6">
            <MapPin className="text-zinc-600 mb-2" size={24} />
            <div>
              <p className="text-zinc-400 text-sm mb-1">Based in</p>
              <h3 className="text-white font-semibold text-lg">
                Jakarta, ID
              </h3>
            </div>
          </BentoCard>

          <BentoCard className="xs:col-span-2 intro:col-span-2 intro:row-span-1 flex flex-col justify-center p-6 intro:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-purple-400" size={20} />
              <h3 className="text-white font-semibold">Engineering Arsenal</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "React", url: "https://react.dev/" },
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
                { name: "Rust", url: "https://rust-lang.org/" },
                { name: "Solana", url: "https://solana.com/" },
                { name: "Go", url: "https://go.dev/" },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-zinc-300 hover:bg-white/10 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </main>
  );
}
