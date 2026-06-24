import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { EXPERIENCE } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-[5%] max-w-[1200px] mx-auto">
      <FadeIn>
        <p className="font-mono text-xs text-accent2 tracking-[0.15em] uppercase mb-3">Career Path</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight mb-4">Experience</h2>
        <p className="text-slate-400 max-w-[520px] mb-14">
          Building real products in Agile environments, from React traineeship to full-stack engineering.
        </p>
      </FadeIn>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[18px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

        <div className="flex flex-col gap-0">
          {EXPERIENCE.map((e, i) => (
            <FadeIn key={e.role} delay={i * 0.1}>
              <div className="flex gap-8 pb-12">
                {/* Dot + connector */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-1">
                  <motion.div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      e.type === "edu"
                        ? "border-accent2 bg-accent2/10"
                        : "border-accent bg-accent/10"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.4, delay: i * 0.1 + 0.1 }}
                  >
                    {e.type === "edu" ? (
                      <GraduationCap size={16} className="text-accent2" />
                    ) : (
                      <Briefcase size={15} className="text-accent" />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-[1rem] font-bold">{e.role}</h3>
                    <span className="font-mono text-[11px] text-slate-500 tracking-wide">{e.date}</span>
                  </div>
                  <p className={`text-sm font-semibold mb-4 ${e.type === "edu" ? "text-accent2" : "text-accent"}`}>
                    {e.company}
                  </p>
                  <ul className="space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[0.875rem] text-slate-400">
                        <span className="text-accent mt-[3px] flex-shrink-0 text-xs">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
