import "../components/Settings/Settings.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div className="Setting">
      <h1>{t("settings.title")}</h1>
      <div className="SpaceTextBox">
        <div className="WrapTextBox">
          <div className="TextBox">
            <div className="Box1">
              <div className="Schule">
                <div className="Box">
                  <label htmlFor="schule">{t("settings.school")} </label>
                  <input type="text" id="schule" name="school" placeholder={t("settings.schoolPlaceholder")} />
                </div>
              </div>
              <div className="Box">
                <label htmlFor="fname">{t("settings.firstName")} </label>
                <input type="text" id="fname" name="fname" placeholder={t("settings.firstNameParentPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="lname">{t("settings.lastName")} </label>
                <input type="text" id="lname" name="lname" placeholder={t("settings.lastNameParentPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="emailEltern">{t("settings.emailAddress")} </label>
                <input type="email" id="emailEltern" name="emailEltern" placeholder={t("settings.emailParentPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="pwd">{t("settings.password")} </label>
                <input type="password" id="pwd" name="pwd" placeholder="●●●●●●●●●" />
              </div>
            </div>

            <div className="Box2">
              <div className="Box">
                <label htmlFor="child-fname">{t("settings.childFirstName")} </label>
                <input type="text" id="child-fname" name="childFname" placeholder={t("settings.firstNameChildPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="child-lname">{t("settings.childLastName")} </label>
                <input type="text" id="child-lname" name="childLname" placeholder={t("settings.lastNameChildPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="klasse">{t("settings.class")} </label>
                <input type="text" id="klasse" name="klasse" placeholder={t("settings.classPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="teacher">{t("settings.classTeacher")} </label>
                <input type="text" id="teacher" name="teacher" placeholder={t("settings.teacherPlaceholder")} />
              </div>
              <div className="Box">
                <label htmlFor="emailLehrer">{t("settings.emailAddress")} </label>
                <input type="email" id="emailLehrer" name="emailLehrer" placeholder={t("settings.teacherEmailPlaceholder")} />
              </div>
            </div>
          </div>

          <div className="btn-row">
            <Link to="/SettingsAddChild">
              <button type="button" className="btn-secondary">{t("settings.addChild")}</button>
            </Link>
            <button type="button" className="btn-primary">{t("common.save")}</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}