import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {HiThumbUp} from 'react-icons/hi'
import GameDetailComments from './GameDetailComments';

function GameDetailReviews({review, user}) {

  const [showComments, setShowComments] = useState(false)
  const [likes, setLikes] = useState([...review.likes])

  let like = user ? likes.find(like => like.user_id === user.id) : null

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

  console.log(likes)

  const handleLike = () => {
    if (user) {
    fetch('/likes', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        user_id: user.id,
        review_id: review.id
      })
    })
      .then(r=>{
        if (r.ok) {r.json().then(newLike=>setLikes(likes => [...likes, newLike]))}}
    )} else {
			alert("Log in to like or unlike a review.")
		}
  }

  const handleUnlike = () => {
    if (user) {
      // let like = likes.find(like => like.user_id === user.id)
      fetch(`/likes/${like.id}`, {method: "DELETE"})
        .then(()=>setLikes(likes=>likes.filter(l=>l.id !== like.id)))
    } else {
        alert("Log in to like or unlike a review.")
    }
  }

  // const likeButton = () => {
  //   if (user) {
  //   // let like = likes.find(like => like.user_id === user.id)
  //   user && like ? <button onClick={handleLike}>❤️</button> : <button onClick={handleUnlike}>♡</button>
  //   }
  // }



  return (
    <div className ="reviews">
      <h3>rating: {renderStarRating(review.rating)}{renderEmptyStars(review.rating)}</h3>
      <h3>{review.completed ? "Completed" : "Giver-upper :("}</h3>
      <h4>{review.content}</h4>
      <h3 onClick = {handleClick}>Comments: {review.comments.length}</h3>
      {showComments ? <GameDetailComments comments={review.comments}/> : null}
      {like ? <button onClick={handleUnlike}>❤️</button> : <button onClick={handleLike}>♡</button>}
      <h3>{likes.length}</h3>
		</div>
    )
}

export default GameDetailReviews