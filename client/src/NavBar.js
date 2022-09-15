import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavGrid } from './Styles/Grid.Styles'

function NavBar({user, handleLogout}) {
  
  
  return (
    <NavGrid>
        <h1>FLATBOXD</h1>
        <NavLink path to ="/">Home</NavLink>
        <NavLink path to ="/games">Games</NavLink>
        {user ? <button onClick={handleLogout}>Logout</button> :<NavLink path to ="/login">Login</NavLink>}
        {user ? <NavLink to={`/${user.id}`}>My Profile</NavLink> : <NavLink path to ="/signup">Signup</NavLink>}
        <NavLink path to ="/">About</NavLink>
    </NavGrid>
  )
}

export default NavBar