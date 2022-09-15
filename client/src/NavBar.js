import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { NavGrid } from './Styles/Grid.Styles'
import { NavStyles } from './Styles/Nav.Styles'

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
    <NavStyles>
      <NavGrid >
          <h1>FLATBOXD</h1>
          <NavLink exact to ="/">Home</NavLink>
          <NavLink exact to ="/games">Games</NavLink>
          {user ? <button onClick={onLogout}>Logout</button> :<NavLink exact to ="/login">Login</NavLink>}
          {user ? <NavLink to={`/${user.id}`}>My Profile</NavLink> : <NavLink exact to ="/signup">Signup</NavLink>}
          <NavLink exact to ="/">About</NavLink>
      </NavGrid>
    </NavStyles>
  )
}

export default NavBar