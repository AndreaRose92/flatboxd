import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { NavGrid } from './Styles/Grid.Styles'

function NavBar({user, handleLogout}) {

  const history = useHistory()
  
  const onLogout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
      // .then(r=>r.json())
      .then(()=>handleLogout())
      .then(()=>history.push('/'))
  }

  return (
    <NavGrid>
        <h1>FLATBOXD</h1>
        <NavLink path to ="/">Home</NavLink>
        <NavLink path to ="/games">Games</NavLink>
        {user ? <button onClick={onLogout}>Logout</button> :<NavLink path to ="/login">Login</NavLink>}
        {user ? <NavLink to={`/${user.id}`}>My Profile</NavLink> : <NavLink path to ="/signup">Signup</NavLink>}
        <NavLink path to ="/">About</NavLink>
    </NavGrid>
  )
}

export default NavBar