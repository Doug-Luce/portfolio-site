import { H3 } from '../components/typography'
import React from 'react'
import ProjectNav from '../components/ProjectNav'
import ProjectStyles from '../pages/styles/ProjectStyles'

const ProjectPage = ({ props, goLeft, goRight }) => {
  return (
    <ProjectStyles>
      <div className="project">
        <div className="project-copy">
          <H3><strong>PROJECT NAME</strong></H3>
          <H3>{props.projectName}</H3>
        </div>
        <div className="project-copy">
          <H3><strong>PROJECT TYPE</strong></H3>
          <H3>{props.projectType}</H3>
        </div>
        <div className="project-copy">
          <H3><strong>DESCRIPTION</strong></H3>
          <H3>{props.description}</H3>
        </div>
      </div>
      <div className="project-image">
        <a href={props.link}><img id="project-content" alt="This is a project that Doug Luce built."src={props.imageUrl} /></a>
        {props.link ? (
          <a id="project-link" href={props.link}>View this project</a>
        ) : (
          <div className="spacing"></div>
        )}

        <div id="top-nav">
          <ProjectNav goLeft={goLeft} goRight={goRight} projectName={props.projectName} />
        </div>
      </div>
    </ProjectStyles>
  )
}

export default ProjectPage
