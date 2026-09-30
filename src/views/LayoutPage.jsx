"use client";

import Link from "next/link";
import { LayoutTemplate } from "../components/LayoutTemplate";
import { getLayout } from "../data/layouts";

export default function LayoutPage({ slug }) {
  const layout = getLayout(slug);

  if (!layout) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-40 text-center" data-testid="layout-not-found">
        
        <p className="eyebrow">Not found</p>
        <h1 className="mt-6 font-serif text-4xl text-cream">This layout doesn't exist.</h1>
        <Link
          href="/layouts"
          data-testid="layout-not-found-back-link"
          className="mt-10 inline-block border border-gold px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          View All Layouts
        </Link>
      </div>
    );
  }

  return (
    <>
      
      <LayoutTemplate layout={layout} />
    </>
  );
}
