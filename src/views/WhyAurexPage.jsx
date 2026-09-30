"use client";

import Link from "next/link";
import { Hero } from "../components/Hero";
import { FadeUp, FadeUpGroup, FadeUpItem } from "../components/FadeUp";
import { IMAGES } from "../data/layouts";

const REASONS = [
  {
    title: "Corridor-First Selection",
    line: "Layouts are chosen where public infrastructure is already announced — the Bhogapuram airport corridor at Pusapatirega and Modavalasa, the pharma belt at Pydibhimvaram.",
  },
  {
    title: "A Verifiable Track Record",
    line: "Aurex Build Con LLP brings 25+ years of experience and 20+ layouts delivered in North Andhra.",
  },
  {
    title: "Nothing Overstated",
    line: "Distances, extents and prices are published only when verified. Anything not yet verified is marked as to be confirmed — visibly, not in fine print.",
  },
  {
    title: "Approvals In The Open",
    line: "RERA / DTCP approval status is stated plainly for every layout: to be published on confirmation.",
  },
  {
    title: "Walk The Land First",
    line: "Every buyer is offered a site visit before any decision is expected. The land is the best document we have.",
  },
  {
    title: "One Conversation, Direct",
    line: "You speak with the developer's own land advisory desk — by call or WhatsApp — not a brokerage chain.",
  },
];

export default function WhyAurexPage() {
  return (
    <div data-testid="why-aurex-page">
      

      <Hero
        image={IMAGES.heroModavalasa}
        eyebrow="WHY AUREX"
        title="Chosen Carefully. Stated Plainly."
        subtitle="Six reasons families and investors come to Aurex One — and what each one means in practice."
        compact
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeUpGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <FadeUpItem key={r.title}>
              <div className="h-full rounded-sm border border-line bg-ink2 p-8">
                <span className="mb-2 block font-mono text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-3 font-serif text-2xl font-light text-cream" data-testid={`why-reason-${i + 1}`}>
                  {r.title}
                </h2>
                <p className="text-xs font-light leading-relaxed text-sand">{r.line}</p>
              </div>
            </FadeUpItem>
          ))}
        </FadeUpGroup>

        <FadeUp delay={0.15} className="mt-20 text-center">
          <Link href="/contact" className="btn-gold" data-testid="why-aurex-contact-button">
            Get in Touch
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
