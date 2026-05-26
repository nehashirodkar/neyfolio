"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

function NSLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape, and lock body scroll while menu is open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/[0.03] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <nav className="w-full px-6 sm:px-10 h-16 flex items-center justify-between gap-6">
          <NSLogo />

          {/* Desktop nav links — hidden on mobile */}
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

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {SOCIALS.map((s) => (
              <a
                key={s.slug}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="opacity-70 hover:opacity-100 transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.iconify.design/simple-icons:${s.slug}.svg`}
                  alt=""
                  className="w-[18px] h-[18px] brightness-0 invert opacity-70 hover:opacity-100 transition"
                />
              </a>
            ))}

            {/* Hamburger — mobile only, after the socials */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-slate-200 hover:text-cyan-300 transition ml-1"
            >
              <Menu className="w-6 h-6" strokeWidth={2.2} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer — overlay with all section links */}
      <div
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-slate-950/95 border-l border-cyan-400/15 shadow-[0_0_60px_rgba(34,211,238,0.15)] flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-cyan-400/10">
            <span className="text-sm font-semibold text-slate-300">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-slate-200 hover:text-cyan-300 transition"
            >
              <X className="w-6 h-6" strokeWidth={2.2} />
            </button>
          </div>

          <ul className="flex flex-col p-4 space-y-1.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-200 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto px-6 py-5 border-t border-cyan-400/10">
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Find me on</p>
            <div className="flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.slug}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="opacity-80 hover:opacity-100 transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://api.iconify.design/simple-icons:${s.slug}.svg`}
                    alt={s.label}
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
