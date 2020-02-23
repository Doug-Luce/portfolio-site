import React from 'react'
import { H1, H2, P } from '../components/typography'
import HomeStyles from './styles/HomeStyles'
import styled from 'styled-components'
import ContactButton from '../components/ContactButton'
import PropTypes from 'prop-types'

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
    .left h1 {
      font-size: 3rem;
    }
    .mobile-contact {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const Home = ({ history }) => (
  <HomeStyles className="home-page animated fadeIn">
    <Div>
      <div className="left">
        <H1>Hi, I&apos;m Doug, <br /> I&apos;m a Fullstack Developer.
        </H1>
        <H2>JavaScript, Node, React,
          Java, Spring, MySQL, AWS,
          and more…
        </H2>
        <div className="home-contact">
          <ContactButton onClick={() => history.push('/contact')}>Contact Me</ContactButton>
        </div>
      </div>
      <div className="right">
        <P> Based in Phoenix, Arizona. A skilled fullstack developer eager about building excellent software and improving my craft. Experience building large SaaS products that reach millions of users with mission-critical applications.
        </P>
        <P> Passionate about building fast, fluid UI experiences that are user-focused and accessible. Just as passionate about software design and building rigorously tested microservices.
        </P>
      </div>
      <div className="mobile-contact">
        <ContactButton onClick={() => history.push('/contact')}>Contact Me</ContactButton>
      </div>
    </Div>
  </HomeStyles>
)

const { object } = PropTypes

Home.propTypes = {
  history: object
}

export default Home
