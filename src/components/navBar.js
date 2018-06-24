import React from 'react';
import NavStyles from './styles/NavStyles';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <NavStyles>
        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <Router>
            <NavLinks />
          </Router>
        <ChatButton />
        <img src="http://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" />
      </NavStyles>
    );
  }
};

export default NavBar;




