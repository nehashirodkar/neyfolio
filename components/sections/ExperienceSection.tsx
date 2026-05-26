import FadeUp from "@/components/FadeUp";

const EXPERIENCES = [
  {
    company: "Intuit (QuickBooks)",
    role: "Software Engineer — GenAI & Backend",
    dates: "Jan 2025 – Present",
    location: "Remote, US",
    summary:
      "Architecting and scaling multi-agent AI services on Intuit's GenOS — LangGraph workflows handling 200K+ daily requests, RAG pipelines grounded in 500+ policy documents, and zero-downtime AWS deployments. Saved analysts 4,000+ hours of manual review per year.",
    tags: ["LangGraph", "FastAPI", "AWS Bedrock", "RAG", "PostgreSQL", "Claude"],
  },
  {
    company: "Infinite Infolab",
    role: "Software Engineer",
    dates: "Aug 2021 – Jul 2023",
    location: "Hybrid, India",
    summary:
      "Built a multi-tenant Customer Data Platform for enterprise lending and payments clients — consolidating 40M+ records, designing real-time sync with NiFi + Kafka, and bringing query latency from 900ms to under 200ms.",
    tags: ["Java", "Spring Boot", "Kafka", "Apache NiFi", "MySQL", "OAuth 2.0"],
  },
  {
    company: "Vivma Software Inc.",
    role: "Software Development Engineer",
    dates: "Aug 2019 – Jul 2021",
    location: "Remote, India",
    summary:
      "Backend services for a multi-client payments platform. Async order processing with Celery + RabbitMQ, MongoDB document storage for high-write workloads, and GraphQL APIs across 8+ partner integrations.",
    tags: ["Python", "Django", "Celery", "MongoDB", "GraphQL", "Podman"],
  },
];

type Exp = (typeof EXPERIENCES)[number];

function Card({ exp }: { exp: Exp }) {
  return (
    <article className="rounded-2xl p-6 space-y-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition">
      <header className="space-y-1.5">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h3 className="font-semibold text-xl text-slate-100">{exp.company}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-400/30 font-mono">
            {exp.dates}
          </span>
        </div>
        <div className="text-sm text-slate-400">
          {exp.role} · {exp.location}
        </div>
      </header>
      <p className="text-base text-slate-300 leading-relaxed">{exp.summary}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-200 border border-violet-400/25"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-12 relative z-10"
    >
      <FadeUp>
        <header className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-base italic text-cyan-300/80">
            the path so far — five years, three teams, a lot of late-night refactors
          </p>
        </header>
      </FadeUp>

      {/* Ladder: glowing rail down the center, cards alternating left and right.
          On mobile we collapse to a single column with the rail on the left. */}
      <div className="relative">
        {/* Rail */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={exp.company} className="relative">
                {/* Rung (horizontal connector, desktop only) */}
                <div
                  className={`hidden sm:block absolute top-8 ${
                    isLeft ? "right-1/2 mr-2.5" : "left-1/2 ml-2.5"
                  } w-12 h-px bg-gradient-to-${isLeft ? "l" : "r"} from-cyan-300 to-transparent`}
                />

                {/* Dot on the rail */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                </div>

                {/* Card — full-width on mobile (left of rail), alternating on desktop */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    isLeft
                      ? "sm:pr-[calc(50%+2.5rem)]"
                      : "sm:pl-[calc(50%+2.5rem)]"
                  }`}
                >
                  <FadeUp delay={i * 150}>
                    <Card exp={exp} />
                  </FadeUp>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
