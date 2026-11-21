import { useEffect, useRef } from 'react';

export type BackgroundVariant =
  | 'hero'
  | 'about'
  | 'skills'
  | 'work'
  | 'clients'
  | 'footer'
  | 'transition';

interface SectionBackgroundProps {
  variant: BackgroundVariant;
  className?: string;
}

export default function SectionBackground({
  variant,
  className = '',
}: SectionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let isVisible = true;
    let t = Math.random() * 10;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isMobileDevice =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 ||
        window.matchMedia('(pointer: coarse)').matches);

    const staticMode = prefersReduced || isMobileDevice;

    const dustCount = isMobileDevice ? 14 : variant === 'transition' ? 18 : 38;
    const dust = Array.from({ length: dustCount }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      z: 0.25 + Math.random() * 0.75,
      r: 0.65 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
      isWarm: i % 2 === 0,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = isMobileDevice
        ? 1
        : Math.min(window.devicePixelRatio || 1, 1.75);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (staticMode) {
        renderFrame();
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.height <= 0 || rect.width <= 0) return;
      targetX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      targetY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    const renderFrame = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w <= 0 || h <= 0) return;

      const isLight =
        document.documentElement.getAttribute('data-theme') === 'light';
      const alphaScale = isLight ? 0.45 : 1.0;

      ctx.clearRect(0, 0, w, h);

      const px = mouseX - 0.5;
      const py = mouseY - 0.5;

      // 1. Volumetric Ambient Lighting
      const g1 = ctx.createRadialGradient(
        w * (0.24 + px * 0.12),
        h * (0.32 + py * 0.12),
        10,
        w * (0.24 + px * 0.12),
        h * (0.32 + py * 0.12),
        w * 0.62
      );
      g1.addColorStop(0, `rgba(226, 71, 50, ${0.18 * alphaScale})`);
      g1.addColorStop(0.5, `rgba(180, 48, 30, ${0.06 * alphaScale})`);
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(
        w * (0.76 - px * 0.1),
        h * (0.68 - py * 0.1),
        10,
        w * (0.76 - px * 0.1),
        h * (0.68 - py * 0.1),
        w * 0.55
      );
      g2.addColorStop(0, `rgba(232, 197, 137, ${0.11 * alphaScale})`);
      g2.addColorStop(0.5, `rgba(226, 71, 50, ${0.05 * alphaScale})`);
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // 2. Topographic Contour Isolines
      if (variant === 'hero' || variant === 'about' || variant === 'work') {
        const rings = variant === 'work' ? 8 : 6;
        for (let i = 1; i <= rings; i++) {
          ctx.beginPath();
          const baseY = h * 0.12 + (i / rings) * h * 0.78;
          for (let x = 0; x <= w; x += 16) {
            const nx = x / w;
            const y =
              baseY +
              Math.sin(nx * 4.4 + t * 0.35 + i * 0.6 + px * 1.2) *
                (14 + i * 2.4) +
              Math.cos(nx * 7.5 - t * 0.22 + i * 0.85) * 7 +
              py * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle =
            i % 3 === 0
              ? `rgba(232, 197, 137, ${0.075 * alphaScale})`
              : `rgba(226, 71, 50, ${0.068 * alphaScale})`;
          ctx.lineWidth = i % 3 === 0 ? 1.1 : 0.75;
          ctx.stroke();
        }
      }

      // 3. Section-Specific Geometric Wireframes / Technical Circuit Mesh
      if (variant === 'about' || variant === 'work') {
        ctx.strokeStyle = `rgba(232, 197, 137, ${0.055 * alphaScale})`;
        ctx.lineWidth = 0.75;
        const horizon = h * (0.22 + py * 0.05);
        const vpX = w * (0.5 + px * 0.08);
        for (let i = -7; i <= 7; i++) {
          ctx.beginPath();
          ctx.moveTo(vpX + i * 28, horizon);
          ctx.lineTo(vpX + i * 165, h);
          ctx.stroke();
        }
        for (let j = 1; j <= 5; j++) {
          const y = horizon + Math.pow(j / 5, 1.65) * (h - horizon);
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      } else if (variant === 'skills') {
        const step = 48;
        ctx.strokeStyle = `rgba(244, 236, 230, ${0.04 * alphaScale})`;
        ctx.lineWidth = 0.75;
        for (let x = (px * 14) % step; x < w; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = (py * 14) % step; y < h; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        for (let k = 0; k < 5; k++) {
          const rowY = ((k + 1) * step * 2.1) % h;
          const pulseX = ((t * 95 + k * 210) % (w + 140)) - 70;
          const grad = ctx.createLinearGradient(
            pulseX - 65,
            rowY,
            pulseX + 15,
            rowY
          );
          grad.addColorStop(0, 'rgba(226, 71, 50, 0)');
          grad.addColorStop(0.8, `rgba(226, 71, 50, ${0.38 * alphaScale})`);
          grad.addColorStop(1, `rgba(232, 197, 137, ${0.75 * alphaScale})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(pulseX - 65, rowY);
          ctx.lineTo(pulseX + 15, rowY);
          ctx.stroke();
        }
      }

      // 4. 3D Flowing Light Waves & Opposing Client Streams
      if (variant === 'clients') {
        [
          { yBase: h * 0.3, dir: 1, color: '226, 71, 50' },
          { yBase: h * 0.56, dir: -1, color: '232, 197, 137' },
        ].forEach((row) => {
          for (let s = 0; s < 5; s++) {
            ctx.beginPath();
            for (let x = 0; x <= w; x += 14) {
              const nx = x / w;
              const phase = t * 0.95 * row.dir + s * 0.35;
              const y =
                row.yBase +
                Math.sin(nx * 5.5 + phase) * (12 + s * 3.2) +
                Math.cos(nx * 10 - phase * 0.65) * 5 +
                py * 10;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(${row.color}, ${(0.22 - s * 0.035) * alphaScale})`;
            ctx.lineWidth = s === 0 ? 2.0 : 1.0;
            ctx.stroke();
          }
        });
      } else {
        const isHorizon = variant === 'footer' || variant === 'transition';
        const ribbonCount =
          variant === 'hero' || isHorizon ? 14 : 8;
        const baseVertical = isHorizon ? h * 0.68 : h * 0.58;

        for (let r = 0; r < ribbonCount; r++) {
          const progress = r / ribbonCount;
          ctx.beginPath();
          for (let x = 0; x <= w; x += 14) {
            const nx = x / w;
            const crest = isHorizon
              ? Math.exp(-Math.pow((nx - 0.34 - px * 0.06) * 3.1, 2)) * -58
              : Math.sin(nx * Math.PI * 1.5 + t * 0.48 + px) * 28;
            const y =
              baseVertical +
              crest +
              Math.sin(nx * 5.0 + t * 0.62 + r * 0.22) * (16 + r * 1.5) +
              Math.cos(nx * 3.0 - t * 0.4 + r * 0.18) * 12 +
              (r - ribbonCount * 0.5) * 4.0 +
              py * 14;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          const alpha =
            (1 - Math.abs(progress - 0.5) * 1.35) *
            (variant === 'hero' || isHorizon ? 0.28 : 0.15) *
            alphaScale;
          const grad = ctx.createLinearGradient(0, 0, w, 0);
          grad.addColorStop(0, `rgba(226, 71, 50, ${alpha * 0.25})`);
          grad.addColorStop(0.35, `rgba(255, 107, 84, ${alpha})`);
          grad.addColorStop(0.7, `rgba(232, 197, 137, ${alpha * 0.88})`);
          grad.addColorStop(1, `rgba(226, 71, 50, ${alpha * 0.2})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = r % 4 === 0 ? 1.75 : 0.9;
          ctx.stroke();
        }
      }

      // 5. Fine Atmospheric Dust & Subtle Skills Micro-Links
      const pts: { sx: number; sy: number; isWarm: boolean }[] = [];
      for (const p of dust) {
        if (!prefersReduced) {
          p.x = (p.x + p.vx + 1) % 1;
          p.y = (p.y + p.vy + 1) % 1;
        }
        const sx = (p.x + px * 0.05 * p.z) * w;
        const sy = (p.y + py * 0.05 * p.z) * h;
        pts.push({ sx, sy, isWarm: p.isWarm });

        ctx.beginPath();
        ctx.arc(sx, sy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isWarm
          ? `rgba(232, 197, 137, ${0.34 * alphaScale})`
          : `rgba(244, 236, 230, ${0.18 * alphaScale})`;
        ctx.fill();
      }

      if (variant === 'skills') {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].sx - pts[j].sx;
            const dy = pts[i].sy - pts[j].sy;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 85) {
              const a = (1 - d / 85) * 0.11 * alphaScale;
              ctx.strokeStyle = `rgba(226, 71, 50, ${a})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(pts[i].sx, pts[i].sy);
              ctx.lineTo(pts[j].sx, pts[j].sy);
              ctx.stroke();
            }
          }
        }
      }
    };

    const tick = () => {
      if (isVisible) {
        if (!staticMode) {
          t += 0.014;
          mouseX += (targetX - mouseX) * 0.07;
          mouseY += (targetY - mouseY) * 0.07;
        }
        renderFrame();
      }
      if (!staticMode) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    renderFrame();
    if (!staticMode) {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="cinema-grain-overlay absolute inset-0" />
    </div>
  );
}
