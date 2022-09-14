import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameDetailReviews from './GameDetailReviews'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function GameDetail() {

	const params = useParams()
	const [game, setGame] = useState({})
	const [reviews, setReviews] = useState([])


  useEffect(()=> {
		fetch(`/games/${params.id}`)
			.then(r=>r.json())
			.then( displayGame => setGame(displayGame))
	},[])

	useEffect(()=> {
		fetch(`/game_reviews/${params.id}`)
			.then(r=>r.json())
			.then( displayReviews => setReviews(displayReviews))
	},[])

	console.log(reviews)


  return (
    <div>
			<img src={game.image_url}/>
			<h1>{game.title}</h1>
			<h2>{game.genre}</h2>
			<h2>{game.platform}</h2>
			<h1>Reviews:</h1>
			{reviews.map((review) => <GameDetailReviews review={review}/>)}
		</div>
  )
}

export default GameDetail