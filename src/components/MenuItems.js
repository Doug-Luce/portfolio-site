import React from 'react';
import * as palette from './color';
import MenuItemsStyle from './styles/MenuItemsStyle';

class MenuItems extends React.Component {
  render() {
    return(
      <MenuItemsStyle>
        <ul>
          <li class="home"><span id="home">HOME</span></li>
          <li class="about"><span id="about">ABOUT</span></li>
          <li class="projects"><span id="projects">PROJECTS</span></li>
          <li class="contact"><span id="contact">CONTACT</span></li>
        </ul>
      </MenuItemsStyle>
    );
  }
}

export default MenuItems;