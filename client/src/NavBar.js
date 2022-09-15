import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({user, handleLogout}) {
  
  return (
    <div>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/games">Games</NavLink>
        {user ? <button onClick={handleLogout}>Logout</button> :<NavLink to ="/login">Login</NavLink>}
        {user ? <NavLink to={`/${user.id}`}>My Profile</NavLink> : <NavLink to ="/signup">Signup</NavLink>}
    </div>
  )
}

export default NavBar