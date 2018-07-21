import React from "react";
import { H1, H2, P } from '../components/typography';
import HomeStyles from './styles/HomeStyles';
import styled from 'styled-components';
import ContactButton from '../components/ContactButton';

const Div = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .mobile-contact {
    display: none;
    padding-top: 25px;
  }
  /* @media (max-width: 400px) {
    display: block;
  } */

  @media (max-width: 768px) {
    align-items: center;
    /* display: block; */
    flex-direction:column;
    padding-top: 0;
    .left, .right {
      padding: 0;
    }
    .home-contact {
      display:none;
    }
    .mobile-contact {
      display: flex;
    align-items: center;
    justify-content: center;
    }
  }
`;

const Home = (props) => (
  <HomeStyles className="home-page animated fadeIn">
  <Div>
    <div className="left">
      <H1>Hi,<br/>
          I'm Doug,
          I’m a Software
          Developer.
      </H1>
      <H2>JavaScript, Node,
          React, Meteor, SQL, MongoDB,
          more…
      </H2>
      <div className="home-contact">
        <ContactButton onClick={() => props.history.push('/#/contact')}>Contact Me</ContactButton>
      </div>
    </div>
    <div className="right">
      <P> I’m currently seeking employment as a Software
            Developer, and this is my portfolio. Thanks for
            taking the time to look it over, and look at my
            projects. I built this site using modern web development
            methods to showcase my skills, as well as a place
            for me to store projects that I build. It also showcases
            my sense of design. Thanks for taking a look!
      </P>

      {/* <P> I am currently completing my Bachelor’s degree in
            Software Development, and have also taught
            myself the majority of my programming skills. I
            look forward to hearing from you!
      </P> */}
      <P>I've completed my AAS and almost finished with my
        Bachelor’s degree in Software Development. I started
        my career in IT, and have spent 13+ years in that field.
        I decided that ultimately I want to build web applications
        professionally, and decided to spend my time learning it.</P>
      {/* <P>
        I've completed my AAS and almost finished with my
        Bachelor’s degree in Software Development. I started
        my career in IT, and have spent 13+ years in that field.
        I first started to program at a young age building scripts
        for a game engine. Later in high school I focused my time
        in C++ classes and a web building course. During my studies
        toward my AAS I learned and became proficient with Python,
        but decided that I really wanted to bulid web applications.
        From then on I studied Web Development on my own until
        deciding I need my Bachelor's degree.
      </P> */}
    </div>
    <div className="mobile-contact">
        <ContactButton onClick={() => props.history.push('/#/contact')}>Contact Me</ContactButton>
      </div>
  </Div>
  </HomeStyles>
);

export default Home;
