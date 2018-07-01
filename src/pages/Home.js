import React from "react";
import { H1, H2, P } from '../components/typography';
import HomeStyles from './styles/HomeStyles';
import ContactButton from '../components/ContactButton';

const Home = (props) => (
  <HomeStyles className="home-page  animated fadeIn">
    <div className="home-copy">
      <H1>Hi,<br/>
          I'm Doug,
          I’m a Software
          Developer.
      </H1>
      <H2>Full Stack, JavaScript, Node,
          React, Meteor, SQL, MongoDB,
          more…
      </H2>
      <P className="about-copy"> I’m currently seeking employment as a Web
          Developer, and this is my portfolio. Thanks for
          taking the time to look it over, and look at my
          projects. This portfolio showcases my development
          skills, and also my design skills.
      </P>

      <P className="about-copy"> I am currently completing my Bachelor’s degree in
          Software Development, and have also taught
          myself the majority of my programming skills. I
          look forward to hearing from you!
      </P>
      <ContactButton onClick={() => props.history.push('/contact')}>Contact Me</ContactButton>
    </div>
    <div className="right-column">
        <P> I’m currently seeking employment as a Web
            Developer, and this is my portfolio. Thanks for
            taking the time to look it over, and look at my
            projects. This portfolio showcases my Full-Stack
            skills, and also my design skills.
        </P>

        <P> I am currently completing my Bachelor’s degree in
            Software Development, and have also taught
            myself the majority of my programming skills. I
            look forward to hearing from you!
        </P>
      </div>
  </HomeStyles>

);

export default Home;
