import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Search, Server, ExternalLink } from 'lucide-react';
import { projects, sixPillars, type PillarId, type Project } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import SectionBackground from './SectionBackground';

interface ProjectGalleryProps {
  externalFilter?: PillarId | 'all';
}

export default function ProjectGallery({ externalFilter = 'all' }: ProjectGalleryProps) {
  const [activePillar, setActivePillar] = useState<PillarId | 'all'>(externalFilter);
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setActivePillar(externalFilter);
    if (externalFilter !== 'all') setShowAll(true);
  }, [externalFilter]);

  const q = query.trim().toLowerCase();
  const filtered = projects.filter((p) => {
    const matchesPillar = activePillar === 'all' || p.pillars.includes(activePillar);
    if (!matchesPillar) return false;
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.industry.toLowerCase().includes(q) ||
      p.projectType.toLowerCase().includes(q) ||
      (p.company && p.company.toLowerCase().includes(q)) ||
      p.tools.some((t) => t.toLowerCase().includes(q))
    );
  });

  const displayed = showAll || q.length > 0 ? filtered : filtered.slice(0, 9);
  const totalDeployments = projects.reduce((acc, p) => acc + p.vercelDeployments.length, 0);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden"
    >
      <SectionBackground variant="work" />
      <div className="relative z-10 max-w-[1180px] mx-auto">
      {/* Editorial Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="mb-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Visual Showcase · 90+ Total Projects · {totalDeployments} Live Deployments Featured
        </p>
        <h2
          id="work-heading"
          className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-5"
        >
          Selected Work &amp; Live Previews
        </h2>
        <div className="section-rule" />
      </motion.div>

      {/* Discipline Filter Tabs + Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by discipline">
          <button
            type="button"
            role="tab"
            aria-selected={activePillar === 'all'}
            onClick={() => setActivePillar('all')}
            style={{
              backgroundColor: activePillar === 'all' ? 'var(--accent)' : 'var(--bg-card)',
              color: activePillar === 'all' ? '#FFFFFF' : 'var(--ink-muted)',
              borderColor: activePillar === 'all' ? 'var(--accent)' : 'var(--line-strong)',
            }}
            className="px-4 py-2 rounded-full border font-mono text-xs font-semibold uppercase tracking-wide transition-colors"
          >
            All ({projects.length})
          </button>
          {sixPillars.map((pillar) => {
            const active = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActivePillar(pillar.id)}
                style={{
                  backgroundColor: active ? 'var(--accent)' : 'var(--bg-card)',
                  color: active ? '#FFFFFF' : 'var(--ink-muted)',
                  borderColor: active ? 'var(--accent)' : 'var(--line-strong)',
                }}
                className="px-3.5 py-2 rounded-full border font-mono text-xs font-semibold uppercase tracking-wide transition-colors"
              >
                {pillar.shortTitle}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-64">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-dim)] pointer-events-none"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search project or industry..."
            aria-label="Search projects"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
              color: 'var(--ink)',
            }}
            className="w-full pl-9 pr-4 py-2 rounded-full border text-xs font-mono placeholder:text-[var(--ink-dim)] focus:border-[var(--accent)] focus:outline-none"
          />
        </div>
      </div>

      {/* Visual-First 3-Layer Project Showcase Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayed.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.42,
                delay: Math.min((idx % 3) * 0.07, 0.21),
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--line-strong)',
              }}
              className="group rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-14px_rgba(226,71,50,0.28)]"
            >
              {/* LAYER 1 — VISUAL PREVIEW (Clickable to Live Site or Case Study) */}
              {project.productionUrl ? (
                <a
                  href={project.productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live website`}
                  className="relative aspect-[16/10] w-full overflow-hidden block bg-[#120A09] border-b border-[var(--line)]"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{
                        background: `radial-gradient(circle at 80% 20%, ${project.accent}35, transparent 60%), linear-gradient(145deg, #1E110F 0%, #0D0807 100%)`,
                      }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF6B54] mb-2">
                        {project.industry}
                      </span>
                      <span className="font-display text-2xl font-extrabold uppercase text-[#F4ECE6]">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Subtle edge vignette — keeps the real website screenshot crisp and clear */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0D0807]/80 via-transparent to-[#0D0807]/45 opacity-85 group-hover:opacity-70 transition-opacity duration-300"
                  />

                  {/* Top Metadata Bar */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0D0807]/80 border border-white/15 text-[#F4ECE6] backdrop-blur-md">
                      {project.industry}
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0D0807]/80 border border-[#E24732]/40 text-[#FF6B54] backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Live Launch Pill */}
                  <div className="absolute bottom-3.5 right-3.5 opacity-95 md:opacity-0 md:translate-y-1.5 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      <span>Open Live</span>
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.title} case study`}
                  className="relative aspect-[16/10] w-full overflow-hidden block text-left bg-[#120A09] border-b border-[var(--line)]"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} visual preview`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{
                        background: `radial-gradient(circle at 80% 20%, ${project.accent}38, transparent 60%), linear-gradient(145deg, #1E110F 0%, #0D0807 100%)`,
                      }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF6B54] mb-2">
                        {project.projectType}
                      </span>
                      <span className="font-display text-2xl font-extrabold uppercase text-[#F4ECE6]">
                        {project.title}
                      </span>
                    </div>
                  )}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0D0807]/80 via-transparent to-[#0D0807]/45 opacity-85 group-hover:opacity-70 transition-opacity duration-300"
                  />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0D0807]/80 border border-white/15 text-[#F4ECE6] backdrop-blur-md">
                      {project.industry}
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0D0807]/80 border border-[#E24732]/40 text-[#FF6B54] backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>
                </button>
              )}

              {/* LAYER 2 — CONCISE PROJECT INFORMATION */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-bold truncate">
                      {project.projectType}
                    </span>
                    {project.languages && (
                      <span className="font-mono text-[10px] text-[var(--ink-dim)] shrink-0">
                        {project.languages.join(' / ')}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[var(--ink-muted)] leading-relaxed line-clamp-2">
                    {project.subtitle}
                  </p>

                  <p className="font-mono text-[11px] text-[var(--ink-dim)] pt-0.5 truncate">
                    {project.company ? `${project.company} · ` : ''}
                    {project.role}
                  </p>
                </div>

                {/* LAYER 3 — CLEAN ACTIONS */}
                <div className="pt-3.5 border-t border-[var(--line)] flex items-center justify-between gap-3">
                  {project.productionUrl ? (
                    <a
                      href={project.productionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] hover:gap-2 transition-all"
                    >
                      <Globe size={13} />
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]">
                      {project.status}
                    </span>
                  )}

                  {project.deliverables.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                    >
                      <Layers size={13} />
                      <span>Case Study</span>
                      {project.vercelDeployments.length > 1 && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] text-[10px]">
                          <Server size={9} />
                          {project.vercelDeployments.length}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-12 text-center font-mono text-xs text-[var(--ink-dim)]">
          No projects match your current filter.
        </div>
      )}

      {/* Expand / Collapse All Verified Projects */}
      {filtered.length > 9 && q.length === 0 && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="btn-pill-primary px-7 py-3 text-xs sm:text-sm"
          >
            <span>
              {showAll
                ? 'Show Curated Top 9'
                : `View All ${filtered.length} Featured Projects (${totalDeployments} Live URLs)`}
            </span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      </div>
    </section>
  );
}
