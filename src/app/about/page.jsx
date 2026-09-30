import { Suspense } from "react";
import Page from "@/views/AboutPage";
export const metadata = {"title":"About Us — Aurex One","description":"Aurex Build Con LLP — 25+ years of experience and 20+ layouts delivered across Andhra Pradesh. Aurex One is its plotted-development brand.","alternates":{"canonical":"/about"}};
export default function Route() { return <Suspense fallback={<div className="px-6 py-24 text-center">Loading…</div>}><Page /></Suspense>; }
