import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';
import { sixPillars, projects, type Pillar, type PillarId } from '../data/portfolio';

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

function rotateX(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: v.x, y: v.y * c - v.z * s, z: v.y * s + v.z * c };
}

function rotateY(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: v.x * c + v.z * s, y: v.y, z: -v.x * s + v.z * c };
}

function project3D(v: Vec3, width: number, height: number, fov = 560, camDist = 620) {
  const z = v.z + camDist;
  const scale = fov / Math.max(90, z);
  const centerY = width >= 1024 ? height * 0.42 : height * 0.48;
  return {
    x: width / 2 + v.x * scale,
    y: centerY + v.y * scale,
    scale,
    z,
  };
}

/**
 * Art-Directed Custom SVG Discipline Icon — clean geometric vector metaphor per pillar
 */
function PillarAnimatedIcon({
  id,
  active,
}: {
  id: PillarId;
  active: boolean;
}) {
  const strokeColor = active ? '#FFFFFF' : '#E24732';
  const secondaryColor = active ? 'rgba(255, 255, 255, 0.7)' : 'rgba(244, 236, 230, 0.65)';

  if (id === 'media') {
    return (
      <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="13.5"
          fill="none"
          stroke={secondaryColor}
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="8.5"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.6"
          animate={{ scale: [0.94, 1.08, 0.94] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '20px 20px' }}
        />
        <circle cx="20" cy="20" r="3" fill={strokeColor} />
        <path
          d="M11.5 11.5 A12 12 0 0 1 28.5 11.5 M28.5 28.5 A12 12 0 0 1 11.5 28.5"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === 'marketing') {
    return (
      <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="13.5"
          fill="none"
          stroke={secondaryColor}
          strokeWidth="1.3"
        />
        <path
          d="M11 26 L17.5 19.5 L22 22.5 L29 13.5"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 13.5 H29 V18"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === 'creative') {
    return (
      <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
        <polygon
          points="20,6.5 33.5,20 20,33.5 6.5,20"
          fill="none"
          stroke={secondaryColor}
          strokeWidth="1.3"
        />
        <path
          d="M20 11 L26.5 20 L20 29 L13.5 20 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2.3" fill={strokeColor} />
      </svg>
    );
  }

  if (id === 'production') {
    return (
      <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="13.5"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.7"
        />
        <line x1="20" y1="6.5" x2="24.5" y2="15" stroke={secondaryColor} strokeWidth="1.4" />
        <line x1="33.5" y1="20" x2="25" y2="24.5" stroke={secondaryColor} strokeWidth="1.4" />
        <line x1="20" y1="33.5" x2="15.5" y2="25" stroke={secondaryColor} strokeWidth="1.4" />
        <line x1="6.5" y1="20" x2="15" y2="15.5" stroke={secondaryColor} strokeWidth="1.4" />
        <circle cx="20" cy="20" r="3.8" fill={strokeColor} />
      </svg>
    );
  }

  if (id === 'content') {
    return (
      <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
        <rect
          x="7.5"
          y="9.5"
          width="25"
          height="21"
          rx="4.5"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.7"
        />
        <rect x="12" y="14.5" width="15" height="2" rx="1" fill={strokeColor} />
        <rect x="12" y="19.5" width="12" height="1.8" rx="0.9" fill={secondaryColor} />
        <rect x="12" y="24" width="8.5" height="1.8" rx="0.9" fill={secondaryColor} />
        <circle cx="26.5" cy="25" r="2" fill={strokeColor} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 overflow-visible" aria-hidden="true">
      <polygon
        points="20,6.5 32.5,13.5 32.5,26.5 20,33.5 7.5,26.5 7.5,13.5"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 13.5 L20 20.5 L32.5 13.5 M20 20.5 V33.5"
        fill="none"
        stroke={secondaryColor}
        strokeWidth="1.4"
      />
      <circle cx="20" cy="20.5" r="2.6" fill={strokeColor} />
    </svg>
  );
}

interface SixPillarsEcosystemProps {
  onSelectPillarWork?: (pillar: PillarId) => void;
}

export default function SixPillarsEcosystem({ onSelectPillarWork }: SixPillarsEcosystemProps) {
  const [selectedPillarId, setSelectedPillarId] = useState<PillarId>('media');
  const [hoveredPillarId, setHoveredPillarId] = useState<PillarId | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollProgressRef = useRef(0);
  const hitRegionsRef = useRef<{ id: PillarId; x: number; y: number; r: number }[]>([]);

  const activePillar: Pillar =
    sixPillars.find((p) => p.id === selectedPillarId) || sixPillars[0];
  const relatedProjects = projects.filter((p) => p.pillars.includes(activePillar.id)).slice(0, 5);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (vh + rect.height);
      scrollProgressRef.current = Math.max(0, Math.min(1, raw));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 3D Neural Ecosystem + Chemistry Lab Starfield Background Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || 1100;
    let height = canvas.parentElement?.clientHeight || 560;
    const isMobileCanvas = width < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobileCanvas ? 1.25 : 2);
    let isCanvasVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // 1. Chemistry Lab Background Starfield
    const starCount = width < 640 ? 38 : 115;
    const bgStars = Array.from({ length: starCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.45,
      y: (Math.random() - 0.5) * height * 1.45,
      z: Math.random() * 520 - 160,
      r: Math.random() * 1.55 + 0.45,
      alpha: Math.random() * 0.65 + 0.25,
      twinkleSpeed: Math.random() * 0.022 + 0.008,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.13,
      vy: (Math.random() - 0.5) * 0.1,
      warm: Math.random() > 0.84,
    }));

    // 2. 3D Geodesic Neural Ecosystem Hubs & Sub-Capability Synapses
    const getHubRadius = () => Math.min(width, height) * (width < 640 ? 0.32 : 0.34);

    const buildNeuralGraph = (hubR: number) => {
      const hubs = sixPillars.map((p, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / sixPillars.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        return {
          pillar: p,
          base: {
            x: hubR * Math.sin(phi) * Math.cos(theta),
            y: hubR * 0.74 * Math.cos(phi),
            z: hubR * Math.sin(phi) * Math.sin(theta),
          },
        };
      });

      const subs: { pillarId: PillarId; label: string; pos: Vec3; hubIdx: number }[] = [];
      hubs.forEach((hub, hIdx) => {
        hub.pillar.capabilities.forEach((cap, cIdx) => {
          const angle1 = (cIdx / hub.pillar.capabilities.length) * Math.PI * 2;
          const angle2 = hIdx * 1.15 + cIdx * 0.72;
          const spread = (width < 640 ? 50 : 74) + (cIdx % 2) * 20;
          subs.push({
            pillarId: hub.pillar.id,
            label: cap,
            hubIdx: hIdx,
            pos: {
              x: hub.base.x + Math.cos(angle1) * Math.cos(angle2) * spread,
              y: hub.base.y + Math.sin(angle1) * spread * 0.85,
              z: hub.base.z + Math.cos(angle1) * Math.sin(angle2) * spread,
            },
          });
        });
      });

      return { hubs, subs };
    };

    const { hubs: neuralHubs, subs: subNodes } = buildNeuralGraph(getHubRadius());

    const pulses = Array.from({ length: 24 }, (_, i) => ({
      fromHub: i % sixPillars.length,
      toHub: (i * 2 + 1) % sixPillars.length,
      t: (i / 24) % 1,
      speed: 0.0036 + (i % 4) * 0.0013,
      white: i % 3 === 0,
    }));

    let rafId = 0;
    let time = 0;

    const render = () => {
      if (!isCanvasVisible) {
        rafId = requestAnimationFrame(render);
        return;
      }
      if (isPlaying) {
        time += 0.01;
      }

      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.075;
      m.y += (m.targetY - m.y) * 0.075;

      // LAYER 1: CHEMISTRY LAB DEEP BLACK & STARFIELD ATMOSPHERE
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, width, height);

      const lightX = width * (0.5 + m.x * 0.24);
      const lightY = height * (0.45 + m.y * 0.24);
      const orangeHalo = ctx.createRadialGradient(
        lightX,
        lightY,
        10,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.65
      );
      orangeHalo.addColorStop(0, 'rgba(226, 71, 50, 0.15)');
      orangeHalo.addColorStop(0.45, 'rgba(255, 255, 255, 0.032)');
      orangeHalo.addColorStop(1, 'rgba(6, 6, 8, 0)');
      ctx.fillStyle = orangeHalo;
      ctx.fillRect(0, 0, width, height);

      const projectedStars: { sx: number; sy: number; r: number; alpha: number; warm: boolean }[] = [];
      for (let i = 0; i < bgStars.length; i++) {
        const st = bgStars[i];
        if (isPlaying) {
          st.x += st.vx;
          st.y += st.vy;
          st.phase += st.twinkleSpeed;
        }
        const halfW = width * 0.72;
        const halfH = height * 0.72;
        if (st.x < -halfW) st.x = halfW;
        if (st.x > halfW) st.x = -halfW;
        if (st.y < -halfH) st.y = halfH;
        if (st.y > halfH) st.y = -halfH;

        const depthScale = 520 / Math.max(140, 520 + st.z);
        const sx = width / 2 + (st.x - m.x * 32) * depthScale;
        const sy = height / 2 + (st.y - m.y * 24) * depthScale;
        const twinkle = st.alpha * (0.65 + 0.35 * Math.sin(st.phase));

        projectedStars.push({
          sx,
          sy,
          r: st.r * depthScale,
          alpha: twinkle,
          warm: st.warm,
        });
      }

      for (let i = 0; i < projectedStars.length; i++) {
        const a = projectedStars[i];
        for (let j = i + 1; j < projectedStars.length; j++) {
          const b = projectedStars[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const distSq = dx * dx + dy * dy;
          if (distSq < 6200) {
            const lineA = (1 - distSq / 6200) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle =
              a.warm || b.warm
                ? `rgba(255, 130, 102, ${lineA})`
                : `rgba(255, 255, 255, ${lineA})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projectedStars.length; i++) {
        const st = projectedStars[i];
        if (st.r > 1.15) {
          const starGlow = ctx.createRadialGradient(st.sx, st.sy, 0, st.sx, st.sy, st.r * 3.5);
          starGlow.addColorStop(
            0,
            st.warm
              ? `rgba(255, 150, 120, ${st.alpha * 0.55})`
              : `rgba(255, 255, 255, ${st.alpha * 0.55})`
          );
          starGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = starGlow;
          ctx.beginPath();
          ctx.arc(st.sx, st.sy, st.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(st.sx, st.sy, st.r, 0, Math.PI * 2);
        ctx.fillStyle = st.warm
          ? `rgba(255, 185, 160, ${st.alpha})`
          : `rgba(255, 255, 255, ${st.alpha})`;
        ctx.fill();
      }

      // LAYER 2: 3D NEURAL ECOSYSTEM
      const camDist = 630 - scrollProgressRef.current * 80;
      const rotY = time * 0.4 + m.x * 1.05;
      const rotX = Math.sin(time * 0.26) * 0.17 + m.y * 0.68 + (scrollProgressRef.current - 0.5) * 0.25;

      const projectedHubs = neuralHubs.map((h) => {
        const r1 = rotateY(h.base, rotY);
        const r2 = rotateX(r1, rotX);
        return {
          ...h,
          world: r2,
          proj: project3D(r2, width, height, 560, camDist),
        };
      });

      const projectedSubs = subNodes.map((s) => {
        const r1 = rotateY(s.pos, rotY);
        const r2 = rotateX(r1, rotX);
        return {
          ...s,
          proj: project3D(r2, width, height, 560, camDist),
        };
      });

      // Cross-discipline neural fibers
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const a = projectedHubs[i];
          const b = projectedHubs[j];
          const isHighlighted =
            a.pillar.id === selectedPillarId || b.pillar.id === selectedPillarId;

          ctx.beginPath();
          ctx.moveTo(a.proj.x, a.proj.y);
          ctx.lineTo(b.proj.x, b.proj.y);
          ctx.strokeStyle = isHighlighted
            ? 'rgba(226, 71, 50, 0.48)'
            : 'rgba(255, 255, 255, 0.11)';
          ctx.lineWidth = isHighlighted ? 1.5 : 0.75;
          ctx.stroke();
        }
      }

      // Synaptic signal pulses
      pulses.forEach((p) => {
        if (isPlaying) {
          p.t = (p.t + p.speed) % 1;
        }
        const a = projectedHubs[p.fromHub];
        const b = projectedHubs[p.toHub];
        const px = a.proj.x + (b.proj.x - a.proj.x) * p.t;
        const py = a.proj.y + (b.proj.y - a.proj.y) * p.t;

        const pGlow = ctx.createRadialGradient(px, py, 0, px, py, 7.5);
        pGlow.addColorStop(0, p.white ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 107, 84, 0.9)');
        pGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = pGlow;
        ctx.beginPath();
        ctx.arc(px, py, 7.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.white ? '#FFFFFF' : '#FF6B54';
        ctx.fill();
      });

      // Sub-capability nodes & dendrites
      projectedSubs.forEach((sub) => {
        const parent = projectedHubs[sub.hubIdx];
        const isSelected = sub.pillarId === selectedPillarId;

        ctx.beginPath();
        ctx.moveTo(parent.proj.x, parent.proj.y);
        ctx.lineTo(sub.proj.x, sub.proj.y);
        ctx.strokeStyle = isSelected
          ? 'rgba(226, 71, 50, 0.45)'
          : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = isSelected ? 1.1 : 0.55;
        ctx.stroke();

        const r = Math.max(1.8, (isSelected ? 3.8 : 2.6) * sub.proj.scale);
        ctx.beginPath();
        ctx.arc(sub.proj.x, sub.proj.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#FF6B54' : 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        if (isSelected && width > 640) {
          ctx.font = '500 10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(244, 236, 230, 0.86)';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(sub.label, sub.proj.x + r + 5, sub.proj.y);
        }
      });

      // Sort hubs back-to-front & render primary 3D discipline spheres with NUMBER CENTERED INSIDE
      const newHits: { id: PillarId; x: number; y: number; r: number }[] = [];
      const sortedHubs = [...projectedHubs].sort((a, b) => b.proj.z - a.proj.z);

      sortedHubs.forEach((h) => {
        const isSelected = h.pillar.id === selectedPillarId;
        const isHovered = h.pillar.id === hoveredPillarId;
        const radius = Math.max(18, (isSelected ? 27 : isHovered ? 24 : 21) * h.proj.scale);

        newHits.push({
          id: h.pillar.id,
          x: h.proj.x,
          y: h.proj.y,
          r: Math.max(30, radius + 12),
        });

        // Volumetric halo around 3D node
        const hubHalo = ctx.createRadialGradient(
          h.proj.x,
          h.proj.y,
          radius * 0.3,
          h.proj.x,
          h.proj.y,
          radius * 2.2
        );
        hubHalo.addColorStop(
          0,
          isSelected ? 'rgba(226, 71, 50, 0.48)' : 'rgba(255, 255, 255, 0.14)'
        );
        hubHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = hubHalo;
        ctx.beginPath();
        ctx.arc(h.proj.x, h.proj.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Outer precision ring for active/hovered node
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(h.proj.x, h.proj.y, radius + 5, 0, Math.PI * 2);
          ctx.strokeStyle = isSelected ? '#FF6B54' : 'rgba(255, 107, 84, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // 3D Shaded Sphere Node Body
        const sphereGrad = ctx.createRadialGradient(
          h.proj.x - radius * 0.3,
          h.proj.y - radius * 0.3,
          radius * 0.1,
          h.proj.x,
          h.proj.y,
          radius
        );
        if (isSelected) {
          sphereGrad.addColorStop(0, '#FF7B66');
          sphereGrad.addColorStop(0.55, '#E24732');
          sphereGrad.addColorStop(1, '#8C2214');
        } else {
          sphereGrad.addColorStop(0, '#2A1916');
          sphereGrad.addColorStop(0.7, '#150C0A');
          sphereGrad.addColorStop(1, '#0A0605');
        }

        ctx.beginPath();
        ctx.arc(h.proj.x, h.proj.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrad;
        ctx.fill();
        ctx.lineWidth = isSelected ? 2.2 : 1.5;
        ctx.strokeStyle = isSelected ? '#FFFFFF' : '#E24732';
        ctx.stroke();

        // PILLAR NUMBER STRICTLY CENTERED INSIDE THE CIRCULAR 3D NODE
        const numFontSize = Math.max(11, Math.round(13 * h.proj.scale));
        ctx.font = `800 ${numFontSize}px "Sora", sans-serif`;
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(h.pillar.number, h.proj.x, h.proj.y + 0.5);

        // Discipline Title Pill below the 3D Node
        const titleText = width < 640 ? h.pillar.shortTitle.toUpperCase() : h.pillar.title;
        ctx.font = `700 ${Math.max(9.5, Math.round(10.5 * h.proj.scale))}px "Sora", sans-serif`;
        const textWidth = ctx.measureText(titleText).width;
        const pillW = textWidth + 16;
        const pillH = 20;
        const pillX = h.proj.x - pillW / 2;
        const pillY = h.proj.y + radius + 9;

        ctx.fillStyle = isSelected ? 'rgba(226, 71, 50, 0.92)' : 'rgba(12, 10, 12, 0.82)';
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 999);
        ctx.fill();
        ctx.strokeStyle = isSelected ? '#FF6B54' : 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(titleText, h.proj.x, pillY + pillH / 2 + 0.5);
      });

      hitRegionsRef.current = newHits;
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [selectedPillarId, hoveredPillarId, isPlaying]);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width;
    const ry = (e.clientY - rect.top) / rect.height;
    mouseRef.current.targetX = (rx - 0.5) * 2;
    mouseRef.current.targetY = (ry - 0.5) * 2;

    const lx = e.clientX - rect.left;
    const ly = e.clientY - rect.top;
    let hit: PillarId | null = null;
    for (const r of hitRegionsRef.current) {
      if (Math.hypot(lx - r.x, ly - r.y) <= r.r) {
        hit = r.id;
        break;
      }
    }
    if (hit !== hoveredPillarId) {
      setHoveredPillarId(hit);
    }
  };

  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const lx = e.clientX - rect.left;
    const ly = e.clientY - rect.top;
    for (const r of hitRegionsRef.current) {
      if (Math.hypot(lx - r.x, ly - r.y) <= r.r) {
        setSelectedPillarId(r.id);
        break;
      }
    }
  };

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      aria-labelledby="ecosystem-heading"
      className="py-24 md:py-32 px-6 md:px-8 max-w-[1180px] mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Six-Pillar Professional Identity
        </p>
        <h2
          id="ecosystem-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
        >
          An Integrated Creative &amp; Digital Ecosystem
        </h2>
        <div className="section-rule" />
      </div>

      {/* Main Centerpiece: 3D Neural Ecosystem with Chemistry Lab Starfield Background */}
      <div
        style={{
          borderColor: 'var(--accent)',
          boxShadow: '6px 8px 0 var(--shadow-ink)',
        }}
        className="relative w-full rounded-[2rem] border-2 overflow-hidden bg-[#060608] text-[#F4ECE6] mb-10 select-none"
      >
        <div
          onMouseMove={handleStageMouseMove}
          onMouseLeave={() => {
            mouseRef.current.targetX = 0;
            mouseRef.current.targetY = 0;
            setHoveredPillarId(null);
          }}
          onClick={handleStageClick}
          className={`relative w-full h-[400px] sm:h-[470px] lg:h-[600px] ${
            hoveredPillarId ? 'cursor-pointer' : 'cursor-grab'
          }`}
        >
          <canvas ref={canvasRef} className="block w-full h-full" />

          {/* Top Bar inside 3D Stage */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full border border-white/15 bg-[#0A0A0E]/80 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E24732] animate-ping" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#F4ECE6]">
                {activePillar.nodeLabel}
              </span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-[#0A0A0E]/80 backdrop-blur-md">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying((prev) => !prev);
                }}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#FF6B54] hover:text-white transition-colors"
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                <span>{isPlaying ? 'Live' : 'Paused'}</span>
              </button>
              <span className="text-white/20">|</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  mouseRef.current.targetX = 0;
                  mouseRef.current.targetY = 0;
                  setIsPlaying(true);
                }}
                aria-label="Reset 3D orientation"
                className="text-white/70 hover:text-white transition-colors"
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Integrated Glass HUD Overlay */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative lg:absolute lg:bottom-4 lg:left-4 lg:right-4 p-4 sm:p-5 lg:rounded-2xl border-t lg:border border-white/15 bg-[#0B090A]/90 backdrop-blur-xl cursor-default"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              <div className="lg:col-span-5 flex items-start gap-3.5">
                {/* Circular Node Badge with Number Centered Inside */}
                <div className="w-11 h-11 rounded-full border-2 border-[#FF6B54] bg-[#E24732] flex items-center justify-center shrink-0 shadow-md">
                  <span className="font-display text-sm font-extrabold text-white leading-none">
                    {activePillar.number}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF6B54]">
                      {activePillar.nodeLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {activePillar.title}
                  </h3>
                  <p className="text-xs text-[#F4ECE6]/75 leading-relaxed line-clamp-2 mt-0.5">
                    {activePillar.summary}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-wrap gap-1.5">
                {activePillar.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/12 bg-white/[0.04] text-[#F4ECE6]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="lg:col-span-2 flex lg:justify-end items-center justify-between gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
                <span className="font-mono text-[10px] text-white/60 lg:hidden">
                  {relatedProjects.length} verified projects
                </span>
                <a
                  href="#work"
                  onClick={() => onSelectPillarWork?.(activePillar.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E24732] hover:bg-[#FF6B54] text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>View Work</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 6 Interactive Discipline Cards — Pillar Number Centered Inside Circular Node */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sixPillars.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          const pillarProjects = projects.filter((p) => p.pillars.includes(pillar.id)).slice(0, 3);

          return (
            <div key={pillar.id} className="relative group">
              <div
                aria-hidden="true"
                style={{ backgroundColor: 'var(--accent)' }}
                className="absolute inset-0 rounded-3xl transition-transform duration-300 translate-x-0 translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5 opacity-90"
              />
              <button
                type="button"
                onClick={() => setSelectedPillarId(pillar.id)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isSelected ? 'var(--accent)' : 'var(--line-strong)',
                }}
                className="relative z-10 w-full h-full text-left p-6 rounded-3xl border flex flex-col justify-between gap-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Circular Node with Pillar Number Centered Inside */}
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: isSelected ? 'var(--accent)' : 'var(--bg-soft)',
                          borderColor: 'var(--accent)',
                          color: isSelected ? '#FFFFFF' : 'var(--accent)',
                        }}
                        className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-display text-xs font-extrabold leading-none shrink-0"
                      >
                        {pillar.number}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
                        {pillar.capabilities.length} Capabilities
                      </span>
                    </div>

                    {/* Art-Directed Custom SVG Discipline Icon */}
                    <div
                      style={{
                        backgroundColor: isSelected ? 'var(--accent)' : 'var(--bg-soft)',
                        borderColor: isSelected ? 'var(--accent)' : 'var(--line-strong)',
                      }}
                      className="w-10 h-10 rounded-2xl border flex items-center justify-center transition-colors duration-300 group-hover:border-[var(--accent)]"
                    >
                      <PillarAnimatedIcon id={pillar.id} active={isSelected} />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[var(--ink-muted)] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-dashed border-[var(--line-strong)] space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {pillarProjects.map((pr) => (
                      <span
                        key={pr.id}
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--ink-muted)]"
                      >
                        <CheckCircle2 size={11} className="text-[var(--accent)] shrink-0" />
                        <span className="truncate max-w-[140px]">{pr.title}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
