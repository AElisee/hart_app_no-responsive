import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li id="categories">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            Categories <i className="fa-solid fa-chevron-down"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span id="teachable">teachable </span>
            <span id="discovery">Discovery</span>
          </NavLink>
        </li>
        <li id="log-in">
          <NavLink to="/">Log in</NavLink>
        </li>
        <li id="subscribe">
          <NavLink to="/">Subscribe</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
