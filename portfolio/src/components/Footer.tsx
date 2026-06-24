import { GitFork, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono text-accent2 text-sm">{"<AB />"}</span>
          <p className="text-slate-500 text-[13px] mt-1">
            Full-Stack MERN Developer · Egypt
          </p>
        </div>

        <p className="text-slate-600 text-[12px] font-mono text-center">
          Built with React · TypeScript · Framer Motion · Tailwind CSS
        </p>

        <div className="flex gap-4">
          {[
            { icon: <GitFork size={18} />, href: "https://github.com/Abdobeaih", label: "GitHub" },
            { icon: <Link2 size={18} />, href: "https://linkedin.com/in/abdobeaih", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:abdobeaih43@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
