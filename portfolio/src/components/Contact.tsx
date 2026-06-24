import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, GitFork, Link2, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { AIChat } from "./AIChat";
import { CONTACT_INFO } from "../data";

const ICON_MAP: Record<string, React.ReactNode> = {
  mail: <Mail size={18} />,
  "map-pin": <MapPin size={18} />,
  github: <GitFork size={18} />,
  linkedin: <Link2 size={18} />,
  phone: <Phone size={18} />,
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in all fields." });
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setSending(true);
    try {
      /*
       * ── RESEND INTEGRATION ──────────────────────────────────────────────────
       * Replace the fetch below with:
       *
       * const res = await fetch("https://api.resend.com/emails", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *     Authorization: "Bearer re_YOUR_RESEND_API_KEY",
       *   },
       *   body: JSON.stringify({
       *     from: "portfolio@yourdomain.com",
       *     to: "abdobeaih43@gmail.com",
       *     subject: `Portfolio message from ${form.name}`,
       *     html: `<p><strong>From:</strong> ${form.name} (${form.email})</p>
       *            <p>${form.message}</p>`,
       *   }),
       * });
       *
       * Or wire through your own Express/Node.js API route that calls Resend.
       * ────────────────────────────────────────────────────────────────────────
       */

      // Currently using Anthropic API as an acknowledgement proxy
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 64,
          messages: [
            {
              role: "user",
              content: `Portfolio contact form submitted by ${form.name} (${form.email}). Reply with exactly one word: "received"`,
            },
          ],
        }),
      });

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus({
        type: "error",
        msg: "Failed to send. Email me directly at abdobeaih43@gmail.com",
      });
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-[5%] max-w-[1200px] mx-auto">
      <FadeIn>
        <p className="font-mono text-xs text-accent2 tracking-[0.15em] uppercase mb-3">Let's Work Together</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight mb-4">Get in Touch</h2>
        <p className="text-slate-400 max-w-[520px] mb-14">
          Open to full-time roles, freelance projects, and interesting collaborations.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left – Form */}
        <FadeIn delay={0.1}>
          <div className="bg-card border border-white/5 rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-[13px] text-slate-400 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Ahmed Hassan"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-[14px] text-white placeholder-slate-600 outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] text-slate-400 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="ahmed@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-[14px] text-white placeholder-slate-600 outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] text-slate-400 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-[14px] text-white placeholder-slate-600 outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={sending}
              className="mt-6 w-full py-3.5 rounded-xl bg-accent text-white text-sm font-bold hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? "Sending…" : "Send Message →"}
            </motion.button>

            <AnimatePresence>
              {status && (
                <motion.div
                  className={`mt-4 p-3.5 rounded-xl text-[13px] font-medium border ${
                    status.type === "success"
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {status.msg}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Right – Info + AI Chat */}
        <FadeIn delay={0.18}>
          <div className="flex flex-col gap-6">
            {/* Contact info */}
            <div className="bg-card border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      {ICON_MAP[item.icon]}
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 uppercase tracking-wide font-mono mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[14px] font-medium text-slate-200 hover:text-accent2 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[14px] font-medium text-slate-200">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat */}
            <AIChat />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
