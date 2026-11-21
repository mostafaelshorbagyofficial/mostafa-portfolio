import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, FileText, Download } from 'lucide-react';
import { identity } from '../data/portfolio';
import SectionBackground from './SectionBackground';

const TOP_DARK_MARQUEE = [
  'MEDIA & ENTERTAINMENT',
  'MARKETING & BUSINESS',
  'CREATIVE DIRECTION',
  'GRAPHIC DESIGN',
  'CONTENT CREATION',
  'VIDEO & PHOTO PRODUCTION',
  'BRAND DEVELOPMENT',
  'VISUAL COMMUNICATION',
];

const BOTTOM_ORANGE_MARQUEE = [
  'FULL-STACK DEVELOPMENT',
  'UI/UX DESIGN',
  'AI-ASSISTED DEVELOPMENT',
  'DIGITAL PRODUCTS',
  'WORKFLOW AUTOMATION',
  'DATA ANALYSIS',
  'IT OPERATIONS',
  'NETWORKING & TECHNICAL SUPPORT',
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Hero — Mostafa Mohamed Elshorbagy"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-0 overflow-hidden"
    >
      <SectionBackground variant="hero" />

      {/* Main Layered Editorial Stage */}
      <div className="relative max-w-[1180px] w-full mx-auto px-6 md:px-8 flex-1 flex flex-col justify-center py-8 md:py-12">
        {/* Monumental Background Watermark */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="pointer-events-none select-none text-center hidden md:block md:absolute md:inset-x-0 md:top-6 z-0 overflow-hidden"
        >
          <span
            className="font-display font-extrabold tracking-tight leading-none block whitespace-nowrap"
            style={{
              fontSize: 'clamp(3.2rem, 8.8vw, 8.2rem)',
              color: 'var(--ink)',
              opacity: 0.06,
            }}
          >
            Mostafa Elshorbagy
          </span>
        </motion.div>

        {/* 3-Part Editorial Composition */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--bg-card)]/80 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--ink-muted)]">
                {identity.location} · Open to Collaborations
              </span>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] font-bold mb-1.5">
                {identity.roleHeadline}
              </p>
              <p className="font-arabic text-xl sm:text-2xl font-bold text-[var(--ink-muted)] mb-1">
                {identity.name.ar}
              </p>
              <h1
                className="font-display font-extrabold uppercase tracking-tight leading-[1.06] break-words"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
              >
                {identity.name.short}
              </h1>
            </div>

            <p className="font-display text-lg sm:text-xl font-semibold leading-snug text-[var(--ink)]">
              {identity.headline}
            </p>

            <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--ink-muted)]">
              {identity.philosophy}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work" className="btn-pill-primary px-5 sm:px-6 py-3 text-xs sm:text-sm">
                <span>Explore Selected Work</span>
                <ArrowDown size={15} />
              </a>
              <a
                href={identity.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV in a new browser tab"
                className="btn-pill-secondary px-5 py-3 text-xs sm:text-sm"
              >
                <FileText size={15} className="text-[var(--accent)]" />
                <span>View CV</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={identity.cvUrl}
                download={identity.cvDownloadName}
                aria-label="Download CV PDF file"
                className="btn-pill-secondary px-5 py-3 text-xs sm:text-sm"
              >
                <Download size={15} className="text-[var(--accent)]" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Center Column: Studio-Lit Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-[var(--accent)]/60 bg-[var(--bg-card)] shadow-[8px_10px_0_var(--shadow-ink)]">
              <img
                src="/images/photo.jpg"
                alt="Mostafa Mohamed Elshorbagy"
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0D0807]/85 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B54] block">
                    ProMedia · ProTech · Save Money
                  </span>
                  <span className="font-display text-sm font-bold text-[#F4ECE6]">
                    Multidisciplinary Builder
                  </span>
                </div>
                <span className="w-9 h-9 rounded-full bg-[#0D0807]/80 border border-[#E8C589]/50 flex items-center justify-center font-display text-xs font-extrabold text-[#E8C589]">
                  M!
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {identity.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--line)',
                }}
                className="p-4 rounded-2xl border flex lg:items-center justify-between flex-col lg:flex-row gap-1"
              >
                <span className="font-display text-3xl font-extrabold text-[var(--accent)] leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)] lg:text-right">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dual Continuously Animated Editorial Marquee Bars */}
      <div className="relative w-full pt-8 pb-6 overflow-hidden marquee-wrap select-none">
        {/* Bar 1 (Top Dark Marquee): Moves continuously Right → Left */}
        <div
          className="w-full py-2.5 overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--line-strong)',
            borderBottom: '1px solid var(--line-strong)',
          }}
        >
          <div className="animate-marquee-left">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {TOP_DARK_MARQUEE.map((item, i) => (
                  <span
                    key={`bar1-${dup}-${i}`}
                    className="font-display text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.18em] uppercase px-4 sm:px-6 text-[var(--ink)] opacity-85 whitespace-nowrap inline-flex items-center gap-4 sm:gap-6"
                  >
                    <span>{item}</span>
                    <span className="text-[var(--accent)] text-xs">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bar 2 (Bottom Orange Marquee): Moves continuously Left → Right */}
        <div
          className="w-full py-3 shadow-lg overflow-hidden"
          style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}
        >
          <div className="animate-marquee-right">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {BOTTOM_ORANGE_MARQUEE.map((item, i) => (
                  <span
                    key={`bar2-${dup}-${i}`}
                    className="font-display text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase px-4 sm:px-6 whitespace-nowrap inline-flex items-center gap-4 sm:gap-6"
                  >
                    <span>{item}</span>
                    <span className="opacity-85 text-xs">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
