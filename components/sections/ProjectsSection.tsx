import { ExternalLink } from "lucide-react";
import FadeUp from "@/components/FadeUp";

type Project = {
  name: string;
  dates: string;
  stack: string[];
  summary: string;
  href: string;
  /** Direct Unsplash photo URL — specific photo IDs chosen to match each
   *  project's theme. (Loremflickr's loose Flickr tag matching was unreliable —
   *  e.g. "gym,weights,treadmill" returned a cat statue.) */
  image: string;
};

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=400&fit=crop&q=80`;

const AI_PROJECTS: Project[] = [
  {
    name: "Financial Policy Q&A",
    dates: "Apr 2026 – May 2026",
    stack: ["LangGraph", "Pinecone", "AWS Bedrock", "Claude", "RAGAS"],
    summary:
      "Multi-agent RAG over financial policies with hybrid BM25 + dense retrieval on Pinecone, LangGraph planner/retrieval/tool nodes, and RAGAS evaluation.",
    href: "https://github.com/nehashirodkar/financial-policy-qa",
    image: UNSPLASH("1554224155-6726b3ff858f"), // dollar bills
  },
  {
    name: "MCP Compliance Assistant",
    dates: "May 2026",
    stack: ["LangGraph", "MCP", "LangSmith", "ChromaDB", "Claude"],
    summary:
      "Agentic compliance assistant — Claude agent calling MCP tools for entity resolution, AML risk scoring, and BSA lookups. Citation accuracy 42% → 96% via LangSmith tuning.",
    href: "https://github.com/nehashirodkar/mcp-compliance-assistant",
    image: UNSPLASH("1518770660439-4636190af475"), // circuit board / connectivity
  },
  {
    name: "Spran AI — Product Spec Generator",
    dates: "Apr 2026 – May 2026",
    stack: ["Python", "OpenAI", "Streamlit"],
    summary:
      "GenAI app that turns raw product ideas into structured specs (features, materials, manufacturing). My crossover muscle between AI engineering and product thinking.",
    href: "https://github.com/nehashirodkar/spran-ai",
    image: UNSPLASH("1490481651871-ab68de25d43d"), // fashion / clothing rack
  },
];

const ML_PROJECTS: Project[] = [
  {
    name: "Mental Health Discourse Analyzer",
    dates: "Jan 2026 – Feb 2026",
    stack: ["RoBERTa", "BERTopic", "FastAPI", "MLflow"],
    summary:
      "Fine-tuned RoBERTa on 7.8K Reddit posts — 0.91 accuracy, 0.90 macro F1 despite 3:1 imbalance. Designed to generalize from post content, never seeing subreddit names.",
    href: "https://github.com/nehashirodkar/mental-health-discourse-analyzer",
    image: UNSPLASH("1506126613408-eca07ce68773"), // meditation / mindfulness
  },
  {
    name: "Clinical Re-Admission Risk Predictor",
    dates: "Oct 2025 – Dec 2025",
    stack: ["XGBoost", "SMOTE", "SHAP", "FastAPI"],
    summary:
      "30-day readmission predictor on 100K+ UCI Diabetes encounters — XGBoost + SMOTE, AUC 0.64 (published ceiling), SHAP for per-patient risk drivers.",
    href: "https://github.com/nehashirodkar/clinical-re-admission-risk-predictor",
    image: UNSPLASH("1576091160550-2173dba999ef"), // hospital corridor
  },
  {
    name: "Netflix-style Recommendation Engine",
    dates: "May 2026",
    stack: ["PyTorch", "SVD", "Neural CF", "TF-IDF"],
    summary:
      "End-to-end recsys on MovieLens 1M comparing SVD, content-based, Neural CF, and a hybrid ensemble. W&B for experiment tracking; served on Hugging Face.",
    href: "https://github.com/nehashirodkar/netflix-content-recommendation-engine",
    image: UNSPLASH("1574375927938-d5a98e8ffe85"), // TV showing Netflix logo — verified Unsplash photo
  },
];

const DATA_PROJECTS: Project[] = [
  {
    name: "Syracuse Lead Risk Analyzer",
    dates: "May 2026",
    stack: ["Python", "Pandas", "Plotly", "Claude API", "Streamlit"],
    summary:
      "Civic-tech analysis ranking Syracuse neighborhoods by composite lead-exposure risk. Combines open public-health data with validated LLM-generated briefs.",
    href: "https://github.com/nehashirodkar/syracuse-lead-risk-analyzer",
    image: UNSPLASH("1551288049-bebda4e38f71"), // data chart / analytics
  },
  {
    name: "Energy Demand Forecasting",
    dates: "Oct 2025 – Dec 2025",
    stack: ["R", "ANOVA", "Random Forest", "ARIMA", "Shiny"],
    summary:
      "Predicting South Carolina residential energy demand under a +5°C summer scenario. ANOVA feature selection, RF (R² ≈ 0.93), ARIMA, wrapped in a Shiny app.",
    href: "https://github.com/nehashirodkar/energy-consumption-prediction-and-analysis",
    image: UNSPLASH("1529310399831-ed472b81d589"), // lightbulb — verified from Unsplash search
  },
  {
    name: "Student Performance Analytics",
    dates: "May 2026",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    summary:
      "Data pipeline correlating student attendance with academic performance. Cleans + merges grades/attendance, computes per-student metrics, visualizes findings.",
    href: "https://github.com/nehashirodkar/student-performance-analytics",
    image: UNSPLASH("1509062522246-3755977927d7"), // classroom / students — verified from Unsplash search
  },
];

const SOFTWARE_PROJECTS: Project[] = [
  {
    name: "Invoice Approval Flow",
    dates: "Apr 2026 – May 2026",
    stack: ["Power Platform", "AI Builder", "Power Automate", "SharePoint"],
    summary:
      "End-to-end invoice approval on Microsoft Power Platform. AI Builder extracts data from PDFs, Power Automate routes by amount via Teams cards, SharePoint logs the audit trail.",
    href: "https://github.com/nehashirodkar/invoice-approval-flow",
    image: UNSPLASH("1603796846097-bee99e4a601f"), // documents / paperwork — verified from Unsplash search
  },
  {
    name: "E-Commerce App for Farmers",
    dates: "Aug 2025 – May 2026",
    stack: ["ASP.NET", "C#", "Java", "SQL Server", "Android"],
    summary:
      "Android e-commerce app for farmers with limited technical literacy — ASP.NET + C# + Java + SQL Server, deliberately simple browsing, order, and tracking flow.",
    href: "https://github.com/nehashirodkar/eCommerce-application-for-farmers",
    image: UNSPLASH("1542838132-92c53300491e"), // fresh produce / vegetables
  },
  {
    name: "U-Fit — Gym Management System",
    dates: "Aug 2025 – May 2026",
    stack: ["SQL Server", "T-SQL", "Database Design"],
    summary:
      "End-to-end gym management database — members, plans, billing, attendance, scheduling, and reporting. Heavy on relational modeling and stored-procedure logic.",
    href: "https://github.com/nehashirodkar/gym-management-system",
    image: UNSPLASH("1517836357463-d25dfeac3438"), // gym / weights
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-2xl overflow-hidden bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition group h-full"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2.5">
        <header className="space-y-1.5">
          <h4 className="font-semibold text-base text-slate-100 group-hover:text-cyan-200 transition flex items-start gap-1.5 leading-tight">
            <span className="flex-1">{p.name}</span>
            <ExternalLink className="w-3.5 h-3.5 mt-1 opacity-0 group-hover:opacity-100 transition shrink-0" />
          </h4>
          <p className="text-[11px] text-slate-500 font-mono">{p.dates}</p>
        </header>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{p.summary}</p>

        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/10 text-violet-200 border border-violet-400/25"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function CategoryHeader({ label, blurb }: { label: string; blurb: string }) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-semibold text-cyan-200 flex items-center gap-3">
        <span>{label}</span>
        <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
      </h3>
      <p className="text-sm text-slate-500 italic">{blurb}</p>
    </div>
  );
}

function Category({ label, blurb, projects }: { label: string; blurb: string; projects: Project[] }) {
  return (
    <FadeUp delay={100}>
      <div className="space-y-4">
        <CategoryHeader label={label} blurb={blurb} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16 sm:py-24 space-y-10 relative z-10"
    >
      <FadeUp>
        <header className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-base italic text-cyan-300/80">
            selected work from my GitHub, grouped by domain
          </p>
        </header>
      </FadeUp>

      <Category
        label="AI / Agentic"
        blurb="LLM agents, RAG, MCP — what I spend most of my time on"
        projects={AI_PROJECTS}
      />
      <Category
        label="Machine Learning"
        blurb="fine-tuning, classical ML, evaluation-rigorous"
        projects={ML_PROJECTS}
      />
      <Category
        label="Data"
        blurb="analysis, forecasting, civic-tech"
        projects={DATA_PROJECTS}
      />
      <Category
        label="Software"
        blurb="full-stack, workflow automation, the broader engineering work"
        projects={SOFTWARE_PROJECTS}
      />
    </section>
  );
}
