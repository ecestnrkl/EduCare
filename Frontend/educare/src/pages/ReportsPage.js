import React from 'react';
import SickNote from '../components/ReportsPage/SickNote';
import "../components/ReportsPage/ReportsPage.css"
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom'

export default function ReportsPage() {
    return (
        <div>
            <h1> Meldungen </h1>
            <div className='Wrapper'>
            <Link className="krankmeldung1" to="/ReportsPage">
            <button type="submit">Krankmeldung</button>
            </Link>
            <Link className="befreiung" to="/ClassExemption">
            <button type="submit">Befreiung</button>
            </Link>
            </div>
            <SickNote />
            <Footer/>
        </div>
    )
}

