import React from 'react'
import HomeGameCard from './HomeGameCard'
import HomeReviewCard from './HomeReviewCard'

function HomeContent({games, reviews}) {

  // sort the array of games based on the number of reviews (most to least)
  const popularGames = [...games].sort( (a,b) => b.reviews.length - a.reviews.length)
  const displayPopularGames = popularGames.map( (game) => <HomeGameCard game={game} key={game.id} />)

  // sort the array of reviews based on largest id (newest) to smallest id (oldest) 
  const recentReviews = [...reviews].sort( (a,b) => b.id - a.id)
  const displayRecentReviews = recentReviews.map( (review) => <HomeReviewCard key={review.id} review={review}/>)


  return (

    <div>
      <h1>Popular Games</h1>
      {displayPopularGames}

      <h1>Latest Reviews</h1>
      {displayRecentReviews}
    </div>
  )
}


export default HomeContent