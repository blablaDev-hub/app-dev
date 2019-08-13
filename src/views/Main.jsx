import React, { useEffect, useContext } from 'react';
import { Route } from "react-router-dom";
import { observer } from 'mobx-react'
import MainHeader from '../components/MainHeader'
import MainNav from '../components/MainNav'
import Sidebar from '../components/Sidebar'
import MainHistory from './MainHistory'
import MainProjects from './MainProjects'
import Store from '../store'

function Main({ history, match }) {
  const store = useContext(Store)

  useEffect(() => {
    store.checkSession()
      .then(res => {
        if (!res) {
          history.replace('/')
          return
        }
      })
  }, [])

  const handleLogOut = () => {
    store.logOut()
      .then(_ => {
        history.replace('/');
      })
  }

  return (
    <section className="route main">
      <MainHeader logOut={handleLogOut} />
      {store.user &&
        <div className="main__wrap">
          <Sidebar user={store.user} />

          <div className="main__content">
            <MainNav />

            <Route path={`${match.url}/history`} component={MainHistory} />
            <Route path={`${match.url}/projects`} component={MainProjects} />
          </div>
        </div>
      }
    </section>
  )
}

export default observer(Main)
