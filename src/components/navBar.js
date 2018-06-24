import React from 'react';
import NavStyles from './styles/NavStyled';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';
import Hamburger from './Hamburger';
import Menu from './styles/MenuStyled';
import MenuItems from './MenuItems';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.handleClick = this.handleClick.bind(this);
  }

  // Turns off and on the hamburger menu.
  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };
// TODO Add a way to close the menu if the screen width gets bigger than 768 pixels
  render() {
    return (
      <NavStyles>

        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <NavLinks />
        <ChatButton />
        {/* Pass the Hamburger component the toggle state and the click handler */}
        <Hamburger toggle={this.state.toggle} onClick={this.handleClick} />
        {this.state.toggle ? <Menu /> : <Menu open="true"><MenuItems /></Menu>}
      </NavStyles>
    );
  }
};

export default NavBar;




