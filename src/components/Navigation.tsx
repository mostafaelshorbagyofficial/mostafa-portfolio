import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight, ArrowUp, FileText, Download } from 'lucide-react';
import { identity, socialProfiles, type SocialProfile } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Disciplines', href: '#ecosystem' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Clients', href: '#clients' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function OfficialSocialIcon({ id, className = 'w-4 h-4 fill-current' }: { id: SocialProfile['id']; className?: string }) {
  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    );
  }
  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
      </svg>
    );
  }
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
      </svg>
    );
  }
  if (id === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const verifiedSocials = socialProfiles.filter((s) => s.verified && Boolean(s.url));

  useEffect(() => {
    const saved = window.localStorage.getItem('mostafa-theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem('mostafa-theme', next);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      setScrollPct(Math.min(100, Math.round((y / max) * 100)));
      setShowTop(y > 500);

      let current = 'home';
      for (const link of navLinks) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-4 md:px-6 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          style={{
            backgroundColor: 'var(--nav-bg)',
            borderColor: 'var(--line-strong)',
          }}
          className="pointer-events-auto max-w-[1240px] mx-auto h-15 px-4 md:px-5 rounded-full border backdrop-blur-xl flex items-center justify-between gap-2 shadow-lg"
        >
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--accent)',
              }}
              className="w-9 h-9 rounded-full border flex items-center justify-center shadow-sm"
            >
              <span
                style={{ color: 'var(--gold)' }}
                className="font-display text-sm font-extrabold tracking-tight"
              >
                M!
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-xs font-bold tracking-wider uppercase">
                Mostafa
              </span>
              <span
                style={{ color: 'var(--ink-dim)' }}
                className="font-mono text-[10px] tracking-widest uppercase"
              >
                Elshorbagy
              </span>
            </div>
          </a>

          {/* Center Links with Sliding Vermilion Pill */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="relative px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-colors"
                  style={{
                    color: isActive ? '#FFFFFF' : 'var(--ink-muted)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      style={{ backgroundColor: 'var(--accent)' }}
                      className="absolute inset-0 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Verified Social Icons + Theme Switch + Let's Talk */}
          <div className="flex items-center gap-2">
            {/* Verified Header Social Profile Links */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--line-strong)',
              }}
              className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full border shadow-inner"
              aria-label="Verified social and professional profiles"
            >
              {verifiedSocials.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mostafa Elshorbagy on ${soc.label}`}
                  title={soc.label}
                  style={{ color: 'var(--ink)' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <OfficialSocialIcon id={soc.id} className="w-4 h-4 fill-current" />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
              }}
              className="w-9 h-9 rounded-full border flex items-center justify-center hover:border-[var(--accent)] transition-colors shrink-0"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href={identity.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CV in a new tab"
              title="View Official CV"
              className="hidden md:inline-flex btn-pill-secondary px-3.5 py-2 text-xs shrink-0"
            >
              <FileText size={13} className="text-[var(--accent)]" />
              <span>CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="hidden sm:inline-flex btn-pill-primary px-4 py-2 text-xs shrink-0"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--ink)',
                backgroundColor: 'var(--bg-card)',
              }}
              className="xl:hidden w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: 'var(--bg)' }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-5 p-6"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.035 }}
                onClick={() => handleNav(link.href)}
                className="font-display text-2xl font-bold uppercase tracking-tight hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile CV Actions (View CV & Download CV) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={identity.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-pill-primary px-5 py-2.5 text-xs"
              >
                <FileText size={14} />
                <span>View CV</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={identity.cvUrl}
                download={identity.cvDownloadName}
                onClick={() => setMobileOpen(false)}
                className="btn-pill-secondary px-5 py-2.5 text-xs"
              >
                <Download size={14} className="text-[var(--accent)]" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Verified Social Icons Row */}
            <div className="flex items-center gap-3 pt-5 border-t border-[var(--line)]">
              {verifiedSocials.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mostafa Elshorbagy on ${soc.label}`}
                  title={soc.label}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--line-strong)',
                    color: 'var(--ink)',
                  }}
                  className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
                >
                  <OfficialSocialIcon id={soc.id} className="w-5 h-5 fill-current" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Right-Edge Scroll Progress Rail */}
      <div
        aria-hidden="true"
        className="fixed right-2.5 top-1/2 -translate-y-1/2 h-32 w-1 rounded-full z-30 hidden md:block overflow-hidden"
        style={{ backgroundColor: 'var(--line)' }}
      >
        <div
          className="w-full rounded-full transition-[height] duration-100"
          style={{
            height: `${scrollPct}%`,
            backgroundColor: 'var(--accent)',
          }}
        />
      </div>

      {/* Back to Top Pill */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-30 w-11 h-11 btn-pill-primary p-0"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
