'use client';

import { useEffect, useRef, useCallback } from 'react';

/*
 * Subtle Wispy Mouse Gradient
 * - Soft, blurred tendrils that shift hue over time.
 * - Minimalistic and subtle approach to avoid "blobs" or bright spots.
 */

interface Point {
  x: number;
  y: number;
}

const TRAIL_LENGTH = 50;
const FADE_ALPHA = 0.15; // Soft fade
const HUE_SPEED = 0.4;

const TENDRIL_CONFIGS = [
  { width: 120, speed: 0.07, drift: 45, hueOffset: 0, opacity: 0.05 },
  { width: 90, speed: 0.05, drift: -35, hueOffset: 15, opacity: 0.04 },
  { width: 100, speed: 0.04, drift: 25, hueOffset: -15, opacity: 0.03 },
];

export function MouseGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const trailRef = useRef<Point[]>([]);
  const tendrilPointsRef = useRef<Point[][]>(TENDRIL_CONFIGS.map(() => []));
  const rafRef = useRef<number>(0);
  const hueRef = useRef(260);
  const hasMoved = useRef(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) hasMoved.current = true;
    };
    window.addEventListener('mousemove', onMouseMove);

    const tick = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const W = window.innerWidth;
      const H = window.innerHeight;
      
      hueRef.current = (hueRef.current + HUE_SPEED) % 360;

      // Clear with soft fade
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0, 0, 0, ${FADE_ALPHA})`;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';

      if (hasMoved.current) {
        trailRef.current.push({ ...mouseRef.current });
        if (trailRef.current.length > TRAIL_LENGTH) trailRef.current.shift();
      }

      const trail = trailRef.current;
      if (trail.length < 3) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      TENDRIL_CONFIGS.forEach((cfg, ti) => {
        const tp = tendrilPointsRef.current[ti];

        while (tp.length < trail.length) {
          const src = trail[tp.length] || trail[trail.length - 1];
          tp.push({ x: src.x, y: src.y });
        }
        while (tp.length > trail.length) tp.shift();

        for (let i = 0; i < tp.length; i++) {
          tp[i].x += (trail[i].x - tp[i].x) * cfg.speed;
          tp[i].y += (trail[i].y - tp[i].y) * cfg.speed;
        }

        const currentHue = (hueRef.current + cfg.hueOffset + 360) % 360;
        const color = `hsla(${currentHue}, 75%, 60%, ${cfg.opacity})`;
        
        ctx.beginPath();
        ctx.moveTo(tp[0].x, tp[0].y);

        for (let i = 0; i < tp.length - 1; i++) {
          const p1 = tp[i];
          const p2 = tp[i + 1];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = cfg.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // Add a soft glow instead of a hard core
        ctx.shadowBlur = 60;
        ctx.shadowColor = `hsla(${currentHue}, 75%, 60%, 0.15)`;
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
}
