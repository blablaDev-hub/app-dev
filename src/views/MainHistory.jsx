import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import Store from '../store'
import Project from '../components/Project'

function MainHistory({ match }) {
  console.log(match);

  const store = useContext(Store)
  const { projects } = store.user;
  return (
    <div className="main-history">
      {projects && projects.map(p => <Project project={p} key={p.id} />)}
    </div>
  )
}

export default observer(MainHistory)
