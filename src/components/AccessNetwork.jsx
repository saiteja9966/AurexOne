"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Plane, Palmtree, Hotel, Building2, Landmark, Waves, Sunset, Umbrella } from "lucide-react";
import styles from "./AccessNetwork.module.css";

const destinations = [
  { name: "Bhogapuram International Airport", lines: ["BHOGAPURAM", "INTERNATIONAL AIRPORT"], time: "10 MINS", Icon: Plane },
  { name: "Sunray Resorts", lines: ["SUNRAY RESORTS"], time: "15 MINS", Icon: Palmtree },
  { name: "Taj Vivanta", lines: ["TAJ VIVANTA"], time: "15 MINS", Icon: Hotel },
  { name: "Oberoi Hotels & Resorts", lines: ["OBEROI HOTELS", "& RESORTS"], time: "20 MINS", Icon: Building2 },
  { name: "Mayfair Resort", lines: ["MAYFAIR RESORT"], time: "20 MINS", Icon: Palmtree },
  { name: "Vizianagaram", lines: ["VIZIANAGARAM"], time: "25 MINS", Icon: Building2 },
  { name: "Avanthi Institute of Engineering", lines: ["AVANTHI INSTITUTE", "OF ENGINEERING"], time: "25 MINS", Icon: Landmark },
  { name: "Thippalavalasa Beach", lines: ["THIPPALAVALASA BEACH"], time: "25 MINS", Icon: Umbrella },
  { name: "Konada Beach", lines: ["KONADA BEACH"], time: "25 MINS", Icon: Waves },
  { name: "Sunray Beach", lines: ["SUNRAY BEACH"], time: "25 MINS", Icon: Sunset },
];

const mapLink = (name) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Andhra Pradesh, India`)}`;

function Emblem({ mobile = false }) {
  return <g className={styles.emblem} transform={mobile ? undefined : "translate(638 240)"}>
    <circle r="148" className={styles.halo} />
    <circle r="148" className={styles.ring} />
    <circle r="139" className={styles.innerRing} />
    <g fill="currentColor" transform="translate(-49 -113)">
      <path d="M47 0 C44 60 35 107 6 141 L30 141 C40 112 45 65 47 0Z" />
      <path d="M51 20 C56 79 64 116 91 141 L68 141 C58 106 54 61 51 20Z" />
      <path d="M49 49 L42 141 L57 141Z" />
    </g>
    <text y="82" textAnchor="middle" className={styles.brand}>AUREX</text>
    <text y="113" textAnchor="middle" className={styles.brandSub}>ONE</text>
    <path d="M-93 103H-58 M58 103H93" className={styles.brandRule} />
    <circle cx="0" cy="-148" r="4" className={styles.crownLight} />
  </g>;
}

function Connection({ destination, index }) {
  const right = index >= 5;
  const row = index % 5;
  const angle = (right ? [-45, -25, 0, 25, 45] : [-135, -155, -180, -205, -225])[row] * Math.PI / 180;
  const x = 638 + Math.cos(angle) * 148;
  const y = 240 + Math.sin(angle) * 148;
  const endpoint = right ? 883 : 390;
  const rowY = 64 + row * 88;
  const bend = right ? 824 : 455;
  const line = `M ${x} ${y} L ${bend} ${rowY} L ${endpoint} ${rowY}`;
  const iconX = right ? 909 : 181;
  const labelX = right ? 948 : 300;
  const { Icon, name, lines, time } = destination;
  return <a href={mapLink(name)} target="_blank" rel="noopener noreferrer" aria-label={`${name}, ${time.toLowerCase()}. View on Google Maps`} className={styles.connection} style={{ "--delay": `${0.25 + row * 0.16}s`, "--travel-delay": `${index * -0.73}s` }}>
    <title>{`${name} · ${time} · View on Google Maps`}</title>
    <path d={line} className={styles.connectionBase} />
    <path d={line} pathLength="1" className={styles.connectionDraw} />
    <path d={line} className={styles.connectionSpark} />
    <circle cx={x} cy={y} r="3.2" className={styles.node} />
    <circle cx={endpoint} cy={rowY} r="2" className={styles.endpoint} />
    <g className={styles.destination}>
      <circle cx={iconX} cy={rowY} r="27" className={styles.iconCircle} />
      <Icon x={iconX - 16} y={rowY - 16} width="32" height="32" strokeWidth="1.25" className={styles.icon} />
      <text x={labelX} y={rowY - (lines.length > 1 ? 13 : 3)} textAnchor={right ? "start" : "middle"} className={styles.placeName} style={index === 0 ? { fontSize: 14 } : undefined}>
        {lines.map((line, i) => <tspan key={line} x={labelX} dy={i === 0 ? 0 : 20}>{line}</tspan>)}
        <tspan x={labelX} dy="27" className={styles.travelTime}>{time}</tspan>
      </text>
    </g>
  </a>;
}

export function AccessNetwork() {
  const ref = useRef(null);
  const revealed = useInView(ref, { once: true, amount: 0.15 });
  const visible = useInView(ref, { amount: 0.05 });

  return <section ref={ref} id="strategic-access" aria-labelledby="access-network-heading" data-testid="access-network-section" className={`${styles.section} ${revealed ? styles.revealed : ""}`} data-visible={visible}>
    <div className={styles.city} aria-hidden="true" />
    <svg className={styles.roads} viewBox="0 0 1200 800" fill="none" aria-hidden="true">
      <path d="M-35-40C130 120 15 167 147 247S140 390 30 487S20 680-60 790 M-24-40C143 120 28 170 160 250S155 398 41 494S31 680-49 790" />
      <path d="M-80 120C120 132 109 40 277-30 M-80 130C124 142 120 48 288-30 M-40 675C116 534 38 452 247 338 M-40 683C128 535 49 463 255 346" />
      <path d="M-40 285L270 75 M-40 293L274 82 M27 90L245 347 M35 86L253 342" opacity=".4" />
    </svg>
    <div className={styles.content}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Strategic</p>
        <h2 id="access-network-heading">Access Network</h2>
        <div className={styles.divider} aria-hidden="true"><span>◇</span></div>
        <p className={styles.subtitle}>Precision connectivity across a high-growth corridor</p>
      </header>

      <svg className={styles.desktopNetwork} viewBox="0 0 1200 490" aria-label="Aurex One destination connections">
        <Emblem />
        {destinations.map((destination, index) => <Connection key={destination.name} destination={destination} index={index} />)}
      </svg>

      <div className={styles.mobileNetwork}>
        <svg className={styles.mobileEmblem} viewBox="-165 -165 330 330" role="img" aria-label="Aurex One"><Emblem mobile /></svg>
        <div className={styles.mobileDestinations}>
          {destinations.map(({ name, time, Icon }, index) => <a key={name} href={mapLink(name)} target="_blank" rel="noopener noreferrer" className={styles.mobileDestination} style={{ "--delay": `${index * .08}s` }}>
            <span className={styles.mobileIcon}><Icon size={24} strokeWidth={1.25} aria-hidden="true" /></span>
            <span className={styles.mobileName}>{name}</span>
            <span className={styles.mobileTime}>{time}</span>
          </a>)}
        </div>
      </div>

      <div className={`${styles.divider} ${styles.bottomDivider}`} aria-hidden="true"><span>◇</span></div>
      <p className={styles.tagline}>Positioned where access defines value</p>
    </div>
  </section>;
}
