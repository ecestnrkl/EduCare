import "./ReportsPage.css"
import React from "react"

// Muss in App.js geändert werden!\

export default function SickNote() {
    return (
        <div>
            <h1> Meldungen </h1>
            <div className='Auswahl'>
                <form className="krankmeldung2" action="/ReportsPage">
                    <button type="submit">Krankmeldung</button>
                </form>
                <form className="befreiung2" action="/SickNote">
                    <button type="submit">Befreiung</button>
                </form>
            </div>
            <div className="balken">
                <form className="befreiungSeite" action="/SickNote">
                    <p>Sehr geehrte Damen und Herren, <br /><br /> hiermit befreie ich mein Kind</p>
                    <div className="Datum">
                        <label htmlFor="Vorname"></label>
                        <input type="Vorname" id="Vorname" placeholder="Vorname" name="Vorname" />
                        <label htmlFor="Nachname"></label>
                        <input type="Nachname" id="Nachname" placeholder="Nachname" name="Nachname" />
                    </div>
                    <div className="Datum">
                        <label htmlFor="datumAnfang">von</label>
                        <input type="datumAnfang" id="datumAnfang" placeholder="TT/MM/JJJJ" name="datumA" />
                        <label htmlFor="datumEnde">bis</label>
                        <input type="datumEnde" id="datumEnde" placeholder="TT/MM/JJJJ" name="datumE" />
                    </div>
                    <p>Aus folgendem Grund:</p>
                    <div className="Grund">
                        <label for="Grund"></label>
                        <select id="Grund" name="Grund">
                            <option value="Auswahl">Bitte auswählen</option>
                            <option value="tod">Tod in der Familie</option>
                            <option value="familie">Wichtiges Familienereignis</option>
                            <option value="arzt">Arzttermin</option>
                            <option value="religion">Religiöser Grund</option>
                            <option value="Wettbewerb">Wettbewerb</option>
                            <option value="Ehrenamtliche">Ehrenamtliche Tätigkeit</option>
                            <option value="Fahrprüfung">Fahrprüfung</option>
                            <option value="sonstiges">Sonstiges</option>
                        </select>
                    </div>
                    <p><br />Mit freundlichen Grüßen, <br /> Isra Özdemir </p>
                    <div className="Nachweis">
                        <p>Nachweis (bei Gegebenheit):</p>
                        <form method="post" action="SickNote" enctype="multipart/form-data">
                            Datei:
                            <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
                            <input type="file" name="datei" size="40" maxlength="100000" />
                        </form>
                    </div>
                    <div className="Speichern">
                        <button type="submit">Speichern</button>
                    </div>
                </form>
            </div>
        </div>
    )
}