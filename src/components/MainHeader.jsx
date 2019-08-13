import React from 'react'
import logo from '../assets/img/logo-dark.png'
import LastPage from '@material-ui/icons/LastPage'

function MainHeader({ logOut }) {
  return (
    <header className="main-header">
      <img
        src={logo}
        alt="bbDev logo"
        className="main-header__logo"
      />

      <button
        onClick={logOut}
        className="btn btn--main-header"
        title="log out"
      >
        <LastPage />
      </button>
    </header>
  )
}

export default MainHeader
