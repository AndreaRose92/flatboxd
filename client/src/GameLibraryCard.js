import React from 'react'
import { Link } from 'react-router-dom'

function GameLibraryCard({games}) {
  
  return (
    <div>
      {games.map((game) => {
        return (
          <Link to={`/games/${game.id}`}>
            <img src={game.image_url} alt="video game" />
            {/* <p>{game.title}</p> */}
          </Link>
        )
      })}
    </div>
  )
}

export default GameLibraryCard