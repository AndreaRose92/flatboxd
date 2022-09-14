import React from 'react'

function HomeGameCard({game}) {
  return (
    <div>
        <img src ={game.image_url} alt = "video game"/>
    </div>
  )
}


export default HomeGameCard