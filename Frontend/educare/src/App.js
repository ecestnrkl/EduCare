import "./App.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import LandingPage from "./pages/LandingPage";
import Settings from "./pages/Settings";
import SettingsAddChild from "./components/Settings/SettingsAddChild";
import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import CalendarEintrag from "./components/Calendar/CalendarEintrag";
import ClassExemption from "./components/ReportsPage/ClassExemption";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <MenuPage />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LandingPage" element={
            <ProtectedRoute><LandingPage /></ProtectedRoute>
          } />
          <Route path="/ReportsPage" element={
            <ProtectedRoute><ReportsPage /></ProtectedRoute>
          } />
          <Route path="/Settings" element={
            <ProtectedRoute><Settings /></ProtectedRoute>
          } />
          <Route path="/SettingsAddChild" element={
            <ProtectedRoute><SettingsAddChild /></ProtectedRoute>
          } />
          <Route path="/ClassExemption" element={
            <ProtectedRoute><ClassExemption /></ProtectedRoute>
          } />
          <Route path="/CalendarEintrag" element={
            <ProtectedRoute><CalendarEintrag /></ProtectedRoute>
          } />
          <Route path="/Calendar" element={
            <ProtectedRoute><Calendar /></ProtectedRoute>
          } />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;