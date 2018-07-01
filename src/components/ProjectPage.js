import React from 'react';
import { dump } from '../helpers';
import { H2, H3 } from '../components/typography';
import styled from 'styled-components';
import * as palette from '../components/color';
import ProjectNav from '../components/ProjectNav';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  large: '1240px',
  mediumLarge: '1000px',
  small: '560px'
});

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  min-height: 700px;
  padding-top: 3rem;
  padding-left: 5%;

  img {
    width: 100%;
    height: auto;
  }

  ${customMedia.lessThan("large")`
    min-height: 910px;
  `};

  ${customMedia.lessThan("mediumLarge")`
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 1rem;
  `};

  ${customMedia.lessThan("small")`
  `};
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
        <img src={props.imageUrl} />
      </div>

    </Section>
      <ProjectNav goLeft={goLeft} goRight={goRight} projectName={props.projectName} />
    </div>
  );
};

export default ProjectPage;