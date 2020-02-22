import styled from 'styled-components'
import * as palette from '../components/color.js'
import SocialButtons from './SocialButtons'
import SocialStyles from './styles/SocialStyles'
import { H2, H3 } from './typography'
import React from 'react'

const Bio = styled.div`
h2, h3 {
  color: ${palette.lightCream};
  padding-left: 2rem;
}

h2 {
  padding-top: 1rem;
}

`
const ContactInfo = styled.div`
  a {
    color: ${palette.lightCream};
    display: flex;
    font-family:  Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    padding: 0 0 2rem 2rem;
  }
`
const Img = styled.img`
  width: 100%;
  height: auto;
`
const Section = styled.section`
  background-color: ${palette.mediumBlue};
  box-shadow: 4px 4px 7px 0px #F88D35;
  width: 20rem;
`

class ContactCard extends React.Component {
  render () {
    return (
      <Section className="animated fadeIn">
        <Img src="https://res.cloudinary.com/lucedesign/image/upload/c_scale,q_auto:good,w_400/v1553559110/rsz_dl-hs-05_fabyuj.jpg"/>
        <Bio>
          <H2>Doug Luce</H2>
          <H3>Dad, husband, Software Developer, and all around nice guy.
          </H3>
        </Bio>
        <SocialStyles secondary><SocialButtons secondary/></SocialStyles>
        <ContactInfo>
          <a href="mailto:luce.douglas@gmail.com">luce.douglas@gmail.com</a>
          <a href="tel:1-360-513-8325">360.513.8325</a>
        </ContactInfo>
      </Section>
    )
  }
}

export default ContactCard
