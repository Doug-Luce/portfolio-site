import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const NavLinks = () => {
  return (
  <Router>
    <ul>
        <li>
          HOME
        </li>
        <li>
          ABOUT
        </li>
        <li>
          PROJECTS
        </li>
        <li>
          CONTACT
        </li>
    </ul>
  </Router>
  );
};

export default NavLinks;