import React from 'react';
import MenuItemsStyle from './styles/MenuItemsStyles';
import { withRouter } from 'react-router-dom';

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(path) {
    this.props.history.push(path);
    this.props.onClick();
  }
  render() {
    return(
      <MenuItemsStyle>
        <ul>
          <li onClick={() => this.clickHandler('/')} className="home"><span id="home">HOME</span></li>
          <li onClick={() => this.clickHandler('/about')} className="about"><a href="/about"><span id="about">ABOUT</span></a></li>
          <li onClick={() => this.clickHandler('/projects')} className="projects"><a href="/projects"><span id="projects">PROJECTS</span></a></li>
          <li onClick={() => this.clickHandler('/contact')} className="contact"><a href="/contact"><span id="contact">CONTACT</span></a></li>
        </ul>
      </MenuItemsStyle>
    );
  }
}

export default withRouter(MenuItems);