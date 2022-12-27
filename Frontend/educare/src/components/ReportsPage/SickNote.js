import "./ReportsPage.css"
import React from "react"

export default function SickNote() {
    return (
        <div>
            <form className="krankmeldung" action="/ReportsPage">
                <div className="balken">
                    <div className="Datum">
                        <label htmlFor="datumAnfang">Datum:</label>
                        <input type="datumAnfang" id="datumAnfang" placeholder="TT/MM/JJJJ" name="datumA" />
                        <label htmlFor="datumEnde">bis</label>
                        <input type="datumEnde" id="datumEnde" placeholder="TT/MM/JJJJ" name="datumE" />
                    </div>
                    <div className="Grund">
                        <label for="Grund">Grund:</label>
                        <select id="Grund" name="Grund">
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