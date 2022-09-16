import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavGrid } from './Styles/Grid.Styles'
import { NavStyles } from './Styles/Nav.Styles'

function NavBar({user, handleLogout}) {

  const onLogout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
      .then(()=>handleLogout())
  }

  return (
    <NavStyles>
      <NavGrid >
        <h1>FLATBOXD</h1>
        <NavLink exact to ="/">Home</NavLink>
        <NavLink exact to ="/games">Games</NavLink>
        {user ? <NavLink exact to="/logout" onClick={onLogout}>Logout</NavLink> :<NavLink exact to ="/login">Login</NavLink>}
        {user ? <NavLink to={`/users/${user.id}`}>My Profile</NavLink> : <NavLink exact to ="/signup">Signup</NavLink>}
        <NavLink exact to ="/about">About</NavLink>
      </NavGrid>
    </NavStyles>
  )
}

export default NavBar