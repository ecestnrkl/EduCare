import "./Calendar.css"
import React from "react"
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import "./Calendar.css"
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom'

export default function CalendarEintrag() {
    return (
        <div>
            <h1>Kalender</h1>
            <div className='card'>
                <div className="month">
                    <ul>
                        <li className="prev">❮</li>
                        <li className="next">❯</li>
                        <li>
                            Dezember
                            <span style={{ fontSize: 18 }}>2022</span>
                        </li>
                    </ul>
                </div>
                <ul className="weekdays">
                    <li>M</li>
                    <li>D</li>
                    <li>M</li>
                    <li>D</li>
                    <li>F</li>
                    <li>S</li>
                    <li>S</li>
                </ul>
                <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>
                        <form>
                            <button className="notactive2">11</button>
                        </form>
                    </li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>
                    <form>
                        <Link to="/CalendarEintrag">
                            <button className="active">20</button>
                        </Link>
                    </form>
                    </li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <lip>1</lip>
                    <lip>2</lip>
                    <lip>3</lip>
                    <lip>4</lip>

                </ul>
            </div>
            <br />
            <div>
                <Link to="/Calendar">
                    <button type="submit" className="btn">Eintrag hinzufügen <i className="plus"><AiIcons.AiOutlinePlusCircle /></i></button>
                </Link>
            </div>
            <br />
            <div className='Eintrag'>
                <h2>Weihnachtsfeier und Wichteln mit der Klasse 7b</h2><br />
                <p>veröffenlicht von Herr Stein</p>
                <br />
                <div className="Nachricht"><p>Liebe Eltern der SchülerInnen der Klasse 7b, <br /> <br />am 20.12.22 möchten wir im Klassenzimmer eine kleine
                    <div className="dropdown">
                        <span>Weihnachtsfeier <i> <BsIcons.BsInfoCircle /></i> </span>
                        <div className="dropdown-content">
                            <p>Weihnachten:</p><p2>Weihnachten ist ein christlicher Feiertag, an welchen die Menschen zur Winterzeit die Geburt von Jesus feiern. Üblich ist hierbei das Schmücken von Häusern und Straßen, sowie das backen von Plätzchen. Außerdem gibt es Weihnachtsmärke, bei welchen man Glühwein, Kinderpunsch, gebrannte Mandeln und vieles mehr Naschen kann. Es geht beim Weihnachtfest um das mit seinen Liebsten sein und sich beschenken.</p2></div>
                    </div> veranstalten, bei welcher es Kinderpunsch und Plätzchen geben wird. <br /> Wir haben mit der Klasse gemeinsam entschieden, dass wir auch
                    <div className="dropdown">
                        <span>Wichteln <i><BsIcons.BsInfoCircle /></i></span>
                        <div className="dropdown-content">
                            <p>Wichteln:</p><p2>Wichteln beschreibt einen Vorgang, bei dem sich eine gewisse Anzahl an Personen in der Vorweihnachtszeit zusammenfindet, um sich gegenseitig zu beschenken. Damit jeder beim Wichteln genau ein Geschenk bekommt und ein Geschenk gibt, wird ausgelost, wer wen beschenkt.
                            </p2> </div> </div> möchten. Sorgen sie deshalb bitte dafür, dass ihr Kind ein Geschenk im Preis von 5 bis 10€ an diesem Tag dabei hat. <br /><br /> Ich wünsche Ihnen noch schöne Feiertage!<br /><br />Mit freundlichen Grüßen<br />Herr Stein</p>
                </div>
                <hr /><div className="Nachricht2">
                    <p> Antworten</p><i><AiIcons.AiOutlineSend /></i>
                </div></div>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}


