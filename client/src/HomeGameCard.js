import React from 'react'
import { Link } from 'react-router-dom'

function HomeGameCard({game}) {
  return (
    <Link to={`/games/${game.id}`}>
        <img src ={game.image_url} alt = "video game"/>
    </Link>
  )
}

export default HomeGameCard