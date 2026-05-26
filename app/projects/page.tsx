import Link from "next/link";

const PROJECTS = [
  {
    name: "MCP-Powered AML/KYC Compliance Agent",
    dates: "May 2026 – Present",
    stack: [
      "Python", "LangGraph", "MCP", "LangSmith", "ChromaDB", "FastAPI", "Claude",
    ],
    summary:
      "An agentic compliance assistant exposing 3 financial-compliance tools (entity resolution, AML risk scoring, BSA clause lookup) to a Claude Sonnet agent via MCP. Drove citation accuracy from 42% to 96% through LangSmith-driven prompt and retrieval tuning, while cutting per-query cost by 39%. Includes human-in-the-loop escalation, audit trail, and 48 PyTest cases.",
  },
  {
    name: "Mental Health Discourse Analyzer",
    dates: "Jan 2026 – Feb 2026",
    stack: ["Python", "RoBERTa", "BERTopic", "FastAPI", "MLflow", "Hugging Face Spaces"],
    summary:
      "Fine-tuned RoBERTa on 7.8K Reddit posts to classify mental-health distress severity (0.91 accuracy, 0.90 macro F1 despite 3:1 class imbalance). Used BERTopic for unsupervised theme extraction. The model never sees subreddit names — designed to generalize from post content alone rather than memorize weak-label cues.",
  },
  {
    name: "Clinical Re-Admission Risk Predictor",
    dates: "Oct 2025 – Dec 2025",
    stack: ["Python", "XGBoost", "SHAP", "scikit-learn", "FastAPI", "MLflow", "Hugging Face Spaces"],
    summary:
      "30-day hospital readmission predictor on 100K+ patient encounters using XGBoost + SMOTE — AUC 0.64, consistent with the published ceiling for this dataset. Surfaced per-patient top-5 risk drivers via SHAP and tuned the decision threshold against a clinical rule. Held the line on honest evaluation: no data leakage, no inflated metrics.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-10 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-slate-400">
          Recent work in agentic AI, NLP, and ML. Ask the{" "}
          <Link
            href="/"
            className="text-cyan-300 hover:text-cyan-200 underline"
          >
            chatbot
          </Link>{" "}
          for deeper detail on any of these.
        </p>
      </header>

      <div className="space-y-5">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl p-6 space-y-4 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition"
          >
            <header className="space-y-2">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h2 className="font-semibold text-lg text-slate-100">{p.name}</h2>
                <span className="text-sm text-slate-500">{p.dates}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-200 border border-violet-400/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </header>
            <p className="text-sm text-slate-300 leading-relaxed">{p.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
