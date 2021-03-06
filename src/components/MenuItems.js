import React from 'react'
import MenuItemsStyle from './styles/MenuItemsStyles'
import { withRouter } from 'react-router-dom'

const MenuItems = () => (
  <MenuItemsStyle>
    <ul>
      <li className="home"><a href="/"><span id="home">HOME</span></a></li>
      <li className="about"><a href="/about"><span id="about">ABOUT</span></a></li>
      <li className="projects"><a href="/projects"><span id="projects">PROJECTS</span></a></li>
      <li className="contact"><a href="/contact"><span id="contact">CONTACT</span></a></li>
    </ul>
  </MenuItemsStyle>
)

export default withRouter(MenuItems)
