import React from 'react'
import image from '../image/sit.png';
import Footer from '../Footer/Footer';
import './Login.css';

function Login() {
    return (
        <>
            <>
                <div className='login'>
                    <img
                        src={image}
                        className="login-pic"
                        alt="Login" />

                    <div className='loginBox'>
                        <h1>Anmelden</h1>
                        <div className='eintrag'>
                            <div className='Title'>Email</div>
                            <input type="text" id="Email" name="email" placeholder="Email" />
                        </div>
                        <div className='eintrag'>
                            <div className='Title'>Passwort</div>
                            <input type="password" id="Passwort" name="passwort" placeholder="Passwort" />
                        </div>
                        <div className='pass'>Passwort Vergessen?</div>
                        <div className='Anmelden'>
                            <form className="save" action="/LandingPage">
                                <button type="submit">Anmelden</button> 
                                <div className="reg">Noch kein Account? <a href="/Register" class="bold-text">Registrieren!</a></div>
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

export default Login