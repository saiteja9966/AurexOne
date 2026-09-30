"use client";
export default function ErrorPage({ reset }) {
  return <section className="px-6 py-24 text-center">
    <h1 className="font-serif text-4xl text-cream">Something went wrong.</h1>
    <p className="mt-4 text-sand">Please try loading this page again.</p>
    <button className="btn-gold mt-10" onClick={reset}>Try again</button>
  </section>;
}
