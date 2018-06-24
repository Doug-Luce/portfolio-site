import React from 'react';
import NavStyles from './styles/NavStyles';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';

class NavBar extends React.Component {
  render() {
    return (
      <NavStyles>
      <h4>Douglas Luce <br />Software Developer</h4>
      <NavLinks />
      <ChatButton />
      <img src="http://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" />
      </NavStyles>
    );
  }
};

export default NavBar;




