
import { useState, useEffect, useReducer } from "react"

export default function Games() {

    const [games, setGames] = useState([])

    useEffect(()=>{
        fetch('/games').then(r=>r.json()).then(data=>setGames(data))
    }, [])

    useEffect(()=>{
        fetch('/test')
    }, [])

    const renderGames = games.map(game => {return <h1>{game.title}</h1>})


    return (
        <div>
            {renderGames}
        </div>
    )
}