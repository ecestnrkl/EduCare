import React from 'react';
import ClassExemption from '../components/ReportsPage/ClassExemption';
import "../components/ReportsPage/ReportsPage.css"

export default function ReportsPage() {
    return (
        <div>
            <h1> Meldungen </h1>
            <div className='Auswahl'>
            <form className="krankmeldung1" action="/ReportsPage">
            <button type="submit">Krankmeldung</button>
            </form>
            <form className="befreiung" action="/SickNote">
            <button type="submit">Befreiung</button>
            </form>
            </div>
        <ClassExemption />
        </div>
    )
  }