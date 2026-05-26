export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-6 relative z-10"
    >
      <header className="space-y-2">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Case Studies
        </h2>
        <p className="text-base italic text-cyan-300/80">
          long-form PM thinking — the good ones take a minute, still drafting
        </p>
      </header>

      <div className="rounded-2xl p-8 text-center space-y-2 bg-slate-950/60 backdrop-blur border border-dashed border-cyan-400/30">
        <p className="text-slate-300">Coming soon.</p>
        <p className="text-sm text-slate-500">
          One real project, one product teardown, one hypothetical design.
          Ask the chatbot about my projects in the meantime — bottom-right corner.
        </p>
      </div>
    </section>
  );
}
