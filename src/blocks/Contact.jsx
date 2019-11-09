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
            className="contact-button rect-button"
            href="http://megawise-apply-2019.mikecrm.com/CQ2YcFR"
          >
            {data.footer && data.footer.contactButton}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
