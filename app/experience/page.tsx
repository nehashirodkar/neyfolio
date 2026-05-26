import Link from "next/link";

const EXPERIENCES = [
  {
    company: "Intuit (QuickBooks)",
    role: "Software Engineer — GenAI & Backend",
    dates: "Jan 2025 – Present",
    location: "Remote, US",
    summary:
      "Architecting and scaling multi-agent AI services on Intuit's GenOS — LangGraph workflows handling 200K+ daily requests, RAG pipelines grounded in 500+ policy documents, and zero-downtime AWS deployments. The work saved analysts 4,000+ hours of manual review per year.",
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

export default function ExperiencePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-10 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-slate-400">
          5+ years across GenAI backend, data platforms, and payments. For
          detail-level bullets, grab my{" "}
          <Link
            href="/resume/neha-shirodkar-resume.pdf"
            target="_blank"
            className="text-cyan-300 hover:text-cyan-200 underline"
          >
            resume
          </Link>
          {" "}or ask the{" "}
          <Link
            href="/"
            className="text-cyan-300 hover:text-cyan-200 underline"
          >
            chatbot
          </Link>
          .
        </p>
      </header>

      <div className="space-y-5">
        {EXPERIENCES.map((exp) => (
          <article
            key={exp.company}
            className="rounded-2xl p-6 space-y-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition"
          >
            <header className="space-y-1.5">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h2 className="font-semibold text-lg text-slate-100">{exp.company}</h2>
                <span className="text-sm text-slate-500">
                  {exp.dates}
                </span>
              </div>
              <div className="text-sm text-slate-400">
                {exp.role} · {exp.location}
              </div>
            </header>
            <p className="text-sm text-slate-300 leading-relaxed">
              {exp.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-200 border border-cyan-400/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
