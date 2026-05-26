"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides children in from below the first time they scroll into view.
 * Wrap any block element with this to give it an entrance animation, like
 * the section-by-section reveal on Shubh's portfolio.
 *
 *   <FadeUp delay={150}>  ← appears 150ms after the trigger fires
 *     ...content...
 *   </FadeUp>
 */
export default function FadeUp({
  children,
  delay = 0,
  className = "",
  /** Set true for elements that are above-the-fold on initial load — they'll
   *  animate in immediately after mount instead of waiting for scroll. */
  immediate = false,
  /** How much of the element must be visible before animating in. */
  threshold = 0.15,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (immediate) {
      const t = setTimeout(() => setShown(true), delay);
      return () => clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, immediate, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
