export default function Footer() {
  return (
    <footer className="wedding-footer" dir="rtl">
      <div className="footer-inner">
        {/* الزخرفة العلوية */}
        <div className="footer-ornament">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        {/* الرسالة */}
        <p className="footer-small-text">وكانت أجمل حكاية...</p>

        {/* =================================================
            LUXURY MONOGRAM
        ================================================= */}

        <div className="footer-monogram">
          <div className="monogram-circle">
            <div className="monogram-h">H</div>

            <div className="monogram-s">A</div>

            <div className="monogram-amp">&</div>
          </div>
        </div>

        {/* أسماء */}
        <div className="footer-names">
          <span>أسيل</span>

          <i></i>

          <span>حازم</span>
        </div>

        {/* التاريخ */}
        <div className="footer-date">
          28 <span>•</span> 09 <span>•</span> 2026
        </div>

        {/* الجملة */}
        <p className="footer-message">بوجودكم تكتمل فرحتنا</p>

        {/* المكان */}
        <div className="footer-location">فندق الرويال — عمّان</div>

        {/* الخط الأخير */}
        <div className="footer-bottom">
          <span>بكل الحب</span>

          <i>♡</i>

          <span>أسيل & حازم</span>
        </div>
      </div>
    </footer>
  );
}
