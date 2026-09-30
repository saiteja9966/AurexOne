// Central site data for Aurex One.
// CONTENT RULE: no figure may be invented. Any value not yet supplied by the owner
// stays null and renders as "To be confirmed" everywhere it appears.

export const PHONE_DISPLAY = "+91 79955 30315";
export const PHONE_TEL = "tel:+917995530315";

export const waLink = (layoutName) =>
  `https://wa.me/917995530315?text=${encodeURIComponent(
    layoutName
      ? `Hello Aurex One, I'm interested in Aurex One @ ${layoutName}. Please share details.`
      : "Hello Aurex One, I'd like to know more about your plotted layouts in North Andhra."
  )}`;

export const IMAGES = {
  heroHome:
    "/images/heroHome.jpg",
  heroPusapatirega:
    "/images/heroPusapatirega.jpg",
  heroPydibhimvaram:
    "/images/heroPydibhimvaram.jpg",
  heroModavalasa:
    "/images/heroModavalasa.jpg",
  entranceArch:
    "/images/entranceArch.jpg",
  galleryLand:
    "/images/galleryLand.jpg",
  accessBg:
    "/images/accessBg.jpg",
};

const TBC = null; // "To be confirmed"

// Full specification — identical across all three Aurex One layouts (owner-supplied).
export const SPEC_CATEGORIES = [
  {
    category: "Roads & Infrastructure",
    items: [
      "Wide Cement Concrete (CC) roads",
      "Premium curb stone finishing",
      "Tiled pedestrian walkways",
      "Individual plot access slopes",
      "Clearly defined road hierarchy (main + internal roads)",
      "Tree-lined avenue roads",
    ],
  },
  {
    category: "Underground Utilities",
    items: [
      "Underground electrical distribution network",
      "Underground drainage system",
      "Underground water supply pipeline to every plot",
      "Scientific stormwater (SASA) drainage system",
      "Concealed infrastructure for clean visual aesthetics",
    ],
  },
  {
    category: "Water Management",
    items: [
      "Overhead water storage tank",
      "Large capacity underground sump",
      "Rainwater harvesting provisions",
      "Sustainable water distribution planning",
      "Flood-resilient drainage design",
    ],
  },
  {
    category: "Plot Development",
    items: [
      "Clear plot demarcation with stone markers",
      "Plot-wise Google Maps pin / digital plot locator",
      "Well-planned layout structure",
      "Vaastu-aligned road planning (optional positioning)",
      "Uniform plot leveling & preparation",
      "Clean layout grid with easy accessibility",
    ],
  },
  {
    category: "Landscaping & Open Spaces",
    items: [
      "Avenue plantation across entire layout",
      "Landscaped parks with basic equipment",
      "Children's play zone",
      "Senior citizen seating zones",
      "Dedicated walking/jogging tracks",
      "Green boulevards & open breathing spaces",
      "Park boundary walls for defined spaces",
    ],
  },
  {
    category: "Security & Community",
    items: [
      "Gated community development",
      "Grand entry with controlled access",
      "Security cabin at entrance",
      "Boom barrier entry system",
      "24×7 CCTV surveillance provision (key zones)",
      "Fully enclosed RCC compound wall",
      "Fire hydrant provision along main roads",
    ],
  },
  {
    category: "Entrance & Arrival Experience",
    items: [
      "Grand main entrance gate",
      "Signature architectural entrance arch",
      "Landscaped entrance plaza",
      "Wide approach road with plantation",
      "Premium first impression design",
    ],
  },
  {
    category: "Clubhouse & Lifestyle",
    items: [
      "Premium multi-level clubhouse — 6,000 sq ft",
      "Designed for community living & recreation",
      "Open gathering spaces",
      "Future scope for indoor amenities",
    ],
  },
  {
    category: "Streetscape & Lighting",
    items: [
      "Designer street lighting across layout",
      "Well-illuminated roads & pathways",
      "Night-time aesthetic planning",
      "Safety-oriented lighting design",
    ],
  },
  {
    category: "Approvals",
    items: ["RERA / DTCP approval — to be published on confirmation"],
  },
];

export const LAYOUTS = [
  {
    slug: "pusapatirega",
    name: "Pusapatirega",
    priceBadge: "From ₹25,000 / sq yd",
    district: "Vizianagaram district",
    corridor: "Airport Corridor",
    intro:
      "A plotted layout at Pusapatirega, in Vizianagaram district — positioned along the Bhogapuram airport corridor, with Visakhapatnam as the nearby metro.",
    heroImage: IMAGES.heroPusapatirega,
    cardImage: "/images/gallery/pusapatirega-site.jpg",
    cardOverlay: "13.0 Acres Masterplan",
    keyStat: { value: "10 min", label: "Bhogapuram Airport" },
    blurb:
      "Positioned 10 minutes from Bhogapuram International Airport, close to luxury hospitality nodes including Taj Vivanta and coastal beach corridors.",
    stats: [
      { label: "Total Extent", value: "13", unit: "acres" },
      { label: "Number of Plots", value: TBC, unit: "plots" },
      { label: "Plot Sizes", value: "167 – 267", unit: "sq. yds." },
      { label: "Price", value: "₹25,000", unit: "per sq. yd." },
    ],
    accessNetwork: [
      { name: "Bhogapuram International Airport", detail: "10 min" },
      { name: "Taj Vivanta", detail: "15 min" },
      { name: "Sunray Resorts", detail: "15 min" },
      { name: "Oberoi Hotels", detail: "20 min" },
      { name: "Mayfair Resort", detail: "20 min" },
      { name: "Vizianagaram", detail: "25 min" },
      { name: "Thippalavalasa Beach", detail: "25 min" },
      { name: "Konada Beach", detail: "25 min" },
      { name: "Sunray Beach", detail: "25 min" },
      { name: "Vizag Bay City", detail: "25 min" },
    ],
    specifications: SPEC_CATEGORIES,
    gallery: [
      { src: "/images/gallery/pusapatirega-site.jpg", caption: "Site view — levelled plots and internal grid", pending: false },
      { src: "/images/gallery/pusapatirega-boundary.jpg", caption: "Boundary — RCC compound wall perimeter", pending: false },
      { src: "/images/gallery/pusapatirega-road.jpg", caption: "Road access — cement concrete approach road", pending: false },
      { src: IMAGES.galleryLand, caption: "Aerial character of the region", pending: false },
    ],
    mapQuery: "Pusapatirega, Vizianagaram, Andhra Pradesh, India",
  },
  {
    slug: "pydibhimvaram",
    name: "Pydibhimvaram",
    priceBadge: "From ₹17,000 / sq yd",
    district: "Srikakulam district",
    corridor: "Pharma Corridor",
    intro:
      "A plotted layout at Pydibhimvaram, in Srikakulam district — set within North Andhra's pharma corridor, one of the region's principal industrial employment belts.",
    heroImage: IMAGES.heroPydibhimvaram,
    cardImage: "/images/gallery/pydibhimvaram-site.jpg",
    cardOverlay: "18.0 Acres Masterplan",
    keyStat: { value: "5 min", label: "Dr. Reddy's Laboratories" },
    blurb:
      "Adjacent to North Andhra's prime pharmaceutical manufacturing corridor, moments from Dr. Reddy's, Aurobindo Pharma, and Andhra Organics.",
    stats: [
      { label: "Total Extent", value: "18", unit: "acres" },
      { label: "Number of Plots", value: TBC, unit: "plots" },
      { label: "Plot Sizes", value: "167 – 267", unit: "sq. yds." },
      { label: "Price", value: "₹17,000", unit: "per sq. yd." },
    ],
    accessNetwork: [
      { name: "Dr. Reddy's Laboratories", detail: "5 min" },
      { name: "Green Tech Pvt. Ltd", detail: "5 min" },
      { name: "Andhra Organics Ltd", detail: "6 min" },
      { name: "Aurobindo Pharma", detail: "6 min" },
      { name: "Matrixpharmacorp", detail: "9 min" },
      { name: "CPF India", detail: "15 min" },
      {
        name: "Bhogapuram International Airport",
        detail: "25 min · Pending on-ground confirmation, via NH16",
      },
    ],
    specifications: SPEC_CATEGORIES,
    gallery: [
      { src: "/images/gallery/pydibhimvaram-site.jpg", caption: "Site view — levelled plots and internal grid", pending: false },
      { src: "/images/gallery/pydibhimvaram-boundary.jpg", caption: "Boundary — RCC compound wall perimeter", pending: false },
      { src: "/images/gallery/pydibhimvaram-road.jpg", caption: "Road access — cement concrete approach road", pending: false },
      { src: IMAGES.galleryLand, caption: "Aerial character of the region", pending: false },
    ],
    mapQuery: "Pydibhimavaram, Ranastalam, Srikakulam, Andhra Pradesh, India",
  },
  {
    slug: "modavalasa",
    name: "Modavalasa",
    priceBadge: "From ₹30,000 / sq yd",
    district: "Vizianagaram district",
    corridor: "Airport Corridor",
    intro:
      "A plotted layout at Modavalasa, in Vizianagaram district — within the Bhogapuram airport influence zone, along the region's principal growth corridor.",
    heroImage: IMAGES.heroModavalasa,
    cardImage: "/images/gallery/modavalasa-site.jpg",
    cardOverlay: "3.5 Acres Boutique",
    keyStat: { value: "< 10 min", label: "Bhogapuram Airport" },
    blurb:
      "Boutique executive enclave located under 10 minutes from Bhogapuram Airport with swift access to coastal resorts and Vizianagaram arterial corridors.",
    stats: [
      { label: "Total Extent", value: "3.5", unit: "acres" },
      { label: "Number of Plots", value: TBC, unit: "plots" },
      { label: "Plot Sizes", value: "167 – 267", unit: "sq. yds." },
      { label: "Price", value: "₹30,000", unit: "per sq. yd." },
    ],
    accessNetwork: [
      { name: "Bhogapuram International Airport", detail: "Under 10 min" },
      { name: "Taj Vivanta", detail: "15 min" },
      { name: "Sunray Resorts", detail: "15 min" },
      { name: "Oberoi Hotels", detail: "20 min" },
      { name: "Mayfair Resort", detail: "20 min" },
      { name: "Vizianagaram", detail: "25 min" },
      { name: "Thippalavalasa Beach", detail: "25 min" },
      { name: "Konada Beach", detail: "25 min" },
      { name: "Sunray Beach", detail: "25 min" },
      { name: "Vizag Bay City", detail: "25 min" },
    ],
    specifications: SPEC_CATEGORIES,
    gallery: [
      { src: "/images/gallery/modavalasa-site.jpg", caption: "Site view — levelled plots and internal grid", pending: false },
      { src: "/images/gallery/modavalasa-boundary.jpg", caption: "Boundary — RCC compound wall perimeter", pending: false },
      { src: "/images/gallery/modavalasa-road.jpg", caption: "Road access — cement concrete approach road", pending: false },
      { src: IMAGES.galleryLand, caption: "Aerial character of the region", pending: false },
    ],
    mapQuery: "Modavalasa, Vizianagaram, Andhra Pradesh, India",
  },
];

export const getLayout = (slug) => LAYOUTS.find((l) => l.slug === slug);
