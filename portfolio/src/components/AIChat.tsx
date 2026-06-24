import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const SYSTEM = `You are a helpful AI assistant embedded in Abdelrahman Beaih's developer portfolio.
Abdelrahman is a Full-Stack MERN Developer from Egypt (Zefta, Gharbia), specializing in:
- React.js, TypeScript, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Supabase, Prisma ORM
- Framer Motion, GSAP, Tailwind CSS, Bootstrap 5, Redux Toolkit, Zustand
- Bilingual Arabic/English RTL-first interfaces for Egyptian/Arabic markets
- Monorepo architecture (npm workspaces), JWT Auth, RBAC

Experience:
- React Developer Trainee at Digilians (Jan 2026 – Jul 2026), Cairo — serving 10K+ users, reduced API latency 30%
- Front-End Developer Intern at NTI (Aug–Oct 2025) — mobile-first, WCAG, Agile sprints
- B.Tech Industrial Technology Education, Suez University (2020–2024), Grade: Good, Graduation Project: Excellent

Projects: Amazon Clone, كراون (Crown) freelancer platform, حياة الفريلانسر (Freelancer Life), FreelancePro, Fresh Bites restaurant site, مستقلين (Mustakileen) platform migration.

Contact: abdobeaih43@gmail.com | +20 109 020 5350 | github.com/Abdobeaih | linkedin.com/in/abdobeaih

Answer questions about his skills, projects, experience, and background concisely and helpfully. Be friendly and professional. If asked who built this portfolio, say it was built with React, TypeScript, Framer Motion, Tailwind CSS and Vite.`;

interface Message {
  role: "user" | "ai";
  text: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi! I'm Abdelrahman's AI assistant. Ask me anything about his skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = useCallback(async () => {
    const q = input.trim();
    if (!q || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", text: q }];
    setMessages(next);
    setLoading(true);

    try {
      const apiMessages = next
        .filter((m, idx) => !(m.role === "ai" && idx === 0))
        .map((m) => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM,
          messages: apiMessages,
        }),
      });
      const data = await res.json();
      const text =
        data.content?.map((c: { text?: string }) => c.text ?? "").join("") ||
        "Sorry, couldn't get a response.";
      setMessages((m) => [...m, { role: "ai", text }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, loading]);

  return (
    <div className="bg-card border border-white/5 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5 text-[13px] font-semibold">
        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
        AI Assistant — Ask about Abdelrahman
      </div>

      {/* Messages */}
      <div className="p-4 min-h-[200px] max-h-[300px] overflow-y-auto flex flex-col gap-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            className={`text-[13px] leading-relaxed px-4 py-2.5 rounded-xl max-w-[86%] ${
              m.role === "user"
                ? "bg-accent/15 border border-accent/25 self-end text-white"
                : "bg-white/4 border border-white/8 self-start text-slate-300"
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            {m.text}
          </motion.div>
        ))}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="text-[13px] px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 self-start text-slate-500 max-w-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Thinking…
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 px-4 py-3 border-t border-white/5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about skills, projects, experience…"
          className="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 text-[13px] text-white placeholder-slate-600 outline-none focus:border-accent/50 transition-colors"
        />
        <motion.button
          onClick={send}
          disabled={loading || !input.trim()}
          className="bg-accent text-white px-4 py-2 rounded-lg text-[13px] font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Send size={14} />
        </motion.button>
      </div>
    </div>
  );
}
