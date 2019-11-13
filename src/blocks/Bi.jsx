import React from "react";
import f1 from "../images/infini_img_1.png";
import f2 from "../images/infini_img_2.png";
import f3 from "../images/infini_img_3.png";
import f4 from "../images/infini_img_4.png";

import "./bi.scss";

const Bi = ({ data, locale }) => {
  const { landing, features } = data;
  return (
    <section className={`bi section ${locale}`}>
      <section className="landing">
        <h3>{landing.h3}</h3>
        <h4>{landing.h4}</h4>
        <p>{landing.p}</p>
        <a href="/docs" className="button rect-button">
          {landing.readMore}
        </a>
      </section>

      <section className="features">
        {/* <h3>{features.h3}</h3> */}
        <ul className="item-list2">
          <li>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f1.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f1.p }}></p>
            </div>
            <img src={f1} alt={features.f1.h4} />
          </li>
          <li>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f2.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f2.p }}></p>
            </div>
            <img src={f2} alt={features.f2.h4} />
          </li>
          <li>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f3.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f3.p }}></p>
            </div>
            <img src={f3} alt={features.f3.h4} />
          </li>

          <li>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f4.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f4.p }}></p>
            </div>
            <img src={f4} alt={features.f4.h4} />
          </li>
        </ul>
        <h3 className="learnMore">{features.learnMore}</h3>
        <a href="/docs" className="button rect-button transparent-button">
          {features.viewDoc}
        </a>
      </section>
    </section>
  );
};

export default Bi;
