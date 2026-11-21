import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  const featured = achievements.find((a) => a.featured);
  const certs = achievements.filter((a) => !a.featured);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-24 md:py-32 px-6 md:px-8 max-w-[1180px] mx-auto"
    >
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Featured Recognition &amp; Verified Credentials
        </p>
        <h2
          id="achievements-heading"
          className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-5"
        >
          Achievements &amp; Professional Recognition
        </h2>
        <div className="section-rule" />
      </div>

      {/* Featured 1st Place Award — Horizontal Editorial Showcase */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65 }}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--accent)',
            boxShadow: '6px 8px 0 var(--shadow-ink)',
          }}
          className="mb-12 p-7 md:p-10 rounded-3xl border-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)] text-[var(--accent)] font-mono text-xs font-bold uppercase tracking-wider">
              <Trophy size={14} />
              <span>Featured Recognition · {featured.year}</span>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
                FIRST PLACE WINNER
              </h3>
              <p className="font-display text-xl md:text-2xl font-bold text-[var(--accent)] mt-1">
                {featured.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {featured.project && (
                <div
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--line-strong)',
                  }}
                  className="p-3.5 rounded-2xl border"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] block mb-1">
                    Project
                  </span>
                  <span className="font-display text-base font-extrabold uppercase text-[var(--ink)] flex items-center gap-1.5">
                    <Award size={15} className="text-[var(--accent)] shrink-0" />
                    {featured.project}
                  </span>
                </div>
              )}

              <div
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  borderColor: 'var(--line-strong)',
                }}
                className="p-3.5 rounded-2xl border"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] block mb-1">
                  Institution
                </span>
                <span className="font-display text-sm font-bold text-[var(--ink)]">
                  {featured.issuer}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[var(--line-strong)] aspect-[4/3]">
              <img
                src={featured.image}
                alt={`${featured.title} — ${featured.subtitle}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Horizontal Editorial Strip of Verified Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
            }}
            className="p-5 rounded-3xl border hover:border-[var(--accent)] transition-colors flex flex-col justify-between gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--line)] aspect-[4/3]">
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold">
                  {cert.issuer} · {cert.year}
                </span>
                <CheckCircle2 size={13} className="text-[var(--accent)] shrink-0" />
              </div>
              <h4 className="font-display text-lg font-extrabold uppercase mt-1 mb-1">
                {cert.title}
              </h4>
              <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                {cert.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
