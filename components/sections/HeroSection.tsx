import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Orbital from "@/components/Orbital";
import TypewriterHero from "@/components/TypewriterHero";
import FadeUp from "@/components/FadeUp";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 pt-10 sm:pt-16 pb-12 sm:pb-20 relative z-10"
    >
      {/* Flex (not grid) — Tailwind v4 sometimes drops arbitrary grid-cols
          fractions silently. Flexbox stacks on mobile, side-by-side at lg. */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        {/* Left: text. min-w-0 + flex-1 lets it shrink properly inside flex. */}
        <div className="flex-1 min-w-0 space-y-6 text-center lg:text-left">
          <TypewriterHero />

          {/* Playful cursive tag — appears once the typewriter is mostly done */}
          <FadeUp immediate delay={1200}>
            <p className="font-cursive text-3xl sm:text-4xl text-cyan-300">
              Welcome to Neyfolio
            </p>
          </FadeUp>

          <FadeUp immediate delay={1500}>
            <p className="text-xl sm:text-2xl text-slate-300">
              AI Software Engineer · Product-Focused
            </p>
          </FadeUp>

          <FadeUp immediate delay={1800}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I build production AI systems — agentic backends at Intuit today,
              and before that, large-scale data and payments platforms in Java
              and Python. I care about evaluation rigor (especially in ML),
              reliability, and turning messy real-world problems into systems
              that actually ship. Currently applying for{" "}
              <span className="text-cyan-300 font-semibold">SDE</span>,{" "}
              <span className="text-cyan-300 font-semibold">AI Engineer</span>,
              and <span className="text-cyan-300 font-semibold">AI PM</span>{" "}
              roles.
            </p>
          </FadeUp>

          <FadeUp immediate delay={2100}>
            <p className="text-sm text-slate-500 flex items-center gap-2 justify-center lg:justify-start flex-wrap">
              <span>
                Click around my orbit, or scroll to explore.
                <br />
                Chat with the AI version of me from the corner anytime.
              </span>
              <ArrowRight className="hidden lg:inline-block w-5 h-5 text-cyan-300 animate-pulse shrink-0" />
            </p>
          </FadeUp>

          <FadeUp immediate delay={2400}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition"
              >
                Connect with me <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </Link>
              <Link
                href="/resume/neha-shirodkar-resume.pdf"
                target="_blank"
                className="inline-flex items-center px-5 py-2.5 text-sm rounded-full border border-cyan-400/30 text-slate-200 hover:border-cyan-300 hover:bg-cyan-500/10 transition"
              >
                Download resume
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Right: orbital — shrink-0 so it never gets squeezed by flex */}
        <FadeUp immediate delay={1000} className="shrink-0 flex justify-center">
          <Orbital />
        </FadeUp>
      </div>
    </section>
  );
}
