"use client";

import Link from "next/link";
import { Hero } from "../components/Hero";
import { LayoutCard } from "../components/LayoutCard";
import { LeadForm } from "../components/LeadForm";
import { ScrollMasterplan } from "../components/ScrollMasterplan";
import { FadeUp, FadeUpGroup, FadeUpItem } from "../components/FadeUp";
import { LAYOUTS, IMAGES } from "../data/layouts";

// Feature flag: approval-document slot stays hidden until real scans exist.
const SHOW_APPROVAL_DOCS = false;

const STANDARD_PILLS = ["Transparency", "Appreciation", "Quality", "Fair Pricing"];

const HOME_INFRA = [
  {
    num: "01 / ROADS",
    title: "Wide Concrete Network",
    items: [
      "Wide Cement Concrete (CC) thoroughfares",
      "Premium curb stone finishing & pedestrian walkways",
      "Individual plot access slopes & road hierarchy",
    ],
  },
  {
    num: "02 / UTILITIES",
    title: "Concealed Systems",
    items: [
      "Underground electrical distribution grid",
      "Scientific stormwater (SASA) drainage system",
      "Direct underground water supply to every plot",
    ],
  },
  {
    num: "03 / WATER",
    title: "Storage & Conservation",
    items: [
      "Dedicated overhead water storage tank",
      "High capacity underground sump & harvesting",
      "Flood-resilient sustainable water distribution",
    ],
  },
  {
    num: "04 / COMMUNITY",
    title: "6,000 Sq Ft Clubhouse",
    items: [
      "Premium multi-level recreational clubhouse",
      "Landscaped entrance plaza with boom barriers",
      "24×7 CCTV surveillance provision in key zones",
    ],
  },
  {
    num: "05 / LANDSCAPE",
    title: "Avenue Boulevards",
    items: [
      "Avenue tree plantation across entire layout",
      "Children's play zone & senior citizen seating",
      "Dedicated continuous walking & jogging tracks",
    ],
  },
  {
    num: "06 / TITLE",
    title: "Boundary Demarcation",
    items: [
      "Precision stone demarcation on all plot corners",
      "Plot-wise Google Maps digital locator",
      "Statutories: to be published on confirmation",
    ],
  },
];

const GALLERY_BAND = [
  { src: "/images/gallery/pusapatirega-road.jpg", tag: "Thoroughfares", caption: "CC Roads & Walkways" },
  { src: "/images/gallery/pydibhimvaram-boundary.jpg", tag: "Perimeter", caption: "RCC Compound Wall" },
  { src: IMAGES.entranceArch, tag: "Arrival Plaza", caption: "Signature Entrance Arch" },
  { src: "/images/gallery/modavalasa-boundary.jpg", tag: "Boundaries", caption: "Demarcated Perimeter" },
];

const TELEMETRY = [
  { value: "34.5", label: "Total Acres Plotted" },
  { value: "167–267", label: "Plot Range (Sq Yds)" },
  { value: "25+", label: "Years Operating Experience" },
  { value: "< 10 min", label: "Bhogapuram Airport Access" },
];

