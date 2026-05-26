import {
  Music, Mic, ChefHat, Sparkles, Code2, Brush, Scissors,
} from "lucide-react";

const HOBBIES = [
  { name: "Dance",   Icon: Music,    blurb: "How I shake off a hard debugging day.",                              accent: "from-fuchsia-400 to-pink-500",      glow: "rgba(236,72,153,0.5)" },
  { name: "Sing",    Icon: Mic,      blurb: "Mostly in the shower. Occasionally for an audience.",                accent: "from-rose-400 to-fuchsia-500",      glow: "rgba(244,114,182,0.5)" },
  { name: "Cook",    Icon: ChefHat,  blurb: "Where I get to experiment without writing tests.",                   accent: "from-amber-400 to-orange-500",      glow: "rgba(251,146,60,0.5)" },
  { name: "Clean",   Icon: Sparkles, blurb: "Tidy space, tidy mind. Yes, I find it relaxing.",                    accent: "from-sky-400 to-cyan-500",          glow: "rgba(34,211,238,0.5)" },
  { name: "Code",    Icon: Code2,    blurb: "Side projects on nights and weekends — this site is one of them.",  accent: "from-cyan-400 to-blue-500",         glow: "rgba(96,165,250,0.5)" },
  { name: "Paint",   Icon: Brush,    blurb: "Sometimes acrylic, sometimes watercolor, always therapeutic.",      accent: "from-violet-400 to-indigo-500",     glow: "rgba(167,139,250,0.5)" },
  { name: "Crochet", Icon: Scissors, blurb: "Slow, tactile, deeply satisfying counterpoint to keyboards.",       accent: "from-pink-400 to-rose-500",         glow: "rgba(244,114,182,0.5)" },
];

const N = HOBBIES.length;

/** Planet-style hobby — circular gradient surface with the icon in the center,
 *  name floating below, blurb appearing on hover. Wobbles gently like other cards. */
function HobbyPlanet({ h, delay }: { h: (typeof HOBBIES)[number]; delay: number }) {
  return (
    <div
      className="hobby-wobble flex flex-col items-center text-center group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* The planet itself */}
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${h.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        style={{
          boxShadow: `0 0 35px ${h.glow}, inset -10px -10px 30px rgba(0,0,0,0.35), inset 8px 8px 25px rgba(255,255,255,0.18)`,
        }}
      >
        {/* Highlight glow for that "lit from one side" planet feel */}
        <div className="absolute top-3 left-4 w-8 h-8 rounded-full bg-white/30 blur-md pointer-events-none" />
        <h.Icon className="w-10 h-10 text-slate-950 relative z-10" strokeWidth={2} />
      </div>
      {/* Name + blurb below the planet */}
      <h3 className="mt-4 font-semibold text-lg text-slate-100">{h.name}</h3>
      <p className="mt-1.5 text-sm text-slate-300 leading-relaxed max-w-[210px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {h.blurb}
      </p>
    </div>
  );
}

export default function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="max-w-6xl mx-auto px-6 py-16 sm:py-24 space-y-10 relative z-10"
    >
      <header className="space-y-2">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hobbies
        </h2>
        <p className="text-base italic text-cyan-300/80">
          evidence I leave my desk occasionally
        </p>
      </header>

      {/* DESKTOP — 7 planets in a horizontal zigzag, no connecting line */}
      <div className="hidden lg:block relative h-[520px] pt-4">
        {HOBBIES.map((h, i) => {
          const isTop = i % 2 === 0;
          const xPercent = ((i + 0.5) / N) * 100;
          return (
            <div
              key={h.name}
              className="absolute -translate-x-1/2"
              style={{
                left: `${xPercent}%`,
                top: isTop ? "0" : "auto",
                bottom: isTop ? "auto" : "0",
              }}
            >
              <HobbyPlanet h={h} delay={i * -0.6} />
            </div>
          );
        })}
      </div>

      {/* MOBILE / TABLET — wrap planets in a grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 justify-items-center pt-4">
        {HOBBIES.map((h, i) => (
          <HobbyPlanet key={h.name} h={h} delay={i * -0.6} />
        ))}
      </div>
    </section>
  );
}
