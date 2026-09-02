"use client";

import { motion } from "framer-motion";

export default function QuranVerse() {
  return (
    <motion.section
      className="quran-section"
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
        amount: 0.25,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* BISMILLAH */}
      <motion.div
        className="bismillah"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
      </motion.div>

      {/* ORNAMENT */}
      <motion.div
        className="quran-ornament"
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        }}
      >
        <span className="ornament-line" />

        <span className="ornament-center">✦</span>

        <span className="ornament-line" />
      </motion.div>

      {/* QURAN */}
      <motion.p
        className="quran-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ
        فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </motion.p>

      {/* REFERENCE */}
      <motion.div
        className="quran-reference"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.7,
          delay: 0.55,
        }}
      >
        <span className="reference-dot">✦</span>

        <span>سورة الروم — الآية ٢١</span>

        <span className="reference-dot">✦</span>
      </motion.div>
    </motion.section>
  );
}
