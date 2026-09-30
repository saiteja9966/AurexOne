"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, end = false, className, ...props }) {
  const pathname = usePathname();
  const isActive = end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  return <Link href={href} aria-current={isActive ? "page" : undefined} className={typeof className === "function" ? className({ isActive }) : className} {...props} />;
}
