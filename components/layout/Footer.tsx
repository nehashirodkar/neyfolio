import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const SOCIALS = [
  { slug: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/neha-shirodkar/" },
  { slug: "github",   label: "GitHub",   href: "https://github.com/nehashirodkar" },
  { slug: "medium",   label: "Medium",   href: "https://medium.com/@nehashirodkar98" },
];

const QUICK_LINKS = [
  { href: "/#about",        label: "About" },
  { href: "/#experience",   label: "Experience" },
  { href: "/#skills",       label: "Skills" },
  { href: "/#projects",     label: "Projects" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#education",    label: "Education" },
  { href: "/#hobbies",      label: "Hobbies" },
  { href: "/#contact",      label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 relative z-10 bg-slate-950/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-start">
        {/* Brand + tagline — clicking the logo/name returns to the top */}
        <div className="space-y-3 max-w-[260px]">
          <Link
            href="/#about"
            aria-label="Back to top"
            className="group flex items-center gap-3 w-fit hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-full border border-cyan-400/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center justify-center transition">
              <span className="text-sm font-bold tracking-tighter bg-gradient-to-br from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                NS
              </span>
            </div>
            <div className="font-semibold text-slate-100 group-hover:text-cyan-200 transition">
              Neha Shirodkar
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            AI Software Engineer · Product-Focused. Building production AI systems that actually ship.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-3 max-w-[260px]">
          <h3 className="text-sm font-semibold text-cyan-200 uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a
                href="mailto:neha.shi@myjobsmails.com"
                className="flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>neha.shi@myjobsmails.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+14709975544"
                className="flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>+1 (470) 997-5544</span>
              </a>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
              <span>New York, NY · Open to relocation</span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="space-y-3 max-w-[260px]">
          <h3 className="text-sm font-semibold text-cyan-200 uppercase tracking-wider">
            Quick links
          </h3>
          <ul className="space-y-1.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume/neha-shirodkar-resume.pdf"
                target="_blank"
                className="text-slate-300 hover:text-cyan-300 transition"
              >
                Resume (PDF)
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3 max-w-[260px]">
          <h3 className="text-sm font-semibold text-cyan-200 uppercase tracking-wider">
            Find me on
          </h3>
          <ul className="space-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.slug}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://api.iconify.design/simple-icons:${s.slug}.svg`}
                    alt=""
                    className="w-4 h-4 brightness-0 invert opacity-70 group-hover:opacity-100"
                  />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Neha Shirodkar — all rights reserved.</p>
          <p>Built with Next.js, Tailwind, and a friendly RAG chatbot.</p>
        </div>
      </div>
    </footer>
  );
}
