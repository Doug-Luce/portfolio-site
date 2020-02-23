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
        <H1>Hi,<br/>
          I&apos;m Doug,
          I&apos;m a Software
          Developer.
        </H1>
        <H2>JavaScript, Node,
          React, Meteor, SQL, MongoDB,
          more…
        </H2>
        <div className="home-contact">
          <ContactButton onClick={() => history.push('/contact')}>Contact Me</ContactButton>
        </div>
      </div>
      <div className="right">
        <P> I&apos;m a Phoenix-based technology evangelist with years in the industry including experience as a Fullstack developer. I have a proven track record of
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
