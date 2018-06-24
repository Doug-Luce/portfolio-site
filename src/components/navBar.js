import React from 'react';
import NavStyles from './styles/NavStyles';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';
import Hamburger from './Hamburger';
import Menu from './Menu';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    console.log('clicked');
  };

  render() {
    return (
      <NavStyles>
        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <NavLinks />
        <ChatButton />
        <Hamburger toggle={this.state.toggle} onClick={this.handleClick} />
        {this.state.toggle ? <Menu /> : <Menu open="true" />}
      </NavStyles>
    );
  }
};

export default NavBar;




