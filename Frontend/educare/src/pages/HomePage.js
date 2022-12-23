import '../components/HomePage/HomePage.css';
import ReactDOM from "react-dom/client";
import TitleBar from "../components/TitleBar/TitleBar";
import Footer from "../components/Footer/Footer";
import HomePageContent from "../components/HomePage/HomePageContent";

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
