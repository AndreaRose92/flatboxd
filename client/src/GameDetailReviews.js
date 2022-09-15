import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import {HiThumbUp} from 'react-icons/hi'
import GameDetailComments from './GameDetailComments';

function GameDetailReviews({review, user}) {

  const [comments, setComments] = useState(review.comments)
  const [showComments, setShowComments] = useState(false)
  const [likes, setLikes] = useState([...review.likes])

  const sortedComments = comments.sort((a,b)=>b.id-a.id)


  let like = user ? likes.find(like => like.user_id === user.id) : null

  // Add a mouse hover effect with CSS to make it interact like a button
  function handleClick(){
    setShowComments(showComments => !showComments)
  }

  // Determine number of filled in stars to show
  function renderStarRating(rating){
    const likes = []
    for (let i = 0; i < rating; i++) {
      likes.push(<AiFillStar key={i}/>)
    }
    return likes
  }

  // Determine number of empty stars to show
  function renderEmptyStars(rating){
    const emptyStars = []
    for (let i = 0; i < 5-rating; i++) {
      emptyStars.push(<AiOutlineStar key={i} />)
    }
    return emptyStars
  }

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

  const [comment, setComment] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`/comments`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        comment_body: comment,
        user_id: user.id,
        review_id: review.id
      })
    })
      .then(r=>{
        if (r.ok) {
          r.json().then(newComment=>setComments(comments=>[...comments, newComment]))
        }
      })
    setComment('')
  }

  const likeButton = user ? like ? <button onClick={handleUnlike}>{`${likes.length} ❤️`}</button> : <button onClick={handleLike}>{`${likes.length} ♡`}</button> : <h3>{`${likes.length} ❤️`}</h3>

  const commentForm = user ? <form onSubmit={handleSubmit}><label htmlFor='comment'>Leave a Comment: <input type='text' name='comment' onChange={e=>setComment(e.target.value)} value={comment}/></label> <button type='submit'>Submit</button></form> : null

  return (
    <div className ="reviews">
      <h3>rating: {renderStarRating(review.rating)}{renderEmptyStars(review.rating)}</h3>
      <h3>{review.completed ? "Completed" : "Giver-upper :("}</h3>
      <h4>{review.content}</h4>
      {likeButton}
      <h3 onClick = {handleClick}>Comments: {comments.length}</h3>
      {showComments ? <GameDetailComments user={user} comments={sortedComments} setComments={setComments} reviewUser={review.user.id}/> : null}
      {commentForm}
		</div>
    )
}

export default GameDetailReviews