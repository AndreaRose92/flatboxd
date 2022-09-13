// import { useEffect, useState } from "react";
import '../App.css';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';
import Games from './Games';
import UserProfile from './UserProfile';


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
      </Switch>
    </div>
  );
}

export default App;
