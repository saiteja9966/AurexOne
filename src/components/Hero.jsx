"use client";

import Link from "next/link";
import { FadeUp } from "./FadeUp";

// Immersion hero — media-dominant, centered, cinematic (approved direction).
export const Hero = ({ image, eyebrow, title, subtitle, primaryCta, secondaryCta, ticker, compact = false }) => (
  <section
    className={`relative flex items-center justify-center overflow-hidden border-b border-line px-6 ${
      compact ? "min-h-[58vh] py-20" : "min-h-[92vh] py-24"
    }`}
    data-testid="hero-section"
  >
    <img
      src={image}
      alt=""
      fetchPriority="high"
      className="absolute inset-0 z-0 h-full w-full animate-hero-zoom object-cover"
      data-testid="hero-image"
    />
    {/* multi-layer scrim: radial gold glow + bottom fade */}
    <div className="absolute inset-0 z-0 bg-ink/60" />
    <div
      className="absolute inset-0 z-0"
      style={{ background: "radial-gradient(ellipse at center, rgba(212,175,106,0.10) 0%, transparent 55%, rgba(5,5,5,0.9) 100%)" }}
    />
    <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

    <FadeUp className="relative z-10 mx-auto max-w-5xl text-center">
      {eyebrow && (
        <p className="eyebrow mb-6" data-testid="hero-eyebrow">{eyebrow}</p>
      )}
      <h1
        className={`mb-8 font-serif font-light leading-[1.08] tracking-tight text-cream ${
          compact ? "text-4xl sm:text-5xl md:text-6xl" : "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
        }`}
        data-testid="hero-title"
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-sand sm:text-lg" data-testid="hero-subtitle">
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta && (
            primaryCta.external ? (
              <a href={primaryCta.href} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto" data-testid="hero-cta-button">
                {primaryCta.label}
              </a>
            ) : (
              <Link href={primaryCta.href} className="btn-gold w-full sm:w-auto" data-testid="hero-cta-button">
                {primaryCta.label}
              </Link>
            )
          )}
          {secondaryCta && (
            secondaryCta.external ? (
              <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto" data-testid="hero-secondary-cta">
                {secondaryCta.label}
              </a>
            ) : (
              <Link href={secondaryCta.href} className="btn-ghost w-full sm:w-auto" data-testid="hero-secondary-cta">
                {secondaryCta.label}
              </Link>
            )
          )}
        </div>
      )}
      {ticker && (
        <p className="mt-6 text-[11px] uppercase tracking-widest text-aurexlabel" data-testid="hero-ticker">
          {ticker}
        </p>
      )}
    </FadeUp>
  </section>
);
