import { FadeIn } from "./FadeIn";
import { useCounter } from "../hooks/useCounter";
import { STATS } from "../data";

function StatCard({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(n);
  return (
    <div className="bg-card border border-white/5 rounded-2xl p-6 text-center">
      <div className="font-mono text-[2.5rem] font-bold text-accent leading-none mb-2">
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <StatCard {...s} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
