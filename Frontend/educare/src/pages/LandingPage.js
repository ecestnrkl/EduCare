import '../components/LandingPage/LandingPage.css';
import '../App.css';
//import Footer from "../components/Footer/Footer";
import LandingPageContent from '../components/LandingPage/LandingPageContent';
import TitleBar from '../components/TitleBar/TitleBar';
import Footer from '../components/Footer/Footer';

function LandingPage() {
    return (
        <div>
            <TitleBar/>
            <LandingPageContent />
            <Footer/>
            </div>
    );
}

export default LandingPage;