import { Suspense } from "react";
import Page from "@/views/LayoutsHub";
export const metadata = {"title":"Our Layouts — Aurex One","description":"Three plotted estates from Aurex Build Con LLP: Pusapatirega and Modavalasa on the Bhogapuram airport corridor, Pydibhimvaram on the pharma corridor.","alternates":{"canonical":"/layouts"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
