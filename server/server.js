import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";

const app = express();

const PORT = 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/rsvp", async (req, res) => {
  try {
    const { fullName, side, attendance, guests, messageChoice, message } =
      req.body;

    if (!fullName || !side || !attendance) {
      return res.status(400).json({
        success: false,
        message: "البيانات المطلوبة ناقصة",
      });
    }

    const sideText = side === "groom" ? "أهل العريس" : "أهل العروس";

    const attendanceText =
      attendance === "yes" ? "بإذن الله سيحضر" : "يعتذر عن الحضور";

    const messageText =
      messageChoice === "yes" && message ? message : "لم يترك رسالة";

    const { data, error } = await resend.emails.send({
      from: "Wedding RSVP <onboarding@resend.dev>",

      to: ["alqralh2003@gmail.com"],

      subject: `💌 تأكيد حضور جديد — ${fullName}`,

      html: `
        <div dir="rtl"
          style="
            font-family: Arial, sans-serif;
            background:#f5eee3;
            padding:40px 20px;
          "
        >

          <div
            style="
              max-width:600px;
              margin:auto;
              background:#fffaf2;
              border-radius:20px;
              padding:35px;
              border:1px solid #dfc9a8;
            "
          >

            <div
              style="
                text-align:center;
                color:#9b7950;
                font-size:25px;
              "
            >
              ✦
            </div>

            <h1
              style="
                text-align:center;
                color:#60462f;
                margin-bottom:30px;
              "
            >
              تأكيد حضور جديد
            </h1>

            <div
              style="
                background:#f5eee3;
                border-radius:15px;
                padding:20px;
                color:#60462f;
              "
            >

              <p>
                <strong>الاسم:</strong>
                ${fullName}
              </p>

              <p>
                <strong>من طرف:</strong>
                ${sideText}
              </p>

              <p>
                <strong>الحضور:</strong>
                ${attendanceText}
              </p>

              ${
                attendance === "yes"
                  ? `
                    <p>
                      <strong>عدد الأشخاص:</strong>
                      ${guests || 1}
                    </p>
                  `
                  : ""
              }

              <p>
                <strong>الرسالة:</strong>
                ${messageText}
              </p>

            </div>

            <p
              style="
                text-align:center;
                color:#8b735a;
                margin-top:30px;
              "
            >
              تم إرسال هذا التأكيد من دعوة الزفاف الإلكترونية 🤍
            </p>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.log("EMAIL SENT:", data);

    return res.json({
      success: true,
      message: "تم إرسال تأكيد الحضور بنجاح",
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "حدث خطأ في السيرفر",
    });
  }
});

app.listen(PORT, () => {
  console.log(`RSVP server running on http://localhost:${PORT}`);
});
