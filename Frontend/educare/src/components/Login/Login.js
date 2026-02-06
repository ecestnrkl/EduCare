import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import image from "../image/sit.png";
import Footer from "../Footer/Footer";
import "./Loginstyle.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(data.email, data.password);
      navigate("/LandingPage");
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
      <div className="login">
        <div className="l_blue"></div>
        <img src={image} className="login-pic" alt="Login" />
        <div className="loginBox">
          <form onSubmit={handleSubmit}>
            <h1>{t("login.title")}</h1>
            <div className="eintrag">
              <label className="Title" htmlFor="login-email">{t("common.email")}</label>
              <input
                type="email"
                id="login-email"
                placeholder={t("login.emailPlaceholder")}
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="eintrag"
              />
            </div>
            <div className="eintrag">
              <label className="Title" htmlFor="login-password">{t("common.password")}</label>
              <input
                type="password"
                id="login-password"
                placeholder={t("login.passwordPlaceholder")}
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="eintrag"
              />
            </div>
            {error && <div className="error_msg">{error}</div>}
            <div className="pass">{t("login.forgotPassword")}</div>

            <div className="Anmelden">
              <button type="submit" className="btn-primary btn-lg" disabled={loading}>
                {loading ? t("common.loading") : t("login.submit")}
              </button>
              <div className="login-subtext">
                {t("login.noAccount")}{" "}
                <Link to="/Register" className="login-subtext-link">{t("login.registerLink")}</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;