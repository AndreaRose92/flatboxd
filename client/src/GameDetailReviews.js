import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar, AiFillHeart } from 'react-icons/ai';
import { useHistory, Link } from 'react-router-dom';
import GameDetailComments from './GameDetailComments';
import { HomeReviewCardStyling } from './Styles/Card.Styles';

function GameDetailReviews({review, user}) {

  const history = useHistory()

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
			history.push('/unauthorized')
		}
  }

  const handleUnlike = () => {
    if (user) {
      // let like = likes.find(like => like.user_id === user.id)
      fetch(`/likes/${like.id}`, {method: "DELETE"})
        .then(()=>setLikes(likes=>likes.filter(l=>l.id !== like.id)))
    } else {
      history.push('/unauthorized')
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

  const likeButton = like ? <button onClick={handleUnlike}>{likes.length}<AiFillHeart/></button> : <button onClick={handleLike}>{`${likes.length} ♡`}</button>

  const commentForm = <form onSubmit={handleSubmit}><label htmlFor='comment'>Leave a Comment: <input type='text' name='comment' onChange={e=>setComment(e.target.value)} value={comment}/></label> <button type='submit'>Submit</button></form>

  return (

    <HomeReviewCardStyling>
      <img className="game" src={review.game.image_url} alt="reviewed game"/>
      <Link className='title' to ={`/games/${review.game.id}`}>
      {renderStarRating(review.rating)}{renderEmptyStars(review.rating)}
      </Link>
      <h3 className='content'>{review.content}</h3>
      <h3 className='completed'>{review.completed ? "Completed" : "Did Not Finish"}</h3>

      <Link className ="profile"to={`/users/${review.user.id}`}>
        <img src={review.user.avatar} className ="avatar" alt="user avatar"/>
      </Link>
      <Link className ="profileName"to={`/users/${review.user.id}`}>
        <h4>by: {review.user.username}</h4>
      </Link>
      <h3 className='created'>{review.created_at.slice(0,10)}</h3>
      <h3 className="reviewStats" onClick = {handleClick} >{likeButton} Comments: {review.comments.length}</h3>
      {showComments ? <><GameDetailComments user={user} comments={sortedComments} setComments={setComments} reviewUser={review.user.id}/>{commentForm}</> : null}
    </HomeReviewCardStyling>

    )
}

export default GameDetailReviews