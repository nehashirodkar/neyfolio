import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-6 relative z-10"
    >
      <header className="space-y-2">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          About
        </h2>
        <p className="text-base italic text-cyan-300/80">
          the elevator pitch, condensed
        </p>
      </header>
      <p className="text-lg text-slate-300 leading-relaxed">
        I build production AI systems — agentic backends at Intuit today, and
        before that, large-scale data and payments platforms in Java and
        Python. I care about evaluation rigor (especially in ML), reliability,
        and turning messy real-world problems into systems that actually
        ship. Currently applying for{" "}
        <span className="text-cyan-300 font-semibold">SDE</span>,{" "}
        <span className="text-cyan-300 font-semibold">AI Engineer</span>, and{" "}
        <span className="text-cyan-300 font-semibold">AI PM</span> roles.
      </p>

      <div className="pt-2">
        <Link
          href="/resume/neha-shirodkar-resume.pdf"
          target="_blank"
          className="inline-flex items-center px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition"
        >
          Download resume
        </Link>
      </div>
    </section>
  );
}
