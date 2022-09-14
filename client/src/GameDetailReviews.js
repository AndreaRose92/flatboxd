import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {HiThumbUp} from 'react-icons/hi'
import GameDetailComments from './GameDetailComments';

function GameDetailReviews({review}) {

  const [showComments, setShowComments] = useState(false) 


  // Add a mouse hover effect with CSS to make it interact like a button
  function handleClick(){
    setShowComments(showComments => !showComments)
  }


  // Determine number of filled in stars to show
  function renderStarRating(rating){
    const likes = []
    for (let i = 0; i < rating; i++) {
      likes.push(<AiFillStar/>)
    }
    return likes
  }

  // Determine number of empty stars to show
  function renderEmptyStars(rating){
    const emptyStars = []
    for (let i = 0; i < 5-rating; i++) {
      emptyStars.push(<AiOutlineStar/>)
    }
    return emptyStars
  }

  return (
    <div className ="reviews">
      <h3>rating: {renderStarRating(review.rating)}{renderEmptyStars(review.rating)}</h3>
      <h3>{review.completed ? "Completed" : "Giver-upper :("}</h3>
      <h4>{review.content}</h4>
      <h3 onClick = {handleClick}>Comments: {review.comments.length}</h3>
      {showComments ? <GameDetailComments comments={review.comments}/> : null}
      <h3><HiThumbUp/>{review.likes.length}</h3>
		</div>
    )
}

export default GameDetailReviews