import React from 'react'
import { Link } from 'react-router-dom'
import { GameLibraryGrid } from './Styles/Grid.Styles'

function GameLibraryCard({games}) {
  
  return (
      <GameLibraryGrid>
        {games.map((game) => {
          return (
            <Link to={`/games/${game.id}`} key={game.id}>
              <img src={game.image_url} alt="video game" />
            </Link>
          )
        })}
      </GameLibraryGrid>
  )
}

export default GameLibraryCard