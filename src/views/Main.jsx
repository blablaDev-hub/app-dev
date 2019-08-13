import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react'
import MainNav from '../components/MainNav'
import Store from '../store'

function Main({ history }) {
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
      <MainNav logOut={handleLogOut} />
      {store.user && store.user.full_name}
    </section>
  )
}

export default observer(Main)
