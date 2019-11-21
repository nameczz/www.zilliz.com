import React from "react";
import Current from "./Current";
import LocalizeLink from "../components/localizedLink";
import "./SubNav.scss";

const SubNav = ({ data, locale, current }) => (
  <>
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
        INFINI
      </LocalizeLink>
    </li>
    {/* <li>
      <a href="#!">Live Demo</a>
    </li> */}
  </>
);
export default SubNav;
