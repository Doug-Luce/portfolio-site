import React from 'react'
import imageLocations from '../imageLocations'

export const SocialButtons = (props) => {
  const {
    githubIcon,
    githubCreamIcon,
    linkedinIcon,
    linkedinCreamIcon,
    facebookIcon,
    facebookCreamIcon
  } = imageLocations
  if (!props.secondary) {
    return (
      <ul className="social-buttons">
        <li><a href="https://github.com/doug-luce"><img alt="github icon" src={githubIcon} /></a></li>
        <li><a href="https://www.linkedin.com/in/douglasluce/"><img alt="linkedin icon" src={linkedinIcon} /></a></li>
        <li><a href="https://www.facebook.com/luce.douglas"><img alt="facebook icon" src={facebookIcon} /></a></li>
      </ul>
    )
  } else {
    return (
      <ul className="social-buttons social-buttons-contact">
        <li><a href="https://github.com/doug-luce"><img alt="github icon" src={githubCreamIcon} /></a></li>
        <li><a href="https://www.linkedin.com/in/douglasluce/"><img alt="linkedin icon" src={linkedinCreamIcon} /></a></li>
        <li><a href="https://www.facebook.com/luce.douglas"><img alt="facebook icon" src={facebookCreamIcon} /></a></li>
      </ul>
    )
  }
}

export default SocialButtons
