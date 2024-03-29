import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import GameDetailComments from './GameDetailComments';

function UserReviewCard({review, user, handleDelete}) {

  const deleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(()=>handleDelete(review.id))
  }

  const history = useHistory()

  const [comments, setComments] = useState([...review.comments])
  const [showComments, setShowComments] = useState(false)
  const [likes, setLikes] = useState([...review.likes])

  const sortedComments = comments.sort((a,b)=>b.id-a.id)

  let like = user ? likes.find(like => like.user_id === user.id) : null

  function handleClick(){
    setShowComments(showComments => !showComments)
  }

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
    if (!user) {user = {id: 0}}
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
        } else {
          history.push('/unauthorized')
        }
      })
    setComment('')
  }

  const likeButton = user ? like ? <button onClick={handleUnlike}>{`${likes.length} ❤️`}</button> : <button onClick={handleLike}>{`${likes.length} ♡`}</button> : <h3>{`${likes.length} ❤️`}</h3>

  const commentForm = <form onSubmit={handleSubmit}><label htmlFor='comment'>Leave a Comment: <input type='text' name='comment' onChange={e=>setComment(e.target.value)} value={comment}/></label> <button type='submit'>Submit</button></form>

  console.log(review)

  return (
  <div className='reviews'>
    <h3>rating: {renderStarRating(review.rating)}{renderEmptyStars(review.rating)}</h3>
    <h3>{review.completed ? "Completed" : "Giver-upper :("}</h3>
    <h4>{review.content}</h4>
    {user && user.id === review.user.id ? <Link to={`/users/${user.id}/${review.id}/edit`}><button>Edit</button></Link> : null}
    {user && user.id === review.user.id ? <button onClick={deleteReview}>Delete</button> : null}
    {likeButton}
    <h3 onClick = {handleClick}>Comments: {comments.length}</h3>
    {showComments ? <GameDetailComments user={user} comments={sortedComments} setComments={setComments} reviewUser={review.user.id}/> : null}
    {commentForm}
    <h3><AiFillHeart/>{` ${review.likes.length} Comments: ${review.comments.length}`}</h3>
  </div>
  )
}

export default UserReviewCard
