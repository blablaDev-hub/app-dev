import React from 'react'
import logo from '../assets/img/logo-dark.png'
import LastPage from '@material-ui/icons/LastPage'

function MainNav({ logOut }) {
  return (
    <nav className="nav">
      <img
        src={logo}
        alt="bbDev logo"
        className="nav__logo"
      />

      <button
        onClick={logOut}
        className="btn btn--nav"
      >
        <LastPage />
      </button>
    </nav>
  )
}

export default MainNav
