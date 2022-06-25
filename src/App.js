import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/create">Add New Song</Link>
            </li>
            <li>
              <Link to="/songs/1">Update a Song</Link>
            </li>
            <li>
              <Link to="/songs">List of Your Songs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/songs">
            <ListPage />
          </Route>
          <Route exact path ="/create">
            <CreatePage />
          </Route>
          <Route exact path="/songs:id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
