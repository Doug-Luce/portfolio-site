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
        <P><strong>Interested in working with me?</strong></P>
        <ContactButton>Contact Me</ContactButton>
    </AboutStyles>
);

export default About;