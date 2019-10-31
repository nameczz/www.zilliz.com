import React from "react";
import moon from "../images/aboutus-moon.png"
import calendar from "../images/aboutus-calendar.png"
import logo from "../images/aboutus-logo.png"
import "./Aboutus.scss";

const AboutUs = ({ data, locale }) => {
  return (
    <section className="aboutus">
      <section className="landing" id="">
        <img src={logo} />
      </section>
      <section className="mission" id="mission">
        <div className="mission-icon" />
        <h3>
          重新定义数据科学
        </h3>
        <h4 class>
          将传统数据分析，数据科学算法以及基于时空数据分析的智能工作流程融合在同一个开放平台。 产品支持原生SQL查询和交互式可视化分析能力，同时具备整合强大的机器学习框架的良好扩展性。
        </h4>
        <div className="mission-moon">
          <img src={moon} />
        </div>
      </section>
      <section className="work" id="work">
        <div className="work-icon" />
        <h2>
          Accelerate The Development of AI
        </h2>
        <h3>专注于研发面向人工智能的新一代数据处理和分析平台</h3>
        <div className="work-calendar">
          <img src={calendar} />
        </div>
      </section>
      <section className="friends" id="friends">
        <div className="friends-icon"></div>
        <h1>这些机构给予了我们支持</h1>
      </section>
      <section className="joinus" id="friends">
        <div className="joinus-icon"></div>
        <h1>ZILLIZ 正在成长，期待你的加入</h1>
        <h2>
          “Be Hero”的团队文化，致力于打造一支精干、战斗力强、勇于创新的队伍，提倡以数据为基础、系统化解决复杂问题的工作方法，鼓励学习，奖励创新。
        </h2>
        <button>查看职位和机会</button>
      </section>
    </section>
  );
};

export default AboutUs;
