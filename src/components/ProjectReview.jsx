import React from 'react'
import { observer } from 'mobx-react';
import Markdown from 'markdown-to-jsx'
import format from 'date-fns/format';
import Star from '@material-ui/icons/Star'
import BugReport from '@material-ui/icons/BugReport'
import DateRange from '@material-ui/icons/DateRange'
import 'github-markdown-css'
import ProjectInvite from './ProjectInvite'

function ProjectReview({ project }) {
  const start = format(project.start, 'DD/MM/YYYY')
  const end = project.end ? format(project.end, 'DD/MM/YYYY') : null

  return (
    <div className="project-review">
      <h1 className="project-review__title">{project.name}</h1>
      <small className="project-review__description">{project.description}</small>
      <div className="project-review__scores">
        {project.invite && <ProjectInvite invite={project.invite} title="accept invite" />}
        <p
          className="h__icon-copy"
          title="score"
        >
          <Star /> {project.points}
        </p>
        <p
          className="h__icon-copy"
          title="review count"
        >
          <BugReport /> {project.review_count} / 3
        </p>
        <p
          className="h__icon-copy"
          title={`${project.start} ${project.end ? (' - ' + project.end) : ''}`}
        >
          <DateRange /> {start} {end && `- ${end}`}
        </p>
      </div>

      <div className="markdown-body">
        <Markdown>{project.review || `## still in review, come back later!`}</Markdown>
      </div>
    </div>
  )
}

export default observer(ProjectReview)
