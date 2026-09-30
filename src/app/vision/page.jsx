import { Suspense } from "react";
import Page from "@/views/VisionPage";
export const metadata = {"title":"Our Vision — Aurex One","description":"The vision behind Aurex One: plotted land in North Andhra, developed and sold to a higher standard of openness.","alternates":{"canonical":"/vision"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
