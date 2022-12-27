import React from 'react';
import "./Settings.css"
import TitleBar from '../TitleBar/TitleBar';
import Footer from '../Footer/Footer';

export default function SettingsAddChild() {
    return (
        <div>
            <TitleBar/>
            <div className='settings'> Einstellungen </div>
            {/* <h1>Einstellungen</h1> */}
            <div className='TextBox'>
                <div className='Schule'>
                    <div className='Box'>
                        <label for="Schule">Schule: </label>
                        <input type="text" id="schule" school="Schule" />
                    </div>
                </div>
                    <div className='Box'>
                        <label for="fname">Vorname des Kindes: </label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className='Box'>
                        <label for="lname">Nachname des Kindes: </label>
                        <input type="text" id="lname" name="lname" />
                    </div>
                    <div className='Box'>
                        <label for="class">Klasse: </label>
                        <input type="text" id="class" name="class" />
                    </div>
                    <div className='Box'>
                        <label for="teacher">Klassenlehrer: </label>
                        <input type="text" id="teacher" name="teacher" />
                    </div>
                    <div className='Box'>
                        <label for="email">Email Adresse: </label>
                        <input type="email" id="email" name="email" />
                    </div>
            </div>
            <div className='Wrapper'>
            <div className='AddChild'>
                <form className="AddChild" action="/SettingsAddChild">
                    <button type="submit">Kind Hinzufügen</button>
                </form>
            </div>
            <div className='Submit'>
                <form className="save" action="/HomePage">
                    <button type="submit">Speichern</button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}