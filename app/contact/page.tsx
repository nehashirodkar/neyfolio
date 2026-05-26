import Link from "next/link";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/neha-shirodkar/",
    title: "LinkedIn",
    subtitle: "linkedin.com/in/neha-shirodkar",
    external: true,
  },
  {
    href: "/resume/neha-shirodkar-resume.pdf",
    title: "Resume (PDF)",
    subtitle: "Software Engineer — GenAI & Backend",
    external: true,
  },
  {
    href: "/",
    title: "Chat with the AI version of me",
    subtitle:
      "Grounded in my resume and projects. Good for \"does she know X?\" questions.",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-8 relative z-10">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-slate-400">
          The best ways to reach me.
        </p>
      </header>

      <div className="space-y-3">
        {LINKS.map((l) => (
          <Link
            key={l.title}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            className="block rounded-2xl p-5 bg-slate-950/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition"
          >
            <div className="font-semibold text-slate-100">{l.title}</div>
            <div className="text-sm text-slate-400 mt-0.5">{l.subtitle}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
