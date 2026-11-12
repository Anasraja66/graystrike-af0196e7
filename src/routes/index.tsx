import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Code2,
  Fingerprint,
  GitBranch,
  HeartHandshake,
  LockKeyhole,
  Menu,
  ScanLine,
  Shield,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import scanPreview from "@/assets/graystrike-scan-product.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrayStrike — Find it. Fix it. Get back to work." },
      {
        name: "description",
        content:
          "Find security gaps, review verified fixes, and protect your website and apps with GrayStrike. Security that works in the background.",
      },
      { property: "og:title", content: "GrayStrike — Find it. Fix it. Get back to work." },
      {
        property: "og:description",
        content:
          "Find security gaps, review verified fixes, and protect your website and apps with GrayStrike.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrayStrikeHome,
});

const issues = [
  {
    number: "01",
    icon: CircleAlert,
    title: "Endless false alarms",
    copy: "When every warning sounds urgent, the real risks are harder to spot.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Slow patching cycles",
    copy: "Small security gaps linger while fixes wait in an already busy queue.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Room for human error",
    copy: "Manual checks miss things. Repeatable security shouldn't rely on memory.",
  },
];

const safeguards = [
  {
    icon: BadgeCheck,
    title: "Findings you can trust",
    copy: "Every finding is checked before it reaches your team.",
  },
  {
    icon: Sparkles,
    title: "Fixes ready to review",
    copy: "Get a practical repair alongside a clear explanation of the issue.",
  },
  {
    icon: ShieldCheck,
    title: "Protection around the clock",
    copy: "Keep an eye on your digital systems, not just during office hours.",
  },
];

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Connect your website",
    copy: "Start with your website or repository. No security expertise required.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "GrayStrike checks for gaps",
    copy: "A background scan looks for the issues that put your business at risk.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Review and apply fixes",
    copy: "See what changed, understand why, and decide when to apply the fix.",
  },
];

const productPillars = [
  { icon: ShieldCheck, label: "Verified findings" },
  { icon: Code2, label: "Reviewable repairs" },
  { icon: LockKeyhole, label: "Security, built in" },
];

