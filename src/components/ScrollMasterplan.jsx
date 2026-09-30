"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import styles from "./ScrollMasterplan.module.css";

// Percentage coordinates keep the markers aligned with the uncropped original
// artwork at every size. Order follows the north-to-south corridor.
const STOPS = [
  { name: "Pydibhimvaram", slug: "pydibhimvaram", x: 67.3, y: 25.3 },
  { name: "Pusapatirega", slug: "pusapatirega", x: 42.4, y: 40.9 },
  { name: "Modavalasa", slug: "modavalasa", x: 29.5, y: 63.6 },
];

export function ScrollMasterplan() {
  const section = useRef(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", progress => {
    if (!reduceMotion) setActive(Math.min(2, Math.max(0, Math.floor(progress * 3))));
  });

  const selectStop = index => {
    setActive(index);
    if (reduceMotion || !section.current) return;
    const top = section.current.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(0, section.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top: top + travel * ((index + .45) / 3), behavior: "smooth" });
  };

  const point = STOPS[active];

  return <div ref={section} id="masterplan-tour" className={styles.scrollStage} data-testid="masterplan-tour" data-active-stop={point.slug}>
    <div className={styles.sticky}>
      <figure className={styles.figure} aria-label="Scroll through the three Aurex One developments">
        <div className={styles.map} data-testid="corridor-map">
          <img
            src="/images/corridor-masterplan.jpg"
            width="1920"
            height="1357"
            alt="Aurex One landmark developments masterplan showing Pydibhimvaram in the northeast, Pusapatirega in the centre, and Modavalasa in the southwest."
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.markers} aria-hidden="true">
            {STOPS.map((stop, index) => <div
              key={stop.slug}
              className={`${styles.marker} ${index === active ? styles.active : ""}`}
              style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
              data-testid={`masterplan-marker-${stop.slug}`}
              data-active={index === active}
            >
              <span className={styles.pulse} />
              <span className={`${styles.pulse} ${styles.secondPulse}`} />
              <span className={styles.target} />
              <span className={styles.dot} />
            </div>)}
            <motion.div
              className={styles.cursorPosition}
              initial={false}
              animate={{ left: `${point.x}%`, top: `${point.y}%` }}
              transition={reduceMotion ? { duration: 0 } : { duration: .8, ease: [.22, 1, .36, 1] }}
              data-testid="masterplan-cursor"
            >
              <svg className={styles.cursor} viewBox="0 0 38 46" fill="none">
                <path d="M3 3L7 34L15 26L23 41L30 37L22 23L34 20L3 3Z" fill="#f8e4b1" stroke="#9f7029" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M6 7L9 26L14 21L24 19L6 7Z" fill="#d4af6a" />
              </svg>
            </motion.div>
          </div>
        </div>

        <figcaption className={styles.caption}>
          <div className={styles.captionTop}>
            <span className={styles.hint}>Scroll to explore the corridor <span aria-hidden="true">↓</span></span>
            <span className={styles.counter}>0{active + 1} <span>/ 03</span></span>
          </div>
          <nav className={styles.stops} aria-label="Masterplan locations">
            {STOPS.map((stop, index) => <button
              key={stop.slug}
              type="button"
              onClick={() => selectStop(index)}
              className={`${styles.stop} ${index === active ? styles.selected : ""}`}
              aria-pressed={active === index}
              data-testid={`masterplan-select-${stop.slug}`}
            >
              <span className={styles.stopLine}><span /></span>
              <span className={styles.stopName}>{stop.name}</span>
            </button>)}
          </nav>
          <p className={styles.note}>Positions per the official Aurex One masterplan.</p>
        </figcaption>
      </figure>
    </div>
  </div>;
}
