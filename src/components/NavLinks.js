import React from 'react';
import { NavLink } from "react-router-dom";

export const NavLinks = () => {
  return (
    <ul>
        <li>
          <NavLink exact={true} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to ="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to ="/contact">CONTACT</NavLink>
        </li>
    </ul>

  );
};

export default NavLinks;