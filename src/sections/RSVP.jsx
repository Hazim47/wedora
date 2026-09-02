"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: "",
    side: "",
    attendance: "",
    guests: "1",
    messageChoice: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.side || !formData.attendance) {
      alert("يرجى تعبئة البيانات المطلوبة");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "حدث خطأ أثناء الإرسال");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("RSVP ERROR:", error);

      alert(
        error.message ||
          "حدث خطأ أثناء إرسال تأكيد الحضور، يرجى المحاولة مرة أخرى.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="rsvp-section"
      initial={{
        opacity: 0,
        y: 90,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="rsvp-inner-frame" />

      <div className="rsvp-glow rsvp-glow-one" />
      <div className="rsvp-glow rsvp-glow-two" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="rsvp-success"
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="success-ring"
              initial={{
                scale: 0,
                rotate: -30,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                type: "spring",
                stiffness: 160,
              }}
            >
              <span>✦</span>
            </motion.div>

            <div className="success-decoration">
              <i />
              <span>♡</span>
              <i />
            </div>

            <h2>شكرًا لكم</h2>

            <p>تم تسجيل تأكيد حضوركم بنجاح</p>

            <span>سعدنا بمشاركتكم فرحتنا</span>

            <div className="success-bottom">28 · 09 · 2026</div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* =========================================
                HEADER
            ========================================= */}

            <div className="rsvp-header">
              <div className="rsvp-decoration">
                <span />
                <b>✦</b>
                <span />
              </div>

              <div className="rsvp-small-title">حضوركم يسعدنا</div>

              <h2>تأكيد الحضور</h2>

              <p>حضوركم يكمّل فرحتنا</p>
            </div>

            {/* =========================================
                FORM
            ========================================= */}

            <form className="rsvp-form" onSubmit={handleSubmit}>
              {/* NAME */}

              <motion.div
                className="rsvp-field"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                <label>الاسم الكامل</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="اكتب اسمك الكامل"
                  required
                />
              </motion.div>

              {/* SIDE */}

              <motion.div
                className="rsvp-field"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
              >
                <label>من أي طرف؟</label>

                <div className="rsvp-options">
                  <label
                    className={
                      formData.side === "groom"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="side"
                      value="groom"
                      checked={formData.side === "groom"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">◈</span>

                    <span>أهل العريس</span>
                  </label>

                  <label
                    className={
                      formData.side === "bride"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="side"
                      value="bride"
                      checked={formData.side === "bride"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">◈</span>

                    <span>أهل العروس</span>
                  </label>
                </div>
              </motion.div>

              {/* ATTENDANCE */}

              <motion.div
                className="rsvp-field"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                <label>هل ستشاركوننا فرحتنا؟</label>

                <div className="rsvp-options">
                  <label
                    className={
                      formData.attendance === "yes"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === "yes"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">✓</span>

                    <span>بإذن الله سأحضر</span>
                  </label>

                  <label
                    className={
                      formData.attendance === "no"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === "no"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">×</span>

                    <span>أعتذر عن الحضور</span>
                  </label>
                </div>
              </motion.div>

              {/* GUESTS */}

              <AnimatePresence>
                {formData.attendance === "yes" && (
                  <motion.div
                    className="rsvp-field"
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <label>عدد الحضور</label>

                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1">شخص واحد</option>

                      <option value="2">شخصان</option>

                      <option value="3">3 أشخاص</option>

                      <option value="4">4 أشخاص</option>

                      <option value="5">5 أشخاص</option>
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* MESSAGE */}

              <motion.div
                className="rsvp-field"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
              >
                <label>هل ترغب بترك رسالة للعرسان؟</label>

                <div className="rsvp-options">
                  <label
                    className={
                      formData.messageChoice === "yes"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="messageChoice"
                      value="yes"
                      checked={formData.messageChoice === "yes"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">♡</span>

                    <span>بكل سرور</span>
                  </label>

                  <label
                    className={
                      formData.messageChoice === "no"
                        ? "rsvp-option active"
                        : "rsvp-option"
                    }
                  >
                    <input
                      type="radio"
                      name="messageChoice"
                      value="no"
                      checked={formData.messageChoice === "no"}
                      onChange={handleChange}
                    />

                    <span className="option-symbol">—</span>

                    <span>ليس الآن</span>
                  </label>
                </div>
              </motion.div>

              {/* TEXTAREA */}

              <AnimatePresence>
                {formData.messageChoice === "yes" && (
                  <motion.div
                    className="rsvp-field"
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <label>رسالتكم للعرسان</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتبوا كلماتكم الجميلة للعروسين..."
                      rows="5"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SUBMIT */}

              <motion.button
                type="submit"
                className="rsvp-submit"
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        y: -3,
                      }
                    : {}
                }
                whileTap={
                  !loading
                    ? {
                        scale: 0.98,
                      }
                    : {}
                }
              >
                <span className="submit-text">
                  {loading ? "جاري إرسال التأكيد..." : "تأكيد الحضور"}
                </span>

                {!loading && <span className="submit-star">✦</span>}

                {!loading && <span className="submit-shine" />}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
