import '../components/LandingPage/LandingPage.css';
import '../App.css';
//import Footer from "../components/Footer/Footer";
import HomePageContent from '../components/HomePage/HomePageContent';
import LandingPageContent from '../components/LandingPage/LandingPageContent';
import image from '../components/image/illustration-landingpage.png';

function LandingPage() {
    return (
        <div>
            <HomePageContent />
            <img src= {image} className="landingpage-image" alt="img" />
            <LandingPageContent />
                <form name='Calender_button' action='/Calendar'><button type="submit">Kalender</button></form>
                <form name='Reports_button' action='/ReportsPage'><button type="submit">Meldungen</button></form>
            </div>
    );
}

export default LandingPage;