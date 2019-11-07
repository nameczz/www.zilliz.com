import React from "react";
import LocalizeLink from "../components/localizedLink";
import logo from "../images/logo.svg"; // Tell Webpack this JS file uses this image
import "./Nav.scss";

const Nav = ({ data, locale, nav = {}, subNav = <></> }) => {
  return (
    <>
      <nav className="wrapper nav-wrapper">
        <div className="inner-container nav">
          <div className="left">
            <LocalizeLink locale={locale} to="/" className="logo">
              <img src={logo} alt="logo" />
            </LocalizeLink>
            <ul className="nav-links">
              <li>
                <LocalizeLink
                  className={nav.current === "index" ? "current" : ""}
                  locale={locale}
                  to="/"
                >
                  {data.analytics}
                </LocalizeLink>
              </li>
              <li>
                <a
                  href="http://milvus.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.milvus}
                </a>
              </li>
              <li>
                <LocalizeLink
                  className={nav.current === "aboutus" ? "current" : ""}
                  locale={locale}
                  to="/aboutus"
                >
                  {data.aboutus}
                </LocalizeLink>
              </li>
              <li>
                <a
                  href="https://zilliz.gllue.com/portal/zilliz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.joinus}
                </a>
              </li>
            </ul>
          </div>
          <a
            className="right"
            href="http://infini-analytics.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.doc}
          </a>
        </div>
      </nav>
      {subNav}
    </>
  );
};

export default Nav;
