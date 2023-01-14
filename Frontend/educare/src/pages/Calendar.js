import React from 'react';
import "../components/Calendar/Calendar.css"
import Footer from '../components/Footer/Footer';
import CalendarContent from '../components/Calendar/CalendarContent';

export default function Calendar() {
    return (
        <>
            <h1>Kalender</h1>
            <CalendarContent/>
            <Footer/>
        </>
    )
}


