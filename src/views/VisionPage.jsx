"use client";

import Link from "next/link";
import { Hero } from "../components/Hero";
import { FadeUp } from "../components/FadeUp";
import { IMAGES } from "../data/layouts";

export default function VisionPage() {
  return (
    <div data-testid="vision-page">
      

      <Hero
        image={IMAGES.heroPydibhimvaram}
        eyebrow="OUR VISION"
        title="To Make Buying Land An Act Of Clarity"
        compact
      />

      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32" data-testid="vision-statement">
        <FadeUp className="space-y-8">
          <p className="font-serif text-2xl font-light leading-snug text-cream md:text-3xl">
            North Andhra is entering its most consequential decade — an international airport
            at Bhogapuram, a pharma corridor at Pydibhimvaram, and a Vizag-region economy
            moving north along NH-16.
          </p>
          <p className="text-sm font-light leading-relaxed text-sand md:text-base">
            Decades like this are when land changes hands. Too often it changes hands on
            brochures and assurances rather than on verified fact. Aurex One exists to do the
            opposite: to publish what is confirmed, to mark plainly what is not yet confirmed,
            and to let the land — walked in person — make the case.
          </p>
          <p className="text-sm font-light leading-relaxed text-sand md:text-base">
            Each Aurex One layout is selected for its position on announced infrastructure,
            planned with its roads, utilities and boundaries before plots are offered, and
            priced on the merit of the land. Where a figure on this site is not yet verified,
            it says so. That is not a limitation of the site; it is the point of it.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-16 border-l-2 border-gold pl-8">
          <p className="font-serif text-xl font-light italic text-cream md:text-2xl">
            “Sell the land as it is, and it will speak for what it can become.”
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-20">
          <Link href="/layouts" className="btn-gold" data-testid="vision-explore-layouts-button">
            Explore the Layouts
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
