import React from 'react'
import Footer from '../Footer/Footer';
import './Register.css';

function Register() {
    return (
        <>
            <div className='Register'>
                <div className='RegisterBox'>
                <h1>Registrieren</h1>
                <div className='Title'>Ich bin...</div>
                <div className='Wrapper'>
                    <div className='Calendar'>
                        <form className="lutton">
                            <button type="submit">Lehrer</button>
                        </form>
                    </div>
                    <div className='Reports'>
                        <form className="lutton">
                            <button type="submit">Elternteil</button>
                        </form>
                    </div>
                </div>
                    <div className='namen'>
                        <div className='eintrag-name'>
                            <div className='Title'>Vorname</div>
                            <input type="text" id="Vorname" name="Vorname" placeholder="Vorname" />
                        </div>
                        <div className='eintrag-name'>
                            <div className='Title'>Nachname</div>
                            <input type="text" id="Nachname" name="Nachname" placeholder="Nachname" />
                        </div>
                    </div>
                    <div className='eintrag'>
                        <div className='Title'>Email</div>
                        <input type="text" id="Email" name="email" placeholder="Email" />
                    </div>
                    <div className='eintrag'>
                        <div className='Title'>Passwort</div>
                        <input type="password" id="Passwort" name="passwort" placeholder="Passwort" />
                    </div>
                    <label className="checkbox">
                        <div className='checktext'>Ich habe die AGB gelesen und akzeptiere sie.</div>
                        <input type="checkbox" defaultChecked="checked" />
                    </label>

                    <div className='Anmelden'>
                        <form className="save" action="/LandingPage">
                            <button type="submit">Registrieren</button>
                        </form>
                        <div className="reg">Hast du schon ein Account? <a href="/Login" class="bold-text">Anmelden!</a></div>
                    </div>
                </div>
            </div>
            <div className='blue'></div>

            <Footer />
        </>

    )

}

export default Register