import React, { useState } from "react";
import LocalizeLink from "../components/localizedLink";
import Search from "./Search";
import logo from "../images/logo.svg"; // Tell Webpack this JS file uses this image
import { globalHistory } from "@reach/router";

import "./Nav.scss";

const Nav = ({ data, locale, nav = {}, subNav = <></>, className }) => {
  const [open, setOpen] = useState(false);
  const isZilliz =
    ["/", "index", "megawise", "infini"].indexOf(nav.current) !== -1 && open;

  const showSubNav =
    !open && nav.current !== "doc" && nav.current !== "aboutus";
  const l = locale === "cn" ? "en" : "cn";
  let to = globalHistory.location.pathname
    .replace("/en/", "/")
    .replace("/cn/", "/");

  return (
    <>
      <nav className={`wrapper nav-wrapper ${className}`}>
        <div className="inner-container nav">
          <div className="left">
            <LocalizeLink locale={locale} to="/" className="logo">
              <img src={logo} alt="logo" />
            </LocalizeLink>

            <ul className={`nav-links ${open ? "show" : "hide"}`}>
              {isZilliz && <li>ZILLIZ Analytics</li>}
              {open && subNav}
              {!isZilliz && (
                <li className="root">
                  <LocalizeLink
                    className={nav.current === "index" ? "current" : ""}
                    locale={locale}
                    to="/"
                  >
                    {open ? `ZILLIZ Analytics` : data.analytics}
                  </LocalizeLink>
                </li>
              )}
              <li className="root">
                <a
                  href="http://milvus.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.milvus}
                </a>
              </li>
              <li className="root">
                <LocalizeLink
                  className={nav.current === "aboutus" ? "current" : ""}
                  locale={locale}
                  to="/aboutus"
                  target="_blank"
                >
                  {data.aboutus}
                </LocalizeLink>
              </li>
              <li className="root">
                <a
                  href="https://zilliz.gllue.com/portal/zilliz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.joinus}
                </a>
              </li>
              {open && (
                <li className="root">
                  <LocalizeLink
                    className={`${
                      nav.current === "doc" ? "current" : ""
                    } right`}
                    locale={locale}
                    to="/docs/analytics_overview"
                    target="_blank"
                  >
                    {data.doc}
                  </LocalizeLink>
                </li>
              )}
            </ul>
          </div>
          <div className="rightMenu">
            <Search></Search>

            <LocalizeLink className="locale" locale={l} to={to}>
              {locale === "cn" ? "EN" : "中"}
            </LocalizeLink>

            <a
              href="#!"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
            </a>
          </div>

          <div className="right">
            <Search></Search>
            <LocalizeLink className="locale" locale={l} to={to}>
              {locale === "cn" ? "EN" : "中"}
            </LocalizeLink>
            <LocalizeLink
              className={`${nav.current === "doc" ? "current" : ""} `}
              locale={locale}
              to="/docs/analytics_overview"
              target="_blank"
            >
              {data.doc}
            </LocalizeLink>
          </div>
        </div>
      </nav>
      {showSubNav && (
        <nav className="wrapper sub-nav-wrapper">
          <div className="inner-container sub-nav">
            <ul> {subNav}</ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
