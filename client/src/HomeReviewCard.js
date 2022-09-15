import React from 'react'
import { Link } from 'react-router-dom'
import { HomeReviewCardStyling } from './Styles/Card.Styles'
import {AiFillHeart} from 'react-icons/ai'

function HomeReviewCard({review, user}) {
    
  return (
  <HomeReviewCardStyling>
      <img className="game" src={review.game.image_url} alt="reviewed game"/>
      <Link className='title' to ={`/games/${review.game.id}`}>
        {review.game.title}
      </Link>
      <h3 className='content'>{review.content}</h3>
      <h3 className='completed'>{review.completed ? "Completed" : "Did Not Finish"}</h3>

      <Link className ="profile"to={`/${review.user.id}`}>
        <img src={review.user.avatar} className ="avatar" />
      </Link>
      <Link className ="profileName"to={`/${review.user.id}`}>
        <h4>by: {review.user.username}</h4>
      </Link>
      <h3 className='created'>{review.created_at.slice(0,10)}</h3>
      <h3 className="reviewStats">{review.likes.length} <AiFillHeart/> Comments: {review.comments.length}</h3>
      {/* <h3 className="likes"><AiFillHeart/> { review.likes.length}</h3> */}

  </HomeReviewCardStyling>
  )
}

export default HomeReviewCard