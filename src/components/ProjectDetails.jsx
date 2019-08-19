import React from 'react'
import Markdown from 'markdown-to-jsx'
import 'github-markdown-css'
import { observer } from 'mobx-react'

function ProjectDetails({ project }) {
  if (!project.readme) project.getProjectReadMe()

  return (
    <div className="project-details">
      <div className="project-details__actions">
        <h1 className="project-details__title">{project.name}</h1>
        <small className="project-details__description">{project.description}</small>

        <button
          onClick={project.startProject}
          className="btn project-details__start"
          disabled={project.disabled}
        >start</button>
      </div>

      <div className="markdown-body">
        <Markdown>{project.readme || `## fetching readme.md, just a sec..`}</Markdown>
      </div>
    </div>
  )
}

export default observer(ProjectDetails)
