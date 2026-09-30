"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Hero } from "./Hero";
import { FadeUp, FadeUpGroup, FadeUpItem } from "./FadeUp";
import { waLink } from "../data/layouts";

const Toggle = ({ label, open, onToggle, testid }) => (
  <button
    onClick={onToggle}
    aria-expanded={open}
    data-testid={testid}
    className="flex w-full items-center justify-between rounded-sm border border-line bg-ink2 px-6 py-5 text-left transition-colors duration-300 hover:border-gold/60 md:px-10"
  >
    <span className="font-serif text-lg font-light text-cream md:text-xl">{label}</span>
    <ChevronDown size={18} className={`text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
  </button>
);

const GALLERY_TAGS = ["Site", "Boundary", "Road Access", "Region"];

// Single reusable template for all three layout pages — only the data differs.
export const LayoutTemplate = ({ layout }) => {
  const [accessOpen, setAccessOpen] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(false);

  const previewAccess = layout.accessNetwork.slice(0, 4);
  const extraAccess = layout.accessNetwork.slice(4);

  const Row = ({ name, detail }) => (
    <li className="flex items-baseline justify-between gap-4 font-mono text-xs">
      <span className="text-sand">{name}</span>
      <span className="shrink-0 text-right text-cream">{detail}</span>
    </li>
  );

  return (
    <div data-testid={`layout-page-${layout.slug}`}>
      <Hero
        image={layout.heroImage}
        eyebrow={`AUREX ONE · ${layout.corridor.toUpperCase()}`}
        title={`Aurex One @ ${layout.name}`}
        subtitle={layout.intro}
        primaryCta={{ label: "Book a Site Visit", href: `/contact?layout=${layout.slug}` }}
        secondaryCta={{ label: `WhatsApp ${layout.name}`, href: waLink(layout.name), external: true }}
        ticker={`${layout.stats[0].value} Acres • ${layout.stats[2].value} sq yds • ${layout.stats[3].value} / sq yd`}
      />

      {/* Telemetry bar */}
      <section className="border-b border-line bg-ink2" data-testid="layout-stats-section">
        <FadeUpGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-center lg:grid-cols-4">
          {[
            { value: layout.stats[0].value, label: `Total Extent (Acres)`, testid: "layout-stat-extent" },
            { value: layout.stats[2].value, label: "Plot Range (Sq Yds)", testid: "layout-stat-plots" },
            { value: layout.stats[3].value, label: "Price / Sq Yd", testid: "layout-stat-price" },
            { value: layout.keyStat.value, label: layout.keyStat.label, testid: "layout-stat-key" },
          ].map((s) => (
            <FadeUpItem key={s.label} className="border-r border-line/60 last:border-r-0">
              <div className="stat-num" data-testid={s.testid}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </FadeUpItem>
          ))}
        </FadeUpGroup>
        <p className="border-t border-line/60 px-6 py-3 text-center font-mono text-[11px] text-aurexlabel">
          Number of plots — to be confirmed • RERA / DTCP approval — to be published on confirmation
        </p>
      </section>

      {/* Proximity matrix + toggle */}
      <section className="mx-auto max-w-7xl px-6 py-24" data-testid="layout-access-section">
        <FadeUp>
          <p className="eyebrow mb-2">Verified Telemetry</p>
          <h2 className="mb-4 font-serif text-3xl font-light text-cream sm:text-5xl">Accurate Proximity Matrix</h2>
          <p className="max-w-xl text-xs font-light text-sand">
            Exact travel figures from {layout.name}, verified on-ground.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-12">
          <div className="surface-card p-6 md:p-8" data-testid="access-network-panel">
            <div className="mb-4 border-b border-line pb-4">
              <h3 className="font-serif text-xl font-light text-cream">{layout.name} Node</h3>
              <span className="font-mono text-[11px] text-sand">{layout.district}</span>
            </div>
            <ul className="grid gap-x-12 gap-y-2.5 md:grid-cols-2">
              {previewAccess.map((a) => (
                <Row key={a.name} name={a.name} detail={a.detail} />
              ))}
              {accessOpen &&
                extraAccess.map((a) => <Row key={a.name} name={a.name} detail={a.detail} />)}
            </ul>
            {layout.slug === "pydibhimvaram" && (
              <p className="mt-4 border-t border-line pt-2 font-mono text-[10px] text-aurexlabel">
                *Airport figure pending on-ground confirmation, via NH16
              </p>
            )}
          </div>
          {extraAccess.length > 0 && (
            <div className="mt-4">
              <Toggle
                label={accessOpen ? "Hide Full Access Network" : "View Full Access Network"}
                open={accessOpen}
                onToggle={() => setAccessOpen(!accessOpen)}
                testid="access-network-toggle"
              />
            </div>
          )}
        </FadeUp>
      </section>

      {/* Specifications */}
      <section className="border-y border-line bg-ink2" data-testid="layout-specs-section">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <FadeUp>
            <p className="eyebrow mb-2">The Aurex Standard</p>
            <h2 className="mb-4 font-serif text-3xl font-light text-cream sm:text-5xl">
              Engineered Underground &amp; On-Surface
            </h2>
            <p className="max-w-2xl text-sm font-light leading-relaxed text-sand">
              Fully concealed infrastructure, flood-resilient civil design, and utilities ready for
              construction — identical engineering across every Aurex One layout.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-12">
            <Toggle
              label={specsOpen ? "Hide Full Specification" : "View Full Specification"}
              open={specsOpen}
              onToggle={() => setSpecsOpen(!specsOpen)}
              testid="specification-toggle"
            />
            <AnimatePresence initial={false}>
              {specsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                  data-testid="specification-panel"
                >
                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {layout.specifications.map((cat, i) => (
                      <div key={cat.category} className="rounded-sm border border-line bg-ink p-6">
                        <span className="mb-2 block font-mono text-xs text-gold">
                          {String(i + 1).padStart(2, "0")} / {cat.category.toUpperCase()}
                        </span>
                        <ul className="space-y-2 text-xs font-light text-sand">
                          {cat.items.map((item) => (
                            <li key={item} className={item.startsWith("RERA") ? "italic" : ""}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20" data-testid="layout-gallery-section">
        <FadeUp className="mb-10 flex items-center justify-between">
          <h3 className="font-serif text-2xl font-light text-cream sm:text-3xl">
            On the Ground at {layout.name}
          </h3>
          <span className="hidden font-mono text-xs uppercase tracking-wider text-sand sm:block">
            Ground Documentation
          </span>
        </FadeUp>
        <FadeUpGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {layout.gallery.map((g, i) => (
            <FadeUpItem key={i}>
              <figure
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line"
                data-testid={`gallery-image-${i}`}
              >
                <img src={g.src} alt={g.caption} className="h-full w-full object-cover" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-ink/90 to-transparent p-4 pt-8">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                    {GALLERY_TAGS[i] || "Site"}
                  </span>
                  <span className="text-xs font-light text-cream">{g.caption}</span>
                </figcaption>
              </figure>
            </FadeUpItem>
          ))}
        </FadeUpGroup>
      </section>

      {/* Map + CTA */}
      <section className="border-t border-line bg-ink2" data-testid="layout-map-section">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <FadeUp>
            <p className="eyebrow mb-2">Find the Site</p>
            <h2 className="font-serif text-3xl font-light text-cream sm:text-4xl">
              {layout.name}, {layout.district}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-sm border border-line" data-testid="layout-map-embed">
              <iframe
                title={`Map of Aurex One @ ${layout.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(layout.mapQuery)}&output=embed`}
                className="aspect-video w-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 font-mono text-[11px] italic text-aurexlabel">
              Approximate location — the exact site pin will be confirmed before launch.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/contact?layout=${layout.slug}`} className="btn-gold" data-testid="layout-book-visit-button">
              Book a Site Visit
            </Link>
            <a
              href={waLink(layout.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              data-testid="layout-whatsapp-button"
            >
              WhatsApp about {layout.name}
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};
