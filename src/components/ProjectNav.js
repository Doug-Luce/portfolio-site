import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-image: url('https://res.cloudinary.com/lucedesign/image/upload/v1530406612/leftArrow_j0llne.svg');
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;
  padding: 1.3rem;
  &#right-button {
    background-image: url('https://res.cloudinary.com/lucedesign/image/upload/v1530406951/rightArrow_hkrqdr.svg');
  }
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ProjectNav = (props) => (
  <Div>
    <Button onClick={props.goLeft} />
    <p>{props.projectName}</p>
    <Button id="right-button" onClick={props.goRight} />
  </Div>
);

export default ProjectNav;