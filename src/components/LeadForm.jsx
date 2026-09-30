"use client";

import { useState } from "react";
import { LAYOUTS } from "../data/layouts";

// Shared lead form — Contact page, homepage section, "Book a Site Visit" flows.
// Honeypot field ("website") silently drops bots.
export const LeadForm = ({ defaultLayout = "Not specified", sourcePage = "unknown" }) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    layout_of_interest: defaultLayout,
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [requestUrl, setRequestUrl] = useState("");

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    if (values.website) { setSubmitting(false); return; }
    const text = [
      "Hello Aurex One, I'd like to arrange a site visit.",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email && `Email: ${values.email.trim()}`,
      `Layout: ${values.layout_of_interest}`,
      values.message.trim(),
      `Enquiry from: ${sourcePage}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/917995530315?text=${encodeURIComponent(text)}`;
    setRequestUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setDone(true);
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="surface-card p-8 text-center sm:p-14" data-testid="lead-form-success">
        <p className="eyebrow">WhatsApp request prepared</p>
        <h3 className="mt-6 font-serif text-3xl font-light text-cream">
          Thank you, {values.name.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-sand">
          Complete your enquiry by pressing Send in WhatsApp. Your message is addressed
          to the Aurex One land advisory desk at +91 79955 30315.
        </p>
        <a href={requestUrl} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 inline-block">Continue to WhatsApp</a>
        <button type="button" onClick={() => setDone(false)} className="mt-6 block w-full text-sm text-gold">Edit enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-card space-y-6 p-8 sm:p-10" data-testid="lead-form">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="field-label">Full Name</label>
          <input
            id="lead-name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            placeholder="Your Name"
            className="input-box"
            data-testid="lead-form-name-input"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="field-label">Phone / WhatsApp</label>
          <input
            id="lead-phone"
            required
            type="tel"
            minLength={8}
            maxLength={25}
            pattern={"[+0-9\\s\\(\\)\\-]{8,25}"}
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+91"
            className="input-box"
            data-testid="lead-form-phone-input"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="field-label">Email (optional)</label>
          <input
            id="lead-email"
            type="email"
            maxLength={254}
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className="input-box"
            data-testid="lead-form-email-input"
          />
        </div>
        <div>
          <label htmlFor="lead-layout" className="field-label">Layout of Interest</label>
          <select
            id="lead-layout"
            value={values.layout_of_interest}
            onChange={set("layout_of_interest")}
            className="input-box appearance-none"
            data-testid="lead-form-layout-select"
          >
            <option value="Not specified">All 3 Layouts / General Inquiry</option>
            {LAYOUTS.map((l) => (
              <option key={l.slug} value={`Aurex One @ ${l.name}`}>
                {`Aurex One @ ${l.name} (${l.stats[0].value} Acres • ${l.stats[3].value}/sq yd)`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className="field-label">Message or Requirement</label>
        <textarea
          id="lead-message"
          rows={3}
          maxLength={2000}
          value={values.message}
          onChange={set("message")}
          placeholder="Plot size preference, preferred site visit timing..."
          className="input-box resize-none"
          data-testid="lead-form-message-input"
        />
      </div>

      {/* Honeypot — hidden from humans, bots fill it and get silently dropped */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        data-testid="lead-form-website-input"
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          data-testid="lead-form-submit-button"
          className="btn-gold w-full disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Submit Direct WhatsApp Request"}
        </button>
        <p className="mt-3 text-center text-[11px] text-aurexlabel">
          Opens WhatsApp with your details • Press Send to submit your enquiry
        </p>
      </div>
    </form>
  );
};
