import React from 'react'
import { NavLink } from 'react-router-dom'

function MainNav({ match }) {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav__link" activeClassName="main-nav__link--active" to="/app/history">history</NavLink>
      <NavLink className="main-nav__link" activeClassName="main-nav__link--active" to="/app/projects">projects</NavLink>
    </nav>
  )
}

export default MainNav
