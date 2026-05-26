import { Sparkles, Brain, Code2, Database, Cloud, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  {
    title: "GenAI & Agentic AI",
    Icon: Sparkles,
    accent: "from-cyan-400 to-blue-500",
    items: [
      "LangGraph", "LangChain", "LlamaIndex", "CrewAI", "MCP (Model Context Protocol)",
      "GenOS", "OpenAI APIs", "AWS Bedrock (Claude)",
      "RAG pipelines", "Hybrid retrieval (BM25 + RRF)", "Semantic chunking",
      "Pinecone", "ChromaDB", "FAISS",
      "LangSmith", "RAGAS", "Guardrails AI",
      "Prompt engineering", "Tool calling", "HITL escalation", "Structured outputs (Pydantic)",
    ],
  },
  {
    title: "ML & Data Science",
    Icon: Brain,
    accent: "from-fuchsia-400 to-pink-500",
    items: [
      "PyTorch", "XGBoost", "scikit-learn", "Hugging Face",
      "BERT / RoBERTa / LLaMA fine-tuning",
      "SHAP explainability", "BERTopic",
      "MLflow", "Weights & Biases",
      "Pandas", "NumPy", "spaCy",
    ],
  },
  {
    title: "Languages & Frameworks",
    Icon: Code2,
    accent: "from-violet-400 to-indigo-500",
    items: [
      "Python (FastAPI, Django, Flask)",
      "Java (Spring Boot, JUnit)",
      "JavaScript (Node.js)", "TypeScript", "SQL",
    ],
  },
  {
    title: "Data & Backend",
    Icon: Database,
    accent: "from-emerald-400 to-teal-500",
    items: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "Kafka", "RabbitMQ", "Celery", "Apache NiFi",
      "GraphQL", "gRPC", "REST",
      "OAuth 2.0", "JWT", "RBAC",
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    accent: "from-sky-400 to-cyan-500",
    items: [
      "AWS (ECS, Lambda, S3, RDS, CloudWatch, API Gateway)",
      "Docker", "Kubernetes",
      "GitHub Actions", "Jenkins", "SonarQube",
    ],
  },
  {
    title: "Practices",
    Icon: ShieldCheck,
    accent: "from-slate-400 to-slate-600",
    items: [
      "PyTest", "JUnit5", "Testcontainers",
      "CI/CD", "A/B evaluation", "Zero-downtime deployments",
      "Agile / Scrum",
      "HIPAA / FHIR / DICOM", "PCI-DSS",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-10 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Skills
        </h1>
        <p className="text-slate-400">
          The toolbox. Heaviest specialty is in agentic AI and RAG systems.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {CATEGORIES.map((c) => (
          <section
            key={c.title}
            className="rounded-2xl p-5 space-y-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition"
          >
            <header className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.accent} flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
              >
                <c.Icon className="w-5 h-5 text-slate-950" />
              </div>
              <h2 className="font-semibold text-slate-100">{c.title}</h2>
            </header>
            <div className="flex flex-wrap gap-1.5">
              {c.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-900/60 text-slate-300 border border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
