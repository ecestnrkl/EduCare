import React from 'react';
import "../components/Settings/Settings.css"
import TitleBar from '../components/TitleBar/TitleBar';
import Footer from '../components/Footer/Footer';
import { BsPlusCircle } from "react-icons/bs"

export default function Settings() {
    return (
        <div className='Setting'>
            <TitleBar />
            <h1>Einstellungen</h1>
            <div className='SpaceTextBox'>
                <div className='WrapTextBox'>
                    <div className='TextBox'>

                        <div className='Box1'>
                            <div className='Schule'>
                                <div className='Box'>
                                    <label for="Schule">Schule: </label>
                                    <input type="text" id="schule" school="Schule" placeholder="Realschule München" />
                                </div>
                            </div>
                            <div className='Box'>
                                <label for="fname">Vorname: </label>
                                <input type="text" id="fname" name="fname" placeholder="Isra" />
                            </div>
                            <div className='Box'>
                                <label for="lname">Nachname: </label>
                                <input type="text" id="lname" name="lname" placeholder="Özdemir" />
                            </div>
                            <div className='Box'>
                                <label for="email">Email Adresse: </label>
                                <input type="email" id="email" name="email" placeholder="isra.özdemir@gmail.com" />
                            </div>
                            <div className='Box'>
                                <label for="pwd">Passwort: </label>
                                <input type="password" id="pwd" name="pwd" placeholder="●●●●●●●●●" />
                                {/* </div>
                        <div className='SprachOption'>
                            <label for="Sprache">Sprache: </label>
                            <select id="Sprache" name="Sprache">
                                <option value="Sprache1">Deutsch</option>
                                <option value="Sprache1">English</option>
                                <option value="Sprache1">Français</option>
                                <option value="Sprache1">Magyar</option>
                                <option value="Sprache1">Türk</option>
                                <option value="Sprache1">Kurdî</option>
                                <option value="Sprache1">русский</option>
                                <option value="Sprache1">فارسی</option>
                                <option value="Sprache1">عربى</option>
                            </select> */}
                            </div>
                        </div>

                        <div className="Box2">
                            <div className='Box'>
                                <label for="fname">Vorname Kind: </label>
                                <input type="text" id="fname" name="fname" placeholder="Selin" />
                            </div>
                            <div className='Box'>
                                <label for="lname">Nachname Kind: </label>
                                <input type="text" id="lname" name="lname" placeholder="Özdemir" />
                            </div>
                            <div className='Box'>
                                <label for="class">Klasse: </label>
                                <input type="text" id="class" name="class" placeholder="7b" />
                            </div>
                            <div className='Box'>
                                <label for="teacher">Klassenlehrer: </label>
                                <input type="text" id="teacher" name="teacher" placeholder="Wolfgang Stein" />
                            </div>
                            <div className='Box'>
                                <label for="email">Email Adresse: </label>
                                <input type="email" id="email" name="email" placeholder="wolfgang.stein@edu.de" />
                            </div>
                        </div>
                    </div>
                    <div className='AddChild'>
                        <form className="add" action="/SettingsAddChild">
                            <button type="submit"><BsPlusCircle size={"30px"} /></button>                        </form>
                    </div>
                </div>

                <div className='Wraper'>
                    <div className='Submit'>
                        <form className="button" action="/HomePage">
                            <button type="submit">Speichern</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}