import React from "react";
import "./style.css";

function Calendrier() {
  return (
    <div class="container">
      <div class="calendar">
        <div class="month">
          <i class="fas fa-angle-left prev"></i>
          <div class="date">
            <h1></h1>
            <p></p>
          </div>
          <i class="fas fa-angle-right next"></i>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>  
          <div>Sat</div>
        </div>
        <div class="days"></div>
        <button class="contact-agent-btn">Contact Agent</button>
      </div>
    </div>
  );
}

export default Calendrier;
