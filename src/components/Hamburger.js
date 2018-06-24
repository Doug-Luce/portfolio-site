import React from 'react';

class Hamburger extends React.Component {
  render() {
    return (
      this.props.toggle ? <img onClick={this.props.onClick} alt="hamburger menu icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" /> : <img onClick={this.props.onClick} alt="close menu icon" src="http://res.cloudinary.com/lucedesign/image/upload/v1529821228/close_k83kph.svg" />
    );
  }
}

export default Hamburger;