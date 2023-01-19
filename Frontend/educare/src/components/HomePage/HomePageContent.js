import './HomePage.css';
import content from '../image/HomePageImage.png';

export default function HomePageContent() {
    return (
        <div style={{ backgroundColor: '#214ddb' }}>
        <>
            <div className='homepage'>
                <div className='homepage-container'>
                    <img
                        src={content}
                        className="homepage-content"
                        alt="content" />
                    <h1>Interkulturelle</h1>
                    <h1>Verständigung</h1>
                    <h1>ist uns wichtig</h1>
                </div>
                <div className='register'>
                    <a href="/Login" class="wutton">Anmelden</a>
                    <div className="reg">Noch kein Account? <a href="/Register" class="bold-textw">Registrieren!</a></div>
                    </div>
                    <div className='blue'></div>
            </div>
        </>
        </div>

    )
}