import SickNote from "../components/ReportsPage/SickNote";
import "../components/ReportsPage/ReportsPage.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ReportsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("reports.title")}</h1>
      <div className="btn-row">
        <Link className="btn-secondary active" to="/ReportsPage">{t("reports.sickNote")}</Link>
        <Link className="btn-secondary" to="/ClassExemption">{t("reports.exemption")}</Link>
      </div>
      <SickNote />
      <Footer />
    </div>
  );
}