function GrayStrikeHome() {
  const [website, setWebsite] = useState("");
  const [scanMessage, setScanMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleScan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setScanMessage(
      website.trim()
        ? "Free scans are not connected yet, so your website has not been scanned."
        : "Enter your website address to request a free scan.",
    );
  }

  return (
    <main>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#home" aria-label="GrayStrike home">
            <span className="brand-mark"><Shield aria-hidden="true" /></span>
            <span>Gray<span className="brand-name-accent">Strike</span></span>
          </a>

          <nav className={`desktop-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
            <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
            <a href="#why-graystrike" onClick={() => setMenuOpen(false)}>The problem</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#trust" onClick={() => setMenuOpen(false)}>Trust &amp; compliance</a>
          </nav>

          <div className="header-cta">
            <Button asChild size="sm" className="button-blue header-start">
              <a href="#free-scan">Start securing <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </header>

      <section className="hero-section" id="platform">
        <div className="hero-layout page-width">
          <div className="hero-copy">
            <a className="hero-eyebrow" href="#platform">
              <span className="eyebrow-icon"><ShieldCheck aria-hidden="true" /></span>
              <span>Security should fix itself.</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <h1>Autonomous security.<br />Automatic code repair.<br /><span>Zero effort.</span></h1>
            <p className="hero-description">
              Stop worrying about security gaps. GrayStrike finds vulnerabilities in your digital
              systems and helps you fix what matters—without the noise.
            </p>

            <form className="scan-form" id="free-scan" onSubmit={handleScan}>
              <label className="sr-only" htmlFor="scan-website">Your website or app URL</label>
              <div className="url-input-wrap">
                <LockKeyhole aria-hidden="true" />
                <input
                  id="scan-website"
                  name="website"
                  type="url"
                  placeholder="Enter your website or app URL"
                  autoComplete="url"
                  value={website}
                  onChange={(event) => {
                    setWebsite(event.target.value);
                    if (scanMessage) setScanMessage("");
                  }}
                />
                <span className="https-hint">https://</span>
              </div>
              <Button type="submit" className="button-blue scan-button">
                Scan free <ArrowRight aria-hidden="true" />
              </Button>
              {scanMessage && <p className="scan-feedback" role="status">{scanMessage}</p>}
            </form>
            <div className="hero-note">
              <span className="note-check"><Check aria-hidden="true" /></span>
              <span>No card needed</span>
              <span className="note-separator" aria-hidden="true">·</span>
              <span>Know what needs fixing</span>
            </div>

            <div className="trust-strip" aria-label="Security that fits into your workflow">
              {productPillars.map(({ icon: Icon, label }) => (
                <span key={label}><Icon aria-hidden="true" />{label}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Example GrayStrike security audit">
            <div className="visual-topline">
              <span className="visual-live"><span />Example audit</span>
              <span className="visual-caption">CLEAR. CHECKED. READY.</span>
            </div>
            <div className="product-preview">
              <img
                src={scanPreview}
                width={1536}
                height={1024}
                alt="Example GrayStrike security audit: three findings checked, with three verified fixes ready."
                fetchPriority="high"
              />
            </div>
            <div className="visual-footline">
              <span><CheckCircle2 aria-hidden="true" /> Verified fixes</span>
              <a href="#how-it-works">See how it works <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <a className="hero-scroll" href="#why-graystrike">
          <ArrowDownRight aria-hidden="true" /> The cost of waiting
        </a>
      </section>

      <section className="problem-section section-pad" id="why-graystrike">
        <div className="page-width">
          <div className="section-heading problem-heading">
            <div>
              <span className="section-kicker"><span /> WHY GRAYSTRIKE</span>
              <h2>Security shouldn't become<br />another full-time job.</h2>
            </div>
            <p>Keeping your business safe matters. Chasing alerts, patches, and checklists shouldn’t take over your day.</p>
          </div>

          <div className="contrast-grid">
            <div className="contrast-column challenge-column">
              <div className="contrast-overline"><CircleAlert aria-hidden="true" />WITHOUT A BETTER WAY</div>
              {issues.map(({ number, icon: Icon, title, copy }) => (
                <article className="issue-row" key={number}>
                  <span className="issue-number">{number}</span>
                  <span className="issue-icon"><Icon aria-hidden="true" /></span>
                  <span className="issue-text"><strong>{title}</strong><span>{copy}</span></span>
                </article>
              ))}
            </div>
            <div className="contrast-column benefit-column">
              <div className="contrast-overline"><ShieldCheck aria-hidden="true" />A CLEARER WAY FORWARD</div>
              {safeguards.map(({ icon: Icon, title, copy }) => (
                <article className="benefit-row" key={title}>
                  <span className="benefit-icon"><Icon aria-hidden="true" /></span>
                  <span className="issue-text"><strong>{title}</strong><span>{copy}</span></span>
                  <Check aria-hidden="true" className="benefit-check" />
                </article>
              ))}
              <a href="#free-scan" className="text-link">Make security a little simpler <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section section-pad" id="how-it-works">
        <div className="page-width">
          <div className="section-heading how-heading">
            <div>
              <span className="section-kicker"><span /> HOW IT WORKS</span>
              <h2>Three steps.<br /><span>Less on your plate.</span></h2>
            </div>
            <p>From the first check to a reviewed repair, every step stays clear and in your hands.</p>
          </div>

          <div className="steps-grid">
            {steps.map(({ number, icon: Icon, title, copy }, index) => (
              <article className="step-card" key={number}>
                <div className="step-topline">
                  <span className="step-icon"><Icon aria-hidden="true" /></span>
                  <span className="step-index">STEP {number}</span>
                  {index < steps.length - 1 && <span className="step-track" aria-hidden="true"><ChevronRight /></span>}
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="steps-reassurance"><ShieldCheck aria-hidden="true" /><span>See what changed and choose when to apply a fix.</span><a href="#trust">Our approach to trust <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="compliance-section section-pad" id="trust">
        <div className="page-width compliance-layout">
          <div className="compliance-copy">
            <span className="section-kicker"><span /> TRUST, NOT JUST CHECKLISTS</span>
            <h2>Make room for good security practice.</h2>
            <p>
              Standards like NIS 2 and ISO/IEC 42001 can help teams ask the right questions.
              GrayStrike helps keep the day-to-day work visible, reviewable, and easier to explain.
            </p>
            <a href="#free-scan" className="text-link">Get to know GrayStrike <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="compliance-details">
            <article className="compliance-item">
              <span className="compliance-icon"><BadgeCheck aria-hidden="true" /></span>
              <div><span className="compliance-label">READINESS, MADE VISIBLE</span><h3>Know where you stand.</h3><p>Keep track of security issues and the steps your team takes to address them.</p></div>
              <ArrowUpRight aria-hidden="true" className="compliance-arrow" />
            </article>
            <article className="compliance-item">
              <span className="compliance-icon"><HeartHandshake aria-hidden="true" /></span>
              <div><span className="compliance-label">WORK THAT’S EASIER TO REVIEW</span><h3>Keep your team in the loop.</h3><p>Make findings and proposed fixes understandable to both technical and business teams.</p></div>
              <ArrowUpRight aria-hidden="true" className="compliance-arrow" />
            </article>
            <p className="compliance-caveat">GrayStrike supports security work; it does not itself certify compliance with a standard.</p>
          </div>
        </div>
      </section>

      <section className="closing-section" aria-label="Security, made a little easier">
        <div className="page-width closing-layout">
          <div className="closing-icon"><ShieldCheck aria-hidden="true" /></div>
          <div className="closing-copy"><span>GOOD SECURITY IS WITHIN REACH</span><h2>Spend less time worrying.<br />Get back to what you do best.</h2></div>
          <Button asChild className="button-blue closing-cta"><a href="#free-scan">Secure your business <ArrowRight aria-hidden="true" /></a></Button>
          <span className="closing-mark" aria-hidden="true">GS<span>.</span></span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark"><Shield aria-hidden="true" /></span>
              <span>Gray<span className="brand-name-accent">Strike</span></span>
            </a>
            <p>Security that looks after the details,<br />so you don’t have to.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#platform">Platform</a>
            <a href="#why-graystrike">The problem</a>
            <a href="#how-it-works">How it works</a>
            <a href="#trust">Trust &amp; compliance</a>
          </nav>
          <a href="#free-scan" className="footer-contact">Start securing <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2026 GrayStrike. All rights reserved.</span>
          <span className="footer-note"><ShieldCheck aria-hidden="true" /> Security, without the busywork.</span>
          <a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}