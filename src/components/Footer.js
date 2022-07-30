import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h3>
        Teachable <span>Discovery</span>
      </h3>
      <ul>
        <li>
          <NavLink to="">Vissit teachable.com</NavLink>
        </li>
        <li>
          <NavLink to="">Contact support</NavLink>
        </li>
        <li>
          <NavLink to="">Privacy policy</NavLink>
        </li>
        <li>
          <NavLink to="">Terms of use</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
