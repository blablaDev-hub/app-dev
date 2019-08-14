import React from 'react'
import format from 'date-fns/format';
import { NavLink } from 'react-router-dom';
import Star from '@material-ui/icons/Star'
import BugReport from '@material-ui/icons/BugReport'
import DateRange from '@material-ui/icons/DateRange'
import OpenInNew from '@material-ui/icons/OpenInNew'
import Code from '@material-ui/icons/Code'

function Project({ project }) {
  const start = format(project.start, 'DD/MM/YYYY')
  const end = project.end ? format(project.end, 'DD/MM/YYYY') : null

  return (
    <div className="project">
      <h3
        className="project__title"
        title={project.name}
      >
        {project.name}
      </h3>
      <p className="h__icon-copy" title="score">
        <Star /> {project.points}
      </p>
      <p className="h__icon-copy" title="review count">
        <BugReport /> {project.review_count} / 3
      </p>
      <p
        className="h__icon-copy"
        title={`${project.start} ${project.end ? (' - ' + project.end) : ''}`}
      >
        <DateRange /> {start} {end && `- ${end}`}
      </p>

      <a
        href={project.html_url}
        target="_blank"
        title="open on gitHub"
        className="project__link project__link--top"
      >
        <OpenInNew />
      </a>

      <NavLink
        to={`/app/history/${project.id}`}
        title="project details"
        className="project__link project__link--bottom"
      >
        <Code />
      </NavLink>
    </div>
  )
}

export default Project
