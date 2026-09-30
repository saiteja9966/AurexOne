import { Suspense } from "react";
import Page from "@/views/ContactPage";
export const metadata = {"title":"Contact Us — Aurex One","description":"Speak with the Aurex One land advisory desk — call, WhatsApp, or send an enquiry. Book a site visit to any of the three North Andhra layouts.","alternates":{"canonical":"/contact"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
