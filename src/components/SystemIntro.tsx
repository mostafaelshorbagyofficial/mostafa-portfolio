import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemIntroProps {
  onComplete: () => void;
}

export default function SystemIntro({ onComplete }: SystemIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(15);
  const [isExiting, setIsExiting] = useState(false);

  const isDesktop =
    typeof window !== 'undefined' &&
    window.innerWidth >= 768 &&
    !window.matchMedia('(pointer: coarse)').matches;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const triggerExit = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      window.sessionStorage.setItem('mostafa-intro-seen', '1');
    } catch {
      /* ignore storage errors */
    }
    setProgress(100);
    setIsExiting(true);
    window.setTimeout(() => onComplete(), prefersReduced ? 40 : 180);
  }, [onComplete, prefersReduced]);

  useEffect(() => {
    // Skip immediately on repeat session visits or reduced motion preference
    try {
      if (prefersReduced || window.sessionStorage.getItem('mostafa-intro-seen') === '1') {
        completedRef.current = true;
        onComplete();
        return;
      }
    } catch {
      /* ignore */
    }

    // Fast, non-blocking readiness sequence (~450ms on mobile, ~650ms on desktop)
    const duration = isDesktop ? 620 : 420;
    const start = performance.now();

    const video = videoRef.current;
    if (video && isDesktop) {
      video.muted = true;
      video.playsInline = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    let rafId = 0;
    const step = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct >= 100) {
        triggerExit();
      } else {
        rafId = window.requestAnimationFrame(step);
      }
    };
    rafId = window.requestAnimationFrame(step);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        triggerExit();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    const failSafe = window.setTimeout(triggerExit, duration + 250);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(failSafe);
    };
  }, [isDesktop, onComplete, prefersReduced, triggerExit]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="editorial-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onClick={triggerExit}
          className="fixed inset-0 z-50 bg-[#080605] text-[#F4ECE6] flex flex-col items-center justify-between py-8 px-6 select-none overflow-hidden cursor-pointer"
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
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#E24732] font-bold">
              Mostafa Elshorbagy
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                triggerExit();
              }}
              aria-label="Skip intro and enter portfolio immediately"
              className="font-mono text-xs uppercase tracking-wider text-[#F4ECE6] bg-[#1D110F] hover:bg-[#E24732] px-4 py-2 min-h-[40px] rounded-full border border-[#E24732]/60 transition-colors shadow-md cursor-pointer"
            >
              Skip Intro →
            </button>
          </div>

          {/* Center M! 3D Logo Mark — Zero-Video Instant Vector on Mobile, Video Accent on Desktop */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden border border-[#E24732]/50 bg-[#140D0B] shadow-2xl flex items-center justify-center">
              {isDesktop && (
                <video
                  ref={videoRef}
                  src="/video/logo-preloader.mp4"
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-75"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-t from-[#080605]/60 via-transparent to-transparent">
                <span className="font-display text-5xl font-extrabold text-[#E8C589] tracking-tight drop-shadow-md">
                  M!
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-extrabold tracking-[0.24em] uppercase text-[#F4ECE6]">
                MOSTAFA ELSHORBAGY
              </p>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E24732] mt-1">
                MEDIA · MARKETING · CREATIVE · TECH
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-3">
            <div className="w-full flex flex-col gap-1.5">
              <div className="flex justify-between font-mono text-[11px] text-[#F4ECE6]/70">
                <span>READY</span>
                <span className="text-[#E24732] font-bold tabular-nums">{progress}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#E24732] rounded-full transition-[width] duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                triggerExit();
              }}
              className="font-mono text-[11px] uppercase tracking-wider text-[#E8C589] hover:text-white underline underline-offset-4 py-1 cursor-pointer"
            >
              Tap anywhere to skip loading
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
