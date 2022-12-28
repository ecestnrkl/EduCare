import './HomePage.css';
import content from '../image/HomePageImage.png';

export default function HomePageContent() {
    return (
        <>
        <div className='hompage-background'>
            <div className='homepage-container'>
                <img
                    src={content}
                    className="homepage-content"
                    alt="content" />
                <h2>Interkulturelle Verständigung ist uns wichtig</h2>
            </div>
        </div>
        <a href="/LandingPage" class="wutton">Anmelden</a>
        <div className='hintergund'></div>
        </>
    )
}