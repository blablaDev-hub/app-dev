import React from "react";

const Auth = () => {
  return (
    <main className="auth">
      <div className="auth__login-box">
        <h1 className="atuh__copy">login with GitHub</h1>
        <a
          href="https://github.com/login/oauth/authorize?scope=read:user,repo:invite&client_id=9169882d6bdee7419193" className="auth__link"
        >
          <img
            src={require('./../assets/img/logo-github-black.png')}
            alt="github oAuth"
          />
        </a>
      </div>

      <img
        className="auth__img"
        src={require('./../assets/img/bg-main.png')}
        alt="bbDev roadmap"
        sizes=""
      />
    </main>
  )
}

export default Auth
