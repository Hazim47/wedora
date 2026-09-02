import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Opening = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      onOpen?.();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.section
          className="opening"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decoration */}
          <div className="opening-glow opening-glow-1" />
          <div className="opening-glow opening-glow-2" />

          <div className="opening-content">
            <motion.p
              className="opening-small-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            <motion.p
              className="opening-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              بكل حب وسرور
            </motion.p>

            <motion.div
              className="names"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeOut",
              }}
            >
              <span>أحمد</span>

              <span className="ampersand">&</span>

              <span>لينا</span>
            </motion.div>

            <motion.div
              className="opening-line"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />

            <motion.p
              className="opening-invitation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              ندعوكم لمشاركتنا أجمل لحظات العمر
            </motion.p>

            {/* Door */}
            <div className="door-wrapper">
              <div className="door-frame">
                <motion.div
                  className="door door-left"
                  animate={{
                    x: isOpening ? "-100%" : "0%",
                    rotateY: isOpening ? -15 : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div className="door-decoration">
                    <span>✦</span>
                  </div>
                </motion.div>

                <motion.div
                  className="door door-right"
                  animate={{
                    x: isOpening ? "100%" : "0%",
                    rotateY: isOpening ? 15 : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div className="door-decoration">
                    <span>✦</span>
                  </div>
                </motion.div>

                {/* Door light */}
                <motion.div
                  className="door-light"
                  animate={{
                    opacity: isOpening ? 1 : 0,
                    scale: isOpening ? 1.2 : 0.8,
                  }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </div>

            <motion.button
              className="open-button"
              onClick={handleOpen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <span>افتح الدعوة</span>
              <span className="button-icon">✦</span>
            </motion.button>

            <motion.p
              className="swipe-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2.8 }}
            >
              اضغط لفتح الدعوة
            </motion.p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Opening;
