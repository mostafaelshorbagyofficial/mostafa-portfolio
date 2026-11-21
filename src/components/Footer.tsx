import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { identity, socialProfiles } from '../data/portfolio';
import { OfficialSocialIcon } from './Navigation';
import SectionBackground from './SectionBackground';

export default function Footer() {
  return (
    <footer className="relative px-4 md:px-8 pb-12 pt-10 overflow-hidden">
      <SectionBackground variant="footer" />
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--accent)',
          boxShadow: '6px 8px 0 var(--shadow-ink)',
        }}
        className="relative z-10 max-w-[1180px] mx-auto rounded-[2rem] border-2 overflow-hidden backdrop-blur-md"
      >
        {/* Top Ticket CTA Banner */}
        <div className="px-6 md:px-12 py-12 md:py-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)] font-bold mb-3">
            Ready To Collaborate?
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none mb-7">
            Let&apos;s Build Something Different
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`mailto:${identity.email}`}
              className="btn-pill-primary px-6 py-3 text-xs sm:text-sm"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-secondary px-6 py-3 text-xs sm:text-sm"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Ticket Dashed Divider */}
        <div className="ticket-divider mx-6 md:mx-12" />

        {/* Bottom 3-Column Info Row */}
        <div className="px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--accent)',
                  color: 'var(--gold)',
                }}
                className="w-9 h-9 rounded-full border flex items-center justify-center font-display text-sm font-extrabold"
              >
                M!
              </span>
              <div>
                <p className="font-display text-sm font-extrabold uppercase">
                  {identity.name.en}
                </p>
                <p className="font-arabic text-xs text-[var(--ink-dim)]">
                  {identity.name.ar}
                </p>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed pt-1">
              Media · Marketing · Creative · Production · Content Creation · Technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase text-[var(--ink-muted)]">
            <a href="#home" className="hover:text-[var(--accent)] transition-colors">Home</a>
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <a href="#ecosystem" className="hover:text-[var(--accent)] transition-colors">Disciplines</a>
            <a href="#work" className="hover:text-[var(--accent)] transition-colors">Work</a>
            <a href="#journey" className="hover:text-[var(--accent)] transition-colors">Journey</a>
            <a href="#achievements" className="hover:text-[var(--accent)] transition-colors">Proof</a>
            <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-2">
              {socialProfiles
                .filter((s) => s.verified && Boolean(s.url))
                .map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Mostafa Elshorbagy on ${soc.label}`}
                    title={soc.label}
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--line-strong)',
                      color: 'var(--ink)',
                    }}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
                  >
                    <OfficialSocialIcon id={soc.id} className="w-4 h-4 fill-current" />
                  </a>
                ))}
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-pill-secondary px-5 py-2.5 text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div
          style={{ borderColor: 'var(--line)' }}
          className="px-6 md:px-12 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[var(--ink-dim)]"
        >
          <span>© {new Date().getFullYear()} Mostafa Mohamed Elshorbagy. All rights reserved.</span>
          <span>Cairo, Egypt</span>
        </div>
      </div>
    </footer>
  );
}
