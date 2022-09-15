import React from 'react'
import { Link } from 'react-router-dom'

function HomeGameCard({game}) {
  return (
    <div>
        <Link to={`/games/${game.id}`}><img src ={game.image_url} alt = "video game"/></Link>
    </div>
  )
}

export default HomeGameCard