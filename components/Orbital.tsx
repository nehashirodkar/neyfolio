"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  FolderGit2,
  Sparkles,
  BookOpen,
  GraduationCap,
  Mail,
  Palette,
  User,
} from "lucide-react";
import TechieAvatar from "./TechieAvatar";

// Spokes link to anchors on the home page — single-page scroll layout.
const SPOKES = [
  { href: "/#about",        label: "About",        Icon: User },
  { href: "/#experience",   label: "Experience",   Icon: Briefcase },
  { href: "/#skills",       label: "Skills",       Icon: Sparkles },
  { href: "/#projects",     label: "Projects",     Icon: FolderGit2 },
  { href: "/#case-studies", label: "Case Studies", Icon: BookOpen },
  { href: "/#education",    label: "Education",    Icon: GraduationCap },
  { href: "/#hobbies",      label: "Hobbies",      Icon: Palette },
  { href: "/#contact",      label: "Contact",      Icon: Mail },
];

const N = SPOKES.length;
const PERIOD_MS = 60_000; // one full orbit per 60s

type OrbitalProps = {
  size: number;
  radius: number;
};

function OrbitalCore({ size, radius }: OrbitalProps) {
  // JS-driven angle. We DON'T use nested CSS counter-rotation here because
  // those drift out of sync during hot-reload and leave icons upside down.
  // Icons never rotate — they just translate around the centre, which means
  // they're guaranteed to stay upright at all times.
  const [angle, setAngle] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dtMs = now - last;
      last = now;
      // Pause progression while hovered, but keep the raf loop running so we
      // resume smoothly when the user moves away.
      if (!hoverRef.current) {
        setAngle((a) => (a + (dtMs / PERIOD_MS) * Math.PI * 2) % (Math.PI * 2));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      {SPOKES.map((s, i) => {
        const a = angle + (i / N) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(a) * radius;
        const y = Math.sin(a) * radius;
        return (
          <Link
            key={s.href}
            href={s.href}
            className="absolute top-1/2 left-1/2"
            style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            aria-label={s.label}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.45)] flex items-center justify-center hover:border-white hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] hover:scale-110 transition-all duration-200">
                <s.Icon className="w-7 h-7 text-cyan-100" strokeWidth={2.2} />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs font-medium text-slate-200 whitespace-nowrap pointer-events-none drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                {s.label}
              </span>
            </div>
          </Link>
        );
      })}

      {/* Center avatar — static frame, only the bobble animation moves it */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-32 h-32">
        <div className="absolute inset-0 -m-4 rounded-full bg-white/15 blur-2xl animate-core-pulse" />
        <div className="absolute inset-0 rounded-full border border-white/25 overflow-hidden bg-slate-950">
          <TechieAvatar />
        </div>
      </div>
    </div>
  );
}

export default function Orbital() {
  return (
    <>
      <div className="sm:hidden">
        <OrbitalCore size={340} radius={135} />
      </div>
      <div className="hidden sm:block">
        <OrbitalCore size={460} radius={185} />
      </div>
    </>
  );
}
