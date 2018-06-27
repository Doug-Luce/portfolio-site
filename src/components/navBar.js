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
    // this.closeMenu = this.closeMenu.bind(this);
  }
  // closeMenu() {
  //   this.setState({toggle: false});
  //   console.log(this.state.toggle);
  // }
  // Turns off and on the hamburger menu.
  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));

  };
  render() {
    return (
      <NavStyles>
        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <NavLinks />
        <ChatButton />
        {/* Pass the Hamburger component the toggle state and the click handler */}
        <Hamburger toggle={this.state.toggle} onClick={this.handleClick} />
        <Menu toggle={!this.state.toggle}><MenuItems onClick={this.handleClick} /></Menu>
      </NavStyles>
    );
  }
};

export default NavBar;




