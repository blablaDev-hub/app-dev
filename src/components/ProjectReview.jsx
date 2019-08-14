import React from 'react'
import Markdown from 'markdown-to-jsx'
import format from 'date-fns/format';
import Star from '@material-ui/icons/Star'
import BugReport from '@material-ui/icons/BugReport'
import DateRange from '@material-ui/icons/DateRange'
import 'github-markdown-css'

function ProjectReview({ project }) {
  const start = format(project.start, 'DD/MM/YYYY')
  const end = project.end ? format(project.end, 'DD/MM/YYYY') : null

  return (
    <div className="project-details">
      <h1 className="project-details__title">{project.name}</h1>
      <small className="project-details__description">{project.description}</small>
      <div className="project-details__scores">
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
        <Markdown>{project.review || `# still in review, come back later!`}</Markdown>
      </div>
    </div>
  )
}

export default ProjectReview
