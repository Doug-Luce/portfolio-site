import React from 'react'
import PropTypes from 'prop-types'
import imageLocations from '../imageLocations'

const { hamburgerIcon, closeIcon } = imageLocations

const Hamburger = ({ isSidebarOpen, setSidebarOpen }) => (
  <img
    onClick={setSidebarOpen}
    alt={isSidebarOpen ? 'hamburger menu icon' : 'close menu icon'}
    src={isSidebarOpen ? hamburgerIcon : closeIcon}
  />
)

const { bool, func } = PropTypes

Hamburger.propTypes = {
  isSidebarOpen: bool,
  setSidebarOpen: func
}

export default Hamburger
