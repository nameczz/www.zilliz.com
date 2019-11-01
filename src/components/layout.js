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
    pageContext,
    wrapperClass = "wrapper",
  } = props;
  const { header, footer } = data;
console.log(pageContext)
  return (
    <div>
      <Nav nav={nav} data={header} locale={locale} subNav={subNav} />
      <main className={wrapperClass}>
        <div className="inner-container">{children}</div>
      </main>
      <Contact data={data} locale={locale} />
      <Footer data={footer} locale={locale} />
    </div>
  );
};
