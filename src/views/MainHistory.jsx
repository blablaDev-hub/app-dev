import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import Store from '../store'
import Project from '../components/Project'
import ProjectReview from '../components/ProjectReview'

function MainHistory({ match }) {
  const store = useContext(Store)
  const { id } = match.params
  const { projects } = store.user
  const project = id && projects ? projects.find(p => p.id == id) : null

  return (
    project
    ? <ProjectReview project={project} />
    : <div className="project-list">
        {projects && projects.map(p => <Project project={p} key={p.id} />)}
      </div>
  )
}

export default observer(MainHistory)
