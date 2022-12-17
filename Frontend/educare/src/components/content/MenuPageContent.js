import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

export const MenuPageContent = [
    {
    title: "Kalender",
    path: "/Calendar",
    icon: <BsIcons.BsCalendar4Week />,
    cName: "nav-text",
    },
{
    title: "Meldungen",
    path: "/ReportsPage",
    icon: <CgIcons.CgFileDocument />,
    cName: "nav-text",
},
{
    title: "LandingPage",
    path: "/LandingPage",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
},
{
    title: "Einstellungen",
    path: "/Settings",
    icon: <FiIcons.FiSettings />,
    cName: "nav-text",
},
]