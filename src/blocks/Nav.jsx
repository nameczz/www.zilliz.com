import React from "react";
import LocalizeLink from "../components/localizedLink";
import logo from "../images/logo.svg"; // Tell Webpack this JS file uses this image
import "./Nav.scss";

const Nav = ({ data, locale }) => {
  return (
    <nav className="nav wrapper">
      <div className="left">
      <LocalizeLink locale={locale} to="/" className="logo">
        <img src={logo} alt="logo" />
      </LocalizeLink>
      <ul className="nav-links">
        <li>
          <LocalizeLink className="current" locale={locale} to="/">
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
            产品
          </LocalizeLink>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.google.com"
          >
            加入我们
          </a>
        </li>
      </ul>
      </div>
      <LocalizeLink locale={locale} to="/page" className="right">
        Doc
      </LocalizeLink>
    </nav>
  );
};

export default Nav;
