import { useState, type FormEvent } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { identity, sixPillars, socialProfiles } from '../data/portfolio';
import { OfficialSocialIcon } from './Navigation';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.84 9.84 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState(sixPillars[0].title);
  const [details, setDetails] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      /* Clipboard fallback */
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(identity.whatsappDisplay);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      /* Clipboard fallback */
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDiscipline = discipline.trim() || sixPillars[0].title;
    const trimmedDetails = details.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDetails) {
      setFormError('Please fill in your name, email address, and project brief before sending via WhatsApp.');
      return;
    }

    setFormError(null);

    const message = [
      'Hello Mostafa!',
      '',
      'I would like to discuss a potential collaboration.',
      '',
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `Collaboration Area: ${trimmedDiscipline}`,
      '',
      'Project Brief:',
      trimmedDetails,
      '',
      'I found your portfolio and would like to discuss this opportunity with you.',
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappDestination = `${identity.whatsappUrl}?text=${encodedMessage}`;

    const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappDestination;
    } else {
      const opened = window.open(whatsappDestination, '_blank', 'noopener,noreferrer');
      if (!opened) {
        window.location.href = whatsappDestination;
      }
    }
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
        {/* Left: Structured Project Inquiry Form (WhatsApp-powered, no fake backend) */}
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
                onChange={(e) => {
                  setName(e.target.value);
                  if (formError) setFormError(null);
                }}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formError) setFormError(null);
                }}
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
              onChange={(e) => {
                setDetails(e.target.value);
                if (formError) setFormError(null);
              }}
              placeholder="Tell me about your brand, platform, campaign, or idea..."
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
              }}
              className="w-full px-4 py-3 rounded-xl border text-sm focus:border-[var(--accent)] focus:outline-none resize-y"
            />
          </div>

          {formError && (
            <p
              role="alert"
              className="text-xs font-mono text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/40 rounded-xl px-4 py-2.5"
            >
              {formError}
            </p>
          )}

          <button type="submit" className="btn-pill-primary px-7 py-3.5 text-xs sm:text-sm">
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Send via WhatsApp</span>
          </button>
        </form>

        {/* Right: Stacked Direct Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Primary Contact: Direct WhatsApp */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--accent)',
            }}
            className="p-6 rounded-3xl border-2 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span
                style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold">
                  Primary Contact · WhatsApp
                </p>
                <a
                  href={identity.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg font-extrabold tracking-tight hover:text-[var(--accent)] transition-colors"
                >
                  {identity.whatsappDisplay}
                </a>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              Fastest way to reach me for collaborations, projects, and direct inquiries.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <a
                href={identity.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary px-4 py-2 text-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={copyPhone}
                className="btn-pill-secondary px-4 py-2 text-xs"
              >
                {copiedPhone ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span>Copied Number</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
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
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--line)] shrink-0"
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
              {copiedEmail ? (
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
            className="p-6 rounded-3xl border"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--accent)' }}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--line)] shrink-0"
              >
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
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
