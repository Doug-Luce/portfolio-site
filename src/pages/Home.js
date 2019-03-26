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
        <ContactButton onClick={() => props.history.push('/contact')}>Contact Me</ContactButton>
      </div>
    </div>
    <div className="right">
      <P> I’m currently employed as a Software
            Developer, working on large scale products and
            for the utility industry. I reside in the Phoenix, AZ
            and I'm always up for helping with challenging technical
            problems.
      </P>
      <P> With 13+ years in the IT industry, I bring a wealth of knowledge
        of how technical systems work together. I currently have 5 years of
        experience doing freelance web development, and a couple years of
        experience working with a large team of developers. </P>
    </div>
    <div className="mobile-contact">
        <ContactButton onClick={() => props.history.push('/contact')}>Contact Me</ContactButton>
      </div>
  </Div>
  </HomeStyles>
);

export default Home;
