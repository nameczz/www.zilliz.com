import React from "react";
import PropTypes from "prop-types";

const Menu = props => {
  const { menus } = props;
  return (
    <ul className="menu-wrapper">
      {menus.map(v => (
        <li className="menu-item">{}</li>
      ))}
    </ul>
  );
};

export default Menu;
