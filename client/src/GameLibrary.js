import React, { useState } from 'react'
import GameLibraryCard from './GameLibraryCard'
import GameSearch from './GameSearch'
import { LibraryRows } from './Styles/Grid.Styles'
import { LibraryStyles } from './Styles/HeaderText.Styles'


function GameLibrary({games}) {

  const [ searchString, setSearchString ] = useState("")

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(searchString.toLowerCase())
  })

  return (
    <LibraryRows>
      <LibraryStyles>
        <h1>LIBRARY</h1>
      </LibraryStyles>
      <GameSearch searchString={searchString} onSearchChange={setSearchString} />
      <GameLibraryCard games={filteredGames} />
    </LibraryRows>
  )
}

export default GameLibrary