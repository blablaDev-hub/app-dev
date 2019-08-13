import React, { useContext } from "react"
import Store from '../store'

const Welcome = ({ history }) => {
  const store = useContext(Store)

  store.checkUser()
    .then(res => {
      if (res) {
        history.replace('/app')
      }
    })
    .catch(console.error)

  return (
    <main className="welcome">
      <div className="welcome__login-box">
        <h1 className="welcome__copy">login with GitHub</h1>
        <a
          href="https://github.com/login/oauth/authorize?scope=read:user,repo:invite&client_id=9169882d6bdee7419193" className="welcome__link"
        >
          <img
            src={require('./../assets/img/logo-github-black.png')}
            alt="github oAuth"
          />
        </a>
      </div>

      <img
        className="welcome__img"
        src={require('../assets/img/bg-main.png')}
        alt="bbDev roadmap"
        sizes=""
      />
    </main>
  )
}

export default Welcome
