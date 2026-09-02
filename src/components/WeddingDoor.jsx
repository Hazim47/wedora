import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RSVP from "../sections/RSVP";
import QuranVerse from "../sections/QuranVerse";
import Countdown from "../sections/Countdown";
import VenueLocation from "../sections/VenueLocation";
import Footer from "../sections/Footer";
export default function WeddingDoor() {
  const [opening, setOpening] = useState(false);
  const [finished, setFinished] = useState(false);

  const timerRef = useRef(null);

  const audioRef = useRef(null);

  const handleOpen = () => {
    if (opening || finished) return;

    setOpening(true);

    // تشغيل صوت الجاهة
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Audio blocked:", err);
      });
    }

    timerRef.current = setTimeout(() => {
      setFinished(true);
    }, 1100);
  };

  // تنظيف المؤقت عند مغادرة الصفحة
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <main className="wedding-page">
      {/* صوت الجاهة */}
      <audio ref={audioRef} src="/music/jahah.mp3" preload="auto" />
      {/* =====================================================
          INVITATION SCREEN
      ===================================================== */}

      <AnimatePresence>
        {finished && (
          <motion.div
            className="invitation-screen"
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="invitation-content"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* =================================================
                  WEDDING INVITATION CARD
              ================================================= */}

              <motion.div
                className="invitation-card"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* FRAME CORNERS */}
                <div className="card-corner card-corner-tl" />
                <div className="card-corner card-corner-tr" />
                <div className="card-corner card-corner-bl" />
                <div className="card-corner card-corner-br" />

                <div className="invitation-card-content">
                  {/* =========================================
        TOP
    ========================================= */}

                  <motion.div
                    className="bismillah"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                  >
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
                  </motion.div>

                  <motion.div
                    className="luxury-ornament"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                    }}
                  >
                    <span />
                    <b>✦</b>
                    <span />
                  </motion.div>

                  {/* =========================================
        DATE
    ========================================= */}

                  <motion.div
                    className="wedding-date"
                    initial={{
                      opacity: 0,
                      letterSpacing: "0.6em",
                    }}
                    animate={{
                      opacity: 1,
                      letterSpacing: "0.22em",
                    }}
                    transition={{
                      delay: 0.65,
                      duration: 1,
                    }}
                  >
                    28 · 09 · 2026
                  </motion.div>

                  <motion.div
                    className="date-label"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    يوم الإثنين
                  </motion.div>

                  {/* =========================================
        INTRO
    ========================================= */}

                  <motion.div
                    className="invitation-intro"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                    }}
                  >
                    <span>يتشرفان بدعوتكم</span>
                  </motion.div>

                  {/* =========================================
        FATHERS
    ========================================= */}

                  <motion.div
                    className="parents-section"
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.15,
                      duration: 1,
                    }}
                  >
                    {/* FATHER ONE */}

                    <div className="parent-card">
                      <span className="parent-title">السيد</span>

                      <span className="parent-name">باسم حسن موسى</span>
                    </div>

                    {/* CENTER ORNAMENT */}

                    <div className="parents-center">
                      <span className="vertical-line" />

                      <div className="center-diamond">✦</div>

                      <span className="vertical-line" />
                    </div>

                    {/* FATHER TWO */}

                    <div className="parent-card">
                      <span className="parent-title">السيد</span>

                      <span className="parent-name">علي رشد القراله</span>
                    </div>
                  </motion.div>

                  {/* =========================================
        SMALL DIVIDER
    ========================================= */}

                  <motion.div
                    className="elegant-divider"
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    animate={{
                      width: "220px",
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.4,
                      duration: 0.9,
                    }}
                  >
                    <span>❦</span>
                  </motion.div>

                  {/* =========================================
        WEDDING
    ========================================= */}

                  <motion.div
                    className="wedding-text"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 0.8,
                    }}
                  >
                    بمناسبة زفافهما
                  </motion.div>

                  {/* =========================================
        COUPLE
    ========================================= */}
                  <motion.div
                    className="couple-names"
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.88,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 1.55,
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="bride-name">أسيل</span>

                    <span className="names-symbol">&</span>

                    <span className="groom-name">حازم</span>
                  </motion.div>

                  {/* =========================================
        CLOSING
    ========================================= */}

                  <motion.div
                    className="invitation-closing"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.9,
                      duration: 0.9,
                    }}
                  >
                    <span>ليشاركونا فرحة العمر</span>

                    <span>في ليلةٍ من أجمل ليالي العمر</span>
                  </motion.div>

                  {/* =========================================
        BOTTOM DATE
    ========================================= */}

                  <motion.div
                    className="date-bottom"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                  >
                    <span>28</span>

                    <i />

                    <span>09</span>

                    <i />

                    <span>2026</span>
                  </motion.div>
                </div>

                {/* =========================================
      EFFECTS
  ========================================= */}

                <div className="card-shine" />

                <div className="gold-particle particle-1" />
                <div className="gold-particle particle-2" />
                <div className="gold-particle particle-3" />
                <div className="gold-particle particle-4" />
              </motion.div>

              {/* =================================================
                  QURAN VERSE
              ================================================= */}

              <div className="quran-wrapper">
                <QuranVerse />
              </div>
              {/* =================================================
    COUNTDOWN
================================================= */}

              <motion.div
                className="countdown-wrapper"
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
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
                <Countdown />
              </motion.div>

              {/* =================================================
    VENUE / LOCATION
================================================= */}

              <motion.div
                className="venue-wrapper"
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
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
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <VenueLocation />
              </motion.div>

              {/* =================================================
    RSVP / CONFIRM ATTENDANCE
================================================= */}
              <div className="rsvp-wrapper">
                <RSVP />
              </div>
              {/* =================================================
    FOOTER
================================================= */}

              <motion.div
                className="footer-wrapper"
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Footer />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DOOR SCREEN
      ===================================================== */}

      <AnimatePresence>
        {!finished && (
          <motion.section
            className="door-screen"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="door-scene">
              {/* =================================================
                  AMBIENT LIGHT
              ================================================= */}

              <div className="ambient-light" />

              {/* =================================================
                  DOOR SHADOW
              ================================================= */}

              <div className="door-shadow" />

              {/* =================================================
                  WEDDING DOOR
              ================================================= */}

              <div className="wedding-door">
                {/* LIGHT BEHIND GATE */}
                <motion.div
                  className="door-opening-light"
                  animate={{
                    opacity: opening ? 1 : 0,
                    scaleX: opening ? 1 : 0.15,
                    scaleY: opening ? 1 : 0.9,
                  }}
                  transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* LEFT GATE */}
                <motion.div
                  className="door-leaf door-leaf-left"
                  animate={
                    opening
                      ? {
                          x: "-105%",
                          rotateY: -28,
                        }
                      : {
                          x: 0,
                          rotateY: 0,
                        }
                  }
                  transition={{
                    duration: 0.95,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div className="door-border">
                    <div className="door-inner">
                      <div className="door-ornament">
                        <span>✦</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT GATE */}
                <motion.div
                  className="door-leaf door-leaf-right"
                  animate={
                    opening
                      ? {
                          x: "105%",
                          rotateY: 28,
                        }
                      : {
                          x: 0,
                          rotateY: 0,
                        }
                  }
                  transition={{
                    duration: 0.95,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div className="door-border">
                    <div className="door-inner">
                      <div className="door-ornament">
                        <span>✦</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CENTER MEDALLION */}
                {!opening && (
                  <motion.button
                    type="button"
                    className="initials-button"
                    onClick={handleOpen}
                    aria-label="Open wedding invitation"
                  >
                    <span className="initial">H</span>

                    <span className="initial-divider">&</span>

                    <span className="initial">S</span>
                  </motion.button>
                )}

                {/* LIGHT FLASH */}
                <motion.div
                  className="opening-flash"
                  initial={{
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: opening ? [0, 0.9, 0.65, 0] : 0,

                    scale: opening ? [0.4, 1, 1.8, 2.4] : 0.4,
                  }}
                  transition={{
                    duration: 1,
                    times: [0, 0.18, 0.55, 1],
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
