import { Suspense } from "react";
import Page from "@/views/WhyAurexPage";
export const metadata = {"title":"Why Aurex — Aurex One","description":"Why buyers choose Aurex One: corridor-first site selection, a verifiable track record, and nothing overstated.","alternates":{"canonical":"/why-aurex"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
