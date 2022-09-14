import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
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

  // Setting logged in user
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  const history = useHistory()
  function handleLogout() {
    setUser(null);
    fetch('/logout', {
      method: "DELETE"
    })
      .then(()=>history.push('/login'))
  }
 
  

  return (
    <div className='App'>
      <NavBar user={user} handleLogout={handleLogout} />  
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
            user={user}
          />
        </Route>
        <Route exact path = '/signup'>
          <Signup />
        </Route>
        <Route exact path = '/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path='/:id'>
          <UserProfile user={user} />
        </Route>
        <Route exact path='/:id/:review_id'>
          <Review user={user} />
        </Route>
        <Route exact path='/:id/:review_id/edit'>
          <EditReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
