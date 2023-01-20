import React, { useState } from 'react';
import axios from "axios";
import "./Settings.css"
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'

export default function SettingsAddChild() {
    const [input, setInput] = useState({
        school: '',
        fname: '',
        lname: '',
        klasse: '',
        teacher: '',
        email: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newChild = {
            school: input.school,
            fname: input.fname,
            lname: input.lname,
            klasse: input.klasse,
            teacher: input.teacher,
            email: input.email
        }

        axios.post('http://localhost:3001/child', newChild)
    }

    return (
        <div className='SettingsAddChild'>
            <h1>Einstellungen</h1>
            <div className='settings-container'>

                <div className='kind'>
                    <h2>Kind 1</h2>
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
                </div>
                <div className='kind'>
                    <h2>Kind 2</h2>
                <div className='TextBox'>
                    <div className='Schule'>
                        <div className='Box'>
                            <label for="Schule">Schule: </label>
                            <input onChange={handleChange} value={input.schule} type="text" id="schule" name="school" placeholder="" />
                        </div>
                    </div>
                    <div className='Box'>
                        <label for="fname">Vorname des Kindes: </label>
                        <input onChange={handleChange} value={input.fname} type="text" id="fname" name="fname" placeholder="" />
                    </div>
                    <div className='Box'>
                        <label for="lname">Nachname des Kindes: </label>
                        <input onChange={handleChange} value={input.lname} type="text" id="lname" name="lname" placeholder="" />
                    </div>
                    <div className='Box'>
                        <label for="class">Klasse: </label>
                        <input onChange={handleChange} value={input.klasse} type="text" id="klasse" name="klasse" placeholder="7b" />
                    </div>
                    <div className='Box'>
                        <label for="teacher">Klassenlehrer: </label>
                        <input onChange={handleChange} value={input.teacher} type="text" id="teacher" name="teacher" placeholder="Wolfgang Stein" />
                    </div>
                    <div className='Box'>
                        <label for="email">Lehrer Kontakt: </label>
                        <input onChange={handleChange} value={input.email} type="email" id="email" name="email" placeholder="wolfstein@hm.edu" />
                    </div>
                    </div>
                    </div>
                    
                <div className='Submit'>
                    <Link className="save" to="/SettingsAddChild">
                        <button onClick={handleClick} type="submit">Speichern</button>
                    </Link>
                </div>

            </div>


            <Footer />
        </div>
    )
}