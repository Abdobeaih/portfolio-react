import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GitFork, Link2 } from "lucide-react";

const ROLES = [
  "React Developer",
  "MERN Engineer",
  "UI/UX Builder",
  "TypeScript Expert",
  "RTL Specialist",
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-[5%] max-w-[1200px] mx-auto"
    >
      {/* Orbs */}
      <motion.div
        className="absolute top-[18%] right-[6%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[22%] w-44 h-44 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)" }}
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block font-mono text-[13px] text-accent tracking-[0.15em] uppercase px-4 py-[6px] border border-accent/40 rounded-full mb-6">
          Available for opportunities
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Hi, I'm{" "}
        <span className="text-accent">Abdelrahman</span>
        <br />
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIdx}
            className="text-accent2 inline-block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
          >
            {ROLES[roleIdx]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      {/* Sub */}
      <motion.p
        className="text-slate-400 text-[clamp(1rem,2vw,1.15rem)] max-w-[580px] leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        Full-Stack MERN Developer crafting scalable, bilingual Arabic/English web applications 
        with a focus on RTL-first design and performance-optimised user experiences 
        for Egyptian and Arabic markets.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
      >
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-indigo-500 transition-colors"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          View Projects <ArrowRight size={16} />
        </motion.a>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-accent/40 text-sm font-semibold hover:border-accent hover:bg-accent/10 transition-all"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in Touch
        </motion.a>
        <motion.a
          href="https://github.com/Abdobeaih"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm font-semibold text-slate-400 hover:text-white hover:border-white/25 transition-all"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <GitFork size={16} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/abdobeaih"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm font-semibold text-slate-400 hover:text-white hover:border-white/25 transition-all"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link2 size={16} />
        </motion.a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-transparent to-accent/50"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        scroll
      </motion.div>
    </section>
  );
}
