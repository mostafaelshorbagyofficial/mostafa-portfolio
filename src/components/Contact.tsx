import { useState, type FormEvent } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { identity, sixPillars, socialProfiles } from '../data/portfolio';
import { OfficialSocialIcon } from './Navigation';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState(sixPillars[0].title);
  const [details, setDetails] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard fallback */
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry — ${discipline}] from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nDiscipline: ${discipline}\n\nProject Details:\n${details}`
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 px-6 md:px-8 max-w-[1180px] mx-auto"
    >
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
          Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-5"
        >
          Contact Me
        </h2>
        <div className="section-rule" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Structured Project Inquiry Form (mailto-powered, no fake backend) */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--line-strong)',
          }}
          className="lg:col-span-7 p-7 md:p-9 rounded-3xl border space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)] block mb-1.5"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name or organization"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--line-strong)',
                  color: 'var(--ink)',
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)] block mb-1.5"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--line-strong)',
                  color: 'var(--ink)',
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:border-[var(--accent)] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-discipline"
              className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)] block mb-1.5"
            >
              Collaboration Area
            </label>
            <select
              id="contact-discipline"
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
              }}
              className="w-full px-4 py-3 rounded-xl border text-sm focus:border-[var(--accent)] focus:outline-none"
            >
              {sixPillars.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.number} — {p.title}
                </option>
              ))}
              <option value="Full Multidisciplinary Partnership">
                Full Multidisciplinary Partnership
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-details"
              className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)] block mb-1.5"
            >
              Project Brief
            </label>
            <textarea
              id="contact-details"
              rows={4}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell me about your brand, platform, campaign, or idea..."
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
              }}
              className="w-full px-4 py-3 rounded-xl border text-sm focus:border-[var(--accent)] focus:outline-none resize-y"
            />
          </div>

          <button type="submit" className="btn-pill-primary px-7 py-3.5 text-xs sm:text-sm">
            <Send size={14} />
            <span>Open Email Draft</span>
          </button>
        </form>

        {/* Right: Stacked Direct Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--accent)',
            }}
            className="p-6 rounded-3xl border-2"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold">
                  Location
                </p>
                <p className="font-display text-lg font-extrabold uppercase">
                  {identity.location}
                </p>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              Available for local &amp; regional collaborations across Egypt, MENA, and remote projects worldwide.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
            }}
            className="p-6 rounded-3xl border space-y-3"
          >
            <div className="flex items-center gap-3">
              <span
                style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--accent)' }}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--line)]"
              >
                <Mail size={18} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
                  Direct Email
                </p>
                <a
                  href={`mailto:${identity.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold hover:text-[var(--accent)] break-all transition-colors"
                >
                  {identity.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-pill-secondary px-4 py-2 text-xs"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span>Copied Email</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--line-strong)',
            }}
            className="p-6 rounded-3xl border space-y-4"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold mb-1">
                Verified Social &amp; Professional Profiles
              </p>
              <p className="font-display text-lg font-extrabold uppercase">
                Connect Across Platforms
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {socialProfiles
                .filter((s) => s.verified && Boolean(s.url))
                .map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--line-strong)',
                    }}
                    className="px-3.5 py-2.5 rounded-2xl border hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center justify-between gap-2 group"
                  >
                    <span className="flex items-center gap-2 font-mono text-xs font-bold">
                      <OfficialSocialIcon id={soc.id} className="w-4 h-4 fill-current shrink-0" />
                      <span>{soc.label}</span>
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors shrink-0"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
