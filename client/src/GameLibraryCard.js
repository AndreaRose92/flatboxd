import React from 'react'

function GameLibraryCard({game}) {
  return (
    <div>
        <img src={game.image_url} alt="video game"/>
    </div>
  )
}

export default GameLibraryCard