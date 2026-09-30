"use client";

import Link from "next/link";

// Direction-style layout card: district chip + serif gold price, real site photo,
// mono telemetry rows, full-width inquire rail. Used on Home and Layouts hub.
export const LayoutCard = ({ layout, testid }) => (
  <article
    className="group flex flex-col justify-between rounded-sm border border-line bg-ink2 p-8 transition-colors duration-300 hover:border-gold/60"
    data-testid={testid}
  >
    <div>
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded-sm border border-line bg-[#161616] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
          {layout.district}
        </span>
        <span className="font-serif text-xl text-gold" data-testid={`${testid}-price`}>
          {layout.stats[3].value} / sq yd
        </span>
      </div>

      <h3 className="mb-3 font-serif text-3xl font-light text-cream">Aurex One @ {layout.name}</h3>
      <p className="mb-6 text-xs font-light leading-relaxed text-sand">{layout.blurb}</p>

      <Link href={`/layouts/${layout.slug}`} className="relative mb-6 block aspect-[16/9] w-full overflow-hidden rounded-sm border border-line" data-testid={`${testid}-image-link`}>
        <img
          src={layout.cardImage}
          alt={`Aurex One @ ${layout.name} site`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-sand backdrop-blur-sm">
          {layout.cardOverlay}
        </span>
      </Link>

      <dl className="space-y-3 border-t border-line pt-4 font-mono text-xs">
        <div className="flex justify-between text-sand">
          <span>Total Extent</span>
          <span className="text-cream">{layout.stats[0].value} Acres</span>
        </div>
        <div className="flex justify-between text-sand">
          <span>Plot Range</span>
          <span className="text-cream">{layout.stats[2].value} sq yds</span>
        </div>
        <div className="flex justify-between text-sand">
          <span>{layout.keyStat.label}</span>
          <span className="text-gold">{layout.keyStat.value}</span>
        </div>
      </dl>
    </div>

    <div className="mt-8 border-t border-line/60 pt-4">
      <Link
        href={`/layouts/${layout.slug}`}
        className="block w-full rounded-sm border border-line bg-[#161616] py-3 text-center text-xs font-semibold uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        data-testid={`${testid}-inquire-button`}
      >
        Inquire {layout.name}
      </Link>
    </div>
  </article>
);
