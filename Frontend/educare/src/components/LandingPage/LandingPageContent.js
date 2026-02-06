import image from "../image/HomePageImage.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LandingPageContent() {
  const { t } = useTranslation();

  return (
    <div className="landingpagecontent">
      <h1>{t("landing.title")}</h1>
      <img src={image} className="landingpage-image" alt="img" />
      <div className="LandingText">
        {t("landing.text1")}
        <br /><br />
        {t("landing.text2")}
      </div>
      <div className="btn-row">
        <Link className="btn-secondary" to="/Calendar">{t("landing.calendar")}</Link>
        <Link className="btn-secondary" to="/ReportsPage">{t("landing.reports")}</Link>
      </div>
    </div>
  );
}