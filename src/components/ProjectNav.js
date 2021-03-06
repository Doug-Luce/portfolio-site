import React from 'react'
import styled from 'styled-components'
import { H2 } from './typography'
import PropTypes from 'prop-types'

const Button = styled.button`
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;
  padding: 1.3rem;
`

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  #left-button {
    background-image: url('https://res.cloudinary.com/lucedesign/image/upload/v1530406612/leftArrow_j0llne.svg');
  }
  #right-button {
    background-image: url('https://res.cloudinary.com/lucedesign/image/upload/v1530406951/rightArrow_hkrqdr.svg');
  }

  h2 {
    min-width: 430px;
    text-align: center;
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 5vw;
      min-width: 250px;
    }
  }
`

const ProjectNav = ({ projectName, goLeft, goRight }) => (
  <div>
    <Div>
      <Button id="left-button" onClick={goLeft} />
      <H2>{projectName}</H2>
      <Button id="right-button" onClick={goRight} />
    </Div>
  </div>
)

const { string, func } = PropTypes

ProjectNav.propTypes = {
  projectName: string,
  goLeft: func,
  goRight: func
}

export default ProjectNav
