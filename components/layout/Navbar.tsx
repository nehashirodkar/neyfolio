import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about",        label: "About" },
  { href: "/#experience",   label: "Experience" },
  { href: "/#skills",       label: "Skills" },
  { href: "/#projects",     label: "Projects" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#education",    label: "Education" },
  { href: "/#hobbies",      label: "Hobbies" },
  { href: "/#contact",      label: "Contact" },
];

const SOCIALS = [
  { slug: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/neha-shirodkar/" },
  { slug: "github",   label: "GitHub",   href: "https://github.com/nehashirodkar" },
  { slug: "medium",   label: "Medium",   href: "https://medium.com/@nehashirodkar98" },
];

function NSLogo() {
  return (
    <Link
      href="/"
      aria-label="Neha Shirodkar — home"
      className="group flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400/50 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition shrink-0"
    >
      <span className="text-sm font-bold tracking-tighter bg-gradient-to-br from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-fuchsia-200">
        NS
      </span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/[0.03] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <nav className="w-full px-6 sm:px-10 h-16 flex items-center justify-between gap-6">
        <NSLogo />

        {/* Each nav item is its own frosted-glass pill button */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-3 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-slate-200 hover:bg-white/[0.10] hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 shrink-0">
          {SOCIALS.map((s) => (
            <a
              key={s.slug}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="opacity-70 hover:opacity-100 transition"
            >
              {/* Iconify simple-icons set — cdn.simpleicons.org has been
                  404ing for some major brand slugs (linkedin, aws). Iconify
                  serves the same icon data reliably. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.iconify.design/simple-icons:${s.slug}.svg`}
                alt=""
                className="w-[18px] h-[18px] brightness-0 invert opacity-70 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
