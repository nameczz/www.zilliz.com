import React from "react";
import "./Contact.scss";

const Contact = ({ data }) => {
  return (
    <>
      <section className="wrapper contact-wrapper">
        <div className="inner-container contact">
          <p className="gradient">
            {data.footer && data.footer.contactLeading}
          </p>
          <a
            className="contact-button primary-button"
            href="http://zilliztech.mikecrm.com/CQ2YcFR"
          >
            {data.footer && data.footer.contactButton}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
