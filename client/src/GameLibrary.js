import React, { useState } from 'react'
import GameLibraryCard from './GameLibraryCard'
import GameSearch from './GameSearch'

function GameLibrary({games}) {
  
  // const displayGames = games.map((game) => <GameLibraryCard game={game} />)

  const [ searchString, setSearchString ] = useState("")

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(searchString.toLowerCase())
  })

  return (
    <div>

        <GameSearch searchString={searchString} onSearchChange={setSearchString} />

        {/* {displayGames} */}
        <GameLibraryCard games={filteredGames} />
        

    </div>
  )
}

export default GameLibrary