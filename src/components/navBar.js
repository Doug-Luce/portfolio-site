import React from 'react';
import NavStyles from './styles/NavStyles';
import NavLinks from './NavLinks';
import ChatButton from './ChatButton';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    return (
      this.state.toggle ? <img onClick={this.handleClick} alt="hamburger menu icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" /> : <img onClick={this.handleClick} alt="close menu icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1529821228/close_k83kph.svg" />
    );
  }
};

class NavBar extends React.Component {
  render() {
    return (
      <NavStyles>
        <h4><a id="logo" href="/">Douglas Luce <br />Software Developer</a></h4>
          <NavLinks />
        <ChatButton />
        <Hamburger />
      </NavStyles>
    );
  }
};

export default NavBar;




