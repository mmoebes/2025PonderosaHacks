import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <section className="sched-section">
      <h1 className="schedheading-tag-line">Schedule</h1>
      <hr className="schedheading-underline" />

      <div
        className="Schedule_main"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          className="responsive-two-column-grid"
          style={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <p>👋 <b>8:00 AM</b> Check-in, Breakfast</p>
              <p>📢 <b>8:30 AM</b> Welcome! Opening Ceremony</p>
              <p>👥 <b>9:00 AM</b> Fire Safety Workshop</p>
              <p>👩‍💻 <b>9:30 AM</b> Hacking Begins</p>
              <p>🍽️ <b>12:00 PM</b> Lunch</p>
              <p>⌛ <b>4:30 PM</b> Hacking Ends, Judging</p>
              <p>📢 <b>5:30 PM</b> Awards, Closing Ceremony</p>
              <p>😭 <b>6:00 PM</b> Event Ends</p>

              <br />


{/*
                
               </div>
               <div>
               <a href="/">
                    <img src={W1} alt="Workshop 1" class="responsive"/>
                </a><br />
                <a href="/">
                    <img src={W2} alt="Workshop 2" class="responsive"/>
                </a><br />
                <a href="/">
                    <img src={W3} alt="Workshop 3" class="responsive"/>
                </a><br />
              

              <p>
                ➡️ Attend optional workshops/demos. Times will be announced at
                the event.
              </p>

              <h2 style={{ marginTop: "20px" }}>
                <a
                  href="https://ponhack24.github.io/Resources/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hackathon Resources
                </a>
              </h2>
                */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

              