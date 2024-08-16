// Calendar.jsx
import React, { useState, useEffect } from 'react';


const Calendar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    renderCalendar();
  }, [date]);

  const renderCalendar = () => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthName = months[date.getMonth()];
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth();

    let days = [];
    
    for (let x = firstDay; x > 0; x--) {
      days.push(<div className="prev-date" key={`prev-${x}`}>{prevLastDay - x + 1}</div>);
    }

    for (let i = 1; i <= lastDay; i++) {
      days.push(
        <div
          className={i === today && date.getMonth() === todayMonth ? "today" : ""}
          key={`current-${i}`}
        >
          {i}
        </div>
      );
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<div className="next-date" key={`next-${j}`}>{j}</div>);
    }

    return {
      days,
      monthName
    };
  };

  const { days, monthName } = renderCalendar();

  return (
    <div className="container">
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev" onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}></i>
          <div className="date">
            <h1>{monthName}</h1>
            <p>{new Date().toDateString()}</p>
          </div>
          <i className="fas fa-angle-right next" onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}></i>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">
          {days}
        </div>
        <button className="contact-agent-btn">Contact Agent</button>
      </div>
    </div>
  );
};

export default Calendar;