import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-[5%] max-w-[1200px] mx-auto">
      <FadeIn>
        <p className="font-mono text-xs text-accent2 tracking-[0.15em] uppercase mb-3">What I've Built</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight mb-4">Key Projects</h2>
        <p className="text-slate-400 max-w-[520px] mb-14">
          From RTL Arabic platforms to full-stack monorepos — production-ready products for real users.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.07}>
            <motion.div
              className="flex flex-col gap-4 bg-card border border-white/5 rounded-2xl p-7 h-full"
              whileHover={{
                y: -4,
                borderColor: "rgba(99,102,241,0.4)",
                boxShadow: "0 0 40px rgba(99,102,241,0.12)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-accent2 tracking-[0.1em] uppercase">
                  {p.badge}
                </span>
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-accent2 transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                >
                  <ExternalLink size={15} />
                </motion.a>
              </div>

              <h3 className="text-[1.05rem] font-bold leading-snug">{p.title}</h3>
              <p className="text-[0.875rem] text-slate-400 leading-relaxed flex-1">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-3 py-1 bg-accent2/8 border border-accent2/20 rounded text-accent2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
