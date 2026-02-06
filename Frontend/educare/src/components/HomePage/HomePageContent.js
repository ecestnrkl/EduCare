import "./HomePage.css";
import content from "../image/HomePageImage.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomePageContent() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div className="homepage-hero">
        <div className="homepage-copy">
          <h1 className="homepage-headline">
            {t("home.intercultural")}<br />
            {t("home.understanding")}<br />
            {t("home.important")}
          </h1>
          <p className="homepage-sub">
            {t("home.noAccount")}
          </p>
          <div className="homepage-actions">
            <Link to="/Login" className="btn-primary btn-lg">{t("home.login")}</Link>
            <Link to="/Register" className="btn-secondary btn-lg homepage-reg-btn">{t("home.registerLink")}</Link>
          </div>
        </div>
        <div className="homepage-visual">
          <img src={content} className="homepage-img" alt="EduCare" />
        </div>
      </div>
    </div>
  );
}