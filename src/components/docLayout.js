import React from "react";
import Nav from "../blocks/Nav";
import Menu from "../blocks/Menu";
import Contact from "../blocks/Contact";
import Footer from "../blocks/Footer";

import "./docLayout.scss";

export default props => {
  const {
    data,
    children,
    locale,
    nav,
    subNav,
    menuList,
    id,
    versions,
    version,
    wrapperClass = "doc-wrapper",
  } = props;
  const { header, footer } = data;
  return (
    <div>
      <Nav nav={nav} data={header} locale={locale} subNav={subNav} />
      <main className={wrapperClass}>
        <Menu
          menuList={menuList}
          versions={versions}
          activeDoc={id}
          version={version}
          locale={locale}
        ></Menu>
        <div className="inner-container">{children}</div>
      </main>
      <Contact data={data} locale={locale} />
      <Footer data={footer} locale={locale} />
    </div>
  );
};
