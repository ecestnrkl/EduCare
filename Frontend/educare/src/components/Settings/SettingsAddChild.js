import { useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../../api";
import "./Settings.css";
import Footer from "../Footer/Footer";

export default function SettingsAddChild() {
  const [input, setInput] = useState({
    school: "",
    fname: "",
    lname: "",
    klasse: "",
    teacher: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/user/children", input);
      setMessage(t("settings.childSavedSuccess"));
      setInput({
        school: "",
        fname: "",
        lname: "",
        klasse: "",
        teacher: "",
        email: "",
      });
    } catch (error) {
      setMessage(t("settings.childSaveError"));
    }
  }

  return (
    <div className="SettingsAddChild">
      <h1>{t("settings.title")}</h1>
      <div className="settings-container">
        <form onSubmit={handleSubmit}>
          <div className="kind">
            <h2>{t("settings.addChild")}</h2>
            <div className="TextBox">
              <div className="Box1">
                <div className="Box">
                  <label htmlFor="add-school">{t("settings.school")} </label>
                  <input
                    onChange={handleChange}
                    value={input.school}
                    type="text"
                    id="add-school"
                    name="school"
                    placeholder={t("settings.schoolPlaceholder")}
                  />
                </div>
                <div className="Box">
                  <label htmlFor="add-fname">{t("settings.childFirstName")} </label>
                  <input
                    onChange={handleChange}
                    value={input.fname}
                    type="text"
                    id="add-fname"
                    name="fname"
                    placeholder={t("settings.firstNameChildPlaceholder")}
                  />
                </div>
                <div className="Box">
                  <label htmlFor="add-lname">{t("settings.childLastName")} </label>
                  <input
                    onChange={handleChange}
                    value={input.lname}
                    type="text"
                    id="add-lname"
                    name="lname"
                    placeholder={t("settings.lastNameChildPlaceholder")}
                  />
                </div>
              </div>

              <div className="Box2">
                <div className="Box">
                  <label htmlFor="add-klasse">{t("settings.class")} </label>
                  <input
                    onChange={handleChange}
                    value={input.klasse}
                    type="text"
                    id="add-klasse"
                    name="klasse"
                    placeholder={t("settings.classPlaceholder")}
                  />
                </div>
                <div className="Box">
                  <label htmlFor="add-teacher">{t("settings.classTeacher")} </label>
                  <input
                    onChange={handleChange}
                    value={input.teacher}
                    type="text"
                    id="add-teacher"
                    name="teacher"
                    placeholder={t("settings.teacherPlaceholder")}
                  />
                </div>
                <div className="Box">
                  <label htmlFor="add-email">{t("settings.teacherContact")} </label>
                  <input
                    onChange={handleChange}
                    value={input.email}
                    type="email"
                    id="add-email"
                    name="email"
                    placeholder={t("settings.teacherEmailPlaceholder")}
                  />
                </div>
              </div>
            </div>
          </div>

          {message && <p className="message">{message}</p>}

          <div className="btn-row">
            <button type="submit" className="btn-primary">{t("common.save")}</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}