import React from 'react';
import styled from 'styled-components';
import { H2 } from './typography';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  large: '1240px',
  mediumLarge: '1000px',
  small: '560px'
});

const Button = styled.button`
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;
  padding: 1.3rem;
`;

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
    min-width: 250px;
    text-align: center;
  }
  ${customMedia.lessThan("small")`
    h2 {
      font-size: 5vw;
      min-width: 250px;
    }
  `};
`;

const Contain = styled.div`

`;

const ProjectNav = (props) => (
  <Contain>
    <Div>
      <Button id="left-button" onClick={props.goLeft} />
      <H2>{props.projectName}</H2>
      <Button id="right-button" onClick={props.goRight} />
    </Div>
  </Contain>
);

export default ProjectNav;