import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import Store from '../store';
import ProjectNew from '../components/ProjectNew'

function MainProjects({ match }) {
  const store = useContext(Store)
  const { id } = match.params
  const { projects } = store

  return (
    <div className="project-list">
      {projects
        ? projects.map(p => <ProjectNew key={p.id} project={p} />)
        : <h1 className="h__title">just a sec...</h1>
      }
    </div>
  )
}

export default observer(MainProjects)
