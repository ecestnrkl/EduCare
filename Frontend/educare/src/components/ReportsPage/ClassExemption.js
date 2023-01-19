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

                    <div className="befreiungstext">
                        <form name="myform" method="post" action="action.php">
                            <div className="b-text">
                                <label for="text">Sehr geehrte Damen und Herren <br /><br /> </label>
                                <label for="text">hiermit befreie ich mein Kind <br /> </label>
                                <div className="student-name">
                                    <input type="text" id="vorname" className="auswahl" placeholder="Vorname" />
                                    <input type="text" id="nachname" className="auswahl" placeholder="Nachname" />
                                </div>
                                <label for="text">  <br /><br />vom </label>
                                <input type="text" id="datumAnfang" className="auswahl" placeholder="TT/MM/JJJJ" />
                                <label for="text"> bis </label>
                                <input type="text" id="datumEnde" className="auswahl" placeholder="TT/MM/JJJJ" />
                                <label for="text">  <br /><br />Aus folgendem Grund: </label>
                                <select id="Grund1" className="Grund1">
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
                                <label for="text"><br /><br /><br />Mit freundlichen Grüßen, <br /> Isra Özdemir <br /> </label>
                                
                                <div className="Nachweis">
                                    
                                        <input class="custom-file-input" type="file" size="40" maxlength="100000"/>
                                </div>

                            </div>
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