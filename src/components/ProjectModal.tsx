import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ExternalLink, Server, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
              color: 'var(--ink)',
            }}
            className="w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl border shadow-2xl"
          >
            {/* Header */}
            <div
              className="relative p-6 md:p-8 border-b"
              style={{
                borderColor: 'var(--line)',
                background: `linear-gradient(135deg, ${project.accent}20 0%, transparent 70%)`,
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--line-strong)',
                  color: 'var(--ink)',
                }}
                className="absolute top-5 right-5 p-2 rounded-full border hover:border-[var(--accent)] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
                <span
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#FFFFFF',
                  }}
                  className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                >
                  {project.industry}
                </span>
                <span
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--line)',
                  }}
                  className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-full border text-[var(--ink-muted)]"
                >
                  {project.projectType} · {project.year}
                </span>
              </div>

              <h3
                id="modal-project-title"
                className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-2"
              >
                {project.title}
              </h3>
              <p className="font-serif text-base text-[var(--ink-muted)]">
                {project.subtitle}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6">
              {project.image && (
                <div className="rounded-2xl overflow-hidden border border-[var(--line)] max-h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-64 object-cover"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  style={{ backgroundColor: 'var(--bg-soft)', borderColor: 'var(--line)' }}
                  className="p-4 rounded-2xl border"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] block mb-1">
                    My Role
                  </span>
                  <p className="text-sm font-semibold">{project.role}</p>
                </div>
                <div
                  style={{ backgroundColor: 'var(--bg-soft)', borderColor: 'var(--line)' }}
                  className="p-4 rounded-2xl border"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] block mb-1">
                    Organization / Context
                  </span>
                  <p className="text-sm font-semibold">
                    {project.company || 'Independent / Founded'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-2">
                  Project Overview &amp; My Contribution
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-[var(--ink-muted)] mb-3">
                  {project.description}
                </p>
                <p className="text-sm leading-relaxed text-[var(--ink)]">
                  {project.contribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-3">
                  Verified Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item) => (
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
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--ink-dim)] font-bold mb-2.5">
                  Verified Tools &amp; Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{ backgroundColor: 'var(--bg-soft)', borderColor: 'var(--line)' }}
                      className="font-mono text-xs px-3 py-1 rounded-full border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.vercelDeployments.length > 0 && (
                <div
                  style={{ backgroundColor: 'var(--bg-soft)', borderColor: 'var(--line)' }}
                  className="p-4 rounded-2xl border"
                >
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[var(--accent)] font-semibold">
                    <Server size={14} />
                    <span>
                      Verified Vercel Deployments ({project.vercelDeployments.length})
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.vercelDeployments.map((url) => (
                      <a
                        key={url}
                        href={`https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--line)' }}
                        className="font-mono text-xs p-2.5 rounded-xl border hover:border-[var(--accent)] flex items-center justify-between gap-2 transition-colors"
                      >
                        <span className="truncate">{url}</span>
                        <ExternalLink size={12} className="shrink-0 text-[var(--accent)]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--line)]">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-pill-secondary px-5 py-2.5 text-xs"
                >
                  Close
                </button>
                {project.productionUrl && (
                  <a
                    href={project.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-primary px-6 py-2.5 text-xs"
                  >
                    <Globe size={14} />
                    <span>Visit Live Site</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
