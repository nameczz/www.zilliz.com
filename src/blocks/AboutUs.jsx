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
        <p>我们的愿景</p>
        <h2>
          重新定义数据科学
        </h2>
        <h3>
          将传统数据分析，数据科学算法以及基于时空数据分析的智能工作流程融合在同一个开放平台。 产品支持原生SQL查询和交互式可视化分析能力，同时具备整合强大的机器学习框架的良好扩展性。
        </h3>
        <div className="mission-moon">
          <img src={moon} />
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-icon" />
        <p>what we do</p>
        <h2>Accelerate The Development of AI</h2>
        <h3>专注于研发面向人工智能的新一代数据处理和分析平台</h3>
        <div className="work-calendar">
          <img src={calendar} />
        </div>
      </section>

      <section className="friends" id="friends">
        <div className="friends-icon"></div>
        <p>我们的合作伙伴</p>
        <h2>这些机构给予了我们支持</h2>
      </section>
      <section className="joinus" id="friends">
        <div className="joinus-icon"></div>
        <p>加入我们</p>
        <h2>ZILLIZ 正在成长，期待你的加入</h2>
        <h3>
          “Be Hero”的团队文化，致力于打造一支精干、战斗力强、勇于创新的队伍，提倡以数据为基础、系统化解决复杂问题的工作方法，鼓励学习，奖励创新。
        </h3>
        <button className="button">查看职位和机会</button>
      </section>
    </section>
  );
};

export default AboutUs;
