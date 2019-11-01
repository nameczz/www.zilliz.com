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
          <p>{data.footer.contactLeading}</p>
          <a className="contact-button" href="#!">
            {data.footer.contactButton}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
