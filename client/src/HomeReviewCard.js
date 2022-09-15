import React from 'react'
import { Link } from 'react-router-dom'

function HomeReviewCard({review, user}) {
  
  // Can't get "completed" attribute to contain a falsy value?
  
  return (
  <div key={review.id} className="reviews">
    <h2>{review.game.title}</h2>
    <h3>{review.content}</h3>
    <h3>{review.completed ? "Completed" : "Did Not finish"}</h3>
    {/* <Link to={`/users/${user.id}`}> */}
      <h3><img src={review.user.avatar} className ="avatar" /> {review.user.username}</h3>
    {/* </Link> */}
    <h3>{review.created_at.slice(0,10)}</h3>
  </div>
  )
}

export default HomeReviewCard