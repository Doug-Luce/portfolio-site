import * as palette from '../../components/color';
import styled from 'styled-components';

const ProjectStyles = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 3rem;
  padding-top: 3rem;
  padding-left: 5%;

  #project-link {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Jura;
    color: ${palette.black};
    font-size: 1.5rem;
  }

  .project {
    max-width: 50rem;
    padding-right: 5rem;
  }

  .project-copy {
    line-height: 30px;
    margin-bottom: 2rem;
    max-width: 30rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  .spacing {
    height: 29px;
    width: 1px;
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

export default ProjectStyles;