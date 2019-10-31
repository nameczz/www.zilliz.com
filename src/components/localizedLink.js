import React from "react";
import { Link } from "gatsby";
import locales from "../constants/locales.js";

export default props => {
  const { locale, to, children } = props;
  const language = locales[locale];
  let path;

  !language.default ? (path = `/${locale}${to}`) : (path = to);
  return <Link className={props.className} children={children} to={path} />;
};
