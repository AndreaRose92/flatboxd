import React from 'react'
import { Link } from 'react-router-dom'

function UserReviewCard({review, user, handleDelete}) {
  
  // Can't get "completed" attribute to contain a falsy value?

  const deleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(()=>handleDelete(review.id))
  }

  return (
  <div key={review.id}>
    <h2>{review.game.title}</h2>
    <h3>{review.content}</h3>
    <h3>{review.completed ? "Completed" : "Did Not finish"}</h3>
    <h3>{review.created_at.slice(0,10)}</h3>
    {user && user.id === review.user.id ? <Link to={`/${user.id}/${review.id}/edit`}><button>Edit</button></Link> : null}
    {user && user.id === review.user.id ? <button onClick={deleteReview}>Delete</button> : null}
  </div>
  )
}

export default UserReviewCard