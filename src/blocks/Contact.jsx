import React from "react";

import "./Contact.scss";

const Contact = ({data}) => {
  console.log(data)
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
      <section className="wrapper contact">
      <p>{data.footer.contactLeading}</p>
      <a className="contact-button" href="#!">{data.footer.contactButton}</a>
      </section>
    </>
  );
};

export default Contact;
