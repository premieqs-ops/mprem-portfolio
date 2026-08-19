"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
};

type Props = {
  /** fixed full-viewport layer behind the whole site */
  fullPage?: boolean;
  /** 0–1 overall strength */
  intensity?: number;
};

/**
 * Network constellation + soft particles — digital marketing aesthetic.
 * Matches dark glass + electric blue design. Full-page safe (subtle).
 */
export default function NetworkParticles({ fullPage = false, intensity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };

    const NODE_COUNT = reduced ? 14 : fullPage ? 36 : 42;
    const PARTICLE_COUNT = reduced ? 10 : fullPage ? 28 : 36;
    const LINK_DIST = fullPage ? 120 : 140;
    const SPEED = fullPage ? 0.22 : 0.35;
    const ACCENT = "59, 130, 246";
    const ELECTRIC = "0, 212, 255";
    const alphaScale = Math.max(0.2, Math.min(1, intensity)) * (fullPage ? 0.85 : 1);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (fullPage) {
        w = window.innerWidth;
        h = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        if (!parent) return;
        w = parent.clientWidth;
        h = parent.clientHeight;
      }
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnParticle = (): Particle => {
      const maxLife = 200 + Math.random() * 260;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -0.12 - Math.random() * 0.28,
        r: 0.5 + Math.random() * 1.2,
        life: maxLife,
        maxLife,
      };
    };

    const init = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: 1.1 + Math.random() * 1.6,
      }));
      particles = Array.from({ length: PARTICLE_COUNT }, () => spawnParticle());
    };

    const onMove = (e: MouseEvent) => {
      if (fullPage) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(
        w * 0.55,
        h * 0.35,
        0,
        w * 0.55,
        h * 0.35,
        Math.max(w, h) * 0.6
      );
      g.addColorStop(0, `rgba(${ELECTRIC}, ${0.035 * alphaScale})`);
      g.addColorStop(0.45, `rgba(${ACCENT}, ${0.018 * alphaScale})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 200) {
          n.vx += (dx / dist) * 0.006;
          n.vy += (dy / dist) * 0.006;
        }
        n.vx *= 0.996;
        n.vy *= 0.996;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${0.55 * alphaScale})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ELECTRIC}, ${0.06 * alphaScale})`;
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.28 * alphaScale;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        if (p.life <= 0 || p.y < -12 || p.x < -12 || p.x > w + 12) {
          particles[i] = spawnParticle();
          continue;
        }
        const fade = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ELECTRIC}, ${(0.12 + fade * 0.4) * alphaScale})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    init();

    if (!reduced) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      tick();
      cancelAnimationFrame(rafRef.current);
    }

    const onResize = () => {
      resize();
      init();
    };

    window.addEventListener("resize", onResize);
    if (fullPage) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
    } else {
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      if (fullPage) {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeave);
      } else {
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [fullPage, intensity]);

  if (fullPage) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
