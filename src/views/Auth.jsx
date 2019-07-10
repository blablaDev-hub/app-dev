import React from "react";
import { authUser } from '../api'

const Auth = ({ history, location }) => {
  const code = location.search.split('=').pop()

  if (!code) {
    history.replace('/')
    return null
  }

  authUser(code)
    .then(res => {
      if(res.success) {
        setTimeout(() => {
          history.replace('/app', res.data)
        }, 3000);
      }
    })

  return (
    <section className="auth">
      <h2 className="auth__copy">
      successful auth! you're being redirected to the app
      </h2>

      <img src={require('../assets/img/bg-auth.png')} alt="bbDev equation"/>
    </section>
  )
}

export default Auth
