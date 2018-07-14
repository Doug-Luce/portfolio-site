import React from 'react';
import { H2, H3 } from '../components/typography';
import styled from 'styled-components';
import * as palette from '../components/color';
import ProjectNav from '../components/ProjectNav';

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  min-height: 700px;
  padding-top: 3rem;
  padding-left: 5%;

  #top-nav {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1240px) {
    min-height: 910px;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 1rem;

    #top-nav {
      display: block;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
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
        <img  id="project-content" alt="This is a project that Doug Luce built."src={props.imageUrl} />
        <div id="top-nav">
          <ProjectNav  goLeft={goLeft} goRight={goRight} projectName={props.projectName} />
        </div>
      </div>
    </Section>
    <div id="bottom-nav">
      <ProjectNav goLeft={goLeft} goRight={goRight} projectName={props.projectName} />
    </div>
    </div>
  );
};

export default ProjectPage;