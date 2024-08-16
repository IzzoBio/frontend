import React, { useState } from 'react';

const months = [
  "Lanvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
];

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());

  const renderCalendar = () => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = currentDate.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    let days = [];

    for (let x = firstDayIndex; x > 0; x--) {
      days.push(<div className="prev-date text-gray-400 p-2 m-1 rounded-lg" key={`prev-${x}`}>{prevLastDay - x + 1}</div>);
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days.push(<div className="today bg-purple-500 text-white p-2 m-1 rounded-lg shadow" key={`current-${i}`}>{i}</div>);
      } else {
        days.push(<div className="p-2 m-1 rounded-lg hover:bg-gray-700 text-gray-300" key={`day-${i}`}>{i}</div>);
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<div className="next-date text-gray-400 p-2 m-1 rounded-lg" key={`next-${j}`}>{j}</div>);
    }

    return days;
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="w-[22rem] h-[30rem] bg-gray-800 shadow-xl rounded-lg flex flex-col justify-between items-center p-4">
        <div className="w-full h-12 flex justify-between items-center text-center text-white">
          <i className="fas fa-chevron-left text-2xl cursor-pointer" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}></i>
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase tracking-wider">{months[date.getMonth()]}</h1>
            <p className="text-xs mt-1">{new Date().toDateString()}</p>
          </div>
          <i className="fas fa-chevron-right text-2xl cursor-pointer" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}></i>
        </div>
        <div className="w-full grid grid-cols-7 text-gray-400 text-xs mt-4">
          <div className="text-center">Dim</div>
          <div className="text-center">Lun</div>
          <div className="text-center">Mar</div>
          <div className="text-center">Mer</div>
          <div className="text-center">Jeu</div>
          <div className="text-center">Ven</div>
          <div className="text-center">Sam</div>
        </div>
        <div className="w-full grid grid-cols-7 gap-1 mt-2">
          {renderCalendar()}
        </div>
      </div>
      <button className="bg-purple-600 text-white py-2 px-6 text-lg rounded-lg mt-4 hover:bg-purple-500 focus:outline-none shadow ms-[150px] bg-champagne-500 hover:bg-champagne-700 text-[white]">
        Contacter un agent
      </button>
    </div>
  );
};

export default CalendarApp;
