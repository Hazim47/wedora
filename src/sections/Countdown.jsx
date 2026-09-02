"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const targetDate = new Date("2026-09-28T19:00:00");

  const calculateTime = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: time.days,
      label: "يوم",
    },
    {
      value: time.hours,
      label: "ساعة",
    },
    {
      value: time.minutes,
      label: "دقيقة",
    },
    {
      value: time.seconds,
      label: "ثانية",
    },
  ];

  return (
    <motion.section
      className="countdown-section"
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
      {/* TOP ORNAMENT */}
      <div className="countdown-top-ornament">
        <span>✦</span>
      </div>

      {/* TITLE */}
      <div className="countdown-title">
        <span className="countdown-line" />

        <span>نلتقي بكم بعد</span>

        <span className="countdown-line" />
      </div>

      {/* DATE */}
      <div className="countdown-date">28 · 09 · 2026</div>

      {/* FRAME */}
      <div className="countdown-frame">
        <span className="countdown-decoration decoration-one">✦</span>

        <span className="countdown-decoration decoration-two">✦</span>

        <span className="countdown-decoration decoration-three">·</span>

        <span className="countdown-decoration decoration-four">·</span>

        {/* LIGHT */}
        <span className="countdown-light" />

        {/* COUNTDOWN */}
        <div className="countdown-container">
          {items.map((item, index) => (
            <div
              key={item.label}
              style={{
                display: "contents",
              }}
            >
              <motion.div
                className="countdown-box"
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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  key={item.value}
                  className="countdown-number"
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </motion.div>

                <div className="countdown-label">{item.label}</div>
              </motion.div>

              {index < items.length - 1 && (
                <div className="countdown-separator">
                  <span />
                  <span />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MESSAGE */}
        <div className="countdown-message">
          <span>العدّ التنازلي لأجمل ليلة</span>

          <span>حتى نحتفل معًا ببداية حكاية جديدة</span>
        </div>

        {/* BOTTOM ORNAMENT */}
        <div className="countdown-bottom-ornament">
          <span>✦</span>
        </div>
      </div>
    </motion.section>
  );
}
