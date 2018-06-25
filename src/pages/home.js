import React from "react";
import { H1, H2, P } from '../components/typography';
import HomeStyles from './styles/HomeStyles';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';

const Home = () => (
  <HomeStyles className="home-page">
    <div className="home-copy">
      <H1>Hi,<br/>
          I am Doug,
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
          projects. This portfolio showcases my Full-Stack
          skills, and also my design skills.
      </P>

      <P className="about-copy"> I am currently completing my Bachelor’s degree in
          Software Development, and have also taught
          myself the majority of my programming skills. I
          look forward to hearing from you!
      </P>
      <ContactButton>Contact Me</ContactButton>
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