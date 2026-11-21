import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Building2 } from 'lucide-react';
import { identity } from '../data/portfolio';
import InteractiveSkillsSection from './InteractiveSkillsSection';
import SectionBackground from './SectionBackground';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 md:py-32 px-6 md:px-8 max-w-[1260px] mx-auto overflow-hidden"
    >
      <SectionBackground variant="about" />
      <div className="relative z-10 max-w-[1220px] mx-auto">
      {/* Editorial Section Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Who Am I
        </p>
        <h2
          id="about-heading"
          className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-5"
        >
          More Than Code — A Multidisciplinary Builder
        </h2>
        <div className="section-rule" />
      </div>

      {/* Vertically Balanced 2-Column Editorial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left: Authentic Award Photograph & Academic/Institutional Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl border gap-5"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--line-strong)',
          }}
        >
          <div className="space-y-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[var(--line)]">
              <img
                src="/images/step-forward-award.jpg"
                alt="Mostafa Elshorbagy — 1st Place Step Forward Business Conference"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D0807]/85 border border-[#E8C589]/50 font-mono text-[10px] uppercase tracking-wider text-[#E8C589]">
                1st Place · CIC 2025
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)] font-semibold">
                Education &amp; Base
              </p>
              <h3 className="font-display text-xl font-extrabold uppercase">
                Business Technology · CIC
              </h3>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                Studying Business Technology at Canadian International College (Cairo) while actively leading digital execution, media presentations, and product ventures.
              </p>
            </div>
          </div>

          {/* Compact Verified Institutional Highlights for Balanced Column Density */}
          <div className="pt-4 border-t border-[var(--line)] space-y-2.5">
            <div
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line)',
              }}
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-3"
            >
              <GraduationCap size={16} className="text-[var(--accent)] shrink-0" />
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]">
                  Academic Program
                </p>
                <p className="text-xs font-bold text-[var(--ink)] truncate">
                  Canadian International College (CIC) · Cairo
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line)',
              }}
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-3"
            >
              <Building2 size={16} className="text-[var(--accent)] shrink-0" />
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]">
                  Enterprise IT Training
                </p>
                <p className="text-xs font-bold text-[var(--ink)] truncate">
                  IT Internship · Egyptian Airports Company (ICT)
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line)',
              }}
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-3"
            >
              <Trophy size={16} className="text-[var(--gold)] shrink-0" />
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]">
                  Conference Recognition
                </p>
                <p className="text-xs font-bold text-[var(--ink)] truncate">
                  1st Place Winner · Step Forward Business Conference
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Structured Editorial Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="lg:col-span-7 p-7 md:p-10 rounded-3xl border flex flex-col justify-between gap-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--line-strong)',
          }}
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-2xl md:text-3xl font-extrabold uppercase">
                Who Is Mostafa?
              </span>
              <span
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                  borderColor: 'var(--accent)',
                }}
                className="font-mono text-xs font-bold px-3.5 py-1 rounded-full border"
              >
                6 Disciplines · 1 Ecosystem
              </span>
            </div>

            {identity.bio.map((paragraph, idx) => (
              <p
                key={idx}
                className="font-serif text-base md:text-lg leading-relaxed text-[var(--ink-muted)]"
              >
                {paragraph}
              </p>
            ))}

            <p className="text-sm md:text-[15px] leading-relaxed text-[var(--ink-muted)]">
              My background spans an earlier period in hands-on <strong className="text-[var(--ink)]">Content Creation</strong> (concepts, scripts, storytelling &amp; social video), commercial agency work in <strong className="text-[var(--ink)]">Media, Marketing, Creative Direction &amp; Production</strong> through ProMedia, and full-stack software &amp; AI execution through ProTech.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-5 border-t border-[var(--line)]">
            {[
              'Media & Entertainment',
              'Marketing & Business',
              'Creative & Design',
              'Video & Photo Production',
              'Content Creation',
              'Technology & AI',
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--line)',
                }}
                className="font-mono text-[11px] px-3 py-2.5 rounded-xl border text-center text-[var(--ink)] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Visual Technology & Skills Showcase (Replaces Static Text Pills) */}
      <InteractiveSkillsSection />
      </div>
    </section>
  );
}
