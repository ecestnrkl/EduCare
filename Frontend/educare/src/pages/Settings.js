import React from 'react';
import "../components/Settings/Settings.css"
import Footer from '../components/Footer/Footer';

export default function Settings() {
    return (
        <div className='Setting'>
            <h1>Einstellungen</h1>
            <div className='SpaceTextBox'>
                <div className='WrapTextBox'>
                    <div className='TextBox'>

                        <div className='Box1'>
                            <div className='Schule'>
                                <div className='Box'>
                                    <label for="Schule">Schule: </label>
                                    <input type="text" id="schule" school="Schule" placeholder="Schule" />
                                </div>
                            </div>
                            <div className='Box'>
                                <label for="fname">Vorname: </label>
                                <input type="text" id="fname" name="fname" placeholder="Vorname Elternteil" />
                            </div>
                            <div className='Box'>
                                <label for="lname">Nachname: </label>
                                <input type="text" id="lname" name="lname" placeholder="Nachname Elternteil" />
                            </div>
                            <div className='Box'>
                                <label for="email">Email Adresse: </label>
                                <input type="emailEltern" id="emailEltern" name="emailEltern" placeholder="Email Elternteil" />
                            </div>
                            <div className='Box'>
                                <label for="pwd">Passwort: </label>
                                <input type="password" id="pwd" name="pwd" placeholder="●●●●●●●●●" />
                            </div>
                        </div>

                        <div className="Box2">
                            <div className='Box'>
                                <label for="fname">Vorname Kind: </label>
                                <input type="text" id="fname" name="fname" placeholder="Vorname Kind" />
                            </div>
                            <div className='Box'>
                                <label for="lname">Nachname Kind: </label>
                                <input type="text" id="lname" name="lname" placeholder="Nachname Kind" />
                            </div>
                            <div className='Box'>
                                <label for="class">Klasse: </label>
                                <input type="text" id="class" name="class" placeholder="Klasse" />
                            </div>
                            <div className='Box'>
                                <label for="teacher">Klassenlehrer: </label>
                                <input type="text" id="teacher" name="teacher" placeholder="Klassenlehrer" />
                            </div>
                            <div className='Box'>
                                <label for="emailLehrer">Email Adresse: </label>
                                <input type="emailLehrer" id="emailLehrer" name="emailLehrer" placeholder="Email Klassenlehrer" />
                            </div>
                        </div>
                    </div>

                    <div className='Wrapper'>
                        <div className='AddChild'>
                            <form className="AddChild" action="/SettingsAddChild">
                                <button type="submit">Kind Hinzufügen</button>
                            </form>
                        </div>
                        <div className='Submit'>
                            <form className="save" action="/Settings">
                                <button type="submit">Speichern</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}