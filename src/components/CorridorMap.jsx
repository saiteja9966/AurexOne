"use client";

import { useRouter } from "next/navigation";

// Bespoke corridor map of the three Aurex One estates.
// Pin positions replicate the owner's masterplan map (accurate relative geography):
// coast east, NH16 sweeping south-west, airport central, Pydibhimvaram north,
// Pusapatirega centre, Modavalasa south-west.
const PINS = [
  { slug: "pydibhimvaram", x: 830, y: 210, name: "Pydibhimvaram", sub: "18 Acres • ₹17,000/sq yd", tag: "Srikakulam dist." },
  { slug: "pusapatirega", x: 525, y: 355, name: "Pusapatirega", sub: "13 Acres • ₹25,000/sq yd", tag: "Vizianagaram dist." },
  { slug: "modavalasa", x: 365, y: 530, name: "Modavalasa", sub: "3.5 Acres • ₹30,000/sq yd", tag: "Vizianagaram dist." },
];

const AIRPORT = { x: 570, y: 530 };

const HOTELS = [
  { x: 745, y: 380, label: "Taj Vivanta" },
  { x: 525, y: 620, label: "Sunray Resorts" },
  { x: 830, y: 650, label: "Oberoi Hotels" },
  { x: 875, y: 765, label: "Mayfair Resort" },
];

const BEACHES = [
  { x: 1130, y: 340, label: "Thippalavalasa Beach" },
  { x: 1120, y: 445, label: "Sunray Beach" },
  { x: 1050, y: 540, label: "Konada Beach" },
];

const TOWNS = [
  { x: 120, y: 250, label: "Vizianagaram" },
  { x: 975, y: 245, label: "Srikakulam" },
  { x: 440, y: 835, label: "Vizag Bay City" },
];

const HAMLETS = [
  { x: 370, y: 310, label: "Raghumanda" },
  { x: 620, y: 420, label: "Akkivaram" },
  { x: 870, y: 375, label: "Munjeru" },
  { x: 855, y: 455, label: "Kongavanipalem" },
  { x: 685, y: 650, label: "Kavulavada" },
  { x: 745, y: 575, label: "Gudepupalasa" },
];

const COAST = "M 1240 205 C 1160 255 1150 325 1090 385 C 1030 445 1065 525 1005 605 C 955 672 985 765 950 880";
const NH16 = "M 40 460 C 190 465 240 520 272 585 C 305 650 385 720 470 790 C 525 835 565 862 605 880";

const Pin = ({ pin }) => {
  const { push: navigate } = useRouter();
  return (
    <g
      className="cursor-pointer transition-opacity duration-300 hover:opacity-100"
      opacity="0.95"
      onClick={() => navigate(`/layouts/${pin.slug}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/layouts/${pin.slug}`)}
      tabIndex={0}
      role="link"
      aria-label={`Aurex One @ ${pin.name}`}
      data-testid={`corridor-map-pin-${pin.slug}`}
      style={{ pointerEvents: "all" }}
    >
      {/* glow */}
      <circle cx={pin.x} cy={pin.y} r="30" fill="#d4af6a" opacity="0.10" />
      <circle cx={pin.x} cy={pin.y} r="16" fill="#d4af6a" opacity="0.15" />
      {/* label box above pin */}
      <rect x={pin.x - 110} y={pin.y - 98} width="220" height="62" rx="2" fill="#0a0a0a" stroke="#d4af6a" strokeOpacity="0.55" />
      <text x={pin.x} y={pin.y - 72} textAnchor="middle" fill="#d4af6a" fontSize="13" letterSpacing="2" className="font-serif">
        ▲ AUREX ONE
      </text>
      <text x={pin.x} y={pin.y - 52} textAnchor="middle" fill="#f0e6d2" fontSize="15" className="font-serif">
        {pin.name}
      </text>
      <text x={pin.x} y={pin.y - 38} textAnchor="middle" fill="#a89a7d" fontSize="10" className="font-mono">
        {pin.sub} • {pin.tag}
      </text>
      {/* stem */}
      <line x1={pin.x} y1={pin.y - 34} x2={pin.x} y2={pin.y - 8} stroke="#d4af6a" strokeWidth="1.5" />
      {/* pin marker */}
      <path d={`M ${pin.x} ${pin.y - 10} L ${pin.x + 9} ${pin.y + 6} L ${pin.x - 9} ${pin.y + 6} Z`} fill="#d4af6a" />
      <circle cx={pin.x} cy={pin.y + 10} r="3" fill="#050505" stroke="#d4af6a" strokeWidth="1.5" />
    </g>
  );
};

