import React from 'react';
import SickNote from '../components/ReportsPage/SickNote';
import "../components/ReportsPage/ReportsPage.css"
import Footer from '../components/Footer/Footer';

export default function ReportsPage() {
    return (
        <div>
            <h1> Meldungen </h1>
            <div className='Wrapper'>
            <form className="krankmeldung1" action="/ReportsPage">
            <button type="submit">Krankmeldung</button>
            </form>
            <form className="befreiung" action="/ClassExemption">
            <button type="submit">Befreiung</button>
            </form>
            </div>
            <SickNote />
            <Footer/>
        </div>
    )
}

