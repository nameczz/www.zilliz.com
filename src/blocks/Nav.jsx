import React from "react";
import LocalizeLink from "../components/localizedLink";
import logo from "../images/logo.svg"; // Tell Webpack this JS file uses this image
import "./Nav.scss";
const Current = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.96447"
      y="9.32837"
      width="4"
      height="4"
      transform="rotate(-135 2.96447 9.32837)"
      fill="#4FC4F9"
    />
    <rect
      x="6.5"
      y="5.79272"
      width="4"
      height="4"
      transform="rotate(-135 6.5 5.79272)"
      fill="#4FC4F9"
    />
    <rect
      x="6.5"
      y="12.864"
      width="4"
      height="4"
      transform="rotate(-135 6.5 12.864)"
      fill="#4FC4F9"
    />
    <rect
      x="10.0355"
      y="9.32837"
      width="4"
      height="4"
      transform="rotate(-135 10.0355 9.32837)"
      fill="#4FC4F9"
    />
  </svg>
);
const Nav = ({ data, locale, nav = {}, subNav = <></> }) => {
  return (
    <>
      <nav className="wrapper nav">
        <div className="left">
          <LocalizeLink locale={locale} to="/" className="logo">
            <img src={logo} alt="logo" />
          </LocalizeLink>
          <ul className="nav-links">
            <li>
              {nav.current === "index" && <Current />}
              <LocalizeLink
                className={nav.current === "index" ? "current" : ""}
                locale={locale}
                to="/"
              >
                产品
              </LocalizeLink>
            </li>
            <li>
              {nav.current === "aboutus" && <Current />}
              <LocalizeLink
                className={nav.current === "aboutus" ? "current" : ""}
                locale={locale}
                to="/aboutus"
                target="_blank"
              >
                关于我们
              </LocalizeLink>
            </li>
            <li>
              {nav.current === "joinUs" && <Current />}
              <a href="https://zilliz.gllue.com/portal/zilliz">加入我们</a>
            </li>
          </ul>
        </div>
        <a
          className="right"
          href="http://infini-analytics.github.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          文档
        </a>
      </nav>
      {subNav}
    </>
  );
};

export default Nav;
