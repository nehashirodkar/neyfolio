import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-6 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Case Studies
        </h1>
        <p className="text-slate-400">
          PM-focused write-ups: one real project, one product teardown, one
          hypothetical design. Currently drafting.
        </p>
      </header>

      <div className="rounded-2xl p-8 text-center space-y-2 bg-slate-950/60 backdrop-blur border border-dashed border-cyan-400/30">
        <p className="text-slate-300">Coming soon.</p>
        <p className="text-sm text-slate-500">
          In the meantime, ask the chatbot about my projects on{" "}
          <Link href="/" className="text-cyan-300 hover:text-cyan-200 underline">
            the home page
          </Link>{" "}
          or browse{" "}
          <Link href="/experience" className="text-cyan-300 hover:text-cyan-200 underline">
            Experience
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
