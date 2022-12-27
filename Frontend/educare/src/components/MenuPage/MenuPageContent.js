import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
const istyle = { color: "white", fontSize: "1.3em" }

export const MenuPageContent = [
    {
    title: "Kalender",
    path: "/Calendar",
    icon: <BsIcons.BsCalendar4Week style={istyle}/>,
    cName: "nav-text",
    },
{
    title: "Meldungen",
    path: "/ReportsPage",
    icon: <CgIcons.CgFileDocument  style={istyle}/>,
    cName: "nav-text",
},
{
    title: "LandingPage",
    path: "/LandingPage",
    icon: <AiIcons.AiOutlineHome  style={istyle}/>,
    cName: "nav-text",
},
{
    title: "Einstellungen",
    path: "/Settings",
    icon: <FiIcons.FiSettings  style={istyle}/>,
    cName: "nav-text",
},
]