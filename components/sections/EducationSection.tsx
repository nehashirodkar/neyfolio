import { GraduationCap } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const EDUCATION = [
  {
    degree: "Master of Science · Information Systems",
    school: "Syracuse University",
    location: "New York, USA",
    dates: "May 2025",
    accent: "from-cyan-400 to-violet-500",
  },
  {
    degree: "Bachelor of Engineering · Computer Science",
    school: "University of Mumbai",
    location: "Mumbai, India",
    dates: "June 2021",
    accent: "from-violet-400 to-fuchsia-500",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-8 relative z-10"
    >
      <FadeUp>
        <header className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Education
          </h2>
          <p className="text-base italic text-cyan-300/80">
            where I picked up the fundamentals
          </p>
        </header>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="grid sm:grid-cols-2 gap-5">
          {EDUCATION.map((e) => (
            <article
              key={e.school}
              className="rounded-2xl p-6 space-y-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${e.accent} flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
              >
                <GraduationCap className="w-6 h-6 text-slate-950" strokeWidth={2.2} />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-slate-100">
                  {e.school}
                </h3>
                <p className="text-base text-slate-300">{e.degree}</p>
                <p className="text-sm text-slate-500">
                  {e.location} · {e.dates}
                </p>
              </div>
            </article>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
