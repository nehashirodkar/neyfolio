export type SeedDoc = {
  source: string;
  content: string;
  metadata?: Record<string, unknown>;
};

/**
 * General "about this site" content. Written in first person — the chatbot
 * speaks as Neha, so chunks are framed as her own voice.
 */
export const seedDocs: SeedDoc[] = [
  {
    source: "about:intro",
    content: `I'm Neha Shirodkar — a software engineer applying for SDE, AI Engineer, and AI PM roles. This portfolio is itself a retrieval-augmented chatbot, so when you talk to me here, you're really talking to an AI trained on my resume, projects, and case studies. Ask me anything about my work.`,
    metadata: { type: "intro" },
  },
  {
    source: "about:stack",
    content: `I built this portfolio with Next.js (App Router), TypeScript, and Tailwind CSS. The chatbot uses OpenAI's gpt-4o-mini for chat completions and text-embedding-3-small for embeddings. My content is stored as vectors in Supabase using the pgvector extension. The whole thing is deployed on Vercel.`,
    metadata: { type: "meta" },
  },
];
