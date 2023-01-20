import image from '../image/HomePageImage.png';
import { Link } from 'react-router-dom'

export default function LandingPageContent() {
    return (
        <div className='landingpagecontent'>
            <h1>
            Interkulturelle Verständigung
            ist uns wichtig</h1>
            <img src={image} className="landingpage-image" alt="img" />
            <div className="LandingText">
                Mit dem Kalender von EduCare kann man wichtige Termine als Lehrer, aber auch als ein Elternteil eintragen.<br></br><br></br>
                Interkulturelle Verständigung ist uns als EduCare sehr wichtig, weshalb wir auch für die Kommunikation mit über 130 Sprachen anbieten um so, Missverständnisse zu vermeiden!</div>
            <div className='Wrapper'>
                <div className='Calendar'>
                    <form className="lutton">
                        <button type="submit"><Link className='linky' to="/Calendar">Kalender</Link></button>
                    </form>
                </div>
                <div className='Reports'>
                    <form className="lutton">
                        <button type="submit"><Link className='linky' to="/ReportsPage">Meldungen</Link></button>
                    </form>
                </div>
            </div>
            </div>

    )
}