import React from "react";
import moon from "../images/aboutus-moon.png"
import calendar from "../images/aboutus-calendar.png"
import "./Aboutus.scss";

const AboutUs = ({ data, locale }) => {
  return (
    <section className="aboutus">
      <section className="landing"></section>
      <section className="mission" id="mission">
        <div className="mission-icon" />
        <p>{data.mission.p}</p>
        <h2>
          {data.mission.h2}
        </h2>
        <h3>
          {data.mission.h3}
        </h3>
        <div className="mission-moon">
          <img src={moon} />
        </div>
      </section>

      <section className="history" id="history">
        <div className="history-icon" />
        <p>{data.history.p}</p>
        <h2>{data.history.h2}</h2>
        <h3>{data.history.h3}</h3>
        <div className="history-calendar">
          <img src={calendar} />
        </div>
      </section>

      {/* <section className="friends" id="friends">
        <div className="friends-icon"></div>
        <p></p>
        <h2>这些机构给予了我们支持</h2>
      </section> */}

      <section className="joinus" id="joinus">
        <div className="joinus-icon"></div>
        <p>{data.joinus.p}</p>
        <h2>{data.joinus.h2}</h2>
        <h3>
          {data.joinus.h3}
        </h3>
        <button className="button">{data.joinus.button}</button>
      </section>
    </section>
  );
};

export default AboutUs;
