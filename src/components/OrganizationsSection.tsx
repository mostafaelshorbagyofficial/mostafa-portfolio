import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { organizations } from '../data/portfolio';

export default function OrganizationsSection() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-24 md:py-32 px-6 md:px-8 max-w-[1180px] mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Organizations, Leadership &amp; Experience
        </p>
        <h2
          id="journey-heading"
          className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-5"
        >
          Professional Journey &amp; Ventures
        </h2>
        <div className="section-rule" />
      </div>

      {/* Reference-Inspired Vertical Vermilion Left-Rail Timeline */}
      <div className="relative pl-7 md:pl-12 space-y-10">
        {/* Continuous vertical vermilion rail */}
        <div
          aria-hidden="true"
          className="absolute left-2 md:left-3.5 top-2 bottom-2 w-0.5 rounded-full"
          style={{
            background:
              'linear-gradient(180deg, var(--accent) 0%, var(--line-strong) 100%)',
          }}
        />

        {organizations.map((org, idx) => (
          <motion.article
            key={org.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: Math.min(idx * 0.06, 0.25) }}
            className="relative"
          >
            {/* Glowing Timeline Node */}
            <span
              aria-hidden="true"
              style={{
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 0 5px var(--bg), 0 0 14px var(--accent)',
              }}
              className="absolute -left-[25px] md:-left-[41px] top-7 w-3 h-3 rounded-full"
            />

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--line-strong)',
              }}
              className="p-6 md:p-8 rounded-3xl border hover:border-[var(--accent)] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Monumental Serif Number & Identity */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-4xl md:text-5xl font-extrabold text-[var(--accent)] leading-none">
                      {org.number}
                    </span>
                    <span
                      style={{
                        backgroundColor: 'var(--accent-soft)',
                        color: 'var(--accent)',
                        borderColor: 'var(--accent)',
                      }}
                      className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    >
                      {org.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight pt-1">
                    {org.organization}
                  </h3>
                  <p className="font-mono text-xs text-[var(--ink-dim)]">{org.period}</p>
                  <p className="text-xs font-semibold text-[var(--accent)] pt-1">
                    {org.role}
                  </p>
                </div>

                {/* Right: Responsibilities & Verified Deliverables */}
                <div className="lg:col-span-8 space-y-5">
                  <p className="font-serif text-base md:text-lg text-[var(--ink)] leading-relaxed">
                    {org.summary}
                  </p>

                  <ul className="space-y-2">
                    {org.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[var(--ink-muted)]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[var(--accent)] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
                    {org.deliverables.map((del) => (
                      <span
                        key={del}
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--line)',
                        }}
                        className="font-mono text-[11px] px-3 py-1 rounded-full border text-[var(--ink)]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
