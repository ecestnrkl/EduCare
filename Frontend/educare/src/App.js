// // import './component/MenuPage.css';
// import './App.css';
// import MenuPage from './pages/MenuPage';
// // import MenuPage from './pages/MenuPage';

// import HomePage from './pages/HomePage';
// import ReportsPage from './pages/ReportsPage';
// import LandingPage from './pages/LandingPage';
// import Settings from './pages/Settings';
// import SettingsAddChild from './components/Settings/SettingsAddChild';

// import { Route, Routes, Navigate } from "react-router-dom"
// import Calendar from './pages/Calendar';
// import CalendarEintrag from './components/Calendar/CalendarEintrag';
// import ClassExemption from './components/ReportsPage/ClassExemption';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';

// function App() {
//   const user = localStorage.getItem("token");
//   return (
//     <>
//       <MenuPage />
//       <div className="container">
//         <Routes>
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/" element={<HomePage />} />
//           <Route path="/HomePage" element={<HomePage />} />
//           {user && <Route path="/ReportsPage" element={<ReportsPage />} />}
//           <Route path="/ReportsPage" element={<Navigate replace to="/login" />} />
//           <Route path="/LandingPage" element={<LandingPage />} />
//           {user && <Route path="/Settings" element={<Settings />} />}
//           <Route path="/Settings" element={<Navigate replace to="/login" />} />
//           {user && <Route path="/SettingsAddChild" element={<SettingsAddChild />} />}
//           <Route path="/SettingsAddChild" element={<Navigate replace to="/login" />} />
//           {user && <Route path="/ClassExemption" element={<ClassExemption />} />}
//           <Route path="/ClassExemption" element={<Navigate replace to="/login" />} />
//           {user && <Route path="/CalendarEintrag" element={<CalendarEintrag />} />}
//           <Route path="/CalendarEintrag" element={<Navigate replace to="/login" />} />
//           {user && <Route path="/Calendar" element={<Calendar />} />}
//           <Route path="/Calendar" element={<Navigate replace to="/login" />} />
//         </Routes>
//       </div>
//     </>
//   )
// }
// export default App;

// /*
// {user && <Route path="/LandingPage" element={<LandingPage />} />}
//           <Route path="/LandingPage" element={<Navigate replace to="/login" />} />*/



// import './component/MenuPage.css';
import './App.css';
import MenuPage from './pages/MenuPage';
// import MenuPage from './pages/MenuPage';

import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import LandingPage from './pages/LandingPage';
import Settings from './pages/Settings';
import SettingsAddChild from './components/Settings/SettingsAddChild';
import { Route, Routes } from "react-router-dom"
import Calendar from './pages/Calendar';
import CalendarEintrag from './components/Calendar/CalendarEintrag';
import ClassExemption from './components/ReportsPage/ClassExemption';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
const express = require("express");

const app = express();

app.use("/check", (req, res) => {
  res.status(200).send("Funktioniert.")
} )

function App() {
  return (
    <>
      <MenuPage />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ReportsPage" element={<ReportsPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/SettingsAddChild" element={<SettingsAddChild />} />
          <Route path="/ClassExemption" element={<ClassExemption />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CalendarEintrag" element={<CalendarEintrag />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App