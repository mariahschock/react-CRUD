import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';
import { logout } from './services/fetch-utils';

import './App.css';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogOutClick() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <h1>Song Track</h1>
      <p>A place to store songs you like</p>
      <div className="routing-page">
        <nav>
          <div className="links">
            <Link to="/"></Link>
           
            <Link to="/create">Add New Song</Link>
            
            <Link to="/songs/1">Update a Song</Link>
            
            <Link to="/songs">List of Your Songs</Link>
            
            
            {user &&
          <button onClick={handleLogOutClick}>Logout</button>}
          </div>
        </nav>
        

        <Switch>
          <Route exact path="/">
            {
              !user
                ? <AuthPage setUser={setUser}/>
                : <Redirect to="songs" />
            }
          </Route>
          <Route exact path="/songs">
            {
              user
                ? <ListPage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path ="/create">
            {
              user
                ? <CreatePage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/songs:id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
