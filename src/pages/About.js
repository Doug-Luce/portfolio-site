import React from "react";
import {  H2, H3, P } from '../components/typography';
import AboutStyles from './styles/AboutStyles';
import ContactButton from '../components/ContactButton';

const About = () => (
  <AboutStyles className="about-page">
    <div className="mobile-portrait">
      <img alt="round self portrait of Doug Luce" className="column portrait" src="http://res.cloudinary.com/lucedesign/image/upload/v1529958549/Portrait_nrffzr.png" />
    </div>
    <div className="row top-row">
      <div className="column-two-thirds">
        <H2>Hello, my name is <span>Doug</span>.<br /> I'm a Software Developer<br /> living in Portland, OR.</H2>
      </div>
      <div className="column-one-third portrait">
        <img alt="round self portrait of Doug Luce" className="column portrait" src="http://res.cloudinary.com/lucedesign/image/upload/v1529958549/Portrait_nrffzr.png" />
      </div>
    </div>
    <div className="row">
      <div className="column-one-third">
        <H3>About:</H3>
      </div>
        <div className="column-two-thirds">
          <P>I currently work as an IT Manger for Entercom Communications,
                and working on finishing my Bachelor's degree in Software Development. I have a voracious thirst for all things
                programming, and love spending time learning new skills, and building new projects.</P>
          <P>Outside of work I enjoy the company of my wife and son. We like to enjoy the outdoors as much as we can, and camp
              often. I can also be found tinkering, making things, perfectings a cup of coffee, gaming, or of course programming.
          </P>
        </div>
      </div>
      <div className="row">
        <div className="column-one-third">
          <H3>Education:</H3>
        </div>
        <div className="column-two-thirds education">
          <P><strong>Western Governor's University</strong> - Bachelor's Degree, Software Development (In Progress)</P>
          <P><strong>Clark College</strong> - Associate's Degree, Information Technology</P>
          <P><strong>Tongue Point, Vocational Training</strong> - Computer and Information Sciences and Support Services.</P>
        </div>
      </div>
    <div className="row">
      <div className="column-one-third">
        <H3>Experience:</H3>
      </div>
      <div className="column-two-thirds">
        <ul><li><strong>IT Manager</strong></li><li>Entercom Portland</li><li>Nov 2015 - Present</li></ul>
        <ul><li><strong>Computer Support Specialist</strong></li><li>Vivageek</li><li>Nov 2007 - Oct 2015</li></ul>
      </div>
    </div>
    <div className="row">
      <P className="interested"><strong>Interested in working with me?</strong></P>
    </div>
    <div className="row">
      <ContactButton>Contact Me</ContactButton>
    </div>
  </AboutStyles>
);

export default About;