const INVESTOR_SLOTS = [
  {
    quote: "Plot investor accounts and registered deed testimonials are added upon verified registry documentation.",
    role: "Layout Investor",
    place: "Pusapatirega",
  },
  {
    quote: "Pharma corridor investor and NRI buyer feedback recorded post site allocation.",
    role: "Industrial Investor",
    place: "Pydibhimvaram",
  },
  {
    quote: "Executive layout buyer statements scheduled for publication alongside DTCP/RERA confirmation.",
    role: "Villa Plot Owner",
    place: "Modavalasa",
  },
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      

      <Hero
        image={IMAGES.heroHome}
        eyebrow="AUREX BUILD CON LLP · NORTH ANDHRA"
        title="Land Crafted For Generations"
        subtitle="Plotted developments across North Andhra's airport and pharma expansion corridors with wide concrete thoroughfares, underground SASA utilities, and 100% demarcated title clarity."
        primaryCta={{ label: "Explore 3 Layouts", href: "/layouts" }}
        secondaryCta={{ label: "Masterplan Engineering", href: "/why-aurex" }}
        ticker="From ₹17,000/sq yd • Sites from 3.5 to 18 Acres"
      />

      {/* Corridor telemetry bar */}
      <section className="border-b border-line bg-ink2" data-testid="telemetry-bar">
        <FadeUpGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center lg:grid-cols-4">
          {TELEMETRY.map((t) => (
            <FadeUpItem key={t.label} className="border-r border-line/60 last:border-r-0">
              <div className="stat-num">{t.value}</div>
              <div className="stat-label">{t.label}</div>
            </FadeUpItem>
          ))}
        </FadeUpGroup>
      </section>

      {/* Layouts hub */}
      <section className="border-b border-line bg-ink px-6 py-24" data-testid="layouts-showcase-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-2">North Andhra Portfolio</p>
              <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">
                Three Strategic Plotted Estates
              </h2>
            </div>
            <p className="max-w-md text-sm font-light text-sand">
              Every site is selected for institutional connectivity along NH16, the new
              international airport growth vector, and active industrial corridors.
            </p>
          </FadeUp>

          <FadeUpGroup className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {LAYOUTS.map((l) => (
              <FadeUpItem key={l.slug}>
                <LayoutCard layout={l} testid={`layout-card-${l.slug}`} />
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* The Aurex Standard */}
      <section className="border-b border-line bg-ink2 px-6 py-24" data-testid="aurex-standard-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-10 max-w-3xl">
            <p className="eyebrow mb-2">The Aurex Standard</p>
            <h2 className="mb-4 font-serif text-3xl font-light text-cream sm:text-5xl">
              Engineered Underground &amp; On-Surface
            </h2>
            <p className="text-sm font-light leading-relaxed text-sand">
              Every plot development incorporates fully concealed infrastructure, flood-resilient
              civil design, and sustainable utilities ready for construction.
            </p>
          </FadeUp>

          <FadeUp className="mb-12 flex flex-wrap gap-3" data-testid="standard-pills">
            {STANDARD_PILLS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-gold/50 px-5 py-1.5 text-xs uppercase tracking-[0.2em] text-gold"
                data-testid={`standard-pill-${p.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {p}
              </span>
            ))}
          </FadeUp>

          <FadeUpGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME_INFRA.map((c) => (
              <FadeUpItem key={c.num}>
                <div className="h-full rounded-sm border border-line bg-ink p-6" data-testid={`infra-card-${c.num.slice(0, 2)}`}>
                  <span className="mb-2 block font-mono text-xs text-gold">{c.num}</span>
                  <h4 className="mb-3 font-serif text-xl font-light text-cream">{c.title}</h4>
                  <ul className="space-y-2 text-xs font-light text-sand">
                    {c.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>

          {SHOW_APPROVAL_DOCS && (
            <div className="mt-6 rounded-sm border border-line bg-ink p-8" data-testid="approval-docs-slot">
              {/* Approval document scans render here once supplied. */}
            </div>
          )}
        </div>
      </section>

      {/* Gallery band */}
      <section className="border-b border-line bg-ink px-6 py-20" data-testid="gallery-band-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-10 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-light text-cream sm:text-3xl">
              Site &amp; Infrastructure Progress
            </h3>
            <span className="hidden font-mono text-xs uppercase tracking-wider text-sand sm:block">
              Ground Documentation
            </span>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY_BAND.map((g) => (
              <FadeUpItem key={g.tag}>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line" data-testid={`gallery-band-${g.tag.toLowerCase()}`}>
                  <img src={g.src} alt={g.caption} className="h-full w-full object-cover" loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-ink/90 to-transparent p-4 pt-8">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold">{g.tag}</span>
                    <span className="text-xs font-light text-cream">{g.caption}</span>
                  </figcaption>
                </figure>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Proximity matrix */}
      <section className="border-b border-line bg-ink2 px-6 py-24" data-testid="proximity-matrix-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow mb-2">Verified Telemetry</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">Accurate Proximity Matrix</h2>
            <p className="mt-3 text-xs font-light text-sand">
              Exact travel figures verified from on-ground transit nodes.
            </p>
          </FadeUp>

          <FadeUpGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {LAYOUTS.map((l) => (
              <FadeUpItem key={l.slug}>
                <div className="h-full rounded-sm border border-line bg-ink p-6" data-testid={`matrix-${l.slug}`}>
                  <div className="mb-4 border-b border-line pb-4">
                    <h4 className="font-serif text-xl font-light text-cream">{l.name} Node</h4>
                    <span className="font-mono text-[11px] text-sand">{l.district}</span>
                  </div>
                  <ul className="space-y-2.5 font-mono text-xs text-sand">
                    {l.accessNetwork.map((a, i) => (
                      <li key={a.name} className="flex items-baseline justify-between gap-3">
                        <span>{a.name}{l.slug === "pydibhimvaram" && a.name.includes("Airport") ? "*" : ""}</span>
                        <span className={i < (l.slug === "pydibhimvaram" ? 4 : 1) ? "text-gold" : "text-cream"}>
                          {l.slug === "pydibhimvaram" && a.name.includes("Airport")
                            ? "25 min*"
                            : a.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {l.slug === "pydibhimvaram" && (
                    <p className="mt-4 border-t border-line pt-2 font-mono text-[10px] text-aurexlabel">
                      *Pending on-ground confirmation, via NH16
                    </p>
                  )}
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Corridor masterplan map — positions replicate the owner's verified map */}
      <section className="border-b border-line bg-ink px-6 py-24" data-testid="corridor-map-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-2">Corridor Masterplan</p>
              <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">
                One Corridor. Three Addresses.
              </h2>
            </div>
            <p className="max-w-md text-sm font-light text-sand">
              Exact positions of the three Aurex One estates across the North Andhra growth
              corridor — NH16, Bhogapuram International Airport and the coastal belt.
            </p>
          </FadeUp>
          <ScrollMasterplan />
        </div>
      </section>

      {/* Heritage + founders' quote */}
      <section className="border-b border-line bg-ink px-6 py-24" data-testid="heritage-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <FadeUp className="lg:col-span-6">
            <p className="eyebrow mb-2">Heritage &amp; Execution</p>
            <h2 className="mb-6 font-serif text-3xl font-light text-cream sm:text-5xl">Aurex Build Con LLP</h2>
            <p className="mb-6 text-sm font-light leading-relaxed text-sand">
              With 25+ years of experience and 20+ layouts delivered across Andhra Pradesh, Aurex
              One represents an uncompromising commitment to title transparency, structural
              engineering, and strategic land appreciation.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-line pt-6">
              <div>
                <span className="stat-num block">25+</span>
                <span className="stat-label block">Years Experience</span>
              </div>
              <div>
                <span className="stat-num block">20+</span>
                <span className="stat-label block">Layouts Delivered</span>
              </div>
            </div>
            <Link href="/about" className="btn-ghost mt-8" data-testid="heritage-about-link">
              Our Story
            </Link>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-6">
            <div className="rounded-sm border border-line bg-ink2 p-10 md:p-14" data-testid="legacy-quote-section">
              <span className="text-sm text-gold">▲</span>
              <blockquote className="mt-6 font-serif text-2xl font-light italic leading-snug text-cream md:text-3xl">
                “A family builds many things in a lifetime. Land is the one thing it hands down.”
              </blockquote>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-aurexlabel">
                From the founders — Aurex Build Con LLP
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Investor band — honest empty states until verified reviews exist */}
      <section className="border-b border-line bg-ink2 px-6 py-24" data-testid="investor-band-section">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow mb-2">Investor Confidence</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">Client Verification</h2>
            <p className="mt-2 text-xs font-light text-sand">
              Verified buyer reviews published following handover milestones.
            </p>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {INVESTOR_SLOTS.map((s) => (
              <FadeUpItem key={s.place}>
                <div className="flex h-full flex-col justify-between rounded-sm border border-dashed border-line bg-ink p-8" data-testid={`investor-slot-${s.place.toLowerCase()}`}>
                  <p className="mb-6 text-xs font-light italic leading-relaxed text-aurexlabel">
                    “{s.quote}”
                  </p>
                  <div className="flex items-center justify-between border-t border-line pt-4">
                    <span className="font-mono text-xs text-sand">{s.role}</span>
                    <span className="font-mono text-[10px] uppercase text-aurexlabel">{s.place}</span>
                  </div>
                </div>
              </FadeUpItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Lead capture */}
      <section className="bg-ink px-6 py-24" data-testid="home-contact-section">
        <div className="mx-auto max-w-4xl">
          <FadeUp className="mb-12 text-center">
            <p className="eyebrow mb-2">Direct Rail</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-5xl">
              Schedule A Site Inspection
            </h2>
            <p className="mt-2 text-xs font-light text-sand">
              Connect directly with our land advisory desk via WhatsApp or Call at +91 79955 30315.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <LeadForm sourcePage="home" />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
