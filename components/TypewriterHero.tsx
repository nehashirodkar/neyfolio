"use client";

import { useEffect, useState } from "react";

/**
 * Types out "Hi, I'm Neha" one character at a time, then leaves a blinking
 * cursor. "Neha" is rendered in the gradient as soon as those characters
 * appear (we slice the prefix and suffix separately each frame).
 */
const PREFIX = "Hi, I'm ";
const NAME = "Neha";
const FULL = PREFIX + NAME;
const CHAR_DELAY = 90; // ms per character
const START_DELAY = 350; // ms before typing begins

export default function TypewriterHero() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((c) => {
          if (c >= FULL.length) {
            clearInterval(interval);
            setDone(true);
            return c;
          }
          return c + 1;
        });
      }, CHAR_DELAY);
      return () => clearInterval(interval);
    }, START_DELAY);
    return () => clearTimeout(start);
  }, []);

  const shown = FULL.slice(0, count);
  const prefixPart = shown.slice(0, Math.min(shown.length, PREFIX.length));
  const namePart = shown.length > PREFIX.length ? shown.slice(PREFIX.length) : "";

  return (
    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight min-h-[1.2em]">
      <span>{prefixPart}</span>
      <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
        {namePart}
      </span>
      {/* Cursor — solid while typing, blinks after done */}
      <span
        className={`inline-block w-[3px] h-[0.9em] align-middle ml-1 bg-cyan-300 ${
          done ? "animate-cursor" : ""
        }`}
        aria-hidden
      />
    </h1>
  );
}
