import React from 'react';
import GradientRule from './GradientRule';
import SocialButtons from './SocialButtons';
import SocialStyles from './styles/SocialStyles';
import FooterStyle from './styles/FooterStyle';

const Footer = () => {
  return(
    <FooterStyle>
      <GradientRule width="80%"/>
      <div class="social-icons"><SocialStyles><SocialButtons /></SocialStyles></div>
    </FooterStyle>
  );
};

export default Footer;