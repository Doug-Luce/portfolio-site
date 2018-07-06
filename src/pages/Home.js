import React from "react";
import { H1, H2, P } from '../components/typography';
import HomeStyles from './styles/HomeStyles';
import styled from 'styled-components';
import ContactButton from '../components/ContactButton';

const Div = styled.section`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 9rem;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction:column;
    padding-top: 0;
    .left, .right {
      padding: 0;
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
      <H2>Full Stack, JavaScript, Node,
          React, Meteor, SQL, MongoDB,
          more…
      </H2>
      <div>
        <ContactButton onClick={() => props.history.push('/contact')}>Contact Me</ContactButton>
      </div>
    </div>
    <div className="right">
      <P> I’m currently seeking employment as a Web
            Developer, and this is my portfolio. Thanks for
            taking the time to look it over, and look at my
            projects. This portfolio showcases my development
            skills, and also my design skills.
      </P>

      <P> I am currently completing my Bachelor’s degree in
            Software Development, and have also taught
            myself the majority of my programming skills. I
            look forward to hearing from you!
      </P>
    </div>
  </Div>
  </HomeStyles>
);

export default Home;
