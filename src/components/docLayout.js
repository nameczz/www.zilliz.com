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
    headings,
    wrapperClass = "doc-wrapper",
  } = props;
  const { header, footer } = data;
  const formatHeadings =
    headings &&
    headings.reduce((pre, cur) => {
      if (cur.depth === 2) {
        const copyCur = JSON.parse(JSON.stringify(cur));
        copyCur.children = [];
        pre = [...pre, copyCur];
      } else {
        pre[pre.length - 1].children.push(cur);
      }
      return pre;
    }, []);
  const hash = window.location.hash.slice(1);

  const generateAnchorMenu = (headings, className) => {
    return headings.map(v => {
      const normalVal = v.value.replace(/[\,\/]/g, "");
      console.log(normalVal);
      const anchor = normalVal.split(" ").join("-");
      let childDom = null;
      if (v.children && v.children.length) {
        childDom = generateAnchorMenu(v.children, "child-item");
      }
      return (
        <div className={`item ${className}`} key={v.value}>
          <a href={`#${anchor}`} className={anchor === hash ? "active" : ""}>
            {v.value}
          </a>
          {childDom}
        </div>
      );
    });
  };

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
        {formatHeadings && (
          <div className="anchor-wrapper">
            {generateAnchorMenu(formatHeadings, "parent-item")}
          </div>
        )}
        <Footer data={footer} locale={locale} />
      </main>

      {/* <Contact data={data} locale={locale} /> */}
    </div>
  );
};
