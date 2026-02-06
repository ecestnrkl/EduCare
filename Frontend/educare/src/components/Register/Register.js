import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer/Footer";
import "./Register.css";

const Signup = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "parent",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();
  const { t } = useTranslation();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleRoleSelect = (role) => {
    setData({ ...data, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await register(data);
      navigate("/Login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError(t("common.error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="Register">
        <div className="RegisterBox">
          <h1>{t("register.title")}</h1>
          <div className="Title">{t("register.iAm")}</div>

          <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <button
                type="button"
                className={`btn-secondary btn-sm ${data.role === "teacher" ? "active" : ""}`}
                onClick={() => handleRoleSelect("teacher")}
              >
                {t("register.teacher")}
              </button>
              <button
                type="button"
                className={`btn-secondary btn-sm ${data.role === "parent" ? "active" : ""}`}
                onClick={() => handleRoleSelect("parent")}
              >
                {t("register.parent")}
              </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="namen">
              <div className="eintrag-name">
                <label className="Title" htmlFor="reg-fname">{t("common.firstName")}</label>
                <input
                  type="text"
                  id="reg-fname"
                  placeholder={t("register.firstNamePlaceholder")}
                  name="fname"
                  onChange={handleChange}
                  value={data.fname}
                  required
                  className="eintrag"
                />
              </div>
              <div className="eintrag-name">
                <label className="Title" htmlFor="reg-lname">{t("common.lastName")}</label>
                <input
                  type="text"
                  id="reg-lname"
                  placeholder={t("register.lastNamePlaceholder")}
                  name="lname"
                  onChange={handleChange}
                  value={data.lname}
                  required
                  className="eintrag"
                />
              </div>
            </div>

            <div className="eintrag">
              <label className="Title" htmlFor="reg-email">{t("common.email")}</label>
              <input
                type="email"
                id="reg-email"
                placeholder={t("register.emailPlaceholder")}
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="eintrag"
              />
            </div>

            <div className="eintrag">
              <label className="Title" htmlFor="reg-password">{t("common.password")}</label>
              <input
                type="password"
                id="reg-password"
                placeholder={t("register.passwordPlaceholder")}
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="eintrag"
              />
            </div>

            {error && <div className="error_msg">{error}</div>}

            <label className="checkbox">
              <input type="checkbox" required />
              <span className="checktext">{t("register.agb")}</span>
            </label>

            <div className="Anmelden">
              <button type="submit" className="btn-primary btn-lg" disabled={loading}>
                {loading ? t("common.loading") : t("register.submit")}
              </button>
              <div className="login-subtext">
                {t("register.hasAccount")}{" "}
                <Link to="/Login" className="login-subtext-link">{t("register.loginLink")}</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="blue"></div>
      <Footer />
    </>
  );
};

export default Signup;