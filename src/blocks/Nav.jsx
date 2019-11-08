import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const isZilliz = ['/', 'index', 'megawise', 'infini'].indexOf(nav.current) !== -1 && open;

  return (
    <>
      <nav className="wrapper nav-wrapper">
        <div className="inner-container nav">
          <div className="left">
            <LocalizeLink locale={locale} to="/" className="logo">
              <img src={logo} alt="logo" />
            </LocalizeLink>

            <ul className={`nav-links ${open ? "show" : "hide"}`}>
              {isZilliz && <li>ZILLIZ Analaytics</li>}
              {open && subNav}
              {!isZilliz && <li className="root">
                <LocalizeLink
                  className={nav.current === "index" ? "current" : ""}
                  locale={locale}
                  to="/"
                >
                  {open ? `ZILLIZ Analaytics` : data.analytics}
                </LocalizeLink>
              </li>}
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
                <li>
                  <a
                    className="right"
                    href="http://infini-analytics.github.io/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {data.doc}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <a
            className="rightMenu"
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
      {!open && (
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
