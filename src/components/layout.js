import React from "react";
import Nav from "../blocks/Nav";
import Contact from "../blocks/Contact";
import Footer from "../blocks/Footer";

import "./layout.scss";

export default props => {
  const {
    data,
    children,
    locale,
    nav,
    subNav,
    wrapperClass = "wrapper",
  } = props;
  const { header, footer } = data;
  return (
    <div>
      <Nav nav={nav} data={header} locale={locale} subNav={subNav} />
      <main className={wrapperClass}>{children}</main>
      <Contact data={data} locale={locale} />
      <Footer data={footer} locale={locale} />
    </div>
  );
};
