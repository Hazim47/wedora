"use client";

import { motion } from "framer-motion";

export default function VenueLocation() {
  const venueName = "فندق الرويال";

  const locationUrl =
    "https://www.google.com/maps/search/?api=1&query=Le+Royal+Hotel+Amman+Jordan";

  return (
    <motion.section
      className="venue-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2 }}
    >
      {/* =========================================
          BACKGROUND ORNAMENT
      ========================================= */}

      <div className="venue-orbit venue-orbit-one" />
      <div className="venue-orbit venue-orbit-two" />

      {/* =========================================
          HEADER
      ========================================= */}

      <motion.div
        className="venue-header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="venue-eyebrow">
          <span className="venue-eyebrow-line" />
          <span>موقع الاحتفال</span>
          <span className="venue-eyebrow-line" />
        </div>

        <h2 className="venue-title">
          حيث تبدأ
          <br />
          <em>أجمل لحظاتنا</em>
        </h2>

        <p className="venue-description">
          يسعدنا أن نشارككم فرحتنا
          <br />
          في هذا المكان المميز
        </p>
      </motion.div>

      {/* =========================================
          MAIN LOCATION CARD
      ========================================= */}

      <motion.a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="venue-card"
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
        }}
        whileTap={{
          scale: 0.985,
        }}
      >
        {/* IMAGE */}

        <div className="venue-card-image">
          <img src="/images/hall.jpg" alt={venueName} />

          <div className="venue-image-dark" />
          <div className="venue-image-glow" />
          <div className="venue-image-shine" />

          {/* Elegant border */}

          <div className="venue-inner-border" />

          {/* BOTTOM OVERLAY */}

          <div className="venue-card-bottom">
            <div className="venue-card-info">
              <span>مكان الاحتفال</span>

              <strong>{venueName}</strong>

              <small>شارع زهران — عمّان</small>
            </div>

            <div className="venue-open">
              <span>فتح الموقع</span>

              <div className="venue-open-arrow">↗</div>
            </div>
          </div>
        </div>
      </motion.a>

      {/* =========================================
          LOCATION INFO
      ========================================= */}

      <motion.div
        className="venue-meta"
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
        }}
        transition={{
          duration: 0.9,
          delay: 0.55,
        }}
      >
        <div className="venue-meta-item">
          <span className="venue-meta-icon">⌖</span>

          <div>
            <small>الموقع</small>
            <strong>عمّان — الأردن</strong>
          </div>
        </div>

        <div className="venue-meta-divider" />

        <div className="venue-meta-item">
          <span className="venue-meta-icon">✦</span>

          <div>
            <small>المكان</small>
            <strong>فندق الرويال</strong>
          </div>
        </div>
      </motion.div>

      {/* =========================================
          BOTTOM
      ========================================= */}

      <motion.div
        className="venue-footer"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.75,
        }}
      >
        <span className="venue-footer-line" />

        <span className="venue-heart">♡</span>

        <span className="venue-footer-text">ننتظركم بكل حب</span>

        <span className="venue-heart">♡</span>

        <span className="venue-footer-line" />
      </motion.div>
    </motion.section>
  );
}
