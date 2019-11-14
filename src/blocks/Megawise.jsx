import React from "react";
import f1 from "../images/megawise_img_a.png";
import f2 from "../images/megawise_img_b.png";
import f3 from "../images/megawise_img_c.png";
import f4 from "../images/megawise_img_d.png";
import MW_logo from "../images/logo-MW.png"
import LocalizeLink from "../components/localizedLink";
import Comparison from "../components/Comparison"

import "./Megawise.scss";

const Megawise = ({ data, locale }) => {
  const { landing, features } = data;
  console.log(features)
  return (
    <section className={`megawise section ${locale}`}>
      <section className="landing">
        <img src={MW_logo} alt="MW_logo" />
        <h4>{landing.h4}</h4>
        <p>{landing.p}</p>
        <LocalizeLink
          className="button primary-button"
          locale={locale}
          to="/docs/megawise_intro"
        >
          {landing.readMore}
        </LocalizeLink>
      </section>

      <section className="features">
        <h3>{features.h3}</h3>
        <ul className="item-list2">
          <li>
            <img src={f1} alt={features.f1.h4} />
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f1.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f1.p }}></p>
            </div>
          </li>
          <li>
            <img src={f2} alt={features.f2.h4} />
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f2.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f2.p }}></p>
            </div>
          </li>
          <li>
            <img src={f3} alt={features.f3.h4} />
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f3.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f3.p }}></p>
            </div>
          </li>

          <li>
            <img src={f4} alt={features.f4.h4} />
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: features.f4.h4 }}></h4>
              <p dangerouslySetInnerHTML={{ __html: features.f4.p }}></p>
            </div>
          </li>
        </ul>
        <p className="learnMore">{features.learnMore}</p>
        <LocalizeLink
          className="button"
          locale={locale}
          to="/docs/analytics_overview"
        >
          {features.viewDoc}
        </LocalizeLink>
      </section>
      <section>
        <Comparison
          title={features.comparison}
          products={[
            { label: `MegaWise -> 1 node/48 cores/4 GPU/512G Mem/1TB SSD`, performance: 0.01 },
            { label: `Redshift -> 6 nodes/192 cores/0 GPU/1464G Mem/15.4TB SSD`, performance: 1.56 },
            { label: `Spark 2.4 -> 21 nodes/84 cores/0 GPU/315G Mem/1.7TB SSD`, performance: 2.36 },
            { label: `Presto 0.214 -> 21 nodes/84 cores/0 GPU/315G Mem/1.7TB SSD`, performance: 3.54 }
          ]}
          reviseMultiple={true}
        />
      </section>
    </section>
  );
};

export default Megawise;
