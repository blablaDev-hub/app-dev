import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import Store from '../store'
import ProjectUser from '../components/ProjectUser'
import ProjectReview from '../components/ProjectReview'

function MainHistory({ match }) {
  const { user } = useContext(Store)
  const { id } = match.params
  const project = id && user.hasProjects && user.projects.find(p => p.id == id)

  return (
    project
    ? <ProjectReview project={project} />
    : <div className="project-list">
        {!user.projects
          ? <h1 className="h__title">just a sec...</h1>
          : user.hasProjects
            ? user.projects.map(p => <ProjectUser project={p} key={p.id} />)
            : <h1 className="h__title">start a new project!</h1>
        }
      </div>
  )
}

export default observer(MainHistory)
