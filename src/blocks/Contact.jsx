import React from "react";

import "./Contact.scss";

const Contact = ({ data }) => {
  // const {
  //   company,
  //   company_list,
  //   contact,
  //   contact_list,
  //   product,
  //   product_list,
  // } = data;
  return (
    <>
      <section className="wrapper contact-wrapper">
        <div className="inner-container contact">
          <p className="gradient">{data.footer && data.footer.contactLeading}</p>
          <a className="contact-button rect-button" href="http://megawise-apply-2019.mikecrm.com/CQ2YcFR">
            {data.footer && data.footer.contactButton}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
