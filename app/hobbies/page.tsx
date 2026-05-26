import {
  Music,
  Mic,
  ChefHat,
  Sparkles,
  Code2,
  Brush,
  Palette,
  Scissors,
} from "lucide-react";

const HOBBIES = [
  {
    name: "Dance",
    Icon: Music,
    blurb: "How I shake off a hard debugging day.",
    accent: "from-fuchsia-400 to-pink-500",
  },
  {
    name: "Sing",
    Icon: Mic,
    blurb: "Mostly in the shower. Occasionally for an audience.",
    accent: "from-rose-400 to-fuchsia-500",
  },
  {
    name: "Cook",
    Icon: ChefHat,
    blurb: "Where I get to experiment without writing tests.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "Clean",
    Icon: Sparkles,
    blurb: "Tidy space, tidy mind. Yes, I find it relaxing.",
    accent: "from-sky-400 to-cyan-500",
  },
  {
    name: "Code",
    Icon: Code2,
    blurb: "Side projects on nights and weekends — this site is one of them.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Paint",
    Icon: Brush,
    blurb: "Sometimes acrylic, sometimes watercolor, always therapeutic.",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    name: "Design",
    Icon: Palette,
    blurb: "Visual design as the other half of how I think about products.",
    accent: "from-teal-400 to-emerald-500",
  },
  {
    name: "Crochet",
    Icon: Scissors,
    blurb: "Slow, tactile, deeply satisfying counterpoint to keyboards.",
    accent: "from-pink-400 to-rose-500",
  },
];

export default function HobbiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-10 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Hobbies
        </h1>
        <p className="text-slate-400">
          What I do when I&apos;m not staring at LangGraph traces.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {HOBBIES.map((h) => (
          <div
            key={h.name}
            className="group rounded-2xl p-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition space-y-3"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${h.accent} flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:scale-110 transition`}
            >
              <h.Icon className="w-6 h-6 text-slate-950" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-100">{h.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{h.blurb}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 pt-2">
        The blurbs above are my guesses — edit them in{" "}
        <code className="text-cyan-300">app/hobbies/page.tsx</code> or tell me
        how to rewrite them in your own voice.
      </p>
    </main>
  );
}
