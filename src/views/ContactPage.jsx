"use client";

import { useSearchParams } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import { LeadForm } from "../components/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, waLink, getLayout } from "../data/layouts";

export default function ContactPage() {
  const params = useSearchParams();
  const layout = getLayout(params.get("layout") || "");
  const defaultLayout = layout ? `Aurex One @ ${layout.name}` : "Not specified";
  const sourcePage = layout ? `contact?layout=${layout.slug}` : "contact";

  return (
    <div data-testid="contact-page">
      

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-2">Direct Rail</p>
          <h1 className="font-serif text-4xl font-light text-cream sm:text-5xl lg:text-6xl">
            Schedule A Site Inspection
          </h1>
          <p className="mt-4 text-sm font-light leading-relaxed text-sand">
            {layout
              ? `You're enquiring about Aurex One @ ${layout.name} — send the form and we'll arrange your site visit.`
              : "Connect directly with our land advisory desk via WhatsApp or Call."}
          </p>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <FadeUp delay={0.1}>
            <LeadForm key={defaultLayout} defaultLayout={defaultLayout} sourcePage={sourcePage} />
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-6">
            <div className="surface-card p-8" data-testid="contact-direct-card">
              <p className="eyebrow">Direct</p>
              <a
                href={PHONE_TEL}
                data-testid="contact-call-button"
                className="mt-6 flex items-center gap-3 text-cream transition-colors duration-300 hover:text-gold"
              >
                <Phone size={18} className="text-gold" />
                <span className="font-serif text-2xl font-light">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={waLink(layout?.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-button"
                className="btn-gold mt-6 flex w-full items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            <div className="surface-card p-8" data-testid="contact-office-card">
              <p className="eyebrow">Coverage</p>
              <p className="mt-6 text-sm font-light leading-relaxed text-sand">
                Aurex Build Con LLP
                <br />
                Registered office address — to be confirmed
              </p>
              <p className="mt-4 font-mono text-xs leading-relaxed text-sand">
                Site visits arranged across Pusapatirega, Modavalasa (Vizianagaram district)
                and Pydibhimvaram (Srikakulam district).
              </p>
            </div>

            <p className="text-[11px] font-light italic leading-relaxed text-aurexlabel">
              Submitting this form shares your details with the Aurex One land advisory desk.
              RERA / DTCP approvals: to be published on confirmation.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
