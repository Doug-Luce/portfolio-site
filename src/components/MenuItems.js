import React from 'react';
import * as palette from './color';
import MenuItemsStyle from './styles/MenuItemsStyle';

class MenuItems extends React.Component {
  render() {
    return(
      <MenuItemsStyle>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </MenuItemsStyle>
    );
  }
}

export default MenuItems;