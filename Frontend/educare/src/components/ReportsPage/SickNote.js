import "./ReportsPage.css";
import { useTranslation } from "react-i18next";

export default function SickNote() {
  const { t } = useTranslation();

  return (
    <div>
      <form className="krankmeldung">
        <div className="form-card">
          <div className="form-group">
            <label htmlFor="datumAnfang">{t("reports.from")}</label>
            <input type="date" id="datumAnfang" className="auswahl" />
          </div>
          <div className="form-group">
            <label htmlFor="datumEnde">{t("reports.to")}</label>
            <input type="date" id="datumEnde" className="auswahl" />
          </div>
          <div className="form-group">
            <label htmlFor="Grund1">{t("reports.reason")}</label>
            <select id="Grund1" className="Grund1">
              <option value="">{t("common.select")}</option>
              <option value="erkältung">{t("reports.cold")}</option>
              <option value="covid">{t("reports.covid")}</option>
              <option value="magen">{t("reports.stomach")}</option>
            </select>
          </div>
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">{t("common.save")}</button>
        </div>
      </form>
    </div>
  );
}