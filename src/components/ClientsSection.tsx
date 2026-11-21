import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Tv, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { brandLogoIndex, type BrandLogoAsset } from '../data/portfolio';
import SectionBackground from './SectionBackground';

type FilterTab = 'all' | 'client-brand' | 'strategic-collaboration' | 'media-production';

function BrandMarqueeTile({ item }: { item: BrandLogoAsset }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--line-strong)',
      }}
      className="group relative flex flex-col justify-between min-w-[265px] sm:min-w-[295px] p-3.5 rounded-3xl border hover:border-[var(--accent)] transition-all duration-300 shrink-0 select-none hover:-translate-y-1 shadow-md"
    >
      {/* Dedicated High-Contrast Luminous Logo Stage — Preserves Natural Aspect Ratio & Original Brand Colors */}
      <div
        style={{
          background: 'linear-gradient(145deg, #FFFFFF 0%, #F6F2EC 100%)',
          borderColor: 'rgba(20, 14, 12, 0.08)',
        }}
        className="w-full h-28 px-6 py-3.5 rounded-2xl border flex items-center justify-center overflow-hidden shadow-inner relative"
      >
        <img
          src={item.filename}
          alt={`${item.name} official logo`}
          loading="lazy"
          className="max-h-20 max-w-[215px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Brand Metadata Bar */}
      <div className="pt-3 px-1.5 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-tight text-[var(--ink)] truncate group-hover:text-[var(--accent)] transition-colors">
              {item.name}
            </h3>
            <CheckCircle2
              size={12}
              className="text-[var(--accent)] shrink-0 opacity-85"
              aria-label={item.verificationStatus}
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold truncate mt-0.5">
            {item.relationshipLabel}
          </p>
        </div>

        <span
          style={{
            backgroundColor: 'var(--bg-elevated)',
            borderColor: 'var(--line)',
            color: 'var(--ink-dim)',
          }}
          className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border shrink-0"
        >
          {item.industry.split('&')[0].trim()}
        </span>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const row1Brands = brandLogoIndex.filter((b) => b.row === 1);
  const row2Brands = brandLogoIndex.filter((b) => b.row === 2);

  // Duplicate items for seamless 50% CSS marquee loop
  const row1Loop = [...row1Brands, ...row1Brands];
  const row2Loop = [...row2Brands, ...row2Brands];

  const filteredBrands =
    activeTab === 'all'
      ? brandLogoIndex
      : brandLogoIndex.filter((b) => b.category === activeTab);

  const clientCount = brandLogoIndex.filter((b) => b.category === 'client-brand').length;
  const partnerCount = brandLogoIndex.filter(
    (b) => b.category === 'strategic-collaboration'
  ).length;
  const mediaProdCount = brandLogoIndex.filter(
    (b) => b.category === 'media-production'
  ).length;

  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <SectionBackground variant="clients" />
      <div className="relative z-10">
      {/* Header Container */}
      <div className="px-6 md:px-8 max-w-[1220px] mx-auto mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
              05 / Verified Brand Ecosystem · Commercial &amp; Institutional Proof
            </p>
            <h2
              id="clients-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
            >
              SELECTED CLIENTS, BRANDS &amp; COLLABORATIONS
            </h2>
          </div>
          <p className="text-sm text-[var(--ink-muted)] max-w-md">
            Authentic brand marks across client deliverables, strategic partnerships, and media
            production participation — presented in their original brand colors and aspect ratios.
          </p>
        </div>
        <div className="section-rule" />
      </div>

      {/* === TWO-ROW HORIZONTAL INFINITE LOGO SHOWCASE === */}
      <div className="space-y-6 mb-16 relative">
        {/* ROW 1 — MOVING LEFT TO RIGHT (Clients & Brands) */}
        <div>
          <div className="px-6 md:px-8 max-w-[1220px] mx-auto mb-2.5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
              ROW 01 — CLIENTS, BRANDS &amp; COMMERCIAL PLATFORMS (MOVING RIGHT →)
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
              {row1Brands.length} Verified Marks
            </span>
          </div>
          <div className="w-full overflow-hidden py-1.5">
            <div className="marquee-track animate-marquee-right gap-5 px-2.5">
              {row1Loop.map((item, idx) => (
                <BrandMarqueeTile key={`r1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 — MOVING RIGHT TO LEFT (Strategic Partners & Media Production) */}
        <div>
          <div className="px-6 md:px-8 max-w-[1220px] mx-auto mb-2.5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
              ROW 02 — STRATEGIC PARTNERS, PRODUCTIONS &amp; COLLABORATIONS (← MOVING LEFT)
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--gold)]">
              {row2Brands.length} Verified Marks
            </span>
          </div>
          <div className="w-full overflow-hidden py-1.5">
            <div className="marquee-track animate-marquee-left gap-5 px-2.5">
              {row2Loop.map((item, idx) => (
                <BrandMarqueeTile key={`r2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === INTERACTIVE CATEGORIZED BRAND DIRECTORY === */}
      <div className="px-6 md:px-8 max-w-[1220px] mx-auto">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-[var(--line)]">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                backgroundColor: activeTab === 'all' ? 'var(--accent)' : 'var(--bg-card)',
                borderColor: activeTab === 'all' ? 'var(--accent)' : 'var(--line-strong)',
                color: activeTab === 'all' ? '#FFFFFF' : 'var(--ink-muted)',
              }}
              className="px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              All Ecosystem ({brandLogoIndex.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('client-brand')}
              style={{
                backgroundColor:
                  activeTab === 'client-brand' ? 'var(--accent)' : 'var(--bg-card)',
                borderColor:
                  activeTab === 'client-brand' ? 'var(--accent)' : 'var(--line-strong)',
                color: activeTab === 'client-brand' ? '#FFFFFF' : 'var(--ink-muted)',
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              <Building2 size={13} />
              <span>Clients &amp; Brands ({clientCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('strategic-collaboration')}
              style={{
                backgroundColor:
                  activeTab === 'strategic-collaboration'
                    ? 'var(--accent)'
                    : 'var(--bg-card)',
                borderColor:
                  activeTab === 'strategic-collaboration'
                    ? 'var(--accent)'
                    : 'var(--line-strong)',
                color:
                  activeTab === 'strategic-collaboration'
                    ? '#FFFFFF'
                    : 'var(--ink-muted)',
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              <Handshake size={13} />
              <span>Partners &amp; Collaborations ({partnerCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('media-production')}
              style={{
                backgroundColor:
                  activeTab === 'media-production' ? 'var(--accent)' : 'var(--bg-card)',
                borderColor:
                  activeTab === 'media-production' ? 'var(--accent)' : 'var(--line-strong)',
                color: activeTab === 'media-production' ? '#FFFFFF' : 'var(--ink-muted)',
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              <Tv size={13} />
              <span>Media Production Participation ({mediaProdCount})</span>
            </button>
          </div>
        </div>

        {/* Filterable Brand & Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBrands.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.25) }}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--line-strong)',
              }}
              className="p-5 rounded-3xl border hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between gap-4 group hover:-translate-y-1 shadow-md"
            >
              <div className="space-y-4">
                {/* Large Studio Brand Stage — No Square Cropping, Original Aspect Ratio Preserved */}
                <div
                  style={{
                    background: 'linear-gradient(145deg, #FFFFFF 0%, #F6F2EC 100%)',
                    borderColor: 'rgba(20, 14, 12, 0.08)',
                  }}
                  className="w-full h-32 px-7 py-4 rounded-2xl border flex items-center justify-center overflow-hidden shadow-inner relative"
                >
                  <img
                    src={item.filename}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    className="max-h-[88px] max-w-[225px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Relationship Badge & Title */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      style={{
                        backgroundColor: 'var(--accent-soft)',
                        borderColor: 'rgba(226, 71, 50, 0.35)',
                        color: 'var(--accent)',
                      }}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border font-bold"
                    >
                      {item.relationshipLabel}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed mt-1">
                    {item.context}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]">
                  {item.format} · {item.verificationStatus}
                </span>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-bold hover:underline"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
