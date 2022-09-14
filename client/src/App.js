import logo from './logo.svg';
import './App.css';
import { Route, Switch, useParams, useHistory, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomeContent from './HomeContent';
import NavBar from './NavBar';
import GameLibrary from './GameLibrary';

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
    <div>
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
      </Switch>
      
    </div>

  );
}

export default App;
