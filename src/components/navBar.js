import React from 'react';
import NavStyles from './styles/NavStyles';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';
import Hamburger from './Hamburger';
import Menu from './styles/MenuStyles';
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
  render() {
    let menu;
    if(!this.state.toggle) {
      menu = <Menu toggle={!this.state.toggle}><MenuItems onClick={this.handleClick} /></Menu>;
      // Prevents scrolling while the menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      document.body.style.position = 'fixed';
    } else {
      menu = '';
      // Allows scrolling again once the menu is closed.
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
      document.body.style.height = 'auto';
      document.body.style.width = 'auto';
      document.body.style.position = 'static';
    }
    return (
      <NavStyles>
        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <NavLinks />
        <ChatButton />
        {/* Pass the Hamburger component the toggle state and the click handler */}
        <Hamburger toggle={this.state.toggle} onClick={this.handleClick} />
        {/* This will conditionally render the slideout menu based on the toggle */}
        {menu}
      </NavStyles>
    );
  }
};

export default NavBar;




