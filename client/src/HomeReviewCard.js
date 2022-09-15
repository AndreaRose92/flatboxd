import React from 'react'
import { Link } from 'react-router-dom'

function HomeReviewCard({review, user}) {
  
  return (
  <div className="reviews">
    <h2>{review.game.title}</h2>
    <h3>{review.content}</h3>
    <h3>{review.completed ? "Completed" : "Did Not finish"}</h3>
    <Link to={`/${review.user.id}`}>
      <h3><img src={review.user.avatar} className ="avatar" alt={review.user.username} /> {review.user.username}</h3>
    </Link>
    <h3>{review.created_at.slice(0,10)}</h3>
  </div>
  )
}

export default HomeReviewCard