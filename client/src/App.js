// import { useEffect, useState } from "react";
import './App.css';
import { Route, Switch, useParams, useHistory, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomeContent from './HomeContent';
import NavBar from './NavBar';
import GameLibrary from './GameLibrary';
import Signup from './test-components/Signup';
import Login from './test-components/Login';
import UserProfile from './test-components/UserProfile';
import Review from './test-components/Review';
import EditReview from './test-components/EditReview';

function App() {


  // Array of /reviews resource
  const [reviews, setReviews] = useState([])
  function fetchAllReviews() {
    fetch("/reviews")
    .then(response => response.json())
    .then(allReviews => setReviews(allReviews))
  }
  useEffect(()=> fetchAllReviews(),[])


  // Array of /games resource
  const [games, setGames] = useState([])
  function fetchAllGames() {
    fetch("/games")
    .then(response => response.json())
    .then(allGames => setGames(allGames))
  }
  useEffect(()=> fetchAllGames(),[])

 
  

  return (
    <div className='App'>
      <NavBar/>  
      <Switch>
        <Route exact path ="/games">
          <GameLibrary
            games = {games}
          />
        </Route>
        <Route exact path ="/">
          <HomeContent
            games = {games}
            reviews = {reviews}
          />
        </Route>
        <Route exact path = '/signup'>
          <Signup />
        </Route>
        <Route exact path = '/login'>
          <Login />
        </Route>
        <Route exact path='/:id'>
          <UserProfile />
        </Route>
        <Route exact path='/:id/:review_id'>
          <Review />
        </Route>
        <Route exact path='/:id/:review_id/edit'>
          <EditReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
