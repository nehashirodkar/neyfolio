import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-10 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          About
        </h1>
        <p className="text-slate-400">
          New York, NY · Open to relocation
        </p>
      </header>

      <section className="space-y-5 text-slate-300 leading-relaxed">
        <p>
          I build production AI systems. Right now that means agentic backends
          at Intuit; before that, large-scale data and payments platforms in
          Java and Python.
        </p>
        <p>
          What I&apos;m drawn to: turning messy, ambiguous real-world problems
          into systems that actually ship — and being honest about the
          tradeoffs along the way. I care a lot about evaluation rigor
          (especially in ML), reliability, and not pretending a metric is
          better than it is.
        </p>
        <p>
          I&apos;m currently applying for{" "}
          <span className="text-cyan-300 font-semibold">SDE</span>,{" "}
          <span className="text-cyan-300 font-semibold">AI Engineer</span>,
          and <span className="text-cyan-300 font-semibold">AI PM</span>{" "}
          roles.
        </p>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/experience"
          className="inline-flex items-center px-4 py-2 text-sm rounded-full border border-cyan-400/30 text-slate-200 hover:border-cyan-300 hover:bg-cyan-500/10 transition"
        >
          See my experience →
        </Link>
        <Link
          href="/resume/neha-shirodkar-resume.pdf"
          target="_blank"
          className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition"
        >
          Download resume
        </Link>
      </div>
    </main>
  );
}
