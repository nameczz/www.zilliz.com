import React from "react";
import f1 from '../images/megawise_img_a.png';
import f2 from '../images/megawise_img_b.png';
import f3 from '../images/megawise_img_c.png';
import f4 from '../images/megawise_img_d.png';
import Comparison from "../components/Comparison"
import "./Megawise.scss";

const Megawise = ({ data, locale }) => {
  const { landing, features } = data;
  return (
    <section className={`megawise section ${locale}`}>
      <section className="landing">
        <h3>{landing.h3}</h3>
        <h4>{landing.h4}</h4>
        <p>{landing.p}</p>
        <a href="/docs" className="button rect-button">{landing.readMore}</a>
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
        <h3 className="learnMore">{features.learnMore}</h3>
        <a href="/docs" className="button rect-button transparent-button">
          {features.viewDoc}
        </a>
      </section>
      <section>
        <Comparison
          title={'性能对比'}
          products={[
            { name: 'MegaWise', label: `node: 1`, performance: 0.01 },
            { name: 'Redshift', label: `node: 6`, performance: 1.56 },
            { name: "Spark 2.4", label: `node: 21`, performance: 2.36 },
            { name: "Presto 0.214", label: `node: 21`, performance: 3.54 }
          ]}
          reviseMultiple={true}
        />
      </section>
    </section>
  );
};

export default Megawise;
