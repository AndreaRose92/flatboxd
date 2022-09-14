// import { useEffect, useState } from "react";
import './App.css';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import HomePage from './test-components/HomePage';
import Signup from './test-components/Signup';
import Login from './test-components/Login';
import Games from './test-components/Games';
import UserProfile from './test-components/UserProfile';
import Review from './test-components/Review';
import EditReview from './test-components/EditReview';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/'>
          <HomePage />
        </Route>
        <Route exact path = '/signup'>
          <Signup />
        </Route>
        <Route exact path = '/login'>
          <Login />
        </Route>
        <Route exact path='/games'>
          <Games />
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
