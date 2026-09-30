"use client";

import Link from "next/link";
import { Hero } from "../components/Hero";
import { LayoutCard } from "../components/LayoutCard";
import { CorridorMap } from "../components/CorridorMap";
import { FadeUp, FadeUpGroup, FadeUpItem } from "../components/FadeUp";
import { LAYOUTS, IMAGES } from "../data/layouts";

export default function LayoutsHub() {
  return (
    <div data-testid="layouts-hub-page">
      

      <Hero
        image={IMAGES.accessBg}
        eyebrow="NORTH ANDHRA PORTFOLIO"
        title="Three Corridors. One Standard."
        subtitle="Every Aurex One site is selected for institutional connectivity along NH16, the airport growth vector, and active industrial corridors."
        primaryCta={{ label: "Book a Site Visit", href: "/contact" }}
        ticker="From ₹17,000/sq yd • Sites from 3.5 to 18 Acres"
        compact
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeUpGroup className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {LAYOUTS.map((l) => (
            <FadeUpItem key={l.slug}>
              <LayoutCard layout={l} testid={`hub-layout-card-${l.slug}`} />
            </FadeUpItem>
          ))}
        </FadeUpGroup>

        <FadeUp delay={0.1} className="mt-20">
          <CorridorMap />
        </FadeUp>

        <FadeUp delay={0.15} className="mt-20 text-center">
          <p className="text-sm font-light text-sand">
            Undecided between the three? Walk all three sites with our land advisory desk.
          </p>
          <Link href="/contact" className="btn-gold mt-8" data-testid="hub-book-visit-button">
            Book a Site Visit
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
