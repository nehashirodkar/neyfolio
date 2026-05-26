import type { SeedDoc } from "./seed";

/**
 * Resume content, chunked for RAG retrieval. Written in first person — the
 * chatbot speaks as Neha, so chunks are framed as her own voice.
 *
 * Each chunk is semantically self-contained: when retrieved alone, it should
 * still make sense to the LLM without other chunks. To update: edit a chunk,
 * then run `npm run index`.
 */
export const resumeDocs: SeedDoc[] = [
  // ----- Profile -----
  {
    source: "profile",
    content: `I'm based in New York, NY and open to relocation. I'm currently applying for SDE, AI Engineer, and AI PM roles. You can reach me on LinkedIn at https://www.linkedin.com/in/neha-shirodkar/.`,
    metadata: { type: "profile" },
  },

  // ----- Summary -----
  {
    source: "summary",
    content: `I'm a software engineer specializing in GenAI and Backend, with 5+ years building production systems across fintech, data platforms, and high-volume SaaS. At Intuit, I architected and scaled multi-agent AI services on GenOS handling 200K+ daily requests with Python, FastAPI, LangGraph, OpenAI APIs, and AWS Bedrock — that work improved RAG answer accuracy by 31% and saved analysts 4,000+ hours of manual review a year. Before Intuit, I built large-scale customer and commerce platforms on Java, Spring Boot, and Django, handling tens of millions of records across batch and streaming pipelines. I'm a strong end-to-end owner — from LLMOps and multi-agent orchestration to distributed microservices — and I care about real outcomes like sub-10-minute operational turnaround, 34% reduction in analyst effort, and 99.9% production availability.`,
    metadata: { type: "summary" },
  },

  // ----- Experience: Intuit -----
  {
    source: "experience:intuit",
    content: `At Intuit (QuickBooks) as Software Engineer - GenAI & Backend (Jan 2025 - Present, Remote US), I:
- Scaled agentic AI backend services in Python and FastAPI across distributed microservices to handle 200K+ daily requests, automating case analysis and routing — which saved analysts 4,000+ hours of manual review per year.
- Built an LLM case summarization pipeline on Intuit's GenOS platform using OpenAI and Claude via AWS Bedrock, cutting investigation time from 3-4 hours per case to under 10 minutes.
- Architected multi-agent workflows in LangGraph with parallel planner, retrieval, and tool-calling nodes; implemented hybrid retrieval (BM25 + RRF reranking) to improve RAG answer accuracy by 31% and reduce analyst escalations by 800+ per month.
- Built a RAG pipeline with LangChain and FAISS grounded in 500+ QuickBooks policy documents, achieving 91% factual accuracy on edge-case prompts; exposed FastAPI endpoints as callable agent tools in GenOS (GenRuntime) via function-calling patterns.
- Owned end-to-end backend reliability for 5 production FastAPI services, led incident response and PostgreSQL schema migrations across 40M+ records with zero data loss; enforced API versioning across 6+ internal teams via PyTest contract suites.
- Instrumented inference endpoints with LangSmith tracing and RAGAS for live A/B testing and golden-set benchmarking; deployed GenAI services on AWS (ECS, Lambda, S3, CloudWatch) maintaining 99.9% availability through zero-downtime releases via GitHub Actions and Docker.
- Wrote prompt engineering templates with spaCy-based context structuring to pre-process financial attributes before LLM calls — which cut vague or incomplete model responses by 22% across test query sets.`,
    metadata: {
      type: "experience",
      company: "Intuit (QuickBooks)",
      role: "Software Engineer - GenAI & Backend",
      dates: "Jan 2025 - Present",
      location: "Remote, US",
    },
  },

  // ----- Experience: Infinite Infolab -----
  {
    source: "experience:infinite-infolab",
    content: `At Infinite Infolab as Software Engineer (Aug 2021 - Jul 2023, Hybrid India), I:
- Engineered a multi-tenant Customer Data Platform on Java and Spring Boot, consolidating 40M+ records from billing, CRM, and transaction systems into a unified queryable layer for enterprise lending and payments clients.
- Designed real-time data sync pipelines with Apache NiFi and Kafka, cutting downstream report delays from same day to near real-time and saving teams 6+ hours of lag per reporting cycle.
- Optimized a MySQL customer schema with partition-aware indexing — dropped query latency from 900ms to under 200ms and enabled sub-second lookups for credit segmentation across 40M+ records.
- Secured multi-tenant REST APIs with OAuth 2.0, JWT, and RBAC; enforced quality with JUnit5 and Testcontainers (test coverage raised to 82%, defect rate down 29%); ran CI through Jenkins with SonarQube analysis for a 28% reduction in production defects.
- Exposed a normalized customer data layer through versioned Spring Boot REST APIs consumed by internal marketing and analytics dashboards, improving campaign targeting turnaround by 29% and eliminating ad-hoc data pull requests from business teams.`,
    metadata: {
      type: "experience",
      company: "Infinite Infolab",
      role: "Software Engineer",
      dates: "Aug 2021 - Jul 2023",
      location: "Hybrid, India",
    },
  },

  // ----- Experience: Vivma Software Inc. -----
  {
    source: "experience:vivma",
    content: `At Vivma Software Inc. as Software Development Engineer (Aug 2019 - Jul 2021, Remote India), I:
- Developed Python and Django backend services for a multi-client payments platform, automating order routing logic that expanded peak transaction processing capacity by 34% without adding infrastructure.
- Implemented async payment processors with Celery and RabbitMQ — with retry policies and timeout handling for fault-tolerant order processing — eliminating manual status tracking and cutting end-to-end order cycle time from 4 hours to under 2.5 hours.
- Architected MongoDB document storage for high-write payment workloads, improving transaction durability by 42% during seasonal demand spikes with no increase in p99 latency.
- Delivered GraphQL APIs for 8+ partner integrations, reducing payload size by 36%; containerized services with Podman and built Bitbucket Pipelines with automated PyTest suites for a 31% reduction in regression defects.`,
    metadata: {
      type: "experience",
      company: "Vivma Software Inc.",
      role: "Software Development Engineer",
      dates: "Aug 2019 - Jul 2021",
      location: "Remote, India",
    },
  },

  // ----- Project: MCP AML/KYC Compliance Agent -----
  {
    source: "project:mcp-aml-kyc",
    content: `My MCP-Powered AML/KYC Compliance Agent project (May - Present), built in Python with LangGraph, MCP (Model Context Protocol), LangSmith, ChromaDB, and FastAPI:
- I built an agentic compliance assistant using MCP and LangGraph, exposing 3 financial compliance tools (entity resolution, AML risk scoring, BSA clause lookup) to a Claude Sonnet agent via the Anthropic API — automating regulatory lookups to under seconds per query.
- I improved citation accuracy from 42% to 96% through iterative LangSmith-driven prompt and retrieval tuning, which also cut per-query cost by 39%.
- I implemented human-in-the-loop escalation with confidence-thresholded routing, an audit trail, and 48 PyTest cases for production-grade reliability.`,
    metadata: {
      type: "project",
      name: "MCP-Powered AML/KYC Compliance Agent",
      dates: "May - Present",
      stack: [
        "Python",
        "LangGraph",
        "MCP",
        "LangSmith",
        "ChromaDB",
        "FastAPI",
        "Claude",
        "Anthropic API",
      ],
    },
  },

  // ----- Project: Mental Health Discourse Analyzer -----
  {
    source: "project:mental-health-analyzer",
    content: `My Mental Health Discourse Analyzer project (Jan 2026 - Feb 2026), built with Python, RoBERTa (fine-tuning), BERTopic, FastAPI, MLflow, and Hugging Face Spaces:
- I fine-tuned RoBERTa on 7.8K Reddit posts to classify mental health distress severity, achieving 0.91 accuracy and 0.90 macro F1 despite a 3:1 class imbalance.
- I applied BERTopic for unsupervised theme extraction across mental health communities; tracked all experiments via MLflow and deployed a live Streamlit dashboard on Hugging Face Spaces.
- I deliberately designed the model to generalize from post content alone — it never sees subreddit names — to avoid memorizing weak-label source cues.`,
    metadata: {
      type: "project",
      name: "Mental Health Discourse Analyzer",
      dates: "Jan 2026 - Feb 2026",
      stack: [
        "Python",
        "RoBERTa",
        "BERTopic",
        "FastAPI",
        "MLflow",
        "Hugging Face Spaces",
      ],
    },
  },

  // ----- Project: Clinical Re-Admission Risk Predictor -----
  {
    source: "project:clinical-readmission",
    content: `My Clinical Re-Admission Risk Predictor project (Oct 2025 - Dec 2025), built with Python, XGBoost, SHAP, scikit-learn, FastAPI, MLflow, and Hugging Face Spaces:
- I built a 30-day hospital readmission predictor on 100K+ patient encounters using XGBoost and SMOTE, achieving AUC 0.64 — consistent with the published ceiling for this dataset.
- I surfaced per-patient top-5 risk drivers via SHAP explainability and tuned the decision threshold against a clinical rule, maximizing precision while keeping recall >= 0.50.
- I deployed it as a live FastAPI + Streamlit dashboard on Hugging Face Spaces with MLflow experiment tracking — and I held the line on honest evaluation methodology (no data leakage, no inflated metrics).`,
    metadata: {
      type: "project",
      name: "Clinical Re-Admission Risk Predictor",
      dates: "Oct 2025 - Dec 2025",
      stack: [
        "Python",
        "XGBoost",
        "SHAP",
        "scikit-learn",
        "FastAPI",
        "MLflow",
        "Hugging Face Spaces",
      ],
    },
  },

  // ----- Skills: GenAI & Agentic AI -----
  {
    source: "skills:genai-agentic",
    content: `My GenAI and Agentic AI skills:
- Orchestration and Agents: LangGraph, LangChain, LlamaIndex, CrewAI, MCP (Model Context Protocol), GenOS (GenRuntime, GenOrchestrator).
- RAG and Retrieval: RAG pipelines, hybrid retrieval (BM25, RRF reranking), semantic chunking, reranking.
- Vector Databases: Pinecone, ChromaDB, FAISS.
- LLM and Tooling: OpenAI APIs, AWS Bedrock (Claude), LangSmith (observability and tracing), RAGAS (LLM evaluation), Guardrails AI, spaCy.
- Techniques: Prompt engineering, context engineering, tool calling / function calling, human-in-the-loop (HITL) escalation, structured outputs (Pydantic).`,
    metadata: { type: "skills", category: "genai" },
  },

  // ----- Skills: Core (languages, ML, cloud, data, practices) -----
  {
    source: "skills:core",
    content: `My core technical skills outside of GenAI:
- Languages and Frameworks: Python (FastAPI, Django, Flask), Java (Spring Boot, JUnit), JavaScript (Node.js), TypeScript, SQL.
- ML and Data Science: PyTorch, XGBoost, scikit-learn, Hugging Face, BERT / RoBERTa / LLaMA (fine-tuning), MLflow, Weights and Biases, Pandas, NumPy.
- Cloud and DevOps: AWS (ECS, Lambda, S3, RDS, CloudWatch, API Gateway), Docker, Kubernetes, GitHub Actions, Jenkins, SonarQube.
- Data and Backend: PostgreSQL, MySQL, MongoDB, Redis, Kafka, RabbitMQ, Celery, Apache NiFi, GraphQL, gRPC, RESTful APIs, OAuth 2.0, JWT, RBAC.
- Practices: PyTest, JUnit5, Testcontainers, CI/CD, A/B evaluation, zero-downtime deployments, Agile/Scrum, HIPAA/FHIR/DICOM, PCI-DSS.`,
    metadata: { type: "skills", category: "core" },
  },

  // ----- Education -----
  {
    source: "education",
    content: `My education:
- Master of Science in Information Systems, Syracuse University, New York — May 2025.
- Bachelor of Engineering in Computer Science, University of Mumbai, Mumbai — June 2021.`,
    metadata: { type: "education" },
  },
];
