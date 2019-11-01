import React from "react";
import logo from "../images/aboutus-logo.png";
import moon from "../images/aboutus-moon.png"
import calendar from "../images/aboutus-roadmap.png"
import "./Aboutus.scss";

const AboutUs = ({ data }) => {
  return (
    <section className="aboutus">
      <section className="landing">
        <img src={logo} />
      </section>
      <section className="mission" id="mission">
        <div className="mission-icon">
        </div>
        <p>{data.mission.p}</p>
        <h2>
          {data.mission.h2}
        </h2>
        <div className="mission-pic">
          <img src={moon} />
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="roadmap-icon" />
        <p>{data.roadmap.p}</p>
        <h2>{data.roadmap.h2}</h2>
        <div className="roadmap-calendar">
          <img src={calendar} />
        </div>
      </section>

      <section className="joinus" id="joinus">
        <div className="joinus-icon"></div>
        <p>{data.joinus.p}</p>
        <h2>{data.joinus.h2}</h2>
        <button className="button">{data.joinus.button}</button>
      </section>
    </section>
  );
};

export default AboutUs;
