import React, { useState } from "react";
import f1 from "../images/icon-feature-1.png";
import f2 from "../images/icon-feature-2.png";
import f3 from "../images/icon-feature-3.png";
import s1 from "../images/icon-solution-1.png";
import s2 from "../images/icon-solution-2.png";
import s3 from "../images/icon-solution-3.png";
import cn from "../images/horizontal-cn.png";
import en from "../images/horizontal-en.png";
import ZA_logo from "../images/logo-ZA.png";

import LocalizeLink from "../components/localizedLink";
import "./Infini.scss";

const Infini = ({ data, locale }) => {
  const [solutionTab, setSolutionTab] = useState(0);
  const onTabClick = tab => {
    setSolutionTab(tab);
  };

  return (
    <section className={`infini section ${locale}`}>
      <section className="landing">
        <img src={ZA_logo} alt="ZA_logo"></img>
        <h4>{data.landing.h4}</h4>
        <p>{data.landing.leading}</p>
        <div className="button-area">
          <LocalizeLink
            className="button buttonMega"
            locale={locale}
            to="/docs/analytics_overview"
          >
            {data.landing.buttonMega}
          </LocalizeLink>
        </div>
      </section>

      <section className="features" id="features">
        <h2 dangerouslySetInnerHTML={{ __html: data.features.h2 }} />
        <h3>{data.features.h3}</h3>
        <ul className="item-list">
          <li>
            <img src={f1} alt={data.features.f1Title} />
            <h4>{data.features.f1Title}</h4>
            <p>{data.features.f1P}</p>
          </li>

          <li>
            <img src={f2} alt={data.features.f2Title} />
            <h4>{data.features.f2Title}</h4>
            <p>{data.features.f2P}</p>
          </li>

          <li>
            <img src={f3} alt={data.features.f3Title} />
            <h4>{data.features.f3Title}</h4>
            <p>{data.features.f3P}</p>
          </li>
        </ul>
      </section>

      <section className="arch" id="arch">
        <h3>{data.arch.h3}</h3>
        <div className="content">
          <img
            width="100%"
            src={locale === "cn" ? cn : en}
            alt={data.arch.h3}
          />
        </div>
      </section>

      <section className="solution" id="solution">
        <h3>{data.solution.h3}</h3>
        {/* <p className="leading">{data.solution.leading}</p> */}

        <ul className="tab">
          <li
            className={solutionTab === 0 ? "current" : ""}
            onClick={() => {
              onTabClick(0);
            }}
          >
            {data.solution.tab1}
          </li>
          <li
            className={solutionTab === 1 ? "current" : ""}
            onClick={() => {
              onTabClick(1);
            }}
          >
            {data.solution.tab2}
          </li>
        </ul>
        {solutionTab === 0 && (
          <ul className="tab-content item-list">
            <li>
              <img src={s1} alt={data.solution.question} />
              <h5>{data.solution.question}</h5>
              <p>{data.solution.q1}</p>
            </li>
            <li>
              <img src={s2} alt={data.solution.solution} />
              <h5>{data.solution.solution}</h5>
              <p>{data.solution.s1}</p>
              <a href="https://github.com/zilliztech/Infini-Analytics.github.io/blob/master/whitepaper_pdf/ZILLIZ%20Analytics_logistics_whitepaper.pdf">
                {data.solution.detail}
              </a>
            </li>
            <li>
              <img src={s3} alt={data.solution.effect} />
              <h5>{data.solution.effect}</h5>
              <ul>
                <li>{data.solution.el1_1}</li>
                <li>{data.solution.el1_2}</li>
                <li>{data.solution.el1_3}</li>
                <li>{data.solution.el1_4}</li>
                <li>{data.solution.el1_5}</li>
              </ul>
            </li>
          </ul>
        )}
        {solutionTab === 1 && (
          <ul className="tab-content item-list">
            <li>
              <img src={s1} alt={data.solution.question} />
              <h5>{data.solution.question}</h5>
              <p>{data.solution.q2}</p>
            </li>
            <li>
              <img src={s2} alt={data.solution.solution} />
              <h5>{data.solution.solution}</h5>
              <p>{data.solution.s2}</p>
              <a href="https://github.com/zilliztech/Infini-Analytics.github.io/blob/master/whitepaper_pdf/ZILLIZ%20Analytics_telco_whitepaper.pdf">
                {data.solution.detail}
              </a>
            </li>
            <li>
              <img src={s3} alt={data.solution.effect} />
              <h5>{data.solution.effect}</h5>
              <ul>
                <li>{data.solution.el2_1}</li>
                <li>{data.solution.el2_2}</li>
                <li>{data.solution.el2_3}</li>
              </ul>
            </li>
          </ul>
        )}
      </section>
    </section>
  );
};

export default Infini;
