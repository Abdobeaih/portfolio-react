import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { SKILLS } from "../data";

export function Skills() {
  const cats = Object.keys(SKILLS);
  const [active, setActive] = useState(cats[0]);

  return (
    <section id="skills" className="py-24 px-[5%] max-w-[1200px] mx-auto">
      <FadeIn>
        <p className="font-mono text-xs text-accent2 tracking-[0.15em] uppercase mb-3">Technical Arsenal</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight mb-4">Skills & Expertise</h2>
        <p className="text-slate-400 max-w-[520px] mb-12">
          Spanning the full MERN stack — from RTL-first Arabic interfaces to scalable Node.js APIs.
        </p>
      </FadeIn>

      {/* Category tabs */}
      <FadeIn delay={0.1}>
        <div className="flex gap-2 flex-wrap mb-10">
          {cats.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === cat
                  ? "text-white"
                  : "text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>
      </FadeIn>

      {/* Skill chips */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {SKILLS[active].map((sk, i) => (
            <motion.div
              key={sk}
              className="flex items-center justify-center text-center px-4 py-3 rounded-full bg-accent/8 border border-accent/20 text-[13px] font-semibold text-accent3 hover:bg-accent/15 hover:border-accent/40 hover:text-white transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.045 }}
              whileHover={{ scale: 1.05 }}
            >
              {sk}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