export const CorridorMap = () => (
  <div className="overflow-x-auto rounded-sm border border-line bg-ink2" data-testid="corridor-map">
    <svg viewBox="0 0 1240 880" className="h-auto w-full min-w-[820px]" role="img" aria-label="Corridor map of the three Aurex One layouts">
      {/* water */}
      <path d={`${COAST} L 1240 880 L 1240 205 Z`} fill="#050505" stroke="none" />
      {/* coastline */}
      <path d={COAST} fill="none" stroke="#2a2a2a" strokeWidth="3" />
      <path d={COAST} fill="none" stroke="#a89a7d" strokeWidth="0.75" strokeOpacity="0.5" transform="translate(-6,0)" />
      <text x="1170" y="620" fill="#6b6048" fontSize="12" letterSpacing="4" className="font-mono" transform="rotate(90 1170 620)">
        BAY OF BENGAL
      </text>

      {/* NH16 */}
      <path d={NH16} fill="none" stroke="#a89a7d" strokeWidth="4" strokeOpacity="0.45" />
      <path d={NH16} fill="none" stroke="#d4af6a" strokeWidth="1" strokeDasharray="10 8" strokeOpacity="0.55" />
      <rect x="92" y="528" width="150" height="40" rx="2" fill="#050505" stroke="#2a2a2a" />
      <text x="167" y="546" textAnchor="middle" fill="#d4af6a" fontSize="12" letterSpacing="2" className="font-mono">NH 16</text>
      <text x="167" y="560" textAnchor="middle" fill="#a89a7d" fontSize="8" letterSpacing="1" className="font-mono">EXCELLENT CONNECTIVITY</text>

      {/* airport proximity dashes */}
      {PINS.map((p) => (
        <line key={p.slug} x1={AIRPORT.x} y1={AIRPORT.y} x2={p.x} y2={p.y} stroke="#d4af6a" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.35" />
      ))}

      {/* airport */}
      <g data-testid="corridor-map-airport">
        <rect x={AIRPORT.x - 11} y={AIRPORT.y - 11} width="22" height="22" rx="2" fill="#050505" stroke="#d4af6a" transform={`rotate(45 ${AIRPORT.x} ${AIRPORT.y})`} />
        <path d={`M ${AIRPORT.x} ${AIRPORT.y - 6} L ${AIRPORT.x + 5} ${AIRPORT.y + 5} L ${AIRPORT.x} ${AIRPORT.y + 2} L ${AIRPORT.x - 5} ${AIRPORT.y + 5} Z`} fill="#d4af6a" />
        <text x={AIRPORT.x} y={AIRPORT.y + 34} textAnchor="middle" fill="#d4af6a" fontSize="12" letterSpacing="1.5" className="font-mono">
          BHOGAPURAM INTL AIRPORT
        </text>
      </g>

      {/* towns */}
      {TOWNS.map((t) => (
        <g key={t.label}>
          <rect x={t.x - 4} y={t.y - 4} width="8" height="8" fill="none" stroke="#a89a7d" />
          <text x={t.x} y={t.y - 12} textAnchor="middle" fill="#f0e6d2" fontSize="13" letterSpacing="1" className="font-mono">
            {t.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* hamlets */}
      {HAMLETS.map((h) => (
        <g key={h.label}>
          <circle cx={h.x} cy={h.y} r="2" fill="#6b6048" />
          <text x={h.x + 8} y={h.y + 4} fill="#6b6048" fontSize="10" className="font-mono">{h.label}</text>
        </g>
      ))}

      {/* hotels */}
      {HOTELS.map((h) => (
        <g key={h.label}>
          <rect x={h.x - 4} y={h.y - 4} width="8" height="8" fill="#a89a7d" transform={`rotate(45 ${h.x} ${h.y})`} />
          <text x={h.x} y={h.y + 20} textAnchor="middle" fill="#a89a7d" fontSize="11" className="font-mono">{h.label}</text>
        </g>
      ))}

      {/* beaches */}
      {BEACHES.map((b) => (
        <g key={b.label}>
          <circle cx={b.x} cy={b.y} r="3.5" fill="none" stroke="#a89a7d" strokeWidth="1.5" />
          <text x={b.x - 10} y={b.y + 4} textAnchor="end" fill="#a89a7d" fontSize="11" className="font-mono">{b.label}</text>
        </g>
      ))}

      {/* the three estates */}
      {PINS.map((p) => (
        <Pin key={p.slug} pin={p} />
      ))}

      {/* compass */}
      <g transform="translate(1140 770)">
        <circle r="26" fill="none" stroke="#2a2a2a" />
        <path d="M 0 -18 L 6 8 L 0 3 L -6 8 Z" fill="#d4af6a" />
        <text y="-34" textAnchor="middle" fill="#d4af6a" fontSize="13" className="font-mono">N</text>
      </g>

      {/* legend */}
      <g transform="translate(60 800)">
        <rect x="-20" y="-24" width="300" height="70" rx="2" fill="#050505" fillOpacity="0.7" stroke="#2a2a2a" />
        <path d="M 0 -8 L 7 4 L -7 4 Z" fill="#d4af6a" />
        <text x="16" y="0" fill="#a89a7d" fontSize="11" className="font-mono">Aurex One Estate</text>
        <rect x="120" y="-12" width="8" height="8" fill="#a89a7d" transform="rotate(45 124 -8)" />
        <text x="140" y="0" fill="#a89a7d" fontSize="11" className="font-mono">Hospitality</text>
        <circle cx="225" cy="-8" r="3.5" fill="none" stroke="#a89a7d" strokeWidth="1.5" />
        <text x="240" y="0" fill="#a89a7d" fontSize="11" className="font-mono">Beach</text>
        <line x1="0" y1="24" x2="24" y2="24" stroke="#d4af6a" strokeWidth="1.5" strokeDasharray="6 4" />
        <text x="34" y="28" fill="#a89a7d" fontSize="11" className="font-mono">NH16 / airport link</text>
      </g>

      {/* tagline */}
      <text x="1130" y="845" textAnchor="end" fill="#6b6048" fontSize="11" letterSpacing="2" className="font-mono">
        STRATEGIC LOCATION. PREMIUM FUTURE.
      </text>
    </svg>
  </div>
);
