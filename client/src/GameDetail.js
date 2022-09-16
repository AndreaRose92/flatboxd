import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import GameDetailReviews from './GameDetailReviews'
import { GameDetailGrid, GameDetailRows } from './Styles/Grid.Styles'
import { GameDetailHeader } from './Styles/HeaderText.Styles'


function GameDetail({user, updateReviewsMasterState}) {

	const history = useHistory()
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
		setContent('')
		setRating(0)
		setCompleted(0)
		if (user) {
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
					r.json().then(returnReview=>{
						setReviews(reviews => [...reviews, returnReview])
						updateReviewsMasterState(returnReview)
					})
				}
			})
		} else {
			history.push('/unauthorized')
		}
		setContent('')
		setRating(0)
		setCompleted(0)
		e.target.reset()
	}

	const sortedReviews = [...reviews].sort((a,b)=> b.id - a.id)

	const renderGameReviews = sortedReviews.map((review) => <GameDetailReviews user={user} review={review} key={review.id} />)

  return (
    <GameDetailRows>
		<GameDetailGrid>
			<GameDetailHeader>
				<h1 className='title'>{game.title}</h1>
				<img src={game.image_url} alt={game.title}/>
				<div>
					<h1>Genre:</h1>
					<h2>{game.genre}</h2>
					<h1>Platform:</h1>
					<h2>{game.platform}</h2>
					<h1>Average Rating:</h1>
					<h2>{game.average_rating} stars</h2>
				</div>
			</GameDetailHeader>
			<form onSubmit={handleSubmit}>
				<h2>Leave a Review:</h2>
				<label htmlFor='content'>Content:</label><br/>
					<textarea name='content' onChange={e=>setContent(e.target.value)} value={content}/><br/>
				<label htmlFor='rating'>Rating:</label><br/>
					<input type='number' name='rating' onChange={e=>setRating(e.target.value)} value={rating}/><br/>
				<label htmlFor='completed'>Completed?
					<input type='checkbox' name='completed' onChange={handleCheck}/>
				</label><br/>
				<button type='submit'>Submit</button>
			</form>
		</GameDetailGrid>
			<h1>Reviews:</h1>
			{renderGameReviews}
	</GameDetailRows>
  )
}

export default GameDetail