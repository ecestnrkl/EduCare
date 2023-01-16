import "./ReportsPage.css"
import React from "react"
import Footer from '../Footer/Footer';


export default function ClassExemption() {
    return (
        <><div>
            <h1> Meldungen </h1>
            <div className='Wrapper'>
                <form className="krankmeldung2" action="/ReportsPage">
                    <button type="submit">Krankmeldung</button>
                </form>
                <form className="befreiung2" action="/ClassExemption">
                    <button type="submit">Befreiung</button>
                </form>
            </div>
            <form className="befreiungSeite" action="/ClassExemption">
                <div className="balken">
                    <p>Sehr geehrte Damen und Herren, <br /><br /> hiermit befreie ich mein Kind</p>
                    <div className="Name">
                        <label htmlFor="Vorname"></label>
                        <input type="Vorname" id="Vorname" placeholder="Vorname" name="Vorname" />
                        <label htmlFor="Nachname"></label>
                        <input type="Nachname" id="Nachname" placeholder="Nachname" name="Nachname" />
                    </div>
                    <div className="Datum">
                        <label htmlFor="datumAnfang">von</label>
                        <input type="datumAnfang" id="datumAnfang" placeholder="TT/MM/JJJJ" name="datumA" /><br />
                        <label htmlFor="datumEnde">bis</label>
                        <input type="datumEnde" id="datumEnde" placeholder="TT/MM/JJJJ" name="datumE" />
                    </div>
                    <p>Aus folgendem Grund:</p>
                    <div className="Grund1">
                        <label for="Grund1"></label>
                        <select id="Grund1" name="Grund1">
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
                    <p><br />Mit freundlichen Grüßen, <br /> Isra Özdemir <br /></p>
                    <p>Nachweis (bei Gegebenheit):</p>
                    <div className="Nachweis">
                        <form method="post" action="ClassExemption" enctype="multipart/form-data">
                            <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
                            <input type="file" name="datei" size="40" maxlength="100000" />
                        </form>
                    </div>
                </div>
                <div className="Wrapper">
                    <button type="submit">Speichern</button>
                </div>
            </form>
        </div><Footer /></>

    )
}