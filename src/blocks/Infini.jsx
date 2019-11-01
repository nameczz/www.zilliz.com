import React, { useState } from "react";
import f1 from "../images/icon-feature-1.png";
import f2 from "../images/icon-feature-2.png";
import f3 from "../images/icon-feature-3.png";
import s1 from "../images/icon-solution-1.png";
import s2 from "../images/icon-solution-2.png";
import s3 from "../images/icon-solution-3.png";
import structure from "../images/sec-products.png";

import "./Infini.scss";

const Infini = ({ data, locale }) => {
  const [solutionTab, setSolutionTab] = useState(0);
  const onTabClick = tab => {
    setSolutionTab(tab);
  };

  return (
    <section className="infini">
      <section className="landing">
        <h3>{data.landing.h3}</h3>
        <p>{data.landing.leading}</p>
        <a
          rel="noopener noreferrer"
          className="button"
          href="http://infini-analytics.github.io/"
          target="_blank"
        >
          {data.landing.button}
        </a>
      </section>

      <section className="features" id="features">
        <h2>{data.features.h2}</h2>
        <h3>{data.features.h3}</h3>
        <ul>
          <li>
            <img src={f1} width="180" alt={data.features.f1Title} />
            <h4>{data.features.f1Title}</h4>
            <p>{data.features.f1P}</p>
          </li>

          <li>
            <img src={f2} width="180" alt={data.features.f2Title} />
            <h4>{data.features.f2Title}</h4>
            <p>{data.features.f2P}</p>
          </li>

          <li>
            <img src={f3} width="180" alt={data.features.f3Title} />
            <h4>{data.features.f3Title}</h4>
            <p>{data.features.f3P}</p>
          </li>
        </ul>
      </section>

      <section className="arch" id="arch">
        <h3>{data.arch.h3}</h3>
        <div className="content">
          <img src={structure} alt={data.arch.h3} />
        </div>
      </section>

      <section className="solution" id="solution">
        <h3>{data.solution.h3}</h3>
        <p className="leading">{data.solution.leading}</p>

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
          <ul className="tab-content">
            <li>
              <img src={s1} width="180" alt={data.solution.question} />
              <h5>{data.solution.question}</h5>
              <p>{data.solution.q1}</p>
            </li>
            <li>
              <img src={s2} width="180" alt={data.solution.solution} />
              <h5>{data.solution.solution}</h5>
              <p>{data.solution.s1}</p>
              <a href="https://infini-analytics.github.io/#/white_paper_logistics">
                {data.solution.detail}
              </a>
            </li>
            <li>
              <img src={s3} width="180" alt={data.solution.effect} />
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
          <ul className="tab-content">
            <li>
              <img src={s1} width="180" alt={data.solution.question} />
              <h5>{data.solution.question}</h5>
              <p>{data.solution.q2}</p>
            </li>
            <li>
              <img src={s2} width="180" alt={data.solution.solution} />
              <h5>{data.solution.solution}</h5>
              <p>{data.solution.s2}</p>
              <a href="https://infini-analytics.github.io/#/white_paper_telco">
                {data.solution.detail}
              </a>
            </li>
            <li>
              <img src={s3} width="180" alt={data.solution.effect} />
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
