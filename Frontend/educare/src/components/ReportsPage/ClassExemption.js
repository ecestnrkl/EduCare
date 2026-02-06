import "./ReportsPage.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ClassExemption() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("reports.title")}</h1>
        <div className="btn-row">
          <Link className="btn-secondary" to="/ReportsPage">{t("reports.sickNote")}</Link>
          <Link className="btn-secondary active" to="/ClassExemption">{t("reports.exemption")}</Link>
        </div>
        <form className="befreiungSeite">
          <div className="b-text">
            <p>{t("reports.dearSirMadam")}</p>
            <p style={{ marginTop: "12px" }}>{t("reports.exemptChild")}</p>
            <div className="student-name">
              <input
                type="text"
                id="vorname"
                placeholder={t("reports.firstNamePlaceholder")}
              />
              <input
                type="text"
                id="nachname"
                placeholder={t("reports.lastNamePlaceholder")}
              />
            </div>

            <p style={{ marginTop: "16px" }}>
              {t("reports.fromDate")}{" "}
              <input type="date" id="datumAnfang" className="auswahl" />
              {" "}{t("reports.toDate")}{" "}
              <input type="date" id="datumEnde" className="auswahl" />
            </p>

            <p style={{ marginTop: "16px" }}>
              {t("reports.forReason")}{" "}
              <select id="Grund1" className="Grund1">
                <option value="">{t("reports.selectPlease")}</option>
                <option value="tod">{t("reports.deathInFamily")}</option>
                <option value="familie">{t("reports.familyEvent")}</option>
                <option value="arzt">{t("reports.doctorAppointment")}</option>
                <option value="religion">{t("reports.religious")}</option>
                <option value="Wettbewerb">{t("reports.competition")}</option>
                <option value="Ehrenamtliche">{t("reports.volunteer")}</option>
                <option value="Fahrprüfung">{t("reports.drivingTest")}</option>
                <option value="sonstiges">{t("reports.other")}</option>
              </select>
            </p>

            <p style={{ marginTop: "20px" }}>
              {t("reports.regards")},<br />
              Isra Özdemir
            </p>

            <div className="nachweis">
              <div className="nachweis-text">{t("reports.proof")}</div>
              <input
                className="custom-file-input"
                type="file"
                size="40"
                accept=".pdf,.jpg,.png"
              />
            </div>
          </div>
          <div className="btn-row">
            <button type="submit" className="btn-primary">{t("common.save")}</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}