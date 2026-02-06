import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const istyle = { color: "white", fontSize: "1.3em" };

export const MenuPageContent = [
  {
    titleKey: "nav.home",
    path: "/LandingPage",
    icon: <AiOutlineHome style={istyle} />,
    cName: "nav-text",
  },
  {
    titleKey: "nav.calendar",
    path: "/Calendar",
    icon: <BsCalendar4Week style={istyle} />,
    cName: "nav-text",
  },
  {
    titleKey: "nav.reports",
    path: "/ReportsPage",
    icon: <CgFileDocument style={istyle} />,
    cName: "nav-text",
  },
  {
    titleKey: "nav.settings",
    path: "/Settings",
    icon: <FiSettings style={istyle} />,
    cName: "nav-text",
  },
  {
    titleKey: "nav.logout",
    path: "/logout",
    icon: <BiLogOut style={istyle} />,
    cName: "nav-text",
  },
];