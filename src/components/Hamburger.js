import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ toggle, onClick }) => (
  // conditionally render the hamburger icon or the close icon depending on the state passed in as props.
  toggle ? <img onClick={onClick} alt="hamburger menu icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529802602/hamburger_tfga5b.svg" /> : <img onClick={onClick} alt="close menu icon" src="https://res.cloudinary.com/lucedesign/image/upload/v1529821228/close_k83kph.svg" />
)

const { bool, func } = PropTypes

Hamburger.propTypes = {
  toggle: bool,
  onClick: func
}

export default Hamburger
