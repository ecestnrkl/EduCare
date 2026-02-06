import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GoGrabber } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { MenuPageContent } from "../components/MenuPage/MenuPageContent";
import { useAuth } from "../context/AuthContext";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import "../components/MenuPage/MenuPage.css";
import logo from "./images/educare-logo.png";

const style = { color: "white", fontSize: "1em" };
const istyle = { color: "white", fontSize: "1.3em" };

function MenuPage() {
  const [sidebar, setSidebar] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const showSidebar = () => setSidebar(!sidebar);

  const handleMenuClick = async (item) => {
    setSidebar(false);
    if (item.path === "/logout") {
      await logout();
      navigate("/HomePage");
    }
  };

  return (
    <>
      <div className="menupage">
        <Link to="#" className="menu-bars">
          <GoGrabber onClick={showSidebar} style={style} />
        </Link>
        <header>
          <Link to={isAuthenticated ? "/LandingPage" : "/HomePage"}>
            <img src={logo} className="educare-logo" alt="EduCare Logo" />
          </Link>
        </header>
        <LanguageSwitcher />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="menupage-toggle">
            <Link to="#" className="menu-bars">
              <CgClose style={style} />
            </Link>
          </li>
          {MenuPageContent.map((item, index) => {
            /* Hide protected items for guests */
            if (!isAuthenticated && item.path === "/logout") return null;
            if (!isAuthenticated && ["/Settings", "/Calendar", "/ReportsPage"].includes(item.path)) return null;

            /* Logout button with special handler */
            if (item.path === "/logout") {
              return (
                <li key={index} className={item.cName}>
                  <button
                    className="nav-logout-btn"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.icon}
                    <span>{t(item.titleKey)}</span>
                  </button>
                </li>
              );
            }

            /* For guests: Home → /HomePage instead of /LandingPage */
            const linkPath = (!isAuthenticated && item.path === "/LandingPage")
              ? "/HomePage"
              : item.path;

            return (
              <li key={index} className={item.cName}>
                <Link to={linkPath}>
                  {item.icon}
                  <span>{t(item.titleKey)}</span>
                </Link>
              </li>
            );
          })}

          {/* Show Login & Register links for guests */}
          {!isAuthenticated && (
            <>
              <li className="nav-text">
                <Link to="/Login">
                  <BiLogIn style={istyle} />
                  <span>{t("login.title")}</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/Register">
                  <BiUserPlus style={istyle} />
                  <span>{t("register.title")}</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default MenuPage;