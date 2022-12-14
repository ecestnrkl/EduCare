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
import ClassExemption from './components/ReportsPage/ClassExemption';

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
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </div>
    </>
  )
}
export default App