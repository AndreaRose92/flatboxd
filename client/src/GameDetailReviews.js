import React from 'react'

function GameDetailReviews({review}) {
  return (
    <div className ="reviews">
      <h3>rating: {review.rating}</h3>
      <h3>{review.completed ? "Completed" : "Giver-upper :("}</h3>
      <h4>{review.content}</h4>
      <h3>Comments: {review.comments.length}</h3>
      <h3>Like(s): {review.likes.length}</h3>
		</div>
    )
}

export default GameDetailReviews