import React from 'react'
import { Link } from 'react-router-dom'
import HomeGameCard from './HomeGameCard'
import HomeReviewCard from './HomeReviewCard'
import { HomeRows, LatestReviewsGrid, PopularGamesGrid } from './Styles/Grid.Styles'
import { HomeStyles } from './Styles/HeaderText.Styles'

function HomeContent({games, reviews, user}) {

  // sort the array of games based on the number of reviews (most to least)
  const popularGames = [...games].sort( (a,b) => b.reviews.length - a.reviews.length)
  const displayPopularGames = popularGames.slice(0,10).map( (game) => <HomeGameCard game={game} key={game.id} />)

  // sort the array of reviews based on largest id (newest) to smallest id (oldest) 
  const recentReviews = [...reviews].sort( (a,b) => b.id - a.id)
  const displayRecentReviews = recentReviews.slice(0,5).map( (review) => <HomeReviewCard key={review.id} review={review} user={user} />)


  return (
  <HomeRows>
    <HomeStyles>
      <h1>HOME</h1>
      <h2>Popular Games</h2>
      <PopularGamesGrid>
        {displayPopularGames}
      </PopularGamesGrid>
      <h2>Latest Reviews</h2>
      <LatestReviewsGrid>
        {displayRecentReviews}
      </LatestReviewsGrid>
      <Link to='/games/new'>Submit a New Game</Link>
      </HomeStyles>
  </HomeRows>
  )
}


export default HomeContent