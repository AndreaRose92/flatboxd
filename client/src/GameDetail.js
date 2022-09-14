import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameDetailReviews from './GameDetailReviews'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function GameDetail({user}) {

	const params = useParams()
	const [game, setGame] = useState({})
	useEffect(()=> {
		fetch(`/games/${params.id}`)
			.then(r=>r.json())
			.then( displayGame => setGame(displayGame))
	},[params.id])
	
	const [reviews, setReviews] = useState([])
	useEffect(()=> {
		fetch(`/game_reviews/${params.id}`)
		.then(r=>r.json())
		.then( displayReviews => setReviews(displayReviews))
	},[params.id])
	
	const [content, setContent] = useState('')
	const [rating, setRating] = useState(0)
	const [completed, setCompleted] = useState(0)

	const handleCheck = () => {
		if (completed === 0 ) {
			setCompleted(true)
		} else {
			setCompleted(0)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		fetch('/reviews', {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				content,
				rating,
				completed,
				user_id: user.id,
				game_id: params.id
			})
		})
			.then(r=> {
				if (r.ok) {
					r.json().then(returnReview=>setReviews(reviews => [...reviews, returnReview]))
				}
			})
			
	}

	console.log(completed)

  return (
    <div>
			<img src={game.image_url} alt={game.title}/>
			<h1>{game.title}</h1>
			<h2>{game.genre}</h2>
			<h2>{game.platform}</h2>
			<form onSubmit={handleSubmit}>
				<h2>Leave a Review:</h2>
				<label htmlFor='content'>Content:
					<textarea name='content' onChange={e=>setContent(e.target.value)} value={content}/>
				</label><br/>
				<label htmlFor='rating'>Rating:
					<input type='number' name='rating' onChange={e=>setRating(e.target.value)} value={rating}/>
				</label><br/>
				<label htmlFor='completed'>Completed?
					{/* <input type='checkbox' name='completed' onChange={()=>setCompleted(completed => !completed)}/> */}
					<input type='checkbox' name='completed' onChange={handleCheck}/>
				</label><br/>
				<button type='submit'>Submit</button>
			</form>
			<h1>Reviews:</h1>
			{reviews.map((review) => <GameDetailReviews review={review}/>)}
		</div>
  )
}

export default GameDetail