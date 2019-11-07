import React from "react";
import Current from "./Current";
import LocalizeLink from "../components/localizedLink";
import "./SubNav.scss";

const SubNav = ({ data, locale, current }) => (
  <nav className="wrapper sub-nav-wrapper">
    <div className="inner-container sub-nav">
      <ul>
        <li>
          {current === "overview" && <Current />}
          <LocalizeLink
            locale={locale}
            to="/"
            className={current === "overview" ? "current" : ""}
          >
            {data.overview}
          </LocalizeLink>
        </li>
        <li>
          {current === "megawise" && <Current />}
          <LocalizeLink
            locale={locale}
            to="/megawise"
            className={current === "megawise" ? "current" : ""}
          >
            MEGAWISE
          </LocalizeLink>
        </li>
        <li>
          {current === "infini" && <Current />}
          <LocalizeLink
            locale={locale}
            to="/infini"
            className={current === "infini" ? "current" : ""}
          >
            INIFNI
          </LocalizeLink>
        </li>
        <li>
          <a href="#!">Live Demo</a>
        </li>
      </ul>
    </div>
  </nav>
);
export default SubNav;
