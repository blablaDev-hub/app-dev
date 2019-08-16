import React from 'react'
import { NavLink } from 'react-router-dom';
import Assignment from '@material-ui/icons/Assignment'
import OpenInNew from '@material-ui/icons/OpenInNew'
import Code from '@material-ui/icons/Code'

function ProjectNew({ project }) {
  return (
    <div className="project">
      <h3
        className="project__title"
        title={project.name}
      >
        {project.name}
      </h3>
      <p className="h__icon-copy" title={project.description}>
        <Assignment /> {project.description}
      </p>

      <div className="project__topics-wrap">
        {project.topics.map((t, i) => <span className="project__topic" key={i}>{t}</span> )}
      </div>

      <a
        href={project.html_url}
        target="_blank"
        title="open on gitHub"
        className="project__link project__link--top"
      >
        <OpenInNew />
      </a>

      <NavLink
        to={`/app/projects/${project.id}`}
        title="project details"
        className="project__link project__link--bottom"
      >
        <Code />
      </NavLink>
    </div>
  )
}

export default ProjectNew
