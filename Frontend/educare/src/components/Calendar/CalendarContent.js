import "./Calendar.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-based (Mon=0 ... Sun=6)
  return day === 0 ? 6 : day - 1;
}

export default function CalendarContent() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const { t } = useTranslation();

  const months = t("calendar.months", { returnObjects: true });
  const weekdays = t("calendar.weekdays", { returnObjects: true });

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  // Build calendar grid
  const calendarDays = [];

  // Previous month overflow days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push(
      <li key={`prev-${i}`} className="other-month">
        {prevMonthDays - i}
      </li>
    );
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <li key={`day-${day}`}>
        {isToday(day) ? (
          <Link to="/CalendarEintrag">
            <button className="notactive">{day}</button>
          </Link>
        ) : (
          day
        )}
      </li>
    );
  }

  // Next month overflow days
  const totalCells = calendarDays.length;
  const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push(
      <li key={`next-${i}`} className="other-month">
        {i}
      </li>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="month">
          <ul>
            <li className="prev" onClick={handlePrev}>❮</li>
            <li className="next" onClick={handleNext}>❯</li>
            <li>
              {months[currentMonth]}
              <span style={{ fontSize: 18 }}> {currentYear}</span>
            </li>
          </ul>
        </div>
        <ul className="weekdays">
          {weekdays.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
        <ul className="days">{calendarDays}</ul>
      </div>
      <div className="Eintrag1">
        <Link to="/CalendarEintrag">
          <button type="button" className="cal-add-btn">
            {t("calendar.addEntry")}
            <span className="plus"><AiOutlinePlusCircle /></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

