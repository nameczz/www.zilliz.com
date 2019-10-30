import React from "react";
import Nav from "../blocks/Nav";
import Footer from "../blocks/Footer";

import "./layout.scss";

export default props => {
  const { data, children, locale } = props;
  const { header, footer } = data;
  return (
    <div>
      <Nav data={header} locale={locale} />
      <main className="wrapper">{children}</main>
      <Footer data={footer} locale={locale} />
    </div>
  );
};
