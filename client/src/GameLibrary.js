import React from 'react'
import GameLibraryCard from './GameLibraryCard'

function GameLibrary({games}) {
  
  const displayGames = games.map( (game) => <GameLibraryCard game = {game}/>)

  return (
    <div>
        {displayGames}
    </div>
  )
}

export default GameLibrary