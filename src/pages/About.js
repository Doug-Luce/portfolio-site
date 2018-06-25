import React from "react";
import { H1, H2, H3, P } from '../components/typography';
import AboutStyles from './styles/AboutStyles';
import ContactButton from '../components/ContactButton';

const About = () => (

    <AboutStyles>
        <img className="portrait" src="http://res.cloudinary.com/lucedesign/image/upload/v1529958549/Portrait_nrffzr.png" />
        <H2>Hello, my name is Doug. I'm a Software Developer living in Portland, OR.</H2>
        <H3>About:</H3>
        <P>I currently work as an IT Manger for Entercom Communications,
             and working on finishing my Bachelor's degree in Software Development. I have a voracious thirst for all things
             programming, and love spending time learning new skills, and building new projects.</P>
        <P>Outside of work I enjoy the company of my wife and son. We like to enjoy the outdoors as much as we can, and camp
            often. I can also be found tinkering, making things, perfectings a cup of coffee, gaming, or of course programming.
        </P>
        
        <H3>Education:</H3>
        <P><strong>Western Governor's University</strong> - Bachelor's Degree, Software Development (In Progress)</P>
        <P><strong>Clark College</strong>Associate's Degree, Information Technology</P>
        <P><strong>Tongue Point - Vocational Training</strong>Computer and Information Sciences and Support Services.</P>
        <H3>Experience:</H3>
        <ul><li><strong>IT Manager</strong></li><li>Entercom Portland</li><li>Nov 2015 - Present</li></ul>
        <ul><li><strong>Computer Support Specialist</strong></li><li>Vivageek</li><li>Nov 2007 - Oct 2015</li></ul>
        <ContactButton>Contact Me</ContactButton>
        <P><strong>Interested in working with me?</strong></P>
    </AboutStyles>
);

export default About;