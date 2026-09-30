import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { AccessNetwork } from "@/components/AccessNetwork";
import "./globals.css";
import "./fonts.css";
import "./enhancements.css";

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "Aurex One — Plotted Developments in North Andhra",
  description: "Three plotted layouts across North Andhra's airport and pharma growth corridors, from Aurex Build Con LLP.",
  openGraph: { type: "website", siteName: "Aurex One", images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App bg-ink font-sans text-cream">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="pb-16 md:pb-0">{children}</main>
        <AccessNetwork />
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
