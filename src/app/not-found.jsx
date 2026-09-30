import Link from "next/link";

export default function NotFound() {
  return <section className="mx-auto max-w-6xl px-6 py-40 text-center">
    <p className="eyebrow">404 · Page not found</p>
    <h1 className="mt-6 font-serif text-4xl text-cream">Let’s find your way home.</h1>
    <Link href="/" className="btn-gold mt-10 inline-block">Return to Aurex One</Link>
  </section>;
}
