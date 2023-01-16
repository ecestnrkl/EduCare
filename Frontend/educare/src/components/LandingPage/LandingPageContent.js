import image from '../image/illustration-landingpage.png';

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
                    <form className="lutton" action="/Calendar">
                        <button type="submit">Kalender</button>
                    </form>
                </div>
                <div className='Reports'>
                    <form className="lutton" action="/ReportsPage">
                        <button type="submit">Meldungen</button>
                    </form>
                </div>
            </div>
            </div>

    )
}