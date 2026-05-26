"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Activity, Database, Clock, type LucideIcon } from "lucide-react";

type Stat = {
  Icon: LucideIcon;
  /** Target number the counter animates up to. */
  num: number;
  /** Text appended after the number (e.g. "+", "K+", "M+"). */
  suffix: string;
  label: string;
  accent: string;
};

const STATS: Stat[] = [
  { Icon: Calendar, num: 5,    suffix: "+",  label: "Years Experience",        accent: "from-cyan-400 to-blue-500" },
  { Icon: Activity, num: 200,  suffix: "K+", label: "Daily AI Requests",       accent: "from-violet-400 to-fuchsia-500" },
  { Icon: Database, num: 40,   suffix: "M+", label: "Records Handled",         accent: "from-emerald-400 to-teal-500" },
  { Icon: Clock,    num: 4000, suffix: "+",  label: "Analyst Hours Saved / Year", accent: "from-amber-400 to-orange-500" },
];

/** Counts from 0 to `to` once the element first scrolls into view. */
function useCountUp(to: number, duration = 1500): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          obs.disconnect();
          const start = performance.now();
          const tick = () => {
            const elapsed = performance.now() - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setValue(Math.floor(to * eased));
            if (t < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return [ref, value];
}

function StatCard({ s, index }: { s: Stat; index: number }) {
  const [ref, value] = useCountUp(s.num, 1500 + index * 200);
  const formatted = value >= 1000 ? value.toLocaleString() : value.toString();

  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition flex flex-col items-start gap-3"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
      >
        <s.Icon className="w-6 h-6 text-slate-950" strokeWidth={2.2} />
      </div>
      <div className="space-y-1">
        <div className="text-3xl sm:text-4xl font-bold text-slate-100 leading-none tabular-nums">
          {formatted}
          {s.suffix}
        </div>
        <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
          {s.label}
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <StatCard key={s.label} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
