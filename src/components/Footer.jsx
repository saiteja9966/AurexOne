"use client";

import Link from "next/link";

const FOOT_LINKS = [
  { to: "/", label: "Home" },
  { to: "/layouts", label: "Layouts" },
  { to: "/about", label: "About" },
  { to: "/vision", label: "Vision" },
  { to: "/why-aurex", label: "Why Aurex" },
  { to: "/contact", label: "Contact" },
];

export const Footer = () => (
  <footer className="mb-[68px] border-t border-line bg-ink px-6 py-16 text-xs md:mb-0" data-testid="site-footer">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div>
        <Link href="/" className="mb-2 flex items-center gap-3" data-testid="footer-brand-link">
          <span className="text-xs text-gold">▲</span>
          <span className="font-serif text-lg font-light tracking-[0.2em] text-cream">AUREX ONE</span>
        </Link>
        <p className="font-mono text-[11px] text-aurexlabel">
          Aurex Build Con LLP • North Andhra Plotted Developments
        </p>
      </div>

      <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-[11px] uppercase tracking-widest text-sand">
        {FOOT_LINKS.map((l) => (
          <Link key={l.to} href={l.to} className="transition-colors duration-300 hover:text-gold" data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}>
            {l.label}
          </Link>
        ))}
      </nav>

      <p className="font-mono text-[11px] text-aurexlabel" data-testid="footer-statutory-note">
        Statutory approvals to be published on confirmation.
      </p>
    </div>
    <p className="mx-auto mt-10 max-w-7xl font-mono text-[11px] text-aurexlabel">
      © {new Date().getFullYear()} Aurex Build Con LLP. All figures shown are either verified or marked as to be confirmed.
    </p>
  </footer>
);
