import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as GoIcons from "react-icons/go";
import * as CgIcons from "react-icons/cg";
import { MenuPageContent } from "../components/MenuPage/MenuPageContent";
import '../components/MenuPage/MenuPage.css';
import { IconContext } from 'react-icons';

function MenuPage() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
        <div className='menupage'>
          <Link to='#' className='menu-bars'>
            <GoIcons.GoThreeBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='menupage-toggle'>
              <Link to='#' className='menu-bars'>
                <CgIcons.CgClose />
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
      </IconContext.Provider>
    </>
  );
}

export default MenuPage;