import "./style.css";

function Calendrier() {
  return (
    <div className="container">
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev"></i>
          <div className="date">
            <h1></h1>
            <p></p>
          </div>
          <i className="fas fa-angle-right next"></i>
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
        <div className="days"></div>
        <button className="contact-agent-btn">Contact Agent</button>
      </div>
    </div>
  );
}

export default Calendrier;
