"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { PHONE_DISPLAY } from "../data/layouts";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/layouts", label: "Layouts" },
  { to: "/about", label: "About Us" },
  { to: "/vision", label: "Our Vision" },
  { to: "/why-aurex", label: "Why Aurex" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
      isActive ? "text-gold" : "text-sand hover:text-gold"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md" data-testid="site-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-3" data-testid="nav-brand-link" onClick={() => setOpen(false)}>
          <span className="text-sm text-gold transition-transform duration-300 group-hover:rotate-45">▲</span>
          <span className="font-serif text-xl font-light uppercase tracking-[0.22em] text-cream">AUREX ONE</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" data-testid="nav-desktop-links">
          {LINKS.map((l) => (
            <NavLink key={l.to} href={l.to} end={l.to === "/"} className={linkCls} data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+917995530315"
            className="hidden font-mono text-xs tracking-wider text-aurexlabel transition-colors duration-300 hover:text-gold xl:block"
            data-testid="nav-phone-link"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            data-testid="nav-get-in-touch-button"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-goldbright sm:inline-block"
          >
            Book Site Visit
          </Link>
          <button
            className="text-cream lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            data-testid="nav-mobile-menu-button"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-line bg-ink px-6 py-8 lg:hidden" data-testid="nav-mobile-menu">
          <div className="flex flex-col gap-6">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                href={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `font-serif text-2xl font-light ${isActive ? "text-gold" : "text-cream"}`}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-get-in-touch-button"
              className="mt-4 rounded-sm bg-gold px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Book Site Visit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
