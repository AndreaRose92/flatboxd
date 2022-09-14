import React from 'react'

function HomeReviewCard({review}) {
  
  // Can't get "completed" attribute to contain a falsy value?
  
  return (
  <div key={review.id}>
    <h2>{review.game.title}</h2>
    <h3>{review.content}</h3>
    <h3>{review.completed ? "Completed" : "Did Not finish"}</h3>
    <h3>{review.user.username}</h3>
    <h3>{review.created_at.slice(0,10)}</h3>
  </div>
  )
}

export default HomeReviewCard