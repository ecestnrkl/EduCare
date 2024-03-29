import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as GoIcons from "react-icons/go";
import * as CgIcons from "react-icons/cg";
import { MenuPageContent } from "../components/MenuPage/MenuPageContent";
import '../components/MenuPage/MenuPage.css';
import logo from './images/educare-logo.png';

const style = { color: "white", fontSize: "1em" }


function MenuPage() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };


  return (
    <>
      <div className='menupage'>
        <Link to='#' className='menu-bars'>
          <GoIcons.GoThreeBars onClick={showSidebar} style={style} />
        </Link>
        <header>

          <Link to="/LandingPage">
            <img
              src={logo}
              className="educare-logo"
              alt="logo" />
          </Link>
          
          {/* <button onClick={handleLogout}>
					Logout
				</button> */}
        </header>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='menupage-toggle'>
            <Link to='#' className='menu-bars'>
              <CgIcons.CgClose style={style} />
            </Link>
          </li>
          {MenuPageContent.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default MenuPage;