import React from 'react'
import { NavLink } from 'react-router-dom'

// Renders the NavLinks component in the NavBar.
// exact={true} is to match the root path exactly to get
// the active class.

export const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact={true} to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to ="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      <li>
        <NavLink to ="/contact">CONTACT</NavLink>
      </li>
    </ul>

  )
}

export default NavLinks
