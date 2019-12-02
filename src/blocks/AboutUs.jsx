import React from "react";
import logo from "../images/aboutus-logo.png";
import moon from "../images/aboutus-moon.png";
import calendar from "../images/aboutus-roadmap.png";
import "./Aboutus.scss";

const AboutUs = ({ data }) => {
  return (
    <section className="aboutus">
      <section className="landing">
        <img src={logo} alt="logo" />
      </section>
      <section className="mission" id="mission">
        <div className="mission-icon icon"></div>
        <p>{data.mission.p}</p>
        <h2>{data.mission.h2}</h2>
        <div className="mission-pic big-pic">
          <img src={moon} alt="moon" />
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="roadmap-icon icon" />
        <p>{data.roadmap.p}</p>
        <h2>{data.roadmap.h2}</h2>
        <div className="roadmap-calendar big-pic">
          <img src={calendar} alt="roadmap" />
        </div>
      </section>

      <section className="joinus" id="opportunities">
        <div className="joinus-icon icon"></div>
        <p>{data.joinus.p}</p>
        <h2>{data.joinus.h2}</h2>
        <a
          className="button"
          href="https://zilliz.gllue.com/portal/zilliz"
          target="_blank"
        >
          {data.joinus.button}
        </a>
      </section>
    </section>
  );
};

export default AboutUs;
