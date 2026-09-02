"use client";

import { motion } from "framer-motion";

export default function VenueLocation() {
  const venueName = "فندق الرويال";

  const locationUrl =
    "https://www.google.com/maps/search/?api=1&query=Le+Royal+Hotel+Amman+Jordan";

  return (
    <motion.section
      className="venue-section"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================================
          TOP TITLE
      ========================================= */}

      <motion.div
        className="venue-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="venue-decoration">
          <span />
          <b>✦</b>
          <span />
        </div>

        <p className="venue-small-title">مكان الاحتفال</p>

        <h2 className="venue-title">{venueName}</h2>

        <p className="venue-subtitle">شارع زهران — عمّان</p>
      </motion.div>

      {/* =========================================
          IMAGE
      ========================================= */}

      <motion.div
        className="venue-image-wrapper"
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img src="/images/hall.jpg" alt={venueName} className="venue-image" />

        {/* Inner frame */}
        <div className="venue-image-frame" />

        {/* Image shine */}
        <div className="venue-image-shine" />

        {/* Corner ornaments */}
        <span className="venue-corner venue-corner-tl">✦</span>

        <span className="venue-corner venue-corner-tr">✦</span>

        <span className="venue-corner venue-corner-bl">✦</span>

        <span className="venue-corner venue-corner-br">✦</span>
      </motion.div>

      {/* =========================================
          LOCATION INFO
      ========================================= */}

      <motion.div
        className="venue-location-info"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
      >
        <div className="venue-info-line" />

        <div className="venue-pin">
          <span>⌖</span>
        </div>

        <div className="venue-info-line" />
      </motion.div>

      {/* =========================================
          BUTTON
      ========================================= */}

      <motion.a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-button"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
        }}
        whileHover={{
          y: -4,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <span className="location-icon">📍</span>

        <span>كيفية الوصول</span>

        <span className="location-arrow">←</span>
      </motion.a>

      {/* =========================================
          BOTTOM TEXT
      ========================================= */}

      <motion.div
        className="venue-bottom"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <span>ننتظركم بكل حب</span>

        <div>
          <i />
          <b>♡</b>
          <i />
        </div>
      </motion.div>
    </motion.section>
  );
}
