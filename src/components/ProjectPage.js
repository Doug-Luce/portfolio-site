import React from 'react';
import { dump } from '../helpers';
import { H2, H3 } from '../components/typography';
import styled from 'styled-components';
import * as palette from '../components/color';
import ProjectNav from '../components/ProjectNav';

const Section = styled.section`
  display: flex;
  padding-left:12rem;
  padding-top: 3rem;
`;


const ProjectInfoStyles = styled.div`
  max-width: 40rem;

  h3 {
    color: ${palette.lightGrey};
    font-size: 1.3rem;
    padding-bottom: 1rem;
  }
`;

const ProjectPage = ({props, goLeft, goRight}) => {
  return(
    <div>
    <Section>
      {console.log(props)}
      <ProjectInfoStyles>
        <H2>{props.projectName}</H2>
        <H3>PROJECT NAME</H3>
        <H2>{props.projectType}</H2>
        <H3>PROJECT TYPE</H3>
        <H2>{props.category}</H2>
        <H3>CATEGORY</H3>
        <H2>{props.description}</H2>
        <H3>DESCRIPTION</H3>
      </ProjectInfoStyles>
      <div>
        <img src={props.imageUrl} />
      </div>

    </Section>
      <ProjectNav goLeft={goLeft} goRight={goRight} projectName={props.projectName} />
    </div>
  );
};

export default ProjectPage;