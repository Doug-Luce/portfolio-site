import styled from 'styled-components';
import * as palette from '../components/color.js';
import SocialButtons from './SocialButtons';
import SocialStyles from './styles/SocialStyles';
import { H1, H2, H3, P } from './typography';
import React from 'react';

const Bio = styled.div`
h2, h3 {
  color: ${ palette.lightCream };
}
  
`;
const ContactInfo = styled.div`
  a[href^="tel:"]:before {
  content: "\\260e";
  margin-right: 0.5em;
}
`;
const Img = styled.img`
  width: 100%;
  height: auto; */
`;
const Section = styled.section`
  background-color: ${palette.mediumBlue};
  box-shadow: 4px 4px 7px 0px #F88D35;
  height: 45rem;
  width: 20rem;
`;

class ContactCard extends React.Component {
  render() {
    return (
      <Section>
        <Img src="http://res.cloudinary.com/lucedesign/image/upload/v1530120006/dougs_at_disney_uw4sdn.jpg"/>
        <Bio>
          <H2>Doug Luce</H2>
          <H3>Father, husband, Software Developer, all around good guy.</H3>
        </Bio>
        <SocialStyles secondary><SocialButtons secondary/></SocialStyles>
        <ContactInfo>
          <a href="mailto:someone@yoursite.com">Luce.douglas@gmail.com</a>
          <a href="tel:1-360-513-8325">360.513.8325</a>
        </ContactInfo>
      </Section>
    );
  }
}

export default ContactCard;