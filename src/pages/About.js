import React from 'react'
import { H2, H3, P } from '../components/typography'
import AboutStyles from './styles/AboutStyles'
import ContactButton from '../components/ContactButton'
import PropTypes from 'prop-types'

const About = ({ history }) => (
  <AboutStyles className="about-page">
    <div className="row top-row">
      <div>
        <H2>Hello, my name is <span>Doug</span>.<br /> I&apos;m a Fullstack Developer<br /> living in Phoenix, Arizona.</H2>
      </div>
      <div className="portrait animated flipInX">
        <img alt="round self portrait of Doug Luce" className="column portrait" src="https://res.cloudinary.com/lucedesign/image/upload/v1529958549/Portrait_nrffzr.png" />
      </div>
    </div>
    <div className="row about">
      <div className="min-width">
        <H3>About:</H3>
      </div>
      <div className="about-p">
        <P>I currently work as a Frontend Developer for KUBRA. I have a voracious thirst for all things
                programming, and love spending time learning new skills, and building new projects.</P>
        <P>Outside of work I enjoy the company of my wife and son. We like to enjoy the outdoors as much as we can, and camp
              often. I can also be found tinkering, making things, perfecting a cup of coffee, gaming, or of course programming.
        </P>
      </div>
    </div>
    <div className="row education">
      <div className="min-width">
        <H3>Education:</H3>
      </div>
      <div>
        <P><strong>Western Governor&apos;s University</strong> - Bachelor&apos;s Degree, Software Development (In Progress)</P>
        <P><strong>Clark College</strong> - Associate&apos;s Degree, Information Technology</P>
        <P><strong>Tongue Point, Vocational Training</strong> - Computer and Information Sciences and Support Services.</P>
      </div>
    </div>
    <div className="row experience">
      <div className="min-width">
        <H3>Experience:</H3>
      </div>
      <div>
        <ul className="position-one"><li><strong>Software Developer</strong></li><li>KUBRA</li><li>Sep 2018 - Present</li></ul>
        <ul className="position-one"><li><strong>IT Director</strong></li><li>Entercom Portland</li><li>Sep 2015 - Jan 2019</li></ul>
        <ul className="position-one"><li><strong>Home Remodeling</strong></li><li>Logan&apos;s</li><li>Sep 2006 - Sep 2015</li></ul>
      </div>
    </div>
    <div className="row interest">
      <P className="interested"><strong>Interested in working with me?</strong></P>
    </div>
    <ContactButton onClick={() => history.push('/contact')}>Contact Me</ContactButton>
  </AboutStyles>
)

const { object } = PropTypes

About.propTypes = {
  history: object
}

export default About
