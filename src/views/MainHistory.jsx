import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import Store from '../store'
import ProjectUser from '../components/ProjectUser'
import ProjectReview from '../components/ProjectReview'

function MainHistory({ match }) {
  const store = useContext(Store)
  const { id } = match.params
  const { projects } = store.user
  const project = id && projects && projects.find(p => p.id == id)

  return (
    project
    ? <ProjectReview project={project} />
    : <div className="project-list">
        {projects
          ? projects.map(p => <ProjectUser project={p} key={p.id} />)
          : <h1 className="h__title">just a sec...</h1>
        }
      </div>
  )
}

export default observer(MainHistory)
