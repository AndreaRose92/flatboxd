import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomeContent from './HomeContent';
import NavBar from './NavBar';
import GameLibrary from './GameLibrary';
import Signup from './Signup';
import Login from './Login';
import UserProfile from './UserProfile';
import EditReview from './EditReview';
import GameDetail from './GameDetail';
// Styled Components
import { PageGrid, Margins, CenterColumn, ContentPadding } from './Styles/Grid.Styles';
import GlobalStyles from './GlobalStyles';
import About from './About';
import Logout from './Logout';
import NewGameForm from './NewGameForm';

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
  }
 
  // Update state of App/HomeContent when submitting review from GameDetail
  function updateReviewsMasterState(new_review){
    setReviews((reviews) => [...reviews, new_review])
  }

  function replaceUpdatedReview(new_review){
    let filterdReviews = reviews.filter(review => review.id !== new_review.id)
    filterdReviews.push(new_review)
    setReviews(filterdReviews)
  }

  function forceLogin() {
    if (!user) return history.push('/login')
  }
  

  return (
    <PageGrid>
      <GlobalStyles/>
      <Margins>
        <CenterColumn>
          <NavBar user={user} handleLogout={handleLogout} /> 
          <ContentPadding>  
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/games/new'>
                <NewGameForm user={user}/>
              </Route>
              <Route path ="/games/:id">
                <GameDetail
                  games = {games}
                  user={user}
                  updateReviewsMasterState={updateReviewsMasterState}
                />
              </Route>
              <Route path ="/games">
                <GameLibrary
                  games = {games}
                  user = {user}
                />
              </Route>
              <Route path = '/signup'>
                <Signup handleLogin={handleLogin} />
              </Route>
              <Route path = '/logout'>
                <Logout />
              </Route>
              <Route path = '/login'>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path='/:id/:review_id/edit'>
                <EditReview
                  replaceUpdatedReview={replaceUpdatedReview}
                />
              </Route>
              <Route path='/:id'>
                <UserProfile user={user} forceLogin={forceLogin}/>
              </Route>
              <Route exact path ="/">
                <HomeContent
                  games = {games}
                  reviews = {reviews}
                  user={user}
                />
              </Route>
            </Switch>
          </ContentPadding> 
        </CenterColumn>
      </Margins>
    </PageGrid>
  );
}

export default App;