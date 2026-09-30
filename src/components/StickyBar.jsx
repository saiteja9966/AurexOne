"use client";

import { PHONE_DISPLAY, PHONE_TEL, waLink } from "../data/layouts";

// Sticky bottom direct-action bar — mobile only (per approved direction).
export const StickyBar = () => (
  <aside
    aria-label="Quick contact"
    className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-line bg-ink2/95 p-3 backdrop-blur-md md:hidden"
    data-testid="sticky-mobile-bar"
  >
    <a
      href={PHONE_TEL}
      data-testid="sticky-call-button"
      className="flex-1 rounded-sm border border-line bg-[#161616] py-3 text-center text-xs font-semibold uppercase tracking-widest text-cream transition-transform duration-150 active:scale-95"
    >
      Call {PHONE_DISPLAY}
    </a>
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="sticky-whatsapp-button"
      className="flex-1 rounded-sm bg-gold py-3 text-center text-xs font-semibold uppercase tracking-widest text-ink shadow-[0_0_15px_rgba(212,175,106,0.25)] transition-transform duration-150 active:scale-95"
    >
      WhatsApp Inquiry
    </a>
  </aside>
);
