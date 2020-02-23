import { H3 } from '../components/typography'
import React, { useEffect, useState } from 'react'
import ProjectNav from '../components/ProjectNav'
import ProjectStyles from './styles/ProjectStyles'
import PropTypes from 'prop-types'
import projects from '../projects'

const Project = ({ match, history }) => {
  const [position, setPosition] = useState(parseInt(match.params.id, 10))

  const navigateLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    } else {
      setPosition(projects.length - 1)
    }
  }
  const navigateRight = () => {
    if (position < projects.length - 1) {
      setPosition(position + 1)
    } else {
      setPosition(0)
    }
  }

  useEffect(() => {
    history.push(`/projects/${position}`)
  }, [position])

  const currentProject = projects[position]
  return (
    <ProjectStyles>
      <div className="project">
        <div className="project-copy">
          <H3><strong>PROJECT NAME</strong></H3>
          <H3>{currentProject.projectName}</H3>
        </div>
        <div className="project-copy">
          <H3><strong>PROJECT TYPE</strong></H3>
          <H3>{currentProject.projectType}</H3>
        </div>
        <div className="project-copy">
          <H3><strong>DESCRIPTION</strong></H3>
          <H3>{currentProject.description}</H3>
        </div>
      </div>
      <div className="project-image">
        <a href={currentProject.link}>
          <img
            id="project-content"
            alt="This is a project that Doug Luce built."
            src={currentProject.imageUrl}
          />
        </a>
        {currentProject.link ? (
          <a id="project-link" href={currentProject.link}>View this project</a>
        ) : (
          <div className="spacing"></div>
        )}

        <div id="top-nav">
          <ProjectNav
            goLeft={navigateLeft}
            goRight={navigateRight}
            projectName={currentProject.projectName}
          />
        </div>
      </div>
    </ProjectStyles>
  )
}

const { object } = PropTypes

Project.propTypes = {
  history: object,
  match: object
}

export default Project
