import React, { useContext } from "react"
import Store from '../store'

const Auth = ({ history, location }) => {
  const code = location.search.split('=').pop()
  const store = useContext(Store)

  if (!code) {
    history.replace('/')
    return null
  }

  store.authUser(code)
    .then(res => {
      if (res) {
        setTimeout(() => {
          history.replace('/app', res.data)
        }, 2000)
      }
    })

  return (
    <section className="route auth">
      <h2 className="auth__copy">
      successful auth! you're being redirected to the app
      </h2>

      <img src={require('../assets/img/bg-auth.png')} alt="bbDev equation"/>
    </section>
  )
}

export default Auth
