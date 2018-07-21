import React from 'react';

class Hamburger extends React.Component {
  render() {
    return (
      // conditionally render the hamburger icon or the close icon depending on the state passed in as props.
      this.props.toggle ? <img onClick={this.props.onClick} alt="hamburger menu icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" /> : <img onClick={this.props.onClick} alt="close menu icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529821228/close_k83kph.svg" />
    );
  }
}

export default Hamburger;