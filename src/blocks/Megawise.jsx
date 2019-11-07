import React from "react";

import "./Megawise.scss";

const Megawise = ({ data, locale }) => {
  const { landing, features } = data;
  return (
    <section className={`megawise section ${locale}`}>
      <section className="landing">
        <h3>{landing.h3}</h3>
        <h4>{landing.h4}</h4>
        <p>{landing.p}</p>
        <a className="button rect-button">{landing.readMore}</a>
      </section>

      <section className="features">
        <h3>{features.h3}</h3>
        <ul className="item-list2">
          <li>
            <img src="#" />
            <h4 dangerouslySetInnerHTML={{ __html: features.f1.h4 }}></h4>
            <p dangerouslySetInnerHTML={{ __html: features.f1.p }}></p>
          </li>
          <li>
            <img src="#" />
            <h4 dangerouslySetInnerHTML={{ __html: features.f2.h4 }}></h4>
            <p dangerouslySetInnerHTML={{ __html: features.f2.p }}></p>
          </li>
          <li>
            <img src="#" />
            <h4 dangerouslySetInnerHTML={{ __html: features.f3.h4 }}></h4>
            <p dangerouslySetInnerHTML={{ __html: features.f3.p }}></p>
          </li>

          <li>
            <img src="#" />
            <h4 dangerouslySetInnerHTML={{ __html: features.f4.h4 }}></h4>
            <p dangerouslySetInnerHTML={{ __html: features.f4.p }}></p>
          </li>
        </ul>
        <h3>{features.learnMore}</h3>
        <a className="button rect-button transparent-button">
          {features.viewDoc}
        </a>
      </section>
    </section>
  );
};

export default Megawise;
