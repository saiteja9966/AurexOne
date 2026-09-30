import { notFound } from "next/navigation";
import { LAYOUTS, getLayout } from "@/data/layouts";
import LayoutPage from "@/views/LayoutPage";

export function generateStaticParams() {
  return LAYOUTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const layout = getLayout(slug);
  if (!layout) return { title: "Layout not found — Aurex One" };
  return {
    title: `Aurex One @ ${layout.name} — ${layout.corridor}`,
    description: layout.intro,
    alternates: { canonical: `/layouts/${slug}` },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getLayout(slug)) notFound();
  return <LayoutPage slug={slug} />;
}
