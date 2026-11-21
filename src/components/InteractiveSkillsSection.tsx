import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  Bot,
  Palette,
  Megaphone,
  FileText,
  Clapperboard,
  Server,
  Search,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Globe,
  Camera,
  Video,
  Film,
  Image as ImageIcon,
  Mic,
  Eye,
  Compass,
  Award,
  TrendingUp,
  Flag,
  Users,
  BarChart3,
  Presentation,
  PenTool,
  Lightbulb,
  BookOpen,
  Calendar,
  Share2,
  UserCheck,
  Network,
  Wrench,
  Terminal,
  HardDrive,
  MessageSquare,
  Clock,
  RefreshCw,
  HeartHandshake,
  Zap,
  CheckCircle2,
  Webhook,
  Activity,
  Radio,
  Monitor,
  Grid,
  Box,
  Briefcase,
  Info,
} from 'lucide-react';
import {
  skillCategories,
  allSkills,
  type SkillCategoryId,
  type SkillItem,
} from '../data/portfolio';
import SectionBackground from './SectionBackground';

function ConsistentSkillIcon({ iconKey, color }: { iconKey: string; color: string }) {
  const props = { size: 26, style: { color }, strokeWidth: 1.9 };
  switch (iconKey) {
    case 'api':
    case 'webhook':
      return <Webhook {...props} />;
    case 'layout':
      return <Layout {...props} />;
    case 'code':
      return <Code2 {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'grid':
      return <Grid {...props} />;
    case 'prototype':
    case 'motion':
      return <Sparkles {...props} />;
    case 'spark':
    case 'ai':
    case 'gemini':
      return <Bot {...props} />;
    case 'cube':
      return <Box {...props} />;
    case 'workflow':
    case 'n8n':
      return <RefreshCw {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'palette':
    case 'adobe':
      return <Palette {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'presentation':
      return <Presentation {...props} />;
    case 'monitor':
      return <Monitor {...props} />;
    case 'radio':
      return <Radio {...props} />;
    case 'activity':
      return <Activity {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'trending':
      return <TrendingUp {...props} />;
    case 'flag':
      return <Flag {...props} />;
    case 'megaphone':
      return <Megaphone {...props} />;
    case 'briefcase':
      return <Briefcase {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'chart':
      return <BarChart3 {...props} />;
    case 'pen':
      return <PenTool {...props} />;
    case 'lightbulb':
      return <Lightbulb {...props} />;
    case 'book':
      return <BookOpen {...props} />;
    case 'share':
      return <Share2 {...props} />;
    case 'user':
      return <UserCheck {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'camera':
      return <Camera {...props} />;
    case 'video':
      return <Video {...props} />;
    case 'film':
      return <Film {...props} />;
    case 'image':
      return <ImageIcon {...props} />;
    case 'clapperboard':
      return <Clapperboard {...props} />;
    case 'clipboard':
      return <FileText {...props} />;
    case 'mic':
      return <Mic {...props} />;
    case 'network':
      return <Network {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'server':
      return <Server {...props} />;
    case 'terminal':
      return <Terminal {...props} />;
    case 'harddrive':
      return <HardDrive {...props} />;
    case 'database':
    case 'postgres':
    case 'sql':
    case 'supabase':
      return <Database {...props} />;
    case 'message':
      return <MessageSquare {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'refresh':
      return <RefreshCw {...props} />;
    case 'heart':
      return <HeartHandshake {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'check':
      return <CheckCircle2 {...props} />;
    default:
      return <Code2 {...props} />;
  }
}

function CategoryTabIcon({ id }: { id: SkillCategoryId }) {
  switch (id) {
    case 'programming-languages':
      return <Code2 size={14} />;
    case 'frameworks-tools':
      return <Layers size={14} />;
    case 'databases-apis':
      return <Database size={14} />;
    case 'ai-automation':
      return <Bot size={14} />;
    case 'design-creative':
      return <Palette size={14} />;
    case 'media-marketing':
      return <Megaphone size={14} />;
    case 'content-creation':
      return <FileText size={14} />;
    case 'video-photo-production':
      return <Clapperboard size={14} />;
    case 'it-operations-data':
      return <Server size={14} />;
  }
}

function Skill3DCard({
  skill,
  index,
  accent,
  isSelected,
  onSelect,
}: {
  skill: SkillItem;
  index: number;
  accent: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = skill.brandColor || accent;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-expanded={isSelected}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.22) }}
      whileHover={{
        y: -6,
        rotateX: 5,
        rotateY: -5,
        transition: { type: 'spring', stiffness: 320, damping: 22 },
      }}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: isSelected || isHovered ? brandColor : 'var(--line-strong)',
        boxShadow:
          isSelected || isHovered
            ? `0 18px 36px -10px ${brandColor}38, 0 6px 14px rgba(0,0,0,0.35)`
            : '0 6px 18px -6px rgba(0,0,0,0.26)',
        transformStyle: 'preserve-3d',
        perspective: '900px',
      }}
      className="group relative text-left p-5 rounded-2xl border transition-colors duration-200 flex flex-col justify-between gap-3.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {/* Subtle 3D Specular Top Highlight & Bottom Brand Underglow Bar */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle at 20% 18%, ${brandColor}28 0%, transparent 68%)`,
        }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity"
      />
      <div
        aria-hidden="true"
        style={{
          backgroundColor: brandColor,
          boxShadow: `0 0 16px ${brandColor}`,
        }}
        className="pointer-events-none absolute bottom-0 left-5 right-5 h-[2.5px] rounded-full opacity-55 group-hover:opacity-100 transition-opacity"
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* 3D-Inspired Logo Pedestal — GPU-Accelerated Hover Elevation */}
        <div
          style={{
            background: skill.logoUrl
              ? 'linear-gradient(145deg, #FFFFFF 0%, #F4F0EA 100%)'
              : 'linear-gradient(145deg, var(--bg-elevated) 0%, var(--bg-soft) 100%)',
            borderColor: isSelected || isHovered ? brandColor : 'rgba(255,255,255,0.16)',
            boxShadow: skill.logoUrl
              ? '0 10px 20px -5px rgba(0,0,0,0.38), inset 0 1px 1px #FFFFFF'
              : '0 10px 20px -5px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}
          className="w-15 h-15 rounded-2xl border flex items-center justify-center shrink-0 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
        >
          {skill.logoUrl ? (
            <img
              src={skill.logoUrl}
              alt={`${skill.name} official logo`}
              loading="lazy"
              className="w-9 h-9 object-contain drop-shadow-sm"
            />
          ) : (
            <ConsistentSkillIcon iconKey={skill.iconKey} color={brandColor} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span
              style={{
                color: isSelected || isHovered ? brandColor : 'var(--ink-dim)',
              }}
              className="font-mono text-[10px] uppercase tracking-wider font-bold transition-colors truncate"
            >
              {skill.categoryLabel}
            </span>
            <span
              style={{
                backgroundColor: isSelected ? brandColor : 'var(--bg-elevated)',
                color: isSelected ? '#FFFFFF' : 'var(--ink-dim)',
              }}
              className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 transition-colors"
            >
              {isSelected ? 'Selected' : 'Click'}
            </span>
          </div>

          <h4 className="font-display text-base font-extrabold tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mt-1">
            {skill.name}
          </h4>
        </div>
      </div>

      {/* Concise Practical Usage Description (Highlighted on Click / Hover) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={isSelected ? 'expanded' : 'compact'}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          className="relative z-10 pt-2.5 border-t border-[var(--line)]"
        >
          <p
            style={{
              color: isSelected || isHovered ? 'var(--ink)' : 'var(--ink-muted)',
            }}
            className="text-xs leading-relaxed transition-colors"
          >
            {skill.practicalUse}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

export default function InteractiveSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryId | 'all'>(
    'programming-languages'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(allSkills[0]);

  const activeCategoryMeta = useMemo(
    () => skillCategories.find((c) => c.id === activeCategory),
    [activeCategory]
  );

  const filteredSkills = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allSkills.filter((skill) => {
      const matchesCat = activeCategory === 'all' || skill.categoryId === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.practicalUse.toLowerCase().includes(q) ||
        skill.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div
      id="skills"
      aria-labelledby="tools-platforms-heading"
      style={{
        backgroundColor: 'var(--bg-soft)',
        borderColor: 'var(--line-strong)',
      }}
      className="relative p-6 sm:p-8 md:p-10 rounded-3xl border shadow-lg scroll-mt-24 overflow-hidden"
    >
      <SectionBackground variant="skills" />
      <div className="relative z-10">
      {/* Header Bar — Exact Typography Fix for TOOLS, PLATFORMS & DISCIPLINES I WORK WITH */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7 pb-6 border-b border-[var(--line)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] font-bold mb-2">
            Interactive Technology &amp; Capability Showcase
          </p>
          <h3
            id="tools-platforms-heading"
            style={{ fontVariantLigatures: 'none' }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--ink)] leading-tight"
          >
            TOOLS, PLATFORMS &amp; DISCIPLINES I WORK WITH
          </h3>
        </div>

        {/* Live Filter Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-dim)] pointer-events-none"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search languages, tools & skills..."
            aria-label="Search tools, platforms and disciplines"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
              color: 'var(--ink)',
            }}
            className="w-full pl-9 pr-4 py-2.5 rounded-full border text-xs font-mono focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
      </div>

      {/* 9-Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Technology and skill categories"
        className="flex flex-wrap items-center gap-2 mb-7"
      >
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = allSkills.filter((s) => s.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveCategory(cat.id);
                const firstInCat = allSkills.find((s) => s.categoryId === cat.id);
                if (firstInCat) setSelectedSkill(firstInCat);
              }}
              style={{
                backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-card)',
                borderColor: isActive ? 'var(--accent)' : 'var(--line-strong)',
                color: isActive ? '#FFFFFF' : 'var(--ink-muted)',
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border font-mono text-xs font-semibold transition-all hover:border-[var(--accent)] cursor-pointer"
            >
              <CategoryTabIcon id={cat.id} />
              <span>{cat.title}</span>
              <span className="opacity-75 text-[10px]">({count})</span>
            </button>
          );
        })}

        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          style={{
            backgroundColor: activeCategory === 'all' ? 'var(--accent)' : 'var(--bg-card)',
            borderColor: activeCategory === 'all' ? 'var(--accent)' : 'var(--line-strong)',
            color: activeCategory === 'all' ? '#FFFFFF' : 'var(--ink-muted)',
          }}
          className="px-4 py-2 rounded-full border font-mono text-xs font-bold transition-all hover:border-[var(--accent)] cursor-pointer"
        >
          View All ({allSkills.length})
        </button>
      </div>

      {/* Active Category Context + Clicked Skill Inspector Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-7">
        {activeCategoryMeta && (
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
            }}
            className="lg:col-span-5 p-4 sm:p-5 rounded-2xl border flex flex-col justify-between gap-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
                {activeCategoryMeta.code} / {activeCategoryMeta.title}
              </span>
              <span className="font-mono text-xs text-[var(--ink-dim)]">
                {filteredSkills.length} verified items
              </span>
            </div>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              {activeCategoryMeta.description}
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.18 }}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: selectedSkill.brandColor || 'var(--accent)',
            }}
            className={`${
              activeCategoryMeta ? 'lg:col-span-7' : 'lg:col-span-12'
            } p-4 sm:p-5 rounded-2xl border-2 flex items-center gap-4 shadow-md`}
          >
            <div
              style={{
                background: selectedSkill.logoUrl
                  ? 'linear-gradient(145deg, #FFFFFF 0%, #F4F0EA 100%)'
                  : 'var(--bg-elevated)',
                borderColor: selectedSkill.brandColor || 'var(--accent)',
              }}
              className="w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm"
            >
              {selectedSkill.logoUrl ? (
                <img
                  src={selectedSkill.logoUrl}
                  alt={selectedSkill.name}
                  className="w-9 h-9 object-contain"
                />
              ) : (
                <ConsistentSkillIcon
                  iconKey={selectedSkill.iconKey}
                  color={selectedSkill.brandColor || '#E24732'}
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-bold">
                  <Info size={11} />
                  <span>Active Selection</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--ink-muted)]">
                  {selectedSkill.categoryLabel}
                </span>
              </div>
              <h4 className="font-display text-lg font-extrabold uppercase tracking-tight text-[var(--ink)]">
                {selectedSkill.name}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--ink-muted)] mt-0.5">
                {selectedSkill.practicalUse}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D Interactive Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, idx) => {
            const cat = skillCategories.find((c) => c.id === skill.categoryId);
            const accent = cat?.accent || '#E24732';
            const isSelected = selectedSkill.name === skill.name;
            return (
              <Skill3DCard
                key={`${skill.categoryId}-${skill.name}`}
                skill={skill}
                index={idx}
                accent={accent}
                isSelected={isSelected}
                onSelect={() => setSelectedSkill(skill)}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
