"use client";

import { useEffect, useRef } from "react";

/**
 * Animated starfield. Fixed full-viewport canvas with:
 * - Twinkling stars (~350 of them; some big, most small; some cyan/violet tinted)
 * - A handful of "hero stars" that pulse strongly (the bright ones you notice)
 * - Frequent shooting stars (every 1.5–4s) streaking across
 * Lightweight — no external deps.
 */
export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before re-scale
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    type Star = {
      x: number;
      y: number;
      r: number;
      a: number;
      v: number;
      isHero: boolean;
    };
    const STAR_COUNT = 350;
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const isHero = Math.random() < 0.04; // ~14 bright pulsing stars
      const isBig = !isHero && Math.random() < 0.12;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: isHero ? 1.6 + Math.random() * 0.9 : isBig ? 1.1 + Math.random() * 0.8 : 0.4 + Math.random() * 0.7,
        a: 0.4 + Math.random() * 0.5,
        v: (Math.random() - 0.5) * (isHero ? 0.025 : 0.014),
        isHero,
      };
    });

    type Shooting = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    };
    const shootings: Shooting[] = [];
    let nextShootingAt = performance.now() + 800;

    function spawnShooting(now: number) {
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3;
      const startY = Math.random() * height * 0.4;
      const dirX = fromLeft ? 1 : -1;
      shootings.push({
        x: startX,
        y: startY,
        vx: dirX * (6 + Math.random() * 5),
        vy: 1.5 + Math.random() * 2.5,
        life: 0,
        maxLife: 70,
      });
      nextShootingAt = now + 1500 + Math.random() * 2500;
    }

    let raf = 0;
    function frame(now: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Stars
      for (const s of stars) {
        s.a += s.v;
        if (s.a > 1 || s.a < 0.3) s.v = -s.v;

        // Hero stars get a soft white glow halo
        if (s.isHero) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
          glow.addColorStop(0, `rgba(255, 255, 255, ${s.a * 0.5})`);
          glow.addColorStop(1, `rgba(255, 255, 255, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.a})`;
        ctx.fill();
      }

      // Shooting stars
      if (now > nextShootingAt) spawnShooting(now);
      for (let i = shootings.length - 1; i >= 0; i--) {
        const s = shootings[i];
        s.life += 1;
        const t = s.life / s.maxLife;
        const alpha = Math.sin(t * Math.PI);
        const tailLen = 70;
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.vx * (tailLen / 6),
          s.y - s.vy * (tailLen / 6)
        );
        grad.addColorStop(0, `rgba(200, 230, 255, ${alpha})`);
        grad.addColorStop(0.6, `rgba(160, 210, 255, ${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(160, 210, 255, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (tailLen / 6), s.y - s.vy * (tailLen / 6));
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        if (s.life > s.maxLife) shootings.splice(i, 1);
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
}
