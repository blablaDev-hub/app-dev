import React, { useEffect, useContext } from "react";
import { observer } from 'mobx-react'
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
    store.user.logOut()
      .then(_ => {
        history.replace('/');
      })
  }

  return (
    <section className="main">
      {store.user && store.user.full_name}
      <button onClick={handleLogOut}>LOGOUT</button>
    </section>
  )
}

export default observer(Main)
