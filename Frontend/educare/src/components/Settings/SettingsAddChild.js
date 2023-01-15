import React, { useState } from 'react';
import axios from "axios";
import "./Settings.css"
import Footer from '../Footer/Footer';

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
        const {name, value} = event.target;
        
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
        <div>
            <h1>Einstellungen</h1>
            <div className='TextBox'>
                <div className='Schule'>
                    <div className='Box'>
                        <label for="Schule">Schule: </label>
                        <input onChange={handleChange} value={input.schule} type="text" id="schule" name="school" />
                    </div>
                </div>
                    <div className='Box'>
                        <label for="fname">Vorname des Kindes: </label>
                        <input onChange={handleChange} value={input.fname} type="text" id="fname" name="fname" />
                    </div>
                    <div className='Box'>
                        <label for="lname">Nachname des Kindes: </label>
                        <input onChange={handleChange} value={input.lname} type="text" id="lname" name="lname" />
                    </div>
                    <div className='Box'>
                        <label for="class">Klasse: </label>
                        <input onChange={handleChange} value={input.klasse} type="text" id="klasse" name="klasse" />
                    </div>
                    <div className='Box'>
                        <label for="teacher">Klassenlehrer: </label>
                        <input onChange={handleChange} value={input.teacher} type="text" id="teacher" name="teacher" />
                    </div>
                    <div className='Box'>
                        <label for="email">Email Adresse: </label>
                        <input onChange={handleChange} value={input.email} type="email" id="email" name="email" />
                    </div>
            </div>
            <div className='Wrapper'>
            <div className='AddChild'>
                <form className="AddChild" action="/SettingsAddChild">
                    <button type="submit">Kind Hinzufügen</button>
                </form>
            </div>
            <div className='Submit'>
                <form className="save" action="/settingsAddedChild">
                    <button onClick={handleClick} type="submit">Speichern</button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}