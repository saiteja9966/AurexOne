"use client";

import { Hero } from "../components/Hero";
import { FadeUp, FadeUpGroup, FadeUpItem } from "../components/FadeUp";
import { IMAGES } from "../data/layouts";

const TRACK_RECORD = [
  { figure: "25+", label: "Years Operating Experience" },
  { figure: "20+", label: "Layouts Delivered" },
  { figure: "3", label: "Aurex One Estates, North Andhra" },
  { figure: "34.5", label: "Acres Under Aurex One" },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      

      <Hero
        image={IMAGES.heroPusapatirega}
        eyebrow="HERITAGE & EXECUTION"
        title="A House That Builds In Land"
        subtitle="Aurex One is the plotted-development brand of Aurex Build Con LLP — a North Andhra firm with 25+ years of experience and 20+ layouts delivered."
        compact
      />

      <section className="border-b border-line bg-ink2" data-testid="about-track-record">
        <FadeUpGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-center lg:grid-cols-4">
          {TRACK_RECORD.map((t) => (
            <FadeUpItem key={t.label} className="border-r border-line/60 last:border-r-0">
              <div className="stat-num" data-testid={`about-figure-${t.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                {t.figure}
              </div>
              <div className="stat-label">{t.label}</div>
            </FadeUpItem>
          ))}
        </FadeUpGroup>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24" data-testid="about-story">
        <FadeUp className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Our Story</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">
              Built on land, measured by the families on it
            </h2>
          </div>
          <div className="space-y-6 text-sm font-light leading-relaxed text-sand md:text-base">
            <p>
              Aurex Build Con LLP has spent over two decades developing plotted layouts across
              North Andhra — 25+ years of experience, 20+ layouts delivered. Aurex One is the
              brand under which its next generation of layouts is being developed.
            </p>
            <p>
              The three Aurex One layouts — at Pusapatirega and Modavalasa in Vizianagaram
              district, and at Pydibhimvaram in Srikakulam district — are placed on the
              region's two clearest growth corridors: the Bhogapuram international airport
              corridor and the Pydibhimvaram pharma belt.
            </p>
            <p>
              The firm's way of working is simple: figures are published only when verified,
              approvals are published only when confirmed, and the land is shown to every
              buyer before a decision is asked for.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Team — honest placeholders until names and photos are supplied */}
      <section className="border-t border-line bg-ink2" data-testid="about-team-section">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <FadeUp>
            <p className="eyebrow mb-2">The People</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-4xl">Leadership</h2>
            <p className="mt-3 max-w-xl text-xs font-light text-sand">
              Leadership profiles are published with verified names and photographs.
            </p>
          </FadeUp>
          <FadeUpGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <FadeUpItem key={n}>
                <div
                  className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-line bg-ink px-6 text-center"
                  data-testid={`team-placeholder-${n}`}
                >
                  <span className="font-serif text-3xl text-aurexlabel">▲</span>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-aurexlabel">
                    Team member — name & photo to be added
                  </p>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>
    </div>
  );
}
