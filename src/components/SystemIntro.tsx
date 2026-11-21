import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemIntroProps {
  onComplete: () => void;
}

export default function SystemIntro({ onComplete }: SystemIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const triggerExit = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setProgress(100);
    setIsExiting(true);
    window.setTimeout(() => onComplete(), prefersReduced ? 100 : 420);
  }, [onComplete, prefersReduced]);

  useEffect(() => {
    const duration = prefersReduced ? 500 : 1750;
    const start = performance.now();

    const video = videoRef.current;
    if (video && !prefersReduced) {
      video.muted = true;
      video.playsInline = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    const timer = window.setInterval(() => {
      const pct = Math.min(100, Math.round(((performance.now() - start) / duration) * 100));
      setProgress(pct);
      if (pct >= 100) {
        window.clearInterval(timer);
        triggerExit();
      }
    }, 28);

    const failSafe = window.setTimeout(triggerExit, duration + 800);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(failSafe);
    };
  }, [prefersReduced, triggerExit]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="editorial-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#0D0807] text-[#F4ECE6] flex flex-col items-center justify-between py-10 px-6 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Mostafa Elshorbagy Portfolio"
        >
          {/* Warm Studio Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 45%, rgba(226, 71, 50, 0.16), transparent 55%)',
            }}
          />

          <div className="relative z-10 w-full max-w-[1180px] flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#E24732]">
              Mostafa Elshorbagy
            </span>
            <button
              type="button"
              onClick={triggerExit}
              className="font-mono text-[11px] uppercase tracking-wider text-[#F4ECE6]/60 hover:text-[#F4ECE6] px-3 py-1 rounded-full border border-white/15 transition-colors"
            >
              Skip →
            </button>
          </div>

          {/* Center M! 3D Logo Mark */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border border-[#E24732]/40 bg-[#160E0C] shadow-2xl flex items-center justify-center">
              <video
                ref={videoRef}
                src="/video/logo-preloader.mp4"
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover mix-blend-screen opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-t from-[#0D0807]/50 via-transparent to-transparent">
                <span className="font-display text-5xl font-extrabold text-[#E8C589] tracking-tight">
                  M!
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-extrabold tracking-[0.26em] uppercase text-[#F4ECE6]">
                MOSTAFA
              </p>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#E24732] mt-1">
                MEDIA · MARKETING · CREATIVE · TECH
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-xs flex flex-col gap-2">
            <div className="flex justify-between font-mono text-[11px] text-[#F4ECE6]/60">
              <span>LOADING PORTFOLIO</span>
              <span className="text-[#E24732] font-bold tabular-nums">{progress}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#E24732] rounded-full transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
