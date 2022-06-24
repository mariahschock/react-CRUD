import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route>
            <CreatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
