import React from 'react'
import image from '../image/sit.png';
import Footer from '../Footer/Footer';
import './Register.css';

function Register() {
    return (
        <>
            <>
                <div className='Register'>
                    <img
                        src={image}
                        className="Register-pic"
                        alt="Register" />

                    <div className='RegisterBox'>
                        <h1>Register</h1>
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
                        <label className="check">Ich habe die AGB gelesen und akzeptiere sie.
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                        </label>
                        
                        <div className='Anmelden'>
                            <form className="save" action="/LandingPage">
                                <button type="submit">Registrieren</button>
                                <div class="reg">Hast du schon ein Account? <span class="bold-text" action="/Login">Anmelden!</span></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='blue'></div>
            </>

            <Footer />
        </>

    )

}

export default Register