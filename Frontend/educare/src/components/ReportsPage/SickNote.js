import "./ReportsPage.css"
import React from "react"

export default function SickNote() {
    return (
        <div>
            <form className="krankmeldung" action="/ReportsPage">
                <div className="balke">
                    <div className="tag">
                        <label for="input">Von: </label>
                        <label for="input">Bis: </label>
                        <label for="input">Grund: </label>
                    </div>
                    <div className="tag-input">
                        <input type="text" id="datumAnfang" className="auswahl" placeholder="TT/MM/JJJJ" />
                        <input type="text" id="datumEnde" className="auswahl" placeholder="TT/MM/JJJJ" />
                        <select id="Grund1" className="Grund1">
                            <option value="auswählen">Auswählen</option>
                            <option value="erkältung">Erkältung</option>
                            <option value="covid">Covid-Symptome</option>
                            <option value="magen">Magen Darm Virus</option>
                        </select>
                        </div>
                        </div>

                    <div className="Wrapper">
                        <button type="submit">Speichern</button>
                    </div>
            </form>
        </div>
    )
}