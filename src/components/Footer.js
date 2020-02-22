import React from 'react'
import GradientRule from './GradientRule'
import SocialButtons from './SocialButtons'
import SocialStyles from './styles/SocialStyles'
import FooterStyles from './styles/FooterStyles'

const Footer = () => {
  return (
    <FooterStyles>
      <GradientRule width="80%"/>
      <div className="social-icons"><SocialStyles><SocialButtons /></SocialStyles></div>
    </FooterStyles>
  )
}

export default Footer
