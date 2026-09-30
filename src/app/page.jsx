import { Suspense } from "react";
import Page from "@/views/HomePage";
export const metadata = {"title":"Aurex One — Plotted Developments in North Andhra","description":"Plotted developments across North Andhra's airport and pharma expansion corridors — three layouts from Aurex Build Con LLP, 25+ years of experience and 20+ layouts delivered.","alternates":{"canonical":"/"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
