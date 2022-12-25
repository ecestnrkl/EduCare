import image from '../image/illustration-landingpage.png';

export default function LandingPageContent() {
    return (
        <><img src={image} className="landingpage-image" alt="img" /><div className="LandingText">Mit dem Kalender von EduCare kann man wichtige Termine als Lehrer, aber auch als ein Elternteil eintragen.
            Interkulturelle Verständigung ist uns als EduCare sehr wichtig, weshalb wir auch für die Kommunikation mit über 7 Sprachen anbieten um so, Missverständnisse zu vermeiden!</div>
            <div className='Wrapper'>
                <div className='Calendar'>
                    <form className="Calendar button" action="/Calendar">
                        <button type="submit">Kalender</button>
                    </form>
                </div>
                <div className='Reports'>
                    <form className="ReportsButton" action="/ReportsPage">
                        <button type="submit">Meldungen</button>
                    </form>
                </div>
            </div></>

    )
}
