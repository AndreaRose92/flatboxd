import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink path to ="/">Home</NavLink>
        <NavLink path to ="/games">Games</NavLink>
        <NavLink path to ="/login">Login</NavLink> 
        <NavLink path to ="/signup">Signup</NavLink> 
    </div>
  )
}

export default NavBar