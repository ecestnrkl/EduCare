import '../css/HomePage.css';
import ReactDOM from "react-dom/client";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import HomePageContent from "../components/content/HomePageContent";
import React from 'react';

function HomePage() {
  return (
    <div className="Homepage">
      <TitleBar />
      <HomePageContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

export default HomePage;
