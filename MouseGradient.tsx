import { useEffect, useRef } from 'react';

interface OrbConfig {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  offsetX: number;
  offsetY: number;
  speed: number;
  color: string;
  size: number;
  blur: number;
}

const ORB_CONFIGS: Omit<OrbConfig, 'x' | 'y' | 'targetX' | 'targetY'>[] = [
  { offsetX: -100, offsetY: -80,  speed: 0.055, color: 'rgba(255, 90, 120, 0.52)',  size: 520, blur: 120 },
  { offsetX:  130, offsetY: -60,  speed: 0.045, color: 'rgba(255, 160, 40, 0.48)',  size: 460, blur: 110 },
  { offsetX:  80,  offsetY:  140, speed: 0.065, color: 'rgba(180, 248, 60, 0.42)',  size: 400, blur: 105 },
  { offsetX: -140, offsetY:  100, speed: 0.040, color: 'rgba(40, 220, 195, 0.50)',  size: 480, blur: 115 },
  { offsetX:   20, offsetY: -160, speed: 0.060, color: 'rgba(155, 50, 255, 0.42)',  size: 440, blur: 115 },
  { offsetX:  170, offsetY:  90,  speed: 0.072, color: 'rgba(55, 145, 255, 0.44)',  size: 390, blur: 105 },
];

export function MouseGradient() {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const orbsRef = useRef<OrbConfig[]>(
    ORB_CONFIGS.map(cfg => ({
      ...cfg,
      x: typeof window !== 'undefined' ? window.innerWidth / 2 + cfg.offsetX : cfg.offsetX,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 + cfg.offsetY : cfg.offsetY,
      targetX: 0,
      targetY: 0,
    }))
  );
  const mouseRef = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 400,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300,
  });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const tick = () => {
      const orbs = orbsRef.current;
      const mouse = mouseRef.current;

      orbs.forEach((orb, i) => {
        orb.targetX = mouse.x + orb.offsetX;
        orb.targetY = mouse.y + orb.offsetY;
        orb.x += (orb.targetX - orb.x) * orb.speed;
        orb.y += (orb.targetY - orb.y) * orb.speed;

        const el = divRefs.current[i];
        if (el) {
          el.style.transform = `translate(${orb.x - orb.size / 2}px, ${orb.y - orb.size / 2}px)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {ORB_CONFIGS.map((cfg, i) => (
        <div
          key={i}
          ref={el => { divRefs.current[i] = el; }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: cfg.size,
            height: cfg.size,
            borderRadius: '50%',
            background: cfg.color,
            filter: `blur(${cfg.blur}px)`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
